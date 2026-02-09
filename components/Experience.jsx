import experiences from "@/data/experienceData";
import classes from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className={`container ${classes.experience}`}>
      <p className={classes.label}>What I have done so far</p>
      <h1 className={classes.heading}>Work Experience.</h1>

      <ul className={classes.experienceList}>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            {...experience}
          />
        ))}
      </ul>
    </div>
  );
};

export default Experience;