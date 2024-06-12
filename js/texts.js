function Txt(){}

// questionmark tooltip: returns jquery object for tooltip with specified text
function questionTt(text) {
    return fa("question-circle").addClass("text-secondary")
        .attr("title", text)
        .attr("data-toggle", 'tooltip')
        .attr("data-placement", "bottom");
}

Txt.gradText = "If checked, the color will be used as a part of dark-to-bright <b>gradient</b>. In this gradient, you might want to only keep one color per each brightness level, e.g. exclude <b>green</b> color because 1) it does not look great on portraits and 2) its brightness isn't different from blue color";
Txt.edText = "<b>Diffusion exclusion</b><br>Produce separate result with this color <b>excluded</b> from the palette. E.g. since green doesn't look great on portraits, mark it as DE and see diffusion variation without green.";
Txt.availableText = "Uncheck the colors you want to exclude";
Txt.editPixelByPixel = "Downloaded <i>.png</i> file is called <strong>miniature</strong>: each pixel represents a sticker on the cube. You can edit it pixel-by-pixel in your favourite image editor.<br>When you are finished, simply upload the edited miniature (drag-and-drop here or click \"New mosaic\").";
Txt.littleHintUnder = "Mouse wheel to zoom in/out. Drag the box or the background to move. Drag the bottom-right corner to resize.";

Txt.qaTitlesAndTexts = [
    "<h3 class='mt-4'>What is this?</h3>",
    "You might have seen artists creating pictures from hundreds or even thousands of Rubik's cubes. The main challenge of this art is converting a full-color photo into a 6-color pixelized version. This tool automates the entire process for you."];
