function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Wine_15999265262760/Dashboard3?:language=en&:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}