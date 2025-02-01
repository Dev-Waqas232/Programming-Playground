var Nod = /** @class */ (function () {
    function Nod(value) {
        this.value = value;
        this.next = null;
    }
    return Nod;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    LinkedList.prototype.print = function () {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        var temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    };
    LinkedList.prototype.append = function (value) {
        var node = new Nod(value);
        if (this.head === null) {
            this.head = node;
        }
        else {
            var temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.length++;
    };
    LinkedList.prototype.prepend = function (value) {
        var node = new Nod(value);
        if (this.head === null) {
            this.head = node;
        }
        else {
            var temp = this.head;
            node.next = temp;
            this.head = node;
        }
        this.length++;
    };
    LinkedList.prototype.delete = function (value) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        var temp = this.head;
        while (temp !== null && temp.next !== null) {
            if (temp.next.value === value) {
                temp.next = temp.next.next;
                this.length--;
                return;
            }
            temp = temp.next;
        }
        console.log("Value wasn't present in the list");
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.append(4);
linkedList.append(3);
linkedList.append(2);
linkedList.append(5);
linkedList.prepend(1);
linkedList.append(6);
linkedList.delete(6);
linkedList.print();
