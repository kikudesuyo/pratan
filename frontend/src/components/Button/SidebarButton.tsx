type SidebarProps = {
  func: () => void;
};

const SidebarButton = ({ func }: SidebarProps) => {
  return (
    <button
      className={
        "rounded-lg text-center font-bold text-white bg-orange-500 px-4"
      }
      onClick={func}
    >
      ☰
    </button>
  );
};

export default SidebarButton;
