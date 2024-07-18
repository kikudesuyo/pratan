type Props = {
  label: string;
  style?: string;
  func: () => void;
};

const Button = ({ label, style = "", func }: Props) => {
  return (
    <button
      className={`rounded-2xl bg-slate-300 min-w-20 text-center font-bold hover:bg-gray-400 ${style}`}
      onClick={func}
    >
      {label}
    </button>
  );
};

export default Button;
