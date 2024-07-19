type Props = {
  label: string;
  func: () => void;
};

const AuthButton = ({ label, func }: Props) => {
  return (
    <button
      className={
        "rounded-2xl text-center font-bold bg-slate-300 hover:bg-gray-400 px-4"
      }
      onClick={func}
    >
      {label}
    </button>
  );
};

export default AuthButton;
