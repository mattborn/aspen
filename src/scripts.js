/* == Event & Session Tracking == */

//clarity.microsoft.com
;(function (c, l, a, r, i, t, y) {
  c[a] =
    c[a] ||
    function () {
      ;(c[a].q = c[a].q || []).push(arguments)
    }
  t = l.createElement(r)
  t.async = 1
  t.src = 'https://www.clarity.ms/tag/' + i
  y = l.getElementsByTagName(r)[0]
  y.parentNode.insertBefore(t, y)
})(window, document, 'clarity', 'script', 't5275yfblv')

//plausible.io
window.plausible =
  window.plausible ||
  function () {
    ;(window.plausible.q = window.plausible.q || []).push(arguments)
  }

/* == Deanonymizers == */

//support.rb2b.com/en/collections/7815667-script-installation
!(function (key) {
  if (window.reb2b) return
  window.reb2b = { loaded: true }
  var s = document.createElement('script')
  s.async = true
  s.src = 'https://ddwl4m2hdecbv.cloudfront.net/b/' + key + '/' + key + '.js.gz'
  document
    .getElementsByTagName('script')[0]
    .parentNode.insertBefore(s, document.getElementsByTagName('script')[0])
})('7N850HQE1LN1')

//vector.co
!(function (e, r) {
  try {
    if (e.vector)
      return void console.log('Vector snippet included more than once.')
    var t = {}
    t.q = t.q || []
    for (
      var o = ['load', 'identify', 'on'],
        n = function (e) {
          return function () {
            var r = Array.prototype.slice.call(arguments)
            t.q.push([e, r])
          }
        },
        c = 0;
      c < o.length;
      c++
    ) {
      var a = o[c]
      t[a] = n(a)
    }
    if (((e.vector = t), !t.loaded)) {
      var i = r.createElement('script')
      ;(i.type = 'text/javascript'),
        (i.async = !0),
        (i.src = 'https://cdn.vector.co/pixel.js')
      var l = r.getElementsByTagName('script')[0]
      l.parentNode.insertBefore(i, l), (t.loaded = !0)
    }
  } catch (e) {
    console.error('Error loading Vector:', e)
  }
})(window, document)
vector.load('7df217d1-de49-4aa0-b77b-06795247c6b4')

ScrollReveal().reveal('.timeline-item', {
  cleanup: true,
  distance: '20%',
  interval: 100,
  origin: 'bottom',
  // viewFactor: 0.5,
  viewOffset: { bottom: 300 },
})
