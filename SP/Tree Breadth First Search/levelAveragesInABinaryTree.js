// Given a binary tree, populate an array to represent the averages of all of its levels.
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_level_averages = function (root) {
    const result = [];
    const queue = [root];

    while (queue.length !== 0) {
        const queueLength = queue.length;
        let levelSum = 0;
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            levelSum += current.value;
        }
        result.push(levelSum / queueLength);
    }

    return result;
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
