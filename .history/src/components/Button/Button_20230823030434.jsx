import './Button.css';
const Button = () => {
    return (
        <button
        {...rest}
        className={isOutline ? styles.outline_btn : styles.primary_btn}
      >
        {icon}
        {text}
      </button>
    );
};

export default Button;