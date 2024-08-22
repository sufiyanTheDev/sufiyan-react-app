#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

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

fs.mkdirSync(targetDir, { recursive: true });

// Copy template files, wrapping paths in quotes
execSync(`cp -r "${templateDir}/." "${targetDir}"`, { stdio: 'inherit' });

console.log(`Project ${projectName} created.`);

// Change to the project directory
process.chdir(targetDir);

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Dependencies installed.');
console.log(`Your project is ready! Navigate to ${projectName} and start developing.`);
