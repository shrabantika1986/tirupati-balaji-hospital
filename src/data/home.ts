import type { BannerSlide, StatItem, Facility, DiagnosticService, FAQItem, Testimonial } from '@/types'

// ─── Hero Banner Slides ───────────────────────────────────────────────────────

export const bannerSlides: BannerSlide[] = [
  {
    id: 'slide-1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=85&fit=crop',
    title: 'Advanced Healthcare for Every Family',
    subtitle: 'World-class multi-specialty care with cutting-edge diagnostics and compassionate doctors — your health is our highest priority.',
    ctaPrimary: { label: 'Book Appointment', href: '/contact' },
    ctaSecondary: { label: 'Find A Doctor', href: '/find-a-doctor' },
  },
  {
    id: 'slide-2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=85&fit=crop',
    title: 'Expert Surgeons, Modern Operation Theatres',
    subtitle: 'State-of-the-art modular OTs equipped with the latest surgical technology for precision and safety in every procedure.',
    ctaPrimary: { label: 'Our Departments', href: '/departments' },
    ctaSecondary: { label: 'Know More', href: '/about' },
  },
  {
    id: 'slide-3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85&fit=crop',
    title: '24 × 7 Emergency & Critical Care',
    subtitle: 'Round-the-clock ICU, emergency response, and advanced diagnostic services so you are never left without timely care.',
    ctaPrimary: { label: 'Emergency Helpline', href: 'tel:08662500108' },
    ctaSecondary: { label: 'Health Packages', href: '/services/health-packages' },
  },
  {
    id: 'slide-4',
    type: 'video',
    src: '/videos/hospital-tour.mp4',
    poster: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=85&fit=crop',
    title: 'Healing with Innovation & Dedication',
    subtitle: 'Take a virtual tour of our world-class facilities and experience the Tirupoti Balaji Hospital difference.',
    ctaPrimary: { label: 'Virtual Tour', href: '/gallery' },
    ctaSecondary: { label: 'Contact Us', href: '/contact' },
  },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUsPoints = [
  'Team of 150+ renowned specialist doctors',
  'Advanced robotic and laparoscopic surgery',
  'ISO-certified laboratory with NABL accreditation',
  'Cashless treatment via 300+ insurance partners',
  'Patient-first approach with 24/7 support',
  'Affordable pricing without compromise on care',
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const statsData: StatItem[] = [
  {
    id: 'stat-1',
    value: 28,
    suffix: '+',
    label: 'Years of Excellence',
    icon: 'award',
  },
  {
    id: 'stat-2',
    value: 150,
    suffix: '+',
    label: 'Expert Doctors',
    icon: 'stethoscope',
  },
  {
    id: 'stat-3',
    value: 85000,
    suffix: '+',
    label: 'Successful Surgeries',
    icon: 'activity',
  },
  {
    id: 'stat-4',
    value: 4200000,
    suffix: '+',
    label: 'Happy Patients',
    icon: 'heart',
  },
]

// ─── Facilities ───────────────────────────────────────────────────────────────

export const facilitiesData: Facility[] = [
  {
    id: 'fac-1',
    title: '24 × 7 Diagnostics',
    description: 'Accurate, round-the-clock diagnostic services including pathology, microbiology, and biochemistry for timely patient care.',
    icon: 'microscope',
  },
  {
    id: 'fac-2',
    title: '3T MRI & 128-Slice CT Scan',
    description: 'Cutting-edge 3 Tesla MRI and 128-slice CT imaging for ultra-precise diagnosis of neurological, musculoskeletal, and vascular conditions.',
    icon: 'scan',
  },
  {
    id: 'fac-3',
    title: 'ICCU / HDU / NICU',
    description: 'Dedicated Intensive Cardiac Care, High Dependency, and Neonatal Intensive Care units with expert monitoring 24 hours a day.',
    icon: 'heart-pulse',
  },
  {
    id: 'fac-4',
    title: 'Robotic Surgery Suite',
    description: 'Minimally invasive robotic-assisted surgeries for faster recovery, reduced pain, and superior surgical precision.',
    icon: 'cpu',
  },
  {
    id: 'fac-5',
    title: 'Chemotherapy Day Care',
    description: 'Comfortable, patient-friendly chemotherapy infusion centre staffed by dedicated oncology nurses and specialists.',
    icon: 'droplets',
  },
  {
    id: 'fac-6',
    title: 'Advanced Endoscopy',
    description: 'Full-spectrum endoscopy services including upper GI, colonoscopy, ERCP, and EUS for accurate GI diagnosis and treatment.',
    icon: 'search',
  },
  {
    id: 'fac-7',
    title: '24 hrs Pathology',
    description: 'ISO-certified lab with NABL accreditation providing reliable test results any time of day or night.',
    icon: 'flask-conical',
  },
  {
    id: 'fac-8',
    title: 'Modular Operation Theatres',
    description: 'Eight air-conditioned modular OTs with positive-pressure laminar flow ensuring sterile, infection-free surgical environments.',
    icon: 'building-2',
  },
  {
    id: 'fac-9',
    title: 'Cashless Insurance & TPA',
    description: 'Tie-ups with 300+ insurance companies and Third Party Administrators for seamless cashless treatment approval.',
    icon: 'shield-check',
  },
  {
    id: 'fac-10',
    title: 'Blood Bank',
    description: 'Fully functional 24-hour blood bank with component separation facility and adequate storage capacity.',
    icon: 'droplet',
  },
  {
    id: 'fac-11',
    title: 'Ambulance Service',
    description: 'Fleet of advanced life-support ambulances equipped with paramedics and emergency equipment for rapid patient transport.',
    icon: 'truck',
  },
  {
    id: 'fac-12',
    title: 'Telemedicine',
    description: 'Remote consultation services connecting patients across Andhra Pradesh and Telangana with our specialist doctors online.',
    icon: 'video',
  },
]

// ─── Diagnostic Services ──────────────────────────────────────────────────────

export const diagnosticServicesHome: DiagnosticService[] = [
  {
    id: 'diag-1',
    title: '3T MRI (3 Tesla)',
    description: 'Our 3 Tesla MRI scanner delivers exceptional image clarity, enabling precise detection of brain tumours, spinal injuries, joint pathologies, and abdominal abnormalities. The scan is fast, non-invasive, and radiation-free, making it suitable for patients of all ages.',
    image: 'https://images.unsplash.com/photo-1584036561584-b03c19da874c?w=800&q=80&fit=crop',
    bullets: [
      'Brain & spine imaging',
      'Cardiac MRI',
      'Musculoskeletal studies',
      'MR Angiography',
    ],
  },
  {
    id: 'diag-2',
    title: '128-Slice CT Scanner',
    description: 'The 128-slice multi-detector CT provides rapid, high-resolution cross-sectional images of the entire body. Ideal for trauma assessment, pulmonary embolism, cancer staging, and vascular imaging, it dramatically reduces scan time while maximizing diagnostic accuracy.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80&fit=crop',
    bullets: [
      'CT Angiography with auto-injector',
      'Virtual colonoscopy',
      'Lung cancer screening',
      'Trauma whole-body scan',
    ],
  },
  {
    id: 'diag-3',
    title: '4D USG & Colour Doppler',
    description: 'Advanced 4-dimensional ultrasound and colour Doppler studies offer real-time visualization of fetal growth, blood flow dynamics, and soft tissue abnormalities. Our sonographers are trained in obstetric, cardiac, and vascular Doppler examinations.',
    image: 'https://images.unsplash.com/photo-1516069677018-378515003435?w=800&q=80&fit=crop',
    bullets: [
      'Fetal anomaly screening',
      'Carotid Doppler',
      'Renal & portal Doppler',
      'Musculoskeletal USG',
    ],
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What specialties are available at Tirupoti Balaji Hospital?',
    answer: 'We offer over 22 specialties including Cardiology, Neurology, Oncology, Orthopaedics, Gastroenterology, Gynecology, Paediatrics, Urology, Nephrology, Ophthalmology, ENT, and many more — all under one roof.',
  },
  {
    id: 'faq-2',
    question: 'Does the hospital provide cashless insurance treatment?',
    answer: 'Yes. Tirupoti Balaji Hospital has tie-ups with 300+ insurance companies and TPA organisations. Our dedicated insurance desk will guide you through the pre-authorisation process to ensure a smooth cashless experience.',
  },
  {
    id: 'faq-3',
    question: 'Is the hospital open 24 hours a day, 7 days a week?',
    answer: 'Our Emergency department, ICU, NICU, blood bank, pharmacy, and diagnostic centre are all operational 24 × 7, 365 days a year. OPD timings may vary by speciality — please call our helpline for the current schedule.',
  },
  {
    id: 'faq-4',
    question: 'How can I book an appointment with a specialist?',
    answer: 'You can book an appointment by calling our helpline numbers, visiting the hospital reception, using our online appointment form on the Contact page, or through our mobile app. Walk-in consultations are also welcomed.',
  },
  {
    id: 'faq-5',
    question: 'Are diagnostic reports available online?',
    answer: 'Yes. Lab and radiology reports are available through our secure patient portal within the stipulated turnaround time. You will receive an SMS notification when your report is ready for download.',
  },
  {
    id: 'faq-6',
    question: 'Do you have facilities for international patients?',
    answer: 'Tirupoti Balaji Hospital has a dedicated International Patient Services desk that assists with visa letters, accommodation, airport transfers, interpreter services, and medical tourism packages tailored to individual requirements.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ravi Kumar Reddy',
    text: 'I underwent a total knee replacement at Tirupoti Balaji Hospital and the experience was exceptional. The orthopaedic team, nursing staff, and physiotherapists together ensured I was back on my feet ahead of schedule. The clean facilities and attentive care made all the difference.',
    rating: 5,
    date: 'February 2025',
    avatar: 'https://ui-avatars.com/api/?name=Ravi+Kumar&background=0057A8&color=fff&size=80',
  },
  {
    id: 'test-2',
    name: 'Lakshmi Devi Naidu',
    text: 'My husband was admitted for a cardiac emergency at midnight. The emergency team responded immediately, performed an angioplasty, and he was stable within hours. I cannot thank the cardiology department enough for saving his life with such professionalism.',
    rating: 5,
    date: 'January 2025',
    avatar: 'https://ui-avatars.com/api/?name=Lakshmi+Devi&background=009B8A&color=fff&size=80',
  },
  {
    id: 'test-3',
    name: 'Suresh Chandra Mohan',
    text: 'The gastroenterology team diagnosed and treated my pancreatic issue through a minimally invasive ERCP procedure. The detailed pre-operative counselling and post-operative follow-up were truly remarkable. The hospital truly prioritises patient wellbeing.',
    rating: 5,
    date: 'March 2025',
    avatar: 'https://ui-avatars.com/api/?name=Suresh+Mohan&background=E8832A&color=fff&size=80',
  },
  {
    id: 'test-4',
    name: 'Priya Venkataraman',
    text: 'I delivered my baby at Tirupoti Balaji\'s birthing suite and the entire maternity team was incredibly supportive throughout. From pre-natal scans to post-partum care, every step was handled with warmth and expertise. Highly recommended for expecting mothers.',
    rating: 5,
    date: 'December 2024',
    avatar: 'https://ui-avatars.com/api/?name=Priya+V&background=0057A8&color=fff&size=80',
  },
  {
    id: 'test-5',
    name: 'Dr. Anil Kumar Sharma',
    text: 'As a referring physician from Nellore, I consistently send my complex cases to Tirupoti Balaji Hospital for tertiary care. The specialist teams communicate proactively, share detailed reports, and my patients always return with excellent outcomes. A truly professional institution.',
    rating: 5,
    date: 'April 2025',
    avatar: 'https://ui-avatars.com/api/?name=Anil+Sharma&background=009B8A&color=fff&size=80',
  },
]
