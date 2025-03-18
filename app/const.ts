import { easeInOut } from "motion/react"
import { CameraIcon, CanvasIcon, PhotosIcon, RingsIcon, GlassesIcon, PortraitsIcon, SparklesIcon, HeartsIcon, SquiggleIcon } from "@/public"

export const AFLEURIES_ILLUSTRATED = {
    HEADER: {
        BUTTON: "Book now"
    },
    HERO: {
        SR_ONLY: "Afleuries Illustrated",
        HEADING: "Live Portait Artist",
        ALT: "Illustration of Abby"
    },
    EXPERIENCE: {
        HEADING: "An Interactive Experience",
        PARAGRAPHS: {
            ONE: ["Hi, I'm Abby! I'll be sketching ", "custom portraits ", "of guests while they mingle, with a ", "live projection ", "of the digital canvas so everyone can watch the artwork come to life."],
            TWO: ["It’s a fun, interactive experience that gives your guests both entertainment and a ", "personalized keepsake ", "to remember the day!"]
        },
        IMAGE: {
            SRC: "/images/Experience.jpg",
            ALT: "Guests looking at custom portraits."
        }
    },
    PORTRAITS: {
        HEADING: "Types of Portraits",
        PARAGRAPH: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, mi vitae maximus porta, risus diam tempus odio, ut ullamcorper risus sapien at neque. Duis quis purus magna. Sed ornare dui id lorem viverra, id tincidunt ex congue.",
        BUTTONS: {
            GUEST_PORTRAIT: "Guests",
            BRIDE_GROOM: "Bride & Groom",
        },
        IMAGES: {
            GUEST_PORTRAIT: {
                SRC: "/images/GuestPortraits.jpg",
                ALT: "Guest Portraits"
            },
            BRIDE_GROOM: {
                SRC: "/images/BrideGroom.jpg",
                ALT: "Bride & Groom Portraits"
            }
        },
        HOW_IT_WORKS: {
            HEADING: "How it Works",
            STEPS: {
                GUEST_PORTRAIT: [
                    {
                        ICON: {
                            SRC: CameraIcon,
                        },
                        HEADING: "Snap a Photo",
                        PARAGRAPH: "Guests come and line up just like they would for a photo booth. Abby will take a quick photo of each person."
                    },
                    {
                        ICON: {
                            SRC: CanvasIcon,
                        },
                        HEADING: "Enjoy the Event",
                        PARAGRAPH: "Guests can go back to partying! Abby can take it from here—creating the portrait in the background."
                    },
                    {
                        ICON: {
                            SRC: PhotosIcon,
                        },
                        HEADING: "Pick Up Your Art",
                        PARAGRAPH: "Before heading out, swing by to grab your personalized drawing. It’s the perfect keepsake to take home!"
                    }
                ],
                BRIDE_GROOM: [
                    {
                        ICON: {
                            SRC: RingsIcon,
                        },
                        HEADING: "Moments Coming to Life",
                        PARAGRAPH: "Throughout the night, I create 2-3 unique portraits of the bride & groom, turning special moments from the day into art as the celebration unfolds."
                    },
                    {
                        ICON: {
                            SRC: GlassesIcon,
                        },
                        HEADING: "Enjoy the Process",
                        PARAGRAPH: "As I work, guests can watch the portraits take shape on the big screen, adding to the excitement of the celebration."
                    },
                    {
                        ICON: {
                            SRC: PortraitsIcon,
                        },
                        HEADING: "Grab Your Keepsake",
                        PARAGRAPH: "Before the night’s over, guests can grab their very own custom portrait of the Bride & Groom—an unforgettable, one-of-a-kind memento to take home!"
                    }
                ]
            }
        },
    },
    CONTACT: {
        HEADING: "Get in Touch",
        PARAGRAPHS: {
            ONE: "Have questions? Ready to book?",
            TWO: "Fill out the form and let's bring your event to life with unique digital portraits!",
        },
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
                DESCRIPTION: ["Please ", "double check ", "your email—this will be our main point of contact!"],
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
                DESCRIPTION: ["Please provide a ", "brief summary ", "of the event!"],
                FOR: "details",
                NAME: "Event Details",
            },
            BUTTON: "Submit",
            SUCCESS: "Form submitted — I'll be in touch shortly!",
        },
        RECAPTCHA: {
            PARAGRAPH: ["This site is protected by reCAPTCHA and the Google ", "and ",  "apply."],
            PRIVACY_POLICY: {
                LINK: "https://policies.google.com/privacy",
                TEXT: "Privacy Policy "
            },
            TERMS_OF_SERVICE: {
                LINK: "https://policies.google.com/terms",
                TEXT: "Terms of Service "
            }
        }
    },
    DOODLES: {
        SQUIGGLES: SquiggleIcon,
        HEARTS: HeartsIcon,
        SPARKLES: SparklesIcon,
    }
}

export const MOTION_CONFIG = {
    INITIAL: { filter: "blur(10px)", transform: "translateY(24px)", opacity: 0 },
    WHILE_IN_VIEW: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
    TRANSITION: { duration: 0.6, easeInOut, stagger: 0.6 },
}