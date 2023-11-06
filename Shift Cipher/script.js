document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    const shiftInput = document.getElementById("shift");
    const encryptButton = document.getElementById("encrypt");
    const decryptButton = document.getElementById("decrypt");
    const output = document.getElementById("output");

    encryptButton.addEventListener("click", () => {
        const message = messageInput.value;
        const shift = parseInt(shiftInput.value);
        output.value = caesarCipher(message, shift);
    });

    decryptButton.addEventListener("click", () => {
        const message = messageInput.value;
        const shift = parseInt(shiftInput.value);
        output.value = caesarCipher(message, -shift); // Decrypt by shifting in the opposite direction
    });

    function caesarCipher(message, shift) {
        let result = "";
        for (let i = 0; i < message.length; i++) {
            let char = message[i];
            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                char = String.fromCharCode(
                    (((char.charCodeAt(0) - (isUpperCase ? 65 : 97)) + shift) % 26) +
                    (isUpperCase ? 65 : 97)
                );
            }
            result += char;
        }
        return result;
    }
});
