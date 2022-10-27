

function calcula(){
	var x = Number(document.getElementById('x').value);
	var y = Number(document.getElementById('y').value);
	var op = document.getElementById('op').value;
	var resultado;
	if (op == "+") {
		resultado = x + y;
	}
	else if (op == '-') {
		resultado = x - y;
	}
	else if (op == 'x') {
		resultado = x * y;
	}
	else if (op == '/') {
		resultado = x/y
	}


	document.getElementById("saida").innerHTML = `${x} ${op} ${y} = ${resultado}`;
	console.log(`<br /> ${x} ${op} ${y} = ${resultado}`)
}

function chama(a){
	var value = Number(document.getElementById('n').value);
	value = value + a;
	if (value < 1){
		value = 0
	}
	document.getElementById('n').value = value;
}