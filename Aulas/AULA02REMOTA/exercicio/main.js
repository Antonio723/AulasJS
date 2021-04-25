'mode strict'

const links = {
    "nome": "SENAI",
    "img": "./img/01.jpg",
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
const imagem = document.getElementById('avatar');
imagem.src= links.img;

const titulo = document.getElementById('titulo');
titulo.textContent= links.nome;

const a = document.createElement('a');


for (let i = 0; i < links['links'].length; i ++){
    const linkTree = document.getElementById('linkTree');
    const a = document.createElement('a');

    a.classList.add('link');

    a.href = links['links'][i]['url'];
    a.innerText = links['links'][i]['titulo'];

    linkTree.appendChild(a);
}
