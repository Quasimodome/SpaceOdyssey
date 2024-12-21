// JavaScript Document
document.onkeyup = KeyCheck;       
 
	function KeyCheck(e)
		{
		   var KeyID = (window.event) ? event.keyCode : e.keyCode;
 
		   switch(KeyID)
		   {
 
		      case 37:
		      galaxy_submit('systemLeft');
		      break;
 
		      case 38:
		      galaxy_submit('galaxyRight');
		      break;
 
		      case 39:
		      galaxy_submit('systemRight');
		      break;
 
		      case 40:
		      galaxy_submit('galaxyLeft');
		      break;
 
		   }
		}