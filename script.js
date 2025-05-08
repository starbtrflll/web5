function calculateDowry() {
    let base = 100;
  
   
    let education = parseFloat(document.getElementById("education").value);
    let netWorth = parseFloat(document.getElementById("netWorth").value);
    let caste = parseFloat(document.getElementById("caste").value);
  
    let ageElems = document.querySelectorAll('input[name="age"]:checked');
    let age = ageElems.length > 0 ? parseFloat(ageElems[0].value) : 1;
  
   
    let skills = document.querySelectorAll(".skill:checked");
    let skillBonus = 0;
    skills.forEach(skill => skillBonus += parseFloat(skill.value));
  
   
    let reputation = document.querySelectorAll(".rep:checked");
    let repCoef = 1;
    let repPenalty = 0;
    reputation.forEach(rep => {
      if (rep.dataset.type === "coef") {
        repCoef *= parseFloat(rep.value);
      } else if (rep.dataset.type === "minus") {
        repPenalty += parseFloat(rep.value);
      }
    });
  
   
    let total = base * education * netWorth * age;
    total += caste + skillBonus;
    total *= repCoef;
    total -= repPenalty;
  
    document.getElementById("result").textContent = `Final Dowry: $${total.toFixed(2)}`;
    document.getElementById("result").style.color = "blue"; // CSS manipulation
  }
  