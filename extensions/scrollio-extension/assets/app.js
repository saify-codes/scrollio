var button = document.querySelector("#loading_btn");
var container = document.querySelector(".product_container");
var url = "https://recognition-soccer-spiritual-dinner.trycloudflare.com/";

var count = 1;
var total_products = 0;
var products = [];

async function getProducts() {
  const response = await fetch(
    "https://scrollify-dev.myshopify.com/products.json"
  );
  ({ products } = await response.json());
  total_products = products.length;
  console.log(products);
  load_products()
  show_button()
  return products;
}

async function getStyles() {
  const response = await fetch(`${url}/api/getStyle`);
  return await response.json();
}

function load_products() {
  while (count <= total_products) {
    if (count % 10 == 0) {
      insert_product(products[count - 1]);
      console.log(count);
      count++;
      break;
    }
    insert_product(products[count - 1]);
    console.log(count);
    count++;
  }

  //   #===> if (count > total_products) {
  if (count >= total_products) {
    //do something when all products get loaded
    button.style.display = "none";
  }
}

function insert_product(product) {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class='single_product'>
        <img src='${product.images[0].src}'>
        <p class='title'>
          <a href="../products/${product.handle}">${product.title}</a>
        </p>
        <small>${product.variants[0].price} USD</small>
        
        
    </div>`
  );
}

function show_button(){
  button.style.display = 'block'
}

button.addEventListener("click", load_products);

window.onload = async () => {
  const styles = await getStyles();
  button.style.borderWidth = styles.border_size + "px";
  button.style.borderColor = styles.border_color;
  button.style.borderRadius = styles.border_radius + "px";
  button.style.backgroundColor = styles.background_color;
  button.style.fontSize = styles.font_size + "px";
  button.style.fontFamily = styles.font_family;
  button.style.color = styles.font_color;
  button.style.fontStyle = styles.font_style;
  button.innerText = styles.button_text;
  getProducts();
};

