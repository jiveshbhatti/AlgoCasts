// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

  //!using a linked list
// class Stack{
//     constructor(){
//         this.top = null;
//         this.bottom = null
//         this.length = 0
//     }

//     peek(){
//         return this.top
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(this.length === 0){
//             this.top = newNode
//             this.bottom = newNode
//         }else{
//             const holdingPointer = this.top
//             this.top = newNode
//             this.top.next = holdingPointer
//         }
//         this.length++
//         return this
//     }
//     pop(){
//         if(!this.top){
//             return null
//         }
//         if(this.top === this.bottom){
//             this.bottom = null
//         }

//         // const holdingPointer = this.top
//         this.top = this.top.next
//         this.length--
//         return this

//     }
// }

class Stack{
    constructor(){
     this.array = []
    }

    push(value){
       this.array.push(value)
       return this
    }
    pop(){
     this.array.shift()    
     return this
}

    peek(){
        console.log(this.array[this.array.length-1])
        return this.array[this.array.length-1]
    }
}

const myStack = new Stack()
myStack.push('udemy')
// myStack.pop()
myStack.peek()

console.log(myStack)