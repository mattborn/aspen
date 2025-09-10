const fs = require('fs')
const { spawn } = require('child_process')

// Directories to watch
const watchDirs = ['./src', './assets']

// Debounce timer
let buildTimeout = null

// Run build
function runBuild() {
  console.log('\n🔨 Building...')
  const build = spawn('node', ['build.js'], { stdio: 'inherit' })
  build.on('close', code => {
    if (code === 0) {
      console.log('✨ Watching for changes...')
    }
  })
}

// Handle file changes
function handleChange(event, filename) {
  if (filename) {
    console.log(`📝 ${event}: ${filename}`)

    // Debounce rapid changes
    clearTimeout(buildTimeout)
    buildTimeout = setTimeout(runBuild, 100)
  }
}

// Watch directories
watchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.watch(dir, { recursive: true }, handleChange)
    console.log(`👀 Watching ${dir}`)
  }
})

// Initial build
runBuild()
