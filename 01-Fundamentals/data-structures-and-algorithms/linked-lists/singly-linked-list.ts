class Nod {
  value: number;
  next: Nod | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  private length: number;
  private head: Nod | null;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  print() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    let temp: Nod | null = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  append(value: number) {
    let node = new Nod(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.length++;
  }

  prepend(value: number) {
    let node = new Nod(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;
      node.next = temp;
      this.head = node;
    }
    this.length++;
  }

  delete(value: number) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let temp: Nod | null = this.head;
    while (temp !== null && temp.next !== null) {
      if (temp.next.value === value) {
        temp.next = temp.next.next;
        this.length--;
        return;
      }
      temp = temp.next;
    }
    console.log("Value wasn't present in the list");
  }

  getSize() {
    return this.length;
  }
}

let linkedList = new LinkedList();
linkedList.append(4);
linkedList.append(3);
linkedList.append(2);
linkedList.append(5);
linkedList.prepend(1);
linkedList.append(6);
linkedList.delete(6);

linkedList.print();
