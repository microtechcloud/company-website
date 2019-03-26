var _0x197d = [
    'IhcFJ',
    'addEventListener',
    'preventDefault',
    'log',
    'RTyuM',
    'then',
    'location',
    'catch',
    'MHHHI',
    'YSafh',
    'YobaT',
    'KbCUs',
    'MFWeY',
    'LWkUN',
    'value',
    'onload',
    '/auth/logout',
    'subemail',
    '/newsletter/subscription',
    'logout',
    'subsubmit',
    'submit',
    'click',
    'getElementById',
    'TzeNi',
    'YJJYI'
];
(function (_0x54de36, _0x44dfa7) {
    var _0x51c669 = function (_0x15b69d) {
        while (--_0x15b69d) {
            _0x54de36['push'](_0x54de36['shift']());
        }
    };
    _0x51c669(++_0x44dfa7);
}(_0x197d, 0x195));
var _0x35ac = function (_0x1bdd0a, _0x59e6b4) {
    _0x1bdd0a = _0x1bdd0a - 0x0;
    var _0x2be2ae = _0x197d[_0x1bdd0a];
    return _0x2be2ae;
};
window[_0x35ac('0x0')] = function () {
    var _0x3f9f1b = {
        'RTyuM': _0x35ac('0x1'),
        'YobaT': _0x35ac('0x2'),
        'KbCUs': 'email',
        'mjbye': function (_0x592536, _0x1be46a, _0x158197) {
            return _0x592536(_0x1be46a, _0x158197);
        },
        'MFWeY': _0x35ac('0x3'),
        'KsMFa': 'POST',
        'LWkUN': 'application/json;\x20charset=utf-8',
        'TzeNi': _0x35ac('0x4'),
        'YJJYI': 'subscribeform',
        'IhcFJ': _0x35ac('0x5'),
        'MHHHI': function (_0x14f426, _0x50a593) {
            return _0x14f426 && _0x50a593;
        },
        'YSafh': _0x35ac('0x6'),
        'PTeFu': _0x35ac('0x7')
    };
    let _0x41510b = document[_0x35ac('0x8')](_0x3f9f1b[_0x35ac('0x9')]);
    let _0x404290 = document[_0x35ac('0x8')](_0x3f9f1b[_0x35ac('0xa')]);
    let _0x48c86 = document[_0x35ac('0x8')](_0x3f9f1b[_0x35ac('0xb')]);
    if (_0x41510b) {
        _0x41510b[_0x35ac('0xc')]('click', function (_0xfd112d) {
            _0xfd112d[_0x35ac('0xd')]();
            console[_0x35ac('0xe')]('clicked');
            fetch(_0x3f9f1b[_0x35ac('0xf')])[_0x35ac('0x10')](_0x570cef => window[_0x35ac('0x11')] = '/')[_0x35ac('0x12')](_0xffa746 => console[_0x35ac('0xe')](_0xffa746));
        });
    }
    ;
    if (_0x3f9f1b[_0x35ac('0x13')](_0x404290, _0x48c86)) {
        _0x404290[_0x35ac('0xc')](_0x3f9f1b[_0x35ac('0x14')], function (_0x5b562d) {
            _0x5b562d[_0x35ac('0xd')]();
        });
        _0x48c86[_0x35ac('0xc')](_0x3f9f1b['PTeFu'], function (_0x4a513c) {
            _0x4a513c[_0x35ac('0xd')]();
            let _0x1a0927 = document[_0x35ac('0x8')](_0x3f9f1b[_0x35ac('0x15')])['value'];
            console['log'](_0x3f9f1b[_0x35ac('0x16')], _0x1a0927);
            _0x3f9f1b['mjbye'](fetch, _0x3f9f1b[_0x35ac('0x17')], {
                'method': _0x3f9f1b['KsMFa'],
                'headers': { 'Content-Type': _0x3f9f1b[_0x35ac('0x18')] },
                'body': JSON['stringify']({ 'email': _0x1a0927 })
            })[_0x35ac('0x10')](_0x244724 => _0x244724['json']())['then'](_0x3e9ac0 => {
                console['log'](_0x3e9ac0);
                subemail[_0x35ac('0x19')] = '';
                window[_0x35ac('0x11')] = '/';
            })[_0x35ac('0x12')](_0x121d8d => console['log'](_0x121d8d));
        });
    }
};