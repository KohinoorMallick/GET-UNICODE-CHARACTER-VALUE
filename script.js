// script.js
function getUnicodeValue() {
    const char = document.getElementById('charInput').value;
    if (char.length === 0) {
        alert('Please enter a character');
        return;
    }

    const unicodeValue = char.charCodeAt(0);
    document.getElementById('result').innerText = `Unicode Value: ${unicodeValue}`;
}
