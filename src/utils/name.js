const names = [
  "Sina",
  "John",
  "James",
  "Michael",
  "Lisa",
  "Anna",
  "Something",
  "Hackerguy",
];

export function generateName() {
  return names[Math.floor(Math.random() * names.length)];
}
