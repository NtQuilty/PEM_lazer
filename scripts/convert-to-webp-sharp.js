import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function convertToWebP() {
  console.log('🔄 Конвертация PNG изображений в WebP с помощью Sharp...');
  
  try {
    // Находим все PNG файлы
    const pngFiles = await glob('public/images/**/*.png');
    console.log(`📁 Найдено ${pngFiles.length} PNG файлов`);
    
    let totalSaved = 0;
    
    for (const pngPath of pngFiles) {
      // Создаем путь для WebP файла
      const webpPath = pngPath.replace('.png', '.webp');
      
      // Получаем размер оригинального файла
      const originalSize = fs.statSync(pngPath).size;
      
      // Конвертируем в WebP
      await sharp(pngPath)
        .webp({ 
          quality: 85,   // Высокое качество
          lossless: false,
          nearLossless: false,
          smartSubsample: true
        })
        .toFile(webpPath);
      
      // Получаем размер нового файла
      const webpSize = fs.statSync(webpPath).size;
      const savings = Math.round((1 - webpSize / originalSize) * 100);
      const savedKB = Math.round((originalSize - webpSize) / 1024);
      
      totalSaved += savedKB;
      
      const relativePngPath = path.relative('public/images', pngPath);
      const relativeWebpPath = path.relative('public/images', webpPath);
      
      console.log(`  ✅ ${relativePngPath} → ${relativeWebpPath} (-${savings}%, -${savedKB}KB)`);
    }
    
    console.log(`\n🎉 Конвертация завершена!`);
    console.log(`💾 Общая экономия: ${Math.round(totalSaved / 1024)} MB`);
    console.log(`\n⚠️  Следующий шаг: Обновить пути к изображениям в коде (.png → .webp)`);
    
  } catch (error) {
    console.error('❌ Ошибка при конвертации:', error);
  }
}

convertToWebP();
