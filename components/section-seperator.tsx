type SeparatorVariant = "left" | "right";

export const SectionSeparator = ({
  variant = "left",
}: {
  variant?: SeparatorVariant;
}) => {
  const isLeftLong = variant === "left";

  return (
    <div className="relative w-full h-16 flex items-center justify-center">
      {/* LEFT SIDE */}
      <div className="absolute left-[5%] flex items-center">
        {/* main line (inner side) */}
        <div
          className={`h-[1px] bg-white/20 ${isLeftLong ? "w-38" : "w-19"}`}
        />

        {/* intersection (+ formed by crossing lines) */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white/40" />
          <div className="absolute h-full w-[1px] bg-white/40" />
        </div>

        {/* outward tail */}
        <div className="h-[1px] bg-white/20 w-6" />
      </div>

      {/* RIGHT SIDE */}
      <div className="absolute right-[5%] flex items-center">
        {/* outward tail */}
        <div className="h-[1px] bg-white/20 w-6" />

        {/* intersection */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white/40" />
          <div className="absolute h-full w-[1px] bg-white/40" />
        </div>

        {/* main line (inner side) */}
        <div
          className={`h-[1px] bg-white/20 ${isLeftLong ? "w-19" : "w-38"}`}
        />
      </div>
    </div>
  );
};
