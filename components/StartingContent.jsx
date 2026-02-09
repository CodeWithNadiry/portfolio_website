import classes from './StartingContent.module.css'
const StartingContent = ({label, heading, children}) => {
  return (
    <div className={classes.content}>
      <p className={classes.label}>{label}</p>
      <h1 className={classes.heading}>{heading}</h1>
      <p className={classes.text}>{children}</p>
    </div>
  );
};

export default StartingContent;