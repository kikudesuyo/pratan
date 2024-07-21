type SidebarProps = {
  func: () => void;
};

const SidebarButton = ({ func }: SidebarProps) => {
  return (
    <button
      className={
        "rounded-lg bg-orange-500 px-4 text-center font-bold text-white"
      }
      onClick={func}
    >
      ☰
    </button>
  );
};

export default SidebarButton;
