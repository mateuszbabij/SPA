//background for dropdown menu
$("#navbarButton").on("click",function(){
        $("#drop-bg").toggleClass("collapse-bg")
});
//end

//wstawianie zabiegu do html
const cards = function (data, i) {
  $(".row").html(
    `<div class="col-12 col-sm-6 col-md-4 justify-content-center">
        <div class="card">
                <img src="../images/${data[i].image}.jpg" class="card-img-top" alt="..."/>
                <div class="card-body d-grid">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text">${data[i].desc}</p>
                        <a href="#" class="btn btn-primary">Zarezweruj</a>
                </div>
        </div>
  </div>`
  );
};

//pobieranie zabiegow
const database = fetch("database.json")
  .then((result) => result.json())
  .then(function (data) {
    console.log(data.treatments);
    for (let i = 0; i < 3; i++) {
      cards(data.treatments, i);
    }
  })
  .catch((err) => console.warn(err));
