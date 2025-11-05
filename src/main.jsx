import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


import App from './App.jsx'
import { MouseDemo } from './components/synthetic-events/mouse-event.jsx';
import { MouseAnimation } from './components/synthetic-events/mouse-animation.jsx';
import { MouseMove } from './components/synthetic-events/mouse-move.jsx';
import { KeyDemo } from './components/synthetic-events/key-domo.jsx';
import { EMICalculator } from './components/emi-calculator/emi-calculator.jsx';

createRoot(document.getElementById('root')).render(
    <EMICalculator />
)
