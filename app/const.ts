import { easeInOut } from "motion/react";
import {
  CameraIcon,
  CanvasIcon,
  PhotosIcon,
  RingsIcon,
  GlassesIcon,
  PortraitsIcon,
  SparklesIcon,
  HeartsIcon,
  SquiggleIcon,
  InstagramIcon,
  EmailIcon,
} from "@/public";

export const AFLEURIES_ILLUSTRATED = {
  CANVAS_TEXTURE: {
    SRC: "/CanvasTexture.jpg",
    ALT: "Canvas Texture",
  },
  HEADER: {
    LOGO: {
      SRC: "/AfleuriesLogoBlack.svg",
      ALT: "Afleuries Illustrated Logo",
    },
    BUTTONS: {
      ABOUT: "About me",
      BOOK: "Book now",
      MENU: {
        OPEN: "Menu opened",
        CLOSE: "Menu closed",
      },
    },
  },
  HERO: {
    LOGO: {
      SRC: "/AfleuriesLogoTitle.svg",
      ALT: "Afleuries Illustrated ",
      HEADING: "Interactive Keepsake Experiences",
    },
    IMAGE: {
      SRC: "/AfleuriesIllustration.svg",
      ALT: "Illustration of Abby",
    },
  },
  EXPERIENCE: {
    HEADING: "The keepsake they'll talk about all night.",
    PARAGRAPHS: {
      ONE: [
        "Every great wedding has a moment guests can't stop talking about. Imagine yours being the one where everyone left with a ",
        "custom illustrated keepsake",
        ", unlike anything they’ve seen at a wedding before.",
      ],
      TWO: [
        "I'm Abby! An illustrator based in ",
        "British Columbia. ",
        "I design and bring custom illustrated keepsake experiences to weddings and events. "
      ],
      THREE: [
        "No templates, no stock art or AI. Just something made with love, for you and your people!",
      ],
    },
    IMAGE: {
      SRC: "/images/Experience.jpg",
      ALT: "Guests looking at custom portraits",
    },
  },
  PORTRAITS: {
    HEADING: "Choose your Experience",
    PARAGRAPHS: {
      ONE: [
        "From sticker stations guests can't stop using to custom pins, illustrated guest books, and more, ",
        "every Afleuries experience is designed from scratch",
        ", in Abby's signature style, for your event only.",
      ],
      TWO: [],
    },
    BUTTONS: [
      "Illustrated Sticker Booth",
      "Gacha Pin Machine",
      "Live Guest Portrait",
      "Live Signature Portrait",
    ],
    IMAGES: [
      {
        KEY: 'Illustrated Sticker Booth',
        SRC: "/images/StickerBooth.jpg",
      },
      {
        KEY: 'Gacha Pin Machine',
        SRC: "/images/GachaPins.jpg",
      },
      {
        KEY: 'Live Guest Portrait',
        SRC: "/images/LiveGuest.jpg",
      },
      {
        KEY: 'Live Signature Portrait',
        SRC: "/images/LiveSignature.jpg",
      }
    ],
    DESCRIPTIONS: [
      {
        KEY: 'Illustrated Sticker Booth',
        TEXT: "A custom sticker vending experience at your event. Guests interact, collect, and leave with something custom-made and exclusive to the day!",
      },
      {
        KEY: 'Gacha Pin Machine',
        TEXT: "Custom illustrated button pins in a capsule vending machine. Twist the wheel, keep what you get!",
      },
      {
        KEY: 'Live Guest Portrait',
        TEXT: "Abby draws custom digital portraits of your guests live at the event. It becomes a timeless keepsake, created right before their eyes.",
      },
      {
        KEY: 'Live Signature Portrait',
        TEXT: "Abby creates one dedicated illustrated artwork of the bride & groom, celebrant, or guest of honour. Live at your event, finished by the end of the night!",
      }
    ],
    HOW_IT_WORKS: {
      HEADING: "How it Works",
      STEPS: {
        GUEST_PORTRAIT: [
          {
            ICON: {
              SRC: CameraIcon,
            },
            HEADING: "Snap a Photo",
            PARAGRAPH:
              "Step up, strike a pose, and snap! Just like a photo booth—but with a creative twist—I’ll capture a quick shot to kick off your custom digital portrait. Then, it’s time to enjoy the party while the magic happens!",
          },
          {
            ICON: {
              SRC: CanvasIcon,
            },
            HEADING: "Enjoy the Event",
            PARAGRAPH:
              "Guests can go back to partying! Abby can take it from here—creating your custom portraits in the background.",
          },
          {
            ICON: {
              SRC: PhotosIcon,
            },
            HEADING: "Pick Up Your Art",
            PARAGRAPH:
              "Before heading out, swing by to grab your personalized drawing. It’s the perfect keepsake to take home!",
          },
        ],
        BRIDE_GROOM: [
          {
            ICON: {
              SRC: RingsIcon,
            },
            HEADING: "Moments Coming to Life",
            PARAGRAPH:
              "I'll transform the bride & groom’s candid moments into live portraits. A shared laugh, a stolen glance, or their first kiss—each piece comes to life in real time, turning the day’s memories into lasting artwork.",
          },
          {
            ICON: {
              SRC: GlassesIcon,
            },
            HEADING: "Enjoy the Process",
            PARAGRAPH:
              "As I work, guests can watch the portraits take shape on the big screen, adding to the enchantment of the celebration.",
          },
          {
            ICON: {
              SRC: PortraitsIcon,
            },
            HEADING: "Grab Your Keepsake",
            PARAGRAPH:
              "Before the night’s over, guests can grab their very own custom portrait of the Bride & Groom—an unforgettable, one-of-a-kind memento to take home!",
          },
        ],
      },
      BUTTONS: {
        PREVIOUS: "Previous",
        NEXT: "Next",
      },
    },
  },
  CONTACT: {
    HEADING: "Get in Touch",
    PARAGRAPHS: {
      TWO: "Fill out the form and let's bring something Illustrated, unique and unforgettable to your day.",
    },
    PROMOTION: [
      "Book between ",
      "March 23 - March 29 ",
      "to enjoy ",
      "20% off ",
      "your reservation with Afleuries Illustrated!",
    ],
    FORM: {
      CONTACT: "Contact Details",
      FIRST_NAME: {
        LABEL: "First Name",
        FOR: "fname",
        NAME: "First Name",
      },
      LAST_NAME: {
        LABEL: "Last Name",
        FOR: "lname",
        NAME: "Last Name",
      },
      EMAIL: {
        LABEL: "Email",
        DESCRIPTION: [
          "Please ",
          "double check ",
          "your email—this will be our main point of contact!",
        ],
        FOR: "email",
        NAME: "Email",
      },
      EVENT: "Event Details",
      EVENT_DATE: {
        LABEL: "Date",
        FOR: "datetime-local",
        NAME: "Event Date / Time",
      },
      EVENT_LOCATION: {
        LABEL: "Location",
        FOR: "location",
        NAME: "Event Location",
      },
      EVENT_DETAILS: {
        LABEL: "Description",
        DESCRIPTION: ["Tell us about your ", "event ", "and ", "which experience(s) ", "you're interested in!"],
        FOR: "details",
        NAME: "Event Details",
      },
      BUTTON: "Submit",
      SUCCESS: "Form submitted — I'll be in touch shortly!",
    },
    RECAPTCHA: {
      PARAGRAPH: [
        "This site is protected by reCAPTCHA and the Google ",
        "and ",
        "apply.",
      ],
      PRIVACY_POLICY: {
        LINK: "https://policies.google.com/privacy",
        TEXT: "Privacy Policy ",
      },
      TERMS_OF_SERVICE: {
        LINK: "https://policies.google.com/terms",
        TEXT: "Terms of Service ",
      },
    },
  },
  ABOUT: {
    HEADING: "Who's Abby?",
    IMAGE: {
      SRC: "/images/AfleuriesHeadshot.jpg",
      ALT: "Abby Aries",
    },
    PARAGRAPHS: {
      ONE: [
        "Abby Aries, the creative mind behind ",
        "Afleuries Illustrated, ",
        "is a versatile illustrator & designer based in British Columbia, Canada.",
      ],
      TWO: [
        "With a passion for storytelling through art, she brings moments to life through digital illustration, creating unique & memorable pieces. Her background in ",
        "production design, props, photography, and graphic design ",
        "adds depth to her creative approach, blending artistry with immersive experiences.",
      ],
      THREE:
        "Constantly exploring new ways to create, Abby thrives on turning everyday moments into visual narratives—bringing a touch of artistry to every project she takes on. ",
    },
    SOCIALS: [
      {
        ICON: InstagramIcon,
        HREF: "https://www.instagram.com/afleuries",
        NAME: "Instagram",
      },
      {
        ICON: EmailIcon,
        HREF: "mailto:hello@afleuries.com",
        NAME: "Email",
      },
    ],
  },
  MODAL: {
    HEADING: "Get 20% off!",
    PARAGRAPH: [
      "Book between ",
      "March 23 - March 29 ",
      "to enjoy ",
      "20% off ",
      "your reservation with Afleuries Illustrated!",
    ],
    BUTTONS: {
      CLOSE: "Close",
      CTA: "Redeem now",
    },
  },
  DOODLES: {
    SQUIGGLES: SquiggleIcon,
    HEARTS: HeartsIcon,
    SPARKLES: SparklesIcon,
  },
};

export const MOTION_CONFIG = {
  INITIAL: { filter: "blur(10px)", transform: "translateY(24px)", opacity: 0 },
  WHILE_IN_VIEW: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  TRANSITION: { duration: 0.6, easeInOut, stagger: 0.6 },
};
