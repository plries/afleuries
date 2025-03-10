import { easeInOut } from "motion/react"

export const AFLEURIES_ILLUSTRATED = {
    HEADER: {
        BUTTON: "Book now"
    },
    HERO: {
        HEADING: "Afleuries Illustration Station",
        ALT: "Illustration of Abby"
    },
    EXPERIENCE: {
        HEADING: ["An ", "Interactive Experience"],
        PARAGRAPHS: {
            ONE: ["Abby, the artist, sketches ", "custom portraits ", "of guests while they mingle, with a ", "live projection ", "of the digital canvas so everyone can watch the artwork come to life."],
            TWO: ["It’s a fun, interactive experience that gives your guests both entertainment and a ", "personalized keepsake ", "to remember the day!"]
        },
        ALT: "Guests looking at custom portraits."
    },
    HOW_IT_WORKS: {
        HEADING: ["How ", "it Works"],
        ICON_LEFT: {
            SRC: "/icons/ChevronLeft.svg",
            ALT: "Chevron Icon"
        },
        ICON_RIGHT: {
            SRC: "/icons/ChevronRight.svg",
            ALT: "Chevron Icon"
        },
        STEPS: [
            {
                ICON: {
                    SRC: "/icons/CameraIcon.svg",
                    ALT: "Camera Icon",
                },
                HEADING: "Snap a photo",
                PARAGRAPH: "Guests come and line up just like they would for a photo booth. Abby will take a quick photo of each person."
            },
            {
                ICON: {
                    SRC: "/icons/EnjoyIcon.svg",
                    ALT: "Scribble Icon",
                },
                HEADING: "Enjoy the Event",
                PARAGRAPH: "Guests can go back to partying! Abby can take it from here—creating the portrait in the background."
            },
            {
                ICON: {
                    SRC: "/icons/PickUpIcon.svg",
                    ALT: "Art Prints Icon"
                },
                HEADING: "Pick Up Your Art",
                PARAGRAPH: "Before heading out, swing by to grab your personalized drawing. It’s the perfect keepsake to take home!"
            }
        ]
    },
    CONTACT: {
        HEADING: ["Get ", "in Touch"],
        PARAGRAPHS: {
            ONE: "Have questions? Ready to book?",
            TWO: "Fill out the form and let's bring your event to life with unique digital portraits!",
        },
        FORM: {
            FIRST_NAME: {
                LABEL: "First Name",
                FOR: "fname",
            },
            LAST_NAME: {
                LABEL: "Last Name",
                FOR: "lname",
            },
            EMAIL: {
                LABEL: "Email",
                DESCRIPTION: ["Please ", "double check ", "your email—this will be our main point of contact!"],
                FOR: "email",
            },
            EVENT_DETAILS: {
                LABEL: "Event Details",
                DESCRIPTION: ["Please provide a ", "brief summary ", "of the event! Also include the event's date, time, and location."],
                FOR: "event-details",
            },
            BUTTON: "Submit"
        }
    }
}

export const MOTION_CONFIG = {
    INITIAL: { filter: "blur(10px)", transform: "translateY(24px)", opacity: 0 },
    WHILE_IN_VIEW: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
    TRANSITION: { duration: 0.6, easeInOut, stagger: 0.6 },
}