const email = document.querySelector('#email');
const senha = document.querySelector('#password');
let button_salva = document.querySelector('.button');

salvaDados = (login) => {
    localStorage.setItem("usuario", JSON.stringify(login));
    // alert('Login salvo com sucesso!'); não presisa 

}

button_salva.addEventListener('click', async () => {

    if ((email.value === "" || email.value === null || email.value === undefined)
        ||
        (senha.value === "" || senha.value === null || senha.value === undefined)) {
        alert('Os valores não pode ser vazios');
        return;
    }


    const url = 'https://go-wash-api.onrender.com/api/login';
    console.log(url);

    async function login() {


        try {
            let api = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
                },
                body: JSON.stringify({
                    "email": `${email.value}`,
                    "password": `${senha.value}`,
                    "user_type_id": 1
                })
            });


            if (api.ok) {
                let response = await api.json();
                console.log(response);
                salvaDados(response);
                // alert( JSON.stringify(response));
                alert(`
                Bem Vindo ${response.user.name}
                `)
                window.location.href = 'music.html';
            } else {
                let responseError = await api.json();
                alert(JSON.stringify(responseError.data.errors));
                if (responseError.data || responseError.data.Erros || responseError.data.Erros.cpf_cnpj) {
                    console.log(responseError.data.Erros.cpf_cnpj[0]);
                    alert(JSON.stringify(responseError.data.Erros.cpf_cnpj[0]));

                } else {
                    console.log('Erro desconhecido na resposta da API.');
                }
            }
        } catch (error) {
            alert(error);
            console.error('Erro na requisição:', error);
        }
    }

    let ok3 = await login();


});



