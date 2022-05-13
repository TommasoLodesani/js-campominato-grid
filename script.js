

const myGrid = document.getElementById("grid");

const myButton = document.getElementById("play");

const myButtonReset = document.getElementById("reset");

// let sceltaUtente = prompt("Scegli livello");



myButton.addEventListener("click",

    function () {

        let sceltaUtente = document.getElementById("inputText").value;
        console.log(sceltaUtente);



        if (sceltaUtente === "facile") {

            const createMyElement = () => {
                const node = document.createElement("div");
                node.className = "square_easy";
                return node;
            }

            for (let i = 0; i < 100; i++) {
                const divEasy = createMyElement();

                divEasy.addEventListener("click",

                    function () {
                        this.classList.add("clicked-green");
                    }
                )

                myGrid.append(divEasy);
            }
            console.log("hai scelto facile");


        } else if (sceltaUtente === "medio") {

            function createMyElement() {
                const node = document.createElement("div");
                node.className = "square_medium";
                return node;
            }

            for (let i = 0; i < 81; i++) {
                const divMedium = createMyElement();

                divMedium.addEventListener("click",

                    function () {
                        this.classList.add("clicked-green");
                    }
                )

                myGrid.append(divMedium);
            }
            console.log("hai scelto medio");

        } else if (sceltaUtente === "difficile") {

            const createMyElement = () => {
                const node = document.createElement("div");
                node.className = "square_hard";
                return node;
            }

            for (let i = 0; i < 49; i++) {
                const divHard = createMyElement();

                divHard.addEventListener("click",

                    function () {
                        this.classList.add("clicked-green");
                    }

                )

                myGrid.append(divHard);
            }

            console.log("hai scelto difficile");
        }



    }

)

myButtonReset.addEventListener("click",

    function () {
        document.getElementById("inputText").value = "";
    }

)