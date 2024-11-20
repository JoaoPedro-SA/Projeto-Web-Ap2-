async function listarEndereco(){
    let usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(usuario);

    api = await 
    fetch("https://go-wash-api.onrender.com/api/auth/address",{
        method:"GET",
        headers:{
            Authorization: `Bearer ${usuario.access_token}`
        }
    })

    resposta = await api.json()
    resposta.data.forEach((endereco) => {
        const tr = document.createElement("tr");
        tr.innerHTML = "<td>" + endereco.id + "</td> <td>" + endereco.title + "</td> <td>"
        + endereco.cep + "</td> <td>" + endereco.address+ "</td> </td>" + endereco.number + 
        "</td> <td> <input type='button' value='Atualizar' onclick=\"window.location='alterarEndereco.html?id=" + endereco.id + "'\" /> " +
        "<input type='button' value='Deletar' onclick=\"window.location='excluirEndereco.html?id=" + endereco.id + "'\" /> </td>"
        
         ; 
        document.querySelector("tbody").appendChild(tr); 
    })
    
}

listarEndereco()

