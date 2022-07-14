export class Crypto {
  plaintext: string
  constructor(plainText: string) {
    this.plaintext = plainText;
  }

  
  get ciphertext(): string {
    // Remove spaces, punctuation, and set to lower case
    let cipherText = this.plaintext.toLowerCase().replace(/[.,/#!$%@^&*;:{}=\-_`~()]/g,"").split(" ").join("");
    console.log(cipherText)

    const cipherSquare: string[] = [];
    let cipherSquareSize = Math.ceil(Math.sqrt(cipherText.length));

    let iterations = Number.isInteger(Math.sqrt(cipherText.length)) ? cipherSquareSize : cipherSquareSize - 1
    for (let i = 0; i < iterations; i++) {
      let splitWord = cipherText.slice(i * cipherSquareSize, (i * cipherSquareSize) + cipherSquareSize)
      console.log(splitWord.length, cipherSquareSize)
      if (splitWord.length < cipherSquareSize) {
        console.log(cipherSquareSize - splitWord.length)
        for (let j = 0; j <= cipherSquareSize - splitWord.length; j++) {
          console.log(j)
          splitWord += " "
        }
      }
      cipherSquare.push(splitWord);
    }
    console.log(cipherSquare)

    let encodedString = ""
    for (let i = 0; i <= cipherSquare.length; i++) {
      for (let j = 0; j < cipherSquare.length; j++) {
        encodedString += cipherSquare[j][i]
      }
    }
    console.log(encodedString)
    // for (let i = 0; i < cipherSquare.length - 1; i++) {
    //   cipherSquare[i] = cipherSquare.map((word) => {
    //     return word[i]
    //   }).join("")
    // }
    // console.log(cipherSquare.join(""))


    return cipherSquare.join(" ");
  }
}
