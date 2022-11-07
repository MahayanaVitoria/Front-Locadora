function cadastrarCliente(){
	//validacao dos inputs de cadastro
	
	if(!validaNome('name'))
	{
		return
	}
	
	if(!validaNascimento('birth'))
	{
		return
	}
	
}

function validaNome(id){
    //validação do input do nome completo

    let inputNome = document.getElementById(id)
    if (inputNome.value.trim().split(' ').length >= 2)
    {
        inputNome.style.border = 0
        return true
    }
    else
    {
        inputNome.style.border = 'solid 1px red'
        return false
    }
}

function validaNasc(id){
    //validação do input de data de nascimento

    let inputNasc = document.getElementById(id)
    if (inputNasc.value.length > 0)
    {
        inputNasc.style.border = 0
        return true
    }
    else
    {
        inputNasc.style.border = 'solid 1px red'
        return false
    }
}

function validaCep(){
    //validação do input de cep
    fetch('https://viacep.com.br/ws/' + document.getElementById('cep').value + '/json')
    .then(response => response.json())
    .then((output) =>
    {
        document.getElementById('adress').value = output.logradouro
    })
}