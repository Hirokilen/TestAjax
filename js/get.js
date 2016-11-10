$(document).ready(function () {
  var dropDownList = document.getElementsByClassName("selector");
  for (var i = 0; i < dropDownList.length; i++) {
        dropDownList[i].addEventListener('change', ajax);
    }
  dropDownList[0].addEventListener('change', getOptionSelect);

  function ajax() {
        var xhttp = new XMLHttpRequest();

        var ville = dropDownList[0].value;
        var sexe = dropDownList[1].value;
        var codeprojet = dropDownList[2].value;

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                createThreadHtml(JSON.parse(this.responseText));
            } else if (this.readyState == 4 && this.status != 200) {
                console.log("Erreur ajax :" + this.status);
            }
        };
        xhttp.open('POST', "ajax.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("ville=" + ville + "&sexe=" + sexe + "&codeprojet=" + codeprojet + "&action=getResult");

    }


}
