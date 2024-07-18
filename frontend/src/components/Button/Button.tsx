import { Props } from "@/components/Button/types";

const Button = ({ label, style = "", func }: Props) => {
  //styleでボタンの色を設定(hover:も設定)
  return (
    <button
      className={`rounded-2xl text-center font-bold  ${style}`}
      onClick={func}
    >
      {label}
    </button>
  );
};

export default Button;
