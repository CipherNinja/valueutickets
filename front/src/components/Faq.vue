<template>
  <div class="faq-page">
    <!-- Header Section -->
    <header class="header">
      <h3 class="title">Frequently Asked Questions</h3>
    </header>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button @click="toggleFaq(index)" class="faq-question">
          <span>{{ faq.question }}</span>
          <i :class="['fas', faq.open ? 'fa-angle-up' : 'fa-angle-down']" class="toggle-icon"></i>
          
        </button>
        <transition name="fade">
          <div v-if="faq.open" class="faq-answer">
            {{ faq.answer }}
          </div>
        </transition>
      </div>
    </section>

    <!-- <section class="faq-section">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <button @click="toggleFaq(index)" class="faq-question">
            {{ faq.question }}
            <i class = "fas fa-angle-down"></i>
            <span class="toggle-icon">{{ faq.open ? '>' : 'v' }}</span>
          </button>
          <div v-if="faq.open" class="faq-answer">
            {{ faq.answer }}
          </div>
        </div>
      </section> -->
  </div>
</template>

<script>
export default {
  name: "FaqPage",
  data() {
    return {
      faqs: [
        {
          question: "How does the ValueuTickets Referral Program work?",
          answer:
            "The referral program allows you to share your unique referral link with friends, family, and colleagues. When someone books a flight using your link, both you and the referred person receive rewards like discounts or eCredits for future bookings.",
          open: false,
        },
        {
          question: "What rewards do I get for referring someone?",
          answer:
            "You can earn discounts on future bookings, accumulate eCredits to use towards travel, and gain exclusive early access to sales and limited-time offers.",
          open: false,
        },
        {
          question: "Are there any conditions for receiving referral rewards?",
          answer:
            "Yes, referral rewards are only granted after the referred customer completes a booking and payment. The booking must be made through the provided referral link, and rewards are non-transferable.",
          open: false,
        },
        {
          question: "Can I use my referral rewards for someone else’s booking?",
          answer:
            "No, referral rewards can only be used for your personal bookings made through ValueuTickets.",
          open: false,
        },
        {
          question: "Do referral rewards expire?",
          answer:
            "Yes, rewards may be subject to restrictions or expiration dates. You can check the details in your account.",
          open: false,
        },
        {
          question: "How can I participate in social media contests and promotions?",
          answer:
            "Follow ValueuTickets on platforms like Facebook, Instagram, and Twitter to stay updated on exclusive promotions, giveaways, and contests where you can win free flight tickets and other rewards.",
          open: false,
        },
        {
          question: "How does ValueuTickets support social causes?",
          answer:
            "A portion of every booking goes toward supporting local communities, travel education, and environmental sustainability initiatives. By booking with us, you contribute to making a positive impact.",
          open: false,
        },
        {
          question: "Can ValueuTickets modify or discontinue the Referral Program?",
          answer:
            "Yes, ValueuTickets reserves the right to change or discontinue the referral program at any time without prior notice.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
/* Basic Styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f900;
}

.faq-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.000);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.0);
  border-radius: 8px;
}

.header {
  text-align: left;
  margin-bottom: 20px;
}

.title {
  font-size: 2rem;
  color: #333;
  font-weight: bold;
}

.faq-section {
  margin-top: 20px;
}

.faq-item {
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 2px;
  overflow: hidden;
  background-color: #fafafa;
  transition: box-shadow 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.faq-question {
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: #060606;
  text-align: left;
  width: 100%;
  cursor: pointer;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question:focus {
  outline: none;
}

.toggle-icon {
  font-size: 1.2rem;
  color: #666;
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 15px;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
  border-top: 1px solid #ddd;
}

/* Transition for FAQ open/close */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
