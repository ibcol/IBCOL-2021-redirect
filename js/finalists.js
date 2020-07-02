var teamIdForRowLeft = [
    '01',
    '03',
    '05',
    '07',
    '09',
    '11'
];

var teamIdForRowRight = [
    '02',
    '04',
    '06',
    '08',
    '10',
    '12'
];

// CA - templates
var teamIdForRowCA = [
    ['01', '02']
];


var pjNameRowCA = [
    ['', '']
];


var teamNameRowCA = [
    ['Blossom Block',
        'Rumi'
    ]

];
// CA

// HK
var pjNameRowLeftHK = [
    'Beacon Blockchain Group',
    'i-Landy',
    'Ukwazi',
    'Khany' + "'" + 'iSA: Illuminate South Africa',
    'SmartLending',
    'BCred: A Blockchain Platform for Academic Credential'
];

var pjNameRowRightHK = [
    'Spearchain',
    'Blockchain Health Credentials',
    'MicroCent',
    'Blockchain-based Organizational Whistleblowing System (BOWS)',
    'Ascension',
    'Optimise Payment Practice in Hong Kong Construction Industry by Blockchain Technology'
];

var teamNameRowLeftHK = [
    'Beacon Blockchain Group',
    'i-Landy',
    'Blockio',
    'Lehlogonolo',
    'Fintech Passionate',
    'PChain'

];

var teamNameRowRightHK = [
    'The Spearheads',
    'Blockchain Health Credentials',
    'MicroCent',
    'WM',
    'Ascension',
    'TWOS'
];
// HK


// BD
var pjNameRowLeftBD = [
    '',
    '',
    '',
    '',
    '',
    ''
];

var pjNameRowRightBD = [
    '',
    '',
    '',
    '',
    '',
    ''
];

var teamNameRowLeftBD = [
    'Hyperactive Oranges',
    'DU_Nimbus',
    'TORR',
    'Brogrammers',
    'DU_Hyperledger',
    'Code Nine BD'
];

var teamNameRowRightBD = [
    'Team Leads Chain',
    'Team Digital Innovation',
    'WEIB_3:1',
    'Aviato',
    'Cosmic Crew',
    'BUET_SKAMmers_1'
];
// BD



// TW - templates
var pjNameRowLeftTW = [
    '',
    '',
    '',
    '',
    '',
    ''
];

var pjNameRowRightTW = [
    '',
    '',
    '',
    '',
    '',
    ''
];

var teamNameRowLeftTW = [
    'Researchain'

];

var teamNameRowRightTW = [
    'VeriRx Network'
];
// TW


// CN - templates
var teamIdForRowCN = [
    ['01', '02'],
    ['03', '04'],
    ['05', '']
];


var pjNameRowCN = [
    ['', ''],
    ['', ''],
    ['', '']
];


var teamNameRowCN = [
    ['Support X',
        'PracticeTogether'
    ],
    ['Carbonbase',
        'LifeBlock'
    ],
    ['Golden Pear',
        ''
    ]
];
// CN



// PL - templates
var teamIdForRowPL = [
    ['01', '02'],
    ['03', '04'],
    ['05', '06']
];


var pjNameRowPL = [
    ['', ''],
    ['', ''],
    ['', '']
];


var teamNameRowPL = [
    ['E-stamp',
        'E-voting for universities'
    ],
    ['Simple Joint-Stock Company',
        'Performance data analysis in sport on the example of the Olympic boxing'
    ],
    ['Legal approvement of electronic agreements',
        'Censorship resistant text messages'
    ]
];
// PL

// PH - templates
var teamIdForRowPH = [
    ['01', '02'],
    ['03', '04']
];


var pjNameRowPH = [
    ['', ''],
    ['', '']
];


var teamNameRowPH = [
    ['Timeswap',
        'Christine'
    ],
    ['Mamay',
        'GOMO'
    ]

];
// PH



// MN - templates
var teamIdForRowMN = [
    ['01', '']
];


var pjNameRowMN = [
    ['', '']
];


var teamNameRowMN = [
    ['AutoChain',
        ''
    ]
];
// MN

// GB - templates
var teamIdForRowGB = [
    ['01', '']
];


var pjNameRowGB = [
    ['', '']
];


var teamNameRowGB = [
    ['Track Your Food',
        ''
    ]
];
// GB

// ES - templates
var teamIdForRowES = [
    ['01', '']
];


var pjNameRowES = [
    ['', '']
];


var teamNameRowES = [
    ['ACLI',
        ''
    ]
];
// ES


// US - templates
var teamIdForRowUS = [
    ['01', '02'],
    ['03', '']
];


var pjNameRowUS = [
    ['', ''],
    ['', '']
];


var teamNameRowUS = [
    ['Meld Exchange (MeldX)',
        'Avalanche'
    ],
    ['AlliedFund',
        ''
    ]
];
// US

// TR - templates
var teamIdForRowTR = [
    ['01', '']
];


var pjNameRowTR = [
    ['', '']
];


var teamNameRowTR = [
    ['LightChain',
        ''
    ]
];
// TR

// TH - templates
var teamIdForRowTH = [
    ['01', '']
];


var pjNameRowTH = [
    ['', '']
];


var teamNameRowTH = [
    ['traffic-evidence-group',
        ''
    ]
];
// TH



// VN - templates
var teamIdForRowVN = [
    ['01', '02'],
    ['03', '']
];


var pjNameRowVN = [
    ['', ''],
    ['', '']
];


var teamNameRowVN = [
    ['Bchain',
        'HebiLife'
    ],
    ['Tokenbot.ai',
        ''
    ]

];
// VN




// var finalistsCountries = ['hk', 'bd', 'tw', 'cn'];

// var finalists = document.getElementById('finalists');
// var hk = document.getElementById('hk');
// var bd = document.getElementById('bd');
// var tw = document.getElementById('tw');
// var cn = document.getElementById('cn');

for (let i = 0; i < 1; i++) {
    ca.innerHTML += (
        '<div class="row mt-4" id="caRow' + i + '">' +
        '</div>'
    );

    var caRowX = document.getElementById('caRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowCA[i][j] === '') {} else {
            caRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesCA(' + teamIdForRowCA[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/caFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowCA[i][j] + '</b> (CA-' + teamIdForRowCA[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowCA[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}


for (let i = 0; i < 6; i++) {
    hk.innerHTML += (
        '<div class="row mt-4">' +
        '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesHK(' + teamIdForRowLeft[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 pr-0">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/hkFlat.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto pl-3">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowLeftHK[i] + '</b> (HK-' + teamIdForRowLeft[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesHK(' + teamIdForRowRight[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 pr-0">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/hkFlat.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto pl-3">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowRightHK[i] + '</b> (HK-' + teamIdForRowRight[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowRightHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowRightHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowRight[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}

for (let i = 0; i < 6; i++) {
    bd.innerHTML += (
        '<div class="row mt-4">' +
        '<div class="col-md-6 col-sm-12"  onclick="viewRepresentativesBD(' + teamIdForRowLeft[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 pr-0">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/bdFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto pl-3">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowLeftBD[i] + '</b> (BD-' + teamIdForRowLeft[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowLeftBD[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12"  onclick="viewRepresentativesBD(' + teamIdForRowRight[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 pr-0">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/bdFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto pl-3">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowRightBD[i] + '</b> (BD-' + teamIdForRowRight[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowRightBD[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowRightHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowRight[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}

for (let i = 0; i < 1; i++) {
    tw.innerHTML += (
        '<div class="row mt-4">' +
        '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesTW(' + teamIdForRowLeft[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 pr-0">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/twFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto pl-3">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowLeftTW[i] + '</b> (TW-' + teamIdForRowLeft[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowLeftTW[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +


        '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesTW(' + teamIdForRowRight[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 pr-0">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/twFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto pl-3">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowRightTW[i] + '</b> (TW-' + teamIdForRowRight[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowRightTW[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowRightHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowRight[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}


for (let i = 0; i <= Math.ceil(teamNameRowCN.length / 2); i++) {
    cn.innerHTML += (
        '<div class="row mt-4" id="cnRow' + i + '">' +
        '</div>'
    );

    var cnRowX = document.getElementById('cnRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowCN[i][j] === '') {} else {
            cnRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesCN(' + teamIdForRowCN[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/cnFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowCN[i][j] + '</b> (CN-' + teamIdForRowCN[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowCN[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}




for (let i = 0; i <= 1; i++) {
    ph.innerHTML += (
        '<div class="row mt-4" id="phRow' + i + '">' +
        '</div>'
    );

    var phRowX = document.getElementById('phRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowPH[i][j] === '') {} else {
            phRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesPH(' + teamIdForRowPH[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/phFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowPH[i][j] + '</b> (PH-' + teamIdForRowPH[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowPH[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}


for (let i = 0; i < 1; i++) {
    mn.innerHTML += (
        '<div class="row mt-4" id="mnRow' + i + '">' +
        '</div>'
    );

    var mnRowX = document.getElementById('mnRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowMN[i][j] === '') {} else {
            mnRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesMN(' + teamIdForRowMN[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/mnFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowMN[i][j] + '</b> (MN-' + teamIdForRowMN[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowMN[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

for (let i = 0; i < 1; i++) {
    es.innerHTML += (
        '<div class="row mt-4" id="esRow' + i + '">' +
        '</div>'
    );

    var esRowX = document.getElementById('esRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowES[i][j] === '') {} else {
            esRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesES(' + teamIdForRowES[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/esFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowES[i][j] + '</b> (ES-' + teamIdForRowES[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowES[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

for (let i = 0; i < 1; i++) {
    gb.innerHTML += (
        '<div class="row mt-4" id="gbRow' + i + '">' +
        '</div>'
    );

    var gbRowX = document.getElementById('gbRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowGB[i][j] === '') {} else {
            gbRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesGB(' + teamIdForRowGB[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/gbFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowGB[i][j] + '</b> (GB-' + teamIdForRowGB[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowGB[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

for (let i = 0; i <= 2; i++) {
    pl.innerHTML += (
        '<div class="row mt-4" id="plRow' + i + '">' +
        '</div>'
    );

    var plRowX = document.getElementById('plRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowPL[i][j] === '') {} else {
            plRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesPL(' + teamIdForRowPL[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/plFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowPL[i][j] + '</b> (PL-' + teamIdForRowPL[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowPL[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

for (let i = 0; i <= 1; i++) {
    us.innerHTML += (
        '<div class="row mt-4" id="usRow' + i + '">' +
        '</div>'
    );

    var usRowX = document.getElementById('usRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowUS[i][j] === '') {} else {
            usRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesUS(' + teamIdForRowUS[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/usFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowUS[i][j] + '</b> (US-' + teamIdForRowUS[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowUS[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

for (let i = 0; i < 1; i++) {
    tr.innerHTML += (
        '<div class="row mt-4" id="trRow' + i + '">' +
        '</div>'
    );

    var trRowX = document.getElementById('trRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowTR[i][j] === '') {} else {
            trRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesTR(' + teamIdForRowTR[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/trFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowTR[i][j] + '</b> (TR-' + teamIdForRowTR[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowTR[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

for (let i = 0; i < 1; i++) {
    th.innerHTML += (
        '<div class="row mt-4" id="thRow' + i + '">' +
        '</div>'
    );

    var thRowX = document.getElementById('thRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowTH[i][j] === '') {} else {
            thRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesTH(' + teamIdForRowTH[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/thFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowTH[i][j] + '</b> (TH-' + teamIdForRowTH[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowTH[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

for (let i = 0; i <= 1; i++) {
    vn.innerHTML += (
        '<div class="row mt-4" id="vnRow' + i + '">' +
        '</div>'
    );

    var vnRowX = document.getElementById('vnRow' + i);

    for (let j = 0; j <= 1; j++) {
        if (teamNameRowVN[i][j] === '') {} else {
            vnRowX.innerHTML += (
                '<div class="col-md-6 col-sm-12" onclick="viewRepresentativesVN(' + teamIdForRowVN[i][j] + ')" style="cursor:pointer">' +
                '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
                '<div class="col-4 pr-0">' +
                '<img src=".././images/2020-IBCOL-Finalists/flat/vnFlag.png" class="">' +
                '</div>' +
                '<div class="col-8 my-auto pl-3">' +
                '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowVN[i][j] + '</b> (VN-' + teamIdForRowVN[i][j] + ')</p>' +
                '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowVN[i][j] + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}









function viewRepresentativesBD(index) {
    // console.log('index: ' + index);

    var teamNameBD = [
        'Hyperactive Oranges',
        'Team Leads Chain',
        'DU_Nimbus',
        'Team Digital Innovation',
        'TORR',
        'WEIB_3:1',
        'Brogrammers',
        'Aviato',
        'DU_Hyperledger',
        'Cosmic Crew',
        'Code Nine BD',
        'BUET_SKAMmers_1'
    ];

    var target = teamNameBD[index - 1];

    // if (target === 'WEIB_3:1') {
    //     target = 'WEIB_3/1'
    // }
    window.open("../2020EXPO/2020-IBCOL-Finalists/BD-12-representatives/" + target + "/index.html");
}

function viewRepresentativesCN(index) {
    // console.log('index: ' + index);

    var teamNameCN = [
        'Support X',
        'PracticeTogether',
        'Carbonbase',
        'LifeBlock',
        'Golden Pear',
    ];

    var target = teamNameCN[index - 1];
    window.open("../2020EXPO/2020-IBCOL-Finalists/CN-12-representatives/" + target + "/index.html");
}

function viewRepresentativesHK(index) {
    var teamNameHK = [
        'Beacon Blockchain Group',
        'The Spearheads',
        'i-Landy',
        'Blockchain Health Credentials',
        'Blockio',
        'Microcent',
        'Lehlogonolo',
        'WM',
        'Fintech Passionate',
        'Ascension',
        'PChain',
        'TWOS'
    ];
    var target = teamNameHK[index - 1];
    window.open("../2020EXPO/2020-IBCOL-Finalists/HK-12-representatives/" + target + "/index.html");
}

function viewRepresentativesPL(index) {
    var teamNamePL = [
        'E-stamp',
        'E-voting for universities',
        'Simple Joint-Stock Company',
        'Performance data analysis in sport on the example of the Olympic boxing',
        'Legal approvement of electronic agreements',
        'Censorship resistant text messages'
    ];
    var target = teamNamePL[index - 1];
    window.open("../2020EXPO/2020-IBCOL-Finalists/PL-12-representatives/" + target + "/index.html");
}

function viewRepresentativesTW(index) {
    var teamNameTW = [
        'Researchain',
        'VeriRx Network'
    ];
    var target = teamNameTW[index - 1];
    window.open("../2020EXPO/2020-IBCOL-Finalists/TW-12-representatives/" + target + "/index.html");
}

function viewRepresentativesVN(index) {
    var teamNameVN = [
        'Bchain',
        'HebiLife',
        'Tokenbot ai'
    ];
    var target = teamNameVN[index - 1];
    window.open("../2020EXPO/2020-IBCOL-Finalists/VN-12-representatives/" + target + "/index.html");
}

function listCh(sel) {
    // console.log(sel.options[sel.selectedIndex].value);
    var showArr = ['bd', 'gb', 'ca', 'cn', 'es', 'hk', 'mn', 'ph', 'pl', 'th', 'tr', 'tw', 'uk', 'us', 'vn'];
    var selectedVal = sel.options[sel.selectedIndex].value;

    if (selectedVal === 'all') {
        // console.log('x');
        for (let i = 0; i < showArr.length; i++) {
            document.getElementById(showArr[i]).style.display = "block";
        }
        return;
    }

    for (let i = 0; i < showArr.length; i++) {
        if (selectedVal != showArr[i]) {
            document.getElementById(showArr[i]).style.display = "none";
        }
        if (selectedVal === showArr[i]) {
            document.getElementById(showArr[i]).style.display = "block";
        }
    }

    return;
}