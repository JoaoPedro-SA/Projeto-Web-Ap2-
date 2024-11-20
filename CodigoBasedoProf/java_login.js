const url = 'https://go-wash-api.onrender.com/api/login';
console.log(url);
let resposta;

async function login() {
    let email = 'xepaxe7434@obisims.com';

    try {
        let api = await fetch(url, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
            },
            body: JSON.stringify({
                "email": email,
                "password": "113226",
                "user_type_id": 1
            })
        });

        if (api.ok) {
            let response = await api.json();
            console.log(response);        
        } else {
            let responseError = await api.json();
            if (responseError.data && responseError.data.Erros && responseError.data.Erros.cpf_cnpj) {
                console.log(responseError.data.Erros.cpf_cnpj[0]);
            } else {
                console.log('Erro desconhecido na resposta da API.');
            }
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

login();
