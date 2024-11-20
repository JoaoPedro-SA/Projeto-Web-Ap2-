    let usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(usuario);

async function logout(){
	let usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(usuario);
    
	 api = await fetch("https://go-wash-api.onrender.com/api/auth/logout", {
		method:"POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${usuario.access_token}`
		},
	})
    localStorage.removeItem("usuario")
	if (api.ok) {
		let resposta = await api.json()
		alert("Logout realizado com sucesso");
		window.location.href = "index.html";
		return;
	}
}
	logout()