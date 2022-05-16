

const myGrid = document.getElementById("grid");

const myButton = document.getElementById("play");

const selectLev = document.getElementById("level");



// funzione creazione div

const createMyElement = (classDiv) => {
    const node = document.createElement("div");
    node.className = classDiv;
    return node;
}


myButton.addEventListener("click",

    function () {

        let nCelle, classCelle;

        // svuoto la griglia
        myGrid.innerHTML = "";

        // prendiamo il valore della select
        const chooseLevel = parseInt(selectLev.value);

        // settare le varibile a seconda del livello

        switch (chooseLevel){

            case 0:
            default:
            nCelle = 100;
            classCelle = "square_10";
            break;

            case 1:
            nCelle = 81;
            classCelle = "square_9";
            break;

            case 2:
            nCelle = 49;
            classCelle = "square_7";
            break;

        }
       
        const myNewArrRandom = createRandUniqueNumArray(nCelle, 1, nCelle);
        console.log(myNewArrRandom);

       
        for (let i = 0; i < myNewArrRandom.length ; i++) {


            const divEle = createMyElement(classCelle);

            let arrItem = myNewArrRandom[i];

            divEle.addEventListener("click",

                function () {
                    divEle.append(arrItem);
                    if( arrItem % 2 === 0){
                        this.classList.add("clicked-green");
                    } else{
                        this.classList.add("clicked-red");
                    }
                }
            )

            myGrid.append(divEle);
        }
        

    }

)


// funzioni

function createRandUniqueNumArray (numItems, min, max){
    const arrInt = [];
    while(arrInt.length < numItems){
        let randNumInt = getRandomNumb(min, max);
        if(!arrInt.includes(randNumInt)){
            arrInt.push(randNumInt);
        }
    }
    return arrInt;
}

function getRandomNumb(rangeMin, rangeMax) {

    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;

}

function PariODispari(numeroCheck) {

    if (numeroCheck % 2 === 0) {
        return "Pari";

    } else {
        return "Dispari";
    }
}
