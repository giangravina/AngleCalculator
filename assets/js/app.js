$('#calculate').click(function(e){
	e.preventDefault();

	var a = Number($('#shape-degree').val());
	console.log(a);
	

	if(a <= 89){
		$('#answer').html('Acute Angle');
	} else 
	if(a === 90){
		$('#answer').html('Right Angle');
	} else 
	if(a <= 91){
		$('#answer').html('Obtuse Angle');
	} else
	if(a === 180){
		$('#answer').html('Straight Angle');
	};

	})

