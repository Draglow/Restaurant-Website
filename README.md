# E-Commerce Website

## Overview
This is a fully functional e-commerce website built with Django. The platform allows users to browse, add items to their cart, and complete purchases securely. The website supports soft drinks and alcoholic beverages, with a smooth shopping experience.

## Features
- User authentication (email-based login & registration)
- Product listing and categorization
- Dynamic cart functionality with real-time updates
- Secure checkout process with Telebirr payment integration
- Order management and tracking
- Responsive and modern UI design

## Tech Stack
- **Backend**: Django, Django REST Framework
- **Frontend**: HTML, CSS, Bootstrap, JavaScript
- **Database**: PostgreSQL
- **Payment Gateway**: Telebirr Integration

## Installation

### Prerequisites
- Python 3.x
- PostgreSQL
- Virtual environment tool (venv or virtualenv)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Draglow/eCommerce-website.git
   cd eCommerce-website
   ```
2. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Set up the database:
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Create a superuser for admin access:
   ```sh
   python manage.py createsuperuser
   ```
6. Run the development server:
   ```sh
   python manage.py runserver
   ```

## Telebirr Payment Integration
To enable Telebirr payments, ensure you have the required credentials:
- Merchant AppId
- Fabric App ID
- ShortCode
- App Secret

Add these credentials in your Django settings file:
```python
TELEBIRR_CONFIG = {
    "APP_ID": "your_app_id",
    "FABRIC_APP_ID": "your_fabric_app_id",
    "SHORT_CODE": "your_short_code",
    "APP_SECRET": "your_app_secret",
}
```

## API Endpoints
### Product Endpoints
- `GET /api/products/` - List all products
- `GET /api/products/<id>/` - Retrieve product details

### Cart Endpoints
- `POST /api/cart/add/` - Add item to cart
- `DELETE /api/cart/remove/` - Remove item from cart
- `GET /api/cart/` - Retrieve cart details

### Order Endpoints
- `POST /api/order/create/` - Create a new order
- `GET /api/order/<id>/` - Retrieve order details

## Contribution
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit changes and push to your branch.
4. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out via email or open an issue on GitHub.

