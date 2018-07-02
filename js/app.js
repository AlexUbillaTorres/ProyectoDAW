function onSuccess(data){
	
	$(data).find('medicamento').each(function(){
	    var nombre = $(this).find('nombre').text();
		var descripcion = $(this).find('descripcion').text();
        $("#content").show()
        $("#content").append("<tr><td>"+nombre+"</td><td>"+descripcion+"</td></tr>");
		
    });

}
function cargarMedicamentos(){
	

	$.ajax({
		type: "GET",
		url: "data/medicamentos.xml",
		contentType: "text/xml",
		dataType: "xml",
		success: onSuccess
	});
}
function doctores(data){
	
	$(data).find('doctor').each(function(){
	    var nombre = $(this).find('nombre').text();
		var especialidad = $(this).find('especialidad').text();
        $("#doctor").show()
        $("#doctor").append("<tr><td>"+nombre+"</td><td>"+especialidad+"</td></tr>");
		
    });

}
function cargarDoctores(){
	

	$.ajax({
		type: "GET",
		url: "data/doctores.xml",
		contentType: "text/xml",  
		dataType: "xml",
		success: doctores
	});
}
(function(){
	document.getElementById("med").onclick = cargarMedicamentos;
    document.getElementById("doct").onclick = cargarDoctores;
	
    
})();


