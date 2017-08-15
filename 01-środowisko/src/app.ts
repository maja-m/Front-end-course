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
    const addButton = document.getElementById('addButton') as HTMLButtonElement;
    addButton.addEventListener('click', addTask);
    const radioButtons = document.getElementsByName('type') as NodeListOf<HTMLInputElement>;
    radioButtons.forEach(element => element.addEventListener('change', changeList));
    renderTasks('all');
    
}

function addTask(){
    const textField = document.getElementById('textField') as HTMLInputElement;
    const text = textField.value;
    textField.value = '';
    tasks.push({text: text, state: 'active'});
    saveTasks();
    renderTasks('all');
}

function changeList(){
    const radioButtonAll = document.getElementById('all') as HTMLInputElement;
    const radioButtonActive = document.getElementById('active') as HTMLInputElement;
    const radioButtonCompleted = document.getElementById('completed') as HTMLInputElement;

    if (radioButtonAll.checked)
        renderTasks('all');
    else if (radioButtonActive.checked)
        renderTasks('active');
    else
        renderTasks('completed');
}

function renderTasks(listType:string) {
    const listContainer = document.getElementById('list') as HTMLDivElement;
    listContainer.innerHTML = '';
    for(let i=0; i<tasks.length; i++) {
        if(listType === 'all' || listType === 'active' && tasks[i].state === 'active' || listType === 'completed' && tasks[i].state === 'completed')
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