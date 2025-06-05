export class NodeT<T>{
    protected value:T;
    protected children:NodeT<T>[]=[];
    constructor(value?:T){
        this.value = value;
    }
    addChild(child:NodeT<T>):void{
        this.children.push(child)
    }

    getChildren():NodeT<T>[]{
        return this.children;
    }
}

const rootNode = new NodeT("A")
const nodeB = new NodeT("B")
const nodeC = new NodeT("C")

rootNode.addChild(nodeB)
rootNode.addChild(nodeC)


console.log(rootNode.getChildren())
console.log(nodeB.getChildren())
