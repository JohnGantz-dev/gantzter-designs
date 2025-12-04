import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Code2, 
  Share2, 
  Dna, 
  Brain, 
  Box, 
  Printer, 
  Users, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Zap,
  Cpu,
  Network
} from 'lucide-react'
import './App.css'

function App() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development & Management",
      description: "Custom websites and web applications built with modern frameworks, optimized for performance, and designed for the future. From concept to deployment, we handle every aspect of your digital presence.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PWA"],
      features: ["Responsive design", "SEO optimization", "Performance monitoring", "Content management"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Digital Marketing & Social Strategy",
      description: "Strategic social media management that amplifies your brand's digital footprint. We create engaging content, manage communities, and drive meaningful engagement across all platforms.",
      technologies: ["LinkedIn", "Twitter", "Instagram", "Facebook", "YouTube"],
      features: ["Content creation", "Analytics tracking", "Community management", "Brand strategy"]
    },
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Genetic Workflow Automation",
      description: "Revolutionary workflow solutions that adapt and evolve like genetic algorithms. We optimize business processes through intelligent automation and machine learning integration.",
      technologies: ["Python", "Machine Learning", "Process Automation", "Data Analytics"],