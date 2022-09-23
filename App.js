let idnumber = document.getElementById('wall_id');
let color = document.getElementById('wall_color');
let applyBtn = document.getElementById('apply');
let resetbtn = document.getElementById('reset');

let flag = true;

applyBtn.addEventListener('click', () => {
    let wid = idnumber.value;
    let wcolor = color.value;
    let wno = document.getElementById(wid);
    
     if(flag == true && parseInt(wid) >= 1 && parseInt(wid) <= 9){
        wno.style.backgroundColor = wcolor;
        oldid = wid;
        flag = false;
     }
     else if(flag == false && parseInt(wid) >= 1 && parseInt(wid) <= 9){
          wno.style.backgroundColor = wcolor;
          document.getElementById(oldid).style.cssText = 'background-color: transparent';
     }
    idnumber.value = '';
    color.value = '';
})

resetbtn.addEventListener('click', () => {
    flag = true;
    for(let i = 1; i <= 9; i++) {
           let a = document.getElementById(i);
            a.style.cssText = 'background-color: transparent';
    }
})


