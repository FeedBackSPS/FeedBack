/*
   Tu funkce na vytvoření dotazníku (button) - nejspíš link na Form
*/

/*
   Ověření loginu uživatele
*/

/*
   vložení z form do DB 
*/

export default function NewQuestionnaire() {
  return (
    <section className="new-questionnaire">
      <h1>Nový dotazník</h1>

      <form method="post">
        {/* Popis dotazníku */}
        <div className="field-block">
          <label>Popis dotazníku</label>
          <textarea name="description" placeholder="xxxxxxxxxxxxxxx" required />
        </div>

        {/* 1. Otázka – příklad se škálou */}
        <div className="question-block">
          <label>Otázka 1 (škála 1)</label>
          <textarea name="q1-text" placeholder="xxxxxxxxxxxxx" required />

          <div className="question-types">
            <button type="button" className="type-btn">
              Textové pole
            </button>
            <button type="button" className="type-btn active">
              Škála
            </button>
            <button type="button" className="type-btn">
              Ano/Ne
            </button>
          </div>

          {/* slider 1–5 */}
          <div className="scale-wrapper">
            <input
              type="range"
              name="q1-scale"
              min="1"
              max="5"
              defaultValue="3"
            />
            <div className="scale-value">3</div>
          </div>
        </div>

        {/* 2. Otázka – příklad Ano/Ne */}
        <div className="question-block">
          <label>Otázka 2 (Ano/Ne)</label>
          <textarea name="q2-text" placeholder="xxxxxxxxxxxxx" required />

          <div className="question-types">
            <button type="button" className="type-btn active">
              Ano/Ne
            </button>
            <button type="button" className="type-btn">
              Textové pole
            </button>
            <button type="button" className="type-btn">
              Škála
            </button>
          </div>
        </div>

        {/* 3. Otázka – Text pole */}
        <div className="question-block">
          <label>Otázka 3 (text pole)</label>
          <textarea name="q3-text" placeholder="xxxxxxxxxxxxx" required />

          <div className="question-types">
            <button type="button" className="type-btn active">
              Textové pole
            </button>
            <button type="button" className="type-btn">
              Ano/Ne
            </button>
            <button type="button" className="type-btn">
              Škála
            </button>
          </div>
        </div>

        {/* Odeslat */}
        <button type="submit" className="submit-btn">
          Odeslat
        </button>
      </form>
    </section>
  );
}
