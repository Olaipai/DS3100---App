$(document).ready(function(e) {
    $('nav button').on('click', changeSectionClickHandler);
    $('.add-picture-button').on('click', addPictureClickHandler);
 
    //KODE FLYTTET INN HER
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
//var imageCount = 1;
var imageArray = new Array();
 
function addPicture(url) {
    var html = '<img src="' + url +'" />';
    $('section.pictures img:last').after(html);
    $('.add-picture-url').val('');
 
    //ENDRET KODE HER
    imageArray.push(new Image());
    imageArray[imageArray.length - 1].src = url;
 
//    imageCount++;
}
 
//Variable for slideshow:
var count = -1;
//var error = "";
 
//Slideshow function:
function slideshow(){
 
    if(count+1 == imageArray.length)
        count = 0;
    else
        count += 1;
 
    document.getElementById('slide').src = imageArray[count].src;
    setTimeout("slideshow()",2500);
}