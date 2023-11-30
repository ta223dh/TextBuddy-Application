[Go back to TextBuddy README](README.md)

# Test reports
Table of contents
- [Version 1.0.0, 2023-11-30](#version-100-2023-11-30) ❌

## Version 1.1.0, 2023-11-30
**Summary:**
- Manual testing
- TextBuddy version needs to be updated from version 0.1.10 to 0.1.11

**Test** | Result
---|---
1. Available as a web application | ✅
2. Built for desktops and large screens | ✅
3. Analyse your text in real time, get updated analytics directly when the text is updated | ✅
4. Word count | ✅
5. Character count | ✅
6. Character count excluding spaces | ✅
7. Word frequency top #3 | ✅
8. Unique word count | ✅
9. Longest word | ✅
10. Average word length | ✅
11. Estimated reading | ✅
12. Supports the power of OpenAi's API with an OpenAi APi key | ✅
13. Textbuddy data is powered by the latest textbuddy javascript module | ❌

### 1. Available as a web application
Steps:
- Manually load https://textbuddy.aihonen.se/ on the latest version of chrome

Expected output:
- The page loads and shows three different sections: textfield, statistics and ai-chat.

### 2. Built for desktops and large screens
Steps:
- Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Resize the window to 1000x700 pixels. 

Expected output:
- No elements should overlap or be out of screen.

### 3. Analyse your text in real time, get updated analytics directly when the text is updated
Steps:
- Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Type text in the main textarea.

Expected output:
- The statistics in the top right should update. There should be no perceived lag between text input and the update of the statistics.

### 4. Word count
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Word count: 5


### 5. Character count
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Character count: 20


### 6. Character count excluding spaces
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Character count excluding spaces: 16

### 7. Word frequency top #3
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Word frequency top #3:
    - the: 2
    - cat: 1
    - ate: 1

### 8. Unique word count
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Unique word count: 4

### 9. Longest word
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Longest word: bird

### 10. Average word length
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Average word length: 3.2 characters

### 10. Average word length
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Average word length: 3.2 characters

### 11. Estimated reading time in minutes
Steps:
- Input the string in the textarea: The cat ate the bird

Expected output:
- Estimated reading time in minutes: 0.025

### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps:
- Input a valid OpenAi Api-key into the Ai-chat and press send.
- Type a question into the Ai-chat and press send.

Expected output:
- The submitted question and the generated answer should be shown at the top of the Ai-chat

### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps:
- Go to https://github.com/ta223dh/TextBuddy-Application/blob/main/package.json, document the "textbuddy" version.
- Go to https://www.npmjs.com/package/textbuddy?activeTab=versions, document the latest latest "textbuddy" version.

Expected output:
- The textbuddy version in the project equals the latest version of the textbuddy module.