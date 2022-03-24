const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

primus.on("data", data => {
    let emotion = "." + data.feeling; // .good
    document.querySelector(emotion).style.fontSize = "100px";
});

document.querySelector(".good").addEventListener("click", e => {
    console.log("clicked");
    primus.write({feeling: "good"});
    
});

