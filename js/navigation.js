let navbar = ["როგორ მუშაობს?", "რატომ ქარერი?", "ფოტოები", "კონტაქტი" ];
let navlink = ["howwork.html", "whycarer.html", "gallery.html", "contact.html"];
navtext="<ul>";
let navbarlength=navbar.length;


for (let i=0; i<navbarlength;i++){
    navtext+="<li><a href="+navlink[i]+">" +navbar[i]+'</a></li>';
    console.log(navtext);
}
navtext+="</ul>";
console.log(navtext);
document.getElementById("navigation").innerHTML=navtext;
