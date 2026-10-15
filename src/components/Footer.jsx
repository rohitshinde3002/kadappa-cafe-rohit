
import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Mail,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const gold = 'var(--color-tiger-gold)';
  const muted = '#A0B3A6';

  const iconLinkStyle = {
    width: '40px',
    height: '40px',
    border: '1px solid rgba(255,193,7,0.3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: gold,
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };

  const navStyle = {
    color: muted,
    textDecoration: 'none',
    fontSize: '12px',
    letterSpacing: '0.12em'
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-charred-clove, #211711)',
        backgroundImage: 'url(/footer-backgound.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '70px 5% 30px',
        marginTop: '80px',
        color: muted
      }}
    >
      {/* Main footer columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '45px',
          maxWidth: '1400px',
          margin: '0 auto',
          alignItems: 'start'
        }}
      >
        {/* Left: Social links and newsletter */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <h3 style={headingStyle}>CONNECT WITH US</h3>
          <div style={lineStyle} />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '35px'
            }}
          >
            <a
              href="https://www.instagram.com/kadappacafe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kadappa Cafe Instagram"
              style={iconLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  'rgba(255,193,7,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://github.com/rohitshinde3002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohit Shinde GitHub"
              style={iconLinkStyle}
              title="Rohit Shinde on GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3" />
                <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
              </svg>
            </a>
          </div>

          <h3 style={headingStyle}>STAY UPDATED</h3>

          <p style={paragraphStyle}>
            Join our newsletter for exclusive offers, secret recipes,
            and new menu updates.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.currentTarget.elements.newsletterEmail.value;
              const subject = encodeURIComponent(
                'Kadappa Cafe Newsletter Subscription'
              );
              const body = encodeURIComponent(
                `Please add ${email} to the Kadappa Cafe newsletter.`
              );

              window.location.href =
                `mailto:hello@kadappacafe.com?subject=${subject}&body=${body}`;
            }}
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: '320px',
              position: 'relative'
            }}
          >
            <input
              type="email"
              name="newsletterEmail"
              placeholder="Enter your email address"
              aria-label="Your email address"
              required
              style={{
                width: '100%',
                minWidth: 0,
                padding: '12px 48px 12px 16px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '30px',
                color: '#fff',
                fontSize: '13px',
                outline: 'none'
              }}
            />

            <button
              type="submit"
              aria-label="Subscribe by email"
              style={{
                position: 'absolute',
                right: '4px',
                top: '4px',
                bottom: '4px',
                width: '36px',
                borderRadius: '50%',
                backgroundColor: gold,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                cursor: 'pointer'
              }}
            >
              <ArrowRight size={16} />
            </button>
          </form>

          <p style={{ ...paragraphStyle, fontSize: '11px' }}>
            Your email app will open to prepare the request.
          </p>
        </div>

        {/* Center: Cafe identity and navigation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <a href="/" aria-label="Kadappa Cafe home">
            <img
              src="/logo.png"
              alt="Kadappa Cafe by Rohit"
              style={{
                maxHeight: '120px',
                maxWidth: '100%',
                width: 'auto',
                objectFit: 'contain',
                marginBottom: '20px'
              }}
            />
          </a>

          <h2
            style={{
              color: gold,
              fontSize: '22px',
              margin: '0 0 12px',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            Kadappa Cafe
          </h2>

          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Authentic South Indian Flavours
          </p>

          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.8',
              color: 'rgba(160,179,166,0.85)',
              maxWidth: '350px',
              margin: '0 0 28px',
              fontStyle: 'italic',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            "A culinary journey through the heart of South India.
            Tradition served fresh every single day."
          </p>

          <nav
            aria-label="Footer navigation"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <a href="/" style={navStyle}>HOME</a>
            <span>|</span>
            <a href="/about" style={navStyle}>ABOUT</a>
            <span>|</span>
            <a href="/menu" style={navStyle}>MENU</a>
            <span>|</span>
            <a href="/book" style={{ ...navStyle, color: gold }}>
              RESERVE
            </a>
          </nav>
        </div>

        {/* Right: Contact details */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <h3 style={headingStyle}>VISIT US</h3>
          <div style={lineStyle} />

          <div
            style={{
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}
          >
            <MapPin size={20} color={gold} />

            <p style={{ ...paragraphStyle, margin: 0 }}>
              First Floor, Plot 1079/1110,
              <br />
              Above Lenskart, near HDFC Bank,
              <br />
              Mouza, Shampur, Bhubaneswar,
              <br />
              Nuagan, Odisha 751003
            </p>
          </div>

          <a
            href="tel:+919876543210"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: muted,
              textDecoration: 'none',
              fontSize: '14px',
              marginBottom: '14px'
            }}
          >
            <Phone size={16} color={gold} />
            +91 98765 43210
          </a>

          <a
            href="mailto:hello@kadappacafe.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: muted,
              textDecoration: 'none',
              fontSize: '14px',
              marginBottom: '25px',
              overflowWrap: 'anywhere'
            }}
          >
            <Mail size={16} color={gold} />
            hello@kadappacafe.com
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kadappa+Cafe+Bhubaneswar+Odisha"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#000',
              backgroundColor: gold,
              textDecoration: 'none',
              borderRadius: '30px',
              padding: '12px 22px',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em'
            }}
          >
            <Navigation size={15} />
            GET DIRECTIONS
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '22px',
          maxWidth: '1400px',
          margin: '60px auto 0',
          padding: '24px',
          backgroundColor: 'rgba(5,20,8,0.85)',
          borderRadius: '18px',
          border: '1px solid rgba(255,193,7,0.15)',
          fontSize: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Clock size={22} color={gold} />
          <div>
            <div style={{ letterSpacing: '0.12em', marginBottom: '5px' }}>
              OPEN DAILY
            </div>
            <div>7:00 AM - 10:00 PM</div>
          </div>
        </div>

        <div style={{ color: muted }}>
          © {new Date().getFullYear()} KADAPPA CAFE.
          ALL RIGHTS RESERVED.
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px'
          }}
        >
          <span style={{ color: muted }}>
            Customized by <strong style={{ color: '#fff' }}>
              Rohit Shinde
            </strong>
          </span>

          <a
            href="https://github.com/rohitshinde3002"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: gold,
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Visit My GitHub ↗
          </a>
        </div>

        <div style={{ letterSpacing: '0.1em' }}>
          DOSA&nbsp; | &nbsp;IDLI&nbsp; | &nbsp;FILTER COFFEE
        </div>
      </div>
    </footer>
  );
};

const headingStyle = {
  fontSize: '12px',
  letterSpacing: '0.2em',
  color: '#A0B3A6',
  margin: '0 0 12px',
  fontWeight: '500'
};

const lineStyle = {
  width: '50px',
  height: '2px',
  backgroundColor: 'var(--color-tiger-gold)',
  marginBottom: '25px'
};

const paragraphStyle = {
  fontSize: '13px',
  lineHeight: '1.8',
  color: 'rgba(160,179,166,0.8)',
  margin: '0 0 18px',
  maxWidth: '300px'
};

export default Footer;
