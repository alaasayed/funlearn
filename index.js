var http = require('http');
//var request = require('request');

var fs = require('fs');
var express=require('express');
var bodyparser=require('body-parser');
var app=express();
app.use(express.static(__dirname+'/assets'));
app.set("view engine",'vash');
app.use('/bootstrap-3.4.1-dist',express.static(__dirname+'/bootstrap-3.4.1-dist'));
app.use('/audio',express.static(__dirname+'/audio'));

app.use('/jsonfdir',express.static(__dirname+'/jsonfdir'));
app.use('/imgsdir',express.static(__dirname+'/jsdir'));
app.use('/cssdir',express.static(__dirname+'/cssdir'));
app.use('/views',express.static(__dirname+'/views'));
app.use(bodyparser.urlencoded({extended:false}));


//#################################
//get static  data
let itr0=0,itr1=0,itr2=0,itr3=0,itr4=0,itr5n=0,itr5nn=0,itr6n=0,itr6=0,itr7=0,itr8=0,itr9=0,itr100=0,itr111=0,itr12=0;
let d0,d1,d2,d3,d4,d5n,d5nn,d6n,d6cb,d7,d8,d9,d10,d11,d12,b=false;
let slides1;
let   n6={};
let n7={arr7:[{}]};
let daync=new Date();
//sunday=0;moneday=1
let gom3a=daync.getDay()==5?true:false;
let lessons=Array();
var jsons;
////#################
var currjson;
var coun=Array();
var rcoun=Array();
coun=[1,1,1,1]; rcoun=[1,1,1,1];
d4={n1:app.get('n1'),ov:1,h:1,s:1,t:1,l:1};

////////////////////////////


function readfljson(j){
  let da1;
  da1= fs.readFileSync( j,'utf-8') ;
  return JSON.parse(da1);
  }

function  getstaticjsons(){
 d0=readfljson('./assets/jsonfdir/' +'j0.json');
 d1=readfljson('./assets/jsonfdir/' +'j1.json');
 d2=readfljson('./assets/jsonfdir/' +'j2.json');
 d3=readfljson('./assets/jsonfdir/' +'j3.json');
 d7=readfljson('./assets/jsonfdir/' +'j7.json');
 d8=readfljson('./assets/jsonfdir/' +'j8.json');
 d9=readfljson('./assets/jsonfdir/' +'j9.json');
 d10=readfljson('./assets/jsonfdir/' +'j10.json');
 d11=readfljson('./assets/jsonfdir/' +'j11.json');
 d12=readfljson('./assets/jsonfdir/' +'j12.json');
 d4=readfljson('./assets/jsonfdir/' +'j4.json');
 d13=readfljson('./assets/jsonfdir/' +'j13.json');

 d6nc=readfljson('./assets/jsonfdir/' +'j6nc.json');
 d6cb=d6nc[itr6].wd6;
 d6n=d6nc[itr6].d7;



for(i=0;i<d0.length;i++)
lessons[i]=d0[i].title;
return true;

}

getstaticjsons();
//var lessons1;
if(app.get('n1')!=undefined)
d4.qv.n1=app.get('n1');
/////#################
///get requests

app.set('n1','زائرا');
lo1=false;
sewar1=[];
for(var nss=0;nss<d13.length;nss++)
sewar1[nss]=d13[nss].sura;


ikl=0;ik=0;iks=0;ikh=0;
function eval4()
{
 // d4.glessons[ik].title=lessons[ik];
  //d4.gsura[ikh].title=sewar1[ikh];
  if(coun[1]>d4.glessons[ik].ct)
  {d4.glessons[ik].t=(rcoun[1]/coun[1])*100;
  rcoun[1]=0;coun[1]=0;ik++;
    }  if(coun[2]>d4.glessons[ikl].cl)
    {d4.glessons[ikl].l=(rcoun[2]/coun[2])*100;
    
  rcoun[2]=0;coun[2]=0;
    ikl++;
    }
  if(coun[3]>d4.glessons[iks].cs)
    {d4.glessons[iks].s=(rcoun[3]/coun[3])*100;
    
  rcoun[3]=0;coun[3]=0;
    iks++;
    }
  if(coun[0]>d4.gsura[ikh].c)
   { d4.gsura[ikh].g=(rcoun[0]/coun[0])*100;
    rcoun[0]=0;coun[0]=0;
ikh++;   
  }
    d4.ov+=(d4.gsura[ikh].g+d4.glessons[ik].t+d4.glessons[ikl].l+d4.glessons[iks].s)/400;
if(ikh>sewar1.length)ikh=0;
if(ik>lessons.length)ik=0;
if(ikl>lessons.length)ikl=0;
if(iks>lessons.length)iks=0;

fs.writeFileSync('./assets/jsonfdir/j4.json',JSON.stringify(d4));
}



function calc11(){
  //hefz
  if(currjson==0)
{  coun[0]++;
  if(b==true)
  {rcoun[0]++;}}

//tajweed
  if(currjson==1)
{  coun[1]++;
  if(b==true)
  {rcoun[1]++;}}

//listen
  if(currjson==2)
{  coun[2]++;
  if(b==true)
  {rcoun[2]++;}}

//speak
  if(currjson==3)
{  coun[3]++;
  if(b==true)
  {rcoun[3]++;}}
  
  eval4();
}

app.get('/p13',function(req,res){
  res.render('p13',{n:d13[0].n,sura:d13[0].sura,curraud:d13[0].curraud,suraaud:d13[0].suraaud,sewar:sewar1});
});

app.post('/p13',function(req,res){
  res.render('p13',{n:d13[0].n,sura:d13[0].sura,curraud:d13[0].curraud,suraaud:d13[0].suraaud,sewar:sewar1});
});
app.get('/',function(req,res){
if(lo1==false)
  app.set('n1','زائرا');

    

let d0v=Array();

for(i=1;i<=d0[2].toc.length;i++){
  d0v[i]="/../imgsdir/lessons/المدود/Slide"+i+".PNG";
}

res.render('p0',{logged:lo1,n1:app.get('n1'),dv2:d0v,lessons:lessons,sewar:sewar1});
});

app.get('/p1',function(req,res){    
  if(itr1>d1.length)itr1=0;
  res.render('p1',{qv:d1[itr1],ans:b})});
app.get('/p2',function(req,res){
  
  res.render('p2',{qv:d2[itr2],ans:b})});

app.get('/p3',function(req,res){res.render('p3',{qv:d3[itr3],ans:b});});

app.get('/p4',function(req,res){res.render('p4',{qv:d4});});



app.get('/p5n',function(req,res){res.render('p5n',{itr5n});});

app.get('/p5nn',function(req,res){res.render('p5nn',{itr5nn})});

app.get('/p7',function(req,res){
res.render('p7',{qv:d7[itr7],ans:b});});
  
app.get('/p8',function(req,res){
res.render('p8',{qv:d8[itr8],ans:b});});
 
app.get('/p9',function(req,res){
res.render('p9',{qv:d9[itr9],ans:b});});

app.get('/p10',function(req,res){
  res.render('p10',{qv:d10[itr100],ans:b});});
 
app.get('/p11',function(req,res){
  res.render('p11',{qv:d11[itr111],ans:b});});

  app.get('/p6n',function(req,res){
  //d6nc.push({w:daync,wd6:[],d7:{}});
    
    res.render('p6n',{mycurrdate:daync,arr7:d6n.arr7,d7:d6n});});

  app.get('/p6cb',function(req,res){
  d6nc.push({w:daync,wd6:[],d7:{}});
    
    res.render('p6cb',{mycurrdate:daync,d7:d6cb,g1:gom3a});});
    app.get('/p12',function(req,res){
      res.render('p12',{qv:d12[itr12],ans:b});
    });
       


////////////////////////
/////////########################
/////post requests
//////////////////////

app.post('/',function(req,res){
var d0v=Array();
var c=0;
if(req.body.po1!=undefined)
c=req.body.po1;
if(req.body.nom!=undefined){
app.set('n1',req.body.nom);
lo1=true;
}

for(i=1;i<=d0[c].toc.length;i++){
  d0v[i]="/../imgsdir/lessons/"+d0[c].title+"/Slide"+i+".PNG";
}
if(req.body.op1==2)
res.render('p13',{n:"",sura:"",curraud:"",suraaud:""});

res.render('p0',{logged:lo1,op1:req.body.op1,n1:app.get('n1'),dv2:d0v,lessons:lessons});
});

/*

app.post('/ples1',function(req,res){
  var d0v=Array();
  var c=0;
  if(req.body.po1!=undefined)
  c=req.body.po1;
  
  console.log(req.body.po1);
  
  for(i=1;i<=d0[c].toc.length;i++){
    d0v[i]="/../imgsdir/lessons/"+d0[c].title+"/Slide"+i+".PNG";
  }
  
  res.render('ples1',{logged:lo1,n1:app.get('n1'),dv2:d0v,lessons:lessons});
  });

*/
app.post('/p1',function(req,res){

  currjson=d1[itr1].k;


  if((req.body.btn11==d1[itr1].r)||(req.body.btn12==d1[itr1].r))
  {
    b=true;}
 else{
 b=false;
}
itr1++;
if(itr1>d1.length)itr1=0;

calc11();

res.redirect('/p2');
});

app.post('/p2',function(req,res){
  currjson=d1[itr1].k;
  if(req.body.word1==d2[itr2].qtoken)
  {
    b=true;}
    itr2++;

    if(itr2>d2.length)itr2=0;

  calc11();
  res.render('p3',{qv:d2[itr2],ans:b});
});



app.post('/p3',function(req,res){
  currjson=d1[itr1].k;
  if((req.body.c1==d3[itr3].c)||(req.body.c2==d3[itr3].c)||(req.body.c3==d3[itr3].c)||(req.body.c4==d3[itr3].c))
  {
    
    b=true;}
 else{
 b=false;
}
itr3++;
    if(itr3>d3.length)itr3=0; 
calc11();

res.redirect('/p7');
});

app.post('/p6cb',function(req,res){
    n6.day6=req.body.day6;
    n6.gom=req.body.gom;
    n6.itqan6=req.body.itqan6;
    n6.listen6=req.body.listen6;
    n6.note6=req.body.note6;
    n6.rabt6=req.body.rabt6;
    n6.rabtt6=req.body.rabtt6;
    n6.read206=req.body.read206;
    n6.read56=req.body.read56;
    n6.reread56=req.body.reread56;
    n6.revise6=req.body.revise6;
    n6.reviset6=req.body.reviset6;
    n6.saved6=req.body.saved6;
    n6.sora6=req.body.sora6;
    n6.mnsafha6=req.body.mnsafha6;
    n6.tosafha6=req.body.tosafha6;
    daync=req.body.mycurrdate;
//    d6nc.push({w:daync,wd6:[],d7:{}});
    d6nc.indexOf({w:daync,wd6:[],d7:{}}).wd6=n6;
fs.writeFileSync('./assets/jsonfdir/j6nc.json',JSON.stringify(d6nc));
res.render('p6cb',{mycurrdate:daync,d7:d6cb,g1:gom3a});
});

app.post('/p6n',function(req,res){
  n7.req7=req.body.req7;
  n7.done7=req.body.done7;
  n7.arr7.push({error7:req.body.error7,alert7:req.body.alert7});
  d6nc.indexOf({w:daync,wd6:[],d7:{}}).d7=Object(n7);
fs.writeFileSync('./assets/jsonfdir/j6nc.json',JSON.stringify(d6nc));
res.render('p6n',{mycurrdate:daync,d7:n7,arr7:n7.arr7});
});

app.post('/p7',function(req,res){
  currjson=d1[itr1].k;
  if(req.body.p1==d7[itr7].ans)
    {
      b=true;

    }
    else 
{    b=false;

}   
itr7+=1;

if(itr7>=d7.length){itr7=0;}  
calc11();

res.redirect('/p8');
});
  
app.post('/p8',function(req,res){
  currjson=d1[itr1].k;

  if(req.body.sp8==d8[itr8].q8)
{
  b=true;
}
 else 
{
  b=false;
} 
itr8+=1;

if(itr8>=d8.length)itr8=0;
calc11();

res.redirect('/p9');
});
  
app.post('/p9',function(req,res){
  currjson=d1[itr1].k;
  lq1=req.body.sp9;
if(lq1==d9[itr9].ans)
{
  b=true;
}
 else 
{ 
  b=false;
} 
itr9+=1;

if(itr9>=d9.length)itr9=0;
calc11();

res.redirect('/p10');
});



app.post('/p10',function(req,res){
  currjson=d1[itr1].k;

  lq1=req.body.sp10;
  if(lq1==d10[itr100].ans)
  {
    b=true;
      }    else
{ 

  b=false;

}   
itr100+=1;

if(itr100>d10.length)itr100=0;

calc11();

res.redirect('/p11');
});

app.post('/p11',function(req,res){
  currjson=d1[itr1].k;
  if(req.body.sp11==d11[itr111].ans)
{ 
  b=true;
}
else 
  b=false;
  itr111+=1;

  if(itr111>d11.length)itr111=0;
 calc11();
 res.redirect('/p12');
});
 
app.post('/p12',function(req,res){
  currjson=d1[itr1].k;
  
  if((req.body.c1==d12[itr12].c))
    {
      b=true;
    }
    else {
    b=false;}
    itr12++;
    if(itr12>d12.length)
      itr12=0; 
      calc11();

      res.redirect('/p1');
  });
//////////////////////////////////server go  
app.listen(process.env.PORT||5000);
/////////////////////////fine
