import { questionService } from '../services/questionService';
import { CodingQuestion } from '../models/Question';

const codingQuestions: Omit<CodingQuestion, '_id' | 'createdAt' | 'updatedAt'>[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays & Hashing",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" }
    ],
    constraints: ["2 <= nums.length <= 10^4", "Only one valid answer exists"],
    hints: ["Use a hash map", "For each number, check if target - number exists"],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        // Your code here\n    }\n    return [];\n}`,
      python: `def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        # Your code here\n        pass\n    return []`,
      cpp: `#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> seen;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        // Your code here\n    }\n    return {};\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> seen = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            // Your code here\n        }\n        return new int[]{};\n    }\n}`
    },
    testCases: [
      { input: "[2,7,11,15], 9", expectedOutput: "[0,1]", explanation: "2 + 7 = 9" },
      { input: "[3,2,4], 6", expectedOutput: "[1,2]", explanation: "2 + 4 = 6" },
      { input: "[3,3], 6", expectedOutput: "[0,1]", explanation: "3 + 3 = 6" }
    ],
    tags: ["array", "hash-table"]
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: "Given a string containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" }
    ],
    constraints: ["1 <= s.length <= 10^4"],
    hints: ["Use a stack", "Push opening brackets", "Match closing brackets with stack top"],
    starterCode: {
      javascript: `function isValid(s) {\n    const stack = [];\n    const pairs = { ')': '(', '}': '{', ']': '[' };\n    for (let char of s) {\n        // Your code here\n    }\n    return stack.length === 0;\n}`,
      python: `def is_valid(s):\n    stack = []\n    pairs = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        # Your code here\n        pass\n    return len(stack) == 0`,
      cpp: `#include <string>\n#include <stack>\n#include <unordered_map>\nusing namespace std;\n\nbool isValid(string s) {\n    stack<char> st;\n    unordered_map<char, char> pairs = {{')', '('}, {'}', '{'}, {']', '['}};\n    for (char c : s) {\n        // Your code here\n    }\n    return st.empty();\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        Map<Character, Character> pairs = Map.of(')', '(', '}', '{', ']', '[');\n        for (char c : s.toCharArray()) {\n            // Your code here\n        }\n        return stack.isEmpty();\n    }\n}`
    },
    testCases: [
      { input: '"()"', expectedOutput: "true", explanation: "Valid pair" },
      { input: '"()[]{}"', expectedOutput: "true", explanation: "All valid" },
      { input: '"(]"', expectedOutput: "false", explanation: "Mismatched" },
      { input: '"([)]"', expectedOutput: "false", explanation: "Wrong order" },
      { input: '"{[]}"', expectedOutput: "true", explanation: "Nested valid" }
    ],
    tags: ["stack", "string"]
  },
  {
    id: 3,
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: "Find the subarray with the largest sum and return its sum. Use Kadane's Algorithm.",
    examples: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "[4,-1,2,1] = 6" }
    ],
    constraints: ["1 <= nums.length <= 10^5"],
    hints: ["Kadane's Algorithm", "At each position: extend or start new", "Track max sum"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n    let maxSum = nums[0];\n    let currentSum = nums[0];\n    for (let i = 1; i < nums.length; i++) {\n        // Your code here\n    }\n    return maxSum;\n}`,
      python: `def max_sub_array(nums):\n    max_sum = nums[0]\n    current_sum = nums[0]\n    for i in range(1, len(nums)):\n        # Your code here\n        pass\n    return max_sum`,
      cpp: `#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    int maxSum = nums[0];\n    int currentSum = nums[0];\n    for (int i = 1; i < nums.size(); i++) {\n        // Your code here\n    }\n    return maxSum;\n}`,
      java: `public class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSum = nums[0];\n        int currentSum = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            // Your code here\n        }\n        return maxSum;\n    }\n}`
    },
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6", explanation: "Subarray [4,-1,2,1]" },
      { input: "[1]", expectedOutput: "1", explanation: "Single element" },
      { input: "[5,4,-1,7,8]", expectedOutput: "23", explanation: "Entire array" },
      { input: "[-1]", expectedOutput: "-1", explanation: "Single negative" }
    ],
    tags: ["array", "dynamic-programming", "kadane"]
  },
  {
    id: 4,
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: "You're climbing stairs. It takes n steps to reach top. Each time climb 1 or 2 steps. How many distinct ways?",
    examples: [
      { input: "n = 2", output: "2", explanation: "1+1 or 2" },
      { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, or 2+1" }
    ],
    constraints: ["1 <= n <= 45"],
    hints: ["Fibonacci sequence", "ways(n) = ways(n-1) + ways(n-2)"],
    starterCode: {
      javascript: `function climbStairs(n) {\n    if (n <= 2) return n;\n    // Your code here\n    return 0;\n}`,
      python: `def climb_stairs(n):\n    if n <= 2:\n        return n\n    # Your code here\n    return 0`,
      cpp: `int climbStairs(int n) {\n    if (n <= 2) return n;\n    // Your code here\n    return 0;\n}`,
      java: `public class Solution {\n    public int climbStairs(int n) {\n        if (n <= 2) return n;\n        // Your code here\n        return 0;\n    }\n}`
    },
    testCases: [
      { input: "2", expectedOutput: "2", explanation: "Two ways" },
      { input: "3", expectedOutput: "3", explanation: "Three ways" },
      { input: "4", expectedOutput: "5", explanation: "Five ways" },
      { input: "5", expectedOutput: "8", explanation: "Eight ways" }
    ],
    tags: ["dynamic-programming", "fibonacci"]
  },
  {
    id: 5,
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: "Given head of singly linked list, reverse the list and return reversed list.",
    examples: [
      { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "[1,2]", output: "[2,1]" }
    ],
    constraints: ["0 <= list length <= 5000"],
    hints: ["Three pointers: prev, current, next", "Reverse links iteratively"],
    starterCode: {
      javascript: `function reverseList(head) {\n    let prev = null;\n    let current = head;\n    while (current !== null) {\n        // Your code here\n    }\n    return prev;\n}`,
      python: `def reverse_list(head):\n    prev = None\n    current = head\n    while current is not None:\n        # Your code here\n        pass\n    return prev`,
      cpp: `struct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nListNode* reverseList(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* current = head;\n    while (current != nullptr) {\n        // Your code here\n    }\n    return prev;\n}`,
      java: `class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; }\n}\n\npublic class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null;\n        ListNode current = head;\n        while (current != null) {\n            // Your code here\n        }\n        return prev;\n    }\n}`
    },
    testCases: [
      { input: "[1,2,3,4,5]", expectedOutput: "[5,4,3,2,1]", explanation: "Reverse entire list" },
      { input: "[1,2]", expectedOutput: "[2,1]", explanation: "Two nodes" },
      { input: "[]", expectedOutput: "[]", explanation: "Empty list" }
    ],
    tags: ["linked-list", "recursion"]
  },
  {
    id: 6,
    title: "Binary Search",
    difficulty: "Easy",
    category: "Binary Search",
    description: "Given sorted array nums and target, return index of target or -1. Must be O(log n).",
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" }
    ],
    constraints: ["1 <= nums.length <= 10^4", "All unique", "Sorted ascending"],
    hints: ["Two pointers: left, right", "mid = (left + right) / 2", "Adjust search space"],
    starterCode: {
      javascript: `function search(nums, target) {\n    let left = 0, right = nums.length - 1;\n    while (left <= right) {\n        // Your code here\n    }\n    return -1;\n}`,
      python: `def search(nums, target):\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        # Your code here\n        pass\n    return -1`,
      cpp: `#include <vector>\nusing namespace std;\n\nint search(vector<int>& nums, int target) {\n    int left = 0, right = nums.size() - 1;\n    while (left <= right) {\n        // Your code here\n    }\n    return -1;\n}`,
      java: `public class Solution {\n    public int search(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left <= right) {\n            // Your code here\n        }\n        return -1;\n    }\n}`
    },
    testCases: [
      { input: "[-1,0,3,5,9,12], 9", expectedOutput: "4", explanation: "9 at index 4" },
      { input: "[-1,0,3,5,9,12], 2", expectedOutput: "-1", explanation: "Not found" },
      { input: "[5], 5", expectedOutput: "0", explanation: "Single element" }
    ],
    tags: ["binary-search", "array"]
  },
  {
    id: 7,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    description: "Given array prices, find max profit from buying one day and selling another future day. Return 0 if no profit.",
    examples: [
      { input: "[7,1,5,3,6,4]", output: "5", explanation: "Buy at 1, sell at 6" },
      { input: "[7,6,4,3,1]", output: "0", explanation: "No profit possible" }
    ],
    constraints: ["1 <= prices.length <= 10^5"],
    hints: ["Track minimum price", "Calculate profit at each price", "Update max profit"],
    starterCode: {
      javascript: `function maxProfit(prices) {\n    let minPrice = Infinity;\n    let maxProfit = 0;\n    for (let price of prices) {\n        // Your code here\n    }\n    return maxProfit;\n}`,
      python: `def max_profit(prices):\n    min_price = float('inf')\n    max_profit = 0\n    for price in prices:\n        # Your code here\n        pass\n    return max_profit`,
      cpp: `#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxProfit(vector<int>& prices) {\n    int minPrice = INT_MAX;\n    int maxProfit = 0;\n    for (int price : prices) {\n        // Your code here\n    }\n    return maxProfit;\n}`,
      java: `public class Solution {\n    public int maxProfit(int[] prices) {\n        int minPrice = Integer.MAX_VALUE;\n        int maxProfit = 0;\n        for (int price : prices) {\n            // Your code here\n        }\n        return maxProfit;\n    }\n}`
    },
    testCases: [
      { input: "[7,1,5,3,6,4]", expectedOutput: "5", explanation: "Buy 1, sell 6" },
      { input: "[7,6,4,3,1]", expectedOutput: "0", explanation: "No profit" },
      { input: "[2,4,1]", expectedOutput: "2", explanation: "Buy 2, sell 4" }
    ],
    tags: ["array", "dynamic-programming"]
  },
  {
    id: 8,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    category: "Tree",
    description: "Return inorder traversal of binary tree nodes' values. Order: Left -> Root -> Right.",
    examples: [
      { input: "[1,null,2,3]", output: "[1,3,2]" },
      { input: "[]", output: "[]" }
    ],
    constraints: ["0 <= nodes <= 100"],
    hints: ["Recursion: left, root, right", "Or use stack iteratively"],
    starterCode: {
      javascript: `function inorderTraversal(root) {\n    const result = [];\n    function traverse(node) {\n        if (!node) return;\n        // Your code here: left, root, right\n    }\n    traverse(root);\n    return result;\n}`,
      python: `def inorder_traversal(root):\n    result = []\n    def traverse(node):\n        if not node:\n            return\n        # Your code here: left, root, right\n        pass\n    traverse(root)\n    return result`,
      cpp: `#include <vector>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left, *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nvector<int> inorderTraversal(TreeNode* root) {\n    vector<int> result;\n    function<void(TreeNode*)> traverse = [&](TreeNode* node) {\n        if (!node) return;\n        // Your code here: left, root, right\n    };\n    traverse(root);\n    return result;\n}`,
      java: `import java.util.*;\n\nclass TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        traverse(root, result);\n        return result;\n    }\n    private void traverse(TreeNode node, List<Integer> result) {\n        if (node == null) return;\n        // Your code here: left, root, right\n    }\n}`
    },
    testCases: [
      { input: "[1,null,2,3]", expectedOutput: "[1,3,2]", explanation: "Inorder traversal" },
      { input: "[]", expectedOutput: "[]", explanation: "Empty tree" },
      { input: "[1]", expectedOutput: "[1]", explanation: "Single node" }
    ],
    tags: ["tree", "depth-first-search", "binary-tree"]
  },
  {
    id: 9,
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array",
    description: "Given array of intervals, merge all overlapping intervals and return non-overlapping intervals.",
    examples: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "Merge [1,3] and [2,6]" }
    ],
    constraints: ["1 <= intervals.length <= 10^4"],
    hints: ["Sort by start time", "Merge if overlap", "Overlap: start2 <= end1"],
    starterCode: {
      javascript: `function merge(intervals) {\n    if (intervals.length <= 1) return intervals;\n    intervals.sort((a, b) => a[0] - b[0]);\n    const result = [intervals[0]];\n    for (let i = 1; i < intervals.length; i++) {\n        // Your code here\n    }\n    return result;\n}`,
      python: `def merge(intervals):\n    if len(intervals) <= 1:\n        return intervals\n    intervals.sort(key=lambda x: x[0])\n    result = [intervals[0]]\n    for i in range(1, len(intervals)):\n        # Your code here\n        pass\n    return result`,
      cpp: `#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<int>> merge(vector<vector<int>>& intervals) {\n    if (intervals.size() <= 1) return intervals;\n    sort(intervals.begin(), intervals.end());\n    vector<vector<int>> result;\n    result.push_back(intervals[0]);\n    for (int i = 1; i < intervals.size(); i++) {\n        // Your code here\n    }\n    return result;\n}`,
      java: `import java.util.*;\n\npublic class Solution {\n    public int[][] merge(int[][] intervals) {\n        if (intervals.length <= 1) return intervals;\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> result = new ArrayList<>();\n        result.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            // Your code here\n        }\n        return result.toArray(new int[result.size()][]);\n    }\n}`
    },
    testCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", expectedOutput: "[[1,6],[8,10],[15,18]]", explanation: "Merge overlapping" },
      { input: "[[1,4],[4,5]]", expectedOutput: "[[1,5]]", explanation: "Adjacent merge" },
      { input: "[[1,4],[0,4]]", expectedOutput: "[[0,4]]", explanation: "Contained interval" }
    ],
    tags: ["array", "sorting"]
  },
  {
    id: 10,
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List",
    description: "Determine if linked list has a cycle using Floyd's Cycle Detection (Tortoise and Hare).",
    examples: [
      { input: "[3,2,0,-4] with cycle at position 1", output: "true", explanation: "Tail connects to node 1" },
      { input: "[1] with no cycle", output: "false", explanation: "No cycle" }
    ],
    constraints: ["0 <= nodes <= 10^4"],
    hints: ["Two pointers: slow and fast", "Slow moves 1, fast moves 2", "If they meet, cycle exists"],
    starterCode: {
      javascript: `function hasCycle(head) {\n    if (!head || !head.next) return false;\n    let slow = head;\n    let fast = head;\n    while (fast && fast.next) {\n        // Your code here\n    }\n    return false;\n}`,
      python: `def has_cycle(head):\n    if not head or not head.next:\n        return False\n    slow = head\n    fast = head\n    while fast and fast.next:\n        # Your code here\n        pass\n    return False`,
      cpp: `struct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nbool hasCycle(ListNode *head) {\n    if (!head || !head->next) return false;\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        // Your code here\n    }\n    return false;\n}`,
      java: `class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int x) { val = x; next = null; }\n}\n\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if (head == null || head.next == null) return false;\n        ListNode slow = head;\n        ListNode fast = head;\n        while (fast != null && fast.next != null) {\n            // Your code here\n        }\n        return false;\n    }\n}`
    },
    testCases: [
      { input: "[3,2,0,-4] with cycle at position 1", expectedOutput: "true", explanation: "Cycle exists" },
      { input: "[1,2] with cycle at position 0", expectedOutput: "true", explanation: "Cycle at start" },
      { input: "[1] with no cycle", expectedOutput: "false", explanation: "No cycle" }
    ],
    tags: ["linked-list", "two-pointers", "floyd-cycle"]
  }
];

export async function seedQuestionsNew() {
  try {
    console.log('🌱 Starting to seed questions with test cases...');
    
    for (const question of codingQuestions) {
      const existing = await questionService.getQuestionById(question.id);
      if (existing) {
        console.log(`⏭️  Question ${question.id} exists, updating with test cases...`);
        await questionService.updateQuestion(question.id, { testCases: question.testCases });
      } else {
        await questionService.createQuestion(question);
        console.log(`✅ Created question ${question.id}: ${question.title}`);
      }
    }
    
    console.log('🎉 Successfully seeded all questions with test cases!');
  } catch (error) {
    console.error('❌ Error seeding questions:', error);
    throw error;
  }
}

// Run if executed directly (ES module compatible)
if (import.meta.url === `file://${process.argv[1]}`) {
  seedQuestionsNew()
    .then(() => {
      console.log('✨ Seeding completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Seeding failed:', error);
      process.exit(1);
    });
}
