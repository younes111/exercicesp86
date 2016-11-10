"use strict";

var table_produits = document.getElementById('produits_promo');
var row_items=table_produits.getElementsByTagName('tr');
console.log("ligne de la table : ",table_produits);
console.log("Element table: ", row_items);
if(row_items.length>0){
    console.log("Element table: ", row_items[0]);
    console.log("dernier des items", row_items[row_items.length-1]);
}

for(var i=0;i<row_items.length;i++){
    console.log("le tr d indice",i,"est",row_items[i]);
}

var elems_class_info=document.getElementsByClassName('info');
console.log("element du document qui ont la classe info", elems_class_info);

var div_nouvelles=document.getElementById('nouvelles');
var elems_class_info_nouvelles=div_nouvelles.getElementsByClassName('info');
console.log("Element du div#nouvelles qui ont la classe 'info':",elems_class_info_nouvelles);


var table_produits=document.querySelector('#produits_promo');
console.log("element table:",table_produits);

var premiere_ligne=table_produits.querySelector('tr');
console.log("premiere ligne de la table ", premiere_ligne);

var premier_elem_class_info_doc=document.querySelector('.info');
console.log("element du document qui ont la classe info", premier_elem_class_info_doc);

/*modification du dom elem.textcontent  elem.innerHTML*/

