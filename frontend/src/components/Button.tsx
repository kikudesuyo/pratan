type Props = {
  label: string;
  style?: string;
  func: () => void;
};

const Button = ({ label, style = "", func }: Props) => {
  //styleでボタンの色を設定(hover:も設定)
  return (
    <button
      className={`rounded-2xl min-w-20 text-center font-bold  ${style}`}
      onClick={func}
    >
      {label}
    </button>
  );
};

export default Button;
