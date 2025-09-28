const TestComponent = ({ props1, props2, props3, onTest }) => {
    console.log(props1, props2, props3);
    return (
        <div onClick={() => onTest()} style={{ border: '1px solid black', padding: '10px', marginTop: '20px', cursor: 'pointer', color: 'blue' }}>
            <div>props1{props1}</div>
            <div>props2{props2}</div>
            <div>props3{props3}</div>
        </div>
    );
}
export default TestComponent;