const courseModules = [
    {
        id: 1,
        title: "What to expect",
        description: "setting your expectations with this course"
    },
    {
        id: 2,
        title: "Learning the system",
        description: "Master my exact system which has shown long term profitability."
    },
    {
        id: 3,
        title: "Risk Management & Capital preservation",
        description: "Develop a plan to preserve capital knowing when to trade and when not to."
    },
    {
        id: 4,
        title: "Putting it all together",
        description: "Putting all the course together to show you what a day in the markets would look like"
    }
];

function renderCourseModules() {
    const moduleContainer = document.getElementById('course-modules');
    courseModules.forEach(module => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'card';
        moduleCard.innerHTML = `
            <div class="card-header">
                <h2 class="card-title">${module.title}</h2>
            </div>
            <div class="card-content">
                <p>${module.description}</p>
            </div>
        `;
        moduleContainer.appendChild(moduleCard);
    });
}

function handleCheckout() {
    // Replace 'your-whop-product-id' with your actual Whop product ID
    window.location.href = 'https://whop.com/checkout/your-whop-product-id';
}

document.addEventListener('DOMContentLoaded', () => {
    renderCourseModules();
    document.getElementById('checkout-button').addEventListener('click', handleCheckout);
});