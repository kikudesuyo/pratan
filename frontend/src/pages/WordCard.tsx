import { Word } from "@/utils/types";

const WordCard = ({
  spell,
  definitions,
}: Pick<Word, "spell" | "definitions">) => (
  <div className="cursor-pointer rounded-lg border-l-4 border-orange-400 bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
    <h2 className="text-center font-semibold">
      <p className="mb-2 text-2xl text-orange-500">{spell}</p>
      <p className="text-base text-gray-600">{definitions.join("; ")}</p>
    </h2>
  </div>
);

export default WordCard;
