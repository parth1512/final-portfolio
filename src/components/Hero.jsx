import React from 'react'
import './Hero.css'
import ConnectButton from './ConnectButton';
import TextReveal from './TextReveal';
import Lanyard from './Lanyard';

const Hero = () => {
  const [text, setText] = React.useState("build");

  const words = ["design ", " create", "innovate"]; // Words to cycle through
  let index = 0;

  React.useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length; // Increment index and loop through words
      setText(words[index]);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="hero">
      <div className="hero-two-column">
        {/* Left Column - Text Content */}
        <div className="hero-left">
          <TextReveal className="greet">Hola! I am parth</TextReveal>

          <div className="details">
            <p className="details-text">
              I <span className="col">{text}</span> AI-first, seamless user interfaces and digital experiences that solve real problems with clarity and intent.
            </p>
          </div>

          <div className="hero-cta-container">
            <ConnectButton layoutId="connect-button" />
          </div>
        </div>

        {/* Right Column - Lanyard */}
        <div className="hero-right">
          <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} fov={20} />
        </div>
      </div>
    </div>
  )
}

export default Hero

/* BACKUP - ORIGINAL CODE FOR EASY REVERT:
import React from 'react'
import pp from '../assets/imgs/pp.png'
import './Hero.css'
import ConnectButton from './ConnectButton';
import TextReveal from './TextReveal';

const Hero = () => {
  const [text, setText] = React.useState("build");

  const words = ["design ", " create", "innovate"];
  let index = 0;

  React.useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setText(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-container">
        <TextReveal className="greet">Hola! I am parth</TextReveal>
      </div>
      <div className="details">
        <p className="details-text">
          I <span className="col">{text}</span> seamless user interface, websites and create intuitive <br></br>experiences for the digital world.
        </p>
      </div>

      <div className="hero-cta-container">
        <ConnectButton layoutId="connect-button" />
      </div>
    </div>
  )
}

export default Hero
*/
