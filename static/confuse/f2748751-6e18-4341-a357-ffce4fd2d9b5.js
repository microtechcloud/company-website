var _0x3370 = [
    'catch',
    '/auth/logout',
    'subemail',
    'email',
    '/newsletter/subscription',
    'logout',
    'submit',
    'emRfS',
    'getElementById',
    'subscribeform',
    'subsubmit',
    'click',
    'preventDefault',
    'log',
    'WFYBd',
    'JByrj',
    'addEventListener',
    'wjiYo',
    'value',
    'fMeQI',
    'SVhXh',
    'VJqkX',
    'stringify',
    'then',
    'json',
    'location'
];
(function (_0x55c038, _0x3ccdfe) {
    var _0x2fb346 = function (_0x2b1f6a) {
        while (--_0x2b1f6a) {
            _0x55c038['push'](_0x55c038['shift']());
        }
    };
    _0x2fb346(++_0x3ccdfe);
}(_0x3370, 0x9d));
var _0x3916 = function (_0x2f3d0d, _0xfc1d8f) {
    _0x2f3d0d = _0x2f3d0d - 0x0;
    var _0x171212 = _0x3370[_0x2f3d0d];
    return _0x171212;
};
window['onload'] = function () {
    var _0x19dda9 = {
        'Elvsc': function (_0x214b1a, _0x4d24e9) {
            return _0x214b1a(_0x4d24e9);
        },
        'WFYBd': _0x3916('0x0'),
        'zATUo': _0x3916('0x1'),
        'aYyxZ': _0x3916('0x2'),
        'agkZw': function (_0xddada0, _0x41b602, _0x1950a4) {
            return _0xddada0(_0x41b602, _0x1950a4);
        },
        'fMeQI': _0x3916('0x3'),
        'SVhXh': 'POST',
        'VJqkX': 'application/json;\x20charset=utf-8',
        'emRfS': _0x3916('0x4'),
        'JByrj': function (_0x1f22cc, _0x20407a) {
            return _0x1f22cc && _0x20407a;
        },
        'wjiYo': _0x3916('0x5')
    };
    let _0x1bee6f = document['getElementById'](_0x19dda9[_0x3916('0x6')]);
    let _0x41c605 = document[_0x3916('0x7')](_0x3916('0x8'));
    let _0x1bec66 = document[_0x3916('0x7')](_0x3916('0x9'));
    if (_0x1bee6f) {
        _0x1bee6f['addEventListener'](_0x3916('0xa'), function (_0x2af347) {
            _0x2af347[_0x3916('0xb')]();
            console[_0x3916('0xc')]('clicked');
            _0x19dda9['Elvsc'](fetch, _0x19dda9[_0x3916('0xd')])['then'](_0x3ab956 => window['location'] = '/')['catch'](_0x200367 => console[_0x3916('0xc')](_0x200367));
        });
    }
    ;
    if (_0x19dda9[_0x3916('0xe')](_0x41c605, _0x1bec66)) {
        _0x41c605[_0x3916('0xf')](_0x19dda9[_0x3916('0x10')], function (_0x2d9a97) {
            _0x2d9a97['preventDefault']();
        });
        _0x1bec66[_0x3916('0xf')](_0x3916('0xa'), function (_0x570563) {
            _0x570563[_0x3916('0xb')]();
            let _0x42ca21 = document[_0x3916('0x7')](_0x19dda9['zATUo'])[_0x3916('0x11')];
            console[_0x3916('0xc')](_0x19dda9['aYyxZ'], _0x42ca21);
            _0x19dda9['agkZw'](fetch, _0x19dda9[_0x3916('0x12')], {
                'method': _0x19dda9[_0x3916('0x13')],
                'headers': { 'Content-Type': _0x19dda9[_0x3916('0x14')] },
                'body': JSON[_0x3916('0x15')]({ 'email': _0x42ca21 })
            })[_0x3916('0x16')](_0x40a97f => _0x40a97f[_0x3916('0x17')]())[_0x3916('0x16')](_0x3942c7 => {
                console['log'](_0x3942c7);
                subemail['value'] = '';
                window[_0x3916('0x18')] = '/';
            })[_0x3916('0x19')](_0x2ec016 => console[_0x3916('0xc')](_0x2ec016));
        });
    }
};