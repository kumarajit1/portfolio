function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("msg").value,
    };
  
    const serviceID = "service_lovo3hn";
    const templateID = "template_gqdc2vs";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
        alert("Your message is send successfully.");
      })
      .catch((err) => console.log(err));
  }
  