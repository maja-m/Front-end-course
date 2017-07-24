//yarn run build uruchomi script build z package.json
//extract-text-webpack-plugin - ta wtyczka nie zgadzała się z webpackiem; aktualizacja do najnowszej wersji webpacka (yarn add webpack@latest --dev to aktualizacja webpacka)

import {Greeter} from './greeter';       //ctlr+spacja włącza podpowiedzi
import './style/main.css';    
import './style/sasstest.scss';     
import * as $ from 'jquery';        //$ lub coś innego, $ ładnie                                     //./ każe patrzeć w obecnym folderze
console.log("Hello, world!");               

const greetMaja = new Greeter('Maja');
greetMaja.greet();

//$('body').html('Hey z jQuery');

document.addEventListener('DOMContentLoaded', onStart);

const tasks:Task[] = loadTasks();

interface Task {
    text: string;
    state: 'active'|'completed';
}

function onStart() {
    const button = document.getElementById('addButton') as HTMLButtonElement;
    button.addEventListener('click', addTask);
    renderTasks();
    
}

function addTask(){
    const textField = document.getElementById('textField') as HTMLInputElement;
    const text = textField.value;
    tasks.push({text: text, state: 'active'});
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const listContainer = document.getElementById('list') as HTMLDivElement;
    listContainer.innerHTML = '';
    for(let i=0; i<tasks.length; i++) {
        listContainer.innerHTML += '<div>' + tasks[i].text + ', ' + tasks[i].state + '</div>';
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
     
}