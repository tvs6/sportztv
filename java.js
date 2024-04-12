// script.js
document.getElementById('myLink').addEventListener('click', generateLink);

function generateLink() {
    var baseUrl = 'https://tempskyview.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/somoyt000011226615544544.stream/';
    var chunks = 'chunks.m3u8';
    var fullLink = baseUrl + chunks;

    console.log('Link generated:', fullLink);
    // Uncomment the line below when everything is working
    // tv.location.href = '/play.php?c=' + fullLink;
}
