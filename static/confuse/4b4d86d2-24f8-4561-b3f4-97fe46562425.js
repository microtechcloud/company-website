var _0x2987 = [
    'defaultFontFamily',
    '-apple-system,system-ui,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif',
    'defaultFontColor',
    '#292b2c',
    'line',
    'Mar\x202',
    'Mar\x203',
    'Mar\x204',
    'Mar\x205',
    'Mar\x207',
    'Mar\x208',
    'Mar\x209',
    'Mar\x2011',
    'Mar\x2012',
    'Mar\x2013',
    'Sessions',
    'rgba(2,117,216,0.2)',
    'rgba(2,117,216,1)',
    'rgba(255,255,255,0.8)',
    'date',
    'rgba(0,\x200,\x200,\x20.125)',
    'defaults',
    'global'
];
(function (_0x24bf1a, _0x3d7e08) {
    var _0x5b2800 = function (_0x3c22a4) {
        while (--_0x3c22a4) {
            _0x24bf1a['push'](_0x24bf1a['shift']());
        }
    };
    _0x5b2800(++_0x3d7e08);
}(_0x2987, 0x9f));
var _0x5013 = function (_0x59d012, _0x566008) {
    _0x59d012 = _0x59d012 - 0x0;
    var _0x1f844b = _0x2987[_0x59d012];
    return _0x1f844b;
};
Chart[_0x5013('0x0')][_0x5013('0x1')][_0x5013('0x2')] = _0x5013('0x3');
Chart['defaults'][_0x5013('0x1')][_0x5013('0x4')] = _0x5013('0x5');
var ctx = document['getElementById']('myAreaChart');
var myLineChart = new Chart(ctx, {
    'type': _0x5013('0x6'),
    'data': {
        'labels': [
            'Mar\x201',
            _0x5013('0x7'),
            _0x5013('0x8'),
            _0x5013('0x9'),
            _0x5013('0xa'),
            'Mar\x206',
            _0x5013('0xb'),
            _0x5013('0xc'),
            _0x5013('0xd'),
            'Mar\x2010',
            _0x5013('0xe'),
            _0x5013('0xf'),
            _0x5013('0x10')
        ],
        'datasets': [{
                'label': _0x5013('0x11'),
                'lineTension': 0.3,
                'backgroundColor': _0x5013('0x12'),
                'borderColor': _0x5013('0x13'),
                'pointRadius': 0x5,
                'pointBackgroundColor': 'rgba(2,117,216,1)',
                'pointBorderColor': _0x5013('0x14'),
                'pointHoverRadius': 0x5,
                'pointHoverBackgroundColor': _0x5013('0x13'),
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
                    'time': { 'unit': _0x5013('0x15') },
                    'gridLines': { 'display': ![] },
                    'ticks': { 'maxTicksLimit': 0x7 }
                }],
            'yAxes': [{
                    'ticks': {
                        'min': 0x0,
                        'max': 0x9c40,
                        'maxTicksLimit': 0x5
                    },
                    'gridLines': { 'color': _0x5013('0x16') }
                }]
        },
        'legend': { 'display': ![] }
    }
});