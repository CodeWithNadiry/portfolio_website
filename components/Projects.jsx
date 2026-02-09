import { projects } from '@/data/projectsData';
import classes from './Projects.module.css'
import StartingContent from './StartingContent';
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <div id='work' className={`container ${classes.projects}`}>
      <StartingContent label='MY WORK' heading='Projects.'>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </StartingContent>
      <main className={classes.projectsList}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </main>
    </div>
  );
};

export default Projects;