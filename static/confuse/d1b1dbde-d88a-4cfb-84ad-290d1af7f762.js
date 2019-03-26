var _0x1690 = [
    'rgba(0,\x200,\x200,\x20.125)',
    'defaults',
    'global',
    'defaultFontFamily',
    '-apple-system,system-ui,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif',
    'defaultFontColor',
    '#292b2c',
    'getElementById',
    'myAreaChart',
    'Mar\x201',
    'Mar\x205',
    'Mar\x206',
    'Mar\x207',
    'Mar\x208',
    'Mar\x209',
    'Mar\x2010',
    'Mar\x2012',
    'Mar\x2013',
    'Sessions',
    'rgba(2,117,216,0.2)',
    'rgba(2,117,216,1)',
    'rgba(255,255,255,0.8)',
    'date'
];
(function (_0x16c694, _0x250327) {
    var _0x211bc3 = function (_0x1217f2) {
        while (--_0x1217f2) {
            _0x16c694['push'](_0x16c694['shift']());
        }
    };
    _0x211bc3(++_0x250327);
}(_0x1690, 0x15a));
var _0x29bd = function (_0x367012, _0x457f88) {
    _0x367012 = _0x367012 - 0x0;
    var _0x39b617 = _0x1690[_0x367012];
    return _0x39b617;
};
Chart[_0x29bd('0x0')][_0x29bd('0x1')][_0x29bd('0x2')] = _0x29bd('0x3');
Chart[_0x29bd('0x0')][_0x29bd('0x1')][_0x29bd('0x4')] = _0x29bd('0x5');
var ctx = document[_0x29bd('0x6')](_0x29bd('0x7'));
var myLineChart = new Chart(ctx, {
    'type': 'line',
    'data': {
        'labels': [
            _0x29bd('0x8'),
            'Mar\x202',
            'Mar\x203',
            'Mar\x204',
            _0x29bd('0x9'),
            _0x29bd('0xa'),
            _0x29bd('0xb'),
            _0x29bd('0xc'),
            _0x29bd('0xd'),
            _0x29bd('0xe'),
            'Mar\x2011',
            _0x29bd('0xf'),
            _0x29bd('0x10')
        ],
        'datasets': [{
                'label': _0x29bd('0x11'),
                'lineTension': 0.3,
                'backgroundColor': _0x29bd('0x12'),
                'borderColor': _0x29bd('0x13'),
                'pointRadius': 0x5,
                'pointBackgroundColor': _0x29bd('0x13'),
                'pointBorderColor': _0x29bd('0x14'),
                'pointHoverRadius': 0x5,
                'pointHoverBackgroundColor': _0x29bd('0x13'),
                'pointHitRadius': 0x32,
                'pointBorderWidth': 0x2,
                'data': [
                    0x2710,
                    0x75d2,
                    0x6697,
                    0x47da,
                    0x476f,
                    0x700a,
                    0x7a2a,
                    0x81eb,
                    0x64f9,
                    0x5e5f,
                    0x7f8b,
                    0x7cf0,
                    0x9633
                ]
            }]
    },
    'options': {
        'scales': {
            'xAxes': [{
                    'time': { 'unit': _0x29bd('0x15') },
                    'gridLines': { 'display': ![] },
                    'ticks': { 'maxTicksLimit': 0x7 }
                }],
            'yAxes': [{
                    'ticks': {
                        'min': 0x0,
                        'max': 0x9c40,
                        'maxTicksLimit': 0x5
                    },
                    'gridLines': { 'color': _0x29bd('0x16') }
                }]
        },
        'legend': { 'display': ![] }
    }
});