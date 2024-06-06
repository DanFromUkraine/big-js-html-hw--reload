
const refs = {
    workout_btn: document.querySelector(".workout"),
    run_btn: document.querySelector(".run"),
    football_btn: document.querySelector(".football"),

    scroll_to_workout: document.querySelector(".scroll_to_workout"),
    scroll_to_run: document.querySelector(".scroll_to_run"),
    scroll_to_football: document.querySelector(".scroll_to_football"),
}

refs.workout_btn.addEventListener('click', function(e) {
    var middlePointPosition = refs.scroll_to_workout.offsetTop;
        window.scrollTo({ top: middlePointPosition, behavior: 'smooth' });
})
refs.run_btn.addEventListener('click', function(e) {
    var middlePointPosition = refs.scroll_to_run.offsetTop;
        window.scrollTo({ top: middlePointPosition, behavior: 'smooth' });
})
refs.football_btn.addEventListener('click', function(e) {
    var middlePointPosition = refs.scroll_to_football.offsetTop;
        window.scrollTo({ top: middlePointPosition, behavior: 'smooth' });
});
