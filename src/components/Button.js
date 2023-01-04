const Button = ({ text, status, func }) => {
    const styleObj = {
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: status ? "green" : "red",
        color: "white",
        border: "1px solid white"
    }
    return (
        <button style={styleObj} onClick={func}>
            {text}
        </button>
    );
}





export default Button;