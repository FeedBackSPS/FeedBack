export default function Questionnaire({ data }) {
  const isActive = data.isActive;
  const isActiveColor = data.isActive ? "bg-green-500" : "bg-red-500";

  const createdAt = new Date(data.createdAt).toLocaleDateString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div>
      {isActive ? (
        <article className="flex flex-row justify-between items-center bg-[#F4F4F4] px-10 gap-8 p-4 border-b-4 border-b-[#374E88]">
          <h4 className="text-lg font-semibold max-w-[60%]">{data.title}</h4>
          <ul className="flex flex-col text-right gap-2">
            <li>{data.author}</li>
            <li className={`${isActiveColor} w-5 h-5 ml-auto rounded-md`}></li>
            <li>{createdAt}</li>
          </ul>
        </article>
      ) : (
        <article className="flex flex-row justify-between items-center px-10 gap-8 p-4 border-b-4 border-b-[#374E88] bg-[#E5E5E5] cursor-not-allowed select-none text-black/50">
          <h4 className="text-lg font-semibold max-w-[60%]">{data.title}</h4>

          <ul className="flex flex-col text-right gap-2">
            <li>{data.author}</li>
            <li className={`${isActiveColor} w-5 h-5 ml-auto rounded-md`}></li>
            <li>{createdAt}</li>
          </ul>
        </article>
      )}
    </div>
  );
}
