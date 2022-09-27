document.getElementById('title').innerHTML="My Fourth Javascript Experience";
document.getElementById('experience').innerHTML="In my fourth Javascript class, I was introduced to Comparison Operator, Logical Operator and Ternary Operator. I learnt that comparison operator returns Boolean value which is true or false as result. I also learnt AND, OR and NOT in Logical operators. I also learnt how to use (?) in Ternary operator.";

document.getElementById('ternary').innerHTML="TERNARY OPERATOR";

document.getElementById('grade1').innerHTML="Grade A";
let score = 70;
let result = (score >= 70) ? "A": "Below A";
document.getElementById('answer1').innerHTML="<code>let score=70</code> <br/> <code> let result = (score >=70) ? \"A\" : \"Below A\" </code><br/> Result:" + result;

document.getElementById('grade2').innerHTML="Grade B";
let score1 = 60;
let result1 = (score1 >= 60) ? "B": "Below B";
document.getElementById('answer2').innerHTML="<code>let score1=60</code> <br/> <code> let result1 = (score1 >=60) ? \"B\" : \"Below B\" </code><br/> Result:" + result1;

document.getElementById('grade3').innerHTML="Grade C";
let score2 = 50;
let result2 = (score2 >= 50) ? "C": "Below C";
document.getElementById('answer3').innerHTML="<code>let score2=50</code> <br/> <code> let result2 = (score2 >=50) ? \"C\" : \"Below C\" </code><br/> Result:" + result2;

document.getElementById('grade4').innerHTML="Grade D";
let score3 = 45;
let result3 = (score3 >= 45) ? "D": "Below D";
document.getElementById('answer4').innerHTML="<code>let score3=45</code> <br/> <code> let result3 = (score3 >=45) ? \"D\" : \"Below D\" </code><br/> Result:" + result3;

document.getElementById('grade5').innerHTML="Grade E";
let score4 = 40;
let result4 = (score4 >= 40) ? "E": "Fail";
document.getElementById('answer5').innerHTML="<code>let score4=40</code> <br/> <code> let result4 = (score4 >=40) ? \"E\" : \"Fail\" </code><br/> Result:" + result4;


document.getElementById('link').innerHTML="Link Generator";

let rand = Math.random();
let link1= (rand < 0.5)? "<a href='https://bowen.edu.ng'>Bowen University</a>" : "<a href='https://covenantuniversity.edu.ng'>Covenant University</a>";
document.getElementById('link1').innerHTML="Link 1";
document.getElementById('answerlink1').innerHTML="<code>let rand = Math.Random()</code> <br/> <code> let link1 = (rand < 0.5) ? \"<a href='https://bowen.edu.ng'>Bowen University</a>\" : \"<a href='https://covenantuniversity.edu.ng'>Covenant University</a>\" </code><br/> Result:" + link1;


let rand1 = Math.random();
let link2= (rand < 0.5)? "<a href='https://www.rccg.org'>RCCG</a>" : "<a href='https://faithtabernacle.org.ng'>Living Faith</a>";
document.getElementById('link2').innerHTML="Link 2";
document.getElementById('answerlink2').innerHTML="<code>let rand1 = Math.Random()</code> <br/> <code> let link2 = (rand < 0.5) ? \"<a href='https://www.rccg.org'>RCCG</a>\" : \"<a href='https://faithtabernacle.org.ng'>Living Faith</a>\" </code><br/> Result:" + link2;


let rand2 = Math.random();
let link3= (rand < 0.5)? "<a href='https://www.instagram.com'>Instagram</a>" : "<a href='https://twitter.com'>Twitter</a>";
document.getElementById('link3').innerHTML="Link 3";
document.getElementById('answerlink3').innerHTML="<code>let rand2 = Math.Random()</code> <br/> <code> let link3 = (rand < 0.5) ? \"<a href='https://www.instagram.com'>Instagram</a>\" : \"<a href='https://twitter.com'>Twitter</a>\" </code><br/> Result:" + link3;









