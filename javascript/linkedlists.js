<script>
    class LinkNode {
        constructor(subject, amount) {
            this.forwardNode = null;
            this.subject = subject;
            this.amount = amount;
        }
        
        show = () => {
            return `Subject: ${this.subject} Amount: ${this.amount}`
        }
    }
    
    class LinkedList {
        constructor(listHead) {
            this.head = this.listHead;
//            this.state = {
//                current: this.head,
//                previous: null
//            }
        }
        
        addNode = (subject, amount) => {
            let newNode = new LinkNode(subject, amount)
            
            console.log(newNode);
            
            if (this.head = null) {
                return this.listHead = newNode;
            }
        }
    }
    
    const nodeList = new LinkedList;

nodelist.addNode('Math', 25);

</script>