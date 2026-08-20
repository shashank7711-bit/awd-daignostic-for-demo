import {
  Activity,
  HeartPulse,
  Microscope,
  MonitorPlay,
  ShieldCheck,
  Stethoscope,
  Target,
  Clock,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { Service, Benefit, JourneyStep, FAQ, ImageItem } from './types';

export const servicesData: Service[] = [
  {
    id: 'srv-1',
    title: 'Digital X-Ray',
    description: 'High-resolution digital imaging for accurate and fast bone and tissue analysis.',
    icon: Activity,
  },
  {
    id: 'srv-2',
    title: 'Advanced Ultrasound',
    description: 'Non-invasive diagnostic sonography for internal organ mapping and fetal care.',
    icon: MonitorPlay,
  },
  {
    id: 'srv-3',
    title: 'Pathology & Blood Tests',
    description: 'Comprehensive blood profiles and cellular testing with precise, rapid reporting.',
    icon: Microscope,
  },
  {
    id: 'srv-4',
    title: 'Preventive Health Packages',
    description: 'Tailored whole-body checkups designed for proactive health management.',
    icon: HeartPulse,
  },
  {
    id: 'srv-5',
    title: 'Cardiology Diagnostics',
    description: 'ECG, TMT, and echocardiography for complete cardiovascular health assessment.',
    icon: Stethoscope,
  },
  {
    id: 'srv-6',
    title: 'Digital Diagnostics',
    description: 'AI-assisted interpretations and seamless digital delivery of medical reports.',
    icon: ShieldCheck,
  },
];

export const benefitsData: Benefit[] = [
  {
    id: 'ben-1',
    title: 'Accuracy-Focused Workflow',
    description: 'Multi-tiered quality checks ensure reliable diagnostic outcomes every time.',
    icon: Target,
  },
  {
    id: 'ben-2',
    title: 'Convenient Scheduling',
    description: 'Book your slot digitally and avoid long waiting times at the centre.',
    icon: Clock,
  },
  {
    id: 'ben-3',
    title: 'Modern Environment',
    description: 'A clean, calming space designed to reduce patient anxiety during testing.',
    icon: MapPin,
  },
  {
    id: 'ben-4',
    title: 'Clear Communication',
    description: 'Receive your reports directly via WhatsApp with simple explanations.',
    icon: MessageSquare,
  },
];

export const journeyData: JourneyStep[] = [
  {
    id: 'step-1',
    step: '01',
    title: 'Choose Your Test',
    description: 'Browse our comprehensive list of diagnostic services and preventive packages.',
  },
  {
    id: 'step-2',
    step: '02',
    title: 'Request an Appointment',
    description: 'Use our digital platform to select a date and time that fits your schedule.',
  },
  {
    id: 'step-3',
    step: '03',
    title: 'Visit the Centre',
    description: 'Arrive at our modern facility where our trained staff will guide you through the process.',
  },
  {
    id: 'step-4',
    step: '04',
    title: 'Complete Your Diagnostic Process',
    description: 'Experience a smooth, comfortable testing procedure using modern equipment.',
  },
  {
    id: 'step-5',
    step: '05',
    title: 'Receive Results',
    description: 'Get your verified diagnostic reports delivered securely via email or WhatsApp.',
  },
];

export const faqData: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What diagnostic services are available? (Demo)',
    answer: 'This is a demo website. In a live environment, this would list the specific diagnostic services provided, such as 3T MRI, 128-Slice CT, Digital X-Ray, advanced sonography, and comprehensive pathology.',
  },
  {
    id: 'faq-2',
    question: 'How can I request an appointment?',
    answer: 'You can request an appointment using the form on this website, or by clicking the WhatsApp button to chat directly with our front desk.',
  },
  {
    id: 'faq-3',
    question: 'What information should I provide when making an enquiry?',
    answer: 'Please provide your full name, contact number, the specific test prescribed by your doctor, and your preferred visit date. Uploading your prescription via WhatsApp can also expedite the process.',
  },
  {
    id: 'faq-4',
    question: 'Can I contact the centre through WhatsApp?',
    answer: 'Yes, our floating WhatsApp button connects you directly to our support team for quick queries, appointment booking, and report delivery.',
  },
  {
    id: 'faq-5',
    question: 'How do I find the centre?',
    answer: 'Our demo location is mapped in the Contact section below. We are centrally located with dedicated patient parking facilities.',
  },
];

export const galleryData: ImageItem[] = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    alt: 'Modern Reception Area',
    category: 'Reception',
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
    alt: 'Advanced Diagnostic Room',
    category: 'Diagnostic Room',
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Imaging Equipment',
    category: 'Imaging Area',
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop',
    alt: 'Comfortable Waiting Area',
    category: 'Waiting Area',
  },
];
