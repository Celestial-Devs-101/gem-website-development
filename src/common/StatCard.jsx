function StatCard({ number, text }) {
  return (
    <div className="text-center">

      <h2 className="text-5xl font-black text-amber-500">
        {number}
      </h2>

      <p className="mt-2 text-slate-600">
        {text}
      </p>

    </div>
  );
}

export default StatCard;