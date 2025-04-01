import './../styles/logo.css';


const Logo = ({size}) => {
    return (
        <h1 className={`${size == "small" ? "small" : size == "medium" ? "medium" : "large"}`}>STREN<span className='colored-letter'>X</span></h1>
    )
};

export default Logo;