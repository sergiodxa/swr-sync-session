export default function login(req, res) {
  const { username } = req.body;
  if (!username) {
    res.status(401);
    res.json({ message: "Invalid user" });
  } else {
    res.setHeader("Set-Cookie", `session=${username};`);
    res.status(201);
    res.json({ message: "Logged in" });
  }
}
