import StackCard from "./StackCard";
import StartingContent from "./StartingContent";
import classes from './About.module.css'
const stacks = [
  {image: '/web.png', text: 'Web Developer'},
  {image: '/frontend.png', text: 'React Developer'},
  {image: '/backend.png', text: 'Backend Developer'},
  {image: '/fullStack.png', text: 'Full Stack Developer'},
]
const About = () => {
  return (
    <section className={`container ${classes.about}`} id="about" >
      <StartingContent label='Introduction' heading='overwiew.'>
        I&#39;m a skilled software developer with experience in JavaScript, and expertise in frameworks like <span style={{fontWeight: '800', color: '#b6b0d6'}}>React, Node.js, Express.js and MongoDB</span>. I&apos;m a quick learner and collaborate closely with clients to create <span style={{fontWeight: 800, color: '#b6b0d6'}}>efficient, scalable, and user-friendly</span> solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
      </StartingContent>
      <main className={classes.cardList}>
        {stacks.map(({image, text}) => (
          <StackCard key={text} image={image}>
            {text}
          </StackCard>
        ))}
      </main>
    </section>
  );
};

export default About;