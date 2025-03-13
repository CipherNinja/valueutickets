<template>
  <div class="container my-4">
    <div class="card mx-auto" style="max-width: 500px;">
      <div class="icon-container text-center my-4">
        <img src="@/assets/logo-nobg.png" alt="Plane Icon" class="icon" />
      </div>
      <h2 class="text-center mb-4">Access Trip Itinerary</h2>
      <div class="form-container p-4">
        <div class="form-group">
          <label for="bookingId">Booking ID</label>
          <input v-model="bookingId" type="text" class="form-control" id="bookingId" placeholder="Booking ID" />
        </div>
        <div class="form-group">
          <label for="email">Email ID</label>
          <input v-model="email" type="text" class="form-control" id="email" placeholder="Email ID" />
        </div>
        <button @click="searchBooking" class="btn btn-primary btn-block">Track Booking Status</button>
      </div>
    </div>

    <div v-if="bookingDetails" class="details-container">
      <h3>Booking Details</h3>
      <table class="table table-bordered table-responsive w-100">
        <tbody>
          <tr>
            <th>Flight Name</th>
            <td>{{ bookingDetails.flight_name }}</td>
          </tr>
          <tr>
            <th>Departure IATA</th>
            <td>{{ bookingDetails.departure_iata }}</td>
          </tr>
          <tr>
            <th>Arrival IATA</th>
            <td>{{ bookingDetails.arrival_iata }}</td>
          </tr>
          <tr>
            <th>Departure Date</th>
            <td>{{ formatDateTime(bookingDetails.departure_date) }}</td>
          </tr>
          <tr>
            <th>Arrival Date</th>
            <td>{{ formatDateTime(bookingDetails.arrival_date) }}</td>
          </tr>
          <tr v-if="bookingDetails.return_flight">
            <th>Return Departure IATA</th>
            <td>{{ bookingDetails.return_flight.return_departure_iata }}</td>
          </tr>
          <tr v-if="bookingDetails.return_flight">
            <th>Return Arrival IATA</th>
            <td>{{ bookingDetails.return_flight.return_arrival_iata }}</td>
          </tr>
          <tr v-if="bookingDetails.return_flight">
            <th>Return Departure Date</th>
            <td>{{ formatDateTime(bookingDetails.return_flight.return_departure_date) }}</td>
          </tr>
          <tr v-if="bookingDetails.return_flight">
            <th>Return Arrival Date</th>
            <td>{{ formatDateTime(bookingDetails.return_flight.return_arrival_date) }}</td>
          </tr>
          <tr>
            <th>Ticket Status</th>
            <td>{{ bookingDetails.TicketStatus }}</td>
          </tr>
        </tbody>
      </table>

      <h3>Passengers</h3>
      <table class="table table-bordered table-responsive w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Type</th>
            <th>Ticket Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(passenger, index) in bookingDetails.passenger" :key="index">
            <td>{{ passenger.name }}</td>
            <td>{{ passenger.dob }}</td>
            <td>{{ passenger.gender }}</td>
            <td>{{ passenger.age }}</td>
            <td>{{ getPassengerType(passenger.age) }}</td>
            <td v-if="passenger.ticket_details">
              <div><strong>E-ticket:</strong> {{ passenger.ticket_details.e_ticket_number }}</div>
              <div><strong>Airline Confirmation:</strong> {{ passenger.ticket_details.airline_confirmation_number }}</div>
            </td>
            <td v-else>Not Available</td>
          </tr>
        </tbody>
      </table>

      <h3>Contact & Billings</h3>
      <table class="table table-bordered table-responsive w-100">
        <tbody>
          <tr>
            <th>Email</th>
            <td>{{ bookingDetails.contact_billings.Email }}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{{ bookingDetails.contact_billings.phone_number }}</td>
          </tr>
          <tr>
            <th>Cardholder Name</th>
            <td>{{ bookingDetails.contact_billings.cardholder_name }}</td>
          </tr>
          <tr>
            <th>Card Number (Last 4 Digits)</th>
            <td>************{{ bookingDetails.contact_billings.card_number }}</td>
          </tr>
        </tbody>
      </table>

      <h3>Orderings</h3>
      <table class="table table-bordered table-responsive w-100">
        <tbody>
          <tr v-if="bookingDetails.orderings.payble_amount">
            <th>Payable Amount</th>
            <td>{{ bookingDetails.orderings.payble_amount }} $</td>
          </tr>
          <tr v-if="bookingDetails.orderings.flight_cancellation_protection">
            <th>Flight Cancellation Protection</th>
            <td>{{ bookingDetails.orderings.flight_cancellation_protection }} $</td>
          </tr>
          <tr v-if="bookingDetails.orderings.sms_support">
            <th>SMS Support</th>
            <td>{{ bookingDetails.orderings.sms_support }} $</td>
          </tr>
          <tr v-if="bookingDetails.orderings.baggage_protection">
            <th>Baggage Protection</th>
            <td>{{ bookingDetails.orderings.baggage_protection }} $</td>
          </tr>
          <tr v-if="bookingDetails.orderings.premium_support">
            <th>Premium Support</th>
            <td>{{ bookingDetails.orderings.premium_support }} $</td>
          </tr>
          <tr v-if="bookingDetails.orderings.total_refund_protection">
            <th>Total Refund Protection</th>
            <td>{{ bookingDetails.orderings.total_refund_protection }} $</td>
          </tr>
          <tr v-if="bookingDetails.orderings.total_amount">
            <th>Total Amount</th>
            <td>{{ bookingDetails.orderings.total_amount }} $</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment-timezone';

export default {
  name: "LoginForBooking",
  data() {
    return {
      bookingId: '',
      email: '',
      bookingDetails: null,
    };
  },
  methods: {
    async searchBooking() {
      try {
        const response = await axios.post('https://crm.valueutickets.com/api/login/', {
          email: this.email,
          booking_id: this.bookingId,
        });
        this.bookingDetails = response.data;

        // Emit the TicketStatus to the parent component
        this.$emit('update-ticket-status', this.bookingDetails?.TicketStatus);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data.error : error.message);
      }
    },
    getPassengerType(age) {
      if (age < 2) return 'Infant';
      if (age < 12) return 'Child';
      return 'Adult';
    },
    formatDateTime(dateTime) {
      return moment(dateTime)
        .tz('America/New_York')
        .format('D MMM, YYYY [at] h:mm:ss A [America/New_York Timezone]');
    },
  },
};
</script>


<style scoped>
/* General Styles */
.container {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  width: 100%;
  background: #F9F2F2;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.icon-container {
  margin-bottom: 20px;
  background-color: #f9f2f2;
}

.icon {
  width: auto;
  height: 100px;
}

.text-center {
  text-align: center;
}

.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.p-4 {
  padding: 1.5rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.form-container {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
}

/* Details Container */
.details-container {
  background: white;
  padding: 20px;
  margin-top: 25px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  overflow-x: auto; /* Ensure content is scrollable horizontally if needed */
}

/* Tables */
.table-responsive {
  margin-top: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
  padding: 8px;
}

.table thead th {
  background-color: #f2f2f2;
  text-align: left;
}

/* Media Queries for Larger Screens */
@media (min-width: 992px) {
  .details-container {
    max-width: 90%; /* Allow wider view for larger screens */
  }
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  display: flex;
  justify-content: center; /* Center align the content */
}

.footer,
.header {
  flex-shrink: 0;
}

/* Table Row Styling (Optional, Add Visual Enhancements) */
.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table tbody tr:hover {
  background-color: #f1f1f1;
}

</style>
