$(document).ready(function(e) {
    $('nav button').on('click', changeSectionClickHandler);
    $('.add-picture-button').on('click', addPictureClickHandler);
});

function changeSectionClickHandler(e) {
    var section = e.target.getAttribute('data-target')
    changeSection(section);
    if (e.target.getAttribute('data-target') == "slideshow")
        slideshow();
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

function addPicture(url) {
    var html = '<img src="' + url +'" />';
    $('section.pictures img:last').after(html);
    $('.add-picture-url').val('');
    imageArray[imageCount] = url;
    imageCount++;

}

//Slideshow function:
function slideshow(){
    for (image in imageArray){
        $('.slideshow').src == imageArray[image];
    }
    //count=0;
    //setTimeout("slideshow()",2500);
}

slideshow();