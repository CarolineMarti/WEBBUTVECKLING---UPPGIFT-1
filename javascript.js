/*This code retrieves all INPUT-fields on the page and adds eventlistener 
 to the field when ”blur” event occurs, and depending 
on whether there is a value in the INPUT-field or not, it adds or removes the 
css class "hascontent ”*/
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
/*This code retrieves all TEXTAREA-fields on the page and adds eventlistener 
 to the field when ”blur” event occurs, and depending 
on whether there is a value in the TEXTAREA-field or not, it adds or removes the 
css class "hascontent ”*/
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

/*This code uses javascript to add a click event listener on the 
menu items to OPEN the Collapse navbar*/
function openSideNav() {
    document.getElementsByClassName("nav-drawer")[0].style.display = "block";
}
/*This code uses javascript to add a click event listener on the 
 menu items to CLOSE the Collapse navbar*/
function closeSideNav() {
    document.getElementsByClassName("nav-drawer")[0].style.display = "none";
}
