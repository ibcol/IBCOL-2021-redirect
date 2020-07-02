function genRepInfoFromJson(myObj) {

    // XXBCOL 2020 REPRESENTATIVE
    document.getElementById('flag').src = myObj.flag;

    // Team Info
    document.getElementById('uniName').innerText = myObj.teamInfo.uniName;
    document.getElementById('teamName').innerText = myObj.teamInfo.teamName;
    document.getElementById('uniLogo').src = myObj.teamInfo.uniLogo;
    document.getElementById('pjName').innerText = myObj.teamInfo.pjName;

    // Project Description
    document.getElementById('pjDesc').innerText = myObj.pjInfo.pjDesc;

    // MEDIA
    document.getElementById('posterPDF').href = myObj.media.posterPDF;
    document.getElementById('pitchPDF').href = myObj.media.pitchPDF;
    document.getElementById('pitchVideo').href = myObj.media.pitchVideo;
    document.getElementById('demoVideo').href = myObj.media.demoVideo;
    document.getElementById('oneMinIntro').href = myObj.media.oneMinIntro;
    // TEAM MEMBERS

    for (i = 0; i < myObj.teamMembersInfo.length; i++) {
        var x = document.getElementById("teamMembers")
        x.innerHTML += (
            '<div class="row centre my-4 w-100">' +
            '<div class="col-md-4 col-sm-12 my-auto py-0 right-sm-centre">' +
            '<img src="' + myObj.teamMembersInfo[i].img + '" class="">' +
            '</div>' +

            '<div class="col-md-8 col-sm-12 my-auto py-0">' +
            '<div class="row">' +
            '<div class="col-md-12 col-sm-12 py-0">' +
            '<p class="bold fs-36 fs-sm-18 textBlack mb-0 left-sm-centre"><b>' + myObj.teamMembersInfo[i].name + '</b></p>' +
            '<p class=" fs-24 fs-sm-16 textBlack mb-0 left-sm-centre">' + myObj.teamMembersInfo[i].uni +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );

    }
}