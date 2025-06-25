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

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barangnya sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }

      console.log(this.total);
    },
  });
});

// Fungsi bantu konversi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
