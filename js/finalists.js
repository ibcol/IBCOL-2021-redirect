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
    'Researchain',
    'xxx',
    'xxx',
    'xxx',
    'xxx',
    'xxx'
];

var teamNameRowRightTW = [
    '交大科法VeriRx Network',
    'xxx',
    'xxx',
    'xxx',
    'xxx',
    'xxx'
];
// TW


// XX - templates
var pjNameRowLeftXX = [
    '',
    '',
    '',
    '',
    '',
    ''
];

var pjNameRowRightXX = [
    '',
    '',
    '',
    '',
    '',
    ''
];

var teamNameRowLeftXX = [
    'xxx',
    'xxx',
    'xxx',
    'xxx',
    'xxx',
    'xxx'
];

var teamNameRowRightXX = [
    'xxx',
    'xxx',
    'xxx',
    'xxx',
    'xxx',
    'xxx'
];
// XX




var finalistsCountries = ['hk', 'bd','tw'];

var finalists = document.getElementById('finalists');
var hk = document.getElementById('hk');
var bd = document.getElementById('bd');
var tw = document.getElementById('tw');
// var cn = document.getElementById('cn');

for (let i = 0; i < 6; i++) {
    hk.innerHTML += (
        '<div class="row mt-4">' +
        '<div class="col-md-6 col-sm-12" onclick="viewRepresentatives(' + teamIdForRowLeft[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 ">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/hkFlat.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowLeftHK[i] + '</b> (HK-' + teamIdForRowLeft[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12" onclick="viewRepresentatives(' + teamIdForRowRight[i] + ')" style="cursor:pointer">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 ">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/hkFlat.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
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
        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 ">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/bdFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowLeftBD[i] + '</b> (BD-' + teamIdForRowLeft[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowLeftBD[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 ">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/bdFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
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
        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 ">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/twFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowLeftTW[i] + '</b> (TW-' + teamIdForRowLeft[i] + ')</p>' +
        '<p class="mx-0 my-0 fs-12 textBlack line-h-1 w-100">' + pjNameRowLeftTW[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-10 textBlack w-100"> HK-' + teamIdForRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 ">' +
        '<img src=".././images/2020-IBCOL-Finalists/flat/twFlag.png" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
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



function viewRepresentatives(index) {
    var teamNameHK = [
        'Beacon Blockchain Group',
        'The Spearheads',
        'i-Landy',
        'Blockchain Health Credentials',
        'Blockio',
        'MicroCent',
        'Lehlogonolo',
        'WM',
        'Fintech Passionate',
        'Ascension',
        'PChain',
        'TWOS'
    ];

    var target = teamNameHK[index - 1];
    window.open("../2020EXPO/2020-IBCOL-Finalists/HK-12-representatives/" + target + "/" + target + ".html");

}



function listCh(sel) {
    // console.log(sel.options[sel.selectedIndex].value);
    var showArr = ['hk', 'bd', 'tw'];
    var selectedVal = sel.options[sel.selectedIndex].value;

    if (selectedVal === 'all') {
        console.log('x');
        for (let i = 0; i < showArr.length; i++) {
            document.getElementById(showArr[i]).style.display = "block";
        }
        return;
    }

    for (let i = 0; i < showArr.length; i++) {
        if (selectedVal !== showArr[i]) {
            document.getElementById(showArr[i]).style.display = "none";
        }
        if (selectedVal === showArr[i]) {
            document.getElementById(showArr[i]).style.display = "block";
        }
    }

    return;
}