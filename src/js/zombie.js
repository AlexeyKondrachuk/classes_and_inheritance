import Character from './app.js';

export default class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie', 40, 10);
    }
}