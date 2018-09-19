import Home from './components/home';
import Lock1Component from './components/locks/lock1';
import Lock2Component from './components/locks/lock2';
import Lock3Component from './components/locks/lock3';
import Lock4Component from './components/locks/lock4';

export const routes = [
    {path: '/home', components: Home},
    {path: '/lock1', components: Lock1Component },
    {path: '/lock2', components: Lock2Component },
    {path: '/lock3', components: Lock3Component },
    {path: '/lock4', components: Lock4Component }
]