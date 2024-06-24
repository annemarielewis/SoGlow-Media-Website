
function openTextMessage() {
    var phoneNumber = '9703190560'; // Replace with your phone number
    var message = 'Hello Sophie, I\'m interested in SoGlow media'; // Replace with your message
    var smsLink = 'sms:' + phoneNumber + '&body=' + encodeURIComponent(message);
    window.location.href = smsLink;
  }

  function openEmail() {
    var emailAddress = 'soglowmediamarketing@gmail.com'; // Email address
    var subject = 'Interested in your services'; // Email subject
    var body = 'Hello,\n\nI would like to inquire about your services.\n\nRegards,'; // Email body
    var emailLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = emailLink;
  }

// Function to fade quote in:
  function fadeInQuote() {
      var contactButtons = document.querySelector('.quote');
  
      // Create a delay before the quote starts to fade in:
      setTimeout(function() {
        contactButtons.style.opacity = '1';
      }, 70);
  
      // Set initial opacity and transition property:
      contactButtons.style.opacity = '0'; // Set initial opacity to 0
      contactButtons.style.transition = 'opacity 2s ease'; // Add transition effect
  }
  
    // Call the fadeInContactButtons function IF the page isn't loaded from the about.html page

    if (document.referrer && !document.referrer.includes('about.html')) {
        fadeInQuote();
    }
    


// Function to fade contact buttons in:

function fadeInContactButtons() {
    var contactButtons = document.querySelector('.contact_buttons');

    // Create a delay before the button starts to fade in:
    setTimeout(function() {
      contactButtons.style.opacity = '1';
    }, 1500);

    // Set initial opacity and transition property:
    contactButtons.style.opacity = '0'; // Set initial opacity to 0
    contactButtons.style.transition = 'opacity 2s ease'; // Add transition effect
}

  // Call the fadeInContactButtons function IF the page isn't loaded from the about.html page
  if (document.referrer && !document.referrer.includes('about.html')) {
    fadeInContactButtons();
}


// Function to handle button clicks and toggle active class on contact buttons
        // Add event listeners to buttons
        document.querySelectorAll('.contact_btn').forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });

        function handleButtonClick(event) {
            const button = event.target; // The clicked button
            const allButtons = document.querySelectorAll('.contact_btn'); // Get all expandable buttons

            // Remove 'active' class from all buttons
            allButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');
        }

        function toggleExpandBooking(button) {
        const schedulingSection = document.querySelector('.scheduling-section');    
                                //scheduling section
                                if (schedulingSection.style.display === 'none' || schedulingSection.style.display === '') {
                                    schedulingSection.style.display = 'block';
                                } else {
                                    schedulingSection.style.display = 'none';
                                }
                            }

// function for services buttons
        function toggleExpand(button) {
            const content = button.nextElementSibling;
            const targetArea = document.querySelector(".expanded_area2"); // Always target expanded_area2
            const allContents = document.querySelectorAll('.expandable-content');
            const allButtons = document.querySelectorAll('.expandable-btn'); // Get all expandable buttons
            const schedulingSection = document.querySelector('.scheduling-section');    
            
            //services section
            // Check if the button is already active
            const isActive = button.classList.contains('active');
        
            // Remove 'active' class from all buttons
            allButtons.forEach(btn => btn.classList.remove('active'));
        
            // If the button was already active, we don't add the 'active' class again
            if (!isActive) {
                button.classList.add('active');
            }
        
            // Toggle 'expanded' class on the content and remove it from all others
            allContents.forEach(item => {
                if (item === content) {
                    item.classList.toggle('expanded');
                } else {
                    item.classList.remove('expanded');
                }
            });
        
            // Remove 'active' class if content is not expanded
            if (!content.classList.contains('expanded')) {
                button.classList.remove('active');
            }
        
            // Clear the target area and append new content if expanded
            targetArea.innerHTML = '';
        
            if (content.classList.contains('expanded')) {
                const paragraph = document.createElement('p');
                paragraph.classList.add('expandable-paragraph');
        
                const contentMap = {
                    'expandable-btn1': "<ul><li><strong>Price:</strong> From $500 up to $800/month</li><li><strong>Includes:</strong> Up to 4 posts per week, comprehensive content creation, streamlining website SEO from social media channels, posting, and analytics monitoring. Ideal for clients who need a full-service solution to manage and grow their social media presence.</li><li><strong>Value:</strong> Simplified billing, consistent & comprehensive coverage of all social media needs, and website integration.</li></ul>",
                    'expandable-btn2': "<ul><li><strong>Price:</strong> From $300 up to $500/month</li><li><strong>Includes:</strong> Up to 4 high-quality posts per week, with the client maintaining control over posting schedules. No website integration or website SEO optimization.</li><li><strong>Value:</strong> Focus on creating engaging, high-quality content while leaving the posting flexibility and website integration, and thus the strategy, to the client.</li></ul>",
                    'expandable-btn3': "<ul><li><strong>Price:</strong> From $200 up to $400/month</li><li><strong>Includes:</strong> In-depth analytics and strategic advice, with actionable insights and content recommendations based on data. Up to 1 appointment a week, or 1 a month.</li><li><strong>Value:</strong> Allows clients who prefer to manage their own content to benefit from expert analytics and strategic planning.</li></ul>",
                    'expandable-btn4': "<ul><li><strong>Price:</strong> $400/month</li><li><strong>Includes:</strong> The initial free consultation and up to 4 appointments a month of in-person strategic consultation.</li><li><strong>Value:</strong> Ideal for clients needing ongoing strategic guidance and accountability, and excellent for first time clients who need time to clarify their goals before considering other service packages.</li></ul>",
                    'expandable-btn5': "<ul><li><strong>Price:</strong> Custom pricing depending on the event</li><li><strong>Includes:</strong> Real-time posting and strategic marketing during events.</li><li><strong>Value:</strong> Provides targeted support during special events to maximize digital engagement and impact.</li></ul>",
                    'expandable-btn6': "<ul><li><strong>Price:</strong> Custom pricing depending on the needs</li><li><strong>Includes:</strong> Development of your company's own, custom website!</li><li><strong>Value:</strong> Provides custom tailorability and no re-occurring monthly or yearly fees that you'd have to pay for pre-coded, third-party website creation platforms.</li></ul>"
                };
        
                paragraph.innerHTML = contentMap[button.classList[1]];
                targetArea.appendChild(paragraph);
            }

        }


// fixed top banner is causing the page to scroll down too far when clicking on anchor links (e.g. "Services"+"Reviews")-->adjust the scroll position to account for the height of the fixed banner:
// Calculate the height of the fixed top banner
var bannerHeight;

document.addEventListener("DOMContentLoaded", function() {
  bannerHeight = document.getElementById('topbanner').offsetHeight;
  console.log("BH: " + bannerHeight);
});

function scrollToAnchor(anchorId, event) {
    event.preventDefault(); // Prevent the default behavior of the anchor link--NEED THIS OR WON'T SCROLL BASED ON JS LOGIC BELOW--JUST WILL GO TO A-TAG
    
    var target = document.getElementById(anchorId);
    console.log(target);
    if (target) {
        var offsetTop = target.offsetTop - bannerHeight;
        
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo(0, offsetTop);
        }
    }
}

function scrollToSectionFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

window.onload = scrollToSectionFromHash;

//carosel from owl (not bootstrap):
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});
