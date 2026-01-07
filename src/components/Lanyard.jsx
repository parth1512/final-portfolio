

/* eslint-disable react/no-unknown-property */
'use client';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer, Html, useProgress } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// replace with your own imports, see the usage snippet for details
// replace with your own imports, see the usage snippet for details
import { getAssetUrl } from '../utils/assets';
const cardGLB = getAssetUrl('lanyard/card.glb');
const lanyard = getAssetUrl('lanyard/lanyard.png');

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

// Configurable Props for Lanyard Positioning
export default function Lanyard({
  position = [0, 0, 0],        // Camera Position [x, y, z]
  gravity = [0, -40, 0],         // Physics Gravity
  fov = 15,                      // Camera Field of View
  transparent = true,
  lanyardPosition = [0, 0.4, 0], // Anchor Position: [x, y, z]. Increase 'y' (middle number) to move the top of the lanyard higher.
  isFlipped = false, // Controls 180 degree rotation for "About"
  ambientLightIntensity = Math.PI, // Default ambient light
  envIntensity = 0.15, // Multiplier for environment lights
  meshRotation = [0, 0, 0], // Additional rotation for the card inner mesh
  cardScale = [1, 1, 1], // Scale multiplier: [width, height, depth]
  cableOffset = [0, 1.5, 0] // Offset for where the cable attaches to the card: [x, y, z]
}) {
  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
      >
        <ambientLight intensity={ambientLightIntensity} />
        <Suspense fallback={<CanvasLoader />}>
          <Physics gravity={gravity} timeStep={1 / 60}>
            <Band position={lanyardPosition} isFlipped={isFlipped} meshRotation={meshRotation} cardScale={cardScale} cableOffset={cableOffset} />
          </Physics>
          <Environment blur={0.5}>
            <Lightformer intensity={1 * envIntensity} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={100 * envIntensity} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3 * envIntensity} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={12 * envIntensity} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}
function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="model-loader">
        <div className="loader-ring" />
        <p className="loader-text">Loading {Math.round(progress)}%</p>
      </div>
    </Html>
  );
}
function Band({ maxSpeed = 50, minSpeed = 0, position = [0, 0, 0], isFlipped = false, meshRotation = [0, 0, 0], cardScale = [1, 1, 1], cableOffset = [0, 1.5, 0] }) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef(),
    visualRef = useRef(); // Ref for the inner visual group

  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyard);

  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 1024
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], cableOffset]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));

      // Add continuous rotation
      rot.copy(card.current.rotation());
      if (!isFlipped) {
        rot.y += delta * 0.5; // Rotate only if not flipped (About mode)
      }
      card.current.setNextKinematicRotation(rot);

      // Smoothly flip the visual card mesh
      // Smoothly flip the visual card mesh
      if (visualRef.current) {
        // Apply X and Z from props (static), animate Y (dynamic)
        visualRef.current.rotation.x = meshRotation[0];
        visualRef.current.rotation.z = meshRotation[2];

        visualRef.current.rotation.y = THREE.MathUtils.damp(
          visualRef.current.rotation.y,
          isFlipped ? meshRotation[1] + Math.PI : meshRotation[1],
          4,
          delta
        );
      }
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[position[0], 4 + position[1], position[2]]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            ref={visualRef}
            scale={[2.25 * cardScale[0], 2.25 * cardScale[1], 2.25 * cardScale[2]]}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>

            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.9} metalness={0.8} />
            </mesh>

            {/* Preserve the Clip and Clamp from the original model */}
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
