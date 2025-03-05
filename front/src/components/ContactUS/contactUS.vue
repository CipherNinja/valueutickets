<template>
  <div>
    <p class="m-head">Get In Touch</p>
    <p class="m-txt">We are here for you! How can we help?</p>
    <div class="main">
      <div class="form">
        <!-- Form -->
        <form @submit.prevent="handleSubmit">
          <!-- Name Field -->
          <input
            type="text"
            placeholder="Enter Your Name"
            v-model="formData.name"
            :class="{ 'input-error': !formData.name && submitted }"
            aria-label="Enter Your Name"
          />
          <span v-if="submitted && !formData.name" class="error-message">
            Name is required.
          </span>

          <!-- Email Field -->
          <input
            type="email"
            placeholder="Enter your email address"
            v-model="formData.email"
            @input="validateEmail"
            :class="{
              'input-error': (!formData.email && submitted) || !emailValid,
            }"
            aria-label="Enter your email address"
          />
          <span
            v-if="submitted && (!formData.email || !emailValid)"
            class="error-message"
          >
            {{
              !formData.email
                ? "Email is required."
                : "Enter a valid email address."
            }}
          </span>

          <!-- Country Field -->
          <select
            v-model="formData.country"
            @change="setCountryCode"
            :class="{ 'input-error': !formData.country && submitted }"
            aria-label="Select Your Country"
          >
            <option value="">Select Your Country</option>
            <option
              v-for="(code, country) in countryCodes"
              :key="country"
              :value="country"
            >
              {{ country }}
            </option>
          </select>
          <span v-if="submitted && !formData.country" class="error-message">
            Country selection is required.
          </span>

          <!-- Phone Field -->
          <input
            type="text"
            placeholder="Enter your phone number"
            v-model="formData.phone"
            @input="validatePhone"
            :class="{
              'input-error': (!formData.phone && submitted) || !phoneValid,
            }"
            aria-label="Enter your phone number"
          />
          <span
            v-if="submitted && (!formData.phone || !phoneValid)"
            class="error-message"
          >
            {{
              !formData.phone
                ? "Phone number is required."
                : "Enter a valid phone number."
            }}
          </span>

          <!-- Message Field -->
          <textarea
            placeholder="Message..."
            v-model="formData.message"
            :class="{ 'input-error': !formData.message && submitted }"
            aria-label="Enter your message"
          ></textarea>
          <span v-if="submitted && !formData.message" class="error-message">
            Message is required.
          </span>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="hasEmptyFields || !emailValid || !phoneValid"
          >
            Submit
          </button>
        </form>

        <!-- Overall Error Message -->
        <p v-if="submitted && hasEmptyFields" class="error-message">
          Please fill out all required fields.
        </p>
      </div>

      <!-- Contact Info & Map -->
      <div class="map">
        <p class="company">ValueU Tickets LLC</p>
        <p class="address">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          Travelove LLC 30 N Gould St #36918 Sheridan, WY 82801 United State
        </p>
        <p class="number">
          <i class="fa fa-phone" aria-hidden="true"></i> +1 (833)931-6548
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1741164073494!6m8!1m7!1s1lVcD0mc0nUtxtMJCjwVyA!2m2!1d44.7978439094205!2d-106.9545639630742!3f285.53431777395224!4f-3.7318373329557204!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contactus",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      },
      countryCodes: {
        India: "+91",
        USA: "+1",
        Canada: "+1",
        UK: "+44",
        Australia: "+61",
        Germany: "+49",
        France: "+33",
        "South Korea": "+82",
        Italy: "+39",
        China: "+86",
        Japan: "+81",
      },
      emailValid: true,
      phoneValid: true,
      submitted: false,
      isSubmitting: false,
      submissionSuccess: null,
    };
  },
  methods: {
    async handleSubmit() {
      this.submitted = true;
      this.validateEmail();
      this.validatePhone();

      if (this.hasEmptyFields || !this.emailValid || !this.phoneValid) {
        return;
      }

      this.isSubmitting = true;
      try {
        const response = await axios.post(
          "https://gripchain.in/api/contactus",
          this.formData
        );
        if (response.status === 200) {
          alert("Your response has been recorded.");
          this.resetForm();
          this.submissionSuccess = true;
        } else {
          alert("Failed to submit. Please try again later.");
          this.submissionSuccess = false;
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("An error occurred while submitting the form. Please try again.");
        this.submissionSuccess = false;
      } finally {
        this.isSubmitting = false;
      }
    },
    setCountryCode() {
      if (this.formData.country) {
        this.formData.phone = this.countryCodes[this.formData.country];
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      this.emailValid = emailRegex.test(this.formData.email);
    },
    validatePhone() {
      const phoneRegex = /^\+?[0-9]+$/;
      this.phoneValid = phoneRegex.test(this.formData.phone);
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      };
      this.emailValid = true;
      this.phoneValid = true;
      this.submitted = false;
    },
  },
};
</script>

<style scoped>
.m-head {
  font-family: Outfit;
  font-size: 38px;
  font-weight: 700;
  line-height: 22.68px;
  letter-spacing: 0.02em;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  padding-left: 5%;
  padding-top: 25px;
}

.m-txt {
  font-family: Outfit;
  font-size: 24px;
  font-weight: 400;
  line-height: 17.64px;
  letter-spacing: 0.02em;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  padding-top: 15px;
  padding-left: 5%;
}

.main {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-self: center;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.form,
.map {
  display: flex;
  flex-direction: column;
}

.form {
  width: 60%;
}

.map {
  width: 40%;
}

.map-show {
  width: 100%;
  height: 300px;
  margin-right: 8px;
}

.company {
  font-family: Outfit;
  font-size: 27px;
  font-weight: 600;
  line-height: 27.16px;
  letter-spacing: 0.04em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.address {
  font-family: Outfit;
  font-size: 17.53px;
  font-weight: 400;
  line-height: 17.57px;
  letter-spacing: 0.04em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.number {
  font-family: Outfit;
  font-size: 17.53px;
  font-weight: 400;
  line-height: 17.57px;
  letter-spacing: 0.04em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.form {
  margin-right: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input,
form select,
form textarea,
form button {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

form input.input-error,
form select.input-error,
form textarea.input-error {
  border-color: red;
  box-shadow: 0 0 5px red;
}

form button {
  background-color: #fdd835;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

form button:hover {
  background-color: #e1c027;
}

form select {
  padding: 12px;
}

form textarea {
  resize: none;
  height: 100px;
}

/* Error message styling */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

/* Responsive Design for smaller screens */
/*@media (max-width: 768px)*/

@media (max-width: 450px) {
  .main {
    flex-direction: column;
  }

  .form,
  .map {
    width: 100%;
  }

  .form {
    padding: 15px;
    max-width: 100%;
    margin-bottom: 20px;
  }

  form input,
  form select,
  form textarea,
  form button {
    font-size: 16px;
  }
}
</style>
