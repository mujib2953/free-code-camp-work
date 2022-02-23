(() => {
    window.pilotObj = window.pilotObj || {};

    window.pilotObj.one = () => {
        let myName = "@atif Aslam";
        console.log("Original Name :: ", myName);

        console.log("Changing first letter from @ to A");
        myName[0] = "A";

        console.log("After changing :: ", myName);
        console.log(
            "But sadly, our string didn't changed :( which prove strings are immutable."
        );

        console.log("Let's update it by over writing its value ;) h@ck");
        myName = "Aatif Aslam";
        console.log("After over writing value :: ", myName);

        console.log("We can observe value is updated :)");
    };
})();
