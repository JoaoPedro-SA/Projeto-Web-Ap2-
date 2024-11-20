valida_cpf = (cpf) => {
     let novo_cpf = '';
     for (let i = 0; i < cpf.length; i++) {
          if (cpf[i] !== '.' && cpf[i] !== '-') {
               novo_cpf += cpf[i];
          }
     }
     return novo_cpf
}
console.log(valida_cpf('049.242.320-25'));
console.log(valida_cpf('38187742003'));

valida_valor_nulo = (valor) => {
     if (valor === null || valor === undefined || valor === '') {
          alert(`preencher todos os campos`);
          throw new Error(`preencher todos os campos`);
     }
}

valida_email = (email) => {
     let e_um_email = false;
     for (let i = 0; i < email.length; i++) {
          if (email[i] === '@') {
               e_um_email = true;
               break
          }
     }
     if (e_um_email === false) {
          alert(`colocar um email valido`)
          throw new Error(`preencher todos os campos`);
     }
}

valida_dataN = (data) => {
     let idade = data[0] + data[1] + data[2] + data[3];
     if (parseInt(idade) > 120) {
          alert(`idade invalida vc ja estar morto 💀
               imposivel vc ter ${2024 - idade} anos`);
          throw new Error(`idade invalida`);
     }
}


// let ok = await confirm(
//     `
// ||  Confirme seus dados ||
//    NOME: ${nome.value}
//    EMAIL: ${email.value}
//    SENHA: ${senha.value}
//    CPF OU CNPJ: ${CPF_CNPJ.value}
//    DATA DE NACIMENTO: ${dateN.value}
//    TERMO: ${termo.value}
//     `
// );



    //  let ok = await confirm(

    //     `
    //     EMAIL: ${email.value}
    //     SENHA: ${senha.value} 
    //     `  

    //  );