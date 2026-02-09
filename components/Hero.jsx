import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`container ${classes.hero}`} id="home">
      {/* Profile Image */}
      <div className={classes.imageWrapper}>
        <div className={classes.imageBorder}>
          <Image
            src='/myImage.png'
            alt="Usman Nadiry"
            width={230}
            height={230}
            className={classes.profileImg}
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className={classes.content}>
        {/* Vertical line + dot */}
        <div className={classes.indicator}>
          <span className={classes.dot}></span>
          <span className={classes.line}></span>
        </div>

        <div className={classes.text}>
          <h1>
            Hi, I&apos;m <span className={classes.name}>Usman Nadiry</span>
          </h1>

          <p>
            I develop Full Stack Web Applications, using{" "}
            <span className={classes.stack}>MERN Stack</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
