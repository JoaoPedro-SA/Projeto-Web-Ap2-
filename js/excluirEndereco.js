
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const url ="https://go-wash-api.onrender.com/api/auth/address/"+id;

async function excluirEndereco(){
	let usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(usuario);
    
	 api = await fetch("https://go-wash-api.onrender.com/api/auth/address/"+ id, {
		method:"DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${usuario.access_token}`
		},
	})
	if (api.ok) {
		let resposta = await api.json()
		alert("Exclusão realizada com sucesso");
		window.location.href = "lista.html";
		return;
	}
}
	excluirEndereco()