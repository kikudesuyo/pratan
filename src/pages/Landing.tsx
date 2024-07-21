import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BodyButton from "@/components/Button/BodyButton";
import { PATHS } from "@/utils/constants/Paths";
//imgs
import question from "@/assets/imgs/question.png";
import sidebar from "@/assets/imgs/sidebar.png";
import word from "@/assets/imgs/word.png";
import wordList from "@/assets/imgs/wordList.png";
import wrong from "@/assets/imgs/wrong.png";
import wordTestScore from "@/assets/imgs/wordTestScore.png";

const Landing = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: wordList, alt: "Image 1" },
    { id: 2, src: sidebar, alt: "Image2" },
    { id: 3, src: word, alt: "Image3" },
    { id: 4, src: question, alt: "Image4" },
    { id: 5, src: wrong, alt: "Image5" },
    { id: 6, src: wordTestScore, alt: "Image6" },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-8">
      <h1 className=" text-center text-3xl font-bold">
        English Vocabulary Explorer
      </h1>
      <div className="relative flex h-80 w-11/12 items-center justify-center rounded-lg border-4 border-orange-400 bg-white shadow-xl">
        <div className="absolute inset-x-0 -top-6 flex justify-around text-3xl text-blue-500">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
        </div>
        <button className="m-6" onClick={goToPrevious}>
          <span className="rounded-full bg-gray-200 px-3 py-2 text-3xl  text-gray-600">
            &lt;
          </span>
        </button>
        <img className="h-5/6" src={images[currentIndex].src} alt="" />
        <button className="m-6" onClick={goToNext}>
          <span className="rounded-full bg-gray-200 px-3 py-2 text-3xl text-gray-600">
            &gt;
          </span>
        </button>
      </div>
      <BodyButton
        label="Let's start learning!"
        func={() => navigate(PATHS.LOGIN)}
      />
      <p className="max-w-2xl text-center text-lg text-gray-600">
        Learn new words and their meanings in English! Expand your vocabulary
      </p>
    </div>
  );
};

export default Landing;
