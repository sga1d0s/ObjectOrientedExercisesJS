/////////// EXERCISE 1 ///////////

"https://docs.google.com/document/d/1Mxt5M6GjlEIWzs81cgeSoVvwt_yU1FrXDcF3eF52F3I/edit?tab=t.0"

/////////// EXERCISE 1 ///////////
import readline from 'node:readline';

main()

function main() {
  dataPrompt()
}

function dataPrompt() {
  const question = "Insert your character name: ";
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(question, (name) => {
    console.log(`Your character name is: ${name}`)
    rl.close()
  })
}