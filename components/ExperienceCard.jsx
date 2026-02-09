import Image from "next/image";
import classes from "./ExperienceCard.module.css";

const ExperienceCard = ({
  heading,
  stack,
  date,
  points,
  icon,
  side,
}) => {
  return (
    <li className={`${classes.item} ${classes[side]}`}>
      {/* ICON ON LINE */}
      <div className={classes.iconWrapper}>
        <Image width={50} height={50} alt={heading} src={icon} className={classes.iconImage} />
      </div>

      {/* CARD */}
      <div className={classes.card}>
        <h1 className={classes.heading}>{heading}</h1>
        <p className={classes.stack}>{stack}</p>

        <ul className={classes.points}>
          {points.map((point, index) => (
            <li key={index} className={classes.singlePoint}>
              {point}
            </li>
          ))}
        </ul>
        <p className={classes.date}>{date}</p>
      </div>
    </li>
  );
};

export default ExperienceCard;
