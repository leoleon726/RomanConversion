var room = 1;
var mod = 1;
function education_fields() {

	room++;
	var objTo = document.getElementById('education_fields')
	var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass" + room);
	var rdiv = 'removeclass' + room;
	divtest.innerHTML = '<div class="d-flex justify-content-center"> <h4 class="title">Acudiente</h4><br> <span class="bmd-form-group"> <div class="input-group"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">escalator_warning</i> </span> </div> <input type="text" name="family[]" class="form-control" placeholder="Parentezco" id="family"> </div> </span></div><br><span class="bmd-form-group"> <div class="input-group"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">school</i> </span> </div> <input type="text" name="name-parent[]" class="form-control" placeholder="Nombre del acudiente" id="nameStudent"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">school</i> </span> </div> <input type="text" name="lastname-parent[]" class="form-control" placeholder="Apellido del acudiente" id="lastnameStudent"> </div></span><br><span class="bmd-form-group"> <div class="input-group"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">phone</i> </span> </div> <input type="tel" name="phone[]" class="form-control" placeholder="Telefono"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">email</i> </span> </div> <input type="text" name="email-parent[]" class="form-control" placeholder="Correo electronico"> </div></span><br><div class="d-flex justify-content-center"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">notes</i> </span> </div> <textarea class="form-control" placeholder="Observaciones" rows="3"></textarea></div><br><div class="d-flex justify-content-center"> <div class="input-group-btn"> <div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_education_fields(' + room + ');"> <span class="material-icons">remove</span> Eliminar Acudiente </button> </div> </div></div>';
	objTo.appendChild(divtest);
}
function remove_education_fields(rid) {
	$('.removeclass' + rid).remove();
}




function modify_fields() {

	mod++;
	var objTo = document.getElementById('modify_fields')
	var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass" + mod);
	var rdiv = 'removeclass' + mod;
	divtest.innerHTML = '<div class="d-flex justify-content-center"> <h4 class="title">Acudiente</h4><br> <span class="bmd-form-group"> <div class="input-group"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">escalator_warning</i> </span> </div> <input type="text" name="family[]" class="form-control" placeholder="Parentezco" id="family"> </div> </span></div><br><span class="bmd-form-group"> <div class="input-group"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">school</i> </span> </div> <input type="text" name="name-parent[]" class="form-control" placeholder="Nombre del acudiente" id="nameStudent"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">school</i> </span> </div> <input type="text" name="lastname-parent[]" class="form-control" placeholder="Apellido del acudiente" id="lastnameStudent"> </div></span><br><span class="bmd-form-group"> <div class="input-group"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">phone</i> </span> </div> <input type="tel" name="phone[]" class="form-control" placeholder="Telefono"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">email</i> </span> </div> <input type="text" name="email-parent[]" class="form-control" placeholder="Correo electronico"> </div></span><br><div class="d-flex justify-content-center"> <div class="input-group-prepend"> <span class="input-group-text"> <i class="material-icons">notes</i> </span> </div> <textarea class="form-control" placeholder="Observaciones" rows="3"></textarea></div><br><div class="d-flex justify-content-center"> <div class="input-group-btn"> <div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_modify_fields(' + mod + ');"> <span class="material-icons">remove</span> Eliminar Acudiente </button> </div> </div></div>';
	objTo.appendChild(divtest);
}
function remove_modify_fields(rid) {
	$('.removeclass' + rid).remove();
}

function searchTeachers() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("search_teacher_input");
	filter = input.value.toUpperCase();
	table = document.getElementById("teacher_table");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}