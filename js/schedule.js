var mainTimeTitleGmt0 = [
    ['00:00', '02:00', '05:00', '08:00', '11:00', '14:00']
]

var gmt0 = [
    ['00:30', '01:15', '02:45', '03:30', '04:15', '05:45', '06:30', '07:15', '08:45', '09:30', '10:15', '11:45', '12:30']
];

var gmt8 = [
    ['08:30', '09:15', '10:45', '11:30', '12:15', '13:45', '14:30', '15:15', '16:45', '17:30', '18:15', '19:45', '20:30']
];


var mainTimeTitle = [
    'timeTitleP0',
    'timeTitleP1',
    'timeTitleP2',
    'timeTitleP3',
    'timeTitleP4',
    'timeTitleP5'
];


var teamId = [
    ['001', '002', '003', '004', '005'],
    ['101', '002', '103', '004', '005'],

    ['201', '002', '203', '004', '005'],
    ['301', '002', '303', '004', '005'],
    ['401', '002', '003', '004', '005'],

    ['501', '002', '103', '004', '005'],
    ['601', '002', '203', '004', '005'],
    ['701', '002', '303', '004', '005'],

    ['801', '002', '003', '004', '005'],
    ['901', '002', '103', '004', '005'],
    ['1001', '002', '203', '004', '005'],

    ['1101', '002', '303', '004', '005'],
    ['1201', '002', '303', '004', '13']
]

var flat = [
    ['pl', 'pl', 'pl', 'pl', 'pl'],
    ['gb', 'pl', 'pl', 'pl', 'pl'],

    ['hk', 'pl', 'pl', 'pl', 'pl'],
    ['in', 'pl', 'pl', 'pl', 'pl'],
    ['nl', 'pl', 'pl', 'pl', 'pl'],

    ['pl', 'pl', 'pl', 'pl', 'pl'],
    ['sa', 'pl', 'pl', 'pl', 'pl'],
    ['ca', 'pl', 'pl', 'pl', 'pl'],

    ['mn', 'pl', 'pl', 'pl', 'pl'],
    ['pl', 'pl', 'pl', 'pl', 'pl'],
    ['mo', 'pl', 'pl', 'pl', 'pl'],

    ['pl', 'pl', 'pl', 'pl', 'pl'],
    ['mo', 'pl', 'pl', 'pl', 'hk']
]


var countries = [
    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],
    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],

    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],
    ['Korea1', 'Korea', 'Korea3', 'Korea4', 'Korea'],
    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],

    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],
    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],
    ['Korea1', 'Korea', 'Korea3', 'Korea4', 'Korea5'],

    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],
    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],
    ['Korea1', 'Korea', 'Korea3', 'Korea', 'Korea'],

    ['Korea1', 'Korea', 'Korea3', 'Korea4', 'Korea12'],
    ['Korea1', 'Korea', 'Korea3', 'Korea4', 'Korea13']
]


var panelRowNum = [
    '2',
    '3',
    '3',
    '3',
    '2'
];

var panel = [
    'panel0',
    'panel1',
    'panel2',
    'panel3',
    'panel4'
];

var rowPositionIndex = 0;
var panelRowTimeClassName = [];
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < panelRowNum[i]; j++) {
        document.getElementById(panel[i]).innerHTML += ('<div class="row w-100 centre px-0 mx-0" id="p' + i + 'r' + j + '"></div>');
        var pirj = document.getElementById('p' + i + 'r' + j);
        for (let k = 0; k < 5; k++) {
            pirj.innerHTML += (
                '<div class="w-20 px-0" id="">' +
                '<div class="cell py-3" >' +
                '<span class="flag-icon flag-icon-' + flat[rowPositionIndex][k] + '"></span>' +
                '<p class="my-0 fw-700 timeP' + i + 'r' + j + '">' + gmt8[0][rowPositionIndex] + '</p>' +
                '<p class="my-0"><b>Team ' + teamId[rowPositionIndex][k] + '</b></p>' +
                '<p class="my-0">' + countries[rowPositionIndex][k] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
        panelRowTimeClassName.push('timeP' + i + 'r' + j);
        rowPositionIndex++;
    }
}


// change time func
function timeCh(sel) {
    // var selectedIndex = sel.options[sel.selectedIndex].index;
    // console.log('selectedIndex:' + selectedIndex);

    let mainTimeRow = [];
    let scheduleTimeRow = []

    for (let i = 0; i < 6; i++) {
        var ampm = "";
        var timeX = "";

        var hr = parseInt(mainTimeTitleGmt0[0][i].split(":", 1)) + parseInt(sel.value.split(":", 1));
        hr = timePositionalNotation(hr);

        if (hr > 11) {
            ampm = "pm";
            timeX = parseInt(hr) - 12;
            if (timeX === 0) {
                timeX = 12;
            }
        } else {
            timeX = parseInt(hr);
            if (timeX === 0) {
                timeX = 12;
            }
            ampm = "am";
        }

        mainTimeRow.push(hr + ':' + mainTimeTitleGmt0[0][i].slice(3, 5) + " (" + timeX + ampm + ")");
    }
    // console.log(mainTimeRow);


    for (let i = 0; i < 13; i++) {
        var hr = parseInt(gmt0[0][i].split(":", 1)) + parseInt(sel.value.split(":", 1));
        hr = timePositionalNotation(hr);
        scheduleTimeRow.push(hr + ':' + gmt0[0][i].slice(3, 5));
    }
    // console.log(scheduleTimeRow);

    changeTimeLoop(scheduleTimeRow, mainTimeRow);
}


function changeTimeLoop(scheduleTimeRow, mainTimeRow) {
    let rowPositionIndexForTime = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < panelRowNum[i]; j++) {
            var els = document.getElementsByClassName(panelRowTimeClassName[rowPositionIndexForTime]);
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = scheduleTimeRow[rowPositionIndexForTime];
            });
            rowPositionIndexForTime++;
        }
    }

    for (let i = 0; i < 6; i++) {
        var els = document.getElementById(mainTimeTitle[i]);
        els.innerHTML = mainTimeRow[i];
    }
}

function showWeb(index) {
    // window.open('https://hk.ibcol.org/2020-HKBCOL-Finalists/' + hkbcolFinalists[index] + '.html');
}

function showPanel(index) {

    switch (index) {
        case 0:
            getPanel(index);
            break;
        case 1:
            getPanel(index);
            break;
        case 2:
            getPanel(index);
            break;
        case 3:
            getPanel(index);
            break;
        case 4:
            getPanel(index);
            break;
    }
}

function getPanel(index) {
    var panelX = 'panel' + index;
    var panel = document.getElementById(panelX);
    // console.log(panelX);
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}

function timePositionalNotation(val) {
    if (val <= 9) {
        return "0" + val;
    } else if (val == 24) {
        return "00";
    } else if (val > 24) {
        // return val;
        for (let i = 1; i < 3; i++) {
            if ((val - i) == 24) {
                return "0" + i;
            }
        }
    } else {
        return val;
    }
}