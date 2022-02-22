const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateSite = require("./src/generate-site.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Manager's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Manager's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is your Manager's employee ID? (Required)",
        validate: (employeeID) => {
          if (employeeID) {
            return true;
          } else {
            console.log("Please enter an employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Manager's email address? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your Manager's office number? (Required)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter an office number.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeID,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select which option you would like to continue with:",
        choices: [
          "Add an Engineer",
          "Add an intern",
          "Finish building my team",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "Add an Engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
        *****Add a New Engineer*****
        `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your Engineer? (Required)",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter Engineer's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is the Engineer's employee ID? (Required)",
        validate: (employeeID) => {
          if (employeeID) {
            return true;
          } else {
            console.log("Please enter an employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is the Engineer's Github Username? (Required)",
        validate: (githubUsername) => {
          if (githubUsername) {
            return true;
          } else {
            console.log("Please enter a Github Username.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeID,
        answers.email,
        answers.githubUsername
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  console.log(`
          *****Add a New Intern*****
          `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your Intern? (Required)",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter Intern's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is your Intern's employee ID? (Required)",
        validate: (employeeID) => {
          if (employeeID) {
            return true;
          } else {
            console.log("Please enter an employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Inter's email address? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is your intern's school name? (Required)",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter your school name.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeID,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {
  console.log(`
    *****Finish Building My Team*****`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
};

promptManager();
