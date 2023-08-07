const listRef = document.querySelector(".product-list");
const formRef = document.querySelector("form");
formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const { productName, submitProduct } = e.currentTarget.elements;

  if (!productName.value) {
    return alert("Sorry, invalid item");
  }

  createMarkup(productName.value);

  const productItemsRef = document.querySelectorAll(".product-item");
  productItemsRef.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.currentTarget.remove();
    });
  });

  e.currentTarget.reset();
});

function createMarkup(data) {
  const markup = `<li class="product-item"><button class="product-button">${data}</button></li>`;
  listRef.insertAdjacentHTML("afterbegin", markup);
}
