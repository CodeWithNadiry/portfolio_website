import Image from "next/image";
import classes from "./SkillContent.module.css";
const SkillContent = ({ image, name }) => {
  return (
    <li className={classes.content}>
      <Image
        src={image}
        width={60}
        height={60}
        alt="skill image"
        className={classes.skillImage}
      />
      <p className={classes.skillName}>{name}</p>
    </li>
  );
};

export default SkillContent;
