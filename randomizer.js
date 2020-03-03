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
	var indexs = [...Array(characterArray.length).keys()]
	indexs = shuffle(indexs);

	document.getElementById("opRandomizer").textContent = "";

	var count = 0;
	var index = 0;
	while (count < 12){

		if (document.getElementById(characterArray[indexs[index]].appellation).getAttribute("aria-pressed") === "false"){
			document.getElementById("opRandomizer").appendChild(buildCharRandomizer(characterArray[indexs[index]]));
			count = count + 1;
		}
		index = index + 1;
	}
}


window.addEventListener('load', function(event){
	loadData.then((characterTable)=>{
		characterArray = Object.values(characterTable).sort((a, b) => ((a.rarity > b.rarity) > 0) ? -1 : 1);

		for (character of characterArray){
			document.getElementById("opSelectionScreen").appendChild(buildCharButton(character));
		}
	});
});