function GradientGlow() {
  return (
    <>
      <div
        className="
          absolute
          -top-32
          -left-32
          h-96
          w-96
          rounded-full
          bg-amber-500/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-emerald-500/15
          blur-[120px]
        "
      />
    </>
  );
}

export default GradientGlow;