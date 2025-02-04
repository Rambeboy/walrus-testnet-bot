import { Twisters } from 'twisters';
import _0x245f7f from './logger.js';
import _0x32651b from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import '../core/network/rpc.js';
import { Config } from '../../config/config.js';
import { COINENUM } from '../core/coin/coin_enum.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x4aea88 = '', _0x3d8fdf = '', _0x4e3fee = new _0x32651b(), _0x3d5894) {
    const _0x5a1c1c = privateKey.indexOf(_0x3d8fdf);
    if (_0x3d5894 == undefined) {
      _0x245f7f.info("Account " + (_0x5a1c1c + 0x1) + " - " + _0x4aea88);
      _0x3d5894 = '-';
    }
    const _0x141207 = _0x4e3fee.address ?? '-';
    const _0x1b5050 = _0x4e3fee.balance ?? [];
    const _0x114053 = _0x1b5050.find(_0x55a1e6 => _0x55a1e6.coinType === COINENUM.SUI);
    const _0xb764b7 = (_0x114053 ? _0x114053.totalBalance : '?') + " SUI";
    const _0x5edaa0 = _0x1b5050.find(_0xda4f81 => _0xda4f81.coinType === COINENUM.WAL);
    const _0x1072ce = (_0x5edaa0 ? _0x5edaa0.totalBalance : '?') + " WAL";
    this.twisters.put(_0x3d8fdf, {
      'text': "\n================== Account " + (_0x5a1c1c + 0x1) + " =================\nAddress      : " + _0x141207 + "\nBalance      : - " + _0xb764b7 + "\n               - " + _0x1072ce + "\nSWAP Count   : " + (_0x4e3fee.txCount ?? 0x0) + " / " + Config.SWAPCOUNT + " " + (_0x4e3fee.txCount ?? 0x0 == Config.SWAPCOUNT ? 'Finished' : '') + "\n               \nStatus : " + _0x4aea88 + " \nBuffer : " + _0x3d5894 + " \n=============================================="
    });
  }
  ["info"](_0x1e451d = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x1e451d + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ['clear'](_0x3d3307) {
    this.twisters.remove(_0x3d3307);
  }
}
export default new Twist();
