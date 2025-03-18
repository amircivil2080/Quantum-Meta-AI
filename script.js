document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("bg-music");
    var button = document.querySelector(".button");

    button.addEventListener("click", function() {
        var question = document.getElementById("question").value.trim();
        var response = document.getElementById("response");

        if (question === "") {
            response.innerHTML = "لطفاً یک سؤال وارد کنید!";
            return;
        }

        var answers = {
            "ماده تاریک چیست؟": "ماده تاریک یک نوع ماده نامرئی است که فقط از طریق گرانش قابل مشاهده است.",
            "کیهان چگونه شکل گرفت؟": "کیهان حدود ۱۳.۸ میلیارد سال پیش در یک انفجار عظیم به نام بیگ‌بنگ شکل گرفت.",
            "مکانیک کوانتومی چیست؟": "مکانیک کوانتومی شاخه‌ای از فیزیک است که رفتار ذرات در مقیاس کوچک را توضیح می‌دهد."
        };

        response.innerHTML = answers[question] || "پاسخ این پرسش در حال پردازش است...";

        if (audio.paused) {
            audio.play().catch(error => console.log("خطای پخش صدا:", error));
        }
    });
});
