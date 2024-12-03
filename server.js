// Dynamically inject CSS into the document
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #1e1e1e;
        color: #f4f4f4;
    }

    header {
        background-color: #333;
        color: #ffcc00;
        padding: 20px;
        text-align: center;
    }

    header h1, header p {
        margin: 0;
    }

    main {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
    }

    .links {
        margin-top: 20px;
    }

    .links a {
        display: block;
        color: #009ffd;
        text-decoration: none;
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    .links a:hover {
        text-decoration: underline;
    }

    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
    }

    .gallery img {
        width: 100%;
        max-width: 250px;
        border-radius: 8px;
        border: 2px solid #009ffd;
    }

    .unique {
        margin-top: 20px;
        text-align: center;
    }

    #clock {
        font-size: 1.5rem;
        color: #ffcc00;
        margin-top: 10px;
    }

    footer {
        text-align: center;
        margin-top: 20px;
        padding: 10px;
        background-color: #000;
        color: #fff;
    }
`;
document.head.appendChild(style);

// Functionality: Real-time clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
