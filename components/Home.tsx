import Cube from "./Cube";
import FaultyTerminal from "./FaultyTerminal";

export default function Home() {
  return (
    <section className="home home-with-bg" id="home">
      <div className="home-bg">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#41b06e"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.3}
        />
      </div>

      {/* Foreground */}
      <div className="home-content">
        <h1>
          Hi, It&apos;s <span>Adil Haneef</span>
        </h1>

        <h3 className="text-animation">
          I&apos;m a <span />
        </h3>

        <p>
          Hi! I&apos;m Adil Haneef M K, a Computer Science student at GEC
          Thrissur with a passion for web development and cybersecurity.
        </p>

        <p>
          I am always looking to learn and build cool things. If you&apos;re
          interested in collaborating or just want to connect, feel free to
          reach out!
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/A0D1I2L3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github" />
          </a>

          <a
            href="https://leetcode.com/u/A0D1I2L3/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-code-alt" />
          </a>

          <a
            href="https://play.picoctf.org/users/A0D1I2L3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-bug-alt" />
          </a>

          {/* ArtStation */}
          <a
            href="https://braincubed.artstation.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="ArtStation"
            title="ArtStation"
          >
            <i className="bx bx-palette" />
          </a>
        </div>

        <div className="btn-group">
          <a
            href="https://www.linkedin.com/in/adil-h-666957290/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Hire
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>

      {/* Cube always above background */}
      <div className="cube-wrap">
        <Cube />
      </div>
    </section>
  );
}
