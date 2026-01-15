import { useState } from "react";

export default function NewQuestionnaire() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "",
      type: "text",
      options: [""],
      importance: 4,
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-purple-300 rounded-xl p-4">
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
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md font-semibold ${q.type === "text" ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-600"}`}
                    onClick={() => handleChange(idx, "type", "text")}
                  >
                    Textové pole
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md font-semibold ${q.type === "scale" ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-600"}`}
                    onClick={() => handleChange(idx, "type", "scale")}
                  >
                    Škála
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md font-semibold ${q.type === "yesno" ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-600"}`}
                    onClick={() => handleChange(idx, "type", "yesno")}
                  >
                    Ano/Ne
                  </button>
                </div>
                {q.type === "scale" && (
                  <div className="flex gap-2 items-center mb-2">
                    <span className="bg-gray-200 px-2 py-1 rounded font-semibold">
                      1 - 5
                    </span>
                    <span className="bg-gray-200 px-2 py-1 rounded font-semibold">
                      Možnosti
                    </span>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="w-full mt-2 py-2 bg-purple-500 text-white rounded font-bold"
            >
              Přidat další otázku
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-800 text-white rounded-full text-lg font-bold shadow"
            >
              Odeslat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
