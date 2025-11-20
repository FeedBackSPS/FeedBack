export default function Survey() {
  return (
    <section className=" w-96 h-96 m-auto rounded-lg border-2 border-deepBlue bg-gray-300">
      <nav>
        <header className="border-b-2 border-deepBlue flex rounded-t-lg text-deepBlue">
          <h2>Ankety</h2>
          <p>Stáří</p>
          <p>Důležitost</p>
        </header>
        <nav>
          <article className="bg-slate-100 flex">
            <div>
              <h3>Školní obědy</h3>
            </div>
            <div className="">
              <p>Gorzard Železný</p>
              <svg className="w-5 h-5">
                <rect width="20" height="20" fill="red" />
              </svg>
              <p>25.09.2025</p>
            </div>
          </article>
        </nav>
      </nav>
    </section>
  );
}
