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
          question: "Why should you book tickets from Valuetickets?",
          answer:
            "Valuetickets provides the best deals and exclusive offers on flights, tours, and accommodations. Their platform also offers competitive prices on events, making booking travel and entertainment easy and affordable.",
          open: false,
        },
        {
          question: "What is the best possible way to buy air tickets at a reasonable cost?",
          answer:
            "Unlock the best deals by booking early, using our powerful search tools, and discovering exclusive offers just for you!",
          open: false,
        },
        {
          question: "Do you offer last-minute air tickets?",
          answer:
            "Yes, we offer last-minute air tickets at competitive prices. Check our website for availability.",
          open: false,
        },
        {
          question: "How to search for the best deal or find the latest offer on WebsiteName?",
          answer:
            "Use the search bar and filter tools on our website to find the latest deals tailored to your needs.",
          open: false,
        },
        {
          question: "Can I book round-trip or one-way air tickets?",
          answer:
            "Yes, you can book round-trip or one-way tickets based on your travel requirements.",
          open: false,
        },
        {
          question: "How can you confirm that your flight reservation with WebsiteName is successful?",
          answer:
            "You will receive a confirmation email with your ticket details after completing the booking process.",
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
