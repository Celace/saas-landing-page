import { use, useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content";
import FAQList from "../FAQs/FAQList";

const FAQs = () => {
  const [category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0);

  const questionsArray = categoryObj.questions;

  const handleQuestionClick = (id) =>
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setCategory(category);
  };

  return (
    <section className="bg-gradient-to-bottom justify-items-center">
      <div className="w-full max-w-[90rem] py-24">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 text-xl/loose font-light">
          <p className="text-primary-100 text-center">
            The most commonly asked questions about NoteFlow. <br />
            Have any other questions?{" "}
            <a href="#" className="underline decoration-1 underline-offset-3">
              Chat with our expert tech team
            </a>
          </p>
        </div>

        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4">
          {frequentlyAskedQuestions.map((obj) => {
            return (
              <li key={obj.id}>
                <button onClick={() => handleCategoryClick(obj.category)}>
                  {obj.category}
                </button>
              </li>
            );
          })}
        </ul>

        <FAQList
          category={category}
          questions={questionsArray}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
};

export default FAQs;
