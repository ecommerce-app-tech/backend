CRUD events

[ ] Create Event model
[ ] Create routes
    [ ] GET /events
    [ ] GET /events/:id
    [ ] POST /events
    [ ] PUT /events/:id
    [ ] DELETE /events/:id
 

Auth:
[ ] Signup
    POST /auth/signup
      - req.body
      - gen salt + gen hash
      - User.create()
[ ] Login
    POST /auth/login
     - verify credentials
     - create jwt
[ ] Verify
# Frontend :
## User Authentication:
	•	User registration and login.
## Product  Listings
	
## Product Details:
	•	View detailed information about a specific Product.

## User Profile:

	•	User dashboard displaying purchased Product  .
	•	Ability to edit user profile.
	

		
# Backend :
## 1. User Model:[CR]
	•	Fields:
	•	Name
	•	username 
	•	email 
	•	password
	•	Adresse 
	
## 2. Product Model:[CR]
	•	Fields:
	•	name 
	•	description 
	•	price 
	•	category (enum)
	•	images(bonus)
	•	createdAt 
	•	updatedAt 
## 3. Order Model:[CRUD]
	•	Fields:
	•	Buyer(ref:user) 
	•	products(buy)[ref :productsId] 
	•	totalAmount (frontend) 
	•	updatedAt (Date)
