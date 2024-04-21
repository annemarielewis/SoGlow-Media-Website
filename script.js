
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
  


// expand services buttons:

// draft 1:
// function toggleExpand(button) {
//     var content = button.nextElementSibling;
//     content.classList.toggle('expanded');
//   }

// draft 2: (unexpands when anotehr button is clicked)
// function toggleExpand(button) {
//     var content = button.nextElementSibling;
  
//     // Get all expandable contents on the page
//     var allContents = document.querySelectorAll('.expandable-content');
  
//     // Iterate through each content
//     allContents.forEach(function(item) {
//       // Check if the content is not the one associated with the clicked button
//       if (item !== content) {
//         // Remove the 'expanded' class to hide the content
//         item.classList.remove('expanded');
//       }
//     });
  
//     // Toggle the 'expanded' class on the content associated with the clicked button
//     content.classList.toggle('expanded');
//   }

// final: need to add the row1 content to expanded_area 1 when clicked (same for row 2, respectively)-->took p from html and put in JS
// instead of the p expanding directly below the button.
function toggleExpand(button) {
    // Get the expandable content associated with the clicked button
    var content = button.nextElementSibling;

    // Check if the button belongs to row1 or row2
    var belongsToRow1 = button.parentElement.classList.contains('row1');

    // Get the target area based on the button's row
    var targetArea = belongsToRow1 ? document.querySelector(".expanded_area1") : document.querySelector(".expanded_area2");

    // Get all expandable contents on the page
    var allContents = document.querySelectorAll('.expandable-content');

    // Iterate through each content
    allContents.forEach(function(item) {
        // Check if the content is not the one associated with the clicked button
        if (item !== content) {
            // Remove the 'expanded' class to hide the content
            item.classList.remove('expanded');
        }
    });

    // Toggle the 'expanded' class on the content associated with the clicked button
    content.classList.toggle('expanded');

    // Remove existing paragraphs in the target area
    targetArea.innerHTML = '';

    // Append the paragraph to the target area if the content is expanded
    if (content.classList.contains('expanded')) {
        // Create a new paragraph element
        var paragraph = document.createElement('p');
        paragraph.classList.add('expandable-paragraph'); // "expandable-paragraph" = class name for styling
        
        // Set the paragraph text based on the button clicked
if (button.classList.contains('expandable-btn1')) {
    paragraph.innerHTML = "<ul><li><strong>Price:</strong> $800/month</li><li><strong>Includes:</strong> Up to 4 posts per week, comprehensive content creation, posting, and analytics monitoring.</li><li><strong>Value:</strong> Simplified billing and consistent comprehensive coverage of all social media needs.</li></ul>";
} else if (button.classList.contains('expandable-btn2')) {
    paragraph.innerHTML = "<ul><li><strong>Price:</strong> $500/month</li><li><strong>Includes:</strong> Up to 4 high-quality posts per month, crafted with the aid of advanced AI editing software. Clients maintain control over posting schedules.</li><li><strong>Value:</strong> Focus on creating engaging, high-quality content while leaving the posting flexibility to the client.</li></ul>";
} else if (button.classList.contains('expandable-btn3')) {
    paragraph.innerHTML = "<ul><li><strong>Price:</strong> $300/month</li><li><strong>Includes:</strong> In-depth analytics and strategic advice, with actionable insights and content recommendations based on data.</li><li><strong>Value:</strong> Allows clients who prefer to manage their own content to benefit from expert analytics and strategic planning.</li></ul>";
} else if (button.classList.contains('expandable-btn4')) {
    paragraph.innerHTML = "<ul><li><strong>Price:</strong> $400/month</li><li><strong>Includes:</strong> Includes the initial free consultation and up to 4 hours of monthly strategic consultation.</li><li><strong>Value:</strong> Ideal for clients needing ongoing strategic guidance and accountability to refine and achieve their social media goals.</li></ul>";
} else if (button.classList.contains('expandable-btn5')) {
    paragraph.innerHTML = "<ul><li><strong>Price:</strong> Custom pricing depending on the event</li><li><strong>Includes:</strong> Real-time posting and strategic marketing during events.</li><li><strong>Value:</strong> Provides targeted support during special events to maximize digital engagement and impact.</li></ul>";
} else if (button.classList.contains('expandable-btn6')) {
    paragraph.innerHTML = "<ul><li><strong>Price:</strong> Custom pricing depending on the needs</li><li><strong>Includes:</strong> Development of your company's own, custom website!</li><li><strong>Value:</strong> Provides custom tailorability and no re-occurring monthly or yearly fees that you'd have to pay for pre-coded, third-party website creation platforms.</li></ul>";
}

        // Append the paragraph to the target area
        targetArea.appendChild(paragraph);
    }
}





// fixed top banner is causing the page to scroll down too far when clicking on anchor links (e.g. "Services"+"Reviews")-->adjust the scroll position to account for the height of the fixed banner:

// Calculate the height of the fixed top banner
var bannerHeight = document.getElementById('topbanner').offsetHeight;

// Smooth scroll to the anchor link with an offset to account for the fixed banner
function scrollToAnchor(anchorId) {
  var target = document.getElementById(anchorId);
  if (target) {
    var offsetTop = target.offsetTop - bannerHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

