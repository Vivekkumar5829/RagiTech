console.log("Hi");
document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        from: "RagiTech",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        budget: document.getElementById("budget").value,
        timeline: document.getElementById("timeline").value,
        details: document.getElementById("details").value,
    };


    try{
        const response = await fetch("https://contact-form-1-oo6b.onrender.com/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData),
        });

        if(response.ok) {
            alert("Thank you! Your inquiry has been submitted.");
            document.getElementById("contact-form").reset();
        }else {
            alert("Something went wrong. Please try again.");
        }
    }catch(error) {
        console.error("Error : ", error);
        alert("Error connecting to the server.");
    }
});



document.addEventListener("DOMContentLoaded", () => {
  const getStartedBtn = document.getElementById("getStartedBtn");
  const launchVisionBtn = document.getElementById("launchVisionBtn");
  const contactSection = document.getElementById("contact");

  // Function to scroll smoothly to contact form
  function scrollToContact() {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  // Attach listeners
  getStartedBtn.addEventListener("click", scrollToContact);
  launchVisionBtn.addEventListener("click", scrollToContact);

  
  });


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}