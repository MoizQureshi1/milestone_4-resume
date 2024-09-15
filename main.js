var _a;
// LISTING ELEMENT
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // TYPE ASSERTION
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Picture Element
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        // CREATE RESUME OUTPUT
        var resumeOutPut = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span></p>\n        <p><strong>Email:</strong> <span id=\"edit-edit\" class=\"editable\"> ").concat(email, " </span></p>\n        <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n\n        <h3>Education</h3>\n        <p id=\"edit-eaducation\" class=\"editable\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skille\" class=\"editable\">").concat(skills, "</p>\n        ");
        var resumeOutPutElement = document.getElementById('resumeOutPut');
        if (resumeOutPutElement) {
            resumeOutPutElement.innerHTML = resumeOutPut;
            makeEditable();
        }
    }
    else {
        console.error('One or More output Element are Missing');
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // REPLACE CONTENT
            if (currentElement.tagName === "p" || currentElement.tagName === "Span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editable-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
