var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var cm = document.getElementById('cm');
var meter = document.getElementById('meter');
var meters = document.getElementById('meters');
var km = document.getElementById('km');
var inche=document.getElementById('inche');
var cms=document.getElementById('cms');

feet.addEventListener('input', function(){

    let f = this.value;
    let i = f*12;
    if(!Number.isInteger(i)){
        i = i.toFixed(2);
    };
    inch.value = i;
});
inch.addEventListener('input', function(){

    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});


cm.addEventListener('input', function(){
    let c = this.value;
    let m = c/100;
    if(!Number.isInteger(m)){
        m = m.toFixed(2);
    };
    meter.value=m;
});
meter.addEventListener('input', function(){
    let m = this.value;
    let c = m*100;
    if(!Number.isInteger(c)){
        c = c.toFixed(2);
    };
    cm.value = c;
});

meters.addEventListener('input', function(){
    let m = this.value;
    let k = m/1000;
    if(!Number.isInteger(k)){
        k=k.toFixed(2);
    };
    km.value=k;
});
km.addEventListener('input', function(){
    let k=this.value;
    let m=k*1000;
    if(!Number.isInteger(m)){
        m=m.toFixed(2);
    };
    meters.value=m;
});
inche.addEventListener('input', function(){
    let i=this.value;
    let c=i*2.54;
    if(!Number.isInteger(c)){
        c=c.toFixed(2);
    };
    cms.value=c;
});
cms.addEventListener('input',function(){
    let c=this.value;
    let i=c/2.54;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    };
    inche.value=i;
})

