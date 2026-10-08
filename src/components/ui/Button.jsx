const Button = ({ text, variant = "purple" }) => {
    const variation = {
        purple: "bg-primary text-white",
        black: "text-neutral-500"
    }
  return <button className={`px-6 py-2 rounded-md ${variation[variant]}`}>
    {text}
  </button>;
};

export default Button;
