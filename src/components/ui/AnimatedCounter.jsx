import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2.5,
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .5,
  });

  return (
    <div
      ref={ref}
      className={className}
    >
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
        />
      ) : (
        0
      )}
      {suffix}
    </div>
  );
}

export default AnimatedCounter;