import classes from './MyButton.module.css';
const MyButton = ({ children, ...props }) => {
    console.log('MyButton rendered');
  return (
    <button className={classes.myBtn} {...props}>
        {children}
    </button>
  );
}
export default MyButton;