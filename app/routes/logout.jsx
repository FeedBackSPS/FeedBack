// routes/logout.jsx
import { destroyUserSession } from "../api/auth";

export async function action({ request }) {
  return destroyUserSession(request);
}
