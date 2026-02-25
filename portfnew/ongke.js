function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

function changeAbout() {

    document.getElementById("aboutMessage").innerHTML = "WOWOW WIWA";
    document.getElementById("aboutImage").src = "ems.jpg";
}
