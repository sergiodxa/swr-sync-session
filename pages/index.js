import Router from "next/router";
import useMe from "../hooks/use-me";
import { useState } from "react";

function login(user) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: user }),
  });
}

export default function IndexPage() {
  const { data: res, mutate } = useMe();
  const [user, setUser] = useState("");

  React.useLayoutEffect(() => {
    if (res?.data) Router.replace("/private")
  }, [res])

  if (res?.data) {
    return null;
  }

  return (
    <div>
      <h1>To log in click below</h1>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />
      <button onClick={() => login(user).then(() => mutate())}>Log In</button>
    </div>
  );
}
