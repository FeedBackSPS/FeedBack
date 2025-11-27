import { useState } from "react";
import Dropdown from "./dropDownMenu";
import Questionnaire from "./questionnaire";

export default function Main() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openQuestionnaire, setOpenQuestionnaire] = useState(null);

  const article1Dropdowns = [
    { id: "a1-stari", title: "Stáří", items: ["0-10", "11-20", "21+"] },
    {
      id: "a1-dulezitost",
      title: "Důležitost",
      items: ["Nízká", "Střední", "Vysoká"],
    },
  ];

  const article2Dropdowns = [
    { id: "a2-kategorie", title: "Učitel", items: ["A", "B", "C"] },
    {
      id: "a2-priority",
      title: "Důležitost",
      items: ["Nízká", "Střední", "Vysoká"],
    },
  ];

  const questionnaires = [
    {
      title: "Spokojenost s výukou",
      author: "Jan Novák",
      createdAt: "2024-01-15",
      isActive: true,
      type: "anketa",
    },
    {
      title: "Hodnocení školních služeb",
      author: "Petr Svoboda",
      createdAt: "2024-02-10",
      isActive: false,
      type: "dotaznik",
    },
    {
      title: "Hodnocení školních služeb",
      author: "Petr Svoboda",
      createdAt: "2024-02-10",
      isActive: false,
      type: "anketa",
    },
    {
      title: "Hodnocení školních služeb",
      author: "Petr Svoboda",
      createdAt: "2024-02-10",
      isActive: true,
      type: "dotaznik",
    },
  ];

  return (
    <main className=" ">
      <div>
        <div className="flex justify-center items-center gap-2 mt-20 mb-4">
          <img className="w-12" src="spstrutnov_symbol_RGB.svg" alt="logo" />
          <h1 className="text-deepBlue font-extrabold text-5xl tracking-widest">
            FEEDBACK
          </h1>
        </div>
        <p className="text-black text-2xl font-medium justify-center items-center flex">
          Podělte se s námi o své poznatky a dojmy
        </p>
      </div>

      <section className="flex flex-row gap-10 justify-center mt-16 mb-16 flex-wrap">
        {/* Article 1 */}
        <article className="bg-gray flex flex-col border-[#374E88] border-[6px]  bg-[#D9D9D9] rounded-2xl h-[50vh] overflow-y-scroll overflow-hidden no-scrollbar">
          <header className="flex flex-row justify-between items-center gap-10 py-6 px-10 border-b-4 border-b-[#374E88]">
            <h2 className="text-3xl text-[#374E88] font-bold">Ankety</h2>
            <div className="flex flex-row gap-3 ">
              {article1Dropdowns.map((dropdown) => (
                <Dropdown
                  key={dropdown.id}
                  id={dropdown.id}
                  title={dropdown.title}
                  items={dropdown.items}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              ))}
            </div>
          </header>
          {questionnaires.map((data, index) => (
            <div key={index}>
              {data.type === "anketa" ? (
                <Questionnaire
                  data={data}
                  key={index}
                  onOpen={() => setOpenQuestionnaire(data)}
                />
              ) : null}
            </div>
          ))}
        </article>

        {/* Article 2 */}
        <article className="bg-gray flex flex-col border-[#374E88] border-[6px]  bg-[#D9D9D9] rounded-2xl h-[50vh] overflow-y-scroll overflow-hidden no-scrollbar">
          <header className="flex flex-row justify-between items-center gap-10 py-6 px-10 border-b-4 border-b-[#374E88]">
            <h2 className="text-3xl text-[#374E88] font-bold">Dotazníky</h2>
            <div className="flex flex-row gap-3 items-center">
              {article2Dropdowns.map((dropdown) => (
                <Dropdown
                  key={dropdown.id}
                  id={dropdown.id}
                  title={dropdown.title}
                  items={dropdown.items}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              ))}
            </div>
          </header>
          {questionnaires.map((data, index) => (
            <div key={index}>
              {data.type === "dotaznik" ? (
                <Questionnaire
                  data={data}
                  key={index}
                  onOpen={() => setOpenQuestionnaire(data)}
                />
              ) : null}
            </div>
          ))}
        </article>
      </section>
      {openQuestionnaire && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center ">
          <div
            className="absolute top-0 left-0 h-screen w-screen "
            onClick={() => setOpenQuestionnaire(null)}
          ></div>
          <div className="bg-white p-6 rounded-xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
            <h2>{openQuestionnaire.title}</h2>
            <p>{openQuestionnaire.author}</p>
            {/* whatever else you want */}
            <button
              className="px-8 py-4 rounded-xl text-white  bg-red-500 cursor-pointer"
              onClick={() => setOpenQuestionnaire(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
