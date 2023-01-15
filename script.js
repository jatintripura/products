const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

////////////////////////////////////////////////////

const products = JSON.parse(localStorage.getItem("lsproduct")) || [];

////////////////////////////////////////////////////

const addProduct = (nameValue, imageValue, priceValue,textValue) => {
  products.push({
    image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });

  localStorage.setItem("lsproduct", JSON.stringify(products));
};

const creatElement = (nameValue, imageValue, priceValue, textValue) => {
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");
  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");
  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);
  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;
  const productName = document.createElement("h3");
  productName.innerText = nameValue;
  const productText = document.createElement("p");
  productText.innerText = textValue;
  productDiv.append(productImage, productPrice, productName, productText);
  productCol.appendChild(productDiv);
  allProductDiv.appendChild(productCol);
};

/////////////----Main-Function---///////////

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  ///////////////-------Task-1-----------///////////

  creatElement(nameValue, imageValue, priceValue, textValue);

  ////////////////--------Task-2-----///////////////

  addProduct(nameValue, imageValue, priceValue, textValue);
});
  /////////////--------Tak-3------///////////////

 products.forEach((product) => {
   creatElement(
     product["name"],
     product["image"],
     product["price"],
     product["text"]
   );
 });
