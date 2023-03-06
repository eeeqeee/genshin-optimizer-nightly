const t = Math.random() * 10 * 1000
const wait = (t) => new Promise(res => setTimeout(res, t))

async function main() {
    console.debug(t)
    await wait(t)
}
main()
