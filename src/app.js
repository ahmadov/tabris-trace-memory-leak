const {Button, contentView, PdfView} = require('tabris');
const { Downloader } = require('./downloader');

const tabrisEbookURIs = [
  'https://tabrisjs.com/downloads/ebook/tabrisjs-3.0.0.pdf',
  'https://tabrisjs.com/downloads/ebook/tabrisjs-3.1.0.pdf',
  'https://tabrisjs.com/downloads/ebook/tabrisjs-3.2.0.pdf',
  'https://tabrisjs.com/downloads/ebook/tabrisjs-3.3.0.pdf',
  'https://tabrisjs.com/downloads/ebook/tabrisjs-3.4.0.pdf',
  'https://tabrisjs.com/downloads/ebook/tabrisjs-3.5.0.pdf',
  'https://tabrisjs.com/downloads/ebook/tabrisjs-3.6.0.pdf'
];
let currentUriIndex = 0;

new Button({
  id: 'button',
  centerX: true, top: 20,
  text: 'Show PDF'
}).onSelect(async() => {
  const URI = tabrisEbookURIs[currentUriIndex++ % tabrisEbookURIs.length];
  const blob = await new Downloader().download(URI).asBlob();
  createPdfView(blob);
})
.appendTo(contentView);

function createPdfView(blob) {
  contentView.append(
    new PdfView({
      top: '#button 20',
      bottom: 0,
      layoutData: 'stretchX',
      pageElevation: 4,
      src: blob
    }),
  );
}
