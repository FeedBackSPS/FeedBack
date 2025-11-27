export default function OpenedQuestionnaire({ onClose, questionnaire }) {
  if (!questionnaire) return null;

  return (
    <article className="fixed inset-0 bg-black/50 flex justify-center items-center ">
      <div
        className="absolute top-0 left-0 h-screen w-screen "
        onClick={onClose}
      ></div>
      {/* questionnaire open */}
      <div className="bg-white p-6 rounded-xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center border-[6px] border-[#223974]">
        <h2 className="capitalize text-3xl text-[#223974] ">
          {questionnaire.type}
        </h2>
        <h2>{questionnaire.title}</h2>
        <p>{questionnaire.author}</p>

        <button
          className="px-8 py-4 rounded-xl text-white  bg-blue-500 cursor-pointer"
          onClick={onClose}
        >
          Odeslat
        </button>
      </div>
    </article>
  );
}
