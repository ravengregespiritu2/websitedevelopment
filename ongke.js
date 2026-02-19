function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

function changeAbout() {

    document.getElementById("aboutMessage").innerHTML = "ONGKE";
    document.getElementById("aboutImage").src = "ems.jpg";
}
