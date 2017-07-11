//yarn run build uruchomi script build z package.json
//extract-text-webpack-plugin - ta wtyczka nie zgadzała się z webpackiem; aktualizacja do najnowszej wersji webpacka (yarn add webpack@latest --dev to aktualizacja webpacka)

import {Greeter} from './greeter.js';       //ctlr+spacja włącza podpowiedzi
import './style/main.css';    
import './style/sasstest.scss';                                          //./ każe patrzeć w obecnym folderze
console.log("Hello, world!");               

const greetMaja = new Greeter('Maja');
greetMaja.greet();