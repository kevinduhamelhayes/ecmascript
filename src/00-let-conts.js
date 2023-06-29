// Declaración de variables
var nameVar 
let nameLet

// Asignación de variables
nameVar= "soy var"
nameLet = "soy let"

var nameVar = "soy var"
let nameLet1 = "soy let"
const nameConst = "soy const"

// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet2 = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.

const nameConst2 = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.