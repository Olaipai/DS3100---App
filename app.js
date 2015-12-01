$(document).ready(function(e) {
    $('nav button').on('click', changeSectionClickHandler);
    $('.add-picture-button').on('click', addPictureClickHandler);
});

function changeSectionClickHandler(e) {
    var section = e.target.getAttribute('data-target')
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
var imageCount = 1;
var imageArray = new Array();
imageArray[0] = new Image();
imageArray[0].src = document.getElementById('defaultImage').src;

function addPicture(url) {
    var html = '<img src="' + url +'" />';
    $('section.pictures img:last').after(html);
    $('.add-picture-url').val('');
    imageArray[imageCount] = new Image();
    imageArray[imageCount].src = url;
    imageCount++;

} 
//Variable for slideshow:
var count = 0;
var error = "";

//Slideshow function:
function slideshow(){
    if(document.getElementById('slide').src == "")
        return;
    document.getElementById('slide').src = imageArray[count].src;
    if(count<2)
        count++;
    else
        step=0;
        setTimeout("slideshow()",2500);
}

slideshow();