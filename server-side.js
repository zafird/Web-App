xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText; /**change the txtHint portion */
    }
  };
  xhttp.open("GET", "course_data.json?q="+str, true); /**change the + str portion */
  xhttp.send();