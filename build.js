const fs = require('fs')
const path = require('path')

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

// Create build directory if it doesn't exist
if (!fs.existsSync('./build')) {
  fs.mkdirSync('./build')
}

// Build each page
Object.entries(pages).forEach(([filename, config]) => {
  const srcPath = `./src/${filename}`

  if (fs.existsSync(srcPath)) {
    // Read page content
    const content = fs.readFileSync(srcPath, 'utf8')

    // Replace placeholders in layout
    let html = layout
      .replace('{title}', config.title)
      .replace('{description}', config.description)
      .replace('{content}', content)
      .replace(/{home-active}/g, config.homeActive)
      .replace(/{telehealth-active}/g, config.telehealthActive)
      .replace(/{about-active}/g, config.aboutActive)
      .replace(/{faq-active}/g, config.faqActive)

    // Write to build
    fs.writeFileSync(`./build/${filename}`, html)
    console.log(`✅ Built ${filename}`)
  } else {
    console.log(`⚠️  Source file ${srcPath} not found`)
  }
})

// Copy CSS and assets
if (fs.existsSync('./src/styles.css')) {
  fs.copyFileSync('./src/styles.css', './build/styles.css')
  console.log('✅ Copied styles.css')
}

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
