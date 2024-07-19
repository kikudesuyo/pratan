type Props = {
  label: string;
  func: () => void;
};

const BodyButton = ({ label, func }: Props) => {
  return (
    <button
      className="bg-orange-400 hover:bg-orange-500 py-4 px-8 text-xl rounded-2xl text-center font-bold min-w-56"
      onClick={func}
    >
      {label}
    </button>
  );
};

export default BodyButton;
