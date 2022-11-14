# Project Name

Weekend To Do List

## Description

Your project description goes here. What problem did you solve? How did you solve it?
    This project solves a user problem of constantly losing their to-do list, thereby losing track of to-dos that need to be completed.

    I solved this problem by creating an application that allows the user to type in any to-do that they have and add it to a list. This application stores to-do list items on a Postico server, allowing list items to be retained even after the user closes the application. It also allows the user two options with their to-do list items. They can either mark an item as 'complete', where the DOM will update to highlight that item row green. When a new item is added to the list, any item that has been completed will be removed from the list. They can also delete any item from the list, say if they entered a to-do by accident. The delete option will also remove the data from the database.

## Prerequisites
    Node.js
    PostgreSql
    Postico
    Visual Studio Code (or equivilant code editor)
    GitHub
    Git
    Terminal
    Express

## Installation
    - Using Github, Git, and Terminal, fork and clone the repository at the link here:
    https://github.com/jared-lindquist/weekend-jquery-salary-calculator/tree/138f76d1524bde45b1c6d0fe972250b8cfdf6c17
    - Open clone in code editor.
    - In Postico, create a database named 'todo_list'
    - In VS Code, use the database.sql file, and follow the SQL commands to create a data table and add dummy data to test.
    - npm start the program in terminal, and in the browser, go to the url localhost:5000

## Usage
    1. Type in any item you would like to add to your to-do list in the input field and click the 'Add to-do' button.
    2. Repeat step 1 for as many to-dos as you have.
    3. Once an item is completed, click the 'Mark As Done' button, this will highlight the corresponding row green.
    4. If you entered a to-do incorrectly, or want to delete an item from the list, click that items 'Delete From List' button. This will remove the item from the list, and the corresponding data from the database.
    5. All items that still need to be completed will be stored for you anytime you have npm started the program in terminal and revisit localhost:5000.

## Built With
    Visual Studio Code
    Node.js
    PostgreSQL
    Postico
    GitHub



