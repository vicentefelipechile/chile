document.addEventListener("DOMContentLoaded", function(event) {
    Timeline = document.getElementById("timeline");

    const items = new vis.DataSet()
    const options = {
        height: 'inherit',
    }

    VisTimeline = new vis.Timeline(Timeline, items, options)
})