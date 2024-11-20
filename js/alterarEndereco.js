function buscaCep() {
	let cep = document.getElementById("cep").value;
	if (cep != null) {
		let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

		let req = new XMLHttpRequest();
		req.open("GET", url);
		req.send();

		req.onload = function () {
			if (req.status === 200) {
				let endereco = JSON.parse(req.response);
				
				document.getElementById("cep").value = endereco.cep;
				document.getElementById(
					"address"
				).value = `${endereco.street}  (${endereco.neighborhood})`;
			} else if (req.status === 404) {
				alert("CEP invalido");
			} else {
				alert("Erro ao fazer a requisição");
			}
		};
	}
}

window.onload = function () {
	let cep = document.getElementById("cep");
	cep.addEventListener("change", buscaCep);
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const url ="https://go-wash-api.onrender.com/api/auth/address/"+id;
preenchimentoDeEndereco();

async function preenchimentoDeEndereco(){
    let usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(usuario);

    api = await 
    fetch("https://go-wash-api.onrender.com/api/auth/address/"+id,{
        method:"GET",
        headers:{
            Authorization: `Bearer ${usuario.access_token}`
        }})
		resposta = await api.json()
	
		document.getElementById("title").value = resposta.data.title
		document.getElementById("cep").value = resposta.data.cep
		document.getElementById("address").value = resposta.data.address
		document.getElementById("number").value = resposta.data.number
		document.getElementById("complement").value = resposta.data.complement
}

async function alterarEndereco(){
    let usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(usuario);

	let title = document.getElementById("title").value;
	let cep = document.getElementById("cep").value;
	let address = document.getElementById("address").value;
	let number = document.getElementById("number").value;
	let complement = document.getElementById("complement").value;
	console.log(title)
    const api = await fetch(url, {
		method: "POST",
        headers:{
			'Content-Type': 'application/json',
            "Authorization": `Bearer ${usuario.access_token}`
        },
		
		body: JSON.stringify({
			title: title,
			cep: cep,
			address: address,
			number: number,
			complement: complement
		})         
    })  
	
    if (api.ok) {
		let resposta = await api.json()
		alert("Alteração realizada com sucesso");
		window.location.href = "lista.html";
		return;
	}

}

