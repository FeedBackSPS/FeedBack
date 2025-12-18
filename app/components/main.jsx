import { useState } from "react";
import Dropdown from "./dropDownMenu";
import Questionnaire from "./questionnaire";
import OpenedQuestionnaire from "./openedQuestionnaire";

export default function Main({ questionnaires }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openQuestionnaire, setOpenQuestionnaire] = useState(null);

  console.log(questionnaires, "questionnaires v main");

  questionnaires[0].questions = JSON.parse(questionnaires[0].questions);

  console.dir(questionnaires, { depth: null, colors: true });

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

  // const questionnaires = [
  //   {
  //     title: "Spokojenost s výukou",
  //     author: "Jan Novák",
  //     createdAt: "2024-01-15",
  //     isActive: true,
  //     type: "anketa",
  //     questions: [
  //       {
  //         text: "Jak jste spokojen/a s výukou?",
  //         type: "scale",
  //         min: 0,
  //         max: 10,
  //       },
  //       {
  //         text: "Jak jste spokojen/a s výukou?",
  //         type: "scale",
  //         min: 0,
  //         max: 5,
  //       },
  //       { text: "Doporučil/a byste náš kurz ostatním?", type: "text" },
  //     ],
  //   },
  //   {
  //     title: "Hodnocení školních služeb",
  //     author: "Petr Svoboda",
  //     createdAt: "2024-02-10",
  //     isActive: false,
  //     type: "dotaznik",
  //     questions: [
  //       {
  //         text: "Jak jste spokojen/a s výukou?",
  //         type: "scale",
  //         min: 0,
  //         max: 10,
  //       },
  //       { text: "Doporučil/a byste náš kurz ostatním?", type: "text" },
  //     ],
  //   },
  //   {
  //     title: "Hodnocení školních služeb",
  //     author: "Petr Svoboda",
  //     createdAt: "2024-02-10",
  //     isActive: false,
  //     type: "anketa",
  //     questions: [
  //       {
  //         text: "Jak jste spokojen/a s výukou?",
  //         type: "scale",
  //         min: 0,
  //         max: 10,
  //       },
  //       { text: "Doporučil/a byste náš kurz ostatním?", type: "text" },
  //     ],
  //   },
  //   {
  //     title: "Hodnocení školních služeb",
  //     author: "Petr Svoboda",
  //     createdAt: "2024-02-10",
  //     isActive: true,
  //     type: "dotaznik",
  //     questions: [
  //    {
  //      text: "Jak jste spokojen/a s výukou?",
  //      type: "scale",
  //      min: 0,
  //     max: 10,
  //    },
  //    { text: "Doporučil/a byste náš kurz ostatním?", type: "text" },
  //  ],
  //   },
  // ];

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
                  type={data.type}
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
                  type={data.type}
                  onOpen={() => setOpenQuestionnaire(data)}
                />
              ) : null}
            </div>
          ))}
        </article>
      </section>
      <OpenedQuestionnaire
        questionnaire={openQuestionnaire}
        onClose={() => setOpenQuestionnaire(null)}
      />
    </main>
  );
}
