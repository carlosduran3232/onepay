var protocolo = 'http';
var comunas = {
    1 : {
        1: "Pudahuel",
        2: "Santiago",
        3: "Las Condes",
        4: "La Reina",
        5: "Buin",
        6: "Cerrillos",
        7: "Colina",
        8: "Providencia",
        9: "La Cisterna",
        10: "Maipú",
        11: "Quilicura",
        12: "La Florida",
        13: "Peñalolén",
        14: "Melipilla",
        15: "Ñuñoa",
        16: "Huechuraba",
        17: "Puente Alto",
        18: "Recoleta",
        19: "San Bernardo",
        20: "San Miguel",
        21: "Talagante"
    },
    2 : {
        1: "Arica",
        2: "Putre"
    },
    3 : {
        1: "Alto Hospicio",
        2: "Iquique",
        3: "Pozo Almonte"
    },
    4 : {
        1: "Antofagasta",
        2: "Calama",
        3: "San Pedro de Atacama",
        4: "Tocopilla"
    },
    5 : {
        1: "Copiapó",
        2: "El Salvador",
        3: "Vallenar"
    },
    6 : {
        1: "Coquimbo",
        2: "Illapel",
        3: "La Serena",
        4: "Ovalle",
        5: "Salamanca",
        6: "Vicuña"
    },
    7 : {
        1: "Calera",
        2: "La Ligua",
        3: "Limache",
        4: "Los Andes",
        5: "Quillota",
        6: "Quilpué",
        7: "San Antonio",
        8: "San Felipe",
        9: "Valparaíso",
        10: "Villa Alemana",
        11: "Viña del Mar",
        12: "Isla de Pascua"
    },
    8 : {
        1: "Las Cabras",
        2: "Pichilemu",
        3: "Rancagua",
        4: "Rengo",
        5: "San Fernando",
        6: "San Vicente",
        7: "Santa Cruz"
    },
    9 : {
        1: "Cauquenes",
        2: "Constitución",
        3: "Curicó",
        4: "Linares",
        5: "Molina",
        6: "Parral",
        7: "San Clemente",
        8: "San Javier",
        9: "Talca"
    },
    10 : {
        1: "Arauco",
        2: "Chillán",
        3: "Concepción",
        4: "Coronel",
        5: "Curanilahue",
        6: "Lebu",
        7: "Los Ángeles",
        8: "Lota",
        9: "Nacimiento",
        10: "San Carlos",
        11: "Talcahuano",
        12: "Tomé"
    },
    11 : {
        1: "Angol",
        2: "Pucón",
        3: "Temuco",
        4: "Victoria",
        5: "Villarrica"
    },
    12 : {
        1: "La Unión",
        2: "Panguipulli",
        3: "Valdivia"
    },
    13 : {
        1: "Ancud",
        2: "Castro",
        3: "Osorno",
        4: "Puerto Montt",
        5: "Puerto Varas",
        6: "Quellón"
    },
    14 : {
        1: "Coyhaique",
        2: "Aysén"
    },
    15 : {
        1: "Punta Arenas",
        2: "Puerto Natales"
    }}
	
	
	

	
$(document).ready(function(){
	
	//carga la comuna según la región seleccionada
	$("#region").change(function() {
		var id = $(this).val();
		
		if(id == 0){
			modalMsj('info', 'Favor revisa los siguientes campos', '<p><span>Región:</span> Debe seleccionar una región</p>');
		}else{		
			$('#comuna option').remove();
			$('#comuna').append('<option value="0">Comuna</option>');
			$.each(comunas[id], function(index, val) {
				$('#comuna').append('<option value='+index+'>'+val+'</option>');
			});
		}
	});
	$("#comuna").change(function() {
		var id = $(this).val();		
		if(id == 0){
			modalMsj('info', 'Favor revisa los siguientes campos', '<p><span>Comuna:</span> Debe seleccionar una comuna</p>');
		}
	});
	
	$("input").blur(function () {
		var msj = '';
		var val = false;
		switch($(this).attr('name')){
			case 'telefono':
				if($('#telefono').val()==''){val=true;msj+='<p><span>Teléfono:</span> Teléfono debe contener 9 números</p>';}
				else if($('#telefono').val().length<9){val=true;msj+='<p><span>Teléfono:</span> Teléfono debe contener 9 números</p>';}
			break;
			case 'rut':
				if(Rut($('#rut').val())){
				}else{val=true;msj+='<p><span>Rut:</span> El rut ingresado es inválido</p>';}
			break;	
			case 'direccion':
				if($('#direccion').val()==''){val=true;msj+='<p><span>Dirección:</span> Debe ingresar una dirección</p>';}
				else if(/^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s]*$/.test($('#direccion').val()) === false){val=true;msj+='<p><span>Dirección:</span> Caracteres no permitidos</p>';}				
			break;
			case 'correo':
				if(!valida_mail($('#correo').val())){val=true;msj+='<p><span>Correo: </span>El correo ingresado es inválido</p>';};
			break;
		}
		if(val)
			modalMsj('info', 'Favor revisa los siguientes campos', msj);
    });
	
	$("#formulario-mvp").on("submit", function(e){
		e.preventDefault();
		var msj = '';
		var val = false;		
		$('#formulario-mvp input').each(function(i,e){
					
			switch($(e).attr('id')){
				case 'telefono':
					if(isNaN($(e).val())){val=true;msj+='<p><span>Teléfono:</span> Teléfono debe contener 9 números</p>';}
					else if($(e).val().length<9){val=true;msj+='<p><span>Teléfono:</span> Teléfono debe contener 9 números</p>';}
				break;
				case 'rut':
					if(Rut($(e).val())){
					}else{val=true;msj+='<p>El rut ingresado es inválido</p>';}
				break;
				case 'region':
					if($(e).val() == 0){val=true;msj+='<p><span>Región:</span> Debe seleccionar una región</p>'}
				break;
				case 'comuna':
					if($(e).val() == 0){val=true;msj+='<p><span>Comuna:</span> Debe seleccionar una comuna</p>'}
				break;
				case 'direccion':
					if(/^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s]*$/.test($(e).val()) === false){val=true;msj+='<p><span>Dirección:</span> Caracteres no permitidos</p>';}
				break;
				case 'correo':
					if(!valida_mail($(e).val())){val=true;msj+='<p><span>Correo: </span>El correo ingresado es inválido</p>';};
				break;
				case 'chx':
					if($('#chx').prop('checked')){val=true;msj+='<p><span>&nbsp;</span>Debe aceptar las condiciones legales</p>';};
				break;
			}
		});
			
		if(val){
			modalMsj('info', 'Campos vacíos: Favor rellenar todos los campos', msj);
		}else{			
			$('#boton-enviar').addClass('boton-enviar-disabled');
			
			var param	= "";
			var separador = "";
			$('#formulario-mvp .ing-datos').each(function(i,e){
				if($(e).attr('name') == 'region'){
					if($(e).val() !=0){
						param+= separador+"region="+$("#region option:selected").text()+"";
					}
				}else if($(e).attr('name') == 'comuna'){
					if($(e).val() !=0){
						param+= separador+"comuna="+$("#comuna option:selected").text()+"";
					}
				}else{
					param+= separador+$(e).attr('name')+"="+$(e).val()+"";
				}
				separador="&";
			});
			
			$.ajax({
				url: protocolo+"://54.94.191.152/contenedores/api/mvp/",
				type: "POST",
				data: param,
				success: function (response) {
					
					if(response.message == "Existe"){				
						modalMsj('info', 'Atención', '<p>Rut ya registrado</p>');	
					}else if(response.message == "Ok"){						
						var strAncla=$(this).attr('href'); //id del ancla
						$('body,html').stop(true,true).animate({				
							scrollTop: 0
						},1000);
						$('.content-info').fadeOut().delay(10500).fadeIn();
						
						$('.content-info-ok').fadeIn().delay(10000).fadeOut();
						
					}					
					$('#boton-enviar').removeClass('boton-enviar-disabled');
					$('#formulario-mvp')[0].reset();
				},
				error: function(jqXHR, textStatus, errorThrown) {
				   modalMsj('error', 'Error', '<p>En estos momentos no podemos registrar tu información.</p>');	
				}
			});
		}
	});
	
	if (location.protocol == 'https:')
		protocolo = 'https';

	$("#rut").rut({formatOn: 'keyup'});

	$("#telefono").change(function() {
    	var tel = $(this).val();
		$.ajax({
			url: protocolo+"://54.94.191.152/contenedores/api/mvp/existe/",
			type: "POST",
			data: {"telefono": tel},
			dataType: 'json',
			success: function (response) {
				if(response.message == "ok"){
					modalMsj('info', 'Atención', '<p>Teléfono ya registrado</p>');	
					$('#formulario-mvp')[0].reset();
				}				
			},error: function(jqXHR, textStatus, errorThrown) {
			   modalMsj('error', 'Error', '<p>En estos momentos no podemos verificar tu información.</p>');	
			}
		});
	});
});

function IsDireccion(e){
	/*onkeypress="return IsTexto(event);"*/
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla==8 || tecla==0) return true;
	patron = /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s]*$/;
	te = String.fromCharCode(tecla);
	return patron.test(te); 
}

function IsNumber(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla==8 || tecla==0) return true;
	patron = /\d/; // Solo acepta numeros
	te = String.fromCharCode(tecla);
	return patron.test(te);
}

function IsRut(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla==8 || tecla==0) return true;
	patron = /[0-9kK.-\s]/;
	te = String.fromCharCode(tecla);
	
	return patron.test(te); 
}
function valida_mail(valor) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(valor))
		return true;
	else
		return false;
}
function modalMsj(tipo, titulo, msj){	
	swal({
		  type: tipo,
		  title: titulo,
		  html: msj,
	});
}