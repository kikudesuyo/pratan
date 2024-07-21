type HiddenWordProps = {
  word: string;
  sentence: string;
};

const HiddenWord: React.FC<HiddenWordProps> = ({ word, sentence }) => {
  const hideWord = (w: string) => w[0] + "_".repeat(w.length - 1);

  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <p className="text-lg text-gray-800">
        {sentence.split(new RegExp(`(${word})`, "gi")).map((part, index) =>
          part.toLowerCase() === word.toLowerCase() ? (
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
