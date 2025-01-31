import { Twisters } from 'twisters';
import a7_0x9a0838 from './logger.js';
import a7_0x566f1a from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import '../core/network/rpc.js';
import { Config } from '../../config/config.js';
import { COINENUM } from '../core/coin/coin_enum.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x4150f2 = '', _0x34b1ea = '', _0x1cabbd = new a7_0x566f1a(), _0xf430) {
    const _0x30c86c = privateKey.indexOf(_0x34b1ea);
    if (_0xf430 == undefined) {
      a7_0x9a0838.info("Account " + (_0x30c86c + 0x1) + " - " + _0x4150f2);
      _0xf430 = '-';
    }
    const _0x344d9b = _0x1cabbd.address ?? '-';
    const _0x1c64b7 = _0x1cabbd.balance ?? [];
    const _0x545bf8 = _0x1c64b7.find(_0x36190d => _0x36190d.coinType === COINENUM.SUI);
    const _0x58ed1f = (_0x545bf8 ? _0x545bf8.totalBalance : '?') + " SUI";
    const _0x54faab = _0x1c64b7.find(_0x1808ca => _0x1808ca.coinType === COINENUM.WAL);
    const _0x49ea0f = (_0x54faab ? _0x54faab.totalBalance : '?') + " WAL";
    this.twisters.put(_0x34b1ea, {
      'text': "\n================== Account " + (_0x30c86c + 0x1) + " =================\nAddress      : " + _0x344d9b + "\nBalance      : - " + _0x58ed1f + "\n               - " + _0x49ea0f + "\nSWAP Count   : " + (_0x1cabbd.txCount ?? 0x0) + " / " + Config.SWAPCOUNT + " " + (_0x1cabbd.txCount ?? 0x0 == Config.SWAPCOUNT ? 'Finished' : '') + "\n               \nStatus : " + _0x4150f2 + " \nDelay  : " + _0xf430 + "\n============================================"
    });
  }
  ['info'](_0x2c7b27 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x2c7b27 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ['clear'](_0x5e4ac1) {
    this.twisters.remove(_0x5e4ac1);
  }
}
export default new Twist();
