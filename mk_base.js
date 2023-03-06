const fs = require('node:fs')

const remoteAndBranch = process.argv[2] // eeeqeee/tc-opt
const commit = process.argv[3]
const isInner = false

{
    const title = `Nightly build of ${remoteAndBranch}`
    const canonical = isInner ? `../` : `/genshin-optimizer-nightly/${remoteAndBranch}/${commit}`
    const relLink = isInner ? `\n    <link rel="canonical" href="${canonical}">` : ''
    const redirectTime = isInner ? '1' : '0'
    const html = fs.readFileSync('base.html')
    const str = eval('`' + html + '`')
    console.log(str)
    // fs.writeFileSync(isInner ? 'inner.index.html' : 'index.html', str)
}
