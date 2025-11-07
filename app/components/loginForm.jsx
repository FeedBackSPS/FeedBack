import { Form } from "react-router";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Form
        action="/login"
        method="post"
        className="bg-slate-500 p-8 rounded shadow-md w-96 flex flex-col gap-4"
      >
        {/* Logo + text nahoře */}
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" className="mx-auto h-16 w-16 mb-2" />
          <h1 className="text-2xl font-bold">FeedBack</h1>
        </div>

        {/* Uživatelské jméno */}
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 font-medium">
            Uživatelské jméno
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Zadejte uživatelské jméno"
            className="border rounded p-2"
            required
          />
        </div>

        {/* Heslo */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">
            Heslo
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Zadejte heslo"
            className="border rounded p-2"
            required
          />
        </div>

        {/* Checkbox zapamatovat */}
        <div className="flex items-center gap-2">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Zapamatovat si mě</label>
        </div>

        {/* Přihlásit tlačítko */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Přihlásit
        </button>
      </Form>
    </div>
  );
}
