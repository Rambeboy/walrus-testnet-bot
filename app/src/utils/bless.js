const _0x163a76=_0x2027;(function(_0x27025a,_0x3afb53){const _0x5daf8b=_0x2027,_0x451676=_0x27025a();while(!![]){try{const _0x236984=-parseInt(_0x5daf8b(0x162))/0x1+-parseInt(_0x5daf8b(0x16a))/0x2+-parseInt(_0x5daf8b(0x15f))/0x3+parseInt(_0x5daf8b(0x1a2))/0x4*(parseInt(_0x5daf8b(0x16f))/0x5)+parseInt(_0x5daf8b(0x174))/0x6*(parseInt(_0x5daf8b(0x17d))/0x7)+parseInt(_0x5daf8b(0x18d))/0x8+-parseInt(_0x5daf8b(0x169))/0x9*(-parseInt(_0x5daf8b(0x163))/0xa);if(_0x236984===_0x3afb53)break;else _0x451676['push'](_0x451676['shift']());}catch(_0x5ce807){_0x451676['push'](_0x451676['shift']());}}}(_0x3034,0x94cb3));import _0x29656b from'blessed';import _0x2aa9c4 from'./logger.js';import _0x4bb882 from'../core/core.js';function _0x3034(){const _0x59f0b9=['\x20/\x20','screen','10aupNRL','SWAPCOUNT','center','createAccountTab','forEach','894bObRYF','\x20Account\x20','{blue-fg}{bold}\x20Account\x20','100%','key','setContent','shrink','tabList','title','18284hMrtZf','infoBox','push','WAL','line','\x20SUI','{/center}\x0a','renderTabList','name','\x0aAddress\x20\x20\x20\x20\x20\x20:\x20','currentTabIndex','show','NOFAN\x20RAMBE','subTitle','indexOf','SUI','6483416UgWQeP','box','\x0aSWAP\x20Count\x20\x20\x20:\x20','tabs','Account\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x20','switchTab','find','append','left','\x0aDelay\x20:\x20','{/center}','render','{center}','hintBox','txCount','\x20{/bold}{/blue-fg}\x20','titleBox','Finished','info','address','1390104qAUytW','length','1947309PyvRte','coinType','\x0a{center}Info:\x20','332876dAFiHP','3728150hVyLrJ','{center}WALRUS\x20TX\x20BOT{/center}','#f0f0f0','\x20-\x20','white','hide','9VRLLGe','1352088waDoOq','right','exit'];_0x3034=function(){return _0x59f0b9;};return _0x3034();}import{privateKey}from'../../accounts/accounts.js';import{COINENUM}from'../core/coin/coin_enum.js';import{Config}from'../../config/config.js';function _0x2027(_0x33ef02,_0xbc83f7){const _0x303468=_0x3034();return _0x2027=function(_0x20279b,_0x3f97e7){_0x20279b=_0x20279b-0x15f;let _0x29ed29=_0x303468[_0x20279b];return _0x29ed29;},_0x2027(_0x33ef02,_0xbc83f7);}export class Bless{constructor(){const _0x26b86e=_0x2027;this[_0x26b86e(0x16e)]=_0x29656b[_0x26b86e(0x16e)]({'smartCSR':!![]}),this[_0x26b86e(0x16e)][_0x26b86e(0x17c)]=_0x26b86e(0x189),this[_0x26b86e(0x19e)]=_0x29656b['box']({'top':0x0,'left':_0x26b86e(0x171),'width':_0x26b86e(0x17a),'height':0x2,'tags':!![],'content':_0x26b86e(0x164),'style':{'fg':_0x26b86e(0x167),'bold':!![]}}),this['screen'][_0x26b86e(0x195)](this[_0x26b86e(0x19e)]),this['subTitle']=_0x29656b[_0x26b86e(0x18e)]({'top':0x1,'left':'center','width':_0x26b86e(0x17a),'height':0x2,'tags':!![],'content':'Author\x20:\x20Nofan\x20Rambe','style':{'fg':'white','bold':!![]}}),this[_0x26b86e(0x16e)][_0x26b86e(0x195)](this[_0x26b86e(0x18a)]),this['tabList']=_0x29656b['box']({'top':0x5,'left':_0x26b86e(0x171),'width':'100%','height':0x3,'tags':!![],'style':{'fg':'white'}}),this[_0x26b86e(0x16e)][_0x26b86e(0x195)](this['tabList']),this[_0x26b86e(0x19b)]=_0x29656b[_0x26b86e(0x18e)]({'bottom':0x0,'left':_0x26b86e(0x171),'width':_0x26b86e(0x177),'height':0x3,'tags':!![],'content':'{center}Use\x20\x27->\x27(arrow\x20right)\x20and\x20\x27<-\x27(arrow\x20left)\x20to\x20switch\x20between\x20tabs{/center}','style':{'fg':_0x26b86e(0x167)}}),this[_0x26b86e(0x16e)][_0x26b86e(0x195)](this['hintBox']),this[_0x26b86e(0x17e)]=_0x29656b[_0x26b86e(0x18e)]({'bottom':0x3,'left':_0x26b86e(0x171),'width':_0x26b86e(0x177),'height':0x3,'tags':!![],'content':'','style':{'fg':_0x26b86e(0x167)}}),this[_0x26b86e(0x16e)][_0x26b86e(0x195)](this[_0x26b86e(0x17e)]),this[_0x26b86e(0x190)]=[],this[_0x26b86e(0x187)]=0x0,privateKey[_0x26b86e(0x173)]((_0x459c42,_0x4826a9)=>{const _0x3ef4cb=_0x26b86e,_0x4e901a=this[_0x3ef4cb(0x172)](_0x3ef4cb(0x191)+(_0x4826a9+0x1));this[_0x3ef4cb(0x190)][_0x3ef4cb(0x17f)](_0x4e901a),this['screen'][_0x3ef4cb(0x195)](_0x4e901a),_0x4e901a['hide']();}),this[_0x26b86e(0x190)]['length']>0x0&&this[_0x26b86e(0x190)][0x0][_0x26b86e(0x188)](),this[_0x26b86e(0x184)](),this['screen'][_0x26b86e(0x178)](['q','C-c'],()=>{const _0x1a7c4b=_0x26b86e;return process[_0x1a7c4b(0x16c)](0x0);}),this[_0x26b86e(0x16e)]['key']([_0x26b86e(0x196),_0x26b86e(0x16b)],(_0x3692ba,_0x20ad02)=>{const _0xc5645b=_0x26b86e;if(_0x20ad02['name']===_0xc5645b(0x16b))this[_0xc5645b(0x193)]((this[_0xc5645b(0x187)]+0x1)%this[_0xc5645b(0x190)][_0xc5645b(0x1a3)]);else _0x20ad02[_0xc5645b(0x185)]===_0xc5645b(0x196)&&this[_0xc5645b(0x193)]((this[_0xc5645b(0x187)]-0x1+this[_0xc5645b(0x190)]['length'])%this[_0xc5645b(0x190)][_0xc5645b(0x1a3)]);}),this[_0x26b86e(0x16e)]['render']();}['createAccountTab'](_0x29e29b){const _0x4e0ba2=_0x2027;return _0x29656b[_0x4e0ba2(0x18e)]({'label':_0x29e29b,'top':0x6,'left':0x0,'width':_0x4e0ba2(0x177),'height':'shrink','border':{'type':_0x4e0ba2(0x181)},'style':{'fg':_0x4e0ba2(0x167),'border':{'fg':_0x4e0ba2(0x165)}},'tags':!![]});}[_0x163a76(0x184)](){const _0x5b7807=_0x163a76;let _0xbab91b='';privateKey[_0x5b7807(0x173)]((_0x534d7e,_0x4bef93)=>{const _0x247496=_0x5b7807;_0x4bef93===this[_0x247496(0x187)]?_0xbab91b+=_0x247496(0x176)+(_0x4bef93+0x1)+_0x247496(0x19d):_0xbab91b+=_0x247496(0x175)+(_0x4bef93+0x1)+'\x20';}),this[_0x5b7807(0x17b)][_0x5b7807(0x179)](_0x5b7807(0x19a)+_0xbab91b+_0x5b7807(0x198)),this[_0x5b7807(0x16e)][_0x5b7807(0x199)]();}['switchTab'](_0x561011){const _0x5d5b8c=_0x163a76;this[_0x5d5b8c(0x190)][this[_0x5d5b8c(0x187)]][_0x5d5b8c(0x168)](),this[_0x5d5b8c(0x187)]=_0x561011,this[_0x5d5b8c(0x190)][this[_0x5d5b8c(0x187)]]['show'](),this['renderTabList'](),this[_0x5d5b8c(0x16e)][_0x5d5b8c(0x199)]();}['log'](_0x45afe5='',_0x192ee6='',_0x156584=new _0x4bb882(),_0x19f80c){const _0x3ddedc=_0x163a76,_0x3bd7c3=privateKey[_0x3ddedc(0x194)](_0x333fa2=>_0x333fa2==_0x192ee6),_0x795bbe=privateKey[_0x3ddedc(0x18b)](_0x3bd7c3);_0x19f80c===undefined&&(_0x2aa9c4[_0x3ddedc(0x1a0)](_0x3ddedc(0x191)+(_0x795bbe+0x1)+_0x3ddedc(0x166)+_0x45afe5),_0x19f80c='-');const _0xa36957=_0x156584[_0x3ddedc(0x1a1)]??'-',_0x58e4=_0x156584['balance']??[],_0x540e1f=_0x58e4[_0x3ddedc(0x194)](_0x4beeb7=>_0x4beeb7['coinType']===COINENUM[_0x3ddedc(0x18c)]),_0x1d5ada=(_0x540e1f?_0x540e1f['totalBalance']:'?')+_0x3ddedc(0x182),_0xec4bc3=_0x58e4['find'](_0x4bd484=>_0x4bd484[_0x3ddedc(0x160)]===COINENUM[_0x3ddedc(0x180)]),_0x46f004=(_0xec4bc3?_0xec4bc3['totalBalance']:'?')+'\x20WAL',_0x21a444=_0x3ddedc(0x186)+_0xa36957+'\x0aBalance\x20\x20\x20\x20\x20\x20:\x20-\x20'+_0x1d5ada+_0x3ddedc(0x192)+_0x46f004+_0x3ddedc(0x18f)+(_0x156584[_0x3ddedc(0x19c)]??0x0)+_0x3ddedc(0x16d)+Config[_0x3ddedc(0x170)]+'\x20'+(_0x156584[_0x3ddedc(0x19c)]??0x0==Config[_0x3ddedc(0x170)]?_0x3ddedc(0x19f):'')+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aStatus\x20:\x20'+_0x45afe5+_0x3ddedc(0x197)+_0x19f80c;this[_0x3ddedc(0x190)][_0x795bbe]['setContent'](_0x21a444),this[_0x3ddedc(0x16e)][_0x3ddedc(0x199)]();}['info'](_0x180263=''){const _0x5dae36=_0x163a76,_0x223ad6=_0x5dae36(0x161)+_0x180263+_0x5dae36(0x183);this['infoBox']['setContent'](_0x223ad6),this['screen'][_0x5dae36(0x199)]();}['clearInfo'](){const _0x2821da=_0x163a76;this[_0x2821da(0x17e)][_0x2821da(0x179)](''),this['screen'][_0x2821da(0x199)]();}}
