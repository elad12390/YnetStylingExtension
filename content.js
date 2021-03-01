function removeScriptBlockingMessage() {
    const scriptBlockingDiv = $("div:contains(script blocking software)");
    if (!scriptBlockingDiv.length) {
        setTimeout(removeScriptBlockingMessage, 1000);
    } else {
        scriptBlockingDiv.hide();
    }
}

function removeAllBanners() {
    $("extended-banner").hide()
    $("div[class^=\"banner\"]").hide()
    $("div[id^=\"ads\"]").hide()
}
removeScriptBlockingMessage();
removeAllBanners();
// alert("This is my favorite website!");
window.isAbroad = false;
