class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background-color: #1e1b4b;
          color: white;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background-color: #6366f1;
          transform: translateY(-3px);
        }
        .footer-link {
          position: relative;
        }
        .footer-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #6366f1;
          transition: width 0.3s ease;
        }
        .footer-link:hover:after {
          width: 100%;
        }
      </style>
      <footer class="footer py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">Lens & Lights</h3>
              <p class="text-gray-300 mb-4">Professional media services for all your photography and videography needs.</p>
              <div class="flex space-x-4">
                <a href="#" class="social-icon">
                  <i data-feather="facebook" class="text-white"></i>
                </a>
                <a href="#" class="social-icon">
                  <i data-feather="instagram" class="text-white"></i>
                </a>
                <a href="#" class="social-icon">
                  <i data-feather="twitter" class="text-white"></i>
                </a>
                <a href="#" class="social-icon">
                  <i data-feather="youtube" class="text-white"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Services</h4>
              <ul class="space-y-2">
                <li><a href="#services" class="footer-link text-gray-300 hover:text-white">Equipment Rental</a></li>
                <li><a href="#services" class="footer-link text-gray-300 hover:text-white">Video Production</a></li>
                <li><a href="#services" class="footer-link text-gray-300 hover:text-white">Reels Creation</a></li>
                <li><a href="#services" class="footer-link text-gray-300 hover:text-white">Wedding Photography</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Company</h4>
              <ul class="space-y-2">
                <li><a href="#about" class="footer-link text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" class="footer-link text-gray-300 hover:text-white">Our Team</a></li>
                <li><a href="#" class="footer-link text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" class="footer-link text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact</h4>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-gray-300">
                  <i data-feather="map-pin" class="w-4 h-4"></i>
                  <span>41.346102, 69.346843</span>
                </li>
                <li class="flex items-center gap-2 text-gray-300">
                  <i data-feather="phone" class="w-4 h-4"></i>
                  <span>+123 456 7890</span>
                </li>
                <li class="flex items-center gap-2 text-gray-300">
                  <i data-feather="mail" class="w-4 h-4"></i>
                  <span>info@lenslights.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; ${new Date().getFullYear()} Lens & Lights Media Magic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);