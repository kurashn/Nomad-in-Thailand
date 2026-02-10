const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Use dev server for correct image path resolution
    const pdfPath = path.join(process.cwd(), 'public', 'lead-magnet', 'nomad-thailand-guide-2026.pdf');
    const pageUrl = 'http://localhost:3000/lead-magnet/thailand_migration_guide.html';

    console.log(`Loading: ${pageUrl}`);

    try {
        await page.goto(pageUrl, { waitUntil: 'networkidle0', timeout: 30000 });

        // Inject CSS to remove spacing that causes blank pages
        await page.addStyleTag({
            content: `
                body { padding: 0 !important; margin: 0 !important; background: none !important; }
                .page { 
                    box-shadow: none !important; 
                    margin: 0 !important;
                    height: 297mm !important;
                    page-break-after: always !important;
                    page-break-inside: avoid !important;
                }
                .page:last-child { page-break-after: avoid !important; }
            `
        });

        // Generate PDF
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });

        console.log(`PDF generated successfully at: ${pdfPath}`);
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
})();
