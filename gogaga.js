let threeDotsEle = document.getElementById("threeDots");
let crossEle = document.getElementById('cross')
threeDotsEle.onclick = function() {
    threeDotsEle.classList.add('special')
    crossEle.classList.remove('special');

}
crossEle.onclick = function() {
    threeDotsEle.classList.remove('special')
    crossEle.classList.add('special');
}