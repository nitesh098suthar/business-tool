import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background pt-12 text-foreground border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Fashionista</h4>
            <p className="text-muted-foreground mb-6">
              Discover the latest trends in fashion and get inspired by our new
              styles. Shop our current collections now!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Join our mailing list for updates on new arrivals, special offers,
              and more!
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-input border border-muted-foreground rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pb-6 border-t border-muted-foreground pt-6 text-center text-muted-foreground">
          <p>
            &copy; 2024 Fashionista. All Rights Reserved. | Designed by Your
            Brand Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
