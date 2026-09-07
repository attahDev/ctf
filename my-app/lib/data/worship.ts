export const worshipContent = {
  hero: {
    eyebrow: "Glory Time Global Ministries",
    title: "Worship Without Walls",
    description:
      "Experiencing the presence of God beyond geographical borders. One Faith. One Voice. Connected in global adoration.",
    primaryCta: { label: "Watch Live Stream", href: "/sermons" },
    secondaryCta: { label: "Listen to Worship", href: "#albums" },
    countdownLabel: "Next Worship Stream — Sunday 6:00 PM GMT",
    imageSrc:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=1080&fit=crop",
    imageAlt: "Congregation worshipping with hands raised under stage lights",
  },

  vision: {
    eyebrow: "Breaking Boundaries",
    title: "The WOW Vision",
    highlight: "Worship is not confined to bricks and mortar.",
    paragraphs: [
      "Worship Without Walls (WOW) is the apostolic movement of Glory Time Christian Center dedicated to bringing passionate, spirit-filled worship into every home, community, and city globally. We believe true praise breaks chains, dissolves distance, and unites believers in a glorious manifestation of God's presence.",
      "Through digital broadcasts, outdoor assemblies, and intimate home worship hubs, we create sacred altars of praise where everyone can walk in absolute grace, joy, and spiritual peace.",
    ],
    scripture:
      "But the hour is coming, and now is, when the true worshipers will worship the Father in spirit and in truth.",
    scriptureRef: "John 4:23",
    imageSrc:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&h=800&fit=crop",
    imageAlt: "Woman worshipping with eyes closed and hand raised",
  },

  gatherings: {
    eyebrow: "Mark Your Calendar",
    title: "Upcoming Gatherings",
    description:
      "Plan ahead for live nights, outdoor praise, and intimate home hub moments across our worldwide family.",
    items: [
      {
        badge: "Live",
        badgeTone: "live" as const,
        title: "WOW Global Praise Concert",
        description:
          "A night of corporate worship uniting hubs worldwide in one voice of praise and prophetic encounter.",
        meta: "Sunday · 7:00 PM GMT",
        href: "/events",
      },
      {
        badge: "Upcoming",
        badgeTone: "upcoming" as const,
        title: "Worship in the Park",
        description:
          "Open-air praise under the sky — bring your family, friends, and a heart ready to worship freely.",
        meta: "Saturday · 5:00 PM Local",
        href: "/events",
      },
      {
        badge: "Upcoming",
        badgeTone: "upcoming" as const,
        title: "Intimate Affair — Home Hub Night",
        description:
          "Small-group worship in homes across cities, creating warm spaces for prayer, song, and fellowship.",
        meta: "Friday · 7:30 PM",
        href: "/events",
      },
    ],
  },

  stream: {
    eyebrow: "Worship From Anywhere",
    title: "Experience WOW Online",
    description:
      "Stream our services live or browse past messages of grace and confidence.",
    videoImage:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&h=800&fit=crop",
    videoTitle: "Prophetic Night of Adorations",
    streamMeta: "Live from London Hub · 12.4K Watching Now",
    primaryCta: { label: "Launch Live Stream", href: "/sermons" },
    secondaryCta: { label: "Explore Sermon Archive", href: "/sermons" },
  },

  albums: {
    eyebrow: "The Sound of Glory Time",
    title: "Worship Albums & Playlists",
    description:
      "Carry the atmosphere of praise into your daily commute, workplace, and home.",
    items: [
      {
        title: "Atmosphere of Peace",
        meta: "12 Tracks · 2024 Release",
        image:
          "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=600&fit=crop",
        spotify: "#",
        apple: "#",
      },
      {
        title: "Worship Without Walls, Vol. 2",
        meta: "10 Tracks · Live Album",
        image:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=600&fit=crop",
        spotify: "#",
        apple: "#",
      },
      {
        title: "Absolute Confidence",
        meta: "8 Tracks · EP Release",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=600&fit=crop",
        spotify: "#",
        apple: "#",
      },
    ],
  },

  prayerWall: {
    eyebrow: "Power in United Prayer",
    title: "The Global Prayer Wall",
    description:
      "Share your request and stand with believers around the world as we pray together in faith.",
    requests: [
      {
        name: "Sarah D.",
        location: "London",
        time: "2 hours ago",
        text: "Please pray for healing and strength as I walk through a new season of recovery.",
        praying: 24,
      },
      {
        name: "Michael O.",
        location: "Lagos",
        time: "5 hours ago",
        text: "Asking for wisdom and open doors as our family steps into a new ministry assignment.",
        praying: 41,
      },
      {
        name: "Grace K.",
        location: "Toronto",
        time: "Yesterday",
        text: "Cover our home hub in peace and unity as we host worship this weekend.",
        praying: 18,
      },
    ],
  },

  family: {
    eyebrow: "We Are One Body",
    title: "Our Worldwide Family",
    description:
      "From every nation and language, one altar of worship rises — and you are part of it.",
    stats: [
      { value: "45+", label: "Nations Represented" },
      { value: "120k+", label: "Monthly Worshipers" },
      { value: "15+", label: "Years of Digital Ministry" },
    ],
  },

  movement: {
    eyebrow: "Light Up the World",
    title: "Join the WOW Movement",
    description:
      "Whether you serve on stage or host from home, there is a place for your gift in this global altar.",
    cards: [
      {
        title: "Join the Worship Team",
        description:
          "Serve as a vocalist, musician, or production partner helping carry the sound of worship live and online.",
        cta: "Join Our Team",
        href: "/contact",
        tone: "blue" as const,
      },
      {
        title: "Host a Worship Home Hub",
        description:
          "Open your living room as a hub for praise, prayer, and community — and help light up your city.",
        cta: "Become a Host",
        href: "/contact",
        tone: "gold" as const,
      },
    ],
  },

  newsletter: {
    title: "Stay Refreshed in Worship Updates",
    description:
      "Get livestream reminders, album drops, and gathering announcements delivered to your inbox.",
  },
};
