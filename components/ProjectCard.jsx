import Image from "next/image";
import classes from "./ProjectCard.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
const ProjectCard = ({
  liveLink,
  githubLink,
  preview,
  title,
  description,
  stack,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.links}>
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub"
        >
          <FaGithub />
        </Link>
        <Link
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View live demo"
        >
          <FaExternalLinkAlt />
        </Link>
      </div>
      <div className={classes.cardImage}>
        <Image alt={title} src={preview} width={120} height={120} priority />
      </div>
      <div className={classes.cardContent}>
        <h2 className={classes.cardTitle}>{title}</h2>
        <p className={classes.description}>{description}</p>
        <div className={classes.stack}>
          {stack.split(" ").map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
