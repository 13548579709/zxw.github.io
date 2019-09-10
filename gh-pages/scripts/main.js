test();
function test(){
    // let myHeading = document.querySelector('h1');
    // let myTitle = document.querySelector('title');
    //
    // myHeading.textContent = "Hello World!";
    // if (3 !== 4) {
    //     myTitle.textContent = "35" + "25";
    // } else{
    //     alert("------");
    // };
    let myImage = document.querySelector('img');

    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/firefox-icon.png') {
            myImage.setAttribute('src', 'images/firefox2.png');
        } else {
            myImage.setAttribute('src', 'images/firefox-icon.png');
        }
    }
};

function setHeading(name) {
    let myheading = document.querySelector('h1');
    myheading.textContent = name + '!';
}
function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else {
    setHeading(storedName);
}
let myButton = document.querySelector('button');
myButton.onclick = setUserName;