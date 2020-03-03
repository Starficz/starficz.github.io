function expLabel(expLv){
	expLv = parseInt(expLv)
	var eliteLvLabel = document.getElementById('eliteLvLabel');
	var expLvLabel = document.getElementById('expLvLabel');

	if(expLv < 50){
		eliteLvLabel.value = 0;
		expLvLabel.value = expLv + 1;
	}
	else{
		eliteLvLabel.value = Math.floor((expLv - 49) / 81) + 1;
		expLvLabel.value = ((expLv - 50) % 80) + 1;
	}
}

let loadData = new Promise((resolve, reject) =>{
	var characterTable;
	var characterArray;
	var character;

	fetch("character_table.json")
	.then((response) => {
		return response.json();
	}).then((characterTable) => {
		
		  setTimeout( function() {
		    resolve(characterTable);
		  }, 250) 
	});	
});


function buildCharButton(character){

	var btn = document.createElement('button');
	btn.className = "btn col-1 p-0 btn-outline-dark"
	btn.setAttribute("type", "button");
	btn.setAttribute("data-toggle", "button");
	btn.setAttribute("id", character.appellation);

	var portrait = document.createElement('img');
	portrait.className = "img-fluid";
	portrait.setAttribute("src", "img/avatars/" + character.phases[0].characterPrefabKey.replace(/_/g,"-") + "-1.png");

	var charName = document.createElement('div');
	charName.className = "text-center op-rarity-" + character.rarity;
	charName.innerText = character.appellation;

	btn.appendChild(portrait);
	btn.appendChild(charName);
	return btn;
}

function buildCharRandomizer(character){

	var card = document.createElement('div');
	card.className = "card col-1 p-0"

	var portrait = document.createElement('img');
	portrait.className = "card-img-top";
	portrait.setAttribute("src", "img/avatars/" + character.phases[0].characterPrefabKey.replace(/_/g,"-") + "-1.png");

	var charName = document.createElement('div');
	charName.className = "text-center op-rarity-" + character.rarity;
	charName.innerText = character.appellation;

	card.appendChild(portrait);
	card.appendChild(charName);
	return card;
}


