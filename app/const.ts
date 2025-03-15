import { easeInOut } from "motion/react"
import { CameraIcon, EnjoyIcon, PickUpIcon } from "@/public"

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
            ONE: ["Hi, I'm Abby! I will be sketching ", "custom portraits ", "of guests while they mingle, with a ", "live projection ", "of the digital canvas so everyone can watch the artwork come to life."],
            TWO: ["It’s a fun, interactive experience that gives your guests both entertainment and a ", "personalized keepsake ", "to remember the day!"]
        },
        ALT: "Guests looking at custom portraits."
    },
    SERVICES: {
        HEADING: ["My ", "Services"],
        BUTTONS: {
            GUEST_PORTRAIT: "Guest Portraits",
            BRIDE_GROOM: "Bride & Groom Portraits",
        },
        PARAGRAPH: {
            GUEST_PORTRAIT: "I’ll capture custom digital portraits of your guests, starting with a quick photo, followed by a live creation process in the background. Each guest leaves with a personalized keepsake—a unique piece of art to remember the event by.",
            BRIDE_GROOM: "Throughout the evening, I create 2-3 live portraits of the bride & groom, capturing different moments from the big day while displaying them for your guests to enjoy. Guests can collect each one as it’s finished, leaving with a fun & memorable keepsake of your special day!",
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
            HEADING: ["How ", "it Works"],
            STEPS: {
                GUEST_PORTRAIT: [
                    {
                        ICON: {
                            SRC: CameraIcon,
                            COLOUR: "text-[#6F8196]"
                        },
                        HEADING: "Snap a Photo",
                        PARAGRAPH: "Guests come and line up just like they would for a photo booth. Abby will take a quick photo of each person."
                    },
                    {
                        ICON: {
                            SRC: EnjoyIcon,
                            COLOUR: "text-[#AD915C]"
                        },
                        HEADING: "Enjoy the Event",
                        PARAGRAPH: "Guests can go back to partying! Abby can take it from here—creating the portrait in the background."
                    },
                    {
                        ICON: {
                            SRC: PickUpIcon,
                            COLOUR: "text-[#C9827B]"
                        },
                        HEADING: "Pick Up Your Art",
                        PARAGRAPH: "Before heading out, swing by to grab your personalized drawing. It’s the perfect keepsake to take home!"
                    }
                ],
                BRIDE_GROOM: [
                    {
                        ICON: {
                            SRC: CameraIcon,
                            COLOUR: "text-[#6F8196]"
                        },
                        HEADING: "Moments Coming to Life",
                        PARAGRAPH: " Throughout the night, I create 2-3 unique portraits of the bride & groom, turning special moments from the day into art as the celebration unfolds."
                    },
                    {
                        ICON: {
                            SRC: EnjoyIcon,
                            COLOUR: "text-[#AD915C]"
                        },
                        HEADING: "Enjoy the Process",
                        PARAGRAPH: "As I work, guests can watch the portraits take shape on the big screen, adding to the excitement of the celebration."
                    },
                    {
                        ICON: {
                            SRC: PickUpIcon,
                            COLOUR: "text-[#C9827B]"
                        },
                        HEADING: "Grab Your Keepsake",
                        PARAGRAPH: "Before the night’s over, guests can grab their very own custom portrait of the Bride & Groom—an unforgettable, one-of-a-kind memento to take home!"
                    }
                ]
            }
        },
    },
    CONTACT: {
        HEADING: ["Get ", "in Touch"],
        PARAGRAPHS: {
            ONE: "Have questions? Ready to book?",
            TWO: "Fill out the form and let's bring your event to life with unique digital portraits!",
        },
        FORM: {
            CONTACT: "Contact Details",
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
            EVENT: "Event Details",
            EVENT_DATE: {
                LABEL: "Date",
                FOR: "datetime-local",
            },
            EVENT_LOCATION: {
                LABEL: "Location",
                FOR: "location",
            },
            EVENT_DETAILS: {
                LABEL: "Description",
                DESCRIPTION: ["Please provide a ", "brief summary ", "of the event!"],
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