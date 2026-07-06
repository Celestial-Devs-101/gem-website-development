import { Link } from "react-router-dom";

function SecondaryButton({
  to,
  children,
}) {
  return (
    <Link
      to={to}
      className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        border
        border-white/20
        px-8
        py-4
        font-semibold
        text-white
        transition
        duration-300
        hover:bg-white
        hover:text-slate-950
      "
    >
      {children}
    </Link>
  );
}

export default SecondaryButton;