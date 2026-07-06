import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">

      <div
        className="
        h-14
        w-14
        rounded-full
        bg-amber-500
        flex
        items-center
        justify-center
        text-3xl
        font-black
        text-slate-900
        shadow-xl
        "
      >
        G
      </div>

      <div>

        <h2 className="text-2xl font-black tracking-wider">
          GEM
        </h2>

        <p className="uppercase tracking-[5px] text-xs text-slate-500">
          Mining
        </p>

      </div>

    </Link>
  );
}

export default Logo;