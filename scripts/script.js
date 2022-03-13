<<<<<<< HEAD
//background for dropdown menu
$("#navbarButton").on("click", function () {
  $("#drop-bg").toggleClass("collapse-bg");
});
//end

//wstawianie zabiegu do html
const cards = function (data) {
  for (let i = 0; i < data.length; i++) {
    $(".insertCard").append(
      `<div class="col">
        <div class="card h-100" >
                <img src="images/${
                  data[i].image
                }.jpg" class="card-img-top" alt="..."/>
                <div class="card-body d-grid">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text"><br>${data[i].desc}</p>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"> <i class="fa-solid fa-hands"></i> Część ciała: ${
                              data[i].area
                            }</li>
                            <li class="list-group-item"> <i class="fa-solid fa-stopwatch"></i> Czas trwania: ${
                              data[i].time
                            } min</li>
                            <li class="list-group-item"> <i class="fa-solid fa-dollar-sign"></i> Cena: ${
                              data[i].price
                            }zł</li>
                          </ul>
                          <br>
                        <button id="btn_${[
                          i,
                        ]}" type="button" class="btn btn-primary addToCart" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
        Zarezerwuj
      </button>
                </div>
        </div>
  </div>`
    );
  }
};

//wstawianie listy do wybierania pokoi & gosci, do modala
const rooms = function () {
  $(".modal-body").append(
    `<select id="gosc" class="form-select form-select1" aria-label="Default select example">
    <option selected>Liczba gości</option>
    </select>
    <br>
        <div id="akordeon" class="accordion" id="accordionExample">
    </div>`
  );
};

//dodawanie pokoi modala
const roomsid = function (data) {
  const selected = $("#gosc option:selected()").text();
  console.log(selected);
  for (let i = 0; i < data.length; i++) {
    if (data[i].guests >= Number(selected)) {
      $("#akordeon").append(
        `<div class="accordion-item">
    <h2 class="accordion-header" id="${"heading" + (i + 1)}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="${
        "#collapse" + (i + 1)
      }"   aria-expanded="false" aria-controls="${"collapse" + (i + 1)}">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"> ${
        data[i].name
      }
      </button>
    </h2>
    <div id="${
      "collapse" + (i + 1)
    }" class="accordion-collapse collapse" aria-labelledby="${
          "heading" + (i + 1)
        }" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Opis pokoju.</strong> 
      </div>
    </div>
  </div>`
      );
    } else {
      continue;
    }
  }
};

//dodawanie ilosci gosci do listy
const roomsguest = function (data) {
  for (let i = 0; i < data.length; i++) {
    $(".form-select1").append(
      `<option value="${i + 1}">${data[i].guests}</option>`
    );
  }
};

//pobieranie zabiegow z JSONa
const database1 = fetch("database.json")
  .then((result) => result.json())
  .then(function (data) {
    console.log(data.treatments);
    cards(data.treatments);
  })
  .catch((err) => console.warn(err));
//koniec pobierania

//pobieranie pokoi z JSONa
const database2 = fetch("database.json")
  .then((result) => result.json())
  .then(function (data) {
    // rooms();
    // roomsguest(data.rooms);
  })
  .catch((err) => console.warn(err));
//koniec pobierania

// Data Picker Initialization
$(document).ready(function () {
  $("#datepicker").datepicker();
});

//dodawanie pokoi po wybraniu ilosci gosci
$(document).one("change", "#gosc", function () {
  fetch("database.json")
    .then((result) => result.json())
    .then(function (data) {
      // roomsid(data.rooms); dodawanie pokoi do modala, wyłączone
    })
    .catch((err) => console.warn(err));
});
=======
//background for dropdown menu
$("#navbarButton").on("click", function () {
  $("#drop-bg").toggleClass("collapse-bg");
});
//end

//wstawianie zabiegu do html
const cards = function (data) {
  for (let i = 0; i < data.length; i++) {
    $(".insertCard").append(
      `<div class="col">
        <div class="card h-100" >
                <img src="images/${
                  data[i].image
                }.jpg" class="card-img-top" alt="..."/>
                <div class="card-body d-grid">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text"><br>${data[i].desc}</p>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"> <i class="fa-solid fa-hands"></i> Część ciała: ${
                              data[i].area
                            }</li>
                            <li class="list-group-item"> <i class="fa-solid fa-stopwatch"></i> Czas trwania: ${
                              data[i].time
                            } min</li>
                            <li class="list-group-item"> <i class="fa-solid fa-dollar-sign"></i> Cena: ${
                              data[i].price
                            }zł</li>
                          </ul>
                          <br>
                        <button id="btn_${[
                          i,
                        ]}" type="button" class="btn btn-primary addToCart" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
        Zarezerwuj
      </button>
                </div>
        </div>
  </div>`
    );
  }
};

//wstawianie listy do wybierania pokoi & gosci, do modala
const rooms = function () {
  $(".modal-body").append(
    `<select id="gosc" class="form-select form-select1" aria-label="Default select example">
    <option selected>Liczba gości</option>
    </select>
    <br>
        <div id="akordeon" class="accordion" id="accordionExample">
    </div>`
  );
};

//dodawanie pokoi modala
const roomsid = function (data) {
  const selected = $("#gosc option:selected()").text();
  console.log(selected);
  for (let i = 0; i < data.length; i++) {
    if (data[i].guests >= Number(selected)) {
      $("#akordeon").append(
        `<div class="accordion-item">
    <h2 class="accordion-header" id="${"heading" + (i + 1)}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="${
        "#collapse" + (i + 1)
      }"   aria-expanded="false" aria-controls="${"collapse" + (i + 1)}">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"> ${
        data[i].name
      }
      </button>
    </h2>
    <div id="${
      "collapse" + (i + 1)
    }" class="accordion-collapse collapse" aria-labelledby="${
          "heading" + (i + 1)
        }" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Opis pokoju.</strong> 
      </div>
    </div>
  </div>`
      );
    } else {
      continue;
    }
  }
};

//dodawanie ilosci gosci do listy
const roomsguest = function (data) {
  for (let i = 0; i < data.length; i++) {
    $(".form-select1").append(
      `<option value="${i + 1}">${data[i].guests}</option>`
    );
  }
};

//pobieranie zabiegow z JSONa
const database1 = fetch("database.json")
  .then((result) => result.json())
  .then(function (data) {
    console.log(data.treatments);
    cards(data.treatments);
  })
  .catch((err) => console.warn(err));
//koniec pobierania

//pobieranie pokoi z JSONa
const database2 = fetch("database.json")
  .then((result) => result.json())
  .then(function (data) {
    // rooms();
    // roomsguest(data.rooms);
  })
  .catch((err) => console.warn(err));
//koniec pobierania

// Data Picker Initialization
$(document).ready(function () {
  $("#datepicker").datepicker();
});

//dodawanie pokoi po wybraniu ilosci gosci
$(document).one("change", "#gosc", function () {
  fetch("database.json")
    .then((result) => result.json())
    .then(function (data) {
      // roomsid(data.rooms); dodawanie pokoi do modala, wyłączone
    })
    .catch((err) => console.warn(err));
});
>>>>>>> 1e51d0fa8380afac5ac701c012e850b7dac92d20
