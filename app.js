let scene = document.getElementById("myScene")

for (let i = 0; i < 25; i++) {
    let num = getRandomInt(50) - 25;
    (document.createElement(<a-cylinder position=`${num} 2 ${num -3}` radius="0.5" height="3" color="#896129"></a-cylinder>));
    let circ1 = document.createElement();
    let circ2 = document.createElement();
    let circ3 = document.createElement();
    let circ4 = document.createElement();
    let circ5 = document.createElement();
    let circ6 = document.createElement();
    scene.appendChild(stem);
    // scene.appendChild(`
    //     <a-cylinder position="${num} 2 ${num -3}" radius="0.5" height="3" color="#896129"></a-cylinder>
    //     <a-sphere radius="0.75" position="1 4 -3" color="#00ff00"></a-sphere>
    //     <a-sphere radius="0.75" position="0 4 -2" color="#00ff00"></a-sphere>
    //     <a-sphere radius="0.75" position="0 4 -4" color="#00ff00"></a-sphere>
    //     <a-sphere radius="0.75" position="-1 4 -3" color="#00ff00"></a-sphere>
    //     <a-sphere radius="0.75" position="0 5 -3" color="#00ff00"></a-sphere>
    //     <a-sphere radius="0.75" position="0 4 -3" color="#00ff00"></a-sphere>
    // `)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}