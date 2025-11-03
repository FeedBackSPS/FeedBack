const database = "2it_feedback";
const username = "kadlecj22";
const password = "YkeC2tfqV3";
const server = "localhost";
export async function sql(sql) {
  const url = "http://marcincin.epsilon.spstrutnov.cz/gate.php";
  const postJson = JSON.stringify({
    database: database,
    username: username,
    password: password,
    server: server,
    sql: sql,
  });
  try {
    console.log("Sending query:", sql);
    const response = await fetch(url, { method: "POST", body: postJson });

    const text = await response.text();
    console.log("Raw response:", text);

    const json = JSON.parse(text);
    return json;
  } catch (error) {
    console.error("Chyba při fetchi SQL:", error.message);
  }
}
