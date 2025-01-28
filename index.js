class Formatter {
  //add static methods here
  static capitalize(str) {
    if (str.length === 0) {
      return str
    } else {
      return str[0].toUpperCase() + str.slice(1)
    }
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-'\s]/g, '')
  }

  static titleize(str) {
    const splitStr = str.split(' ')
    const strLength = splitStr.length
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    for (let i = 0; i < strLength; i++) {
      if (i === 0 || !smallWords.includes(splitStr[i])) {
        splitStr[i] = this.capitalize(splitStr[i]);
      }

    }
    return splitStr.join(' ');
  }
}

console.log(Formatter.capitalize('my name is buddy!'))
console.log(Formatter.sanitize('my name is buddy!'))
console.log(Formatter.titleize('my name is buddy!'))


