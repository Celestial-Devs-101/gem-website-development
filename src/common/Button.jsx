function Button({ children }) {
  return (
    <button
      className="
      bg-amber-500
      hover:bg-amber-400
      transition-all
      duration-300
      px-8
      py-4
      rounded-xl
      font-semibold
      shadow-lg
      hover:-translate-y-1
      "
    >
      {children}
    </button>
  );
}

export default Button;