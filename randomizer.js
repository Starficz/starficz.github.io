var characterArray;
var toggled = Array(6);

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

function toggle(rarity) {
	var ops = document.getElementsByClassName("op-rarity-".concat(rarity));

	if (toggled[rarity]){
		for (op of ops){
			op.classList.remove("active");
			op.setAttribute("aria-pressed", "false");
		}
		toggled[rarity] = false;
	}
	else{
		for (op of ops){
			op.classList.add("active");
			op.setAttribute("aria-pressed", "true");
		}
		toggled[rarity] = true;
	}
}

function generateRandomSquad(){
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

	maps = ["LS-5", "AP-5", "CE-5", "SK-5", "4-10", "4-7", "5-10", "5-7"];
	document.getElementById("opRandomizerMaps").innerText = "Map: " + maps[Math.floor(Math.random() * maps.length)];

	rules = ["Primaries - You may only use every operator's first skill", "No Pause - Game cannot be paused during the run", "2x Speed Only - Play on double speed", "Permadeath - After an operator dies or retreats, it cannot be brought back."];
	document.getElementById("opRandomizerRules").innerText = "Rules: " + rules[Math.floor(Math.random() * rules.length)];

}


window.addEventListener('load', function(event){
	$('[data-toggle="tooltip"]').tooltip()
	loadData.then((characterTable)=>{
		characterArray = Object.values(characterTable).sort((a, b) => ((a.rarity > b.rarity) > 0) ? -1 : 1);

		for (character of characterArray){
			document.getElementById("opSelectionScreen").appendChild(buildCharButton(character));
		}
		document.getElementById("generateRandomSquad").onclick = generateRandomSquad;
	});
	toggled.fill(false);
	
	document.getElementById("toggle5").onclick = function(){toggle(5)};
	document.getElementById("toggle4").onclick = function(){toggle(4)};
	document.getElementById("toggle3").onclick = function(){toggle(3)};
	document.getElementById("toggle2").onclick = function(){toggle(2)};
	document.getElementById("toggle1").onclick = function(){toggle(1)};
	document.getElementById("toggle0").onclick = function(){toggle(0)};
});