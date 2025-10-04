
export function initClarity() {
  if (process.env.NODE_ENV !== "production") return;

  // Avoid loading multiple times
  if (window.clarity) return;

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "tkkynfq7fh");
}

export function stopClarity() {
  if (window.clarity) {
    window.clarity = function () { };
  }
}