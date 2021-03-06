var http = require('http');
var request = require('request');
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
let itra={itr0:0,itr1:0,itr2:0,itr3:0,itr4:0,itr5n:0,itr5nn:0,itr6n:0,itr6:0,itr7:0,itr8:0,itr9:0,itr100:0,itr111:0,itr12:0};
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
d4={n1:"",ov:1,h:1,s:1,t:1,l:1};

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
 d6nc.map(function(t,indx){
   if(t.w==daync)
 {
  d6cb=d6nc[indx].wd6;
  d6n=d6nc[indx].d7;
 
 }
 
else{
  d6cb=d6nc[0].wd6;
  d6n=d6nc[0].d7;
 
 }
 

  });
 


for(i=0;i<d0.length;i++)
lessons[i]=d0[i].title;
return true;

}
///get requests
getstaticjsons();
app.set('n1','زائرا');
lo1=false;
sewar1=[];
for(var nss=0;nss<d13.length;nss++)
sewar1[nss]=d13[nss].sura;


///////////////////get total lessons q in p1
let ngles=d4.glessons[0].ct;
for(kp=1;kp<d4.glessons.length;kp++)
ngles+=d4.glessons[kp].ct;

/////////////////////

ikitr={
ikl:0,ik:0,iks:0,ikh:0
}
function eval4()
{
 // d4.glessons[ik].title=lessons[ik];
  //d4.gsura[ikh].title=sewar1[ikh];
  if(coun[1]>d4.glessons[ikitr.ik].ct)
  {d4.glessons[ikitr.ik].t=(rcoun[1]/coun[1])*100;
  rcoun[1]=0;coun[1]=0;ikitr.ik++;
    }  if(coun[2]>d4.glessons[ikitr.ikl].cl)
    {d4.glessons[ikitr.ikl].l=(rcoun[2]/coun[2])*100;
    
  rcoun[2]=0;coun[2]=0;
  ikitr.ikl++;
    }
  if(coun[3]>d4.glessons[ikitr.iks].cs)
    {d4.glessons[ikitr.iks].s=(rcoun[3]/coun[3])*100;
    
  rcoun[3]=0;coun[3]=0;
  ikitr.iks++;
    }
  if(coun[0]>d4.gsura[ikitr.ikh].c)
   { d4.gsura[ikitr.ikh].g=(rcoun[0]/coun[0])*100;
    rcoun[0]=0;coun[0]=0;
    ikitr.ikh++;   
  }
    d4.ov+=(d4.gsura[ikitr.ikh].g+d4.glessons[ikitr.ik].t+d4.glessons[ikitr.ikl].l+d4.glessons[ikitr.iks].s)/4;
if(ikitr.ikh>sewar1.length)ikitr.ikh=0;
if(ikitr.ik>lessons.length)ikitr.ik=0;
if(ikitr.ikl>lessons.length)ikitr.ikl=0;
if(ikitr.iks>lessons.length)ikitr.iks=0;

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



var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
///npm install watson-developer-cloud
var speech_to_text = new SpeechToTextV1({
  username: 'alaa.sayed4@gmail.com',
  password: '6ESutRjKk-GPrua4dKpMzyw-R6cYYIqtL_y5LS6BDKkI',
  url: 'https://stream.watsonplatform.net/speech-to-text/api'
  ,version: 'v1'
});

var params = {
  content_type: 'audio/flac'
};
/*
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
*/
app.get('/p2vf',function(req,res){
   res.render('p2vf',{qv:d2[itra.itr2],ans:true,currt:"...."});
  });

app.post('/p2vf',function(req,res){
// Create the stream,
 
const AudioRecorder = require('node-audiorecorder');
 
// Options is an optional parameter for the constructor call.
// If an option is not given the default value, as seen below, will be used.
const options = {
  program: `rec`,     // Which program to use, either `arecord`, `rec`, or `sox`.
  device: null,       // Recording device to use, e.g. `hw:1,0`
 
  bits: 16,           // Sample size. (only for `rec` and `sox`)
  channels: 1,        // Channel count.
  encoding: `signed-integer`,  // Encoding type. (only for `rec` and `sox`)
  format: `S16_LE`,   // Encoding type. (only for `arecord`)
  rate: 16000,        // Sample rate.
  type: `wav`,        // Format type.
 
  // Following options only available when using `rec` or `sox`.
  silence: 2,         // Duration of silence in seconds before it stops recording.
  thresholdStart: 0.5,  // Silence threshold to start recording.
  thresholdStop: 0.5,   // Silence threshold to stop recording.
  keepSilence: true   // Keep the silence in the recording.
};
// Optional parameter intended for debugging.
// The object has to implement a log and warn function.
const logger = console;
 
// Create an instance.
let audioRecorder = new AudioRecorder(options, logger);
//ar-MS_BroadbandModel
//zh-CN_BroadbandModel
audioRecorder.start();
for(p=0;p<900;p++)p++;
audioRecorder.stop();
const recognizeStream = speech_to_text.createRecognizeStream({
  content_type: 'audio/l16; rate=44100; channels=2',
  model: 'ar-MS_BroadbandModel',
  interim_results: true,
})

var cur2='...';
var s=audioRecorder.stream();

const textStream = s.pipe(recognizeStream).setEncoding('utf8');

textStream.on('data', function(user_speech_text ){

cur2=user_speech_text;
if(user_speech_text==d2[itra.itr2].qtoken)
{itra.itr2++;b=true;}else b=false;
});
textStream.on('error', function(e ){ cur2=e});
calc11();
res.render('p2vf',{qv:d2[itra.itr2],ans:b,currt:cur2});

});

app.get('/p13',function(req,res){
  res.render('p13',{qv13:d13[0],sewar:sewar1});
});


v13=0;

app.post('/p13',function(req,res){
  if(req.body.po13!=undefined)
  v13=req.body.po13;
  if(req.body.pract!=undefined)
  {
 v11=ngles+(v13*13);
 itra.itr1=v11;
res.redirect('p1');
}
 res.render('p13',{qv13:d13[v13],sewar:sewar1});
});
app.get('/',function(req,res){
if(req.body.vcnom!=undefined && req.body.vccur!=undefined)
   { itra.itr1=req.body.vccur;

    itra.nom=req.body.vcnom;
app.set('n1',itra.nom);
   }
/*
let d0v=Array();

for(i=1;i<=d0[2].toc.length;i++){
  d0v[i]="/../imgsdir/lessons/المدود/Slide"+i+".PNG";
}
*/
//,dv2:d0v
res.render('p0',{logged:lo1,n1:app.get('n1'),lessons:lessons,sewar:sewar1});
});
app.get('/p0d',function(req,res){
let d0v=Array();
for(i=1;i<=d0[2].toc.length;i++){
  d0v[i]="/../imgsdir/lessons/المدود/Slide"+i+".PNG";
}
  res.render('p0d',{dv2:d0v,lessons:lessons,n1:app.get('n1')});
});

var c=0;v11=0;

app.post('/p0d',function(req,res){
var d0v=Array();
if(req.body.po2!=undefined)
{
c=req.body.po2;
}
console.log("pract"+req.body.pract);


for(i=1;i<=d0[c].toc.length;i++)
  d0v[i]="/../imgsdir/lessons/"+d0[c].title+"/Slide"+i+".PNG";

if(req.body.pract!=undefined)
{ if(c==0)v11=0; 
 else if(c==1) v11=14;
  else  v11=14+((c-1)*10);
 itra.itr1=v11;
//res.render('p1',{qv:d1[v11],ans:b,itrall1:v11,cnom:app.get('n1')});
res.redirect('/p1'); 
}

else
res.render('p0d',{dv2:d0v,lessons:lessons,n1:app.get('n1')});

});


app.get('/p1',function(req,res){    
  if(itra.itr1>d1.length)itra.itr1=0;

  bv1=d1[itra.itr1];
  res.render('p1',{qv:bv1,ans:b,itrall1:itra.itr1,cnom:app.get('n1')});});
app.get('/p2',function(req,res){ res.render('p2',{qv:d2[itra.itr2],ans:b})});
  
app.get('/p222',function(req,res){ res.render('p222',{qv:d2[itra.itr2],ans:b,currt:"...."})});

app.get('/p3',function(req,res){res.render('p3',{qv:d3[itra.itr3],ans:b});});

app.get('/p4',function(req,res){
  
  d4.n1=app.get('n1');
  res.render('p4',{qv:d4});});



app.get('/p5n',function(req,res){
  itr5n=itra.itr5n;
  res.render('p5n',{itr5n});});

app.get('/p5nn',function(req,res){
  i5nn=itra.itr5nn;
  res.render('p5nn',{i5nn})});

app.get('/p7',function(req,res){
res.render('p7',{qv:d7[itra.itr7],ans:b});});
  
app.get('/p8',function(req,res){
res.render('p8',{qv:d8[itra.itr8],ans:b});});
 
app.get('/p9',function(req,res){
res.render('p9',{qv:d9[itra.itr9],ans:b});});

app.get('/p10',function(req,res){
  res.render('p10',{qv:d10[itra.itr100],ans:b});});
 
app.get('/p11',function(req,res){
  res.render('p11',{qv:d11[itra.itr111],ans:b});});

  app.get('/p6n',function(req,res){
  //d6nc.push({w:daync,wd6:[],d7:{}});
    
    res.render('p6n',{n1:app.get('n1'),mycurrdate:daync,arr7:d6n.arr7,d7:d6n});});

  app.get('/p6cb',function(req,res){
  d6nc.push({w:daync,wd6:[],d7:{}});
    
    res.render('p6cb',{n1:app.get('n1'),mycurrdate:daync,d7:d6cb,g1:gom3a});});
    app.get('/p12',function(req,res){res.render('p12',{qv:d12[itra.itr12],ans:b});
    });
       


////////////////////////
/////////########################
/////post requests
//////////////////////

app.post('/',function(req,res){

  if(req.body.vcnom!=undefined && req.body.vccur!=undefined)
  { itra.itr1=req.body.vccur;

   itra.nom=req.body.vcnom;
app.set('n1',itra.nom);
  }

 var d0v=Array();
if(req.body.nom!=undefined)
{
app.set('n1',req.body.nom);
itra.nom=app.get('n1');
lo1=true;
}
c=0;
if(req.body.po1!=undefined)
c=req.body.po1;
for(i=1;i<=d0[c].toc.length;i++)
  d0v[i]="/../imgsdir/lessons/"+d0[c].title+"/Slide"+i+".PNG";

if(req.body.op1==2){
  v=d13[req.body.po2];
res.render('p13',{qv13:v,sewar:sewar1});
}
//dv2:d0v,
res.render('p0',{logged:lo1,op1:req.body.op1,n1:app.get('n1'),lessons:lessons});
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

  currjson=d1[itra.itr1].k;
  if(req.body.vcnom!=undefined && req.body.vccur!=undefined)
  { itra.itr1=req.body.vccur;

   itra.nom=req.body.vcnom;
app.set('n1',itra.nom);
  }
   

  if((req.body.btn11==d1[itra.itr1].r)||(req.body.btn12==d1[itra.itr1].r))
  {
    b=true;}
 else{
 b=false;
}
itra.itr1+=1;
if(itra.itr1>d1.length)itra.itr1=0;

calc11();

res.redirect('/p2vf');
});


app.post('/p2',function(req,res){
  currjson=d1[itra.itr1].k;
  if(req.body.word1==d2[itra.itr2].qtoken)
  {
    b=true;
    itra.itr2++;
    calc11();

    if(itra.itr2>d2.length)itra.itr2=0;
    res.render('p3',{qv:d2[itra.itr2],ans:b});
  }
  calc11();
if(req.body.nxt3!=undefined)
  res.render('p3',{qv:d2[itra.itr3],ans:b});
});


app.post('/p222',function(req,res){
cta="...";
request('https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/b165e08d-b8a2-43ab-8f4f-b5f3c12813b3/v1/recognize',{headers:"'Content-Type':'audio/flac'",body:"'apikey':'6ESutRjKk-GPrua4dKpMzyw-R6cYYIqtL_y5LS6BDKkI' ;'data-binary':req.body.prec2"},function(q,s)
{
  cta=JSON.parse(q.body.results)
  cta=cta[1].transcript;

if(s.body.results[1].transcript==d2[itra.itr2].qtoken)
{
  b=true;
  itra.itr2++;
  calc11();

  if(itra.itr2>d2.length)itra.itr2=0;
  res.redirect('/p3');
}
});//request()

calc11();
if(req.body.nxt3!=undefined)
res.redirect('/p3');

else req.render('/p222',{qv:d2[itra.itr2],ans:b,currt:cta});

});

app.post('/p3',function(req,res){
  currjson=d1[itra.itr1].k;
  if((req.body.c1==d3[itra.itr3].c)||(req.body.c2==d3[itra.itr3].c)||(req.body.c3==d3[itra.itr3].c)||(req.body.c4==d3[itra.itr3].c))
  {
    
    b=true;}
 else{
 b=false;
}
itra.itr3++;
    if(itra.itr3>d3.length)itra.itr3=0; 
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
    daync=n6.day6;
    d6nc.map(function(t,indx){if(t.w==n6.day6){t.wd6=n6;
      d6cbvv=t.wd6;
    }
      else {
  d6nc.push({w:n6.day6,wd6:n6,d7:{}});
  d6cbvv={};

}
    });
    
fs.writeFileSync('./assets/jsonfdir/j6nc.json',JSON.stringify(d6nc));
res.render('p6cb',{n1:app.get('n1'),mycurrdate:n6.day6,d7:d6cbvv,g1:gom3a});
});

app.post('/p6n',function(req,res){
  n7.req7=req.body.req7;
  n7.done7=req.body.done7;
  n7.arr7.push({error7:req.body.error7,alert7:req.body.alert7});
  d6nc.map(function(t,ind){if(t.w==daync)t.d7=n7;else 
    d6nc.push({w:daync,wd6:[],d7:n7});
  
  });
fs.writeFileSync('./assets/jsonfdir/j6nc.json',JSON.stringify(d6nc));
res.render('p6n',{n1:app.get('n1'),mycurrdate:daync,d7:n7,arr7:n7.arr7});
});

app.post('/p7',function(req,res){
  currjson=d1[itra.itr1].k;
  if(req.body.p1==d7[itra.itr7].ans)
    {
      b=true;

    }
    else 
{    b=false;

}   
itra.itr7+=1;

if(itra.itr7>=d7.length){itra.itr7=0;}  
calc11();

res.redirect('/p8');
});
  
app.post('/p8',function(req,res){
  currjson=d1[itra.itr1].k;

  if(req.body.sp8==d8[itra.itr8].q8)
{
  b=true;
}
 else 
{
  b=false;
} 
itra.itr8+=1;

if(itra.itr8>=d8.length)itra.itr8=0;
calc11();

res.redirect('/p9');
});
  
app.post('/p9',function(req,res){
  currjson=d1[itra.itr1].k;
  lq1=req.body.sp9;
if(lq1==d9[itra.itr9].ans)
{
  b=true;
}
 else 
{ 
  b=false;
} 
itra.itr9+=1;

if(itra.itr9>=d9.length)itra.itr9=0;
calc11();

res.redirect('/p10');
});



app.post('/p10',function(req,res){
  currjson=d1[itra.itr1].k;

  lq1=req.body.sp10;
  if(lq1==d10[itra.itr100].ans)
  {
    b=true;
      }    else
{ 

  b=false;

}   
itra.itr100+=1;

if(itra.itr100>d10.length)itra.itr100=0;

calc11();

res.redirect('/p11');
});

app.post('/p11',function(req,res){
  currjson=d1[itra.itr1].k;
  if(req.body.sp11==d11[itra.itr111].ans)
{ 
  b=true;
}
else 
  b=false;
  itra.itr111+=1;

  if(itra.itr111>d11.length)itra.itr111=0;
 calc11();
 res.redirect('/p12');
});
 
app.post('/p12',function(req,res){
  currjson=d1[itra.itr1].k;
  
  if(req.body.c1==d12[itra.itr12].c)
    {
      b=true;
    }
    else {
    b=false;}
    itra.itr12++;
    if(itra.itr12>d12.length)
      itra.itr12=0; 
      calc11();

      res.redirect('/p1');
  });
  app.listen(process.env.PORT || 5000);


//////////////////////////////////server go  
/////////////////////////fine
