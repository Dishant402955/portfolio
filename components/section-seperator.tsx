type SeparatorVariant = "left" | "right";

interface SectionSeperatorInterface {
  variant?: SeparatorVariant;
}

export const SectionSeparator = ({
  variant = "left",
}: SectionSeperatorInterface) => {
  const isLeftLong = variant === "left";

  return (
    <div className="relative w-full h-16 flex items-center justify-center">
      <div className="absolute left-[5%] flex items-center">
        <div className={`h-px bg-white/20 ${isLeftLong ? "w-38" : "w-19"}`} />

        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute w-full h-px bg-white/40" />
          <div className="absolute h-full w-px bg-white/40" />
        </div>

        <div className="h-px bg-white/20 w-6" />
      </div>

      <div className="absolute right-[5%] flex items-center">
        <div className="h-px bg-white/20 w-6" />

        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute w-full h-px bg-white/40" />
          <div className="absolute h-full w-px bg-white/40" />
        </div>

        <div className={`h-px bg-white/20 ${isLeftLong ? "w-19" : "w-38"}`} />
      </div>
    </div>
  );
};
