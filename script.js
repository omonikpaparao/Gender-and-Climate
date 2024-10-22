// Smooth Scroll for CTA button

// JavaScript for toggling more info visibility
document.getElementById('toggle-btn').addEventListener('click', function() {
  var moreInfo = document.getElementById('more-info');
  var button = document.getElementById('toggle-btn');
  
  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
      moreInfo.style.display = "block"; // Show the hidden content
      button.textContent = "Read Less"; // Change button text
  } else {
      moreInfo.style.display = "none"; // Hide the content
      button.textContent = "Read More"; // Reset button text
  }
});

// Bar Chart (Gender and Climate Leadership Roles)
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Women', 'Men', 'Non-Binary'],
        datasets: [{
            label: 'Leadership Roles in Climate Action (%)',
            data: [20, 70, 10], // Sample data
            backgroundColor: ['#00bfa5', '#ff6b6b', '#4e73df'], // Colors for bars
            borderColor: ['#00bfa5', '#ff6b6b', '#4e73df'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff' // White color for y-axis labels
                }
            },
            x: {
                ticks: {
                    color: '#fff' // White color for x-axis labels
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff' // White color for the legend
                }
            }
        }
    }
});

// Pie Chart (Impact of Climate Change by Gender)
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Women', 'Men', 'Non-Binary'],
        datasets: [{
            label: 'Impact of Climate Change',
            data: [60, 30, 10], // Sample data
            backgroundColor: ['#00bfa5', '#ff6b6b', '#4e73df'], // Colors for pie slices
            borderColor: '#1e1e1e', // Dark border
            borderWidth: 2
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: '#fff' // White color for the legend
                }
            }
        }
    }
});

// JavaScript to toggle story details visibility
const buttons = document.querySelectorAll('.toggle-story-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const storyDetails = document.getElementById(target);

        if (storyDetails.style.display === 'none' || storyDetails.style.display === '') {
            storyDetails.style.display = 'block';
            this.textContent = 'Read Less'; // Change button text
        } else {
            storyDetails.style.display = 'none';
            this.textContent = 'Read More'; // Reset button text
        }
    });
});


// Optional: Placeholder for dynamic content fetching
document.addEventListener('DOMContentLoaded', function() {
  // Code to dynamically load blog posts can go here
});


// Smooth scroll for footer links
const footerLinks = document.querySelectorAll('.footer-nav a');

footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
