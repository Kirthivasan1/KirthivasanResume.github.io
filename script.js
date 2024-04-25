function changePage(page) {
    switch (page) {
        case 'home':
            window.location.href="index.html";
            break;
        case 'about':
            window.location.href = "AboutPage.html";
            break;
        case 'contact':
            window.location.href = "ContactPage.html";
            break;
        default:
            break;
    }
}
