import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPages.css';
import './RedFlower.css';
// Import Red Flower images - WebP with PNG fallbacks
import { getAssetUrl } from '../utils/assets';

const HomeImgWebP = getAssetUrl('imgs/red flower/Home.webp');
const HomeImgPNG = getAssetUrl('imgs/red flower/Home.png');
const MenuImgWebP = getAssetUrl('imgs/red flower/Menu.webp');
const MenuImgPNG = getAssetUrl('imgs/red flower/Menu.png');
const ProductListingImgWebP = getAssetUrl('imgs/red flower/Product Listing Page.webp');
const ProductListingImgPNG = getAssetUrl('imgs/red flower/Product Listing Page.png');
const ProductListingFiltersImgWebP = getAssetUrl('imgs/red flower/Product Listing Page & Filters.webp');
const ProductListingFiltersImgPNG = getAssetUrl('imgs/red flower/Product Listing Page & Filters.png');
const ProductViewImgWebP = getAssetUrl('imgs/red flower/Product View.webp');
const ProductViewImgPNG = getAssetUrl('imgs/red flower/Product View.png');
const ProductViewExtendedImgWebP = getAssetUrl('imgs/red flower/Product View extended.webp');
const ProductViewExtendedImgPNG = getAssetUrl('imgs/red flower/Product View extended.png');
const CartImgWebP = getAssetUrl('imgs/red flower/CART.webp');
const CartImgPNG = getAssetUrl('imgs/red flower/CART.png');
const AccountImgWebP = getAssetUrl('imgs/red flower/ACCOUNT.webp');
const AccountImgPNG = getAssetUrl('imgs/red flower/ACCOUNT.png');
const OrdersImgWebP = getAssetUrl('imgs/red flower/ORDERS.webp');
const OrdersImgPNG = getAssetUrl('imgs/red flower/ORDERS.png');
const LoginImgWebP = getAssetUrl('imgs/red flower/Login.webp');
const LoginImgPNG = getAssetUrl('imgs/red flower/Login.png');
const LogoutImgWebP = getAssetUrl('imgs/red flower/Logout.webp');
const LogoutImgPNG = getAssetUrl('imgs/red flower/Logout.png');

const RedFlower = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="project-page-container red-flower-page">
      <button className="project-back-button" onClick={handleGoBack}>
        ← Back
      </button>

      {/* Hero Section - Title at Top */}
      <div className="rf-hero-top">
        <div className="rf-hero-badge">UI/UX Design Case Study</div>
        <h1 className="rf-title">RED FLOWER</h1>
        <p className="rf-subtitle">
          A comprehensive e-commerce platform redesign focused on creating an intuitive,
          delightful shopping experience through thoughtful UX research and modern UI design.
        </p>
      </div>

      {/* Hero Section - Two Column with Info Boxes and Image */}
      <div className="rf-hero-full">
        <div className="rf-hero-left">
          <h2 className="rf-section-title-left">Project Overview</h2>
          <p className="rf-text-large">
            Red Flower represents a complete redesign of an e-commerce platform with a focus on
            creating a premium, user-centric shopping experience. This project was driven by extensive
            user research, competitive analysis, and a deep understanding of modern e-commerce patterns.
          </p>
          <div className="rf-info-boxes-container">
            <div className="rf-info-box">
              <h3>ROLE</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="rf-info-box">
              <h3>TIMELINE</h3>
              <p>8 Weeks</p>
            </div>
            <div className="rf-info-box">
              <h3>TOOLS</h3>
              <p>Figma, Miro, Notion</p>
            </div>
            <div className="rf-info-box">
              <h3>DELIVERABLES</h3>
              <p>Design System, High-Fidelity Designs, Prototypes</p>
            </div>
          </div>

          {/* Key Insights - Filling Left Space */}
          <div className="rf-left-section">
            <h3 className="rf-left-section-title">Key Insights</h3>
            <div className="rf-insights-compact">
              <div className="rf-insight-compact">
                <span className="rf-insight-icon-compact">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </span>
                <div>
                  <h4>User Pain Points</h4>
                  <p>Cluttered listings, unclear pricing, lengthy checkout processes</p>
                </div>
              </div>
              <div className="rf-insight-compact">
                <span className="rf-insight-icon-compact">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </span>
                <div>
                  <h4>Mobile First</h4>
                  <p>68% of users primarily shop on mobile devices</p>
                </div>
              </div>
              <div className="rf-insight-compact">
                <span className="rf-insight-icon-compact">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </span>
                <div>
                  <h4>Visual Discovery</h4>
                  <p>Users prefer visual browsing over text-heavy interfaces</p>
                </div>
              </div>
              <div className="rf-insight-compact">
                <span className="rf-insight-icon-compact">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </span>
                <div>
                  <h4>Trust Building</h4>
                  <p>Clear pricing, detailed info, and quality design build trust</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Process Summary */}
          <div className="rf-left-section">
            <h3 className="rf-left-section-title">Design Process</h3>
            <div className="rf-process-compact">
              <div className="rf-process-compact-item">
                <div className="rf-process-compact-number">01</div>
                <div>
                  <h4>Discover</h4>
                  <p>User interviews, competitive analysis, market research</p>
                </div>
              </div>
              <div className="rf-process-compact-item">
                <div className="rf-process-compact-number">02</div>
                <div>
                  <h4>Define</h4>
                  <p>Personas, journey maps, design principles</p>
                </div>
              </div>
              <div className="rf-process-compact-item">
                <div className="rf-process-compact-number">03</div>
                <div>
                  <h4>Develop</h4>
                  <p>Wireframes, prototypes, usability testing</p>
                </div>
              </div>
              <div className="rf-process-compact-item">
                <div className="rf-process-compact-number">04</div>
                <div>
                  <h4>Deliver</h4>
                  <p>Design system, final designs, documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design System - Compact */}
          <div className="rf-left-section">
            <h3 className="rf-left-section-title">Design System</h3>
            <div className="rf-ds-compact">
              <div className="rf-ds-compact-item">
                <h4>Color Palette</h4>
                <div className="rf-color-compact-grid">
                  <div className="rf-color-compact">
                    <div className="rf-color-box-compact" style={{ background: '#E63946', backgroundColor: '#E63946' }}></div>
                    <div>
                      <span>Primary</span>
                      <code>#E63946</code>
                    </div>
                  </div>
                  <div className="rf-color-compact">
                    <div className="rf-color-box-compact" style={{ background: '#1D3557', backgroundColor: '#1D3557' }}></div>
                    <div>
                      <span>Dark</span>
                      <code>#1D3557</code>
                    </div>
                  </div>
                  <div className="rf-color-compact">
                    <div className="rf-color-box-compact" style={{ background: '#F1FAEE', backgroundColor: '#F1FAEE' }}></div>
                    <div>
                      <span>Light</span>
                      <code>#F1FAEE</code>
                    </div>
                  </div>
                  <div className="rf-color-compact">
                    <div className="rf-color-box-compact" style={{ background: '#A8DADC', backgroundColor: '#A8DADC' }}></div>
                    <div>
                      <span>Accent</span>
                      <code>#A8DADC</code>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rf-ds-compact-item">
                <h4>Typography</h4>
                <div className="rf-type-compact">
                  <div className="rf-type-compact-item">
                    <div className="rf-type-preview-compact" style={{ fontSize: '2rem', fontWeight: 700 }}>Aa</div>
                    <div>
                      <strong>Heading 1</strong>
                      <span>700 • 3rem</span>
                    </div>
                  </div>
                  <div className="rf-type-compact-item">
                    <div className="rf-type-preview-compact" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Aa</div>
                    <div>
                      <strong>Heading 2</strong>
                      <span>600 • 2rem</span>
                    </div>
                  </div>
                  <div className="rf-type-compact-item">
                    <div className="rf-type-preview-compact" style={{ fontSize: '1.1rem', fontWeight: 400 }}>Aa</div>
                    <div>
                      <strong>Body</strong>
                      <span>400 • 1rem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rf-hero-right">
          <div className="rf-hero-image-main">
            <picture>
              <source srcSet={HomeImgWebP} type="image/webp" />
              <img src={HomeImgPNG} alt="Red Flower Homepage" />
            </picture>
          </div>
        </div>
      </div>

      {/* Screens - Full Width Showcase */}
      <section className="rf-section-full">
        <h2 className="rf-section-title-center">Design Showcase</h2>

        <div className="rf-screen-showcase-full">
          <div className="rf-screen-category">
            <div className="rf-category-header">
              <h3 className="rf-category-title">Home & Navigation</h3>
              <p className="rf-category-desc">Clean navigation system with clear hierarchy and easy access to all sections</p>
            </div>
            <div className="rf-screen-row rf-screen-stacked">
              <a href={HomeImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={HomeImgWebP} type="image/webp" />
                  <img src={HomeImgPNG} alt="Homepage" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
              <a href={MenuImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={MenuImgWebP} type="image/webp" />
                  <img src={MenuImgPNG} alt="Navigation Menu" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
            </div>
          </div>

          <div className="rf-screen-category">
            <div className="rf-category-header">
              <h3 className="rf-category-title">Product Discovery</h3>
              <p className="rf-category-desc">Advanced filtering system with clear visual feedback and organized product grid</p>
            </div>
            <div className="rf-screen-row">
              <a href={ProductListingImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={ProductListingImgWebP} type="image/webp" />
                  <img src={ProductListingImgPNG} alt="Product Listing" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
              <a href={ProductListingFiltersImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={ProductListingFiltersImgWebP} type="image/webp" />
                  <img src={ProductListingFiltersImgPNG} alt="Product Listing with Filters" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
            </div>
          </div>

          <div className="rf-screen-category">
            <div className="rf-category-header">
              <h3 className="rf-category-title">Product Details</h3>
              <p className="rf-category-desc">Comprehensive product information with high-quality imagery and organized details</p>
            </div>
            <div className="rf-screen-row">
              <a href={ProductViewImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={ProductViewImgWebP} type="image/webp" />
                  <img src={ProductViewImgPNG} alt="Product View" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
              <a href={ProductViewExtendedImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={ProductViewExtendedImgWebP} type="image/webp" />
                  <img src={ProductViewExtendedImgPNG} alt="Extended Product View" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
            </div>
          </div>

          <div className="rf-screen-category">
            <div className="rf-category-header">
              <h3 className="rf-category-title">Shopping Experience</h3>
              <p className="rf-category-desc">Streamlined cart and checkout process with clear pricing and progress indicators</p>
            </div>
            <div className="rf-screen-row rf-screen-single">
              <a href={CartImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={CartImgWebP} type="image/webp" />
                  <img src={CartImgPNG} alt="Shopping Cart" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
            </div>
          </div>

          <div className="rf-screen-category">
            <div className="rf-category-header">
              <h3 className="rf-category-title">Account Management</h3>
              <p className="rf-category-desc">Easy access to order history, preferences, and account settings</p>
            </div>
            <div className="rf-screen-row">
              <a href={AccountImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={AccountImgWebP} type="image/webp" />
                  <img src={AccountImgPNG} alt="Account Page" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
              <a href={OrdersImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={OrdersImgWebP} type="image/webp" />
                  <img src={OrdersImgPNG} alt="Orders Page" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
            </div>
          </div>

          <div className="rf-screen-category">
            <div className="rf-category-header">
              <h3 className="rf-category-title">Authentication</h3>
              <p className="rf-category-desc">Secure and intuitive login and logout experience</p>
            </div>
            <div className="rf-screen-row">
              <a href={LoginImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={LoginImgWebP} type="image/webp" />
                  <img src={LoginImgPNG} alt="Login Page" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
              <a href={LogoutImgPNG} target="_blank" rel="noopener noreferrer" className="rf-screen-card">
                <picture>
                  <source srcSet={LogoutImgWebP} type="image/webp" />
                  <img src={LogoutImgPNG} alt="Logout Page" />
                </picture>
                <div className="rf-screen-overlay">
                  <span>View Full Size</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles & Features - Side by Side */}
      <section className="rf-section-split">
        <div className="rf-split-left">
          <h2 className="rf-section-title-left">Design Principles</h2>
          <div className="rf-principles-list">
            <div className="rf-principle-item">
              <h3>Clarity</h3>
              <p>Every element has a clear purpose and communicates immediately. No hidden interactions or ambiguous affordances.</p>
            </div>
            <div className="rf-principle-item">
              <h3>Progressive Disclosure</h3>
              <p>Information is revealed progressively, showing essential details first and providing access to additional information when needed.</p>
            </div>
            <div className="rf-principle-item">
              <h3>Consistency</h3>
              <p>Similar actions produce similar results throughout. Navigation patterns and visual language remain consistent.</p>
            </div>
            <div className="rf-principle-item">
              <h3>Accessibility</h3>
              <p>WCAG AA compliant, keyboard navigable, screen reader friendly. Designed to be usable by everyone.</p>
            </div>
          </div>
        </div>
        <div className="rf-split-right">
          <h2 className="rf-section-title-left">Key Features</h2>
          <div className="rf-features-list">
            <div className="rf-feature-item-new">
              <div className="rf-feature-badge">01</div>
              <div className="rf-feature-content">
                <h3>Advanced Filtering</h3>
                <p>Sticky sidebar filters with clear visual feedback, organized categories, and real-time result counts</p>
              </div>
            </div>
            <div className="rf-feature-item-new">
              <div className="rf-feature-badge">02</div>
              <div className="rf-feature-content">
                <h3>Image-First Design</h3>
                <p>Large, high-quality product imagery takes center stage with supporting information organized around it</p>
              </div>
            </div>
            <div className="rf-feature-item-new">
              <div className="rf-feature-badge">03</div>
              <div className="rf-feature-content">
                <h3>Streamlined Checkout</h3>
                <p>Single-page checkout with clear sections, progress indicators, and transparent pricing information</p>
              </div>
            </div>
            <div className="rf-feature-item-new">
              <div className="rf-feature-badge">04</div>
              <div className="rf-feature-content">
                <h3>Persistent Cart</h3>
                <p>Header cart indicator shows contents and total without navigating away from current page</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow - Visual */}
      <section className="rf-section-full">
        <h2 className="rf-section-title-center">User Journey</h2>
        <div className="rf-journey-flow">
          <div className="rf-journey-step">
            <div className="rf-journey-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h4>Landing</h4>
            <p>Discover featured products and categories</p>
          </div>
          <div className="rf-journey-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <div className="rf-journey-step">
            <div className="rf-journey-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <h4>Browse</h4>
            <p>Filter and search for products</p>
          </div>
          <div className="rf-journey-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <div className="rf-journey-step">
            <div className="rf-journey-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h4>View</h4>
            <p>Explore product details and images</p>
          </div>
          <div className="rf-journey-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <div className="rf-journey-step">
            <div className="rf-journey-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h4>Cart</h4>
            <p>Review and manage items</p>
          </div>
          <div className="rf-journey-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <div className="rf-journey-step">
            <div className="rf-journey-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <h4>Checkout</h4>
            <p>Complete purchase securely</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RedFlower;
