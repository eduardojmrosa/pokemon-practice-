//Define o formulário do html como uma variável JS
var form = document.querySelector('form');
//Faz com que o botão de Buscar seja ouvido para acionar a função
form.addEventListener('submit', function(e){
    //Evita que a página seja atualizada quando acionar o botão de Buscar
    e.preventDefault();

    //Url da API
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    //Valor do input Name
    let name = document.getElementById('name');
    //Concatena a url com o inputname
    urlForm = urlForm + this.name.value
    //Transforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()
    //ID Content
    let response =  document.getElementById('content');
    //ID Pokemon
    let image = document.getElementById('imgPokemon');
    //Resposta em HTML
    let html = ''
    //Consulta na API, set de informações do pokémon e tratamento de erros
    fetch(urlForm)
        .then(response => response.json())
        .then(function(data){
            console.log(data)
            html = 'Nome:   ' + uppercase(data.name) + '<br>'
            html = html + 'Type: ' + uppercase(data.types[0].type.name)
            response.innerHTML = html
            image.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){   
            console.log(err)
        })

})
function uppercase(val){
    return val[0].toUpperCase() + val.substr(1)
}