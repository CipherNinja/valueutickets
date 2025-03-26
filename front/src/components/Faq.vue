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
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';
export default {
  name: "FaqPage",
  data() {
  return {
    faqs: [
      {
        question: "Why Book Cheap Flights with ValueUTickets?",
        answer: "ValueUTickets offers the best deals on one-way, round-trip, and multicity flights in America, with fast 10-minute booking and exclusive offers.",
        open: false,
      },
      {
        question: "How to Find Affordable Air Tickets at ValueUTickets?",
        answer: "Book early and use our fast search tools to unlock cheap flight deals in America within 10 minutes!",
        open: false,
      },
      {
        question: "Does ValueUTickets Offer Last-Minute Flight Tickets?",
        answer: "Yes, we provide last-minute flights at competitive prices. Call us or use our search engine for quick bookings in 10 minutes!",
        open: false,
      },
      {
        question: "How to Search for the Best Flight Deals on ValueUTickets?",
        answer: "Use our homepage search bar and filters to find cheap one-way or round-trip flights tailored to your needs.",
        open: false,
      },
      {
        question: "Can I Book One-Way or Round-Trip Flights with ValueUTickets?",
        answer: "Absolutely! Book one-way, round-trip, or multicity flights in America with ease and speed.",
        open: false,
      },
      {
        question: "How to Confirm My Flight Booking with ValueUTickets?",
        answer: "After your fast 10-minute booking, you’ll get a confirmation email or check https://valueutickets.com/booking.",
        open: false,
      },
    ],
    activeFaqIndex: null,
  };
},
  methods: {
    toggleFaq(index) {
      if (this.activeFaqIndex === index) {
        this.faqs[index].open = !this.faqs[index].open;
      } else {
        if (this.activeFaqIndex !== null) {
          this.faqs[this.activeFaqIndex].open = false;
        }
        this.faqs[index].open = true;
      }
      this.activeFaqIndex = index;
    },
  },

  mounted() {
    // Use `this.faqs` in mounted lifecycle to ensure data is available
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': this.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer,
            },
          })),
        }),
      }],
    });
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
