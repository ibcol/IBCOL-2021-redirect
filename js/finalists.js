var teamIdForRowLeft = [
    '102',
    '009',
    '634',
    '220',
    '380',
    '258',
    '118',
    '236',
    '917',
    '755',
    '506',
    '999'
];

var teamIdForRowRight = [
    '328',
    '267',
    '105',
    '586',
    '858',
    '773',
    '167',
    '990',
    '201',
    '737',
    '487',
    '035'
];

// var uniRowLeft = [
//     'CUHK',
//     'HKU',
//     'POLYU',
//     'King George V School',
//     'CITYU',
//     'CITYU',
//     'HKU',
//     'POLYU',
//     'CUHK',
//     'HKU',
//     'CITYU',
//     'POLYU'
// ];



var uniRowRight = [
    'CITYU',
    'CITYU',
    'HKU',
    'HKU',
    'POLYU',
    'HKU',
    'CITYU',
    'CITYU',
    'POLYU',
    'HKU',
    'HSU',
    'HKU'
];


var pjNameRowLeft = [
    'TrustLand',
    'Blockchain Credentials',
    'Digital Entertainment industry benefited from blockchain',
    'Imposter',
    'MicroCent',
    'Blockchain Health Credentials',
    'Spearchain',
    'SecureResearch',
    'BCred: A Blockchain Platform for Academic Credential',
    'SmartLending',
    "Khany'iSA: Illuminate South Africa",
    'Optimise Payment Practice in Hong Kong Construction Industry by Blockchain Technology'
];


var pjNameRowRight = [
    'Ukwazi',
    'Blockchain Health Pass',
    'Beacon Blockchain Group',
    'Bchain Network',
    'Ascension',
    'Tixra: Blockchain-based Ticketing Platform',
    'i-Landy',
    'PhilanChain',
    'Arianee Killer',
    'MiHK-2020',
    'FoodStyle',
    'temp'
];

// var imgLeft = [
//     'cuhk.png',
//     'hku.png',
//     'polyu.png',
//     'King George V School.png',
//     'cityu.png',
//     'cityu.png',
//     'hku.png',
//     'polyu.png',
//     'cuhk.png',
//     'hku.png',
//     'cityu.png',
//     'polyu.png',
//     ];

// var imgRight = [
//     'cityu.png',
//     'cityu.png',
//     'hku.png',
//     'hku.png',
//     'polyu.png',
//     'hku.png',
//     'cityu.png',
//     'cityu.png',
//     'polyu.png',
//     'hku.png',
//     'hsu.png',
//     'hku.png',
// ];

var imgLeft = [
    'hkbcol.png'
    ];

var imgRight = [
    'hkbcol.png'
];



var finalists = document.getElementById('finalists');

for (let i = 0; i < teamIdForRowLeft.length; i++) {
    finalists.innerHTML += (
        '<div class="row mt-2">' +
        '<div class="col-md-6 col-sm-12">' +
        '<div class="row  justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 ">' +
        '<img src="./images/2020-HKBCOL-Finalists/uni/'+imgLeft[0]+'" class="">' +
        '</div>' +
        '<div class="col-8 ">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>'+pjNameRowLeft[i]+'</b></p>' +
        '<p class="mx-0 my-0 fs-14 textBlack w-100"> Team '+teamIdForRowLeft[i]+'</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowLeft[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12">' +
        '<div class="row  justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 ">' +
        '<img src="./images/2020-HKBCOL-Finalists/uni/'+imgRight[0]+'" class="">' +
        '</div>' +
        '<div class="col-8">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>'+pjNameRowRight[i]+'</b></p>' +
        '<p class="mx-0 my-0 fs-12 textBlack w-100"> Team '+teamIdForRowRight[i]+'</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">'+uniRowRight[i]+'</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}