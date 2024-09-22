var input = document.getElementById('search-header')

function runScript(e) {
    const nameToy = document.querySelectorAll('.toy-block')
    console.log(nameToy)
    if (e.keyCode == 13) {
        if (input.value != '') {
            for(var i = 0; i < nameToy.length; i++){
                nameToy[i].style.visibility = "hidden";
                nameToy[i].style.display = "none";
            }
            nameToy.forEach(element => {
                if (element.id.toUpperCase() == input.value.toUpperCase().trim()) {
                    console.log(element)
                    element.style.visibility = "visible";
                    element.style.display = "flex";
                }
                
            })  
        } else { 
            for(var i = 0; i < nameToy.length; i++){
            nameToy[i].style.visibility = "visible";
            nameToy[i].style.display = "flex"; 
            }
        }
    }
}

function resetElement() {
    for(var i = 0; i < nameToy.length; i++){
        nameToy[i].style.visibility = "visible";
        nameToy[i].style.display = "flex"; 
    }
}

if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, ''); 
    }
  }