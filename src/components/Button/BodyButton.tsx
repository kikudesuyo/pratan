type Props = {
  label: string;
  func: () => void;
};

const BodyButton = ({ label, func }: Props) => {
  return (
    <button
      className="min-w-56 rounded-2xl bg-orange-400 px-8 py-4 text-center text-xl font-bold hover:bg-orange-500"
      onClick={func}
    >
      {label}
    </button>
  );
};

export default BodyButton;
