import useMe from "../hooks/use-me";
import Router from "next/router";

function logout() {
  return fetch("/api/logout", { method: "POST" });
}

export default function Private() {
  const { data: res, mutate } = useMe();

  React.useLayoutEffect(() => {
    if (!res || res.error) Router.replace("/");
  }, [res])

  if (!res || res.error) {
    return null;
  }

  if (!res || !res.data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Hello, {res.data.name}</h1>
      <p>If you are reading this you are logged in! Congrats!</p>
      <button onClick={() => logout().then(() => mutate())}>Log out</button>
    </div>
  );
}
