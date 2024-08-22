// sidebar

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndex = 0;

// Create indicators dynamically based on number of slides
slides.forEach((_, index) => {
    const indicator = document.createElement('span');
    if (index === 0) indicator.classList.add('active');
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicators span');

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active indicator
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
    console.log("hello")
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// doubts
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.toggle-btn');
    const closeBtn = item.querySelector('.close-btn');
    const answer = item.querySelector('.faq-answer');

    toggleBtn.addEventListener('click', function () {
        answer.style.display = 'block';
        toggleBtn.style.display = 'none';
        closeBtn.style.display = 'inline-block'
    });

    closeBtn.addEventListener('click', function () {
        answer.style.display = 'none';
        toggleBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none'
    });
});

//Timeline
// Get all the boxes
const boxes = document.querySelectorAll('.timeline-boxes');
const displayText=document.querySelector(".timeline-text");
const Text=[{
    id: "1",
    text: "Startups begin by filling out a basic form on Unstop, followed by a detailed questionnaire sent via email. The top 80 startups will be selected based on their submissions."
},{
    id: "2",
    text: "Round 1 text. Startups begin by filling out a basic form on Unstop, followed by a detailed questionnaire sent via email." 
},{
    id: "3",
    text: "Round 2 text. Startups begin by filling out a basic form on Unstop, followed by a detailed questionnaire sent via email."
},{
    id: "4",
    text: "Round 3 text. Startups begin by filling out a basic form on Unstop, followed by a detailed questionnaire sent via email."
},{
id: "5",
    text: "D day text. Startups begin by filling out a basic form on Unstop, followed by a detailed questionnaire sent via email."
}];
// Loop through each box
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        // Get the circle ID from the data attribute
        const circleId = box.getAttribute('data-circle');
        // Remove active class from all circles
        document.querySelectorAll('.timeline-circle').forEach(circle => {
            circle.classList.remove('active');
        });
        // Add active class to the corresponding circle
        document.getElementById(circleId).classList.add('active');
    });

    box.addEventListener('mouseout', () => {
        // Optionally remove the active class when the mouse leaves the box
        const circleId = box.getAttribute('data-circle');
        document.getElementById(circleId).classList.remove('active');
    });
    box.addEventListener('click',()=>{
        let boxid=box.getAttribute('id');
    Text.forEach((obj)=>{
        if(boxid==obj.id){
        displayText.textContent=obj.text;
    }});
    
    });
}
);
