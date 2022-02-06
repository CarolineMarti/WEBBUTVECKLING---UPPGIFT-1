document.querySelectorAll("input").forEach(
    inputfield => {
        inputfield.addEventListener("blur", function (event) {
            if (inputfield.value === "") {
                inputfield.classList.remove("hascontent")
            } else {
                inputfield.classList.add("hascontent")
            }
        })
    });

document.querySelectorAll("textarea").forEach(
    field => {
        field.addEventListener("blur", function (event) {
            if (field.value === "") {
                field.classList.remove("hascontent")
            } else {
                field.classList.add("hascontent")
            }
        })
    });

function openSideNav() {
    document.getElementsByClassName("nav-drawer")[0].style.display = "block";
}
function closeSideNav() {
    document.getElementsByClassName("nav-drawer")[0].style.display = "none";
}
