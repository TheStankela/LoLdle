const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");
var tabelabody = document.getElementById("tablebodydiv");
var champs = [], champ;

function GetChampions() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://localhost:7036/api/Champion/All", false);
    xhttp.send();

    champs = JSON.parse(xhttp.responseText);
    
}
function GetChampion() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://localhost:7036/api/Champion", false);
    xhttp.send();

    champ = JSON.parse(xhttp.responseText);

}
GetChampion();
GetChampions();

function addChampions(selectedChampion) {
    options.innerHTML = "";
    champs.forEach(champion => {
        let isSelected = champion == selectedChampion ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${champion.name}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addChampions();
function updateName(selectedLi) {
    var guessedChamp = champs.find(x => x.name === selectedLi.innerHTML);
    searchInp.value = "";
    addChampions(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;

    champs.splice(champs.findIndex(c => c.name === selectedLi.innerHTML), 1);
    addChampions();

    checkAllFields(guessedChamp);

    if (selectedLi.innerHTML === champ.name) {
        alert("You've successfully guessed the champion! Todays champion was: " + champ.name);
        selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
    }
}
searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = champs.filter(data => {
        return data.name.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data.name}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

function checkAllFields(guessedChamp) {
    var element;
    if (guessedChamp.name === champ.name) {
        element = "<div class=\"tilegreen\">" + guessedChamp.name + "</div>";
    }
    else {
        if (champ.name.includes(guessedChamp.name))
        {
            element = "<div class=\"tileyellow\">" + guessedChamp.name + "</div>";
        }
            
        else { element = "<div class=\"tilered\">" + guessedChamp.name + "</div>"; }
    }

    if (guessedChamp.gender === champ.gender) {
        element += "<div class=\"tilegreen\">" + guessedChamp.gender + "</div>";
    }
    else {
        if (guessedChamp.gender.indexOf(champ.gender) !== -1) {
            element += "<div class=\"tileyellow\">" + guessedChamp.gender + "</div>";
        }

        else { element += "<div class=\"tilered\">" + guessedChamp.gender + "</div>"; }
    } 

    if (guessedChamp.position === champ.position) {
        element += "<div class=\"tilegreen\">" + guessedChamp.position + "</div>";
    }
    else {
        if (guessedChamp.position.indexOf(champ.position) !== -1 ) {
            element += "<div class=\"tileyellow\">" + guessedChamp.position + "</div>";
        }

        else { element += "<div class=\"tilered\">" + guessedChamp.position + "</div>"; }
    } 

    if (guessedChamp.rangeType === champ.rangeType) {
        element += "<div class=\"tilegreen\">" + guessedChamp.rangeType + "</div>";
    }
    else {
        if (guessedChamp.rangeType.indexOf(champ.rangeType) !== -1) {
            element += "<div class=\"tileyellow\">" + guessedChamp.rangeType + "</div>";
        }

        else { element += "<div class=\"tilered\">" + guessedChamp.rangeType + "</div>"; }
    }

    if (guessedChamp.region === champ.region) {
        element += "<div class=\"tilegreen\">" + guessedChamp.region + "</div>";
    }
    else {
        if (guessedChamp.region.indexOf(champ.region) !== -1) {
            element += "<div class=\"tileyellow\">" + guessedChamp.region + "</div>";
        }

        else { element += "<div class=\"tilered\">" + guessedChamp.region + "</div>"; }
    }

    if (guessedChamp.releaseYear === champ.releaseYear) {
        element += "<div class=\"tilegreen\">" + guessedChamp.releaseYear + "</div>";
    }
    else {
        if (guessedChamp.releaseYear.indexOf(champ.releaseYear) !== -1) {
            element += "<div class=\"tileyellow\">" + guessedChamp.releaseYear + "</div>";
        }

        else { element += "<div class=\"tilered\">" + guessedChamp.releaseYear + "</div>"; }
    }

    if (guessedChamp.resource === champ.resource) {
        element += "<div class=\"tilegreen\">" + guessedChamp.resource + "</div>";
    }
    else {
        if (guessedChamp.resource.indexOf(champ.resource) !== -1) {
            element += "<div class=\"tileyellow\">" + guessedChamp.resource + "</div>";
        }

        else { element += "<div class=\"tilered\">" + guessedChamp.resource + "</div>"; }
    }
    
    if (guessedChamp.species === champ.species) {
        element += "<div class=\"tilegreen\">" + guessedChamp.species + "</div>";
    }
    else {
        if (guessedChamp.species.indexOf(champ.species) !== -1) {
            element += "<div class=\"tileyellow\">" + guessedChamp.species + "</div>";
        }

        else { element += "<div class=\"tilered\">" + guessedChamp.species + "</div>"; }
    }

    tabelabody.innerHTML += "<div class=\"css-table-row animate\">"+ element +"</div>";
}
