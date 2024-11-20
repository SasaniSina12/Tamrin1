const codes = {
    98: "IRI",
    44: "UK",
    1: "US",
    90: "TR"
}

console.table("98" in codes)

for (const savedCodes in codes) {
    console.table("+" + savedCodes, " : ", codes[savedCodes])
}