functionPlot({
	target: root,
	xAxis: { label: 'Armour', domain: [0, 2100] },
	yAxis: { label: 'DPS', domain: [0, 3000] },
	width: 580,
  	height: 400,
	tip: {
		renderer: function() {}
	},
	grid: false,
	disableZoom: true,
	data: [
		{
			fn: "2000 - x",
		}
	],
	annotations: [
		{
			x: 100,
			text: 'Basic Soldier',
		},
		{
			x: 250,
			text: 'Boss / Armored Caster',
		},
		{
			x: 500,
			text: 'Armored Soldier',
		},
		{
			x: 750,
			text: 'Armed Militant (Axe)',
		},
		{
			x: 1000,
			text: 'Armored Heavy',
		}
	]
});

function expLabel(expLv){
	var eliteLvLabel = document.getElementById('eliteLvLabel');
	var expLvLabel = document.getElementById('expLvLabel');

	if(expLv < 50){
		eliteLvLabel.value = 0;
		expLvLabel.value = parseInt(expLv) + 1;
	}
	else{
		eliteLvLabel.value = Math.floor((expLv - 49) / 81) + 1;
		expLvLabel.value = ((expLv - 50) % 80) + 1;
	}
};

function preLoad(){
	var characterTable;

	fetch("character_table.json")
  	.then(function(response){
  		characterTable = response.json();
  		consol.log(characterTable);
  		document.getElementById('skillLv').value = 10;
		document.getElementById('expLv').value = 169;
		expLabel(169);
  	});
}

preLoad();

