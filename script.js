<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book an Appointment | Shipra Ladies Beauty Parlor</title>
    <style>
        /* CSS Styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .appointment-form-container {
            width: 100%;
            max-width: 500px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            color: #333;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
        }
        input[type="text"],
        input[type="email"],
        input[type="date"],
        input[type="time"],
        select {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #5cb85c;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #4cae4c;
        }
        .success-message {
            display: none;
            color: #4cae4c;
            text-align: center;
            margin-top: 15px;
        }
    <script>
    // JavaScript for form handling
    document.getElementById("appointmentForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate the form fields (Basic Validation)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const whatsappNotification = document.getElementById("whatsappNotification").checked;

        if (name && email && phone && service && date && time) {
            // Display success message
            document.getElementById("successMessage").style.display = "block";

            // If the user opts for WhatsApp notifications
            if (whatsappNotification) {
                const message = `Appointment Details:\nName: ${name}\nService: ${service}\nDate: ${date}\nTime: ${time}`;
                const whatsappNumber = "9123994626"; // Ensure the number is in the correct format
                const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappLink, '_blank'); // Open the WhatsApp link
            }

            // Reset form after submission
            document.getElementById("appointmentForm").reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
</script>
