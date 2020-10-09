new Vue({
    el: '#app',
    data: {
        p1name: 'you',
        p2name: 'enemy',
        p1health: 100,
        p2health: 100,
        gameIsRunning: false
    },
    computed: {
        p1damage: function() {
            return this.p1name.length;
        }
        p1special: function() {
            return this.p1name.length;
        }
        p1luck: function() {
            return this.p1
        }
    }
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.p1health = 100;
            this.p2health = 100;
        },
        attack: function() {

        }
    }
});