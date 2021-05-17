export async function getRandomInstrument(url = "http://localhost:3001/random", data = {}) {
    let stringPromise = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
    }).then(value => value.text());
    console.log(`text = ${stringPromise}`)
    return stringPromise;
}


export function capitalize(string) {
    return string.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}
