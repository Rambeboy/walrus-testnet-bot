(function(_0x2324ba,_0x2a0f15){const _0x334318=_0x1e64,_0x529a0d=_0x2324ba();while(!![]){try{const _0x188b58=-parseInt(_0x334318(0x1d7))/0x1+-parseInt(_0x334318(0x1db))/0x2*(-parseInt(_0x334318(0x1e1))/0x3)+parseInt(_0x334318(0x1c0))/0x4+-parseInt(_0x334318(0x1d2))/0x5*(-parseInt(_0x334318(0x1ce))/0x6)+-parseInt(_0x334318(0x1dc))/0x7+parseInt(_0x334318(0x1e5))/0x8+parseInt(_0x334318(0x1d1))/0x9*(-parseInt(_0x334318(0x1d9))/0xa);if(_0x188b58===_0x2a0f15)break;else _0x529a0d['push'](_0x529a0d['shift']());}catch(_0xc5b9bd){_0x529a0d['push'](_0x529a0d['shift']());}}}(_0x7904,0x5a18d));import{privateKey}from'./accounts/accounts.js';import{Config}from'./config/config.js';import{COINENUM}from'./src/core/coin/coin_enum.js';import _0x49158b from'./src/core/core.js';import{Helper}from'./src/utils/helper.js';function _0x1e64(_0x162393,_0x230027){const _0x7904a3=_0x7904();return _0x1e64=function(_0x1e6487,_0x1383db){_0x1e6487=_0x1e6487-0x1be;let _0xaae549=_0x7904a3[_0x1e6487];return _0xaae549;},_0x1e64(_0x162393,_0x230027);}function _0x7904(){const _0x275756=['exWalToSui','Author\x20:\x20Nofan\x20Rambe','112823ItBQkP','find','1165810DxArty','SWAPCOUNT','723332yXShgI','4968481ESgPJE','requestFaucet','coinType','getAccountInfo','\x20SUI','6yqXrgi','exSuiToWal','Error\x20During\x20executing\x20bot','\x20Processing\x20Done,\x20Delaying\x20for\x20','2569664JOmLln','length','error','log','all','stringify','balance','TXAMOUNTMAX','msToTime','39732IXpIRg','Welcome\x20&\x20Enjoy\x20Sir!','Error\x20:','Please\x20set\x20up\x20accounts.js\x20first','Min\x20balance\x20is\x20','WALRUS\x20TESTNET\x20BOT','info','uPsMZ','Please\x20input\x20your\x20account\x20first\x20on\x20accounts.js\x20file','BOT\x20STOPPED','Error\x20:\x20',',\x20Retry\x20again\x20after\x2010\x20Second','getBalance','txCount','4572wPfRYj','Application\x20Started','message','18BuzWgq','2430eJhbfQ','BOT\x20STARTED','SUI'];_0x7904=function(){return _0x275756;};return _0x7904();}import _0x28f817 from'./src/utils/logger.js';async function operation(_0x27716e){const _0x5a6752=_0x1e64,_0xa959ed=new _0x49158b(_0x27716e);try{await _0xa959ed[_0x5a6752(0x1df)](),await _0xa959ed[_0x5a6752(0x1cc)](!![]),await _0xa959ed[_0x5a6752(0x1dd)]();const _0x462dc0=_0xa959ed[_0x5a6752(0x1eb)],_0x122389=_0x462dc0[_0x5a6752(0x1d8)](_0x115f88=>_0x115f88[_0x5a6752(0x1de)]===COINENUM[_0x5a6752(0x1d4)]),_0x12292b=_0x122389?_0x122389['totalBalance']:0x0;for(const _0x53cefa of new Array(Config[_0x5a6752(0x1da)])){if(_0x12292b<Config['TXAMOUNTMAX'])throw Error(_0x5a6752(0x1c4)+Config[_0x5a6752(0x1be)]+'\x20SUI');try{await _0xa959ed['exSuiToWal'](),await _0xa959ed[_0x5a6752(0x1d5)](),_0xa959ed[_0x5a6752(0x1cd)]+=0x1;}catch(_0x118441){console[_0x5a6752(0x1e8)](_0x118441);}}if(_0x12292b<Config[_0x5a6752(0x1be)])throw Error(_0x5a6752(0x1c4)+Config[_0x5a6752(0x1be)]+_0x5a6752(0x1e0));await _0xa959ed[_0x5a6752(0x1e2)]();for(const _0x45eed0 of Config['STAKENODEOPERATOR']){await _0xa959ed['stakeWalToOperator'](_0x45eed0);}const _0x1401c5=Config['DELAYINHOURS']??0x6,_0x1ccc53=0x36ee80*_0x1401c5;await Helper['delay'](_0x1ccc53,_0x27716e,'Account\x20'+(privateKey['indexOf'](_0x27716e)+0x1)+_0x5a6752(0x1e4)+Helper[_0x5a6752(0x1bf)](_0x1ccc53),_0xa959ed),await operation(_0x27716e);}catch(_0x12fdce){_0x12fdce[_0x5a6752(0x1d0)]?await Helper['delay'](0x2710,_0x27716e,_0x5a6752(0x1ca)+_0x12fdce['message']+_0x5a6752(0x1cb),_0xa959ed):await Helper['delay'](0x2710,_0x27716e,_0x5a6752(0x1c2)+JSON['stringify'](_0x12fdce)+_0x5a6752(0x1cb),_0xa959ed),await operation(_0x27716e);}}async function startBot(){const _0x4754bb=_0x1e64,_0x563d72={'asZyv':_0x4754bb(0x1c7),'SvRiE':function(_0x27180d,_0x58c488){return _0x27180d(_0x58c488);}};return new Promise(async(_0x47b4c6,_0x306524)=>{const _0x44fd94=_0x4754bb;try{_0x28f817[_0x44fd94(0x1c6)](_0x44fd94(0x1d3));if(privateKey[_0x44fd94(0x1e6)]==0x0)throw Error(_0x44fd94(0x1c8));const _0x6cade7=[];for(const _0x132fa9 of privateKey){_0x6cade7['push'](operation(_0x132fa9));}await Promise[_0x44fd94(0x1e9)](_0x6cade7),_0x47b4c6();}catch(_0x17a362){_0x28f817[_0x44fd94(0x1c6)](_0x44fd94(0x1c9)),_0x28f817[_0x44fd94(0x1e7)](JSON[_0x44fd94(0x1ea)](_0x17a362)),_0x306524(_0x17a362);}});}((async()=>{const _0x1051f2=_0x1e64,_0x2c87c3={'LwExP':_0x1051f2(0x1cf),'KmQYo':function(_0xc55eb5,_0x518fff){return _0xc55eb5<_0x518fff;},'gUxTK':function(_0x418a59,_0x23bb1f){return _0x418a59(_0x23bb1f);},'glJRb':function(_0x1c954b){return _0x1c954b();},'VAFBW':'Error\x20During\x20executing\x20bot'};try{_0x28f817['clear'](),_0x28f817[_0x1051f2(0x1c6)](''),_0x28f817['info']('Application\x20Started'),console[_0x1051f2(0x1e8)](),console[_0x1051f2(0x1e8)](_0x1051f2(0x1c5)),console[_0x1051f2(0x1e8)](_0x1051f2(0x1d6)),console[_0x1051f2(0x1e8)](_0x1051f2(0x1c1));if(privateKey[_0x1051f2(0x1e6)]<0x1)throw Error(_0x1051f2(0x1c3));await startBot();}catch(_0x3f2612){console[_0x1051f2(0x1e8)](_0x1051f2(0x1e3),_0x3f2612);throw _0x3f2612;}})());
