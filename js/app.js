function onSuccess(data){
	
	$(data).find('medicamento').each(function(){
	    var nombre = $(this).find('nombre').text();
		var descripcion = $(this).find('descripcion').text();
        $("#content").show()
        $("#content").append("<tr><td>"+nombre+"</td><td>"+descripcion+"</td></tr>");
		
    });

}
function cargarCitas(){
	

	$.ajax({
		type: "GET",
		url: "data/medicamentos.xml",
		contentType: "text/xml",
		dataType: "xml",
		success: onSuccess
	});
}
(function(){
	document.getElementById("med").onclick = cargarCitas;
	
    
})();


