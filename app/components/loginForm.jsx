import { Form, useActionData } from "react-router";

export default function LoginForm() {
  const actionData = useActionData();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] ">
      <Form
        action="/login"
        method="post"
        className=" p-10 rounded shadow-md  flex flex-col gap-4 "
      >
        {/* Logo + název */}
        <div className=" flex flex-row text-center mx-auto mt-4 mb-4">
          <img src="/SPS-logo.png" alt="Logo" className=" h-16 w-16 mb-2" />
          <h1 className="text-4xl font-black ml-2 my-auto text-[#223974]">
            Feedback
          </h1>
        </div>

        {/* Nápis */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold w-64 m-auto text-[#223974]">
            Střední průmyslová škola Trutnov, Školní 101
          </h3>
        </div>

        <div className="bg-white p-10 min-w-48 relative shadow-md">
          <div className="absolute right-[4%] top-[3%] bg-[#00A2E2] h-6 w-6 rounded-full flex items-center justify-center ">
            <span className="text-white text-xs">i</span>
          </div>
          {/* Uživatelské jméno */}
          <div className="flex flex-col mt-4 mb-4">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Uživatelské jméno test"
              className="border rounded p-1 border-[#C7D4F4] text-[#0031ac] "
              required
            />
          </div>

          {/* Heslo */}
          <div className="flex flex-col mt-4 mb-4">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Heslo test"
              className="border rounded p-1 border-[#C7D4F4] "
              required
            />
          </div>

          {/* Checkbox zapamatovat */}
          <div className="flex items-center gap-2 mt-4 mb-4">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Zapamatovat si mě</label>
          </div>

          {/* Chybová hláška */}
          {actionData?.error && (
            <p style={{ color: "red" }}>{actionData.error}</p>
          )}

          {/* Přihlásit tlačítko */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-12 py-2 rounded hover:bg-blue-700 custom-gradient transition w-full"
          >
            Přihlásit
          </button>
        </div>
      </Form>
    </div>
  );
}
