const courseModules = [
    {
        id: 1,
        title: "Forex Fundamentals",
        description: "Learn the basics of forex markets and currency pairs."
    },
    {
        id: 2,
        title: "Technical Analysis",
        description: "Master chart reading and technical indicators."
    },
    {
        id: 3,
        title: "Risk Management",
        description: "Develop strategies to protect your capital."
    },
    {
        id: 4,
        title: "Advanced Trading Strategies",
        description: "Explore complex trading techniques and automation."
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