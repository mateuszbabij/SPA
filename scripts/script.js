//background for dropdown menu
$("#navbarButton").on("click",function(){
        $("#drop-bg").toggleClass("collapse-bg")
});
//end

//wstawianie zabiegu do html
const cards = function (data, i) {
  $(".row").append(
    `<div class="col">
        <div class="card h-100" >
                <img src="../images/${data[i].image}.jpg" class="card-img-top" alt="..."/>
                <div class="card-body d-grid">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text"><br>${data[i].desc}</p>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"> <i class="fa-solid fa-hands"></i> Część ciała: ${data[i].area}</li>
                            <li class="list-group-item"> <i class="fa-solid fa-stopwatch"></i> Czas trwania: ${data[i].time} min</li>
                            <li class="list-group-item"> <i class="fa-solid fa-dollar-sign"></i> Cena: ${data[i].price}zł</li>
                          </ul>
                          <br>
                        <a href="#" class="btn btn-primary">Dodaj do koszyka</a>
                </div>
        </div>
  </div>`
  );
};

//pobieranie zabiegow z JSONa
const database = fetch("database.json")
  .then((result) => result.json())
  .then(function (data) {
    console.log(data.treatments);
    for (let i = 0; i < data.treatments.length; i++) {
      cards(data.treatments, i);
    }
  })
  .catch((err) => console.warn(err));
//koniec pobierania