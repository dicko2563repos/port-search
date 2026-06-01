/* Port Search — vanilla JS, no build step (same stack as PTS). */
(function () {
  "use strict";

  var PORTS = Array.isArray(window.PORTS) ? window.PORTS : [];

  var searchInput = document.getElementById("searchInput");
  var resultsList = document.getElementById("resultsList");
  var resultsMeta = document.getElementById("resultsMeta");
  var portCountPill = document.getElementById("portCountPill");

  var MAX_RESULTS = 100;

  portCountPill.textContent = PORTS.length + " locations";

  // ---------- Search ----------
  function getTokens(query) {
    return query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  }

  function matchesPort(port, tokens) {
    if (!tokens.length) return true;
    var haystack = (
      port.code + " " +
      (port.iata || "") + " " +
      port.name + " " +
      (port.city || "") + " " +
      port.country + " " +
      port.region
    ).toLowerCase();
    return tokens.every(function (t) { return haystack.indexOf(t) !== -1; });
  }

  function filterPorts() {
    var tokens = getTokens(searchInput.value);
    return PORTS.filter(function (p) {
      return matchesPort(p, tokens);
    });
  }

  // ---------- Highlight matched text ----------
  function highlight(text, tokens) {
    if (!tokens.length) return escapeHtml(text);
    // Build a single regex of all tokens (escaped), case-insensitive.
    var pattern = tokens
      .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
      .join("|");
    var re = new RegExp("(" + pattern + ")", "gi");
    return escapeHtml(text).replace(re, "<mark>$1</mark>");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ---------- Render ----------
  function render() {
    var tokens = getTokens(searchInput.value);
    var matches = filterPorts();

    if (!matches.length) {
      resultsMeta.textContent = "";
      resultsList.innerHTML =
        '<p class="results-empty">No ports match your search.</p>';
      return;
    }

    var shown = matches.slice(0, MAX_RESULTS);
    resultsMeta.textContent =
      matches.length > MAX_RESULTS
        ? "Showing " + MAX_RESULTS + " of " + matches.length + " matches"
        : matches.length + (matches.length === 1 ? " match" : " matches");

    var html = shown
      .map(function (p) {
        // Prioritise IATA as the primary code; fall back to ICAO/UN-LOCODE.
        var primaryCode = p.iata || p.code || "";
        var codeHtml = highlight(primaryCode, tokens);
        // Show the other code (ICAO/UN-LOCODE) as a secondary line when distinct.
        if (p.code && p.code !== primaryCode) {
          codeHtml += '<span class="port-code-alt">' + highlight(p.code, tokens) + "</span>";
        }

        var subParts = [];
        if (p.city) subParts.push(highlight(p.city, tokens));
        subParts.push(highlight(p.country, tokens));
        subParts.push(escapeHtml(p.region));
        var subHtml = subParts.join(" &middot; ");

        return (
          '<div class="port-card">' +
            '<span class="port-code">' + codeHtml + "</span>" +
            '<div class="port-info">' +
              '<div class="port-name">' + highlight(p.name, tokens) + "</div>" +
              '<div class="port-sub">' + subHtml + "</div>" +
            "</div>" +
            '<span class="port-type-tag">' + escapeHtml(p.type) + "</span>" +
          "</div>"
        );
      })
      .join("");

    resultsList.innerHTML = html;
  }

  // ---------- Init ----------
  searchInput.addEventListener("input", render);
  render();
})();
