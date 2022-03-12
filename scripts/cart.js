window.onload = function () {
  let cart = document.querySelectorAll("button.addToCart");
  for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", () => {
      treatmentsDB(i);
    });
  }

  //pobieranie informacji o zabiegu
  function treatmentsDB(i) {
    fetch("database.json")
      .then((result) => result.json())
      .then(function (data) {
        totalCost(data.treatments[i]);
        totalNumber();
        product(data.treatments[i], i);
      })
      .catch((err) => console.warn(err));
  }

  function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
    } else {
      localStorage.setItem("totalCost", product.price);
    }
  }

  function totalNumber(produc) {
    let cartNumber = localStorage.getItem("totalNumber");
    if (cartNumber != null) {
      cartNumber = parseInt(cartNumber);
      localStorage.setItem("totalNumber", cartNumber + 1);
    } else {
      localStorage.setItem("totalNumber", "1");
    }
  }

  function product(product, i) {
    localStorage.setItem("Treatment" + i, JSON.stringify(product));
  }
};
