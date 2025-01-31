import { privateKey } from './accounts/accounts.js';
import { Config } from './config/config.js';
import { COINENUM } from './src/core/coin/coin_enum.js';
import _0x43be5e from './src/core/core.js';
import { Helper } from './src/utils/helper.js';
import _0x2d9dc from './src/utils/logger.js';
async function operation(_0x514cec) {
  const _0x114a05 = new _0x43be5e(_0x514cec);
  try {
    await _0x114a05.getAccountInfo();
    await _0x114a05.getBalance(true);
    await _0x114a05.requestFaucet();
    const _0x348349 = _0x114a05.balance;
    const _0xd7256f = _0x348349.find(_0x16a7bd => _0x16a7bd.coinType === COINENUM.SUI);
    const _0x406074 = _0xd7256f ? _0xd7256f.totalBalance : 0x0;
    for (const _0x3f098c of new Array(Config.SWAPCOUNT)) {
      if (_0x406074 < Config.TXAMOUNTMAX) {
        throw Error("Min balance is " + Config.TXAMOUNTMAX + " SUI");
      }
      try {
        await _0x114a05.exSuiToWal();
        await _0x114a05.exWalToSui();
        _0x114a05.txCount += 0x1;
      } catch (_0x427b00) {
        console.log(_0x427b00);
      }
    }
    if (_0x406074 < Config.TXAMOUNTMAX) {
      throw Error("Min balance is " + Config.TXAMOUNTMAX + " SUI");
    }
    await _0x114a05.exSuiToWal();
    for (const _0x324af2 of Config.STAKENODEOPERATOR) {
      await _0x114a05.stakeWalToOperator(_0x324af2);
    }
    const _0x6ad12 = Config.DELAYINHOURS ?? 0x6;
    const _0x3a7deb = 0x36ee80 * _0x6ad12;
    await Helper.delay(_0x3a7deb, _0x514cec, "Account " + (privateKey.indexOf(_0x514cec) + 0x1) + " Processing Done, Delaying for " + Helper.msToTime(_0x3a7deb), _0x114a05);
    await operation(_0x514cec);
  } catch (_0x3de43e) {
    if (_0x3de43e.message) {
      await Helper.delay(0x2710, _0x514cec, "Error : " + _0x3de43e.message + ", Retry again after 10 Second", _0x114a05);
    } else {
      await Helper.delay(0x2710, _0x514cec, "Error :" + JSON.stringify(_0x3de43e) + ", Retry again after 10 Second", _0x114a05);
    }
    await operation(_0x514cec);
  }
}
async function startBot() {
  const _0x5d3e2c = {
    'yRCbG': function (_0x2c2669, _0x4110ac) {
      return _0x2c2669(_0x4110ac);
    },
    'TlttO': function (_0x41541c, _0x538897) {
      return _0x41541c !== _0x538897;
    },
    'CBrRa': function (_0x2431a0, _0x36a2ff) {
      return _0x2431a0 == _0x36a2ff;
    },
    'uNJHP': "DtGMZ",
    'hgYYe': function (_0x2a8c63, _0x53e99c) {
      return _0x2a8c63(_0x53e99c);
    },
    'fLyRS': function (_0x4462fd) {
      return _0x4462fd();
    },
    'mZJxT': "yiHuf"
  };
  return new Promise(async (_0x1464e0, _0x960991) => {
    try {
      _0x2d9dc.info("BOT STARTED");
      if (privateKey.length == 0x0) {
        throw Error("Please input your account first on accounts.js file");
      }
      const _0x2e7d84 = [];
      for (const _0x50e57f of privateKey) {
        _0x2e7d84.push(operation(_0x50e57f));
      }
      await Promise.all(_0x2e7d84);
      _0x1464e0();
    } catch (_0xd23969) {
      _0x2d9dc.info("BOT STOPPED");
      _0x2d9dc.error(JSON.stringify(_0xd23969));
      _0x960991(_0xd23969);
    }
  });
}
(async () => {
  const _0x49bb98 = {
    'LVXOQ': function (_0xaaf8a7) {
      return _0xaaf8a7();
    },
    'lHQGr': '',
    'QXxvA': '',
    'DGyup': function (_0x4fa1a4, _0x5096f7) {
      return _0x4fa1a4 < _0x5096f7;
    },
    'eXoXK': function (_0x195356, _0x3eab17) {
      return _0x195356(_0x3eab17);
    },
    'qpCdR': "WALRUS TESTNET BOT",
    'oBEwj': "Author : Nofan Rambe",
    'zhtrM': "Error During executing bot"
  };
  try {
    _0x2d9dc.clear();
    _0x2d9dc.info('');
    _0x2d9dc.info("Application Started");
    console.log();
    console.log("WALRUS TESTNET BOT");
    console.log("Author : Nofan Rambe");
    console.log("Welcome & Enjoy Sir!");
    console.log();
    console.log();
    if (privateKey.length < 0x1) {
      throw Error("Please set up accounts.js first");
    }
    await startBot();
  } catch (_0x44b167) {
    console.log("Error During executing bot", _0x44b167);
    throw _0x44b167;
  }
})();
