function cadastrarPessoas(){
	
	var nome = document.getElementById("nome").value;

alert(nome);

	


	var html = "<tr>";
	html += "<td> " + nome + "</td>";
	html += "<td>11</td>";
	html += "<td>55</td>";
	html += "<td>45</td>";
	html += "<td>74s</td>";
	html += "</tr>";
	document.getElementById("registros").innerHTML += html;
}