# Logo Upload Instructions

## How to Add Your Custom Logo

1. **Upload your logo file** to this `images` folder
2. **Rename it to `logo.png`** (or update the HTML to match your filename)
3. **Recommended formats:**
   - PNG (transparent background recommended)
   - SVG (scalable, best quality)
   - JPG (if no transparency needed)

## Logo Specifications

- **Recommended size:** 200x200px or larger
- **Format:** PNG with transparent background
- **Filename:** `logo.png`
- **Aspect ratio:** Square or rectangular (will be resized automatically)

## Alternative Filenames

If you want to use a different filename, update these lines in `index.html`:
- Line 17: `<img src="images/YOUR_LOGO_FILE" alt="Palm Tree Tech LLC Logo" class="logo-image">`
- Line 229: `<img src="images/YOUR_LOGO_FILE" alt="Palm Tree Tech LLC Logo" class="logo-image">`

## Logo Styling

The logo will be automatically:
- Resized to 40px height in navigation
- Resized to 30px height in footer
- Responsive on mobile devices
- Maintained aspect ratio

## Example Logo Files

- `logo.png` - Main logo file
- `logo.svg` - Vector version (if available)
- `logo-white.png` - White version for dark backgrounds