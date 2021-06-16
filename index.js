class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-z-' ]/gi, '');
  }

  static titleize(string) {
    let words = string.split(" ").map(word => {
      if (word != "a" && word != "an" && word != "the" && word != "but" && word != "of" && word != "and" && word != "for" && word != "at" && word != "by" && word != "from") {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      else {
        return word.toLowerCase();
      }
  })
  // const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  let sentence = words.join(" ");  
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
}

console.log(Formatter.capitalize("crocodile"));
console.log(Formatter.sanitize("Entert*ain(i{ng-Elephan^ts"));
console.log(Formatter.titleize("a tale of two cities"));