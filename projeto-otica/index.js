
function scrollCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const scrollAmount = 320; // pode ajustar isso pro tamanho do seu produto
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}