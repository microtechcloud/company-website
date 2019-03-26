var _0x29d3 = [
    'defaultFontColor',
    '#292b2c',
    'getElementById',
    'myPieChart',
    'pie',
    'Blue',
    'Yellow',
    'Green',
    '#007bff',
    '#dc3545',
    '#ffc107',
    '#28a745',
    'defaults',
    '-apple-system,system-ui,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif',
    'global'
];
(function (_0x3e5ff1, _0x31370c) {
    var _0x23d597 = function (_0x3ebabf) {
        while (--_0x3ebabf) {
            _0x3e5ff1['push'](_0x3e5ff1['shift']());
        }
    };
    _0x23d597(++_0x31370c);
}(_0x29d3, 0x183));
var _0xe84b = function (_0x5c26b, _0x28eede) {
    _0x5c26b = _0x5c26b - 0x0;
    var _0x56cd04 = _0x29d3[_0x5c26b];
    return _0x56cd04;
};
Chart[_0xe84b('0x0')]['global']['defaultFontFamily'] = _0xe84b('0x1');
Chart[_0xe84b('0x0')][_0xe84b('0x2')][_0xe84b('0x3')] = _0xe84b('0x4');
var ctx = document[_0xe84b('0x5')](_0xe84b('0x6'));
var myPieChart = new Chart(ctx, {
    'type': _0xe84b('0x7'),
    'data': {
        'labels': [
            _0xe84b('0x8'),
            'Red',
            _0xe84b('0x9'),
            _0xe84b('0xa')
        ],
        'datasets': [{
                'data': [
                    12.21,
                    15.58,
                    11.25,
                    8.32
                ],
                'backgroundColor': [
                    _0xe84b('0xb'),
                    _0xe84b('0xc'),
                    _0xe84b('0xd'),
                    _0xe84b('0xe')
                ]
            }]
    }
});