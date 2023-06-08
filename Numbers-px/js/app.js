let btn = document.getElementById('btn');
let sl = document.getElementById('sl')
btn.onclick = () =>{
    let nm1 = parseFloat(document.getElementById('nm1').value);
    let nm2 = document.getElementById('nm2').value;

    let sum = 0;
    if (isNaN(nm1) || isNaN(nm2)) {
        sl.innerHTML = 'reqem daxil ele'
    }
    else {
        for ( x = nm1; x <= nm2; x++) {
            sum += x;
            
        }
        sl.innerHTML = sum
    }
}    

let clk = document.getElementById('clk');
  let z = 200;
  let y = 100;

clk.onclick = () => {
    z += 50;
    y += 20;
    clk.style.width = `${z}px`
    clk.style.height = `${y}px`
}



