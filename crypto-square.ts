export class Crypto {
  plaintext: string
  constructor(plainText: string) {
    this.plaintext = plainText;
  }

  
  get ciphertext(): string {
    // Remove spaces, punctuation, and set to lower case
    let cipherText = this.plaintext.toLowerCase().replace(/[.,/#!$%@^&*;:{}=\-_`~()]/g,"").split(" ").join("")

    if (!cipherText) {
      return ""
    }
    let cipherSquareSize = Math.ceil(Math.sqrt(cipherText.length))
    let cipherRows = cipherText.match(new RegExp(`.{1,${cipherSquareSize}}`, 'g'))?.map(row => row.padEnd(cipherSquareSize)) ?? []
    let cipherColumns = [...new Array(cipherSquareSize).keys()].map((i) => cipherRows.map((row) => row[i]).join(''))

    return cipherColumns.join(" ");
  }
}
