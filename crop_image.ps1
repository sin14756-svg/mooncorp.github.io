Add-Type -AssemblyName System.Drawing
$path = "pic\MyCompany\1.png"
$backup = "pic\MyCompany\1_backup_original.png"
if (-not (Test-Path $backup)) {
    Copy-Item -Path $path -Destination $backup
}

$img = [System.Drawing.Image]::FromFile((Resolve-Path $backup).Path)
$targetHeight = [int]$img.Height
$targetWidth = [int][math]::Round($targetHeight * 4.0 / 3.0)

$bmp = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$srcRect = New-Object System.Drawing.Rectangle 0, 0, $targetWidth, $targetHeight
$destRect = New-Object System.Drawing.Rectangle 0, 0, $targetWidth, $targetHeight

$graphics.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$graphics.Dispose()
$img.Dispose()

$bmp.Save((Resolve-Path ".").Path + "\" + $path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Image successfully cropped to $targetWidth x $targetHeight"
