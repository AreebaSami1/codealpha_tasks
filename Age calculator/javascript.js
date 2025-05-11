document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; 
    const year = parseInt(document.getElementById("year").value);
  
    const birthDate = new Date(year, month, day);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    const resultDiv = document.getElementById("result");
    if (age >= 0) {
      resultDiv.innerText = `You are ${age} years old.`;
    } else {
      resultDiv.innerText = "Invalid birth date entered!";
    }
  });
  