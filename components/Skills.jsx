import SkillContent from './SkillContent';
import classes from './Skills.module.css'

const skills = [
  {image: '/skills/html.png', name: 'HTML 5' },
  {image: '/skills/css.png', name: 'CSS 3' },
  {image: '/skills/javascript.png', name: 'JavaScript' },
  {image: '/skills/tailwind.png', name: 'Tailwind CSS' },
  {image: '/skills/reactjs.png', name: 'React JS' },
  {image: '/skills/next.jpeg', name: 'Next JS' },
  {image: '/skills/redux.png', name: 'Redux' },
  {image: '/skills/type.png', name: 'TypeScript'},
  {image: '/skills/nodejs.png', name: 'Node JS' },
  {image: '/skills/expressjs.png', name: 'Express JS' },
  {image: '/skills/mongodb.png', name: 'MongoDB' },
  {image: '/skills/mongoose.png', name: 'Mongoose' },
  {image: '/skills/git.png', name: 'Git' },
  {image: '/skills/github.png', name: 'GitHub' },
]

const tools = [
  {image: '/tools/vscode.png', name: 'VS Code'},
  {image: '/tools/ChatGPT.png', name: 'ChatGPT'},
  {image: '/tools/chrome.png', name: 'Chrome'},
  {image: '/tools/mongodbCompass.png', name: 'Mongodb Compass'},
  {image: '/tools/postman.png', name: 'Postman'},
]
const Skills = () => {
  return (
    <div className={`container ${classes.skillWrapper}`}>
      <h2 className={classes.heading}>Skills</h2>
      <ul className={classes.skillsList}>
        {skills.map(({image, name}) => (
          <SkillContent key={image} image={image} name={name} />
        ))}
      </ul>

        <p className={classes.label}>tools and software</p>
      <ul className={classes.skillsList}>
        {tools.map(({image, name}) => (
          <SkillContent key={image} image={image} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;