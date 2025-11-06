# Coding Practice Questions Setup

## ✅ Completed Setup

### Questions Added (10 Total)

Your coding practice platform now has **10 LeetCode-style questions** with complete test cases:

1. **Two Sum** (Easy) - Arrays & Hashing
   - 3 test cases with proper input/output validation
   
2. **Valid Parentheses** (Easy) - Stack
   - 5 test cases covering all edge cases
   
3. **Maximum Subarray** (Medium) - Dynamic Programming
   - 4 test cases including Kadane's Algorithm
   
4. **Climbing Stairs** (Easy) - Dynamic Programming
   - 4 test cases (Fibonacci sequence)
   
5. **Reverse Linked List** (Easy) - Linked List
   - 3 test cases including empty list
   
6. **Binary Search** (Easy) - Binary Search
   - 3 test cases with sorted arrays
   
7. **Best Time to Buy and Sell Stock** (Easy) - Array
   - 3 test cases for profit calculation
   
8. **Binary Tree Inorder Traversal** (Easy) - Tree
   - 3 test cases including empty tree
   
9. **Merge Intervals** (Medium) - Array
   - 3 test cases for interval merging
   
10. **Linked List Cycle** (Easy) - Linked List
    - 3 test cases using Floyd's algorithm

### Judge System Features

✅ **Enhanced Judge** - Uses Piston API for multiple languages:
- JavaScript (Node.js)
- Python
- C++
- Java
- Rust

✅ **Test Case Execution**:
- Runs all test cases automatically
- Shows passed/failed status for each test
- Displays execution time
- Shows actual vs expected output
- Proper error handling

✅ **LeetCode-Style Features**:
- Multiple test cases per question
- Hidden test cases (can be added)
- Detailed feedback on failures
- Submission history tracking
- User progress tracking

## How to Use

### For Students:

1. **Visit Coding Practice Page**: Navigate to `/coding-practice`
2. **Select a Question**: Click on any of the 10 questions
3. **Write Your Solution**: Use the code editor with syntax highlighting
4. **Run Tests**: Click "Run Tests" to execute all test cases
5. **View Results**: See which test cases passed/failed with detailed output

### For Admins:

#### Add More Questions:

You can add more questions via API:

```bash
curl -X POST http://localhost:8080/api/questions \
  -H "Content-Type: application/json" \
  -d '{
    "id": 11,
    "title": "Your Question Title",
    "difficulty": "Easy|Medium|Hard",
    "category": "Category Name",
    "description": "Problem description",
    "examples": [...],
    "constraints": [...],
    "hints": [...],
    "starterCode": {
      "javascript": "...",
      "python": "...",
      "cpp": "...",
      "java": "..."
    },
    "testCases": [
      {
        "input": "test input",
        "expectedOutput": "expected output",
        "explanation": "why this is the answer"
      }
    ],
    "tags": ["tag1", "tag2"]
  }'
```

#### Re-seed Questions:

If you need to reset or re-seed questions:

```bash
curl -X POST http://localhost:8080/api/admin/seed-questions
```

## Test Case Format

Test cases follow this structure:

```typescript
{
  input: string,           // Input as string (will be parsed)
  expectedOutput: string,  // Expected output as string
  explanation: string      // Why this is the correct answer
}
```

### Input Format Examples:

- **Single array**: `"[1,2,3,4,5]"`
- **Array with target**: `"[2,7,11,15], 9"`
- **String**: `'"()"'` (note the double quotes)
- **Number**: `"5"`
- **2D array**: `"[[1,3],[2,6],[8,10]]"`
- **Linked list with cycle**: `"[3,2,0,-4] with cycle at position 1"`
- **Tree**: `"[1,null,2,3]"`

## Judge System Architecture

### Flow:
1. User submits code
2. Server receives: `questionId`, `code`, `language`, `userId`
3. Judge fetches question and test cases from database
4. For each test case:
   - Parse input
   - Execute code with input
   - Compare actual vs expected output
   - Record execution time
5. Return comprehensive results with pass/fail status

### Supported Languages:

- **JavaScript**: Runs on Node.js locally
- **Python**: Runs locally with Python interpreter
- **C++/Java/Rust**: Uses Piston API (https://emkc.org/api/v2/piston)

## Files Modified/Created

### Created:
- `/server/scripts/seedQuestionsNew.ts` - Complete seed file with 10 questions

### Modified:
- `/server/index.ts` - Added seed endpoint
- `/server/scripts/seedQuestions.ts` - Updated with test cases

### Existing (Already Working):
- `/server/services/codeExecutor.ts` - Judge engine
- `/server/routes/judge.ts` - Judge API endpoint
- `/server/services/questionService.ts` - Question CRUD
- `/client/pages/CodingPractice.tsx` - Frontend UI

## Database Collections

### `questions`
Stores all coding questions with:
- Problem description
- Examples
- Constraints
- Hints
- Starter code for all languages
- **Test cases** (critical for judge)
- Tags and metadata

### `submissions`
Tracks all user submissions with:
- User ID
- Question ID
- Code submitted
- Language used
- Test results
- Execution time
- Status (Accepted/Wrong Answer/etc.)
- Timestamp

### `user_progress`
Tracks user progress:
- Questions attempted
- Questions solved
- Time spent
- Solutions saved

## Next Steps (Optional Enhancements)

1. **Add More Questions**: Currently 10, can add 100+
2. **Hidden Test Cases**: Add test cases not shown to users
3. **Time/Memory Limits**: Enforce stricter limits
4. **Difficulty-based Scoring**: Points system
5. **Editorial Solutions**: Add official solutions
6. **Video Explanations**: Link to explanation videos
7. **Similar Problems**: Suggest related questions
8. **Company Tags**: Tag questions by companies (Google, Amazon, etc.)
9. **Topic-wise Practice**: Group by algorithms/data structures
10. **Contest Mode**: Timed challenges

## Troubleshooting

### Questions not showing?
```bash
# Check if questions exist
curl http://localhost:8080/api/questions

# Re-seed if needed
curl -X POST http://localhost:8080/api/admin/seed-questions
```

### Judge not working?
- Check Piston API is accessible
- Verify test case format matches expected input format
- Check server logs for errors

### Test cases failing incorrectly?
- Verify expectedOutput format matches actual output format
- Check for trailing spaces or newlines
- Ensure data types match (string "5" vs number 5)

## Success! 🎉

Your coding practice platform is now fully functional with:
- ✅ 10 quality questions
- ✅ Complete test cases for each
- ✅ Working judge system
- ✅ Multiple language support
- ✅ LeetCode-style interface
- ✅ Submission tracking
- ✅ User progress tracking

Visit http://localhost:8080/coding-practice to start practicing!
