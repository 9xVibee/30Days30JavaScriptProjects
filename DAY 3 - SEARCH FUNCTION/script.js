function search() {
  const inputVal = document.getElementById("search").value.toUpperCase();
  const products = document.querySelectorAll(".product");
  const pName = document.getElementsByTagName("h2");

  for (let i = 0; i < products.length; i++) {
    let textContent = pName[i].textContent;
    if (textContent.toUpperCase().indexOf(inputVal) > -1) {
      products[i].style.display = "";
    } else products[i].style.display = "none";
  }
}
