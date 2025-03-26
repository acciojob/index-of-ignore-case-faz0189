function indexOfIgnoreCase(str, subStr) {
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}

// Test cases
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple")); // 2
console.log(indexOfIgnoreCase("test", "aaa")); // -1


