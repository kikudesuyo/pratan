type Props = {
  label: string;
  func: () => void;
};

const AuthButton = ({ label, func }: Props) => {
  return (
    <button
      className={
        "rounded-2xl bg-slate-300 px-4 text-center font-bold hover:bg-gray-400"
      }
      onClick={func}
    >
      {label}
    </button>
  );
};

export default AuthButton;
