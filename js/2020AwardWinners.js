var awardWinnersArr = [
  "./2020EXPO/2020-IBCOL-Finalists/HK-12-representatives/BCrew/index.html",
  "./2020EXPO/2020-IBCOL-Finalists/BD-12-representatives/Team%20Digital%20Innovation/index.html",
  "./2020EXPO/2020-IBCOL-Finalists/NL-12-representatives/Neuro Trace/index.html",
  "./2020EXPO/2020-IBCOL-Finalists/HK-12-representatives/Microcent/index.html",
  "./2020EXPO/2020-IBCOL-Finalists/BD-12-representatives/DU_Nimbus/index.html",
  "./2020EXPO/2020-IBCOL-Finalists/HK-12-representatives/BCrew/index.html",
  "./2020EXPO/2020-IBCOL-Finalists/HK-12-representatives/Blockio/index.html",
];

function awardWinners(index) {
  window.open(awardWinnersArr[index]);
}

// award
var indexArr = [
  ["01", "02"],
  ["03", "04"],
  ["05", "06"],
  ["07", "08"],
  ["09", "10"],
  ["11", "12"],

  ["01", "05"],

  ["03", "05"],

  ["01", "02"],
  ["03", "04"],
  ["05", "06"],
  ["07", "08"],
  ["09", "10"],
  ["11", "12"],

  ["01", "02"],

  ["02", "01"],

  ["02", "01"],

  ["01", "02"],
];

var teamNameAndID = [
  ["Hyperactive Oranges (BD-01)", "Team Leads Chain (BD-02)"],
  ["DU_Nimbus (BD-03)", "Team Digital Innovation (BD-04)"],
  ["TORR (BD-05)", "WEIB_3:1  (BD-06)"],
  ["Brogrammers (BD-07)", "Aviato (BD-08)"],
  ["DU_Hyperledger (BD-09)", "Cosmic Crew (BD-10)"],
  ["Code Nine BD (BD-11)", "BUET_SKAMmers_1 (BD-12)"],
  ["Blossom Block (CA-01)", "JustBOT (CA-05)"],
  ["Carbonbase (CN-03)", "Golden Pear (CN-05)"],
  ["Beacon Blockchain Group (HK-01)", "The Spearheads (HK-02)"],
  ["i-Landy (HK-03)", "Blockchain Health Credentials (HK-04)"],
  ["Blockio (HK-05)", "MicroCent (HK-06)"],
  ["Khany" + "'" + "iSA (HK-07)", "WM (HK-08)"],
  ["Fintech Passionate (HK-09)", "Ascension (HK-10)"],
  ["BCrew (HK-11)", "TWOS (HK-12)"],
  ["Agnos (NL-01)", "Neuro Trace (NL-02)"],
  ["Christine (PH-02)", "Blockchain Society SGH (PL-01)"],
  ["E-voting for universities (Pl-02)", "Researchain (TW-01)"],
  ["Meld Exchange (MeldX) (US-01)", "HebiLife (VN-02)"],
];

var pjName = [
  ["Health Ledger", "Track, Trace and Verify Insulin Medicine"],
  [
    "National blockchain driven private cloud-based platform for Bangladesh: adopted in land administration",
    "Decentralized Identity and Aid Distribution Platform for Rohingya Refugees",
  ],
  [
    "MediTech Bangla",
    "PROBAHO - Decentralized VAT Automation Network for Ensuring Economic Growth",
  ],
  [
    "RETransparentNET, A Platform for Secure Transaction in Real Estate Industry",
    "Arun",
  ],
  [
    "ReliChain : Trust and transparency in relief supply chain",
    "Blockchain to Prevent Public Health Risks caused by Counterfeit Skin and Health Care Products",
  ],
  [
    "BONTON, A Transparent Relief Distribution Using Blockchain Technology",
    "AprChain",
  ],
  ["CampusSafe, Helping Students to Get Back to Schools Safely", "justbOT"],
  ["Carbonbase", "Golden Pear"],

  [
    "Blockchain in Crane Risk management",
    "Spearchain: transparent track-and-trace platform for monitoring medical donation",
  ],
  [
    "One-stop rental & asset management program",
    "Privacy-preserving certification of the antibody test",
  ],
  ["Ukwazi", "Blockchain for microcredit"],
  [
    "Khany" + "'" + "iSA: Illuminate South Africa",
    "Blockchain-based Organizational Whistleblowing System (BOWS)",
  ],
  ["SmartLending", "Blockchain Technology for Aviation Inventory Management"],
  [
    "BCred: A Blockchain Platform for Academic Credentials",
    "Optimise Payment Practice in Hong Kong Construction Industry by Blockchain Technology",
  ],

  ["Credible news platform", "Blockchain IoT for Supply Chain"],
  ["Subay", "E-stamp"],
  [
    "Remote voting system for universities based on blockchain",
    "Researchain | Decentralize Knowledge",
  ],
  [
    "Founder-friendly avenue of raising capital",
    "Blockchain and AI application for health microinsurance",
  ],
];

var img = [
  [
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/bdFlag.png",
  ],

  [
    ".././images/2020-IBCOL-Finalists/flat/caFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/caFlag.png",
  ],

  [
    ".././images/2020-IBCOL-Finalists/flat/cnFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/cnFlag.png",
  ],

  [
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/hkFlag.png",
  ],

  [
    ".././images/2020-IBCOL-Finalists/flat/nlFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/nlFlag.png",
  ],

  [
    ".././images/2020-IBCOL-Finalists/flat/phFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/plFlag.png",
  ],

  [
    ".././images/2020-IBCOL-Finalists/flat/plFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/twFlag.png",
  ],
  [
    ".././images/2020-IBCOL-Finalists/flat/usFlag.png",
    ".././images/2020-IBCOL-Finalists/flat/vnFlag.png",
  ],
];

var meritWinnersLink = [
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
];

var allAwardTeams = document.getElementById("allAwardTeams");

for (let i = 0; i < 18; i++) {
  if (i == 0) {
    allAwardTeams.innerHTML +=
      '<div class="row" id="awardRow' + i + '">' + "</div>";
  } else {
    allAwardTeams.innerHTML +=
      '<div class="row mt-5" id="awardRow' + i + '">' + "</div>";
  }
  var awardRowX = document.getElementById("awardRow" + i);
  var targetCountry = "";
  for (let j = 0; j <= 1; j++) {
    if (i <= 5) {
      targetCountry = "bd";
    } else if (i == 6) {
      targetCountry = "ca";
    } else if (i == 7) {
      targetCountry = "cn";
    } else if (i >= 8 && i <= 13) {
      targetCountry = "hk";
    } else if (i == 14) {
      targetCountry = "nl";
    }
    if (j == 1) {
      if (i == 15) {
        targetCountry = "pl";
      } else if (i == 16) {
        targetCountry = "tw";
      } else if (i == 17) {
        targetCountry = "vn";
      }
      awardRowX.innerHTML +=
        '<div class="col-md-6 col-sm-12 centre mt-5 mt-md-0 pointer"  onclick="meritWinners(' +
        "'" +
        targetCountry +
        indexArr[i][j] +
        "'" +
        ')">' +
        '<div class="">' +
        '<div class="" id="winnerInfo">' +
        '<div class="row w-100 mx-0">' +
        '<div class="col-auto col-sm-4 text-right-413-centre">' +
        '<img class="" src="' +
        img[i][j] +
        '">' +
        "</div>" +
        '<div class="col px-0 my-auto text-left-413-centre ">' +
        '<div class="boldText textBlack fs-14 text-left">' +
        teamNameAndID[i][j] +
        "</div>" +
        '<div class="fs-italicized fs-12 textBlack text-left">' +
        pjName[i][j] +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    } else {
      if (i == 15) {
        targetCountry = "ph";
      } else if (i == 16) {
        targetCountry = "pl";
      } else if (i == 17) {
        targetCountry = "us";
      }
      awardRowX.innerHTML +=
        '<div class="col-md-6 col-sm-12 centre pointer" onclick="meritWinners(' +
        "'" +
        targetCountry +
        indexArr[i][j] +
        "'" +
        ')">' +
        '<div class="">' +
        '<div class="" id="winnerInfo">' +
        '<div class="row w-100 mx-0">' +
        '<div class="col-auto col-sm-4 text-right-413-centre">' +
        '<img class="" src="' +
        img[i][j] +
        '">' +
        "</div>" +
        '<div class="col px-0 my-auto text-left-413-centre ">' +
        '<div class="boldText textBlack fs-14 text-left">' +
        teamNameAndID[i][j] +
        "</div>" +
        '<div class="fs-italicized fs-12 textBlack text-left">' +
        pjName[i][j] +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
  }
}

function meritWinners(target) {
  var bd = [
    "./2020-IBCOL-Finalists/BD-12-representatives/Hyperactive%20Oranges/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/Team%20Leads%20Chain/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/DU_Nimbus/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/Team%20Digital%20Innovation/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/TORR/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/WEIB_3:1/index.html",

    "./2020-IBCOL-Finalists/BD-12-representatives/Brogrammers/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/Aviato/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/DU_Hyperledger/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/Cosmic%20Crew/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/Code%20Nine%20BD/index.html",
    "./2020-IBCOL-Finalists/BD-12-representatives/BUET_SKAMmers_1/index.html",
  ];

  var ca = [
    "./2020-IBCOL-Finalists/CA-12-representatives/Blossom%20Power/index.html",
    "",
    "",
    "",
    "./2020-IBCOL-Finalists/CA-12-representatives/justBOT/index.html",
  ];

  var cn = [
    "",
    "",
    "./2020-IBCOL-Finalists/CN-12-representatives/Carbonbase/index.html",
    "",
    "./2020-IBCOL-Finalists/CN-12-representatives/Golden%20Pear/index.html",
  ];

  var hk = [
    "./2020-IBCOL-Finalists/HK-12-representatives/Beacon Blockchain Group/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/The Spearheads/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/i-Landy/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/Blockchain Health Credentials/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/Blockio/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/Microcent/index.html",

    "./2020-IBCOL-Finalists/HK-12-representatives/Khany" +
      "'" +
      "iSA/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/WM/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/Fintech Passionate/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/Ascension/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/BCrew/index.html",
    "./2020-IBCOL-Finalists/HK-12-representatives/TWOS/index.html",
  ];

  var nl = [
    "./2020-IBCOL-Finalists/NL-12-representatives/Agnos/index.html",
    "./2020-IBCOL-Finalists/NL-12-representatives/Neuro%20Trace/index.html",
  ];

  var pl = [
    "./2020-IBCOL-Finalists/PL-12-representatives/Blockchain%20Society%20SGH/index.html",
    "./2020-IBCOL-Finalists/PL-12-representatives/E-voting%20for%20universities/index.html",
  ];

  var ph = [
    "",
    "./2020-IBCOL-Finalists/PH-12-representatives/Christine/index.html",
  ];

  var tw = [
    "./2020-IBCOL-Finalists/TW-12-representatives/Researchain/index.html",
  ];

  var us = [
    "./2020-IBCOL-Finalists/US-12-representatives/Meld%20Exchange%20(MeldX)/index.html",
  ];

  var vn = [
    "",
    "./2020-IBCOL-Finalists/VN-12-representatives/HebiLife/index.html",
  ];

  var countryCode = target.slice(0, 2);
  var index = parseInt(target.slice(2, 4));

  switch (checkCountries(countryCode)) {
    case "bd":
      window.open(bd[index - 1]);
      break;

    case "ca":
      window.open(ca[index - 1]);
      break;

    case "cn":
      window.open(cn[index - 1]);
      break;

    case "hk":
      window.open(hk[index - 1]);
      break;

    case "nl":
      window.open(nl[index - 1]);
      break;

    case "pl":
      window.open(pl[index - 1]);
      break;

    case "ph":
      window.open(ph[index - 1]);
      break;

    case "tw":
      window.open(tw[index - 1]);
      break;

    case "us":
      window.open(us[index - 1]);
      break;

    case "vn":
      window.open(vn[index - 1]);
      break;
  }
}

function checkCountries(countryCode) {
  var showArr = [
    "bd",
    "ca",
    "cn",
    "es",
    "hk",
    "mn",
    "nl",
    "ph",
    "pl",
    "th",
    "tr",
    "tw",
    "uk",
    "us",
    "vn",
  ];
  for (let i = 0; i <= showArr.length; i++) {
    if (countryCode == showArr[i]) {
      return showArr[i];
    }
  }
}
