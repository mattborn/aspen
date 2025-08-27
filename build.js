const fs = require('fs')

// Read layout template
const layout = fs.readFileSync('./src/layout.html', 'utf8')

// Page configurations
const pages = {
  'index.html': {
    title: 'Aspen - Inmate Medical Care',
    description: 'Inmate Healthcare Specifically Designed for Small Jails.',
    homeActive: 'active',
    telehealthActive: '',
    aboutActive: '',
    faqActive: '',
  },
  'telehealth.html': {
    title: 'Why Telehealth - Aspen',
    description: 'Why telehealth is the best solution for small jails.',
    homeActive: '',
    telehealthActive: 'active',
    aboutActive: '',
    faqActive: '',
  },
  'about.html': {
    title: 'About Us - Aspen',
    description: 'About Aspen - Correctional Medical Care',
    homeActive: '',
    telehealthActive: '',
    aboutActive: 'active',
    faqActive: '',
  },
  'faq.html': {
    title: 'FAQ - Aspen',
    description: 'Frequently asked questions about Aspen.',
    homeActive: '',
    telehealthActive: '',
    aboutActive: '',
    faqActive: 'active',
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
      .replace('{title}', config.title)
      .replace('{description}', config.description)
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
