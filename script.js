const myGrid = document.getElementById("grid");

let sceltaUtente = prompt("Scegli livello");


if(sceltaUtente ==="facile"){

    const createMyElement = () => {
        const node = document.createElement("div");
        node.className = "square_easy";
        return node;
    }

    for ( let i = 0; i < 100; i++){
        const divEasy = createMyElement();

        myGrid.append(divEasy);
    }
    console.log("hai scelto facile");
} else if (sceltaUtente === "medio"){

    const createMyElement = () => {
        const node = document.createElement("div");
        node.className = "square_medium";
        return node;
    }

    for ( let i = 0; i < 81; i++){
        const divEasy = createMyElement();

        myGrid.append(divEasy);
    }
    console.log("hai scelto medio");

}else if(sceltaUtente === "difficile"){

    const createMyElement = () => {
        const node = document.createElement("div");
        node.className = "square_hard";
        return node;
    }

    for ( let i = 0; i < 49; i++){
        const divEasy = createMyElement();

        myGrid.append(divEasy);
    }
   
    console.log("hai scelto difficile");
}