import clsx from "clsx";

const Button = ({
  px = "px-[20px]", // px-5, px-6 kabi Tailwind sinflari beriladi
  py = "py-[13px]", // py-3, py-4 kabi Tailwind sinflari beriladi
  children,
  disabled = false,
  classname,
  rounded = "rounded-[10px]",
  border, // rounded-md, rounded-xl kabi Tailwind sinflari beriladi
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "font-medium",
        px, // Tailwind sinflari sifatida qo‘shiladi
        py,
        rounded,
        border,
        disabled
          ? "bg-[#8D97B2] text-[#DCDCDD] cursor-not-allowed"
          : "bg-[#5D87FF] text-white",
        classname
      )}
    >
      {children}
    </button>
  );
};

export default Button;
