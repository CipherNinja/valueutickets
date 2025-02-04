<template>
<div class="container">
    <!-- Main Heading outside the Card, Left Aligned -->
    <h2 class="main-heading">
        <i class="fa fa-suitcase-rolling heading-icon"></i>
        Lost Baggage Protection
    </h2>

    <div class="card">
        <!-- Blue box at the top of the card -->
        <div class="blue-box">
            <div class="recommended-heading">Recommended</div>
            <!-- New heading below recommended heading -->
            <div class="protection-heading">Baggage Protection</div>
            <img src="/images/bagg.jpg" alt="Baggage Protection" class="blue-box-image" />
        </div>

        <p class="bordered">Did you know: 20 million bags are mishandled by airlines every year!</p>

        <div class="options">
            <div class="option">
                <div class="option-box ">
                    
                    <div class="content">
                        <p class="title bordered">
                            <span class="circle-icon"></span>
                            Yes, I want to protect my baggage <span class="price">$30.5 per person</span>
                        </p>
                        <ul class="description">
              <li>✔ Receive real-time push notifications via email & SMS regarding the status of your delayed baggage</li>
              <li>✔ Collect $1,000 per bag that is not returned within 96 hours</li>
              <li>✔ No proof of contents or receipts are required in order to receive payment</li>
            </ul>
                    </div>
                </div>
            </div>

            <div class="option">
                <label for="no-protection" class="option-box">
                    <input type="checkbox" id="no-protection" name="baggage-option" />
                    <div class="content">
                        <p class="title bordered">
                            <span class="circle-icon"></span>
                            No, I'm willing to risk losing my baggage <span class="price">$0.00</span>
                        </p>
                    </div>
                </label>
            </div>
        </div>
        <p class="terms">By adding baggage protection, you agree to the <a href="#">Blue Ribbon Bags Terms & Conditions</a>.</p>
    </div>

    <h2 class="main-heading">
        <i class="fa fa-calendar-check heading-icon"></i>
        Extended Cancellation Policy
    </h2>
    <div class="card">
        <div class="blue-box background-color">
            <div class="recommended-heading">Recommended</div>
            <!-- New heading below recommended heading -->
            <div class="protection-heading">Cancellation protection </div>
            <img src="/images/a man.jpg" alt="Baggage Protection" class="blue-box-image" />
        </div>

        <p class="bordered">Choose cancellation protection and receive a total refund of $181.83!</p>

        <div class="options">
            <div class="option">
                <div class="option-box">

                    <div class="content">
                        <p class="title bordered">
                            <span class="circle-icon"></span>
                            Yes, I want cancellation protection <span class="price">$30.5 per person</span>
                        </p>
                        <ul class="description">
              <li>✔ Cancel or Re-book Your Booking For Any Reason Within 24 Hours</li>
              <li>✔ If you wish to cancel, kindly email us at support@flightschannel.com</li>
            
            </ul>
                    </div>
                </div>
            </div>

            <div class="option">
                <label for="no-cancellation" class="option-box">
                    <input type="checkbox" id="no-cancellation" name="cancellation-option" />
                    <div class="content">
                        <p class="title bordered">
                            <span class="circle-icon"></span>
                            No, I just want 2-hour free cancellation <span class="price">$0.00</span>
                        </p>
                    </div>
                </label>
            </div>
        </div>
        <p class="terms"> * Extended Cancellation Policy Is Non- Refundable Once Purchased.</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
}

.container {
    max-width: 100%;
    padding: 20px;
    background-color: #EAF3F2;
}

.main-heading {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
    color: black;
    display: flex;
    align-items: center;
    gap: 10px;
}

.heading-icon {
    font-size: 1.2em;
    color: black;
}

.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    overflow: hidden;
    padding: 20px;
}

.bordered {
    border: 2px solid #EAFAF8;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #EAFAF8;
}

.blue-box {
    background-color: #71B3FF;
    height: 150px;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    border-radius: 5px 5px 0px 0px;
}

.recommended-heading {
    position: absolute;
    top: 30px;
    left: 80px;
    background-color: #4ACFFF;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid #4ACFFF;
}

/* New style for protection heading */
.protection-heading {
    position: absolute;
    top: 70px;
    left: 50px;
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    padding: 5px 10px;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.option-box {
    display: flex;
    flex-direction: column;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
}

.option-box input {
    display: none;
}

.option-box .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.option-box .content .title {
    display: flex;
    align-items: center;
    background-color: #EAFAF8;
}

.option-box .content .price {
    font-size: 1.2em;
    color: #007bff;
    margin-left: auto;
}

.circle-icon {
    width: 15px;
    height: 15px;
    background-color: black;
    border-radius: 50%;
    margin-right: 2px;
}

.option-box .content .description {
    font-size: 12px;
  color: #6b7280;
  padding: 15px 0;
  list-style-type: none;
}

.check-icon {
    color: black;
    font-size: 1.2em;
}

.background-color {
    background-color: #4B4DC8;
}

.blue-box-image {
    max-width: 200px;
    height: auto;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
}

.terms a {
    color: #007bff;
    text-decoration: none;
}

.terms a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .recommended-heading {
        left: 60px;
        top: 20px;
    }

    .protection-heading {
        top: 70px;
        left: 2rem;
    }

    .option-box {
        flex-direction: column;
    }

    .option-box .content {
        flex-direction: column;
        align-items: flex-start;
    }

    .option-box .content .price {
        margin-top: 5px;
        font-size: 15px;
        margin-left: 2rem;
    }

    .main-heading {
        font-size: 1.2em;
    }

    .blue-box {
        height: 120px;
    }

    .check-icon {
        font-size: 1em;
    }

    .blue-box-image {
        max-width: 150px;
        right: 15px;
    }
}

@media (max-width: 480px) {

    .main-heading {
        font-size: 18px;
    }

    .recommended-heading {
        left: 20px;
        top: 15px;
        width: 100px;
        font-size: 12px;
    }

    .protection-heading {
        top: 50px;
        font-size: 12px;
        left: 3px;
    }

    .blue-box {
        height: 100px;
    }

    .check-icon {
        font-size: 0.9em;
    }

    .blue-box-image {
        max-width: 80px;
        right: 10px;
    }

    .bordered {
        font-size: 12px;
    }

    .option-box .content .price {
        font-size: 12px;
    }

    .option-box .content .title {
        font-size: 12px;
    }

    .option-box .content .description {
        font-size: 12px;
    }

    .terms {
        font-size: 12px;
    }

    .circle-icon {
        width: 11px;
        height: 8px;
    }
}
</style>
