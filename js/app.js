'use strict'

function checkboxManipulate(form) {
    var chBX;
    var slectParagraph 
    var cb = document.getElementById('formy').getElementsByTagName('input');
    // console.log(cb);
    for (var i = 0; i < cb.length; i++) {
        if (cb[i].checked == true) {
             chBX = cb[i].id;
             slectParagraph = document.getElementsByName(chBX);

            // var del = document.createElement('del');

            // slectParagraph[i].innerHTML = `<del> ${slectParagraph[i].textContent}<del>`
            slectParagraph[i].innerHTML = `<del> ${slectParagraph[i].textContent}</del>`
            // del.textContent = slectParagraph[i].innerHTML;
            // slectParagraph[i].textContent ='';
            // slectParagraph[i].appendChild(del);
        }
    }
}

