function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

document.addEventListener("DOMContentLoaded", () => {
    const cbElem = document.getElementById("cookie-banner");

    function cbHide() {
        cbElem.style.opacity = "0";
        setTimeout(() => {
            cbElem.style.display = "none";
        }, 200);
    }

    if (!getCookie("cookie_consent")) {
        cbElem.style.display = "block";
        setTimeout(() => {
            cbElem.style.opacity = "1";
        }, 100);
    }

    document.getElementById("cookie-accept-required").addEventListener("click", () => {
        setCookie("cookie_consent", "required", 365);
        cbHide();
    });

    document.getElementById("cookie-accept-all").addEventListener("click", () => {
        setCookie("cookie_consent", "all", 365);
        cbHide();

        // Optionally: Load Matomo immediately on accept
        if (matomoEnabled) {
            if (typeof loadMatomo === "function") {
                loadMatomo();
            }
        }
    });
});
