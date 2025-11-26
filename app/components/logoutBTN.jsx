import { Form } from "react-router";

export default function LogoutBTN() {
  return (
    <Form method="post" action="/logout">
      <button type="submit">
        <h1 className="text-sky-100 text-xl ml-32">LOG-OUT</h1>
      </button>
    </Form>
  );
}
