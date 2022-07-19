import * as pdfjsLib from 'pdfjs-dist/build/pdf'; 
import { SVGGraphics } from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';

// https://stackoverflow.com/questions/62066037/render-pdf-js-page-like-real-html-elements-not-canvas-or-svg
// https://javascript.hotexamples.com/examples/pdfjs-dist/SVGGraphics/getSVG/javascript-svggraphics-getsvg-method-examples.html

export const loadPdfWithCanvas = (pdfUrl: string, targetId: string): void => {
  const loadingTask = pdfjsLib.getDocument(pdfUrl);
  loadingTask.promise.then(async(pdf) => {
    const container = document.getElementById(targetId);

    for (let i = 1; i <= pdf.numPages; i++) {
      // Get desired page
      pdf.getPage(i).then(function(page) {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });
        const div = document.createElement("div");

        // Set id attribute with page-#{pdf_page_number} format
        div.setAttribute("id", "page-" + (page._pageIndex + 1));

        // This will keep positions of child elements as per our needs
        div.setAttribute("style", "position: relative");

        // Append div within div#container
        container?.appendChild(div);

        // Create a new Canvas element
        const canvas = document.createElement("canvas");

        // Append Canvas within div#page-#{pdf_page_number}
        div.appendChild(canvas);

        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        // Render PDF page
        page.render(renderContext);
      });
    }
  });
};

export const loadPdfWithSvg = (pdfUrl: string, targetId: string): void => {
  const loadingTask = pdfjsLib.getDocument(pdfUrl);
  loadingTask.promise.then(async(pdf) => {
    const container = document.getElementById(targetId);

    for (let i = 1; i <= pdf.numPages; i++) {
      // Get desired page
      pdf.getPage(i).then(function(page) {
        const scale = 1.5; 
        const viewport = page.getViewport(scale); 
        const canvas = document.createElement('canvas'); 
        const context = canvas.getContext('2d'); 
        canvas.height = viewport.height; 
        canvas.width = viewport.width; // Get div#the-svg 
        const svgContainer = document.createElement('svg'); // Set dimensions 
        svgContainer.style.width = viewport.width + 'px'; 
        svgContainer.style.height = viewport.height + 'px'; // SVG rendering by PDF.js 
        container?.appendChild(svgContainer);
        page.getOperatorList().then(function (opList) { 
          const svgGfx = new SVGGraphics(page.commonObjs, page.objs); 
          return svgGfx.getSVG(opList, viewport); 
        }).then(function (svg) { 
          svgContainer.appendChild(svg); 
        }); 
      });
    }
  });
};

