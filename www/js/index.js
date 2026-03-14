document.addEventListener("backbutton", function (e) {

    if (navigator.app && navigator.app.exitApp) {

        navigator.app.exitApp();

    }

});
