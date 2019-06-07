import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, AlertController, Events, Platform } from '@ionic/angular';
import { CATEGORIES, CONTACTINFO } from '../constants';
import { ContactusPage } from '../modal/contactus/contactus.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  @ViewChild('landingCarousel') landingCarousel: ElementRef;
  @ViewChild('whyverify') divVerify: ElementRef;
  @ViewChild('howitworks') divHowWorks: ElementRef;
  @ViewChild('ourexperts') divOurExperts: ElementRef;

  /**
   * Variable for logged in status
   */
  private isLoggedIn: boolean;

  /**
   * Array of Menu items for Browser platform.
   */
  private arrFooterMenus = [
    {
      id: 0,
      title: "Home"
    },
    {
      id: 1,
      title: "Contact"
    },
    {
      id: 2,
      title: "How it works"
    },
    {
      id: 3,
      title: "Why Veridoc"
    },
    {
      id: 4,
      title: "Our Team"
    },
    {
      id: 5,
      title: "FAQ"
    },
    {
      id: 6,
      title: "Terms of Use"
    },
  ];

  /**
   * Array of images for Carousel
   */
  private arrImgs = [
    'assets/imgs/img-carousel_1.jpg',
    'assets/imgs/img-carousel_2.jpg',
    'assets/imgs/img-carousel_3.jpg'
  ];

  /**
   * Options for slide component
   */
  private slideOpts = {
    initialSlide: 0,
    zoom: false,
    slidesPerView: 1
  };

  private carouselSlideOpts = {
    initialSlide: 0,
    zoom: false,
    slidesPerView: 1
  }

  /**
   * Landing Page contents(How it works, Why veridoc, Team behind veridoc)
   */
  private landingPageContents = [
    {
      title: "How it works",
      childs: [
        {
          id: 1,
          header: "",
          subheader: "Create Free Profile",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
          img: "assets/imgs/img-landing-tmp.svg"
        },
        {
          id: 2,
          header: "",
          subheader: "Upload Documents",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
          img: "assets/imgs/img-landing-tmp.svg"
        },
        {
          id: 3,
          header: "",
          subheader: "Documents Verified",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
          img: "assets/imgs/img-landing-tmp.svg"
        },
      ]
    },
    {
      title: "Why VeriDoc",
      childs: [
        {
          id: 1,
          header: "",
          subheader: "24 Hours Service",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
          img: "assets/imgs/img-whyveridoc.svg"
        },
        {
          id: 2,
          header: "",
          subheader: "24 Hours Service",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
          img: "assets/imgs/img-whyveridoc.svg"
        },
        {
          id: 3,
          header: "",
          subheader: "24 Hours Service",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
          img: "assets/imgs/img-whyveridoc.svg"
        }
      ]
    },
    {
      title: "Team Behind VeriDoc",
      childs: [
        {
          id: 1,
          header: "John Smith",
          subheader: "CEO",
          img: "assets/imgs/img-profile1.jpg",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email"
        },
        {
          id: 2,
          header: "John Smith",
          subheader: "CEO",
          img: "assets/imgs/img-profile2.jpg",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email"
        },
        {
          id: 3,
          header: "John Smith",
          subheader: "CEO",
          img: "assets/imgs/img-profile3.jpg",
          content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email"
        },
      ]
    }
  ];

  /**
   * Experts Number
   */
  private numExperts = 100;

  /**
   * Categories Number
   */
  private numCategories = CATEGORIES.length;

  /**
   * Reviewd Doc Number
   */
  private numReviewedDoc = 500;

  /**
   * Contact Info constants
   * @see ../constants.ts
   */
  private contactInfo = CONTACTINFO;

  /**
   * Array Reviews
   */
  private arrReviews = [
    {
      name: "John Doe",
      rating: 5,
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "assets/imgs/img-profile1.jpg",
    },
    {
      name: "John Doe",
      rating: 4,
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "assets/imgs/img-profile2.jpg",
    },
    {
      name: "John Doe",
      rating: 5,
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "assets/imgs/img-profile3.jpg",
    },
  ]

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private altCtrl: AlertController,
    private event: Events,
    private platform: Platform
  ) { 
    this.event.subscribe("onLoginStatusChange", data => {
      this.initPage();
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.initPage();
  }
  
  /**
   * Init page
   */
  initPage() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn")=='true'?true: false;
    if(!this.platform.is("mobile")) {
      this.slideOpts.slidesPerView = 3;
    }
    console.log(this.slideOpts);
  }

  /**
   * Scroll to specific position
   * @param index 
   * @returns null
   */
  onClickFooterMenuItem(index) {
    switch(index) {
      case 0:
        this.landingCarousel.nativeElement.scrollIntoView({behavior: "smooth"});
        break;
      case 1:
        this.onClickContactUs();
        break;
      case 2:
        this.divHowWorks.nativeElement.scrollIntoView({behavior: "smooth"});
        break;
      case 3:
        this.divVerify.nativeElement.scrollIntoView({behavior: "smooth"});
        break;
      case 4:
        this.divOurExperts.nativeElement.scrollIntoView({behavior: "smooth"});
        break;
      case 5:
        this.onClickFaq();
        break;
      case 6:
        this.onClickViewTermsofUse();
        break;
      default:
        break;
    }
  }

  /**
   * Navigate to Login page
   */
  onClickGetStarted() {
    this.navCtrl.navigateForward('/login');
  }

  /**
   * Navigate to Review page
   * @param evt
   * @returns null
   */
  onClickGetExpertsReviewBtn(evt) {
    evt.preventDefault();
    this.navCtrl.navigateForward('/menu/expertsreview');
  }

  onClickViewOurExperts() {

  }

  /**
   * Scroll to top
   */
  onClickToTop() {
    this.landingCarousel.nativeElement.scrollIntoView({behavior: "smooth"});
  }

  /**
   * Navigate to FAQ page
   */
  onClickFaq() {
    this.navCtrl.navigateForward('faq');
  }

  /**
   * Show Contact Us Modal
   */
  async onClickContactUs() {
    const contactUsModal = await this.modalCtrl.create({
      component: ContactusPage,
      cssClass: 'info-modal'
    });
    await contactUsModal.present();
  }

  /**
   * Show Term of Use Modal
   */
  async onClickViewTermsofUse() {
    const termsAlt = await this.altCtrl.create({
      header: "Terms of Use",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis neque et odio semper tincidunt. In vel odio id elit lacinia finibus vel nec arcu. Donec at lacinia elit, vel accumsan ligula.",
      buttons: ['OK']
    });
    await termsAlt.present();
  }

  /**
   * Clear event listener
   */
  ionViewWillLeave() {
    
  }

}
