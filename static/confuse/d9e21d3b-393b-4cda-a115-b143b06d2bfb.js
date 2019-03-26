var _0x1b31 = [
    'April',
    'May',
    'June',
    'Revenue',
    'month',
    'defaults',
    'global',
    'defaultFontFamily',
    'defaultFontColor',
    '#292b2c',
    'getElementById',
    'myBarChart',
    'bar',
    'January'
];
(function (_0x596ca8, _0xe60d) {
    var _0x4755d9 = function (_0x9ba6f0) {
        while (--_0x9ba6f0) {
            _0x596ca8['push'](_0x596ca8['shift']());
        }
    };
    _0x4755d9(++_0xe60d);
}(_0x1b31, 0x18d));
var _0x12f9 = function (_0x24c68c, _0x4854e4) {
    _0x24c68c = _0x24c68c - 0x0;
    var _0x2a2f92 = _0x1b31[_0x24c68c];
    return _0x2a2f92;
};
Chart[_0x12f9('0x0')][_0x12f9('0x1')][_0x12f9('0x2')] = '-apple-system,system-ui,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif';
Chart['defaults'][_0x12f9('0x1')][_0x12f9('0x3')] = _0x12f9('0x4');
var ctx = document[_0x12f9('0x5')](_0x12f9('0x6'));
var myLineChart = new Chart(ctx, {
    'type': _0x12f9('0x7'),
    'data': {
        'labels': [
            _0x12f9('0x8'),
            'February',
            'March',
            _0x12f9('0x9'),
            _0x12f9('0xa'),
            _0x12f9('0xb')
        ],
        'datasets': [{
                'label': _0x12f9('0xc'),
                'backgroundColor': 'rgba(2,117,216,1)',
                'borderColor': 'rgba(2,117,216,1)',
                'data': [
                    0x1077,
                    0x14c0,
                    0x186b,
                    0x1ea1,
                    0x265d,
                    0x3a88
                ]
            }]
    },
    'options': {
        'scales': {
            'xAxes': [{
                    'time': { 'unit': _0x12f9('0xd') },
                    'gridLines': { 'display': ![] },
                    'ticks': { 'maxTicksLimit': 0x6 }
                }],
            'yAxes': [{
                    'ticks': {
                        'min': 0x0,
                        'max': 0x3a98,
                        'maxTicksLimit': 0x5
                    },
                    'gridLines': { 'display': !![] }
                }]
        },
        'legend': { 'display': ![] }
    }
});