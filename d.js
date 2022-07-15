function saveSVG(svgText, index){
    const a = document.createElement('a');
    a.href = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText);
    a.download = 'svg' + index;
    a.click();
}

async function download(url){
    const response = await fetch(url);
    const responseText = await response.text();
    return responseText;
}

async function getSVG(url, index){
    const svg = await download(url + index + '.svg');
    saveSVG(svg, index);
}

async function startDownloading(urlFromBar, countOfPages){
    const svgUrl = urlFromBar.replace(/index\.html.*/, '') + 'xml/topic';
    const keys = Object.keys(new Array(countOfPages).fill('')).map(el => el - 0 + 1); // [1,2,3,4,5...countOfPages]
    for (const i of keys){
        await getSVG(svgUrl, i);
    }
}

startDownloading(
  document.location.href,
  document.querySelector('#progressIndicator').textContent.replace(/[^\d]/g,'') - 0
)