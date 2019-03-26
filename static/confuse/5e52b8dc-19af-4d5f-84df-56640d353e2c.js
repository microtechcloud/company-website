var _0x3c6f = [
    'Blue',
    'Red',
    'Green',
    '#007bff',
    '#dc3545',
    '#ffc107',
    '#28a745',
    'defaults',
    'global',
    '-apple-system,system-ui,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif',
    'defaultFontColor',
    '#292b2c',
    'myPieChart'
];
(function (_0x19c896, _0x4b8dbf) {
    var _0x45863a = function (_0x22acbd) {
        while (--_0x22acbd) {
            _0x19c896['push'](_0x19c896['shift']());
        }
    };
    _0x45863a(++_0x4b8dbf);
}(_0x3c6f, 0xfe));
var _0x3f99 = function (_0x3bab24, _0x3513b2) {
    _0x3bab24 = _0x3bab24 - 0x0;
    var _0x2f6937 = _0x3c6f[_0x3bab24];
    return _0x2f6937;
};
Chart[_0x3f99('0x0')][_0x3f99('0x1')]['defaultFontFamily'] = _0x3f99('0x2');
Chart[_0x3f99('0x0')][_0x3f99('0x1')][_0x3f99('0x3')] = _0x3f99('0x4');
var ctx = document['getElementById'](_0x3f99('0x5'));
var myPieChart = new Chart(ctx, {
    'type': 'pie',
    'data': {
        'labels': [
            _0x3f99('0x6'),
            _0x3f99('0x7'),
            'Yellow',
            _0x3f99('0x8')
        ],
        'datasets': [{
                'data': [
                    12.21,
                    15.58,
                    11.25,
                    8.32
                ],
                'backgroundColor': [
                    _0x3f99('0x9'),
                    _0x3f99('0xa'),
                    _0x3f99('0xb'),
                    _0x3f99('0xc')
                ]
            }]
    }
});