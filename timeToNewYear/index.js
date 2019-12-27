document.addEventListener("DOMContentLoaded", () => {

    fGetNewYearDate = () => {
        const dNewYear = new Date();
        dNewYear.setFullYear(dNewYear.getFullYear() + 1, 0, 1);
        dNewYear.setHours(0, 0, 0, 0);
        return dNewYear;
    }

    fPrintDateDiffFromNow = (dTo, oControls) => {
        const dNow = new Date();
        const dDiff = new Date(dTo.getTime() - dNow.getTime());
        oControls.oMonthControl.textContent = dDiff.getUTCMonth();
        oControls.oDayControl.textContent = dDiff.getUTCDate() - 1;
        oControls.oHoursControl.textContent = dDiff.getUTCHours();
        oControls.oMinutesControl.textContent = dDiff.getUTCMinutes();
        oControls.oSecondsControl.textContent = dDiff.getUTCSeconds();
    }

    const dNewYear = fGetNewYearDate();
    const oControls = {
        oMonthControl: document.querySelector('.month .value'),
        oDayControl: document.querySelector('.day .value'),
        oHoursControl: document.querySelector('.hours .value'),
        oMinutesControl: document.querySelector('.minutes .value'),
        oSecondsControl: document.querySelector('.seconds .value'),
    }
    fPrintDateDiffFromNow(dNewYear, oControls);

    setInterval(fPrintDateDiffFromNow.bind(null, dNewYear, oControls), 1000);
})