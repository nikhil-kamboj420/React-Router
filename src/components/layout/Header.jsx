
export const Header = ()=>{
    return <>
   <header class="header">
      <section class="top-text">
        <p>Free shipping, 30-day return or refund guarantee.</p>
        <div class="sing_in_up">
          <a href="#">Sign In</a>
          <a href="#">Sign Up </a>
        </div>
      </section>
      {/* <!-- ########### NAV BAR SECTION STARTED ############# --> */}
      <div class="section-navbar">
        <div class="brand-logo">
          <img src="./images/logo2.webp" alt="brand's-logo" />
        </div>
        <div class="navbar">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="./about.html">ABOUT</a></li>
            <li><a href="./products.html">MOVIES</a></li>
            <li><a href="./contact.html">CONTACT</a></li>
            <li class="addToCart">
              <a href="addToCart.html">
                <i class="ion--cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
   </>
}