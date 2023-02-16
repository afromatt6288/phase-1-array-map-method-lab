const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((sentance) =>{
    const word = sentance.split(" ")
    const capWords = word.map((word) =>  
      word[0].toUpperCase() + word.substring(1) 
    )
    const newSentance = capWords.join(" ");
    console.log(newSentance)
    return newSentance
  })
}
titleCased()
