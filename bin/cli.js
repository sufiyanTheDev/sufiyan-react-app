#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const templateDir = path.resolve(__dirname, '../template');
const projectName = process.argv[2];

if (!projectName) {
    console.error('Please provide a project name.');
    process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);

if (fs.existsSync(targetDir)) {
    console.error('Directory already exists.');
    process.exit(1);
}

try {
    fs.mkdirSync(targetDir, { recursive: true });

    // Copy template files
    fs.copySync(templateDir, targetDir);

    console.log(`Project ${projectName} created.`);

    // Change to the project directory
    process.chdir(targetDir);

    // Install dependencies
    console.log('Installing dependencies...');
    require('child_process').execSync('npm install', { stdio: 'inherit' });

    console.log('Dependencies installed.');
    console.log(`Your project is ready! Navigate to ${projectName} and start developing.`);
} catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
}
