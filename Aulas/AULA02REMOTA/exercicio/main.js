'mode strict'

const links = {
    "nome": "SENAI",
    "img": "avatar.jpg",
    "links": [
        {
            "titulo": "site pessoal",
            "url": "http://www.fernandoleonid.com.br/"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/fernandoleonid"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/fernandoleonid/"
        },
        {
            "titulo": "twitter",
            "url": "https://twitter.com/fernandoleonid"
        }
    ]
}

const titulo = document.getElementById('titulo');
var nomePessoa= links['nome'];
titulo.innerText = nomePessoa;

console.log(nomePessoa);

function teseta(){
    console.log(links.links.length);
    for(var i = 0;i < lenghtArray; i++){
        var link = links.links [i]['titulo'];
        var url = links.links [i] ['url'];
    }
}


// var link1 = links.links[0]['titulo'];
// var link2 = links.links[1]['titulo'];
// var link3 = links.links[2]['titulo'];
// var link4 = links.links[3]['titulo'];

// var url1 = links.links[0]['url'];
// var url2 = links.links[1]['url'];
// var url3 = links.links[2]['url'];
// var url4 = links.links[3]['url'];


// console.log(tamanho);