(() => {
    const ALL_BTNS = document.querySelectorAll(".execute-btn");

    function clickHandler() {
        const fnName = this.getAttribute("data-id");

        const { pilotObj } = window;

        // --- "fnName" in pilotObj is also correct
        // --- But using conventional way
        if (pilotObj.hasOwnProperty(fnName)) {
            pilotObj[fnName](); // --- calling that function name ;)
            emptylines();
        }
    }

    function emptylines() {
        console.log("\n\n");
    }

    ALL_BTNS.forEach((_btn) => {
        _btn.addEventListener("click", clickHandler);
    });
})();
