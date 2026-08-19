# Copy All Assets to project
$brain = "C:\Users\abhis\.gemini\antigravity\brain\7663e67c-2264-4777-b156-54b896b8e4b7"
$dest = "C:\Users\abhis\Desktop\public 1 (1)\public\images"

# Logo
Copy-Item "$brain\media__1787031199209.jpg" "$dest\logo-whitegravity.webp" -Force
Write-Host "Logo copied!" -ForegroundColor Green

# Ecommerce image
Copy-Item "$brain\media__1787030664573.jpg" "$dest\service-ecommerce.jpg" -Force
Write-Host "Ecommerce image copied!" -ForegroundColor Green

# Mobile Dev image
Copy-Item "$brain\media__1787030673755.png" "$dest\service-mobile.jpg" -Force
Write-Host "Mobile Dev image copied!" -ForegroundColor Green

# CRM image
Copy-Item "$brain\media__1787032971132.jpg" "$dest\service-crm.jpg" -Force
Write-Host "CRM image copied!" -ForegroundColor Green

# Digital Marketing / SEO image
Copy-Item "$brain\media__1787033293992.png" "$dest\service-marketing.jpg" -Force
Write-Host "Digital Marketing (SEO) image copied!" -ForegroundColor Green

Write-Host "`nSab copy ho gaya! Press any key to exit..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
