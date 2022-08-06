function createNav() {
    document.getElementById("navbar").innerHTML = `
    <div class="nav-container">
            <div class="nav-links">
                <ul>
                    <li><a href="./index.html">WHO'S THAT POKEMON</a></li>
                    <li style="float:right"><a href="./category.html">ABOUT</a></li>
                    <li style="float:right"><a href="./random.html">GEN 1</a></li>
                </ul>
            </div>
        </div>
    `
}

/** starts the game, picks random pokemon, calls element creation */
function startGame(){
    let randomId = Math.floor(Math.random() * 151); // get random id
    const currPoke = Object.keys(POKEMON)[randomId]; // choose random pokemon from POKEMON
    gameElements(currPoke);
}

/** creates the elements of the game (sprite, types, cry, etc) */
function gameElements(currPoke) {
    /** creating the sprite */
    let spriteURL = POKEMON[currPoke]["sprite"];
    document.getElementById("sprite").innerHTML = `<img style="filter:brightness(0%)" src="https://${spriteURL}"></img>`;

    /** displaying the pokemon type(s) */
    type = POKEMON[currPoke]["type"].split(" ");
    console.log(type.length);
    if (type.length == 2) { // if pokemon has two types
        document.getElementById("hint_type").innerHTML = `
            <h2>Hint: </h2>
            <div class="type_container">
                <div class="two-type type-${type[0]}">${type[0].toUpperCase()}</div>
                <div class="two-type type-${type[1]}">${type[1].toUpperCase()}</div>
            </div>
        `
    } else { // if pokemon has one type
        document.getElementById("hint_type").innerHTML = `
            <h2>Hint 1: </h2>
            <div class="one-type type-${type[0]}">${type[0].toUpperCase()}</div>
        `
    }

    /** displaying the pokemon cry */
    document.getElementById("hint_cry").innerHTML = `
        <h2>Hint 2: </h2>
        
        <audio controls>
            <source src="${POKEMON[currPoke]["cry"]}" type="audio/ogg">
        </audio>
    `;

    /** displaying the guess box */
    document.getElementById("game_board_guess").innerHTML = '<h2>GUESS</h2>';

    guess(currPoke);
}

function guess(currPoke) {

}




    
