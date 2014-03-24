
var frmvalidator  = new Validator("borang");


function SubmitForm1() {
   frmvalidator.clearAllValidations();
   frmvalidator.addValidation("password","req");
   frmvalidator.addValidation("repassword","req");
   frmvalidator.setAddnlValidationFunction(checkForm1Password);
   
   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form1'; 
      sendBorang();
   }
}

function SubmitForm2() {
   frmvalidator.clearAllValidations();
   frmvalidator.addValidation("rate","req","Please set your seduce rate");
   frmvalidator.addValidation("rate","num","Seduce rate must be in numeric only");
   frmvalidator.addValidation("rate","lt=101","Seduce rate must be between 1-100%");
   frmvalidator.addValidation("rate","gt=0","Seduce rate must be between 1-100%");
   frmvalidator.setAddnlValidationFunction(checkForm1SeduceOnTime);

   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form2'; 
      sendBorang();
   }
}
function SubmitForm3() {
   frmvalidator.clearAllValidations();
   frmvalidator.addValidation("purpose","req","Please select your seducing purpose technique");
   frmvalidator.setAddnlValidationFunction(checkForm3technique);

   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form3'; 
      sendBorang();
   }
}
function SubmitForm4() {
   frmvalidator.clearAllValidations();
   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form4'; 
      sendBorang();
   }
}
function SubmitForm5() {
   frmvalidator.clearAllValidations();
   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form5'; 
      sendBorang();
   }
}
function SubmitForm6() {
   frmvalidator.clearAllValidations();
   frmvalidator.addValidation("email","maxlen=50");
   frmvalidator.addValidation("email","req");
   frmvalidator.addValidation("email","email");

   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form6'; 
      sendBorang();
   }
}
function SubmitForm7() {
   frmvalidator.clearAllValidations();
   frmvalidator.addValidation("email","maxlen=50");
   frmvalidator.addValidation("email","req");
   frmvalidator.addValidation("email","email");

   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form7'; 
      sendBorang();
   }
}
function SubmitForm8() {
   frmvalidator.clearAllValidations();
   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form8';
      sendBorang();
   }
}
function SubmitForm9() {
   frmvalidator.clearAllValidations();
   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form9'; 
      sendBorang();
   }
}
function SubmitForm10() {
   frmvalidator.clearAllValidations();
   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form10'; 
      sendBorang();
   }
}
function SubmitForm11() {
   frmvalidator.clearAllValidations();
   if(document.borang.onsubmit()){
      document.borang.jenisform.value = 'form11';
      sendBorang();
   }
}
function confirmSubmit(){
   var agree=confirm("Do you really wish to clear this record?");
   if (agree)
	return true ;
   else
	return false ;
}
function checkForm3technique(){
  var frm = document.forms["borang"];
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'ads'){
    frm.technique.value = frm.selectads.options[frm.selectads.selectedIndex].value;    
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'cpa'){
    frm.technique.value = frm.selectcpa.options[frm.selectcpa.selectedIndex].value;
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'fb'){
    frm.technique.value = frm.selectfb.options[frm.selectfb.selectedIndex].value;
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'yt'){
    frm.technique.value = frm.selectyt.options[frm.selectyt.selectedIndex].value;
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'yts'){
    frm.technique.value = frm.selectyts.options[frm.selectyts.selectedIndex].value;
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'gp'){
    frm.technique.value = frm.selectgp.options[frm.selectgp.selectedIndex].value;
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'tw'){
    frm.technique.value = frm.selecttw.options[frm.selecttw.selectedIndex].value;
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'pe'){
    frm.technique.value = frm.selectpe.options[frm.selectpe.selectedIndex].value;
  }
  if(frm.purpose.options[frm.purpose.selectedIndex].value == 'audio'){
    frm.technique.value = frm.selectaudio.options[frm.selectaudio.selectedIndex].value;
  }
    return true;
}
function checkForm1Password(){
  var frm = document.forms["borang"];
  if(frm.password.value != frm.repassword.value){
    sfm_show_error_msg('The Password and Retype Password do not match!');
    return false;
  }else{
    return true;
  }
}
function checkForm1SeduceOnTime(){
  var frm = document.forms["borang"];
  if(frm.start.value && !frm.stop.value){
    sfm_show_error_msg("Seduce on time must either have START\nand STOP time, or both must be blanked");
    return false;
  }else if(!frm.start.value && frm.stop.value){
    sfm_show_error_msg("Seduce on time must either have START\nand STOP time, or both must be blanked");
    return false;
  }else{
    return true;
  }
}
function hidePopup() { 
  if (document.getElementById) { // DOM3 = IE5, NS6 
     document.getElementById('popup').style.visibility = 'hidden'; 
  } else { 
     if (document.layers) { // Netscape 4 
        document.popup.visibility = 'hidden'; 
     } else { // IE 4 
        document.all.popup.style.visibility = 'hidden'; 
     } 
  } 
}

function showPopup() { 
  if (document.getElementById) { // DOM3 = IE5, NS6 
     document.getElementById('popup').style.visibility = 'visible'; 
  } else { 
     if (document.layers) { // Netscape 4 
        document.popup.visibility = 'visible'; 
     } else { // IE 4 
        document.all.popup.style.visibility = 'visible'; 
     } 
  } 
}
function toHex(str){
    var r="";
    var e=str.length;
    var c=0;
    var h;
    while(c<e){
        h=str.charCodeAt(c++).toString(16);
        while(h.length<2) h="0"+h;
        r+=h;
    }
    return r;
}
function fromHex(str){
    var r="";
    var e=str.length;
    var s;
    while(e>=0){
        s=e-2;
        r=String.fromCharCode("0x"+str.substring(s,e))+r;
        e=s;
    }
    return r;
}
function sendBorang() {
    var isi = '';
    var inputs = $('#borang').serializeArray();
    $.each(inputs, function (i, input) {
	if(input.name != 'script' && input.name != 'testonsite') { isi += input.name + '=' + toHex(input.value) + '&';}
    });
    document.hantarBorang.isi.value = isi;
    document.hantarBorang.submit();
}

