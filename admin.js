  const data = JSON.parse(localStorage.getItem("users")) || [];
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    if (data.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No registrations found yet.</td></tr>';
    } else {
      data.forEach(user => {
        const row = document.createElement("tr");
        
        // Flexible extraction keys to match any variation of your object schema
        const fname = user.fullname || user.fullName || "Missing";
        const rnum = user.rollno || user.rollNo || "Missing";
        const cnum = user.contactno || user.contactNo || "Missing";
        const d1 = user.domain1 || "Missing";
        const d2 = user.domain2 || "Missing";

        row.innerHTML = `
          <td>${fname}</td>
          <td>${rnum}</td>
          <td>${cnum}</td>
          <td>${d1}</td>
          <td>${d2}</td>
        `;
        tableBody.appendChild(row);
      });
    }



const y= document.getElementById("cc");

if (y) {
  y.addEventListener("click", function() { 
        window.location.href = "access.html";

   })}
