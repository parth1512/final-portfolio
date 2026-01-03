import React from 'react'
import pp from '../assets/imgs/pp.png'
import './Hero.css'
import ConnectButton from './ConnectButton';
import TextReveal from './TextReveal';

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
      <div className="hero-container">

        <TextReveal className="greet">Hola! i am parth</TextReveal>
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
