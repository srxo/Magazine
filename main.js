window.addEventListener('load', init);

//Globals
let url = 'http://localhost/Magazine/webservice/';
let allCars;
let datas = {};
let detailDialog;
let detailContent;
let carLocal = [];

/**
 * Initialize after the DOM is ready
 */
function init() {
    //Retrieve gallery
    allCars = document.getElementById('cars');
    allCars.addEventListener("click", buttonClickHandler);


    detailDialog = document.getElementById('car-detail')
    detailContent = document.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler)
    document.addEventListener('keyup', keyUpHandler);
    //Start the application with loading the API data
    getCars();

    let CarItemsString = localStorage.getItem('itemId');
    if (CarItemsString !== null) {
        carLocal = JSON.parse(CarItemsString);
    }

}

function getCars() {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(makeCars)
        .catch(ajaxErrorHandler);
}

/**
 *
 * @param data
 */
function makeCars(data) {

    console.log(data);

    for (let car of data) {

        console.log(car.name)

        let div = document.createElement('div');
        div.classList.add('car');
        if (carLocal.includes(`${car.id}`)) {
            div.classList.add('favcar');
        }
        allCars.appendChild(div);


        let h2 = document.createElement('h2');
        h2.innerHTML = car.name;
        if (carLocal.includes(`${car.id}`)) {
            div.classList.add('favcar');
        }
        div.appendChild(h2);

        let carImage = document.createElement('img');
        carImage.src = `${car.images}`;
        carImage.classList.add('img');
        if (carLocal.includes(`${car.id}`)) {
            div.classList.add('favcar');
        }
        div.appendChild(carImage);

        let button = document.createElement('button');
        button.innerHTML = "about";
        button.dataset.type = 'about';
        button.dataset.id = car.id;
        if (carLocal.includes(`${car.id}`)) {
            div.classList.add('favcar');
        }
        div.appendChild(button);

        let favButton = document.createElement('button');
        favButton.innerHTML = "favorite";
        favButton.dataset.type = 'fav';
        favButton.dataset.id = car.id;
        if (carLocal.includes(`${car.id}`)) {
            favButton.innerHTML = "unfavorite";
        }
        div.appendChild(favButton);

        datas[car.id] = car;
    }
}

function buttonClickHandler(e) {


    console.log(e)

    let target = e.target;
    let dataset = target.dataset.type;


    if (target.nodeName === 'BUTTON' && dataset === "fav") {

        addFavorite(e)

    } else if (target.nodeName === 'BUTTON' && dataset === "about") {

        detailCar(e)
    }
}

function addFavorite(e) {


    let target = e.target;
    console.log(target);

    if (target.parentElement.classList.contains('favcar')) {
        target.parentElement.classList.remove('favcar')
        target.innerHTML = "favorite";
        let position = carLocal.indexOf(target.dataset.id)
        carLocal.splice(position, 1);
        localStorage.setItem('itemId', JSON.stringify(carLocal));
        console.log(carLocal);
    } else {
        target.parentElement.classList.add('favcar')
        target.innerHTML = "unfavorite";
        carLocal.push(target.dataset.id);
        localStorage.setItem('itemId', JSON.stringify(carLocal));
        console.log(carLocal);
    }
}

function detailCar(e) {
    let clickedItem = e.target;
    detailContent.innerHTML = '';
    let porsche = datas[clickedItem.dataset.id];

    detailDialog.showModal();
    allCars.classList.add('modal-open');


    let h2 = document.createElement('h2');
    h2.innerHTML = porsche.name;
    detailContent.appendChild(h2);

    console.log(porsche)

}

function detailModalClickHandler(e) {
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
        allCars.classList.remove('dialog-open');
    }
}

function keyUpHandler(e) {
    if (e.key === 'Escape') {
        allCars.classList.remove('dialog-open');
    }
}

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
}



