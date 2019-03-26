var _0x8db2 = [
    'May',
    'Revenue',
    'rgba(2,117,216,1)',
    'month',
    'defaults',
    'global',
    'defaultFontFamily',
    '-apple-system,system-ui,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif',
    'defaultFontColor',
    'myBarChart',
    'bar',
    'February',
    'April'
];
(function (_0x203541, _0x1e20a1) {
    var _0xfb590a = function (_0x314b48) {
        while (--_0x314b48) {
            _0x203541['push'](_0x203541['shift']());
        }
    };
    _0xfb590a(++_0x1e20a1);
}(_0x8db2, 0x163));
var _0x23a9 = function (_0x140933, _0x3b9f1c) {
    _0x140933 = _0x140933 - 0x0;
    var _0x219ff0 = _0x8db2[_0x140933];
    return _0x219ff0;
};
Chart[_0x23a9('0x0')][_0x23a9('0x1')][_0x23a9('0x2')] = _0x23a9('0x3');
Chart[_0x23a9('0x0')]['global'][_0x23a9('0x4')] = '#292b2c';
var ctx = document['getElementById'](_0x23a9('0x5'));
var myLineChart = new Chart(ctx, {
    'type': _0x23a9('0x6'),
    'data': {
        'labels': [
            'January',
            _0x23a9('0x7'),
            'March',
            _0x23a9('0x8'),
            _0x23a9('0x9'),
            'June'
        ],
        'datasets': [{
                'label': _0x23a9('0xa'),
                'backgroundColor': _0x23a9('0xb'),
                'borderColor': _0x23a9('0xb'),
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
                    'time': { 'unit': _0x23a9('0xc') },
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