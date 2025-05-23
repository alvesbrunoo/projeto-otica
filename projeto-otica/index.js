
function scrollCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const scrollAmount = 320; // pode ajustar isso pro tamanho do seu produto
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}


// const products = [
//       // Página 1
//       [
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.06.24_f3520b23.jpg",
//           title: "ÓCULOS DE SOL UNISSEX THE BEATLES",
//           desc: "RETANGULAR POLARIZADO DEGRADÊ PRETO"
//         },
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.10.17_b7c66d93.jpg",
//           title: "ÓCULOS DE SOL MASCULINO BAMBU E",
//           desc: "MADEIRA QUADRADO POLARIZADO PRETO"
//         },
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.06.26_34834f96.jpg",
//           title: "ÓCULOS DE SOL MASCULINO BAMBU E",
//           desc: "MADEIRA QUADRADO POLARIZADO VERDE"
//         },
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.06.25_6f6f102b.jpg",
//           title: "ÓCULOS DE SOL MASCULINO BAMBU E",
//           desc: "MADEIRA QUADRADO POLARIZADO DEGRADÊ"
//         }
//       ],
//       // Página 2
//       [
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.06.26_3f8d8953.jpg",
//           title: "ÓCULOS MODELO 5",
//           desc: "DESCRIÇÃO DO MODELO 5"
//         },
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.06.26_c44b2b99.jpg",
//           title: "ÓCULOS MODELO 6",
//           desc: "DESCRIÇÃO DO MODELO 6"
//         },
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.06.25_7e6cde7d.jpg",
//           title: "ÓCULOS MODELO 7",
//           desc: "DESCRIÇÃO DO MODELO 7"
//         },
//         {
//           image: "masculino/oculos masculino/Imagem do WhatsApp de 2025-05-23 à(s) 11.06.25_459a7ed8.jpg",
//           title: "ÓCULOS MODELO 8",
//           desc: "DESCRIÇÃO DO MODELO 8"
//         }
//       ]
//     ];

//     let currentPage = 0;

//     function renderProducts() {
//       const container = document.getElementById("product-container");
//       container.innerHTML = "";

//       products[currentPage].forEach(prod => {
//         const col = document.createElement("div");
//         col.className = "col";
//         col.innerHTML = `
//           <div class="product-card border">
//             <img src="${prod.image}" class="product-image img-fluid" alt="${prod.title}">
//             <p class="mb-1"><strong>${prod.title}</strong><br>${prod.desc}</p>
//             <p class="price">R$ 399,98</p>
//             <p class="installment">ou 4x R$ 99,99</p>
//           </div>
//         `;
//         container.appendChild(col);
//       });

//       document.getElementById("pageIndicator").textContent = String(currentPage + 1).padStart(2, "0");
//     }

//     function changePage(direction) {
//       const totalPages = products.length;
//       currentPage += direction;

//       if (currentPage < 0) currentPage = 0;
//       if (currentPage >= totalPages) currentPage = totalPages - 1;

//       renderProducts();
//     }

//     document.getElementById("totalPages").textContent = String(products.length).padStart(2, "0");
//     renderProducts();