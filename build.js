const fs = require('fs')

// Read layout template
const layout = fs.readFileSync('./src/layout.html', 'utf8')

// Page configurations
const pages = {
  'index.html': {
    url: '/',
    title: 'Jail Medical Services for Small County Jails | Aspen Corrections',
    description:
      'Aspen provides 24/7 telehealth medical care for jails under 120 beds. Reduce transports, cut liability, and stop asking officers to make medical decisions.',
    homeActive: 'active',
    telehealthActive: '',
    aboutActive: '',
    faqActive: '',
  },
  'telehealth.html': {
    url: '/telehealth',
    title: 'Why Telehealth - Aspen',
    description: 'Why telehealth is the best solution for small jails.',
    homeActive: '',
    telehealthActive: 'active',
    aboutActive: '',
    faqActive: '',
  },
  'about.html': {
    url: '/about',
    title: 'About Us - Aspen',
    description: 'About Aspen - Correctional Medical Care',
    homeActive: '',
    telehealthActive: '',
    aboutActive: 'active',
    faqActive: '',
  },
  'faq.html': {
    url: '/faq',
    title: 'FAQ - Aspen',
    description: 'Frequently asked questions about Aspen.',
    homeActive: '',
    telehealthActive: '',
    aboutActive: '',
    faqActive: 'active',
  },
  'book.html': {
    url: '/book',
    title: 'Book a Call - Aspen',
    description: 'Schedule a free 30-minute intro call with the Aspen team.',
    homeActive: '',
    telehealthActive: '',
    aboutActive: '',
    faqActive: '',
  },
  'booked.html': {
    url: '/booked',
    title: 'Booking Confirmed - Aspen',
    description: 'Your call has been scheduled. We look forward to meeting with you!',
    homeActive: '',
    telehealthActive: '',
    aboutActive: '',
    faqActive: '',
  },
}

// Create build directory
if (!fs.existsSync('./build')) fs.mkdirSync('./build')

// Copy all files from src to build
fs.readdirSync('./src').forEach(file => {
  const srcPath = `./src/${file}`
  const buildPath = `./build/${file}`
  
  // Skip layout.html
  if (file === 'layout.html') return
  
  // Process HTML files with layout
  if (file.endsWith('.html') && pages[file]) {
    const content = fs.readFileSync(srcPath, 'utf8')
    const config = pages[file]
    
    const html = layout
      .replace(/{title}/g, config.title)
      .replace(/{description}/g, config.description)
      .replace(/{url}/g, config.url)
      .replace('{content}', content)
      .replace(/{home-active}/g, config.homeActive)
      .replace(/{telehealth-active}/g, config.telehealthActive)
      .replace(/{about-active}/g, config.aboutActive)
      .replace(/{faq-active}/g, config.faqActive)
    
    fs.writeFileSync(buildPath, html)
    console.log(`✅ Built ${file}`)
  } else {
    // Copy all other files as-is
    fs.copyFileSync(srcPath, buildPath)
    console.log(`✅ Copied ${file}`)
  }
})

// Copy CNAME if it exists
if (fs.existsSync('./CNAME')) {
  fs.copyFileSync('./CNAME', './build/CNAME')
  console.log('✅ Copied CNAME')
}

// Copy assets directory if it exists
if (fs.existsSync('./assets')) {
  if (!fs.existsSync('./build/assets')) {
    fs.mkdirSync('./build/assets')
  }
  fs.readdirSync('./assets').forEach((file) => {
    fs.copyFileSync(`./assets/${file}`, `./build/assets/${file}`)
  })
  console.log('✅ Copied assets')
}

console.log('\n🎉 Build complete! Files are in ./build/')
