//alert('test');

//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}  
function seasonStyle(season){
    switch(season){
        case "Spring":
            $("body").css("background-color","#2B7129")
            $("img#logo").attr("src", "images/spring.gif")
            $("img#wear").attr("src", "images/spring-wear.jpg")
            $("h3").text("Leap into our Spring Wear!")
            break;
        case "Summer":
            $("body").css("background-color","#EBA52B")
            $("img#logo").attr("src", "images/summer.gif")
            $("img#wear").attr("src", "images/summer-wear.jpg")
            $("h3").text("Leap into our Summer Wear!")
            break;
        case "Fall":
            $("body").css("background-color","#A81124")
            $("img#logo").attr("src", "images/fall.gif")
            $("img#wear").attr("src", "images/fall-wear.jpg")
            $("h3").text("Leap into our Fall Wear!")
            break;
        case "Winter":
            $("body").css("background-color","#005393")
            $("img#logo").attr("src", "images/winter.gif")
            $("img#wear").attr("src", "images/winter-wear.jpg")
            $("h3").text("Leap into our Winter Wear!")
            break;
        case "Default":
            $("body").css("background-color","white")
            $("img#logo").attr("src", "images/four-seasons.gif")
            $("img#wear").attr("src", "images/300x400.png")
            $("h3").text("Outfitter for All Seasons!")
            break;
    }
}
$("document").ready(function(){
    $('li.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        seasonStyle(season)
    });
});
