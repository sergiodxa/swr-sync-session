export default function me(req, res) {
  if (!req.cookies.session || req.cookies.session === "invalid") {
    res.status(401);
    res.json({ message: "Not logged in!" });
  } else {
    res.status(200);
    res.json({ name: req.cookies.session });
  }
}
