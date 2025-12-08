let popup = document.getElementById('popuptutorial');
let questionbttn = document.getElementById('questionbttn');

popup.addEventListener('click',()=>{
  popup.style.visibility = "hidden";
})

function showPopup(){
  popup.style.visibility = "visible";
}

let receipts = document.getElementsByClassName('receipt');

function changeZIndex(elmnt){
  let elemnt = Number(elmnt.style.zIndex);
  elemnt +=2;
  elmnt.style.zIndex = elemnt;
  console.log(elmnt.style.zIndex);

  dragElement(elmnt);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    let selected = document.getElementById(elmnt.id);
    selected.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    changeZIndex(selected);
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    selected.style.top = (selected.offsetTop - pos2) + "px";
    selected.style.left = (selected.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}