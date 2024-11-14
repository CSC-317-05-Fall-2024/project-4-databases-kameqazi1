document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener("submit", (event) => {
        
        event.preventDefault();
        console.log("Submit button clicked");

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const image = document.getElementById('image-url').value;
        console.log("Form data:", { name, address, phone, image });


        fetch('/api/restaurants', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify (
                {
                    name, address, phone, image
                }
            ),
            
            

        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            window.location.href = `/restaurants/${data.id}`;
        }).catch (error => {
            console.error('error:', error)
        });
        



    });

});

