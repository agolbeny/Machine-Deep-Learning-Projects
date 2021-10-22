const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "success") {
            console.log("success btn");
            createAlert(alert(alertType.success.class, alertType.success.message));
        } else if (button.id === "info") {
            console.log("info btn");
            createAlert(alert(alertType.info.class, alertType.info.message));
        } else if (button.id === "caution") {
            console.log("caution btn");
            createAlert(alert(alertType.caution.class, alertType.caution.message));
        } else if (button.id === "danger") {
            console.log("danger btn");
            createAlert(alert(alertType.danger.class, alertType.danger.message));
        }
    });
});

function createAlert(passInAlert) {
    let createAlertElement = document.createElement("alert");
    createAlertElement.innerHTML = passInAlert;
    body.appendChild(createAlertElement);
}


const alert = (alertClass, alertMessage) => {
 
    setTimeout(() => {
      const newAlert = document.querySelector("alert");
      if (newAlert) {
        removeAlert();
      }
    }, 4000);
  
  
    return `
      <div class="alert">
        <div class="alert-container">
          <div class="alert-content ${alertClass}">
            <div class="alert-header">
              <span class="alert-message">${alertMessage}</span
              ><span class="btn btn-close" onclick="removeAlert()">x</span>
            </div>
          </div>
        </div> 
       </div> 
      `;
  };
  
  
function removeAlert() {
    const newAlert = document.querySelector("alert");
    //   console.log(newAlert);
    newAlert.remove();
  }
  
  const alertType = {
    success: {
      class: "alert-success",
      message: "Your registration was successful!",
    },
    info: {
      class: "alert-info",
      message: "You need to fill out all of the fields!",
    },
    caution: {
      class: "alert-caution",
      message: "Caution, this field is not correct!",
    },
    danger: {
      class: "alert-danger",
      message: "The information you have entered is incorrect or incomplete!",
    },
  };
  
  const form = document.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const formInputs = document.querySelectorAll("form input");
  
    const inputName = document.querySelector("input#Name").value;
    const inputAge = document.querySelector("input#Age").value;
    const inputEmail = document.querySelector("input#Email").value;
  
    if (inputName === "" && inputAge === "" && inputEmail === "") {
      createAlert(alert(alertType.danger.class, alertType.danger.message));
    } else if (inputName === "") {
      alertType.caution.message = "Name field is empty or incorrect!";
      createAlert(alert(alertType.caution.class, alertType.caution.message));
    } else if (inputAge === "") {
      alertType.caution.message = "Age field is empty or incorrect!";
      createAlert(alert(alertType.caution.class, alertType.caution.message));
    } else if (inputEmail === "") {
      alertType.caution.message = "Email field is empty or incorrect!";
      createAlert(alert(alertType.caution.class, alertType.caution.message));
    } else {
      createAlert(alert(alertType.success.class, alertType.success.message));
      formInputs.forEach((input) => (input.value = ""));
    }
  });