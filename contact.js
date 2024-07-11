document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(this);
  
    fetch('https://your-server-endpoint', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    });
  });
  