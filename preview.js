const { execSync } = require('child_process')
const run = cmd => execSync(cmd, { cwd: __dirname, stdio: 'inherit' })

const clone = `${require('os').tmpdir()}/aspen-preview`
const message = process.argv[2] || 'Update staging preview'

run('node build.js')
try {
  run(`git -C ${clone} pull --quiet`)
} catch {
  run(`git clone git@github.com:moonadesign/aspen-preview.git ${clone}`)
}
run(`rsync -a --delete --exclude .git --exclude .nojekyll --exclude CHANGELOG.md --exclude CNAME build/ ${clone}/`)
run(`cp CHANGELOG.md ${clone}/`)
run(`perl -i -pe 's/href="\\/([^"]*)"/href=".\\/$1"/g' ${clone}/*.html`)
run(`git -C ${clone} add -A`)
try {
  run(`git -C ${clone} commit -m ${JSON.stringify(message)}`)
} catch {
  console.log('Nothing to commit')
}
run(`git -C ${clone} push`)
console.log('\n🚀 Preview deployed: https://moona.design/aspen-preview')
