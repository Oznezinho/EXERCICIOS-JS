let contador = 1;

const inc = () => {
    contador += 1;
    fetchPersonagem(contador);
    //console.log(contador);
}

const dec = () => {
    if(contador > 1){
        contador -= 1;
        fetchPersonagem(contador);
        //console.log(contador);
    }    
}

const fetchPersonagem = async(contador)=>{
    let url = 'https://rickandmortyapi.com/api/character/' + contador;
    const api = await fetch(url);
    const data = await api.json();
    //console.log(data);
    imageRES= document.getElementById("imagem");
    imageRES.src = data.image;
    nomeRES = document.getElementById("nome");
    nomeRES.innerText = data.name;
    descricaoRES = document.getElementById("descricao");
    descricaoRES.innerText = "Status: " + data.status + " /Espécie: " + 
    data.species + " /Genêro: " + 
    data.gender + " /Origem: " +
    data.origin.name + " /Tipo: " +
    data.type;
}

fetchPersonagem(contador);