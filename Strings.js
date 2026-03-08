//  string methods

// .length
const len= "hi iam javascript"
console.log(len.length);

// .touppercase

const toup= "likhitha"
console.log(toup.toUpperCase());

// tolowercase

const tolow= "LIKHITHA"
console.log(tolow.toLowerCase());

// .charAt

const char ="javascript"
console.log(char.charAt(4));


// indexOf
const ind = "javascript"
console.log(ind.indexOf("a"));

// lastindexOf 

const last = "i'm likhitha"
console.log(last.lastIndexOf("a"));

// slice
 const sli = "hello world"
 console.log(sli.slice(-5));

//  substring 
const sub = "hello i am java"
console.log(sub.substring(0,5));

// replace
const rep = "hi i'm likhitha from chennai"
console.log(rep.replace("chennai","bangalore"));

// replace all 
const repl = "hi iam java and java is a coding language"
console.log(repl.replaceAll("java","javascript"));

// trim 
const tri = "    hi    "
console.log(tri.trim());

// split 
const spli ="likhitha rapuri"
console.log(spli.split(""));

// concat 

const con = "likhitha"
console.log(con.concat("rapuri"));

// startwith

const str = "neha"
console.log(str.startsWith("n"));

// endswith

const end = "likhitharapuri"
console.log(end.endsWith("l"));

// includes 
const inc = "i am  java coding language"
console.log(inc.includes("coding"));