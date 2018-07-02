function env(){
    alert('Formulario Enviado');
}

function com(){
    alert('Comentario añadido');
}

(function(){
    document.getElementById("btnenviar").onclick = env;
    document.getElementById("btn1").onclick = com;
    document.getElementById("btn2").onclick = com;
    
})();