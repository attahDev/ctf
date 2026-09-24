export const connectContent = {
    hero: {
      desktop: {
        eyebrow: "GLORY TIME CHRISTIAN CENTER",
        title: "Connect With Us",
        description:
          "Whether you are seeking prayer, looking to join a small group, or visiting for the first time, we want to walk alongside you in grace, peace, and confidence.",
      },
  
      mobile: {
        eyebrow: "GET CONNECTED",
        title: "Connect With Us",
        description:
          "No matter your background, story, or season of life — you belong here in our global family.",
      },
    },
  
    visit: {
      desktop: {
        eyebrow: "JOIN US IN PERSON",
        title: "Come as you are, you belong here.",
        description:
          "We gather corporately mid-week and every Sunday to build up our faith, seek God's truth, and lift up our voices together.",
  
        serviceTimes: {
          title: "Weekly Service Times",
  
          services: [
            {
              name: "Sunday Celebration Service",
              time: "10:30 AM",
            },
            {
              name: "Mid-Week Interactive Bible Study",
              time: "7:00 PM",
            },
          ],
        },
  
        location: {
          title: "Our Location & Parking",
          name: "Glory Time Christian Center (Main Hub)",
          address:
            "153 Susan Run, Suite 220, Portland, OR (or London City Hub for UK worshipers)",
          parking:
            "Ample free secure parking is available on-site right in front of the main foyer. Dedicated guest assistance coordinators are present to direct you.",
          directionsCta: "Get Directions on Google Maps",
          mapsHref:
            "https://www.google.com/maps/search/?api=1&query=153+Susan+Run+Suite+220+Portland+OR",
          mapImageSrc: "/connect/img/map-image.jpg",
          mapImageAlt: "Map showing Glory Time Christian Center location",
        },
      },
  
      mobile: {
        eyebrow: "JOIN US IN PERSON OR ONLINE",
        title: "Service Times & Location",
  
        services: [
          {
            title: "Main Sunday Service",
            time: "Sunday 10:30 AM - 12:45 PM",
            description:
              "Join us at the London Hub or online via Worship Without Walls.",
          },
          {
            title: "Foundation Bible Class",
            time: "Wednesday 7:00 PM - 8:30 PM",
            description:
              "Interactive Zoom and global live stream options.",
          },
        ],
  
        location: {
          title: "UK Central Office & London Hub",
          address: "Grace House, Suite 10, London, SE1 7PB",
          mapCta: "VIEW MAP",
          mapsHref:
            "https://www.google.com/maps/search/?api=1&query=Grace+House+Suite+10+London+SE1+7PB",
          mapsEmbedSrc:
            "https://maps.google.com/maps?q=Grace+House+Suite+10+London+SE1+7PB&hl=en&z=16&output=embed",
          parking:
            "Free street parking is available on Sundays. Secure lockup for bicycles inside the gate.",
        },
      },
    },
  
    contact: {
      desktop: {
        title: "Send Us a Message",
        description:
          "Have questions? We would love to hear from you and connect you with the right ministry leaders.",
  
        fields: {
          fullName: {
            label: "Full Name *",
            placeholder: "e.g. John Doe",
          },
  
          email: {
            label: "Email Address *",
            placeholder: "e.g. john@example.com",
          },
  
          phone: {
            label: "Phone Number",
            placeholder: "e.g. +44 7123 456789",
          },
  
          message: {
            label: "Your Message *",
            placeholder: "How can we help or serve you today?",
          },
        },
  
        submitLabel: "SEND MESSAGE",
      },
  
      mobile: {
        eyebrow: "REACH OUT TO US",
        title: "Send a Message",
        description:
          "Have questions or need assistance? Fill out the secure form below, and we'll connect with you shortly.",
  
        fields: {
          fullName: {
            label: "FULL NAME",
            placeholder: "Your name",
          },
  
          email: {
            label: "EMAIL ADDRESS",
            placeholder: "Your primary email address",
          },
  
          phone: {
            label: "PHONE NUMBER",
            placeholder: "Your mobile phone number",
          },
  
          message: {
            label: "YOUR MESSAGE",
            placeholder: "How can we help you today?",
          },
        },
  
        submitLabel: "SEND MESSAGE",
      },
    },
  
    pastoralCare: {
      desktop: {
        eyebrow: "PASTORAL CARE & SUPPORT",
        title: "Book a Counselling or Prayer Session",
  
        description:
          "Our pastoral team and trained counselors are here to support you. Life can bring challenges, but you do not have to walk through them alone. Book a strictly private and confidential counseling, prayer, or guidance session today.",
  
        action: {
          label: "REQUEST CALL",
        },
  
        supportPhone: {
          label: "Call 24/7 Support:",
          phone: "+44 20 8123 4567",
        },
  
        urgentPrayer: {
          title: "Need Urgent Prayer?",
          description:
            "Submit an online prayer request. Our global prayer warriors intercede daily.",
        },
      },
  
      mobile: {
        title: "Pastoral Care & Prayer",
        subtitle: "Led by Pastors Samuel & Joy",
  
        description:
          '"Are you passing through a difficult season? We are here to stand with you. Book a confidential counseling or request a direct prayer session."',
  
        action: {
          label: "BOOK COUNSELLING SESSION",
        },
      },
    },
  
    communityLife: {
      desktop: {
        eyebrow: "TRIBE SMALL GROUPS",
        title: "Life is better connected.",
        description:
          "Small groups are the heartbeat of Glory Time. They are friendly, informal environments where you can make genuine friends, study the word, and grow spiritually.",
        badge: "TRIBE GROUP",
        cta: "REQUEST TO JOIN",
        ctaHref: "/contact#tribe-join",
        groups: [
          {
            title: "Tribe Mentorship Men",
            schedule: "Alternate Tuesdays · 7:30 PM",
            location: "City Hub & Online",
            lead: "Lead: Pastor David K.",
          },
          {
            title: "Grace & Peace Women",
            schedule: "Every Thursday · 10:00 AM",
            location: "Main Sanctuary Café",
            lead: "Lead: Sister Sarah M.",
          },
          {
            title: "Next-Gen Youth (Kids & Teens)",
            schedule: "Every Friday · 6:30 PM",
            location: "Community Activity Hall",
            lead: "Lead: Brother Josh & Team",
          },
          {
            title: "Worship Without Walls Fellowship",
            schedule: "First Saturdays · 6:00 PM",
            location: "Decentralized House Pods",
            lead: "Lead: Elder Raymond T.",
          },
        ],
      },

      mobile: {
        eyebrow: "COMMUNITY LIFE",
        title: "Tribe Life Groups",
  
        description:
          "Spiritual growth happens in circles, not just rows. Find a mid-week life group centered around friendship and faith.",
  
        groups: [
          {
            title: "Tribe Young Professionals",
            schedule: "Alternate Saturdays • 10:30 AM • Central Hub / Hybrid",
          },
          {
            title: "Family Discipleship Circles",
            schedule: "Tuesdays • 7:00 PM • Zoom Online",
          },
        ],
      },
    },
  
    growthPath: {
      desktop: {
        eyebrow: "FIRST TIME VISITING?",
        title: "Your Growth Path At Glory Time",
  
        description:
          "We make it easy to find your place here. Take these simple steps to transition from visitor to a mature co-laborer in Grace.",
  
        steps: [
          {
            number: "01",
            title: "Plan Your Visit",
            description:
              "Let us know you are coming so our hospitality team can welcome you and assist with directions or child check-in.",
          },
          {
            number: "02",
            title: "Attend Sunday",
            description:
              "Experience high-praise worship, uncompromised teaching, and the physical presence of believers in our main hubs.",
          },
          {
            number: "03",
            title: "Get Connected",
            description:
              "Join a Tribe Small Group or attend our Next Steps class to learn about our history, mandate, and vision.",
          },
          {
            number: "04",
            title: "Grow & Reform",
            description:
              "Step into mature discipleship, activate your spiritual gifts, and co-labor with us to reform society with truth.",
          },
        ],
  
        actions: {
          primary: "I'M PLANNING A VISIT THIS SUNDAY",
          primaryHref: "/contact#message",
          secondary: "READ OUR MANDATE",
          secondaryHref: "/about",
        },
      },
  
      mobile: {
        eyebrow: "YOUR PATHWAY AT GTCC",
        title: "New Here? Simple Steps",
  
        steps: [
          {
            number: "1",
            title: "Plan Your Visit",
            description:
              "Let us know you're coming so we can welcome you and prepare a smooth check-in for your kids.",
          },
          {
            number: "2",
            title: "Attend Sunday Worship",
            description:
              "Experience our uplifting corporate praise and uncompromised New Creation teachings.",
          },
          {
            number: "3",
            title: "Connect in a Tribe",
            description:
              "Get integrated into our local hubs, find a life group, and make lifelong friends.",
          },
          {
            number: "4",
            title: "Grow & Reign",
            description:
              "Attend Foundation classes, step into leadership, and impact your society.",
          },
        ],
      },
    },
  
    social: {
      desktop: {
        eyebrow: "STAY CONNECTED ONLINE",
        title: "Follow Glory Time Christian Center",
  
        description:
          "We are active throughout the week sharing encouragement, live worship clips, event announcements, and spiritual resources across social platforms.",
  
        posts: [
          {
            platform: "YOUTUBE",
            time: "2 hours ago",
            title: "Worship Highlights from Sunday",
            description:
              "The atmosphere was saturated with deep praise. Watch the full recap online...",
            cta: "VIEW POST",
            href: "https://www.youtube.com",
            imageSrc: "/connect/img/youtube.jpg",
            imageAlt: "Worship leader singing on stage",
          },
          {
            platform: "INSTAGRAM",
            time: "2 hours ago",
            title: "Grace. Peace. Confidence.",
            description:
              "A powerful scripture meditation from 2 Peter 1:2. Share with someone who needs this...",
            cta: "VIEW POST",
            href: "https://www.instagram.com",
            imageSrc: "/connect/img/instagram.jpg",
            imageAlt: "Grace Peace Confidence scripture graphic",
          },
          {
            platform: "FACEBOOK",
            time: "2 hours ago",
            title: "Tribe Mentorship Enrolment Open",
            description:
              "Our seasonal cohort launches next month. Secure your mentorship spot now...",
            cta: "VIEW POST",
            href: "https://www.facebook.com",
            imageSrc: "/connect/img/facebook.jpg",
            imageAlt: "Small group in conversation",
          },
        ],

        links: [
          {
            label: "FACEBOOK FEED",
            platform: "facebook",
            href: "https://www.facebook.com",
          },
          {
            label: "INSTAGRAM",
            platform: "instagram",
            href: "https://www.instagram.com",
          },
          {
            label: "YOUTUBE CHANNEL",
            platform: "youtube",
            href: "https://www.youtube.com",
          },
        ],
      },
  
      mobile: {
        eyebrow: "STAY ENGAGED ONLINE",
        title: "Follow Our Community",
  
        latestLabel: "LATEST FROM INSTAGRAM",
  
        platforms: [
          "facebook",
          "youtube",
          "instagram",
          "twitter",
        ],
      },
    },
  
    newsletter: {
      eyebrow: "WEEKLY MINISTRY UPDATES",
  
      title: "Receive Spiritual Grace Directly to Your Inbox",
  
      description:
        "Subscribe to our weekly newsletter for uplifting devotional content, scriptural insights from our Pastors, and early announcements about upcoming dynamic events.",
  
      form: {
        placeholder: "Enter your email address",
        submitLabel: "SUBSCRIBE",
      },
  
      privacy:
        "Your privacy is sacred. We never share your data. Unsubscribe at any time.",
    },
  } as const;