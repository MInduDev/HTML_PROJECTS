# Aurum Motors

A responsive luxury automotive showcase built with HTML5, CSS3, Bootstrap 5.3, Bootstrap Icons and Vanilla JavaScript.

## Project structure

```text
Aurum-Motors/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo/
    ├── hero/
    ├── cars/
    ├── brands/
    ├── about/
    ├── showroom/
    └── testimonials/
```

The image folders are included for your own local assets. The current demo uses remote Unsplash image URLs in the HTML and CSS, so no local image files are required to preview it.

## Run locally

1. Extract the ZIP file.
2. Open the `Aurum-Motors` folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Keep an internet connection active because Bootstrap, Bootstrap Icons, Google Fonts and the sample photographs load from CDNs/external image URLs.

## Included interactions

- Responsive Bootstrap navigation.
- Hero image slider controls.
- Brand, vehicle type and price filters.
- Brand shortcuts that filter the collection.
- Wishlist toggles.
- Vehicle detail modal.
- Video-introduction modal.
- Testimonial slider.
- Newsletter email validation (front-end demo only).
- Active navigation state and back-to-top button.
- Scroll reveal effects.

## Before publishing

- Replace the sample phone number, email and location with verified business details.
- Replace sample vehicle prices/specifications with accurate listings.
- Connect the newsletter form to a real mailing-list service or backend.
- Replace the demo testimonials with authorized, genuine customer reviews.
- For production reliability, download and optimize the selected photographs into the matching `images/` folders, then update the image paths in `index.html`, `css/style.css` and `js/script.js`.
- The brand strip uses restrained text-based wordmarks rather than pretending to provide official logo artwork. Add licensed official SVG logos to `images/brands/` if you have permission to use them.

## Notes

Vehicle information and customer quotes are illustrative demo content. The site is a static front-end project and does not include a booking, inventory or newsletter backend.


## Assets folder

Add the original car photographs inside `Assets/` using these filenames:

- `BG-img.jpg` — hero / showroom background
- `BMW-M4.jpg`
- `Mercedes-AMG GTR.jpg`
- `Audi R8 Coupe.jpg`
- `Midnight-Lamborghini.jpg` — about section
- `Porsche 911 Turbo S.jpg`

The image filenames are based on the names visible in the supplied Windows Explorer screenshot. If your original files use another extension (for example `.png` or `.webp`), keep the base filename and update the matching extension in HTML, CSS, and JavaScript.
