import { loadPdfWithCanvas } from "./pdf-viewer";

window.addEventListener('load', () => {
  loadPdfWithCanvas('./sample1.pdf', 'pdf-container');
});