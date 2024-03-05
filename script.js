function productos (sectionId){
    let section = document.getElementById(sectionId);
    if(section){
        section.scrollIntoView({ behavior:"smooth", block:"start"});
    }
}

function openPDFModal(pdfSrc) {
    var modal = document.getElementById('pdfModal');
    var pdfEmbed = document.getElementById('pdfEmbed');
    pdfEmbed.src = pdfSrc;
    modal.style.display = 'block';
}

function closePDFModal() {
    var modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
}

