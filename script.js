document.addEventListener("DOMContentLoaded", function() {
    // شروع موزیک دارک بعد از کلیک
    document.addEventListener("click", function() {
        document.getElementById("darkSound").play();
    }, { once: true });

    // دکمه ورود مخفی
    document.getElementById("accessBtn").addEventListener("click", function() {
        document.getElementById("hiddenMessage").style.display = "block";
        window.open("https://your-hidden-node-link.com", "_blank");
    });

    // فعال شدن نود مخفی با کلید M
    document.addEventListener("keydown", function(event) {
        if (event.key === "M") {
            window.open("https://your-hidden-node-link.com", "_blank");
        }
    });
});
