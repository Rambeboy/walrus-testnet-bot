import { Twisters } from 'twisters';
import _0x3adc67 from './logger.js';
import _0x390448 from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import '../core/network/rpc.js';
import { Config } from '../../config/config.js';
import { COINENUM } from '../core/coin/coin_enum.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0xc0be15 = '', _0x5cb105 = '', _0x49413c = new _0x390448(), _0x402981) {
    const _0x119f02 = privateKey.indexOf(_0x5cb105);
    if (_0x402981 == undefined) {
      _0x3adc67.info("Account " + (_0x119f02 + 0x1) + " - " + _0xc0be15);
      _0x402981 = '-';
    }
    const _0xbc9879 = _0x49413c.address ?? '-';
    const _0x4e5da4 = _0x49413c.balance ?? [];
    const _0x37e114 = _0x4e5da4.find(_0x13e336 => _0x13e336.coinType === COINENUM.SUI);
    const _0x50dff2 = (_0x37e114 ? _0x37e114.totalBalance : '?') + " SUI";
    const _0x6c53ae = _0x4e5da4.find(_0xa323f1 => _0xa323f1.coinType === COINENUM.WAL);
    const _0x3e9a3f = (_0x6c53ae ? _0x6c53ae.totalBalance : '?') + " WAL";
    this.twisters.put(_0x5cb105, {
      'text': "\n================== Account " + (_0x119f02 + 0x1) + " =================\nAddress      : " + _0xbc9879 + "\nBalance      : - " + _0x50dff2 + "\n               - " + _0x3e9a3f + "\nSWAP Count   : " + (_0x49413c.txCount ?? 0x0) + " / " + Config.SWAPCOUNT + " " + (_0x49413c.txCount ?? 0x0 == Config.SWAPCOUNT ? "Finished" : '') + "\n              \nStatus : " + _0xc0be15 + "  \nDelay  : " + _0x402981 + "\n=============================================="
    });
  }
  ["info"](_0x580ae9 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x580ae9 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ['clear'](_0x2d4f3a) {
    this.twisters.remove(_0x2d4f3a);
  }
}
export default new Twist();
