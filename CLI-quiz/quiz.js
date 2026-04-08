import fs from 'fs';
import readline from 'readline';
import chalk from 'chalk';
 const question =JSON.parse(fs.readFileSync('question.json','utf-8'));
 const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
 });

 let score=0;
 let index=0;

 console.log(chalk.red.bold("++++++++++++++++Welcome To The Quiz++++++++++++"));
 function askquestion(){
    if(index<question.length){
        const q=question[index];
        console.log(chalk.yellow(`\nQ${index+1}: ${q.question}`));
        q.options.forEach((option,i) => {
            console.log(chalk.green(`${i+1} ${option}`));
        });
    
    rl.question(chalk.cyan('your answer (number): '),(answer)=>{
        const useranswer =parseInt(answer);
        if(useranswer === q.answer){
            console.log(chalk.green("correct!"));
            score++;
        }
        else{
            console.log(chalk.red(`wrong ! the correct answer was :${q.answer}`));

        }
        index++;
        askquestion();
    });
}
     else{
        console.log(chalk.yellow.bold(`\nQuiz over! your final score is:${score}/${question.length}`));
        rl.close();
     }
 }
 askquestion();