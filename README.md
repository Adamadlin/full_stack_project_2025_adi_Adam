# Full Stack Project 2025

A full-stack web application built with **Node.js (Express)**, **PHP**, and **MySQL**.  
This project demonstrates **backend APIs**, **CRUD operations**, and **PHP form handling** with JSON and XML outputs.  

---

## 🚀 Tech Stack

- **Backend:** Node.js (Express)
- **Frontend:** HTML, CSS, JavaScript
- **Forms & Server Logic:** PHP
- **Database:** MySQL
- **Environment:** MAMP (for PHP + MySQL)

---

## 📂 Project Structure

full_stack_project_2025/
├── node_backend/           # Node.js backend (Express API)
│   ├── routes/             # Express route handlers
│   └── index.js            # Node backend entry point
├── php_forms/              # PHP form scripts (add/view/save)
├── public/                 # Static frontend files (optional)
├── database/               # MySQL .sql files (if any)
├── package.json            # Node backend dependencies
└── README.md               # Project documentation


Node.js Backend Setup
cd node_backend
npm install

This installs all required backend dependencies listed in package.json.

3. Database Setup
	1.	Open MAMP and start the servers.
	2.	Go to phpMyAdmin (http://localhost:8888/phpMyAdmin).
	3.	Create a new database (e.g., full_stack_db).
	4.	Import your .sql file from database/:
mysql -u root -p full_stack_db < database/animals_db.sql


4. Environment Variables (Optional)
5. If your backend uses environment variables, create a .env file in node_backend/:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=full_stack_db
PORT=3000


5. Start the Node.js Server
   node index.js

6. Run PHP Forms via MAMP
   /Applications/MAMP/htdocs/full_stack_project_2025

	•	Open the browser:
http://localhost:8888/full_stack_project_2025/php_forms/add_animal_form.php
