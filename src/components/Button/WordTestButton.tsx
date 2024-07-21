type Props = {
  label: string;
  func: () => void;
};

const WordTestButton = ({ label, func }: Props) => {
  return (
    <button
      className="rounded-2xl bg-orange-500 p-3 text-center text-lg font-bold text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
      onClick={func}
    >
      {label}
    </button>
  );
};

export default WordTestButton;
