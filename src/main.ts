// Snack 1
let dato: unknown;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else if (typeof dato === "number") {
  let total = dato * 2;
  console.log(total);
} else if (typeof dato === "boolean") {
  console.log(dato ? "Sì" : "No");
} else if (dato === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(dato)) {
  console.log(dato.length);
} else if (dato instanceof Promise) {
  dato.then((msg) => console.log(msg));
} else {
  console.log("Tipo non supportato");
}