const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {

    let res = '';
    let h = head.data;
    let temp = head;
    if (temp.next == null)
        return head;

    while (temp.next != null) {
        temp = temp.next;
    }

    let last = temp.data;

    for (let i = h; i <= last; i++) {
        res += i + " ";
    }

    temp.data = res;
    return temp

};