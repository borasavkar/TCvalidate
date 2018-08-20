/*
script for TC NO validation
@author: Bora Şavkar
* Copyright (c) 2018 Bora Şavkar
*/
var nesne=document.getElementById("tcno");
var uyari=document.getElementById("uyari");
nesne.onkeydown=function(){
	"use strict";
uyari.textContent="";
};
nesne.onblur=function(){
	"use strict";
try{
if(isNaN(nesne.value)){throw "Hatalı karakter girdiniz.";}
if(nesne.value.length<11){throw "11 karakterden az girdiniz.";}
if(nesne.value.length>11){throw "11 karakterden fazla girdiniz.";}
if(nesne.value[0]===0){throw "T.C. Kimlik No 0 ile başlayamaz.";}
if(nesne.value[9] != (((Number(nesne.value[0])+Number(nesne.value[2])+Number(nesne.value[4])+Number(nesne.value[6])+Number(nesne.value[8]))*7)-(Number(nesne.value[1])+Number(nesne.value[3])+Number(nesne.value[5])+Number(nesne.value[7])))%10){ throw "TC Kimlik Numaranızın 10. hanesini yanlış girdiniz.";}
if(nesne.value[10] != (Number(nesne.value[0])+Number(nesne.value[1])+Number(nesne.value[2])+Number(nesne.value[3])+Number(nesne.value[4])+Number(nesne.value[5])+Number(nesne.value[6])+Number(nesne.value[7])+Number(nesne.value[8])+Number(nesne.value[9]))%10){ throw "TC Kimlik Numaranızın son hanesini yanlış girdiniz.";}
}
catch(e){	
uyari.textContent=e;
nesne.focus();
}
	
};
