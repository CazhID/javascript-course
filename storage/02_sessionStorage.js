function runExample() {
  const output = document.getElementById('output');

  sessionStorage.setItem('sessionId', 'abc123');
  const sessionId = sessionStorage.getItem('sessionId');

  output.textContent = `
🕒 Data sesi disimpan ke sessionStorage
Session ID: ${sessionId}
  `;
}
