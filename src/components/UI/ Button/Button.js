const Button = ({title, clickHandler}) => {
    return (
        <>
            <button onClick={clickHandler}>{title}</button>
        </>
    );
}

export default Button;
