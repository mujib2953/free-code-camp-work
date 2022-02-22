(() => {
    console.log("Loaded");
    const RADIO_OPTIONS = ["Definitely", "Maybe", "Not sure"];
    const CHECKBOX_OPTIONS = [
        "Front-end Projects",
        "Back-end Projects",
        "Data Visualization",
        "Challenges",
        "Open Source Community",
        "Gitter help rooms",
        "Videos",
        "City Meetups",
        "Wiki",
        "Forum",
        "Additional Courses",
    ];
    const RADIO_OPTIONS_DIV = document.querySelector(".radio-options");
    const CHECKBOX_OPTIONS_DIV = document.querySelector(".checkbox-options");

    function addRadios() {
        RADIO_OPTIONS.forEach((elm, index) => {
            const LABEL_ELEMENT = document.createElement("label");
            const INPUT_ELEMENT = document.createElement("input");
            const TEXT_ELEMENT = document.createTextNode(elm);

            INPUT_ELEMENT.setAttribute("type", "radio");
            INPUT_ELEMENT.setAttribute("name", "user_recommend");
            INPUT_ELEMENT.setAttribute(
                "value",
                elm.toLowerCase().split(" ").join("_")
            );
            INPUT_ELEMENT.classList.add("input-radio");

            if (index === 0) INPUT_ELEMENT.setAttribute("checked", true);

            LABEL_ELEMENT.appendChild(INPUT_ELEMENT);
            LABEL_ELEMENT.appendChild(TEXT_ELEMENT);

            RADIO_OPTIONS_DIV.appendChild(LABEL_ELEMENT);
        });
    }

    function addCheckboxes() {
        CHECKBOX_OPTIONS.forEach((elm, index) => {
            const LABEL_ELEMENT = document.createElement("label");
            const INPUT_ELEMENT = document.createElement("input");
            const TEXT_ELEMENT = document.createTextNode(elm);

            INPUT_ELEMENT.setAttribute("type", "checkbox");
            INPUT_ELEMENT.setAttribute("name", "prefer");
            INPUT_ELEMENT.setAttribute(
                "value",
                elm.toLowerCase().split(" ").join("_")
            );
            INPUT_ELEMENT.classList.add("input-checkbox");

            LABEL_ELEMENT.appendChild(INPUT_ELEMENT);
            LABEL_ELEMENT.appendChild(TEXT_ELEMENT);

            CHECKBOX_OPTIONS_DIV.appendChild(LABEL_ELEMENT);
        });
    }

    addCheckboxes();
    addRadios();
})();
