strs = ["cat", "The fox", "Cow jumped over the moon", "good day"]

let maxVsMinString = (strings) => strings.reduce((maxStrLength, str) => Math.max(maxStrLength, str.length), 0) - strings.reduce((minStrLength, str) => Math.min(minStrLength, str.length), strings[0].length)

console.log(maxVsMinString(strs));
