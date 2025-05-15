/////////// EXERCISE 2 ///////////

"https://docs.google.com/document/d/1Mxt5M6GjlEIWzs81cgeSoVvwt_yU1FrXDcF3eF52F3I/edit?tab=t.0"

/////////// EXERCISE 2 ///////////
import readline from 'node:readline';
import Character from './Character.mjs';

main()

function main() {
  dataPrompt()
}

async function dataPrompt() {

  let name, type, life

  const questionName = "Insert character name: "
  const questionClass = "Insert character class (Fighter, Cleric, Thief, Mage): "
  const questionLife = "Insert character life points (30-50): "

  name = await question(questionName)
  type = await question(questionClass)
  life = await question(questionLife)

  const character = new Character(name, type, life)
  character.printData()
}

async function question(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) =>{
    rl.question(question, (answer) =>{
      rl.close()
      resolve(answer)
    })
  })
}