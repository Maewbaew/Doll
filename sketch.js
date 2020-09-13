var frame;
var head;
var body;
var shoes;
var face;
var thead;
var tbody;
var tshoes;
var act;
var fact;
var count;
var soundon;
var soundoff;

var bedroom;
var bathroom;
var kitchen;
var dressingroom;
var outside;
var clothset;
var frontmaria=[];
var positionX;
var positionY;

let bmg;
let csound;

var faceimg=[];
var headimg=[];
var bodyimg=[];
var shoesimg=[];
var actimg=[];


function preload() {
    soundFormats('ogg', 'mp3');
    bmg = loadSound('BMG.mp3');
    csound = loadSound('sfx.mp3');
    csound.playMode('restart');
}

function setup() {
    var canvas = createCanvas(1080, 720);
    canvas.parent('DollCanvas');
    frame = 0;
    head = 0;
    body = 0;
    shoes = 0;
    face = 0;
    fact = 0;
    thead = head;
    tbody = body;
    tshoes = shoes;
    act = 0;
    background(0,0,0);
    clothset = 'pink';
    count = 0;
    
    bedroom = loadImage('Bedroom.png');
    bathroom = loadImage('Bathroom.jpg');
    dressingroom = loadImage('DressingRoom.png');
    kitchen = loadImage('Kitchen.png');
    outside = loadImage('Outside.png');
    for(var i=0; i<4; i++){
        faceimg[i]=loadImage('Face'+i+'.png');
        headimg[i] = loadImage('Head'+i+'.png');
        bodyimg[i] = loadImage('Body'+i+'.png');
        shoesimg[i] = loadImage('Shoes'+i+'.png');
        actimg[i] = loadImage('Act'+i+'.png');
    }
    for(var i=4; i<8; i++){
        actimg[i] = loadImage('Act'+i+'.png');
    }
    frontmaria[0] = loadImage('FBathroom.png');
    frontmaria[1] = loadImage('FKitchen.png');
    frontmaria[2] = loadImage('FOutside.png');
    soundon = loadImage('SoundOn.png');
    soundoff = loadImage('SoundOff.png');
    
    textSize(32);
    bmg.loop();
    
}

function draw() {
    if (frame == 0){ //bedroom
        background(bedroom);
        if(act == 0){
            positionX=800;
            positionY=300;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                count=0;
                face=0;
            }
        }
    }
    else if(frame == 1){ //dressingroom
        background(dressingroom);
        positionX=460;
        positionY=300;
        maria();
    }
    else if(frame == 2){ //kitchen
        background(kitchen);
        if(act==0){
            positionX=540;
            positionY=260;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                count=0;
                face=0;
                fact=0;
            }
        }
        image(frontmaria[1],0,10);
    }
    else if(frame==3){ //bathroom
        background(bathroom);
        if(act==0){
            positionX=540;
            positionY=330;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                count=0;
                face=0;
                fact=0;
            }
        }
        image(frontmaria[0],0,10);
    }
    else if(frame==4){ //outside
        background(outside);
        if(act==0){
            positionX=540;
            positionY=355;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                count=0;
                face=0;
                fact=0;
            }
        }
        image(frontmaria[2],0,10);
    }
    else{ //click clothset
        background(clothset);
        positionX=150;
        positionY=250;
        maria();
       /*stroke('black');
        strokeWeight(5);
        fill('#00E6FF');
        rect(20, 20, 100, 100);
        rect(500, 120, 100, 100);
        rect(500, 300, 100, 100);
        rect(500, 480, 100, 100);
        rect(960, 120, 100, 100);
        rect(960, 300, 100, 100);
        rect(960, 480, 100, 100);*/
        stroke('orange');
        strokeWeight(5);
        fill('yellow');
        triangle(30, 70, 110, 30, 110, 110);
        triangle(510, 170, 590, 130, 590, 210);
        triangle(510, 350, 590, 310, 590, 390);
        triangle(510, 530, 590, 490, 590, 570);
        triangle(970, 210, 970, 130, 1050, 170);
        triangle(970, 390, 970, 310, 1050, 350);
        triangle(970, 570, 970, 490, 1050, 530);
        
        image(headimg[head],700,100);
        image(bodyimg[body],700,170);
        image(shoesimg[shoes],700,280);
            
    
    }
    if(frame==0||frame==1||frame==2){
        /*stroke('black');
        strokeWeight(5);
        fill('#00E6FF');
        rect(20, 550, 100, 100);
        rect(960, 550, 100, 100);*/
        stroke('orange');
        strokeWeight(5);
        fill('yellow');
        triangle(30, 600, 110, 560, 110, 640);
        triangle(1050, 600, 970, 560, 970, 640);
    }
    if(bmg.isPlaying()){
       image(soundon,0,0);
       }
    else{
       image(soundoff,0,0);
       }
    
    //cursor
    stroke('red');
    strokeWeight(3);
    fill('pink');
    triangle(mouseX,mouseY,mouseX,mouseY+20,mouseX+10,mouseY+16);
    
    //text('X='+mouseX+'/Y='+mouseY,mouseX-400,mouseY+20);
    
    if(frame==0&&mouseX>=440&&mouseX<=640&&mouseY>=260&&mouseY<=665)
        {text('Click',mouseX+10,mouseY+40);}
    else if(frame==1&&((mouseX>=137&&mouseX<=402&&mouseY>=50&&mouseY<=415)||(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415)))
        {text('Click',mouseX+10,mouseY+40);}
    else if(frame==2&&((mouseX>=313&&mouseX<=492&&mouseY>=179&&mouseY<=458)||(mouseX>=63&&mouseX<=274&&mouseY>=64&&mouseY<=458)||(mouseX>=700&mouseX<=890&&mouseY>=50&&mouseY<=415)||(mouseX>=300&mouseX<=759&&mouseY>=616&&mouseY<=720)))
        {text('Click',mouseX+10,mouseY+40);}
    else if(frame==3&&((mouseX>=98&mouseX<=204&&mouseY>=249&&mouseY<=455)||(mouseX>=282&mouseX<=750&&mouseY>=616&&mouseY<=720)||(mouseX>=282&mouseX<=516&&mouseY>=103&&mouseY<=455)||(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415)))
        {text('Click',mouseX+10,mouseY+40);}
    else if(frame==4&&((mouseX>=676&mouseX<=1080&&mouseY>=556&&mouseY<=720)||(mouseX>=156&mouseX<=274&&mouseY>=290&&mouseY<=468)||(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415)))
        {text('Click',mouseX+10,mouseY+40);}    
}


function mousePressed() {
    if(mouseX>=1013&&mouseX<=1070&&mouseY>=13&&mouseY<=70){
        if (bmg.isPlaying()) {
            bmg.pause();
        } 
        else {
            bmg.play();
        }
        csound.play();
    }
    if(frame==0){
        if(mouseX>=20&&mouseX<=120&&mouseY>=550&&mouseY<=650){
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=2;
            csound.play();
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=550&&mouseY<=650){
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=1;
            csound.play();
        }
        else if(mouseX>=440&&mouseX<=640&&mouseY>=260&&mouseY<=665){ //click bed 
            act=1;
            count=0;
            face=3;
            fact=0;
            positionX=470;
            positionY=270;
            csound.play();
        }
    }
    else if(frame==1){ //at dressingroom 
        if(mouseX>=137&&mouseX<=402&&mouseY>=50&&mouseY<=415){ //click clothset
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=5;
            csound.play();
        }
        else if(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415){ //click bathroom
            head = 3;
            body = 3;
            shoes = 3;
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=3;
            csound.play();
        }
        else if(mouseX>=20&&mouseX<=120&&mouseY>=550&&mouseY<=650){
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=0;
            csound.play();
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=550&&mouseY<=650){
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=2;
            csound.play();
        } 
    }
    else if(frame==2){ //at kitchen
        if(mouseX>=20&&mouseX<=120&&mouseY>=550&&mouseY<=650){
            act=0;
            count=0;
            face=0;
            fact=0;    
            frame=1;
            csound.play();
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=550&&mouseY<=650){
            act=0;
            count=0;
            face=0;
            fact=0;    
            frame=0;
            csound.play();
        }
        else if(mouseX>=313&&mouseX<=492&&mouseY>=179&&mouseY<=458){ //cooking
            act=1;
            count=0;
            positionX=323;
            positionY=185;
            face=2;
            fact=2;
            csound.play();
        }
        else if(mouseX>=63&&mouseX<=274&&mouseY>=64&&mouseY<=458){ //eat cake
            act=1;
            count=0;
            positionX=73;
            positionY=185;
            face=1;
            fact=4;
            csound.play();
        }
        else if(mouseX>=300&mouseX<=759&&mouseY>=616&&mouseY<=720){ //eating
            act=1;
            count=0;
            positionX=540;
            positionY=420;
            face=1;
            fact=1;
            csound.play();
        }
        else if(mouseX>=700&mouseX<=890&&mouseY>=50&&mouseY<=415){ //outside
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=4;
            csound.play();
        }
    }
    
    else if(frame==3){ //at bathroom
        if(mouseX>=98&mouseX<=204&&mouseY>=249&&mouseY<=455){ //using toilet
            act=1;
            count=0;
            positionX=80;
            positionY=200;
            face=3;
            fact=6;
            csound.play();
        }
        else if(mouseX>=282&mouseX<=750&&mouseY>=616&&mouseY<=720){ //taking shower
            act=1;
            count=0;
            positionX=520;
            positionY=460;
            face=2;
            fact=5;
            csound.play();
        }
        else if(mouseX>=282&mouseX<=516&&mouseY>=103&&mouseY<=455){ //blush teeth
            act=1;
            count=0;
            positionX=390;
            positionY=200;
            face=2;
            fact=7;
            csound.play();
        }
        else if(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415){ //go dressingroom
            head=thead;
            body=tbody;
            shoes=tshoes;
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=1;
            csound.play();
        }
    }
    else if(frame==4){ //outside
        if(mouseX>=676&mouseX<=1080&&mouseY>=556&&mouseY<=720){ //water
            act=1;
            count=0;
            positionX=800;
            positionY=420;
            face=2;
            fact=3;
            csound.play();
        }
        else if(mouseX>=156&mouseX<=274&&mouseY>=290&&mouseY<=468){ //play swing
            act=1;
            count=0;
            positionX=156;
            positionY=290;
            face=2;
            fact=0;
            csound.play();
        }
        else if(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415){ //go kitchen
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=2;
            csound.play();
        }
    }
    else if(frame==5){ //clothset
        if(mouseX>=500&&mouseX<=600&&mouseY>=120&&mouseY<=220){ //<-hat
            head--;
            if(head<0){
                head=2;
            }
            csound.play();
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=120&&mouseY<=220){ //hat->
            head++;
            if(head>2){
                head=0
            }
            csound.play();
        }
        else if(mouseX>=500&&mouseX<=600&&mouseY>=300&&mouseY<=400){ //<-body
            body--;
            if(body<0){
                body=2;
            }
            csound.play();
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=300&&mouseY<=400){ //body->
            body++;
            if(body>2){
                body=0
            }
            csound.play();
        }
        else if(mouseX>=500&&mouseX<=600&&mouseY>=480&&mouseY<=580){ //<-shoes
            shoes--;
            if(shoes<0){
                shoes=2;
            }
            csound.play();
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=480&&mouseY<=580){ //shoes->
            shoes++;
            if(shoes>2){
                shoes=0
            }
            csound.play();
        }
        else if(mouseX>=20&&mouseX<=120&&mouseY>=20&&mouseY<=120){ //select
            thead=head;
            tbody=body;
            tshoes=shoes;
            act=0;
            count=0;
            face=0;
            fact=0;
            frame=1;
            csound.play();
        }
    } 
}

function maria(){
    image(headimg[head], positionX, positionY);
    image(faceimg[face], positionX, positionY);
    image(shoesimg[shoes], positionX, positionY);
    if(head!=3){
        image(actimg[fact], positionX, positionY);
    }
    image(bodyimg[body], positionX, positionY);
    if(head==3 && act!=0){
            image(actimg[fact], positionX, positionY);
    }
}
