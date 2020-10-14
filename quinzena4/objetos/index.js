    let arrayDosConteudos = []

    function valorDoInput() {
        
        const post = {
            titulo: document.getElementById('titulo-post').value,
            autor: document.getElementById('autor-post').value,
            conteudo: document.getElementById('conteudo-post').value
        }
        
        arrayDosConteudos.push(post);
        
        console.log(arrayDosConteudos)
        
        document.getElementById('titulo-post').value = "";
        document.getElementById('autor-post').value = "";
        document.getElementById('conteudo-post').value = "";
    
        exibirNaTela(post);
    }
    
    function exibirNaTela(post) {
        const container = document.getElementById('container-de-posts');
        container.innerHTML += `<h1>${post.titulo}</h1><li>${post.autor}</li><li>${post.conteudo}</li>`
    } 