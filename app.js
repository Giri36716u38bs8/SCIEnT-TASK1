const bo1 = document.getElementById("domain1");
const bo2 = document.getElementById("domain2");
const submit = document.getElementById("s");
if (submit) {
    submit.addEventListener("click", function(e) {
    e.preventDefault(); 
        
      if (bo1.value === bo2.value && bo1.value !== "" && bo2.value !== "") {
        alert("DOMAIN 1 AND DOMAIN 2 PREFERENCES ARE THE SAME. PLEASE CHOOSE DIFFERENT OPTIONS.");
        bo2.selectedIndex = 0;
      } else if (bo1.value === "" || bo2.value === "") {
          alert("Please select an option for both preferences.");
      } else { 
      const newUser = {
        fullname: document.getElementById("fullname").value,
        rollno: document.getElementById("rollno").value,
        contactno: document.getElementById("contactno").value,
        domain1: bo1.value,
        domain2: bo2.value
          };

      let data = JSON.parse(localStorage.getItem("users")) || [];
      data.push(newUser);
      localStorage.setItem("users", JSON.stringify(data));

      alert("Validation passed! You have registered successfully.");
      document.querySelector("form").reset();
        }
      });
    }

const x = document.getElementById("bb");

if (x) {
  x.addEventListener("click", function() {
  const password = prompt("Enter Admin Password to access this page:");
  const correctPassword = "SecretAdmin123";
            
  if (password === correctPassword) {
     window.location.href = "admin.html"; 
  } else {
    alert("Incorrect password.");
  }
}); 
}
  
