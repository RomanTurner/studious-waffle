// set initial count 
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach(function (btns) { 
    btns.addEventListener('click', function (e) { 
        const styles = e.currentTarget.classList;
        styles.contains('decrease') ? count-- : styles.contains('increase') ? count++ : (count = 0); 
        value.textContent = count;

        count > 0
          ? (value.style.color = "green")
          : count < 0
          ? (value.style.color = "red")
          : (value.style.color = "black")
    });
});
