// HK
var teamIdForRowLeftHK = [
    '102',
    '009',
    '634',
    '220'
];

var teamIdForRowRightHK = [
    '328',
    '267',
    '105',
    '586'
];

var pjNameRowLeftHK = [
    'TrustLand',
    'Blockchain Credentials',
    'Digital Entertainment industry benefited from blockchain',
    'Imposter'

];

var pjNameRowRightHK = [
    'Ukwazi',
    'Blockchain Health Pass',
    'Beacon Blockchain Group',
    'Bchain Network'
];

var imgLeftHK = [
    'magic-chain/hkFlat.png'
];

var imgRightHK = [
    'magic-chain/hkFlat.png'
];

// CN
var teamIdForRowLeftCN = [
    '222',
    '223',
    '224',
    '225'
];

var teamIdForRowRightCN = [
    '661',
    '662',
    '663',
    '664'
];

var pjNameRowLeftCN = [
    'TrustLand',
    'Blockchain Credentials',
    'Digital Entertainment industry benefited from blockchain',
    'Imposter'

];

var pjNameRowRightCN = [
    'Ukwazi',
    'Blockchain Health Pass',
    'Beacon Blockchain Group',
    'Bchain Network'
];

var imgLeftCN = [
    'team-x/cnFlat.png'
];

var imgRightCN = [
    'team-x/cnFlat.png'
];


var finalists = document.getElementById('finalists');
var hk = document.getElementById('hk');
var cn = document.getElementById('cn');

for (let i = 0; i < teamIdForRowLeftHK.length; i++) {
    hk.innerHTML += (
        '<div class="row mt-4">' +
        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 ">' +
        '<img src="../2020EXPO/2020-IBCOL-Finalists/' + imgLeftHK[0] + '" class="">' +
        '</div>' +
        '<div class="col-8 ">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + pjNameRowLeftHK[i] + '</b></p>' +
        '<p class="mx-0 my-0 fs-14 textBlack w-100"> Team ' + teamIdForRowLeftHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 ">' +
        '<img src="../2020EXPO/2020-IBCOL-Finalists/' + imgRightHK[0] + '" class="">' +
        '</div>' +
        '<div class="col-8">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + pjNameRowRightHK[i] + '</b></p>' +
        '<p class="mx-0 my-0 fs-12 textBlack w-100"> Team ' + teamIdForRowRightHK[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowRight[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}


for (let i = 0; i < teamIdForRowLeftCN.length; i++) {
    cn.innerHTML += (
        '<div class="row mt-4">' +
        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 ">' +
        '<img src="../2020EXPO/2020-IBCOL-Finalists/' + imgLeftCN[0] + '" class="">' +
        '</div>' +
        '<div class="col-8 ">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + pjNameRowLeftCN[i] + '</b></p>' +
        '<p class="mx-0 my-0 fs-14 textBlack w-100"> Team ' + teamIdForRowLeftCN[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12">' +
        '<div class="row mt-2 justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 ">' +
        '<img src="../2020EXPO/2020-IBCOL-Finalists/' + imgRightCN[0] + '" class="">' +
        '</div>' +
        '<div class="col-8">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + pjNameRowRightCN[i] + '</b></p>' +
        '<p class="mx-0 my-0 fs-12 textBlack w-100"> Team ' + teamIdForRowRightCN[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowRight[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}

function listCh(sel) {
    // console.log(sel.options[sel.selectedIndex].value);
    var showArr = ['hk', 'cn'];
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