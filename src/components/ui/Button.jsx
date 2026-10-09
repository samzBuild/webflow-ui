const Button = ({ text, variant = "purple" }) => {
  const variation = {
    purple: "bg-primary text-white",
    black: "text-neutral-500",
  };
  return (
    <button className={`rounded-md px-8 py-2 text-md ${variation[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
