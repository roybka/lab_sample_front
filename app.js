// Initialize Telegram Web App
if (window.Telegram && window.Telegram.WebApp) {
    const webApp = window.Telegram.WebApp;
    webApp.ready();
    
    // You can add more Telegram Mini App functionality here
    console.log("Telegram WebApp initialized");
} 