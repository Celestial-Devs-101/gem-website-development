import { Link } from "react-router-dom";

function PrimaryButton({
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
        bg-amber-500
        px-8
        py-4
        font-bold
        text-slate-950
        transition
        duration-300
        hover:bg-amber-400
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-amber-500/30
      "
    >
      {children}
    </Link>
  );
}

export default PrimaryButton;