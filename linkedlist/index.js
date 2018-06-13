// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let node = this.head;
		let count = 0;
		while (node) {
			++count;
			node = node.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) return null;
		let node = this.head;
		while (node.next) {
			node = node.next;
		}
		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) return null;
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) return null;
		let node = this.head;
		while (node.next) {
			if (!node.next.next) {
				node.next = null;
				return;
			}
			node = node.next;
		}

		this.head = null;
	}

	insertLast(data) {
		const last = this.getLast();
		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let count = 0;
		let node = this.head;
		while (node) {
			if (count === index) {
				return node;
			}
			node = node.next;
			count++;
		}
		return null;
	}
}

module.exports = { Node, LinkedList };
