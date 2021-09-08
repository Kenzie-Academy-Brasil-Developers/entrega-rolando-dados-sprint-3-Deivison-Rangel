const botao = document.getElementById('botao');

const d1 = document.querySelector('p:nth-child(1)');

const d2 = document.querySelector('p:nth-child(2)');

const resul = document.querySelector('p:nth-child(4)');

const play = (x) => {

    for (let i=0;i<x;i++){
        
        let result2 = 0;

        let play1 = Math.floor(Math.random() * 6) + 1;

        let play2 = Math.floor(Math.random() * 6) + 1;

        d1.innerText = play1;

        d2.innerText = play2;

        resul.innerText = play1 + play2;
        
        result2 = play1 + play2;

        if (result2 === 2){

            count[1]++;
            final.innerText = count[1];

        } else if (result2 === 3){

            count[2]++;
            final2.innerText = count[2];

        } else if (result2 === 4){

            count[3]++;
            final3.innerText = count[3];

        } else if (result2 === 5){

            count[4]++;
            final4.innerText = count[4];

        } else if (result2 === 6){

            count[5]++;
            final5.innerText = count[5];

        } else if (result2 === 7){

            count[6]++;
            final6.innerText = count[6];

        } else if (result2 === 8){

            count[7]++;
            final7.innerText = count[7];

        } else if (result2 === 9){

            count[8]++;
            final8.innerText = count[8];

        } else if (result2 === 10){

            count[9]++;
            final9.innerText = count[9];

        } else if (result2 === 11){

            count[10]++;
            final10.innerText = count[10];

        }  else if (result2 === 12){

            count[11]++;
            final11.innerText = count[11];
        }

    }
        

}

botao.addEventListener('click', () => {
    
    play(1000);

    for (let i=1;i<=11;i++) {

        p.style.height = `${count[i]}px`
    }
});

