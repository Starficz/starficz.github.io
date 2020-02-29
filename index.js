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
};

function loadData(){
	var characterTable;

	fetch("character_table.json")
  	.then((response) => {
  		return response.json();
  	}).then((characterTable) => {
  		console.log(characterTable);
  		document.getElementById('skillLv').value = 10;
		document.getElementById('expLv').value = 169;
		expLabel(169);
  	});
}


function scalePlot(){
	//reset the plot
	functionPlot({target: root});

	//find the new viewport size and correct the plot
	options.width = document.getElementById('root').offsetWidth;
	options.height = document.getElementById('root').offsetWidth * 2/3;
	functionPlot(options);
}

var options = {
	target: root,
	xAxis: { label: 'Armour', domain: [0, 2100] },
	yAxis: { label: 'DPS', domain: [0, 3000] },
	width: document.getElementById('root').offsetWidth,
	height: document.getElementById('root').offsetWidth * 2/3,
	tip: {
		renderer: function() {}
	},
	grid: false,
	disableZoom: true,
	data: [
		{
			fn: "900 - x",
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
};

window.addEventListener('load', function(event){
	scalePlot();
});

window.addEventListener('resize', function(event){
	scalePlot();
});

loadData();
