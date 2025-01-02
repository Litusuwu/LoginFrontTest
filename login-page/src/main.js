
const inputs = document.querySelectorAll('.forma input'); // Selecciona todos los inputs dentro de .forma

inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        const pattern = /^a\d{8}$/;

        if (!pattern.test(input.value) && input.type === "text" 
              && input.value.length > 0) {
            input.classList.add('error');
            input.classList.add('error1');
        } else {
            input.classList.remove('error');
            input.classList.remove('error1');
        }
    });

    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            input.classList.add('dentro');
        } else {
            input.classList.remove('dentro');
        }
    });
});

