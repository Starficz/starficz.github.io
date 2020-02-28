functionPlot({
	target: root,
	xAxis: { label: 'Armour', domain: [0, 3000] },
	yAxis: { label: 'DPS', domain: [0, 3000] },
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
			text: 'Basic Solider',
			color: 'red'
		},
		{
			x: 1000,
			text: 'Armored Heavy',
			color: 'red'
		}
	]
});