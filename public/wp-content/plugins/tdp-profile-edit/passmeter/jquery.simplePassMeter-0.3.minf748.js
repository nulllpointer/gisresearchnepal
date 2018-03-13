;(function($){$.fn.simplePassMeter=function(o){var n=this;if(n.length<1){return n;}
o=(o)?o:{};o=audit($.extend({},$.fn.simplePassMeter.defaults,o));n.each(function(){if(this.tagName.toLowerCase()=='input'&&this.type=='password'){setup(this,o);}});}
var audit=function(o){var d=$.fn.simplePassMeter.defaults;o.showOnFocus=!!o.showOnFocus;o.showOnValue=!!o.showOnValue;o.location=($.inArray(o.location,['t','r','b','l'])<0)?d.location:o.location;o.offset=(Number(o.offset))?Number(o.offset):d.offset;var c=o.container;c=(c)?$(c):null;o.container=(c&&c.length)?c:null;var rq=o.requirements;if(!rq){rq=d.requirements;}else{for(var k in rq){if(!d.requirements[k]){if(typeof rq[k].value=='undefined'||typeof rq[k].message!='string'||(typeof rq[k].regex!='string'&&!$.isFunction(rq[k].callback))){rq[k]=null;continue;}else{continue;}}
if(typeof rq[k].value=='undefined'){rq[k].value=d.requirements[k].value;}
if(typeof rq[k].message!='string'){rq[k].message=d.requirements[k].message;}
if(typeof rq[k].regex!='string'&&d.requirements[k].regex){rq[k].regex=d.requirements[k].regex;}
if(!$.isFunction(rq[k].callback)&&d.requirements[k].callback){rq[k].callback=d.requirements[k].callback;}
if(k=='minLength'){if(!Number(rq[k].value)||rq[k].value<1){rq[k].value=d.requirements[k].value;}}}}
if(rq['matchField']){$(rq['matchField'].value).bind('keyup.simplePassMeterMatch',function(){$(this).attr('active','true').unbind('keyup.simplePassMeterMatch');});}
if(!o.ratings||!o.ratings.length){o.ratings=d.ratings;}else{var ps=0;for(var i=0,l=o.ratings.length;i<l;++i){if((!Number(o.ratings[i].minScore)&&o.ratings[i].minScore!==0)||o.ratings[i].minScore<ps){o.ratings=d.ratings;break;}
ps=o.ratings[i].minScore;if(!o.ratings[i].className){o.ratings[i].className='good';}
if(!o.ratings[i].text){o.ratings[i].text='Good';}}}
return o;}
function setup(n,o){n=$(n);if(n.attr('id').length<1){n.attr('id','simplePassMeter_'+(++$.fn.simplePassMeter.uid));}
n.addClass('simplePassMeterInput');var base=n.attr('id');$('body').append("<div id='"+base+"_simplePassMeter' class='simplePassMeter' aria-controlled>"+"<p><span class='simplePassMeterIcon'></span><span class='simplePassMeterText'></span></p>"+"<div class='simplePassMeterBar'><div class='simplePassMeterProgress'></div></div>"+"</div>");n.attr('aria-controls',base+'_simplePassMeter');var b=$('#'+base+'_simplePassMeter').css('padding-bottom','8px');if(o.container){console.debug(o.container);o.container.append(b);b.css('position','relative');}else{b.css('position','absolute');reposition(n,b,o);}
var m=b.find('.simplePassMeterBar').css({'position':'absolute','bottom':'0.15em','left':'5px','height':'5px','width':'95%'});var mp=m.find('.simplePassMeterProgress').css({'height':'5px','width':'0%'});n.bind('keyup.simplePassMeter',function(){n.attr('active','true');testPass(n,b,o);});if(o.showOnFocus){b.hide();n.bind('focus.simplePassMeter',function(){b.show();}).bind('blur.simplePassMeter',function(){b.hide();});}
if(o.showOnValue){n.bind('keyup.simplePassMeter',function(){if(this.value.length<1){b.hide();}else{b.show();}});n.trigger('keyup.simplePassMeter');}
$.each(o.requirements,function(key,req){if(/.+Field$/.test(key)){var f=$(req.value);if(f.length==1){f.bind('keyup.simplePassMeter',function(){testPass(n,b,o);});}}});if(!o.container){$(window).resize(function(){reposition(n,b,o);});}
reset(b,o);}
function reposition(n,box,o){var t,b,r,l,ielr;t=b=l=r='auto';ielr=(document.all)?2:0;var pos=n.offset();var pl=pos.left;var pt=pos.top;if(o.location=='t'){l=pl+'px';t=(pt-box.height()-10-o.offset)+'px';}else if(o.location=='b'){l=pl+'px';t=(pt+n.height()+7+o.offset)+'px';}else if(o.location=='l'){r=($('body').width()-pl+o.offset)+'px';t=pt+'px';}else{l=(pl+n.width()+4+ielr+o.offset)+'px';t=pt+'px';}
box.css({'top':t,'right':r,'bottom':b,'left':l});}
function testPass(n,b,o){var p=n.val();if(p.length<1){reset(b,o);n.trigger('score.simplePassMeter',[0]);return;}
var s=0;var m='';var re,rm;for(var k in o.requirements){if(o.requirements[k]&&o.requirements[k].value){if(o.requirements[k].regex&&o.requirements[k].regex.length>0){re=new RegExp(o.requirements[k].regex);if(!re.test(p)){if(m.length>0){m+='<br />';}
m+=o.requirements[k].message.replace('%V',o.requirements[k].value);}}else if(o.requirements[k].callback&&$.isFunction(o.requirements[k].callback)){if(!o.requirements[k].callback(p,o.requirements[k].value)){if(m.length>0){m+='<br />';}
m+=o.requirements[k].message.replace('%V',o.requirements[k].value);}}}}
var c;for(var t in strength){s+=strength[t](p);}
s=Math.min(Math.round(s),100);setMeterUI(b,s,o,(m.length>0)?m:null);n.trigger('score.simplePassMeter',[s]);}
var strength={'testNumChars':function(p){return(p.length*4);},'testUpper':function(p){var m=p.match(/[A-Z]/g);if(m){return((p.length-m.length)*3);}
return 0;},'testLower':function(p){var m=p.match(/[a-z]/g);if(m){return((p.length-m.length)*3);}
return 0;},'testLettersOnly':function(p){if(/^[a-zA-Z]$/.test(p)){return p.length*-1;}
return 0;},'testNumbers':function(p){var m=p.match(/[0-9]/g);if(m){return(m.length*5);}
return 0;},'testNumbersOnly':function(p){if(/^[0-9]$/.test(p)){return p.length*-1;}
return 0;},'testSpecial':function(p){var m=p.match(/[^a-zA-Z0-9]/g);if(m){return(m.length*6.5);}
return 0;},'testSequentialAndConsecutive':function(p){var m=[];var ch=p.split('');var hl='',hn='',hsl='',hsn='';var cn,ln,lli,cli;for(var i=0,l=ch.length;i<l;++i){cn=Number(ch[i]);if(cn){if(hl.length>0){m.push(hl);}
if(hsl.length>2){m.push(hsl);}
hl=hsl='';hn+=cn;if(hsn.length==0){hsn+=cn;}else{ln=Number(hsn.substr(hsn.length-1));if(cn==(ln+1)||cn==(ln-1)){hsn+=cn;}}}else{if(hn.length>0){m.push(hn);}
if(hsn.length>2){m.push(hsn);}
hn=hsn='';hl+=ch[i];if(hsl.length==0){hsl+=ch[i];}else{lli=letters.indexOf(hsn.substr(hsn.length-1));cli=letters.indexOf(ch[i]);if(cli==(lli+1)){hsl+=ch[i];}}}}
if(hn.length>0){m.push(hn);}
if(hl.length>0){m.push(hl);}
var c=0;for(var i=0,l=m.length;i<l;++i){c-=((m[i].length-1)*2);}
return c;},'testRepeat':function(p){var c=0;var m=p.match(/(.)\1+/g);if(m){for(var i=0,l=m.length;i<l;++i){c-=((m[i].length-1)*m[i].length);}}
return c;}};var letters="abcdefghijklmnopqrstuvwxyz";function reset(b,o){var c='';for(var i=0,l=o.ratings.length;i<l;++i){c+=o.ratings[i].className+' ';}
b.removeClass(c).find('.simplePassMeterProgress').css('width','0%').end().find('.simplePassMeterText').text('Password Strength');}
function setMeterUI(b,pct,o,m){pct=(Number(pct))?pct:0;pct=Math.min(Math.max(pct,0),100);m=(typeof m=='string')?m:null;b.find('.simplePassMeterProgress').css('width',pct+'%');var c='';var r=0;for(var i=0,l=o.ratings.length;i<l;++i){c+=o.ratings[i].className+' ';if(pct>=o.ratings[i].minScore){r=i;}}
b.removeClass(c);if(!m){b.addClass(o.ratings[r].className);}else{b.addClass(o.ratings[0].className);}
b.find('.simplePassMeterText').html(((m)?m:o.ratings[r].text));}
$.fn.simplePassMeter.uid=0;$.fn.simplePassMeter.defaults={'showOnFocus':false,'showOnValue':false,'location':'r','offset':3,'container':null,'requirements':{'minLength':{'value':8,'callback':function(p,v){p=''+p;if(p.length>=v){return true;}
return false;},'message':'Passwords need to be %V characters or more'},'noMatchField':{'value':null,'callback':function(p,v){v=$(v);if(v.length!=1||p.indexOf(v.val())<0){return true;}
return false;},'message':'Your password cannot contain your username'},'matchField':{'value':null,'callback':function(p,v){v=$(v);var m=v.val();var d=(v.attr('active')||(m&&m.length>1))?1:0;if(d&&m!=p){return false;}
return true;},'message':'The two passwords you entered don\'t match'},'letters':{'value':true,'regex':'[a-zA-Z]+','message':'You must have at least one letter'},'numbers':{'value':true,'regex':'[0-9]+','message':'You must have at least one number'},'lower':{'value':false,'regex':'[a-z]+','message':'You must have at least one lower case letter'},'upper':{'value':false,'regex':'[A-Z]+','message':'You must have at least one upper case letter'},'special':{'value':false,'regex':'[^a-zA-Z0-9]+','message':'You must have at least one special character'}},'ratings':[{'minScore':0,'className':'meterFail','text':'You need a stronger password'},{'minScore':25,'className':'meterWarn','text':'Your password is a bit weak'},{'minScore':50,'className':'meterGood','text':'Your password is good'},{'minScore':75,'className':'meterExcel','text':'Great password!'}]};})(jQuery);