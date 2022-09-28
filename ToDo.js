function toDoFunction() {

let input = prompt('What is your command?');
const toDos = ['Collect eggs', 'Clean Shoes'];

while(input !== 'quit' && input !== 'q'){
    if (input === 'list'){
        console.log('*****************');
        for( let i = 0; i < toDos.length; i++){
            console.log(`${i}: ${toDos[i]}`);
        }
        console.log('*****************');
    } else if (input === 'new') {
        const newTodo = prompt('What would you like to do?');
        toDos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        const index = prompt('What is the index of the element you wish to delet?');
        const deleted = toDos.splice(index, 1);
        console.log(`You deleted this: "${deleted[0]}"`);
    }

    input = prompt('What is your command?');
}
console.log('Ok. You quit the app.');

}