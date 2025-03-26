function indexOfIgnoreCase(str:string, subStr: string){
	return str.toLowerCase().indexOf(subStr.toLowerCase())
}

console.log(indexOfIgnoreCase("Hello World","world"))
console.log(indexOfIgnoreCase("kev is ","is"))



