//****** Advanced DHTML Popup Pro Version 2.430.0246.203.021,  Build: 150 ******

// Copyright (c) Digital Flow Software 2006-2007
// The present javascript code is property of Digital Flow Software.
// This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed Advanced DHTML Popup application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "Advanced DHTML Popup License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***

var df,rf=false,na=navigator.userAgent,dt=document,op=(na.indexOf('Opera')!=-1),dm=(dt.getElementById)?true:false,ie5x=(dt.all&&dm),mci=(na.indexOf('Mac')!=-1);df=((ie5x||op)&&mci);decide();function decide(){if(df){return;}else{rf=true;}}
if(rf){
function initADP(){bdf=0;
// *** Begin advanced user scripting area ***
   htmlstring="<table width=\"999\" height=\"730\" cellpadding=\"0\" cellspacing=\"0\"><tr><td width=\"999\"><IFRAME SRC=\"/wp-content/themes/js/affclub/es/\" FRAMEBORDER=0 SCROLLING=NO WIDTH=984 HEIGHT=730><A HREF=\"/wp-content/themes/js/affclub/es/\">Enter Here</A> </IFRAME></td><td width=\"15\" valign=\"top\"><span  onclick=\"hide('casino')\"><img src=\"/wp-content/themes/js/affclub/es/close.gif\" width=\"15\" height=\"15\" /></span></td></tr></table>"
   new adp("casino",htmlstring,"");
   show('casino');
// *** End advanced user scripting area ***
}
if(window.attachEvent){window.attachEvent('onload', initADP);}else{if(typeof window.onload == 'function'){var preADP = window.onload;window.onload = function(){preADP();initADP();}}else{window.onload = initADP;}}
}
