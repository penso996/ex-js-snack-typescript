// Snack 1
let dato: unknown;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else if (typeof dato === "number") {
  let total = dato * 2;
  console.log(total);
} else if (typeof dato === "boolean") {
  console.log(dato ? "Sì" : "No")
} else {
  console.log("Tipo non supportato");
}