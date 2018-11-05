var _0x2d7e = [
    'getElementById',
    'Wpfpa',
    'FyMpp',
    'qDfTl',
    'preventDefault',
    'log',
    'NMGdf',
    'CRAwL',
    'location',
    'catch',
    'ihGhd',
    'addEventListener',
    'aRqmD',
    'subemail',
    'value',
    'CTUCe',
    'stringify',
    'then',
    'json',
    'clicked',
    'email',
    'subscribeform',
    'click'
];
(function (_0x2725fe, _0x2d2c2a) {
    var _0x55ca49 = function (_0x3aa783) {
        while (--_0x3aa783) {
            _0x2725fe['push'](_0x2725fe['shift']());
        }
    };
    _0x55ca49(++_0x2d2c2a);
}(_0x2d7e, 0x13e));
var _0xac01 = function (_0x3c7801, _0x1ace80) {
    _0x3c7801 = _0x3c7801 - 0x0;
    var _0x2ac9f6 = _0x2d7e[_0x3c7801];
    return _0x2ac9f6;
};
window['onload'] = function () {
    var _0x470b06 = {
        'Yqjgg': _0xac01('0x0'),
        'NMGdf': function (_0x501615, _0x5e2c2f) {
            return _0x501615(_0x5e2c2f);
        },
        'CRAwL': '/auth/logout',
        'CTUCe': _0xac01('0x1'),
        'BhRqo': function (_0x3cc2fc, _0x2317ca, _0xe2238e) {
            return _0x3cc2fc(_0x2317ca, _0xe2238e);
        },
        'nYKOv': 'application/json;\x20charset=utf-8',
        'rxTgU': 'logout',
        'Wpfpa': _0xac01('0x2'),
        'FyMpp': 'subsubmit',
        'qDfTl': _0xac01('0x3'),
        'ihGhd': function (_0x892fa3, _0x808b6c) {
            return _0x892fa3 && _0x808b6c;
        },
        'aRqmD': 'submit'
    };
    let _0x34e21f = document['getElementById'](_0x470b06['rxTgU']);
    let _0x50703c = document[_0xac01('0x4')](_0x470b06[_0xac01('0x5')]);
    let _0x329001 = document[_0xac01('0x4')](_0x470b06[_0xac01('0x6')]);
    if (_0x34e21f) {
        _0x34e21f['addEventListener'](_0x470b06[_0xac01('0x7')], function (_0x559be1) {
            _0x559be1[_0xac01('0x8')]();
            console[_0xac01('0x9')](_0x470b06['Yqjgg']);
            _0x470b06[_0xac01('0xa')](fetch, _0x470b06[_0xac01('0xb')])['then'](_0x137b50 => window[_0xac01('0xc')] = '/')[_0xac01('0xd')](_0x5f247f => console[_0xac01('0x9')](_0x5f247f));
        });
    }
    ;
    if (_0x470b06[_0xac01('0xe')](_0x50703c, _0x329001)) {
        _0x50703c[_0xac01('0xf')](_0x470b06[_0xac01('0x10')], function (_0x3d8e2c) {
            _0x3d8e2c[_0xac01('0x8')]();
        });
        _0x329001[_0xac01('0xf')](_0x470b06[_0xac01('0x7')], function (_0x17d6b6) {
            _0x17d6b6['preventDefault']();
            let _0xcb21a9 = document[_0xac01('0x4')](_0xac01('0x11'))[_0xac01('0x12')];
            console[_0xac01('0x9')](_0x470b06[_0xac01('0x13')], _0xcb21a9);
            _0x470b06['BhRqo'](fetch, '/newsletter/subscription', {
                'method': 'POST',
                'headers': { 'Content-Type': _0x470b06['nYKOv'] },
                'body': JSON[_0xac01('0x14')]({ 'email': _0xcb21a9 })
            })[_0xac01('0x15')](_0x24b948 => _0x24b948[_0xac01('0x16')]())[_0xac01('0x15')](_0xcd368f => {
                console[_0xac01('0x9')](_0xcd368f);
                subemail['value'] = '';
                window[_0xac01('0xc')] = '/';
            })[_0xac01('0xd')](_0x491947 => console['log'](_0x491947));
        });
    }
};