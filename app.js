$(document).ready(function(e) {
    $('nav button').on('click', changeSectionClickHandler);
    $('.add-picture-button').on('click', addPictureClickHandler);
        
        imageArray[0] = new Image();
        imageArray[0].src = document.getElementById('defaultImage').src;

        slideshow();
});
 
function changeSectionClickHandler(e) {
    var section = e.target.getAttribute('data-target');
    changeSection(section);
}
 
function changeSection(sectionName) {
    $('.active').removeClass('active');
    $('.' + sectionName).addClass('active');
}
 
function addPictureClickHandler(e) {
    var url = $('.add-picture-url').val();
    addPicture(url);
}
 
//Antall bilder:
var imageArray = new Array();
 
function addPicture(url) {
    var html = '<img src="' + url +'" height=320 width=320/>';
    $('section.pictures img:last').after(html);
    $('.add-picture-url').val('');
 
    imageArray.push(new Image());
    imageArray[imageArray.length - 1].src = url;
}
 
//Variable for slideshow:
var count = -1;
 
//Slideshow function:
function slideshow(){
 
    if(count+1 == imageArray.length)
        count = 0;
    else
        count += 1;
 
    document.getElementById('slide').src = imageArray[count].src;
    setTimeout("slideshow()",2500);
}

var numberOfImages = localStorage.length;

function load(){
    for(var i = 1; i < numberOfImages; i++){
        var inputStored = localStorage.key(i).value;
        addPicture(inputStored);
    }
}
function save(){
    var fieldValue = document.getElementById('add-picture-url').value;
    if(numberOfImages = 0){
        localStorage.setItem(numberOfImages+1, fieldValue);
        numberOfImages+= 1;}
    else
        localStorage.setItem(numberOfImages, fieldValue);
        numberOfImages+= 1;
}