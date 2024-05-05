# KONIK CLOTHINGS

An e-commerce platform specialized for men to explore a premium collection of men's outfits in Sri Lanka.

## HOME page

- Only "HOME" page and the "MEN CASUAL" page in the navbar are linked.
- The "SHOP NOW" button in the second image of the image slider in the header section routes to the "MEN CASUAL" page.
- This page displays the collection of products fetched from the database.
- "Quick View" button displayed after hovering over a product card routes to a page with the product details.

## MEN CASUAL page

- This page displays the collection of products fetched from the database.

## Product details card in the quick view

- "Quick View" button displayed after hovering over a product card routes to this page.
- This page displays the details of an individual product.

## Login page

- The "Login" button in the navbar routes to this page.
- Email address and password are authenticated through firebase.
- The link "Create an account" routes to the "Signup" page.
- The "Go to Home" button routes to the "HOME" page.

## Signup page

- The link "Create an account" in the "Login" page routes to the "Signup" page.
- Account creation is done and validated through firebase.
- The link "Login" routes to the Login page allowing the user to login after successful account creation.

## Product Cart page

- The product cart icon in the navbar routes to this page.
- Displays the products in the cart (still this page is in static condition).

## Checkout page
- The "Checkout" button in the product cart page routes to this page.
- Displays the products in the cart and the total amount to be paid.
- But we didn't create it as a component. We have only the html and css for this page.