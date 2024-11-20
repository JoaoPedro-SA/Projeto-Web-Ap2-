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
				console.log(endereco);
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

const url = "https://go-wash-api.onrender.com/api/auth/address";
async function cadastroUsuario() {
	let title = document.getElementById("title").value;
	let cep = document.getElementById("cep").value;
	let address = document.getElementById("address").value;
	let number = document.getElementById("number").value;
	let complement = document.getElementById("complement").value;

	
	let usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(usuario);

	let api = await fetch(url, {
		method: "POST",
		body: JSON.stringify({
			title: `${title}`,
			cep: `${cep}`,
			address: `${address}`,
			number: `${number}`,
			complement: `${complement}`,
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${usuario.access_token}`,
		},
	});

	if (api.ok) {
		let resposta = await api.json();
		console.log(resposta);
		alert("cadastro realizado com sucesso");
		window.location.href = "music.html";
		return;
	}
	let respostaErro = await api.json();
	console.log(respostaErro.data.errors.cpf_cnpj);
	alert("Erro na realização de cadastro");
}
