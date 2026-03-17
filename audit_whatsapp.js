
import fs from 'fs';
import path from 'path';

function findFiles(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const componentsDir = 'c:\\Users\\GC-Sales-VF.DESKTOP-26LGMUV\\Downloads\\react-dashboard\\src\\Components';
const files = findFiles(componentsDir);

const results = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('bi-whatsapp') || content.includes('wa.me')) {
    const hasHook = content.includes('useWhatsAppRouting');
    const hasHardcoded = /wa\.me\/971[0-9]{8,11}/.test(content);
    const hasPlaceholder = /href=["']#["']/.test(content) && content.includes('bi-whatsapp');
    
    if (!hasHook || hasHardcoded || hasPlaceholder) {
      results.push({
        file,
        hasHook,
        hasHardcoded,
        hasPlaceholder
      });
    }
  }
});

console.log(JSON.stringify(results, null, 2));
