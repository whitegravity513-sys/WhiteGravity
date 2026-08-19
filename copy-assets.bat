@echo off
echo Copying images...

set BRAIN=C:\Users\abhis\.gemini\antigravity\brain\7663e67c-2264-4777-b156-54b896b8e4b7
set DEST=C:\Users\abhis\Desktop\public 1 (1)\public\images

copy /Y "%BRAIN%\media__1787031199209.jpg" "%DEST%\logo-whitegravity.webp"
echo Logo done!

copy /Y "%BRAIN%\media__1787030664573.jpg" "%DEST%\service-ecommerce.jpg"
echo Ecommerce done!

copy /Y "%BRAIN%\media__1787030673755.png" "%DEST%\service-mobile.jpg"
echo Mobile Dev done!

copy /Y "%BRAIN%\media__1787033642582.jpg" "%DEST%\service-crm.jpg"
echo CRM (new) done!

copy /Y "%BRAIN%\media__1787033570198.png" "%DEST%\service-marketing.jpg"
echo Digital Marketing / SEO done!

copy /Y "%BRAIN%\media__1787034327115.png" "%DEST%\service-website.jpg"
echo Website Development done!

echo.
echo === SAB HO GAYA! ===
pause
