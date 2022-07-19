import { loadPdfWithCanvas, loadPdfWithSvg } from "./pdf-viewer";

window.addEventListener('load', () => {
  // loadPdfWithCanvas('./sample1.pdf', 'pdf-container');
  loadPdfWithSvg('./sample1.pdf', 'pdf-container');
});