body {
    background-color: black;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
}

h1 {
    text-align: center;
}

.game {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 400px;
    margin: 0 auto;
}

.player {
    position: absolute;
    width: 10%;
    height: 10%;
    left: 5%;
    bottom: 5%;
    background-color: white;
}

.enemy {
    position: absolute;
    width: 10%;
    height: 10%;
    right: 5%;
    bottom: 5%;
    background-color: red;
}

.score {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
}
