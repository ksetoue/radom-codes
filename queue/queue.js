class Stack {
    constructor () {
        this.items = [];
        this.size = this.updateSize();
    }

    updateSize () {
        if (!this.items.length) {
            this.size = 0;
            return;
        }

        this.size = this.items.length
    }

    addItem (newItem) {
        this.items.push(newItem);
        this.updateSize();
    }

    removeItem () { 
        if (!this.size) {
            return null;
        }

        let removed = this.items.pop();
        this.updateSize(); 
        return removed;
    }
}

let stackA = new Stack();
let stackB = new Stack();


function orderPointer (stackX, stackY) {
    for (let i = stackX.size - 1; i >= 0; i--) {
        stackY.addItem(stackX.removeItem());
    }
}


function queueManagerInsert (item) {
    if (!stackA.size && stackB.size > 0) {
        orderPointer(stackB, stackA);
    }
    
    stackA.addItem(item);
}

function queueManagerRemove () {
    if (!stackB.size && stackA.size > 0) {
        orderPointer(stackA, stackB); 
    }

    return stackB.removeItem();
}


function tests () {
    // test cases: 
    // read empty queue
    console.log(' -----  TEST CASES  --------  \n');
    console.log('1. read empty queue:\n', queueManagerRemove(stackA, stackB), '\n'); 
    
    // insert sequentially
    console.log('  ----- insert 10 items then remove  -----  \n');
    for(let a = 0; a < 10; a++) {
        queueManagerInsert(a);
    }
    
    console.log('stackA - after insertion', stackA, '\n');
    console.log('stackB - after insertion', stackB, '\n');
    console.log('  ----- remove 1 item  -----  \n');
    console.log('0 to 10', queueManagerRemove()); 
    
    stackA = new Stack();
    stackB = new Stack();
    
    // insert sequentially
    console.log('  ----- insert 10 items then remove  -----  \n');
    for(let a = 0; a < 10; a++) {
        queueManagerInsert(a);
    }
    
    console.log('stackA - after insertion', stackA, '\n');
    console.log('stackB - after insertion', stackB, '\n');
    console.log('  ----- remove 4 items  -----  \n');
    for (let k = 0; k < 4; k++) {
        console.log(`item ${k} removed:`, queueManagerRemove()); 
    }
    
    // insert 2 items and remove 1 (2 times)
    stackA = new Stack();
    stackB = new Stack();
    
    // insert sequentially
    console.log('  ----- insert 2 items then remove  -----  \n');
    for(let a = 0; a < 2; a++) {
        queueManagerInsert(a);
    }
    
    console.log('stackA - after insertion', stackA, '\n');
    console.log('stackB - after insertion', stackB, '\n');
    console.log('  ----- remove 1 items  -----  \n');
    console.log('1 item removed: ', queueManagerRemove(), '\n');
    
    console.log('---- queue after remove - stackA ----', stackA, '\n');
    console.log('---- queue after remove - stackB ----', stackB, '\n');
    
    console.log('  ----- insert 3 items then remove  -----  \n');
    for(let a = 4; a < 7; a++) {
        queueManagerInsert(a);
    }
    
    console.log('stackA - after insertion', stackA, '\n');
    
    for (let k = 0; k < 2; k++) {
        console.log(`item ${k} removed:`, queueManagerRemove()); 
    }

}

tests();