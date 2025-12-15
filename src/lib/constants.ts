import {
  BookOpen,
  Users,
  Clock,
  Award,
  Video,
  MessageCircle,
  Star,
  GraduationCap,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/quran.academy1111/",
  tiktok: "https://www.tiktok.com/@quranacademyofficiall",
  youtube: "https://www.youtube.com/@QuranAcademy-Q.A",
  facebook: "#",
  twitter: "#",
};

export const COURSES = [
  {
    id: "online-hadith-course",
    title: "Online Hadith Course",
    description:
      "Study the sayings and actions of Prophet Muhammad (PBUH) with authentic chains of narration. Learn the science of Hadith terminology and classification.",
    image: "/images/headith-c1.png", // Placeholder
    duration: "40 Hours",
    level: "Beginner to Advanced",
    students: 1250,
    rating: 4.9,
    reviews: 320,
    price: "$50/mo",
    features: [
      "Authentic Resources",
      "Ijazah Certification",
      "Live Sessions",
      "Sanad Acquisition",
    ],
    slug: "online-hadith-course",
  },
  {
    id: "seerah-course-online",
    title: "Online Seerah Course",
    description:
      "Explore the life of the Prophet Muhammad (PBUH) and derive practical lessons for modern life. Understand the historical context of revelation.",
    image: "/images/seerah-c2.png",
    duration: "30 Hours",
    level: "All Levels",
    students: 980,
    rating: 4.8,
    reviews: 215,
    price: "$45/mo",
    features: [
      "Historical Context",
      "Character Building",
      "Interactive Maps",
      "Battle Analysis",
    ],
    slug: "seerah-course-online",
  },
  {
    id: "quranic-arabic-course",
    title: "Quranic Arabic Course",
    description:
      "Master the language of the Quran to understand its miraculous meanings directly. Focus on grammar (Nahw) and morphology (Sarf).",
    image: "/images/quran-c3.png",
    duration: "60 Hours",
    level: "Structured Levels 1-5",
    students: 2100,
    rating: 5.0,
    reviews: 540,
    price: "$60/mo",
    features: [
      "Grammar Focus",
      "Vocabulary Building",
      "Quran Analysis",
      "Conversation Practice",
    ],
    slug: "quranic-arabic-course",
  },
  {
    id: "tawheed-course-online",
    title: "Online Tawheed Course",
    description:
      "Strengthen your faith by understanding the Oneness of Allah and Islamic creed. Study the three categories of Tawheed in depth.",
    image: "/images/headith-c1.png",
    duration: "25 Hours",
    level: "Beginner",
    students: 850,
    rating: 4.9,
    reviews: 180,
    price: "$40/mo",
    features: [
      "Core Beliefs",
      "Aqidah Tahawiyyah",
      "Doubt Clarification",
      "Names & Attributes",
    ],
    slug: "tawheed-course-online",
  },
  {
    id: "fiqh-online-course",
    title: "Online Fiqh Course",
    description:
      "Learn the practical rules of worship and daily life dealings in Islam. Covers purity, prayer, fasting, zakat, and hajj.",
    image: "/images/fiqh.png",
    duration: "45 Hours",
    level: "Intermediate",
    students: 1100,
    rating: 4.8,
    reviews: 290,
    price: "$55/mo",
    features: ["Ibadah Rules", "Modern Issues", "Four Madhahib", "Family Law"],
    slug: "fiqh-online-course",
  },
  {
    id: "aqidah-course",
    title: "Aqidah Course",
    description:
      "Deep dive into Islamic Theology and Belief systems. Understand the pillars of faith and navigate contemporary theological challenges.",
    image: "/images/aqidah.png",
    duration: "35 Hours",
    level: "Advanced",
    students: 600,
    rating: 4.9,
    reviews: 150,
    price: "$50/mo",
    features: [
      "Theological Debates",
      "Names of Allah",
      "Destiny (Qadr)",
      "Sects Analysis",
    ],
    slug: "aqidah-course",
  },
];

export const TEACHERS = [
  {
    id: 1,
    name: "Sheikh Abdullah",
    role: "Senior Quran Tutor",
    bio: "Hafiz with Ijazah in 10 Qira'at from Al-Azhar University. 15 years of teaching experience. Expert in Tajweed rules and Maqamat.",
    image: "/images/teacher-3.png",
    experience: "15 Years",
    students: 5000,
    rating: 5.0,
    certificates: [
      "Ijazah in 10 Qira'at",
      "Al-Azhar Graduate",
      "PhD in Islamic Studies",
    ],
  },
  {
    id: 2,
    name: "Ustadha Fatima",
    role: "Tajweed Specialist",
    bio: "Expert in teaching children and non-native speakers. Certified in Noorani Qaida. Patient and encouraging teaching style.",
    image: "/images/teacher-2.png",
    experience: "8 Years",
    students: 3200,
    rating: 4.9,
    certificates: [
      "Noorani Qaida Certified",
      "Ijazah in Hafs",
      "Child Psychology Diploma",
    ],
  },
  {
    id: 3,
    name: "Ustadha Toka",
    role: "Arabic Language Instructor",
    bio: "PhD in Arabic Literature. Specializes in Quranic Grammar and Rhetoric. Author of 'Arabic for Non-Arabs'.",
    image: "/images/teacher-1.png",
    experience: "12 Years",
    students: 4100,
    rating: 4.9,
    certificates: ["PhD Arabic Literature", "Celta Certified", "Author"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "UK",
    text: "The best Quran academy I have ever joined. My Tajweed improved significantly in just 3 months! The AI analysis tool is a game changer for practicing alone.",
    course: "Tajweed Course",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 2,
    name: "Mohammed Ali",
    location: "USA",
    text: "My children love their teacher. He is so patient and makes learning fun for them. The progress tracking helps me see exactly how they are doing.",
    course: "Kids Quran Course",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 3,
    name: "Aisha Khan",
    location: "Canada",
    text: "Flexible timings and professional support. Highly recommended for working professionals. The recorded sessions are great for revision.",
    course: "Arabic Course",
    rating: 4.5,
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
];

export const FAQS = [
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a free trial session for all new students to evaluate our teaching quality. It's completely free with no commitment required.",
  },
  {
    question: "Are the classes one-on-one?",
    answer:
      "Yes, mostly we provide one-on-one sessions for personalized attention, but we also have group classes if you prefer learning with peers.",
  },
  {
    question: "Can I choose my own schedule?",
    answer:
      "Absolutely! We offer flexible scheduling 24/7 to suit your time zone and availability. You can reschedule classes with 24-hour notice.",
  },
  {
    question: "What languages do the teachers speak?",
    answer:
      "Our teachers are fluent in English and Arabic, and some speak Urdu, French, and other languages. We match you with a teacher who speaks your language.",
  },
  {
    question: "How does the Money Back Guarantee work?",
    answer:
      "If you are not satisfied with your classes within the first month, we will refund your full payment. We are confident in our quality.",
  },
  {
    question: "Do I get a certificate upon completion?",
    answer:
      "Yes, upon successfully completing a course level, you will receive a digital certificate signed by the academy. For advanced courses, Ijazah is available.",
  },
];
