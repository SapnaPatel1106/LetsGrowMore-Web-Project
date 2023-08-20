var form=document.getElementById("form");
var submit = document.querySelector(".submit");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event){
    i=URL.createObjectURL(event.target.files[0]);
}

function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var gender = document.createElement("div");
    var course = document.createElement("div");
    var Email = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");
    var contact = document.createElement("div");

    name.innerHTML="Name: "+element[0].value;
    if(element[1].checked){gender.innerHTML="Gender: Male";}
    if(element[2].checked){gender.innerHTML="Gender: Female";}
    course.innerHTML="Course: "+element[3].value;
    Email.innerHTML="EMAIL: "+element[4].value;
    img.src="images/user-img.jpg";
    img.alt="student image";
    if(element[5].value !=""){
        img.src=i;
    }


    if(element[6].checked){skills.innerHTML="SKILLS: Java";}
    if(element[7].checked){skills.innerHTML="SKILLS: HTML";}
    if(element[8].checked){skills.innerHTML="SKILLS: CSS";}
    if(element[9].checked){skills.innerHTML="SKILLS: JS";}
    if(element[6].checked && element[7].checked){skills.innerHTML="SKILLS: Java, HTML";}
    if(element[6].checked && element[8].checked){skills.innerHTML="SKILLS: Java, CSS";}
    if(element[7].checked && element[8].checked){skills.innerHTML="SKILLS: HTML, CSS";}
    if(element[6].checked && element[9].checked){skills.innerHTML="SKILLS: Java, JS";}
    if(element[8].checked && element[9].checked){skills.innerHTML="SKILLS: CSS, JS";}
    if(element[7].checked && element[9].checked){skills.innerHTML="SKILLS: HTML, JS";}
    if(element[6].checked && element[7].checked && element[8].checked){skills.innerHTML="SKILLS: Java, HTML, CSS";}
    if(element[6].checked && element[7].checked && element[9].checked){skills.innerHTML="SKILLS: Java, HTML, JS";}
    if(element[6].checked && element[8].checked && element[9].checked){skills.innerHTML="SKILLS: Java, CSS, JS";}
    if(element[7].checked && element[8].checked && element[9].checked){skills.innerHTML="SKILLS: HTML, CSS, JS";}
    if(element[6].checked && element[7].checked && element[8].checked && element[9].checked){skills.innerHTML="SKILLS: Java, HTML, CSS, JS";}

    contact.innerHTML="Contact: "+element[10].value;

    div1.appendChild(name);
    div1.appendChild(gender);
    div1.appendChild(course);
    div1.appendChild(Email);
    div1.appendChild(skills);
    div1.appendChild(contact);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");

}