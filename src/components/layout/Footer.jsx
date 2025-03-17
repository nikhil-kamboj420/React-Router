
export const Footer = ()=>{
    return <>
        <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-box1">
          <p>KambojFix</p>
          <p>
            Welcome to Kamboj EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="/images/cards.png" alt="image card of payment platforms" />
        </div>
        <div className="footer-box2">
          <h4>SHOPPING</h4>
          <ul>
            <li><a href="#">Computer Store</a></li>
            <li><a href="#">Laptop Store</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sales & Discount</a></li>
          </ul>
        </div>
        <div className="footer-box3">
          <h4>Experience</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Payment Method</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Return and Exchange</a></li>
          </ul>
        </div>
        <div className="footer-box4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new arrivals, sales & promos!</p>
          <input type="email" placeholder="Enter your email address" />
        </div>
      </div>
      <div className="f-design">
        <hr />
        <div className="f-design-txt">
          <p className="text-2xl py-2">| Design and Code by Nikhil Kamboj |</p>
        </div>
      </div>
    </footer>
    </>
}