import fs from 'fs';
import readline from 'readline';

const file = 'task.json';

// Create file if not exists
if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify([]));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Load tasks
const loadtasks = () => {
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data);
};

// Save tasks
const savetasks = (tasks) => {
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
};

// Menu
const showmenu = () => {
    console.log('\n++++++++++++ TODO APPLICATION ++++++++++++');
    console.log('1. ADD TASK');
    console.log('2. VIEW TASKS');
    console.log('3. DELETE TASK');
    console.log('4. EXIT\n');

    rl.question('CHOOSE AN OPTION: ', handelmenu);
};

// Handle menu
function handelmenu(option) {
    switch (option) {

        case '1':
            rl.question('ENTER TASK: ', (taskInput) => {
                const tasks = loadtasks();
                tasks.push({ task: taskInput, done: false });

                savetasks(tasks);
                console.log('TASK ADDED SUCCESSFULLY!');
                showmenu();
            });
            break;

        case '2':
            const tasks = loadtasks();

            if (tasks.length === 0) {
                console.log('NO TASKS FOUND.');
            } else {
                console.log('\nTASK LIST:');
                tasks.forEach((t, index) => {
                    console.log(`${index + 1}. ${t.task}`);
                });
            }
            showmenu();
            break;

        case '3':
            const alltasks = loadtasks();

            if (alltasks.length === 0) {
                console.log("NO TASKS TO DELETE.");
                showmenu();
                return;
            }

            console.log("\nTASKS:");
            alltasks.forEach((t, index) => {
                console.log(`${index + 1}. ${t.task}`);
            });

            rl.question("ENTER TASK NUMBER TO DELETE: ", (num) => {
                const index = parseInt(num) - 1;

                if (index >= 0 && index < alltasks.length) {
                    alltasks.splice(index, 1);
                    savetasks(alltasks);
                    console.log("TASK DELETED SUCCESSFULLY!");
                } else {
                    console.log("INVALID TASK NUMBER.");
                }

                showmenu();
            });
            break;

        case '4':
            console.log("EXITING...");
            rl.close();
            break;

        default:
            console.log("INVALID OPTION... PLEASE TRY AGAIN.");
            showmenu();
    }
}

// Start app
showmenu();