Technologies used for the project :-

React.js -> Front end
Firebase and Firestore -> Authentication and backend(database)
Styling -> Css and Sass
State Management -> Redux 

Project structure :-

All the media files are placed in public directory
Src files has all the main contents
All the components used in the website are placed under components folder 
Redux store is setup to handle state management 
Firestore is used for realtime database 

What makes this website fast?

-> Redux used as central store for management of data
-> Firebase authentication for flawless auth
-> Persistance used in project all the media and user info is stored in cache on user end for fast loading of data
-> Lazy loading

Changes Completed :-

----> Front end :- 

-> Home page

Header
Search bar 
Logout , Cart buttons
navigation panel
Banner loop slider
Welcome username from db
8 x Product slider
Full Notepad Functionality implemented
Variable navigation cards ui implemented
Ranking system ui done 
Last product slider
Footer
About section with hyperlinks
Social media icons
copyright component
Front end animations

-> Cart page 

Shopping cart
Totaling proceed to checkout ui
Product listing ui
inc and dec buttons 
Delivery fee addon
Responsiveness

-> Checkout Page

Checkout page UI
Delivery address display
Edit option with post route
Full dynamic form to submit the details
Payment option with codespace for payment gateway integration
Total amount dashboard ui
Responsiveness

-> Category page(a1 & a2)

Dynamic Banner Slider
Dynamic listing of products based on category from backend
add to cart functionality 

-> Login page

Login dashboard ui
Authentication 
Forgot password
Register

-> Register page 

Email and password auth
Signup Ui
submit action button

-> Css loading spinner


----> Backend :- 


-> Home page

Hello , username from database
Loading of all images
Notepad functionality full
*Product entry directly submitted to database
*Checkout button submits the list
*Product data from database
*Dynamic ranking system

-> Cart page 

Cart data loaded from firebase database
Remove product button directly deletes product from database
Minus option reduces the quantiy and updated the database and total amount of checkout
Add option inc the quantity and updates the final cart
Proceed to checkout button directly redirects to end page

-> Checkout Page

Address loaded from database
Form submit action takes all data and submits to database
Edit button to edit details
Form validation cannot submit form with empty data
Payment gateway 
Price board


-> Category page(a1 & a2)

Dynamic loading of products based on each catoegry

-> Login page

Email and password gets authenticated from firebase database
Forgot password sends a mail to reset the password

-> Register page 

Email and password gets added to database
A new document on backend is formed denoting a new user

Changes Left : - 

Kanpur Groceries

-> My orders and admin panel.
-> Payment gateway integration on given space 
-> Rest of ui changes.
-> Phone Optimizations.		
