const userName =  document.querySelector('#lolo');
const btn = document.querySelector('#btn');
const div = document.querySelector('.data');

btn.addEventListener( 'click', (element) => {
    element.preventDefault();
    pedir()
}); 




const pedir = async () => {
    if (userName.value){
        let  peticion = await fetch(`https://api.github.com/users/${userName.value}`)
        let resultado = (await peticion.text()).split(/\n/);
        div.innerHTML = '';
        console.log(peticion.status)
        for (let index = 0; index < resultado.length; index++) {
            console.log(resultado[index]);
            div.innerHTML += resultado[index] + '<br>';
        }
    }
    else div.innerHTML = '<b>Debes introducir un nombre de usuario</b>';
}
