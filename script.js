var typed = new Typed('.auto-type',{
    strings:['StopWatch'],
    typeSpeed:150,
    backSpeed : 150,
    loop : true
})
var isStop = true;
var msec=0;
var sec = 0;
var min = 0;
var hr = 0;

function start(){
    document.getElementById('start').classList.add('act');
    document.getElementById('stop').classList.remove('act');
    document.getElementById('reset').classList.remove('act');

    if(isStop == true){
        isStop = false;
        timer();
    }
}

function timer(){
   
    if(isStop == false){

        msec=parseInt(msec);
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);

        msec++;
        if(msec == 100){
            msec = 0;
            sec++;
        }
        if(sec == 60){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hr++;
        }
        if(msec<10){
            msec= '0'+msec;
        }
        if(sec<10){
            sec= '0'+sec;
        }
        if(min<10){
            min= '0'+min;
        }
        if(hr<10){
            hr= '0'+hr;
        }
        document.getElementById('hr').innerHTML = hr;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
        document.getElementById('msec').innerHTML = msec;
        
        setTimeout('timer()',10);
    }
}

function stop(){
    if(isStop == false){
        document.getElementById('stop').classList.add('act');
        document.getElementById('start').classList.remove('act');
        document.getElementById('reset').classList.remove('act');
        isStop = true;
    }
}

function restart(){
    if(isStop == false){
        document.getElementById('reset').classList.add('act');
        document.getElementById('stop').classList.remove('act');
        document.getElementById('start').classList.remove('act');
        isStop = true;
        hr =0;
        min =0;
        sec =0;
        msec =0;
        document.getElementById('hr').innerHTML = '00';
        document.getElementById('min').innerHTML = '00';
        document.getElementById('sec').innerHTML ='00';
        document.getElementById('msec').innerHTML = '00';

    }
}
