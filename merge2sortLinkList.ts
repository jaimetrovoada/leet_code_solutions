// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let head: ListNode | null = dummy;

  while (list1 !== null && list2 !== null) {
    console.log({ head, list1, list2 });

    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }

  if (list1) {
    head.next = list1;
  } else if (list2) {
    head.next = list2;
  }
  return dummy.next;
}

const node: ListNode = { val: 1, next: { val: 2, next: null } };
const node2: ListNode = { val: 3, next: { val: 4, next: null } };

console.log(mergeTwoLists(node, node2));
