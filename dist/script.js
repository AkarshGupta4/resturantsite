
const foodCards = document.querySelectorAll(".max-w-sm");

foodCards.forEach(card => {
    
    const addBtn = card.querySelector("#addBtn");
    const delBtn = card.querySelector("#DelBtn");
    const countSpan = card.querySelector("span");
    

    let count = 0;

  
    addBtn.addEventListener("click", () => {
        count++;
        countSpan.textContent = count;
    });

 
    delBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countSpan.textContent = count;
        }
    });
});
