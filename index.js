// function isPalindrome(string){
//     var sentence = 
//     string.replace(/[\W_]/g, '' );
//     for (var i = 0, count = 
//     sentence.length -1; i < count/2; i++){
//         if(sentence[i].toLowerCase()
//         !== sentence[count - i].toLowerCase()){
//             return false;
//         }
//     }
//     return true;
//             };
            
//             console.log(isPalindrome("racecar"));
//             console.log(isPalindrome("level"));
//             console.log(isPalindrome("hello"));
//             console.log(isPalindrome("A man, a plan, a canal, Panama")); 
            
// function isEnhancedPalindrome(string){
//     var name =
//     string.replace(/[\W_]/g, '' );
//     for (var i = 0, count = 
//     name.length -1; i < count/2; i++){
//         if(name[i].toLowerCase()
//         !== name[count - i].toLowerCase()){
//             return false;
//         }
//     }
//     return true;
//             };
//             console.log(isPalindrome("A man, a plan, a canal, Panama"));
//             console.log(isPalindrome("Was it a car or a cat I saw?"));
//             console.log(isPalindrome("123321"));
//             console.log(isPalindrome("hello world"));

//             function canRearrangeToPalindrome(string){
//                 var word =
//                 string.replace(/[\W_]/g, '' );
//                 for (var i = 0, count = 
//                 word.length -1; i > count/2; i++){
//                     if(word[i].toLowerCase()
//                     !== word[count - i].toLowerCase()){
//                         return true;
//                     }
//                 }
//                 return false;
//                         };
//                         console.log(isPalindrome("civic"));
//                         console.log(isPalindrome("ivicc"));
//                         console.log(isPalindrome("hello"));
                       




                        //   function palindrome(str) {
                        //     const alphanumericOnly = str
                        //           // 1) Lowercase the input
                        //           .toLowerCase()
                        //           // 2) Strip out non-alphanumeric characters
                        //           .match(/[a-z0-9]/g);
                            
                        //     // 3) return string === reversedString
                        //     return alphanumericOnly.join('') ===
                        //     alphanumericOnly.reverse().join('');
                    
                        //   }
                          
                          
                          
                        //   console.log(palindrome("eye"));


    //                     function convertToRoman(num) {
    //                         //stores objects with both the numeric value and the corresponding Roman numeral
    //                         const romanNumeral =[
    //                             { value: 1000, numeral: 'M' },
    //                             { value: 900, numeral: 'CM' },
    //                             { value: 500, numeral: 'D' },
    //                             { value: 400, numeral: 'CD' },
    //                             { value: 100, numeral: 'C' },
    //                             { value: 90, numeral: 'XC' },
    //                             { value: 50, numeral: 'L' },
    //                             { value: 40, numeral: 'XL' },
    //                             { value: 10, numeral: 'X' },
    //                             { value: 9, numeral: 'IX' },
    //                             { value: 5, numeral: 'V' },
    //                             { value: 4, numeral: 'IV' },
    //                             { value: 1, numeral: 'I' }
    //                         ];
    //                         let roman = '';

    // for (let i = 0; i < romanNumeral.length; i++) {
    //     while (num >= romanNumeral[i].value) {
    //         roman += romanNumeral[i].numeral;
    //         num -= romanNumeral[i].value;
    //     }
    // }
    //                         return roman;
    //                        }
                           
    //                        console.log(convertToRoman(36));



    function rot13(str) {
        // Define a function to perform the ROT13 transformation for a single character
        function rot13Char(char) {
          // Check if the character is a letter
          if (/^[A-Za-z]$/.test(char)) {
            // Determine the character code offset based on the case
            const offset = char >= 'a' ? 97 : 65;
            // Apply the ROT13 transformation
            return String.fromCharCode(((char.charCodeAt(0) - offset + 13) % 26) + offset);
          }
          // If the character is not a letter, keep it unchanged
          return char;
        }
      
        // Use the rot13Char function to transform each character in the input string
        const result = str.split('').map(rot13Char).join('');
      
        return result;
      }
      
      // Example usage:
      const encryptedText = rot13("SERR PBQR PNZC");
      console.log(encryptedText); // Output: "FREE CODE CAMP"
      