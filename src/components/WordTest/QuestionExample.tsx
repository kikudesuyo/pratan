type HiddenWordProps = {
  spell: string;
  sentence: string;
};

const HiddenWord: React.FC<HiddenWordProps> = ({ spell, sentence }) => {
  const hideWord = (w: string) => w[0] + "_".repeat(w.length - 1);

  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <p className="text-lg text-gray-800">
        {sentence.split(new RegExp(`(${spell})`, "gi")).map((part, index) =>
          part.toLowerCase() === spell.toLowerCase() ? (
            <span key={index} className="font-bold italic">
              {hideWord(part)}
            </span>
          ) : (
            part
          )
        )}
      </p>
    </div>
  );
};

export default HiddenWord;
