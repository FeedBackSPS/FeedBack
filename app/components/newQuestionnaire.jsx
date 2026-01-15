import { useState } from "react";
import { Form } from "react-router";

export default function NewQuestionnaire() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "",
      type: "text",
      options: [""],
      importance: 4,
      scaleType: "1-5",
    },
  ]);

  const min = 1;
  const max = 10;

  const handleChange = (idx, field, value) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === idx ? { ...q, [field]: value } : q))
    );
  };

  const handleOptionChange = (qIdx, optIdx, value) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIdx
          ? {
              ...q,
              options: q.options.map((o, oi) => (oi === optIdx ? value : o)),
            }
          : q
      )
    );
  };

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: "",
        type: "text",
        options: [""],
        importance: 4,
        scaleType: "1-5",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Odesláno", questions);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border-2 border-blue-900">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
          Nový dotazník
        </h2>
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {questions.map((q, idx) => (
              <div key={q.id} className="mb-8">
                <label className="block font-bold text-lg mb-2">
                  Otázka {idx + 1}
                </label>
                <input
                  type="text"
                  value={q.text}
                  onChange={(e) => handleChange(idx, "text", e.target.value)}
                  placeholder="xxxxxxxxxxxxxx"
                  className="w-full bg-gray-200 rounded-md px-4 py-2 font-semibold mb-2"
                />
                <div className="border-b border-gray-400 mb-2" />
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <label
                    className={`px-4 py-2 rounded-md font-semibold cursor-pointer text-center ${q.type === "text" ? "bg-[#374E88] text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <input
                      type="radio"
                      name={`type-${q.id}`}
                      value="text"
                      checked={q.type === "text"}
                      onChange={(e) =>
                        handleChange(idx, "type", e.target.value)
                      }
                      className="hidden"
                    />
                    Textové pole
                  </label>
                  <label
                    className={`px-4 py-2 rounded-md font-semibold cursor-pointer text-center ${q.type === "scale" ? "bg-[#374E88] text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <input
                      type="radio"
                      name={`type-${q.id}`}
                      value="scale"
                      checked={q.type === "scale"}
                      onChange={(e) =>
                        handleChange(idx, "type", e.target.value)
                      }
                      className="hidden"
                    />
                    Škála
                  </label>
                  <label
                    className={`px-4 py-2 rounded-md font-semibold cursor-pointer text-center ${q.type === "yesno" ? "bg-[#374E88] text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <input
                      type="radio"
                      name={`type-${q.id}`}
                      value="yesno"
                      checked={q.type === "yesno"}
                      onChange={(e) =>
                        handleChange(idx, "type", e.target.value)
                      }
                      className="hidden"
                    />
                    Ano/Ne
                  </label>
                  {q.type === "scale" && (
                    <div className="flex gap-2">
                      <label
                        className={`flex-1 px-2 py-1 rounded font-semibold cursor-pointer text-center flex items-center justify-center ${q.scaleType === "1-5" ? "bg-[#374E88] text-white" : "bg-gray-200 text-gray-600"}`}
                      >
                        <input
                          type="radio"
                          name={`scaleType-${q.id}`}
                          value="1-5"
                          checked={q.scaleType === "1-5"}
                          onChange={(e) =>
                            handleChange(idx, "scaleType", e.target.value)
                          }
                          className="hidden"
                        />
                        1 - 5
                      </label>
                      <label
                        className={`flex-1 px-2 py-1 rounded font-semibold cursor-pointer text-center flex items-center justify-center ${q.scaleType === "options" ? "bg-[#374E88] text-white" : "bg-gray-200 text-gray-600"}`}
                      >
                        <input
                          type="radio"
                          name={`scaleType-${q.id}`}
                          value="options"
                          checked={q.scaleType === "options"}
                          onChange={(e) =>
                            handleChange(idx, "scaleType", e.target.value)
                          }
                          className="hidden"
                        />
                        Možnosti
                      </label>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="w-full mt-2 py-2 bg-[#374E88] text-white rounded font-bold"
            >
              Přidat další otázku
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl text-white font-bold text-xl bg-[#374E88] cursor-pointer ml-auto"
            >
              Odeslat
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
