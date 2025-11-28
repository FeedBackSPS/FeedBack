import { useState } from "react";
import { Form } from "react-router";

export default function OpenedQuestionnaire({ onClose, questionnaire }) {
  console.log("OpenedQuestionnaire rendered with:", questionnaire);
  if (!questionnaire) return null;

  const [hodnoty, setHodnoty] = useState(
    questionnaire.questions.map((q) => q.min)
  );

  // rendruje to podle typu otazky
  const renderQuestion = (question, index) => {
    switch (question.type) {
      // škála 1-5
      case "scale":
        return (
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-xl font-semibold" htmlFor={`q${index}`}>
              {question.text}
            </label>
            <input
              type="range"
              id={`${index}`}
              name={`${index}`}
              min={question.min || 0}
              max={question.max || 5}
              className="border border-gray-300 rounded-md "
              value={hodnoty[index]}
              onChange={(e) => {
                const updated = [...hodnoty]; // vytvoříme kopii pole
                updated[index] = e.target.value; // změníme hodnotu JEN u konkrétní otázky
                setHodnoty(updated); // uložíme změnu
              }}
            />
            <div className="flex flex-row justify-between">
              <span className="text-sm text-gray-500">{question.min || 0}</span>
              <span className="text-lg text-black">{`Hodnota:${hodnoty[index]}`}</span>
              <span className="text-sm text-gray-500">{question.max || 5}</span>
            </div>
          </div>
        );

      // textove pole
      case "text":
        return (
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-xl font-semibold" htmlFor={`q${index}`}>
              {question.text}
            </label>
            <input
              type="text"
              id={`q${index}`}
              name={`q${index}`}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
        );

      // ano ne
      case "boolean":
        return (
          <div className="flex flex-row gap-2 mb-4 items-center">
            <input
              type="checkbox"
              id={`q${index}`}
              name={`q${index}`}
              className="h-5 w-5"
            />
            <label className="text-xl font-semibold" htmlFor={`q${index}`}>
              {question.text}
            </label>
          </div>
        );

      default:
        return <div className="text-red-500">Unknown question type</div>;
    }
  };

  return (
    <Form
      method="post"
      action="/sendAnswers"
      className="fixed inset-0 bg-black/50 flex justify-center items-center "
    >
      <div
        className="absolute top-0 left-0 h-screen w-screen "
        onClick={onClose}
      ></div>

      <article className="bg-white px-16 py-4 rounded-xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-6 border-[6px] border-[#223974]">
        <h2 className="text-3xl text-[#223974]">{questionnaire.title}</h2>

        <div className="flex flex-col" id="questionList">
          {questionnaire.questions.map((question, index) => (
            <div key={index}>{renderQuestion(question, index)}</div>
          ))}
        </div>

        <button
          className="px-6 py-3 rounded-xl text-white font-bold text-xl bg-[#374E88] cursor-pointer ml-auto"
          onClick={onClose}
        >
          Odeslat
        </button>
      </article>
    </Form>
  );
}
