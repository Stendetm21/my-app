import classes from './MyInput.module.css';
const MyInput = ({...props}) => {
    console.log('MyInput rendered');
  return (
    <input className={classes.myInput} {...props}/>
  );
}
export default MyInput;