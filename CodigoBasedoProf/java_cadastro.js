// async function getData() {
//      const url = "https://go-wash-api.onrender.com/api/user";
//      console.log(url);
//      try {
//        const response = await fetch(url);
//        if (!response.ok) {
//          throw new Error(`Response status: ${response.status}`);
//        }
   
//       const json = await response.json();
//         console.log(json);
//      } catch (error) {
//        console.error(error.message);
//      }
//    }
// getData();


const url = 'https://go-wash-api.onrender.com/api/user';
console.log(url);
let resposta;

async function cadastro() {
    let name =  await 'pedro222';
    let email = await 'xepaxe7434@obisims.com';

    try {
        let api = await fetch(url, {
            method: "POST", // Verifique se o método correto é POST ou PUT
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "user_type_id": 1,
                "password": "113226",
                "cpf_cnpj": "98481967068",
                "terms": 1,
                "birthday": "2000-12-04"
            })
        });

        if (api.ok) {
            let response = await api.json();
            console.log(response);        
        } else {
            let responseError = await api.json();
            console.log(responseError.data.Erros.cpf_cnpj[0]);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

cadastro();


