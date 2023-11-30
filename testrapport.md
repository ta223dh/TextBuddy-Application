[Go back to TextBuddy README](README.md)

# Test reports
Table of contents
- [Version 1.0.3, 2023-11-30](#version-103-2023-11-30) ✅
- [Version 1.0.2, 2023-11-30](#version-102-2023-11-30) ✅
- [Version 1.0.1, 2023-11-30](#version-101-2023-11-30) ✅
- [Version 1.0.0, 2023-11-30](#version-100-2023-11-30) ❌

## Version 1.0.3, 2023-11-30
**Summary:**
- Manual testing.
- All tests passed.

**Test** | Result
---|---
1 Available as a web application | ✅
2 Built for desktops and large screens | ✅
3 Analyse your text in real time, get updated analytics directly when the text is updated | ✅
4 Word count | ✅
5 Character count | ✅
6 Character count excluding spaces | ✅
7 Word frequency top #3 | ✅
8 Unique word count | ✅
9 Longest word | ✅
10 Average word length | ✅
11 Estimated reading time in minutes | ✅
12 Supports the power of OpenAi's API with an OpenAi APi key | ✅
13 Textbuddy data is powered by the latest textbuddy javascript module | ✅

---
### 1. Available as a web application
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome | The page loads and shows three different sections: textfield, statistics and ai-chat.

---
### 2. Built for desktops and large screens
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Resize the window to 1000x700 pixels. | No elements should overlap or be out of screen.

---
### 3. Analyse your text in real time, get updated analytics directly when the text is updated
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Type text in the main textarea. | The statistics in the top right should update. There should be no perceived lag between text input and the update of the statistics.

---
### 4. Word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word count: 5

---
### 5. Character count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count: 20

---
### 6. Character count excluding spaces
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count excluding spaces: 16

---
### 7. Word frequency top #3
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word frequency top #3: the: 2, cat: 1, ate: 1

---
### 8. Unique word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Unique word count: 4

---
### 9. Longest word
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Longest word: bird

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 11. Estimated reading time in minutes
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Estimated reading time in minutes: 0.025

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Input a valid OpenAi Api-key into the Ai-chat and press send. 2 Type a question into the Ai-chat and press send. | The submitted question and the generated answer should be shown at the top of the Ai-chat

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Go to https://github.com/ta223dh/TextBuddy-Application/blob/main/package.json, document the "textbuddy" version. 2 Go to https://www.npmjs.com/package/textbuddy?activeTab=versions, document the latest latest "textbuddy" version. | The textbuddy version in the project equals the latest version of the textbuddy module.

## Version 1.0.2, 2023-11-30
**Summary:**
- Manual testing.
- All tests passed.

**Test** | Result
---|---
1 Available as a web application | ✅
2 Built for desktops and large screens | ✅
3 Analyse your text in real time, get updated analytics directly when the text is updated | ✅
4 Word count | ✅
5 Character count | ✅
6 Character count excluding spaces | ✅
7 Word frequency top #3 | ✅
8 Unique word count | ✅
9 Longest word | ✅
10 Average word length | ✅
11 Estimated reading time in minutes | ✅
12 Supports the power of OpenAi's API with an OpenAi APi key | ✅
13 Textbuddy data is powered by the latest textbuddy javascript module | ✅

---
### 1. Available as a web application
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome | The page loads and shows three different sections: textfield, statistics and ai-chat.

---
### 2. Built for desktops and large screens
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Resize the window to 1000x700 pixels. | No elements should overlap or be out of screen.

---
### 3. Analyse your text in real time, get updated analytics directly when the text is updated
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Type text in the main textarea. | The statistics in the top right should update. There should be no perceived lag between text input and the update of the statistics.

---
### 4. Word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word count: 5

---
### 5. Character count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count: 20

---
### 6. Character count excluding spaces
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count excluding spaces: 16

---
### 7. Word frequency top #3
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word frequency top #3: the: 2, cat: 1, ate: 1

---
### 8. Unique word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Unique word count: 4

---
### 9. Longest word
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Longest word: bird

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 11. Estimated reading time in minutes
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Estimated reading time in minutes: 0.025

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Input a valid OpenAi Api-key into the Ai-chat and press send. 2 Type a question into the Ai-chat and press send. | The submitted question and the generated answer should be shown at the top of the Ai-chat

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Go to https://github.com/ta223dh/TextBuddy-Application/blob/main/package.json, document the "textbuddy" version. 2 Go to https://www.npmjs.com/package/textbuddy?activeTab=versions, document the latest latest "textbuddy" version. | The textbuddy version in the project equals the latest version of the textbuddy module.

## Version 1.0.1, 2023-11-30
**Summary:**
- Manual testing.
- All tests passed.

**Test** | Result
---|---
1 Available as a web application | ✅
2 Built for desktops and large screens | ✅
3 Analyse your text in real time, get updated analytics directly when the text is updated | ✅
4 Word count | ✅
5 Character count | ✅
6 Character count excluding spaces | ✅
7 Word frequency top #3 | ✅
8 Unique word count | ✅
9 Longest word | ✅
10 Average word length | ✅
11 Estimated reading time in minutes | ✅
12 Supports the power of OpenAi's API with an OpenAi APi key | ✅
13 Textbuddy data is powered by the latest textbuddy javascript module | ✅

---
### 1. Available as a web application
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome | The page loads and shows three different sections: textfield, statistics and ai-chat.

---
### 2. Built for desktops and large screens
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Resize the window to 1000x700 pixels. | No elements should overlap or be out of screen.

---
### 3. Analyse your text in real time, get updated analytics directly when the text is updated
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Type text in the main textarea. | The statistics in the top right should update. There should be no perceived lag between text input and the update of the statistics.

---
### 4. Word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word count: 5

---
### 5. Character count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count: 20

---
### 6. Character count excluding spaces
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count excluding spaces: 16

---
### 7. Word frequency top #3
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word frequency top #3: the: 2, cat: 1, ate: 1

---
### 8. Unique word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Unique word count: 4

---
### 9. Longest word
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Longest word: bird

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 11. Estimated reading time in minutes
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Estimated reading time in minutes: 0.025

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Input a valid OpenAi Api-key into the Ai-chat and press send. 2 Type a question into the Ai-chat and press send. | The submitted question and the generated answer should be shown at the top of the Ai-chat

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Go to https://github.com/ta223dh/TextBuddy-Application/blob/main/package.json, document the "textbuddy" version. 2 Go to https://www.npmjs.com/package/textbuddy?activeTab=versions, document the latest latest "textbuddy" version. | The textbuddy version in the project equals the latest version of the textbuddy module.

## Version 1.0.0, 2023-11-30
**Summary:**
- Manual testing.
- Discrepancy in test 13: TextBuddy version needs to be updated from version 0.1.10 to 0.1.11

**Test** | Result
---|---
1 Available as a web application | ✅
2 Built for desktops and large screens | ✅
3 Analyse your text in real time, get updated analytics directly when the text is updated | ✅
4 Word count | ✅
5 Character count | ✅
6 Character count excluding spaces | ✅
7 Word frequency top #3 | ✅
8 Unique word count | ✅
9 Longest word | ✅
10 Average word length | ✅
11 Estimated reading time in minutes | ✅
12 Supports the power of OpenAi's API with an OpenAi APi key | ✅
13 Textbuddy data is powered by the latest textbuddy javascript module | ❌

---
### 1. Available as a web application
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome | The page loads and shows three different sections: textfield, statistics and ai-chat.

---
### 2. Built for desktops and large screens
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Resize the window to 1000x700 pixels. | No elements should overlap or be out of screen.

---
### 3. Analyse your text in real time, get updated analytics directly when the text is updated
Steps | Expected output
---|---
Manually load https://textbuddy.aihonen.se/ on the latest version of chrome. Type text in the main textarea. | The statistics in the top right should update. There should be no perceived lag between text input and the update of the statistics.

---
### 4. Word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word count: 5

---
### 5. Character count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count: 20

---
### 6. Character count excluding spaces
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Character count excluding spaces: 16

---
### 7. Word frequency top #3
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Word frequency top #3: the: 2, cat: 1, ate: 1

---
### 8. Unique word count
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Unique word count: 4

---
### 9. Longest word
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Longest word: bird

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 10. Average word length
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Average word length: 3.2 characters

---
### 11. Estimated reading time in minutes
Steps | Expected output
---|---
Input the string in the textarea: The cat ate the bird | Estimated reading time in minutes: 0.025

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Input a valid OpenAi Api-key into the Ai-chat and press send. 2 Type a question into the Ai-chat and press send. | The submitted question and the generated answer should be shown at the top of the Ai-chat

---
### 12. Supports the power of OpenAi's API with an OpenAi APi key
Steps | Expected output
---|---
1 Go to https://github.com/ta223dh/TextBuddy-Application/blob/main/package.json, document the "textbuddy" version. 2 Go to https://www.npmjs.com/package/textbuddy?activeTab=versions, document the latest latest "textbuddy" version. | The textbuddy version in the project equals the latest version of the textbuddy module.