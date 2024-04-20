
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
  
    // Call the fadeInContactButtons function
    fadeInQuote()


// Function to fade contact buttns in:

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

  // Call the fadeInContactButtons function
  fadeInContactButtons();
  



