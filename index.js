// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for (let i = 0; i < 4; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return beatles;
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var array = []
  let i = 0;

  while (i < 4){
    array.push`${facts[i]}` + "!!!";
    i++;
  }
  return array
}
