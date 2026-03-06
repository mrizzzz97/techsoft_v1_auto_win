function updateClock() {
    const now = new Date();

    // Formatting Time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = new Intl.DateTimeFormat('id-ID', timeOptions).format(now);

    // Formatting Day, Date, Month, Year
    const dateOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const dateString = new Intl.DateTimeFormat('id-ID', dateOptions).format(now);

    // Update all occurrences of the clock
    const timeElements = document.querySelectorAll('.clock-time');
    const dateElements = document.querySelectorAll('.clock-date');

    timeElements.forEach(el => el.textContent = timeString);
    dateElements.forEach(el => el.textContent = dateString);
}

// Initial call
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
});
