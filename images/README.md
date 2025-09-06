# Images Directory

This directory contains optimized images for the Palm Tree Tech website.

## Optimized Images

### Logo Images
- `logo-optimized.png` (51KB) - Optimized PNG version
- `logo-optimized.webp` (11KB) - WebP version for modern browsers
- `logo.png` (1.3MB) - Original file (kept for reference)

### Hero Images  
- `hero-optimized.png` (647KB) - Optimized PNG version
- `hero-optimized.webp` (69KB) - WebP version for modern browsers
- `hero.png` (2.1MB) - Original file (kept for reference)

## Performance Improvements

The images have been optimized for web performance:

- **Logo**: 96.2% size reduction (1.3MB → 51KB PNG, 11KB WebP)
- **Hero**: 69.7% size reduction (2.1MB → 647KB PNG, 68KB WebP)

## Browser Support

The HTML uses `<picture>` elements with WebP fallbacks:
- Modern browsers: Load WebP format (smallest file size)
- Older browsers: Fall back to optimized PNG format
- All browsers: Get significantly smaller files than original

## How to Update Images

1. Replace the original files (`logo.png`, `hero.png`)
2. Run the optimization script to create new optimized versions
3. The HTML will automatically use the optimized versions

## File Structure

```
images/
├── logo.png (original)
├── logo-optimized.png (optimized PNG)
├── logo-optimized.webp (WebP version)
├── hero.png (original)
├── hero-optimized.png (optimized PNG)
├── hero-optimized.webp (WebP version)
└── README.md (this file)
```