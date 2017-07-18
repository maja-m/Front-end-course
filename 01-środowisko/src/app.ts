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