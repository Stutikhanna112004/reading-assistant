// Get references to DOM elements
const readBtn = document.getElementById('readBtn');
const textInput = document.getElementById('textInput');
const fileInput = document.getElementById('fileInput');
const contrastToggle = document.getElementById('toggleContrast');
const statusMsg = document.getElementById('status');

// 🔊 READ ALOUD
readBtn.addEventListener('click', () => {
  const text = textInput.value.trim();

  if (!text) {
    statusMsg.textContent = 'Please enter some text.';
    return;
  }

  statusMsg.textContent = 'Sending text to server...';

  fetch('http://localhost:5000/speak', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'Speaking') {
        statusMsg.textContent = `Reading aloud in ${data.language.toUpperCase()}...`;
      } else if (data.error) {
        statusMsg.textContent = `Error: ${data.error}`;
      } else {
        statusMsg.textContent = 'Unknown error from server.';
      }
    })
    .catch(err => {
      console.error(err);
      statusMsg.textContent = 'Could not connect to the server.';
    });
});

// 📂 LOAD .TXT FILE INTO TEXTAREA
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  if (file && file.type === 'text/plain') {
    const reader = new FileReader();

    reader.onload = () => {
      textInput.value = reader.result;
      statusMsg.textContent = 'Text file loaded.';
    };

    reader.readAsText(file);
  } else {
    statusMsg.textContent = 'Please upload a valid .txt file.';
  }
});

// 🌓 TOGGLE HIGH CONTRAST MODE
contrastToggle.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});

// ⌨️ KEYBOARD SHORTCUTS
document.addEventListener('keydown', (e) => {
  if (e.altKey && e.key.toLowerCase() === 'r') {
    e.preventDefault();
    readBtn.click();
  }

  if (e.altKey && e.key.toLowerCase() === 'c') {
    e.preventDefault();
    contrastToggle.click();
  }
});

    