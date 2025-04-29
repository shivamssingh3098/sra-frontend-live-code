import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// function htmlToPdfConverter(htmlElementId, fileName) {
//     console.log(htmlElementId+""+fileName);
//     const input = document.getElementById(htmlElementId);
//     html2canvas(input)
//         .then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF();
//             const imgProps = pdf.getImageProperties(imgData);
//             const pdfWidth = pdf.internal.pageSize.getWidth();
//             const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//             pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//             pdf.save(fileName + ".pdf");
//         });
// };

function htmlToPdfConverter(htmlElementId, fileName) {
    console.log(htmlElementId + " " + fileName);
    const input = document.getElementById(htmlElementId);
    
    html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
    
        const imgWidthPx = canvas.width;
        const imgHeightPx = canvas.height;
    
        // Convert px to mm (1px = 0.264583 mm)
        const pxToMm = 0.264583;
        const pdfWidth = imgWidthPx * pxToMm;
        const pdfHeight = imgHeightPx * pxToMm;
    
        // Create PDF with dynamic size
        const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);
    
        // Insert the image into PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(fileName + ".pdf");
    });
    
}

export default htmlToPdfConverter;
