
const Header = ({ headerNav }) =>
`
    <header class="main-header" id="mainheader">
      <div class="container-fluid custom-fluid">
        <nav class="navbar navbar-expand-lg justify-content-between">
              <a class="navbar-brand white-logo" href="../"><img src="../img/signery-w-transp.png" alt="Signergy Logo" class="img-fluid"></a>
              <a class="navbar-brand black-logo" href="../"><img src="../img/signery-b-transp.png" alt="Signergy Logo" class="img-fluid"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item link-home">
                    <a class="nav-link" href="../">HOME</a>
                  </li>
                  <li class="nav-item link-services">
                    <a class="nav-link" href="../services.html">SERVICES</a>
                  </li>
                  <li class="nav-item link-showcase">
                    <a class="nav-link" href="../showcase.html">SHOWCASE</a>
                  </li>
                  <li class="nav-item link-about">
                    <a class="nav-link" href="../about.html">ABOUT US</a>
                  </li>
                  <li class="nav-item link-careers">
                    <a class="nav-link" href="../careers.html">CAREERS</a>
                  </li>
                  <li class="nav-item link-contact-signergy">
                    <a class="nav-link" href="../contact-signergy.html">SAY HELLO</a>
                  </li>
                </ul>
              </div>
        </nav>
      </div>
    </header>
`;

const Footer = ({ footerNav }) =>
`
<footer>
  <section id="footer" class="pt-5 pb-2">
  <div class="container-fluid custom-fluid">
    <div class="text-center">
      <h2 class="text-white m-0 p-0">AS<span class="text-brand">SIGN</span> AND RELAX!</h2>
      <p class="text-white p-0 m-0 small-heading">Let’s create something great!</p>
      <p class="pt-2"><a href="../contact-signergy.html"><img alt="" width="100" height="100" src="../img/get-in-touch.png" ></a></p>
      <div class="text-white pt-2">
        <a href="https://in.linkedin.com/company/signergyindia" target="_blank" class="pr-5"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://in.pinterest.com/0b3131b0dd15ebc26fbf4ad06c901c" target="_blank"><i class="fab fa-pinterest"></i></a>
      </div>
    </div>
    </div>
  </div>
  </section>
  <section id="footer" class="pt-2 pb-2" style="border-top: 1px solid #3d3d3d;">
    <div class="container-fluid custom-fluid">
      <div class="row pt-3 pl-4 pr-4 pl-sm-0 pr-sm-0 m-0">
        <div class="col-sm-6 p-0">
          <div class="main-footer">
            <a href="../careers.html" class="pr-3">Careers</a>
            <a href="../contact-signergy.html">Contact us</a>
          </div>
        </div>
      <div class="col-sm-6 p-0">
        <div class="main-footer float-sm-right">
          <p class="text-white small-heading">© Signergy 2021. All rights reserved</p>
        </div>
      </div>
    </div>
    </div>
  </section>
</footer>
`;

// Header Script
$('#headerNav').html([
  { headerNav:'' }
].map(Header).join(''));

// Footer Script
$('#footerNav').html([
  { footerNav:'' }
].map(Footer).join(''));


// Sticky Script

jQuery(document).ready(function($) {
  window.onscroll = function() {myFunction()};
          
  var header = document.getElementById("mainheader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("stickymain");
    } else {
      header.classList.remove("stickymain");
    }
  }
  
  });


// Active Page highlight

var highlightActivePage = function() {
    "undefined" != typeof activePage && ($("." + activePage).addClass("active"),
     $("." + activePage).removeClass("collapse")),
      "undefined" != typeof activeSubPage && $("." + activeSubPage).addClass("active"),
      "undefined" != typeof activeSubSubPage && $("." + activeSubSubPage).addClass("active")
};