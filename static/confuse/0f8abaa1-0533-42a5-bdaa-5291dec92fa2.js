var _0x5dcf = [
    'then',
    'location',
    'catch',
    'BGBNZ',
    'submit',
    'addEventListener',
    'subemail',
    'value',
    'wqAyO',
    '/newsletter/subscription',
    'RTOWW',
    'application/json;\x20charset=utf-8',
    'stringify',
    'json',
    'onload',
    'clicked',
    '/auth/logout',
    'email',
    'logout',
    'subscribeform',
    'subsubmit',
    'click',
    'ZsMsO',
    'getElementById',
    'zQCjl',
    'OWvIJ',
    'preventDefault',
    'log',
    'qgDov',
    'eDTpI',
    'qWuNb'
];
(function (_0x3b4a35, _0x4bb947) {
    var _0x1f17cf = function (_0xf462c1) {
        while (--_0xf462c1) {
            _0x3b4a35['push'](_0x3b4a35['shift']());
        }
    };
    _0x1f17cf(++_0x4bb947);
}(_0x5dcf, 0x1a1));
var _0x20db = function (_0x1568cd, _0x58495a) {
    _0x1568cd = _0x1568cd - 0x0;
    var _0x3d0832 = _0x5dcf[_0x1568cd];
    return _0x3d0832;
};
window[_0x20db('0x0')] = function () {
    var _0x2eb1ff = {
        'qgDov': _0x20db('0x1'),
        'eDTpI': function (_0x224d6b, _0xa926eb) {
            return _0x224d6b(_0xa926eb);
        },
        'qWuNb': _0x20db('0x2'),
        'wqAyO': _0x20db('0x3'),
        'RTOWW': 'POST',
        'ZsMsO': _0x20db('0x4'),
        'uQHNc': _0x20db('0x5'),
        'zQCjl': _0x20db('0x6'),
        'OWvIJ': _0x20db('0x7'),
        'BGBNZ': function (_0xb8dd6d, _0x22cf7c) {
            return _0xb8dd6d && _0x22cf7c;
        }
    };
    let _0x2a1cf5 = document['getElementById'](_0x2eb1ff[_0x20db('0x8')]);
    let _0x9fe045 = document[_0x20db('0x9')](_0x2eb1ff['uQHNc']);
    let _0x4259fc = document[_0x20db('0x9')](_0x2eb1ff[_0x20db('0xa')]);
    if (_0x2a1cf5) {
        _0x2a1cf5['addEventListener'](_0x2eb1ff[_0x20db('0xb')], function (_0x26da28) {
            _0x26da28[_0x20db('0xc')]();
            console[_0x20db('0xd')](_0x2eb1ff[_0x20db('0xe')]);
            _0x2eb1ff[_0x20db('0xf')](fetch, _0x2eb1ff[_0x20db('0x10')])[_0x20db('0x11')](_0xd6418e => window[_0x20db('0x12')] = '/')[_0x20db('0x13')](_0xd1ec63 => console[_0x20db('0xd')](_0xd1ec63));
        });
    }
    ;
    if (_0x2eb1ff[_0x20db('0x14')](_0x9fe045, _0x4259fc)) {
        _0x9fe045['addEventListener'](_0x20db('0x15'), function (_0x58e0d1) {
            _0x58e0d1[_0x20db('0xc')]();
        });
        _0x4259fc[_0x20db('0x16')]('click', function (_0x1c8ffa) {
            _0x1c8ffa['preventDefault']();
            let _0x3718a3 = document[_0x20db('0x9')](_0x20db('0x17'))[_0x20db('0x18')];
            console[_0x20db('0xd')](_0x2eb1ff[_0x20db('0x19')], _0x3718a3);
            fetch(_0x20db('0x1a'), {
                'method': _0x2eb1ff[_0x20db('0x1b')],
                'headers': { 'Content-Type': _0x20db('0x1c') },
                'body': JSON[_0x20db('0x1d')]({ 'email': _0x3718a3 })
            })[_0x20db('0x11')](_0x3d4282 => _0x3d4282[_0x20db('0x1e')]())[_0x20db('0x11')](_0x1924ab => {
                console[_0x20db('0xd')](_0x1924ab);
                subemail[_0x20db('0x18')] = '';
                window[_0x20db('0x12')] = '/';
            })[_0x20db('0x13')](_0x311d3a => console[_0x20db('0xd')](_0x311d3a));
        });
    }
};