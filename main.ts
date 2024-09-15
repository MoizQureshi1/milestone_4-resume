// LISTING ELEMENT
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // TYPE ASSERTION

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Picture Element
        const profilePicturefile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "" ;
        
        
        
        
        // CREATE RESUME OUTPUT
        const resumeOutPut = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : '' }
        <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
        <p><strong>Email:</strong> <span id="edit-edit" class="editable"> ${email} </span></p>
        <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>

        <h3>Education</h3>
        <p id="edit-eaducation" class="editable">${education}</p>

        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skille" class="editable">${skills}</p>
        `;

        const resumeOutPutElement = document.getElementById('resumeOutPut')
        if(resumeOutPutElement){
            resumeOutPutElement.innerHTML = resumeOutPut;
        makeEditable();
        }
    }else{
        console.error('One or More output Element are Missing');
    }
});


function makeEditable(){
    const editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(element => {
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;
            
            // REPLACE CONTENT
            if(currentElement.tagName === "p" || currentElement.tagName === "Span"){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editable-input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()    
                })


                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}