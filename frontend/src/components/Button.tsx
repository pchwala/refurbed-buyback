interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  const handleClick = () => {
    console.log(`${children} clicked`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
