function addStyle(){
    var para=document.querySelector('#para');
    para.classList.add('active');
}
function removeStyle(){
    var para=document.querySelector('#para');
    para.classList.remove('active');
}
function bothStyle(){
    var para=document.querySelector('#para');
    para.classList.toggle('active');
}