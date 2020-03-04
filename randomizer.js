var characterArray;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

generateRandomSquad.onclick = function generateRandomSquad(){
	var indexs = [...Array(characterArray.length).keys()];
	indexs = shuffle(indexs);

	document.getElementById("opRandomizer").textContent = "";

	var count = 0;
	var index = 0;
	var hasMedic = false;
	var hasVanguard = false;
	var hasGuard = false;
	var hasSniper = false;
	var hasCaster = false;
	var hasDefender = false;

	if (document.getElementById("fairMode").getAttribute("class").includes("active")){
		index = characterArray.length - 1;
		while (count < 6){
			if (document.getElementById(characterArray[indexs[index]].appellation).getAttribute("aria-pressed") === "false"){
				if (characterArray[indexs[index]].profession === "MEDIC" && !hasMedic){
					document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
					hasMedic = true;
					count = count + 1;
				}
				if (characterArray[indexs[index]].profession === "PIONEER" && !hasVanguard){
					document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
					hasVanguard = true;
					count = count + 1;
				}
				if (characterArray[indexs[index]].profession === "WARRIOR" && !hasGuard){
					document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
					hasGuard = true;
					count = count + 1;
				}
				if (characterArray[indexs[index]].profession === "SNIPER" && !hasSniper){
					document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
					hasSniper = true;
					count = count + 1;
				}
				if (characterArray[indexs[index]].profession === "CASTER" && !hasCaster){
					document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
					hasCaster = true;
					count = count + 1;
				}
				if (characterArray[indexs[index]].profession === "TANK" && !hasDefender){
					document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
					hasDefender = true;
					count = count + 1;
				}
			}
			index = index - 1;
		}
		index = 0;
		while (count < 12){
			if (document.getElementById(characterArray[indexs[index]].appellation).getAttribute("aria-pressed") === "false"){
				document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
				count = count + 1;
			}
			index = index + 1;
		}
	} else{
		while (count < 12){
			if (document.getElementById(characterArray[indexs[index]].appellation).getAttribute("aria-pressed") === "false"){
				document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
				count = count + 1;
			}
			index = index + 1;
		}
	}

	maps = ["LS-5", "AP-5", "CE-5", "SK-5", "4-10"];
	document.getElementById("opRandomizerRestrictions").innerText = "Map: " + maps[Math.floor(Math.random() * 5)];

}


window.addEventListener('load', function(event){
	loadData.then((characterTable)=>{
		characterArray = Object.values(characterTable).sort((a, b) => ((a.rarity > b.rarity) > 0) ? -1 : 1);

		for (character of characterArray){
			document.getElementById("opSelectionScreen").appendChild(buildCharButton(character));
		}
	});
});