
var auction = {
    currentBid: 15,
    timeLeft: 38,
    product: {
        name: "Toaster"
    }
};

var player = {
    workers: 3859,
    workersUsed: 2811,
    money: 343417831.38
};

function initialize() {
    rivets.bind($('#player'), {player: player});
}

