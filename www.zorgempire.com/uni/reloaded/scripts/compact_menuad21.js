// JavaScript Document
function togglemenu()
{
	var obj = document.getElementById("allcontent");
	var menu = document.getElementById("compact_menu");
	if ( obj.style.display != 'none' ) {
		obj.style.display = 'none';
		menu.style.display = '';
		document.menu.focus();
	}
	else {
		menu.style.display = 'none';
		obj.style.display = '';
		document.obj.focus();
	}
}

function alliance_menu(){
	var a_menu = document.getElementById("alliance_menu");
	var p_list = document.getElementById("planet_list");
	if ( a_menu.style.display != 'none' ) {
		a_menu.style.display = 'none';
	}
	else {
		a_menu.style.display = 'block';
		p_list.style.display = 'none';
	}	
}

function planet_list(){
	var a_menu = document.getElementById("alliance_menu");
	var p_list = document.getElementById("planet_list");
	if ( p_list.style.display != 'none' ) {
		p_list.style.display = 'none';
	}
	else {
		p_list.style.display = 'block';
		a_menu.style.display = 'none';
	}
}