var notes = require("./note-model").note

if (notes"greeting") !== "Welcome to notes") {
  throw new Error("Greeting should equal Welcome to notes");
} else {
  console.log(".");
}
