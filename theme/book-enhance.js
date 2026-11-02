// Renders ```mermaid blocks (theme-aware) and adds a "min read" badge under each page title.
(function () {
  "use strict";

  var DARK = ["coal", "navy", "ayu"];

  function isDark() {
    var cl = document.documentElement.classList;
    return DARK.some(function (t) { return cl.contains(t); });
  }

  function collectDiagrams() {
    document.querySelectorAll("pre > code.language-mermaid").forEach(function (code) {
      var holder = document.createElement("div");
      holder.className = "mermaid-wrap";
      var pre = document.createElement("pre");
      pre.className = "mermaid";
      pre.setAttribute("data-source", code.textContent);
      pre.textContent = code.textContent;
      holder.appendChild(pre);
      code.parentElement.replaceWith(holder);
    });
  }

  function renderDiagrams() {
    if (typeof mermaid === "undefined") return;
    var dark = isDark();
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: dark ? "dark" : "default",
      fontFamily: "inherit",
      flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
      sequence: { useMaxWidth: true, mirrorActors: false }
    });
    var nodes = document.querySelectorAll("pre.mermaid");
    nodes.forEach(function (n) {
      n.removeAttribute("data-processed");
      n.textContent = n.getAttribute("data-source");
    });
    if (nodes.length) mermaid.run({ nodes: Array.prototype.slice.call(nodes) });
  }

  function addReadingTime() {
    var content = document.querySelector("#mdbook-content main, main");
    var h1 = content && content.querySelector("h1");
    if (!h1 || content.querySelector(".reading-time")) return;
    var clone = content.cloneNode(true);
    clone.querySelectorAll("pre, .mermaid-wrap, .buttons").forEach(function (n) { n.remove(); });
    var words = (clone.textContent || "").trim().split(/\s+/).length;
    if (words < 150) return;
    var mins = Math.max(1, Math.round(words / 200));
    var badge = document.createElement("p");
    badge.className = "reading-time";
    badge.textContent = "⏱ " + mins + " min read";
    h1.insertAdjacentElement("afterend", badge);
  }

  function watchTheme() {
    var last = isDark();
    new MutationObserver(function () {
      var now = isDark();
      if (now !== last) { last = now; renderDiagrams(); }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  }

  function start() {
    collectDiagrams();
    renderDiagrams();
    addReadingTime();
    watchTheme();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
