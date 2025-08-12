// Matomo
window.loadMatomo = function () {
    const _paq = (window._paq = window._paq || []);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);

    const u = matomoURL;
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', matomoSiteID]);
    const d = document;
    const g = d.createElement('script');
    const s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
};

if (matomoEnabled) {
    // Load only if cookie already accepted
    if (document.cookie.includes("cookie_consent=all")) {
        loadMatomo();
    }
}
// End Matomo