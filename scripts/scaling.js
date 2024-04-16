$(window).resize(function () {
    if (window.innerWidth <= 800)
        document.getElementById('scalestyle').href = 'styles/universal-xs.css';
    else if (window.innerWidth <= 1250)
        document.getElementById('scalestyle').href = 'styles/universal-m.css';
    else
        document.getElementById('scalestyle').href = 'styles/universal.css';
});