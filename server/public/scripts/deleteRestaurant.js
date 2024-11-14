document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.grid-restaurants');
    const buttons = container.querySelectorAll('button');

    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            
            console.log(button.id);  // Should now show 'delete_restaurant-<id>'
            let restaurantId = button.id.split("-")[1];  // Extract restaurant ID
            console.log(restaurantId);  // Log the ID

            fetch(`/api/restaurants/${restaurantId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch (error => {
                console.error('Error:', error);
            });
        });
    }
});
