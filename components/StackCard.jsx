import Image from "next/image";
import classes from "./StackCard.module.css";
const StackCard = ({ image, children }) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Image src={image} width={70} height={70} alt={`${children} image`} className={classes.img} />
      </div>
      <h3 className={classes.text}>
        {children}
      </h3>
    </div>
  );
};

export default StackCard;
