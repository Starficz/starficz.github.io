function scalePlot(){
	//reset the plot
	document.getElementById('root').innerHTML = "";

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
}

window.addEventListener('load', function(event){
	scalePlot();
	document.getElementById('skillLv').value = 10;
	document.getElementById('expLv').value = 169;
	expLabel(169);

	loadData.then((characterTable)=>{
		var characterArray = Object.values(characterTable).sort((a, b) => ((a.rarity > b.rarity) > 0) ? -1 : 1);
		for (character of characterArray){
			document.getElementById("opSelectionScreen").appendChild(buildCharButton(character));
		}
	});
});

window.addEventListener('resize', function(event){
	scalePlot();
});

loadData;
