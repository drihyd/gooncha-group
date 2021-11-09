
const Header = ({ headerNav }) =>
`
    <header class="main-header" id="mainheader">
      <div class="container pr-sm-0">
        <nav class="navbar navbar-expand-lg justify-content-between pl-sm-0 pr-sm-0">
              <a class="navbar-brand" href="./"><img src="./img/logo.png" alt="Gooncha Group Logo" class="img-fluid header-logo"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item link-about">
                    <a class="nav-link" href="./about-us.html">About Us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Business
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="./management.html">Management</a>
                      <a class="dropdown-item" href="./automotives.html">Automotives</a>
                      <a class="dropdown-item" href="real-estate.html">Real Estate</a>
                    </div>
                  </li>
                  <li class="nav-item link-csr">
                    <a class="nav-link" href="#">CSR</a>
                  </li>
                  <li class="nav-item link-media">
                    <a class="nav-link" href="./media.html">Media</a>
                  </li>
                  <li class="nav-item link-contact">
                    <a class="nav-link" href="./contact.html">Contact</a>
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
   <div class="container">
      <div class="row">
         <div class="col-sm-12 text-center">
            <p>&copy; Gooncha 2021 | All Rights Reserved</p>
         </div>
      </div>
   </div>
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

