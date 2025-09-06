const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { uploadToAzureBlob, generateSASUrl } = require('./services/azureBlobService');

(async () => {
  const filePath = path.join(__dirname, 'uploads/resumes/Resume.pdf');
  const originalName = 'Resume .pdf';
  const mimeType = 'application/pdf';

  try {
    const blob = await uploadToAzureBlob(filePath, originalName, mimeType);
    const sasUrl = generateSASUrl(blob.blobName);
    console.log('✅ Uploaded. Secure resume link:', sasUrl);
  } catch (err) {
    console.error('❌ Upload failed:', err);
  }
})();
