const formLoginEl = document.querySelector("form.login-form");

formLoginEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (!mail || !password) {
        return alert("fill line!!!")
    }
    
    const formData = {
        mail,
        password,
    };
    
    console.log(formData);
    event.currentTarget.reset();
  });
  