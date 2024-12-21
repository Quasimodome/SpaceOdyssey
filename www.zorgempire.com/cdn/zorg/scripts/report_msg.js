// JavaScript Document
function toggle_main(element)
{
	var other_element = element + "rp";
	var obj = document.getElementById(other_element);
	var obj2 = document.getElementById(element);
	obj.style.display = 'none';
	obj2.style.display = '';	
}

function report_message(report_type){
	
	if(report_type == 1){
		var info_msg = 'Are you sure you want to report this message? Use this option to notify administration of a possible threat to the rest of the players.';
	}
	else if(report_type == 2){
		var info_msg = 'Are you sure you want to block this user? He will not be able to send you PMs any longer if you block him. You can manage your block list through through Friend list page.';
	}
	else{
		var info_msg ='Are you sure you want to report and block this user? Use this option to notify administration of a possible threat to the rest of the players and also protect yourself from further messages from this player.';
	}
	
	var agree=confirm(info_msg);
	if (agree){
		return true ;
	}
	else{
		return false ;
	}
}