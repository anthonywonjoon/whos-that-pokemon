function createNav() {
    document.getElementById("navbar").innerHTML = `
    <div class="nav-container">
            <div class="nav-links">
                <ul>
                    <li><a href="./index.html">WHO'S THAT POKEMON</a></li>
                    <li style="float:right"><a href="./category.html">CATEGORIES</a></li>
                    <li style="float:right"><a href="./random.html">RANDOM</a></li>
                </ul>
            </div>
        </div>
    `
}
function startGame(){
    let randomId = Math.floor(Math.random() * 151); // get random id
    const currPoke = Object.keys(POKEMON)[randomId]; // choose random pokemon from POKEMON
    gameElements(currPoke);
}




function gameElements(currPoke) {
    let spriteURL = POKEMON[currPoke]["sprite"];
    document.getElementById("sprite").innerHTML = `<img style="filter:brightness(0%)" src="https://${spriteURL}"></img>`;
    document.getElementById("hint_type1").innerHTML = `<h2>Hint: ?</h2>`;
    document.getElementById("hint_type2").innerHTML = `<h2>Hint: ?</h2>`;
}




    
