var frame;
var head;
var body;
var shoes;
var act;
var face;
var thead;
var tbody;
var tshoes;
var fact;
var count;

var bedroom;
var bathroom;
var kitchen;
var dressingroom;
var outside;
var clothset;
var positionX;
var positionY;

var headimg=[];
var bodyimg=[];
var shoesimg=[];
var faceimg=[];
var actimg=[];
var frontmaria=[];

/*function preload(){
    bedroom = loadImage('Bedroom.png');
    bathroom = loadImage('Bathroom.jpg');
    dressingroom = loadImage('Dressingroom.png');
    kitchen = loadImage('Kitchen.png');
    outside = loadImage('Outside.png');
    for(let i=0; i<=3; i++){
        headimg[i] = loadImage('Head'+i+'.png');
        bodyimg[i] = loadImage('Body'+i+'.png');
        shoesimg[i] = loadImage('Shoes'+i+'.png'); 
        faceimg[i] = loadImage('Face'+i+'.png');
        actimg[i] = loadImage('Act'+i+'.png');
    }
    for(let i=4; i<=7; i++){
        actimg[i] = loadImage('Act'+i+'.png');
    }
    frontmaria[0] = loadImage('FBathroom.png');
    frontmaria[1] = loadImage('FKitchen.png');
    frontmaria[2] = loadImage('FOutside.png');
}*/

function setup() {
    var canvas = createCanvas(1080, 720);
    canvas.parent('DollCanvas');
    frame = 0;
    head = 0;
    body = 0;
    shoes = 0;
    thead = head;
    tbody = body;
    tshoes = shoes;
    act = 0;
    fact = 0;
    background(0,0,0);
    bedroom = 'gray';
    bathroom = 'red';
    dressingroom = 'green';
    kitchen = 'yellow';
    outside = 'orange';
    clothset = 'pink';
    count = 0;
    
    bedroom = loadImage('Bedroom.png');
    bathroom = loadImage('Bathroom.jpg');
    dressingroom = loadImage('Dressingroom.png');
    kitchen = loadImage('Kitchen.png');
    outside = loadImage('Outside.png');
    /*for(var i=0; i<4; i++){
        headimg[i] = loadImage('Head'+i+'.png');
        bodyimg[i] = loadImage('Body'+i+'.png');
        shoesimg[i] = loadImage('Shoes'+i+'.png'); 
        faceimg[i] = loadImage('Face'+i+'.png');
        actimg[i] = loadImage('Act'+i+'.png');
    }
    for(var i=4; i<8; i++){
        actimg[i] = loadImage('Act'+i+'.png');
    }*/
    headimg[0] = loadImage('Head0.png');
    bodyimg[0] = loadImage('Body0.png');
    shoesimg[0] = loadImage('Shoes0.png'); 
    faceimg[0] = loadImage('Face0.png');
    actimg[0] = loadImage('Act0.png');
    frontmaria[0] = loadImage('FBathroom.png');
    frontmaria[1] = loadImage('FKitchen.png');
    frontmaria[2] = loadImage('FOutside.png');
}

function draw() {
    if (frame == 0){ //bedroom
        background(bedroom);
        if(fact == 0){
            positionX=800;
            positionY=300;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                face=0;
                fact=0;
                count=0;
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
        if(fact==0){
            positionX=540;
            positionY=260;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                face=0;
                fact=0;
                count=0;
            }
        }
        image(frontmaria[1],0,10);
    }
    else if(frame==3){ //bathroom
        background(bathroom);
        if(fact==0){
            positionX=540;
            positionY=330;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                face=0;
                fact=0;
                count=0;
            }
        }
        image(frontmaria[0],0,10);
    }
    else if(frame==4){ //outside
        background(outside);
        if(fact==0){
            positionX=540;
            positionY=355;
            maria();
        }
        else{
            maria();
            count++;
            if(count==65){
                act=0;
                face=0;
                fact=0;
                count=0;
            }
        }
        image(frontmaria[2],0,10);
    }
    else{ //click clothset
        background(clothset);
        positionX=150;
        positionY=250;
        maria();
        stroke('black');
        strokeWeight(5);
        fill('#00E6FF');
        rect(20, 20, 100, 100);
        rect(500, 120, 100, 100);
        rect(500, 300, 100, 100);
        rect(500, 480, 100, 100);
        rect(960, 120, 100, 100);
        rect(960, 300, 100, 100);
        rect(960, 480, 100, 100);
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
        stroke('black');
        strokeWeight(5);
        fill('#00E6FF');
        rect(20, 550, 100, 100);
        rect(960, 550, 100, 100);
        stroke('orange');
        strokeWeight(5);
        fill('yellow');
        triangle(30, 600, 110, 560, 110, 640);
        triangle(1050, 600, 970, 560, 970, 640);
    }
    stroke('red');
    fill(255,255,127,200);
    ellipse(mouseX,mouseY,10,10); 
    //text(frame+' ('+mouseX+', '+mouseY+')',mouseX+10,mouseY);
}

function mousePressed() {
    if(frame==0){
        if(mouseX>=20&&mouseX<=120&&mouseY>=550&&mouseY<=650){
            fact=0;
            count=0;
            frame=2;
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=550&&mouseY<=650){
            fact=0;
            count=0;
            frame=1;
        }
        else if(mouseX>=440&&mouseX<=640&&mouseY>=260&&mouseY<=665){ //click bed 
            fact=1;
            face=3;
            count=0;
            positionX=470;
            positionY=270;
            maria();
        }
    }
    else if(frame==1){ //at dressingroom 
        if(mouseX>=137&&mouseX<=402&&mouseY>=50&&mouseY<=415){ //click clothset
            fact=0;
            count=0;
            frame=5; 
        }
        else if(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415){ //click bathroom
            head = 3;
            body = 3;
            shoes = 3;
            fact=0;
            count=0;
            frame=3;
        }
        else if(mouseX>=20&&mouseX<=120&&mouseY>=550&&mouseY<=650){
            fact=0;
            count=0;
            frame=0;
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=550&&mouseY<=650){
            fact=0;
            count=0;
            frame=2;
        } 
    }
    else if(frame==2){ //at kitchen
        if(mouseX>=20&&mouseX<=120&&mouseY>=550&&mouseY<=650){
            fact=0;
            count=0;    
            frame=1;
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=550&&mouseY<=650){
            fact=0;
            count=0;    
            frame=0;
        }
        else if(mouseX>=313&&mouseX<=492&&mouseY>=179&&mouseY<=458){ //cooking
            face=2;
            act=2;
            fact=1;
            count=0;
            positionX=323;
            positionY=185;
            maria();
        }
        else if(mouseX>=258&mouseX<=759&&mouseY>=616&&mouseY<=720){ //eating
            fact=1;
            act=1;
            count=0;
            positionX=540;
            positionY=420;
            maria();
        }
        else if(mouseX>=61&mouseX<=274&&mouseY>=67&&mouseY<=458){ //eating cake
            fact=1;
            act=4;
            count=0;
            positionX=540;
            positionY=420;
            maria();
        }
        else if(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415){ //outside
            fact=0;
            count=0;
            frame=4;
        }
    }
    
    else if(frame==3){ //at bathroom
        if(mouseX>=98&mouseX<=204&&mouseY>=249&&mouseY<=455){ //using toilet
            face=3;
            act=6;
            fact=1;
            count=0;
            positionX=80;
            positionY=200;
            maria();
        }
        else if(mouseX>=282&mouseX<=750&&mouseY>=616&&mouseY<=720){ //taking shower
            face=2;
            act=5;
            fact=1;
            count=0;
            positionX=520;
            positionY=460;
            maria();
        }
        else if(mouseX>=282&mouseX<=516&&mouseY>=103&&mouseY<=455){ //blush teeth
            face=2;
            act=7;
            fact=1;
            count=0;
            positionX=390;
            positionY=200;
            maria();
        }
        else if(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415){ //go dressingroom
            head=thead;
            body=tbody;
            shoes=tshoes;
            fact=0;
            count=0;
            frame=1;
        }
    }
    else if(frame==4){ //outside
        if(mouseX>=676&mouseX<=1080&&mouseY>=556&&mouseY<=720){ //water
            face=2;
            act=3;
            fact=1;
            count=0;
            positionX=800;
            positionY=420;
            maria();
        }
        else if(mouseX>=156&mouseX<=274&&mouseY>=290&&mouseY<=468){ //play swing
            face=2;
            fact=1;
            count=0;
            positionX=156;
            positionY=290;
            maria();
        }
        else if(mouseX>=673&mouseX<=863&&mouseY>=50&&mouseY<=415){ //go kitchen
            fact=0;
            count=0;
            frame=2;
        }
    }
    else if(frame==5){ //clothset
        if(mouseX>=500&&mouseX<=600&&mouseY>=120&&mouseY<=220){ //<-hat
            head--;
            if(head<0){
                head=2;
            }
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=120&&mouseY<=220){ //hat->
            head++;
            if(head>2){
                head=0
            }
        }
        else if(mouseX>=500&&mouseX<=600&&mouseY>=300&&mouseY<=400){ //<-body
            body--;
            if(body<0){
                body=2;
            }
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=300&&mouseY<=400){ //body->
            body++;
            if(body>2){
                body=0
            }
        }
        else if(mouseX>=500&&mouseX<=600&&mouseY>=480&&mouseY<=580){ //<-shoes
            shoes--;
            if(shoes<0){
                shoes=2;
            }
        }
        else if(mouseX>=960&&mouseX<=1060&&mouseY>=480&&mouseY<=580){ //shoes->
            shoes++;
            if(shoes>2){
                shoes=0
            }
        }
        else if(mouseX>=20&&mouseX<=120&&mouseY>=20&&mouseY<=120){ //select
            thead=head;
            tbody=body;
            tshoes=shoes;
            fact=0;
            count=0;
            frame=1;
        }
    } 
}

function maria(){
    if(head!=3){
        image(actimg, positionX, positionY);
    }
    image(headimg[head], positionX, positionY);
    image(shoesimg[shoes], positionX, positionY);
    image(bodyimg[body], positionX, positionY);
    image(faceimg[face], positionX, positionY);
}