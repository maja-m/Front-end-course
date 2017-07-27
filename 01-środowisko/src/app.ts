//yarn run build uruchomi script build z package.json
//extract-text-webpack-plugin - ta wtyczka nie zgadzała się z webpackiem; aktualizacja do najnowszej wersji webpacka (yarn add webpack@latest --dev to aktualizacja webpacka)

import {Greeter} from './greeter';       //ctlr+spacja włącza podpowiedzi
import './style/main.css';    
import './style/sasstest.scss';     
import * as $ from 'jquery';        //$ lub coś innego, $ ładnie                                     //./ każe patrzeć w obecnym folderze
console.log("Hello, world!");               

const greetMaja = new Greeter('Maja');
greetMaja.greet();

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
    textField.value = '';
    tasks.push({text: text, state: 'active'});
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const listContainer = document.getElementById('list') as HTMLDivElement;
    listContainer.innerHTML = '';
    for(let i=0; i<tasks.length; i++) {
        listContainer.innerHTML += '<div class="task" id="' + i + '"><input type="checkbox"><span>' + tasks[i].text + ', ' + tasks[i].state + '</span></div>';
    }

    const taskDivs = document.getElementsByClassName('task') as HTMLCollectionOf<HTMLDivElement>;
        let checkbox;
        for(let i=0; i<taskDivs.length; i++) {
            checkbox = taskDivs[i].childNodes.item(0) as HTMLInputElement;
            checkbox.addEventListener('change', function() {
                if (tasks[i].state == 'active')
                    tasks[i].state = 'completed';
                else
                    tasks[i].state = 'active';
                saveTasks();
                (taskDivs[i].childNodes.item(1) as HTMLInputElement).innerHTML = tasks[i].text + ', ' + tasks[i].state;
            });
        }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
     
}