function Card({ children }) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-8
      shadow-sm
      hover:shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-2
      border
      border-slate-100
      "
    >
      {children}
    </div>
  );
}

export default Card;