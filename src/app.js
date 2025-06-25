document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brazil",
        img: "Robusta Brazil.jpeg",
        price: 20000,
      },
      { id: 2, name: "Arabica Blend", img: "Arabica Blend.jfif", price: 25000 },
      { id: 3, name: "Primo Passo", img: "Primo Passo.jfif", price: 30000 },
      { id: 4, name: "Aceh Gayo", img: "Aceh Gayo.jfif", price: 35000 },
      {
        id: 5,
        name: "Sumatra Mandheling",
        img: "Sumatra Mandheling.jfif",
        price: 40000,
      },
    ],
  }));
});

//konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
