function onSuccess(data){
	//$("#quotes").append("<div></div>");
	$(data).find('cita').each(function(){
	    var autor = $(this).find('autor').text();
		var texto_c = $(this).find('texto').text();
		$("<div></div>").html(autor + ", " + texto_c).appendTo("#quotes ");
    });

}
function cargarCitas(){
	

	$.ajax({
		type: "GET",
		url: "data/citas.xml",
		contentType: "text/xml",
		dataType: "xml",
		success: onSuccess
	});
}
(function(){
	
	document.getElementById("gye").onclick = cargarCitas;

})();


