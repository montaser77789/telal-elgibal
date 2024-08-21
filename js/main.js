document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');

    const scrollHandler = () => {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            // تحقق من أن العنصر في viewport
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.querySelector('.number').textContent;
                    const increment = target / 100; // زيادة بنسبة 1/100 من الهدف
                    
                    if (count < target) {
                        counter.querySelector('.number').textContent = Math.ceil(count + increment);
                        setTimeout(updateCount, 10); // تحديث كل 10 ميلي ثانية
                    } else {
                        counter.querySelector('.number').textContent = target;
                    }
                };
                updateCount();
            }
        });
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // تحقق أولي عند تحميل الصفحة
});
