


function submitReservation() {
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const departureDate = document.getElementById('departureDate').value;
    const departureTime = document.getElementById('departureTime').value;
    const departureLocation = document.getElementById('departureLocation').value;
    const arrivalLocation = document.getElementById('arrivalLocation').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const specialRequests = document.getElementById('specialRequests').value;
    const creditCard = document.getElementById('creditCard').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Display reservation details
    const detailsContainer = document.getElementById('reservationDetails');
    detailsContainer.innerHTML = `
      <div class="reserve">
      <h2>Reservation Details:</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
<p><strong>Departure Time:</strong> ${departureTime}</p>
<p><strong>Departure Location:</strong> ${departureLocation}</p>
<p><strong>Arrival Location:</strong> ${arrivalLocation}</p>
<p><strong>Number of Adults:</strong> ${adults}</p>
<p><strong>Number of Children (under 12):</strong> ${children}</p>
<p><strong>Special Requests:</strong> ${specialRequests}</p>
<p><strong>Credit Card Number:</strong> ${creditCard}</p>
<p><strong>Expiry Date:</strong> ${expiryDate}</p>
<p><strong>CVV:</strong> ${cvv}</p>
      </div>
`;
}
