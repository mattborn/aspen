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

//postalytics.com
var a
var rc = new RegExp('_bn_d=([^;]+)')
var rq = new RegExp('_bn_d=([^&#]*)', 'i')
var aq = rq.exec(window.location.href)
if (aq != null) a = aq
else var ac = rc.exec(document.cookie)
if (ac != null) a = ac
if (a != null) {
  var _bn_d = a[1]
  ;(function () {
    var pl = document.createElement('script')
    pl.type = 'text/javascript'
    pl.async = true
    pl.src =
      ('https:' == document.location.protocol ? 'https://app' : 'http://app') +
      '.postaladmin.com/plDataEmbed.js'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(pl, s)
  })()
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

const revealConfig = {
  cleanup: true,
  distance: '20%',
  interval: 50,
  origin: 'bottom',
}

ScrollReveal().reveal(
  '.header-branding, nav a, .button, h1, h2, p, .benefit, .card, .quote-card, .problem, .burden, .feature',
  revealConfig,
)

ScrollReveal().reveal('.timeline-item', {
  ...revealConfig,
  // viewFactor: 0.5,
  viewOffset: { bottom: 300 },
})

/* == Ad Attribution (ref/Aspen-Conversion-Tracking-Implementation-Spec.pdf) == */

const AD_PARAMS = ['fbclid', 'gclid', 'utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term']
const landingParams = new URLSearchParams(location.search)
AD_PARAMS.forEach(p => landingParams.get(p) && sessionStorage.setItem(p, landingParams.get(p)))

const adParam = p => landingParams.get(p) || sessionStorage.getItem(p) || ''
const cookie = n => (document.cookie.match('(^|;)\\s*' + n + '\\s*=\\s*([^;]+)') || [])[2] || ''

const buildCalendlyUrl = baseUrl => {
  const fbc = cookie('_fbc') || (adParam('fbclid') && 'fb.1.' + Date.now() + '.' + adParam('fbclid'))
  const u = new URL(baseUrl)
  if (fbc) u.searchParams.set('utm_content', fbc) // carries fbc
  if (cookie('_fbp')) u.searchParams.set('salesforce_uuid', cookie('_fbp')) // carries fbp
  if (adParam('gclid')) u.searchParams.set('utm_term', adParam('gclid')) // carries gclid
  if (adParam('utm_source') || fbc) u.searchParams.set('utm_source', adParam('utm_source') || 'meta')
  if (adParam('utm_medium') || fbc) u.searchParams.set('utm_medium', adParam('utm_medium') || 'paid_social')
  if (adParam('utm_campaign')) u.searchParams.set('utm_campaign', adParam('utm_campaign'))
  return u.toString()
}

/* == Booking Page == */

const booking = document.getElementById('booking')

if (booking) {
  Calendly.initInlineWidget({
    parentElement: booking,
    resize: true,
    url: buildCalendlyUrl(
      'https://calendly.com/joey-ivycm/intro-to-aspen-inmate-medical-care-for-small-jails?hide_gdpr_banner=1&primary_color=cea358&text_color=3f5349',
    ),
  })
  fbq('track', 'InitiateCheckout', { content_name: 'Booking page' })
  gtag_report_conversion()
  addEventListener('message', e => {
    if (e.origin !== 'https://calendly.com') return
    if (e.data?.event === 'calendly.page_height') booking.style.height = e.data.payload.height
    if (e.data?.event === 'calendly.date_and_time_selected')
      fbq('track', 'AddToCart', { content_name: 'Booking started' })
  })
}

/* == Booking Confirmed == */

if (document.getElementById('booked')) {
  const invitee = landingParams.get('invitee_uuid')
  fbq(
    'track',
    'Schedule',
    { content_name: landingParams.get('event_type_name') || 'Booking confirmed' },
    invitee ? { eventID: invitee } : undefined,
  )
}

/* == Pillar Dropdowns == */

if (matchMedia('(hover: hover)').matches)
  document.querySelectorAll('.pillar details').forEach(d => {
    d.addEventListener('mouseenter', () => (d.open = true))
    d.addEventListener('mouseleave', () => (d.open = false))
  })

/* == Testimonial Carousel == */

const testimonials = document.querySelector('.testimonials')

if (testimonials) {
  const scrollTestimonials = dir => {
    const card = testimonials.querySelector('.testimonial')
    const gap = parseFloat(getComputedStyle(testimonials).gap)
    testimonials.scrollBy({ behavior: 'smooth', left: dir * (card.offsetWidth + gap) })
  }
  document.getElementById('testimonials-prev').addEventListener('click', () => scrollTestimonials(-1))
  document.getElementById('testimonials-next').addEventListener('click', () => scrollTestimonials(1))
}

/* == Video Player == */

const video = document.querySelector('#video video')
const playButton = document.querySelector('#video .play-button')

if (video && playButton) {
  playButton.addEventListener('click', () => {
    playButton.style.display = 'none'
    video.controls = true
    video.muted = false
  })
}
