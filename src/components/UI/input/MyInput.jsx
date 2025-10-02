import classes from './MyInput.module.css';
const MyInput = ({...props}) => {
    console.log('MyInput rendered');
    console.log('props:', props.test.testCallBack(123));
  return (
    <input className={classes.myInput} {...props}/>
  );
}
export default MyInput;