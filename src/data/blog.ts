import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'understanding-coronary-artery-disease',
    title: 'Understanding Coronary Artery Disease: Prevention and Modern Treatment Options',
    excerpt: 'Coronary artery disease remains the leading cause of death in India. Learn how lifestyle changes combined with modern interventional cardiology can dramatically reduce your risk and improve outcomes.',
    coverImage: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80&fit=crop',
    author: 'Dr. Venkata Ramana Rao',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80&fit=crop',
    publishedAt: '2025-04-10',
    readTime: 6,
    tags: ['Cardiology', 'Heart Disease', 'Prevention', 'Angioplasty'],
    category: 'Cardiology',
  },
  {
    id: 'blog-2',
    slug: 'knee-replacement-recovery-guide',
    title: 'A Complete Guide to Total Knee Replacement Recovery: Week by Week',
    excerpt: 'Thinking about knee replacement surgery? This detailed week-by-week recovery guide from our orthopaedic team helps you set realistic expectations and achieve the best possible outcome.',
    coverImage: 'https://images.unsplash.com/photo-1582560475093-ba66accbc095?w=800&q=80&fit=crop',
    author: 'Dr. Suryanarayana Prasad',
    authorImage: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=100&q=80&fit=crop',
    publishedAt: '2025-03-22',
    readTime: 8,
    tags: ['Orthopaedics', 'Knee Replacement', 'Recovery', 'Physiotherapy'],
    category: 'Orthopaedics',
  },
  {
    id: 'blog-3',
    slug: 'cervical-cancer-awareness-vaccination',
    title: "Cervical Cancer in India: Why HPV Vaccination is Your Daughter's Best Protection",
    excerpt: "India accounts for nearly 25% of the world's cervical cancer cases. Discover why the HPV vaccine, combined with regular Pap smears, can virtually eliminate this preventable disease.",
    coverImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80&fit=crop',
    author: 'Dr. Anjana Krishnamurthy',
    authorImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&q=80&fit=crop',
    publishedAt: '2025-03-08',
    readTime: 5,
    tags: ['Oncology', "Women's Health", 'HPV Vaccine', 'Cancer Prevention'],
    category: 'Oncology',
  },
  {
    id: 'blog-4',
    slug: 'managing-type-2-diabetes',
    title: 'Managing Type 2 Diabetes: Beyond Blood Sugar — A Holistic Approach',
    excerpt: 'Effective diabetes management goes far beyond monitoring glucose levels. Our endocrinology team explains the role of diet, exercise, medication adherence, and mental health in achieving long-term diabetic control.',
    coverImage: 'https://images.unsplash.com/photo-1576671414047-1f9a4ee3d17c?w=800&q=80&fit=crop',
    author: 'Dr. Venkata Ramana Rao',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80&fit=crop',
    publishedAt: '2025-02-28',
    readTime: 7,
    tags: ['Endocrinology', 'Diabetes', 'Lifestyle', 'Nutrition'],
    category: 'Endocrinology',
  },
  {
    id: 'blog-5',
    slug: 'stroke-recognition-fast-protocol',
    title: 'FAST: How to Recognise a Stroke and Why Every Minute Counts',
    excerpt: "Stroke is a medical emergency where every second of delay means neurons lost. Learn to use the FAST protocol — Face, Arms, Speech, Time — and understand the critical role of the 'Golden Hour' in stroke outcomes.",
    coverImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&fit=crop',
    author: 'Dr. Bhaskar Rao Murthy',
    authorImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&q=80&fit=crop',
    publishedAt: '2025-02-14',
    readTime: 4,
    tags: ['Neurology', 'Stroke', 'Emergency', 'Awareness'],
    category: 'Neurology',
  },
  {
    id: 'blog-6',
    slug: 'kidney-stones-diet-prevention',
    title: 'Kidney Stones: What You Eat Today Determines Your Risk Tomorrow',
    excerpt: 'Kidney stone incidence is rising rapidly in South India due to dietary habits and dehydration. Our urology team reveals the dietary modifications that can dramatically reduce your risk of forming stones.',
    coverImage: 'https://images.unsplash.com/photo-1638202993928-7d113b8e4519?w=800&q=80&fit=crop',
    author: 'Dr. Subhalaxmi Pattnaik',
    authorImage: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=100&q=80&fit=crop',
    publishedAt: '2025-01-30',
    readTime: 5,
    tags: ['Urology', 'Kidney Stones', 'Diet', 'Prevention'],
    category: 'Urology',
  },
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((b) => b.slug === slug)

export const getBlogPostsByCategory = (category: string): BlogPost[] =>
  blogPosts.filter((b) => b.category === category)

export const blogCategories = [...new Set(blogPosts.map((b) => b.category))]
