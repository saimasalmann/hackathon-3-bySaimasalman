
const form = document.getElementById("res-form") as HTMLFormElement;
const generatedResume =document.getElementById("resume") as HTMLDivElement;

form.addEventListener("submit", (event:Event) => {
    event.preventDefault(); 
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience= (document.getElementById("experience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    const resumeContent = `
    <h2> <b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Contact Number:</b>${contact}</p>
    
    <h3>Education:</h3>
    <p>${education}</p>
    
    <h3>Experience:</h3>
    <p>${experience}</p>
   
    <h3>Skills:<h3>
    <p>${skills}</p> `;
if(generatedResume){
    generatedResume.innerHTML = resumeContent
}else
    {console.error(" The Resume display is Unavailable.")};


});
