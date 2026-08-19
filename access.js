const data = JSON.parse(localStorage.getItem("users")) || [];
const tableBody = document.getElementById("tableBody");
tableBody.innerHTML = "";

if (data.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No data available.</td></tr>';
} else {
    data.forEach(user => {
        const row = document.createElement("tr");
        
        const fname = user.fullname || user.fullName || "Missing";
        const rnum = user.rollno || user.rollNo || "Missing";
        const cnum = user.contactno || user.contactNo || "Missing";
        const d1 = user.domain1 || "Missing";
        const d2 = user.domain2 || "Missing";
        const currentSavedTime = user.allottedTime || "";

        row.innerHTML = `
            <td>${fname}</td>
            <td>${rnum}</td>
            <td>${cnum}</td>
            <td>${d1}</td>
            <td>${d2}</td>
            <td><input type="time" class="time" value="${currentSavedTime}"></td>
            <td><button class="save">Save</button></td>
        `;

        const timer = row.querySelector(".time");
        const saveButton = row.querySelector(".save");

        saveButton.addEventListener("click", () => {
            const selectedTime = timeInput.value;
            
            if (!selectedTime) {
                alert("Please select a time first.");
                return;
            }

            let currentUsers = JSON.parse(localStorage.getItem("users")) || [];
            
            currentUsers = currentUsers.map(u => {
                const currentRoll = u.rollno || u.rollNo;
                if (currentRoll === rnum && rnum !== "Missing") {
                    u.allottedTime = selectedTime;
                }
                return u;
            });

            localStorage.setItem("users", JSON.stringify(currentUsers));
            alert(`Time saved for ${fname}!`);
        });

        tableBody.appendChild(row);
    });
}
