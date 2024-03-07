function productos (sectionId){
    let section = document.getElementById(sectionId);
    if(section){
        section.scrollIntoView({ behavior:"smooth", block:"start"});
    }
}

function openPDFModal(pdfSrc) {
    let modal = document.getElementById('pdfModal');
    let pdfEmbed = document.getElementById('pdfEmbed');
    pdfEmbed.src = pdfSrc;
    modal.style.display = 'block';
}

function closePDFModal() {
    let modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
}

