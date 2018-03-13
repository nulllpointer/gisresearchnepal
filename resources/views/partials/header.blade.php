{{--
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>



<script>
    $(document).ready(function () {
        $('li.active').removeClass('active');
        $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
    });
</script>





--}}
{{--
<script type="text/javascript" src="javascript/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $('li.active').removeClass('active');
        $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
    });
</script>

<section class="header-top">



    --}}{{--

--}}
{{--<div class="container">
        <div class="row">
            <div class="col-md-12">
                <ul class="flat-infomation">
                    <li class="phone">Call us: <a  title="">{{$aboutus[0]->mobile}}</a></li>
                    <li class="email">Email: <a  title="">{{$aboutus[0]->email}}</a></li>
                </ul><!-- /.flat-infomation -->
                <ul class="flat-social">
                    <li>
                        <a href="#" title="">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    --}}{{--
--}}
{{--
--}}{{--

--}}
{{--<li>
                        <a href="#" title="">
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="">
                            <i class="fa fa-rss" aria-hidden="true"></i>
                        </a>
                    </li>--}}{{--
--}}
{{--
--}}{{--

--}}
{{--
                </ul><!-- /.flat-social -->
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
    </div><!-- /.container -->--}}{{--
--}}
{{--

</section><!-- /.header-top -->

<header id="header" class="header" >
    <div class="container">
        <div class="row">

            <div class="col-md-12">
                <div id="logo" title="itgnepal">
                    <a href="/index" title="itgnepal">
                        <img  src="uploads/{{ $aboutus[0]->logo }}" alt="itglogo" style="   height: 86px;
    width: 254px;">



                    </a>
                </div><!-- /#logo -->
                <div class="btn-menu">
                    <span>a</span>
                </div><!-- //mobile menu button -->
                <div class="menu-extra">
                   --}}{{--

--}}
{{-- <div class="box-search">

                        <div>
                            --}}{{--
--}}
{{--
--}}{{--

--}}
{{--<form action="#" method="get" accept-charset="utf-8">
                                <div class="input-search">
                                    <input type="text" name="search">
                                    <button class="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </form>--}}{{--
--}}
{{--
--}}{{--

--}}
{{--
                        </div><!-- /.top-search -->
                    </div>
                   --}}{{--
--}}
{{--
 <div class="box-canvas">
                        <span><i class="fa fa-bars" aria-hidden="true"></i></span>
                    </div>
                </div><!-- /.menu-extra -->
                <div class="nav-wrap" >
                    <nav id="mainnav" class="mainnav" >
                        <ul class="menu">
                            <li class="active">
                                <a href="/index" title="">Home</a>
                            </li>
                            <li>
                                <a href="/about" title="">About</a>
                            </li>
                            <li>
                                <a href="/services" title="">Services</a>
                            --}}{{--

--}}
{{--<ul class="sub-menu">
                                <li><a href="services/#foo" title="">Why Recruit from Nepal</a></li>
                                <li><a href="services" title="">Services 02</a></li>
                                <li><a href="services" title="">Services 03</a></li>
                            </ul>--}}{{--
--}}
{{--
<!-- /.sub-menu -->
                            </li>
                            --}}{{--

--}}
{{-- <li>
                                 <a href="/portfolio" title="">Portfolio</a>
                             </li>
 --}}{{--
--}}
{{--

                            <li>
                                <a href="/gallery" title="">Certificates</a>
                            </li>

                            <li>
                                <a href="/blog" title="">Demands</a>
                            </li>
                            <li>
                                <a href="/contact" title="">Contact</a>
                            </li>
                        </ul>


                        <!-- /.menu -->
                    </nav><!-- /#mainnav -->
                </div><!-- /.nav-wrap -->
                <div class="clearfix"></div>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</header><!-- /header -->

<div class="menu-canvas">
    <span class="delete">x</span>
    <div class="logo-canvas">
        <a href="#">
            <img src="uploads/{{ $aboutus[0]->logo }}" alt="itgnepal" style="    height: 190px;
    width: 413px;">
        </a>
    </div><!-- /.logo-canvas -->
    <div class="canvas-content">
        <p>International Trade Group Pvt. Ltd. is one of the reputed recruiting agencies in Nepal. This
            company is registered under Nepal Government, Ministry of Labour. (License No. 1062/073/074).Till now
            our Company has been successful to satisfy the demands of many Gulf countries in the Middle
            East for their manpower requirement </p>
        <ul>
            <li>
                <div class="icon">
                    <span class="icon-map"></span>
                </div>
                <div class="text">
                    <div class="title">
                        Address
                    </div>
                    <p>
                        {{$aboutus[0]->address}} <br/>
                    </p>
                </div>
            </li>
            <li>
                <div class="icon">
                    <span class="icon-chat"></span>
                </div>
                <div class="text">
                    <div class="title">
                        Call us
                    </div>
                    <p>
                        {{$aboutus[0]->mobile}}
                    </p>
                </div>
            </li>
            <li>
                <div class="icon">
                    <span class="icon-envelope"></span>
                </div>
                <div class="text">
                    <div class="title">
                        Email
                    </div>
                    <p>
                        {{$aboutus[0]->email}}
                    </p>
                </div>
            </li>
            <li>
                <div class="icon">
                    <span class="icon-clock"></span>
                </div>
                <div class="text">
                    <div class="title">
                        Open House
                    </div>
                    <p>
                        Sun - Fri: 9.00 am - 5.30 pm
                    </p>
                    <p>
                        Saturday: CLOSED
                    </p>
                </div>
            </li>
        </ul>
        <div class="btn-more">
            <a href="/about">View More</a>
        </div>
    </div><!-- /.canvas-content -->
</div><!-- /.menu-canvas -->
--}}{{--






<div class="constructo-navtop-area">
    <div class="topbar-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <ul class="topaddres">
                        <li><span class="fa fa-phone"></span> +200 100 5678</li>
                        <li><span class="fa fa-envelope"></span>contact@jrc.com.np</li>
                    </ul>
                </div>
                <div class="col-sm-6 text-right">
                    <div class="social-link">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-google"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                        <a href="#" class="fa fa-dribbble"></a>
                        <a href="#" class="fa fa-vine"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-rss"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="constructo-menu-area">
        <nav class="navbar">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="kazierfan.com"></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav menu navbar-nav navbar-right">
                        <li class="active"><a href="/index">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/services">SERVICES</a></li>
                        <li><a href="/project">PROJECTS</a></li>
                        <li><a href="/news">NEWS</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </div>
</div>








--}}











<header>
    {{--  <section id="top-bar">

          <div class="wrapper">

              <div class="three_fourth" id="topintro">


                  <p>The premier destination for premium listings. <a href="submit-listing-2/index.html">Submit Your
                          Listing Now »</a></p>


              </div>

              <div class="one_fourth last" id="top-socials">
                  <ul class="social-nav-list">
                      <li class="social-icon"><a class="tip-me" href="#" data-toggle="tooltip" data-animation="true"
                                                 title=""><span class="icon-facebook"></span></a></li>
                      <li class="social-icon"><a class="tip-me" href="#" data-toggle="tooltip" data-animation="true"
                                                 title=""><span class="icon-twitter"></span></a></li>
                      <li class="social-icon"><a class="tip-me" href="#" data-toggle="tooltip" data-animation="true"
                                                 title=""><span class="icon-mail-alt"></span></a></li>
                  </ul>
              </div>

          </div>

      </section>--}}


    <section id="header-container">

        <div class="wrapper">

            <section id="logo-wrapper" class="one_fourth">

                <a href='index.html'><img style="    height: 57px;"  src=wp-content/uploads//mahakaligov.jpeg alt='' title='Atlas'/></a>
            </section><!-- end logo -->

            <section id="navigation-wrapper" class="three_fourth last">
                <nav>
                    <div class="menu-primary-menu-container">
                        <ul id="menu-primary-menu-1" class="sf-menu">
                            <li id="menu-item-6102"
                                class="menu-item menu-item-type-custom menu-item-object-custom active active menu-item-home menu-item-6102">
                                <a href="index.html">Home</a></li>
                            <li id="menu-item-6104"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6104">
                                <a href="#">Listings</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-6105"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_categories menu-item-6105">
                                        <a href="listings/shops/index.html">Shops</a></li>
                                    <li id="menu-item-6106"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_categories menu-item-6106">
                                        <a href="listings/restaurants/index.html">Restaurants</a></li>
                                    <li id="menu-item-6107"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_categories menu-item-6107">
                                        <a href="listings/hotels/index.html">Hotels</a></li>
                                    <li id="menu-item-6108"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_categories menu-item-6108">
                                        <a href="listings/hospitals/index.html">Hospitals</a></li>
                                    <li id="menu-item-6109"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_categories menu-item-6109">
                                        <a href="listings/entertainments/index.html">Entertainments</a></li>
                                    <li id="menu-item-6110"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_categories menu-item-6110">
                                        <a href="listings/airports/index.html">Airports</a></li>
                                    <li id="menu-item-6111"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_location menu-item-6111">
                                        <a href="location/hudson-district/index.html">Hudson District</a></li>
                                    <li id="menu-item-6112"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_location menu-item-6112">
                                        <a href="location/airport-locations/index.html">Airport Locations</a></li>
                                    <li id="menu-item-6113"
                                        class="menu-item menu-item-type-taxonomy menu-item-object-listings_location menu-item-6113">
                                        <a href="location/new-york-financial-district/index.html">Financial
                                            District</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-6114"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6114">
                                <a href="#">Pages</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-6150"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6150">
                                        <a href="membership-account/index.html">Membership Account</a></li>
                                    <li id="menu-item-6117"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6117">
                                        <a href="membership-account/membership-levels/index.html">Register/Renew</a>
                                    </li>
                                    <li id="menu-item-6118"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6118">
                                        <a href="membership-account/membership-invoice/index.html">Invoices</a></li>
                                    <li id="menu-item-6121"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6121">
                                        <a href="listings-dashboard-2/index.html">Listings Dashboard</a></li>
                                    <li id="menu-item-6119"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6119">
                                        <a href="submit-listing-2/index.html">Submit Listing</a></li>
                                    <li id="menu-item-6120"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6120">
                                        <a href="edit-profile/index.html">Edit Profile</a></li>
                                    <li id="menu-item-6122"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6122">
                                        <a href="homepage-slider/index.html">Homepage Slider</a></li>
                                    <li id="menu-item-6152"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6152">
                                        <a href="homepage-map-content/index.html">Homepage Map Content</a></li>
                                    <li id="menu-item-6343"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6343">
                                        <a href="map-all-listings/index.html">Map + All Listings</a></li>
                                    <li id="menu-item-6348"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6348">
                                        <a href="all-listings/index.html">All Listings</a></li>
                                    <li id="menu-item-6123"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6123">
                                        <a href="existing-users-login/index.html">Login Page</a></li>
                                    <li id="menu-item-6125"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6125">
                                        <a href="contact-page/index.html">Contact Page</a></li>
                                    <li id="menu-item-6124"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6124">
                                        <a href="blog/index.html">Blog</a></li>
                                    <li id="menu-item-6153"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6153">
                                        <a href="groups/index.html">Groups</a></li>
                                    <li id="menu-item-6155"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6155">
                                        <a href="activity/index.html">Activity</a></li>
                                    <li id="menu-item-6154"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6154">
                                        <a href="members/index.html">Members</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-6126"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6126">
                                <a href="shortcodes/index.html">Shortcodes</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-6127"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6127">
                                        <a href="shortcodes/accordion/index.html">Accordion</a></li>
                                    <li id="menu-item-6128"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6128">
                                        <a href="shortcodes/alert-messages/index.html">Alert Messages</a></li>
                                    <li id="menu-item-6129"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6129">
                                        <a href="shortcodes/boxes-callouts-teaser/index.html">Boxes, Callouts,
                                            Teaser</a></li>
                                    <li id="menu-item-6130"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6130">
                                        <a href="shortcodes/buttons/index.html">Buttons</a></li>
                                    <li id="menu-item-6131"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6131">
                                        <a href="shortcodes/columns/index.html">Columns</a></li>
                                    <li id="menu-item-6132"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6132">
                                        <a href="shortcodes/divider/index.html">Divider</a></li>
                                    <li id="menu-item-6133"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6133">
                                        <a href="shortcodes/dropcaps/index.html">Dropcaps</a></li>
                                    <li id="menu-item-6134"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6134">
                                        <a href="shortcodes/embeding-video/index.html">Embeding Video</a></li>
                                    <li id="menu-item-6135"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6135">
                                        <a href="shortcodes/google-maps/index.html">Google Maps</a></li>
                                    <li id="menu-item-6136"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6136">
                                        <a href="shortcodes/helper-shortcodes/index.html">Helper Shortcodes</a></li>
                                    <li id="menu-item-6137"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6137">
                                        <a href="shortcodes/icons/index.html">Icons</a></li>
                                    <li id="menu-item-6138"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6138">
                                        <a href="shortcodes/image-gallery-lightbox/index.html">Image Gallery &#038;
                                            Lightbox.</a></li>
                                    <li id="menu-item-6139"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6139">
                                        <a href="shortcodes/retina-icons/index.html">Info Boxes</a></li>
                                    <li id="menu-item-6140"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6140">
                                        <a href="shortcodes/members-skill-bars/index.html">Members &#038; Skill
                                            Bars</a></li>
                                    <li id="menu-item-6141"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6141">
                                        <a href="shortcodes/pricing-tables/index.html">Pricing Tables</a></li>
                                    <li id="menu-item-6142"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6142">
                                        <a href="shortcodes/quotes/index.html">Quotes &#038; Testimonials</a></li>
                                    <li id="menu-item-6143"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6143">
                                        <a href="shortcodes/responsive-visibility/index.html">Responsive
                                            Visibility</a></li>
                                    <li id="menu-item-6144"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6144">
                                        <a href="shortcodes/styled-tables/index.html">Styled Tables</a></li>
                                    <li id="menu-item-6145"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6145">
                                        <a href="shortcodes/tabs/index.html">Tabs</a></li>
                                    <li id="menu-item-6146"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6146">
                                        <a href="shortcodes/toggles/index.html">Toggles</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-6151"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6151"><a
                                        href="customize/index.html">Customize</a></li>
                        </ul>
                    </div>
                </nav>

            </section><!-- end navigation -->

            <div class="clearboth"></div>

        </div>

    </section>


</header>
