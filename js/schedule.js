var mainTimeHKT = [
    '08:00',
    '10:00',
    '13:00',
    '16:00',
    '19:00',
    '22:00'
]

var mainTimeGmtPlus9 = [
    '09:00',
    '11:00',
    '14:00',
    '17:00',
    '20:00',
    '23:00'
]

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

var hkt = [
    '08:30',
    '09:15',

    '10:45',
    '11:30',
    '12:15',

    '13:45',
    '14:30',
    '15:15',

    '16:45',
    '17:30',
    '18:15',

    '19:45',
    '20:30'
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
                '<div class="cell" >' +
                '<span class="flag-icon flag-icon-' + flat[rowPositionIndex][k] + '"></span>' +
                '<p class="my-0 fw-700 timeP' + i + 'r' + j + '">' + hkt[rowPositionIndex] + '</p>' +
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
var gmtPlus9 = [
    '09:30',
    '10:15',
    '11:45',
    '12:30',
    '13:15',
    '14:45',
    '15:30',
    '16:15',
    '17:45',
    '18:30',
    '19:15',
    '20:45',
    '21:30'
]

function timeCh(sel) {
    if (sel.options[sel.selectedIndex].text === "Japan GMT+9") {
        changeTimeLoop(gmtPlus9, mainTimeGmtPlus9);
    }

    if (sel.options[sel.selectedIndex].text === "Hong Kong GMT+8") {
        changeTimeLoop(hkt, mainTimeHKT);
    }

}



function changeTimeLoop(timeCells, timeTitle) {
    let rowPositionIndexForTime = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < panelRowNum[i]; j++) {
            var els = document.getElementsByClassName(panelRowTimeClassName[rowPositionIndexForTime]);
            Array.prototype.forEach.call(els, function (el) {
                el.innerHTML = timeCells[rowPositionIndexForTime];
            });
            rowPositionIndexForTime++;
        }
    }

    for (let i = 0; i < 6; i++) {
        var els = document.getElementById(mainTimeTitle[i]);
        // Array.prototype.forEach.call(els, function (el) {
            els.innerHTML = timeTitle[i];
        // });
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