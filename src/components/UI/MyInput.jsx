import classes from './MyInput.module.css';
const MyInput = ({...props}) => {
    console.log('MyInput rendered');
  return (
    <input className="myInput" {...props}/>
  );
}
export default MyInput;