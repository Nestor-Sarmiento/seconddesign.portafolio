import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUp,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Command,
  Copy,
  Database,
  Download,
  Eye,
  ExternalLink,
  GitFork,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Moon,
  Send,
  ServerCog,
  Sparkles,
  Sun,
  Terminal,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import './App.css'

const BASE_URL = import.meta.env.BASE_URL

const navigation = [
  { id: 'inicio' },
  { id: 'perfil' },
  { id: 'experiencia' },
  { id: 'formacion' },
  { id: 'contacto' },
]

const skillGroups = [
  {
    icon: Code2,
    key: 'languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
  },
  {
    icon: ServerCog,
    key: 'backend',
    skills: ['FastAPI', 'Spring Boot', 'NestJS', 'APIs REST', 'ERP endpoints'],
  },
  {
    icon: Terminal,
    key: 'frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'WordPress'],
  },
  {
    icon: Workflow,
    key: 'automation',
    skills: ['n8n', 'Chatwoot', 'Evolution API', 'Meta', 'TikTok', 'Webhooks'],
  },
  {
    icon: Database,
    key: 'infrastructure',
    skills: ['PostgreSQL', 'Redis', 'MySQL', 'MongoDB', 'Docker', 'Linux VPS', 'Traefik'],
  },
  {
    icon: Sparkles,
    key: 'ai',
    skills: ['Google AI Studio', 'Gemini API', 'RAG', 'Prompt injection', 'Git', 'Postman', 'Azure DevOps'],
  },
]

const arellanoHighlights = [
  'Automatización de atención al cliente y procesos internos con n8n, Chatwoot y Evolution API.',
  'Flujos para responder mensajes y comentarios de redes sociales mediante Meta y TikTok.',
  'Soluciones para consulta de inventario y generación automatizada de proformas consumiendo endpoints del ERP.',
  'Prevención de prompt injection, gestión segura de credenciales y optimización del consumo en Google AI Studio.',
  'Administración de un VPS Linux con Docker, Traefik y múltiples contenedores.',
  'Integración de PostgreSQL, Redis y WordPress para servicios y canales digitales.',
]

const vibratioHighlights = [
  'Desarrollo de funcionalidades backend con Python y FastAPI.',
  'Implementación e integración de APIs REST entre servicios.',
  'Automatización de procesos con n8n, webhooks y consumo de APIs.',
  'Solución RAG con Gemini para un asistente jurídico con IA.',
  'Despliegue de aplicaciones en servidores Linux.',
  'Seguridad de APIs, Git y trabajo con metodologías ágiles.',
]

const experienceHighlightsEn = {
  arellano: [
    'Automated customer support and internal processes with n8n, Chatwoot, and Evolution API.',
    'Built flows to respond to social media messages and comments through Meta and TikTok.',
    'Created inventory lookup and automated quotation solutions consuming ERP endpoints.',
    'Prevented prompt injection, managed credentials securely, and optimized Google AI Studio usage.',
    'Administered a Linux VPS with Docker, Traefik, and multiple containers.',
    'Integrated PostgreSQL, Redis, and WordPress across digital services and channels.',
  ],
  vibratio: [
    'Developed backend features with Python and FastAPI.',
    'Implemented and integrated REST APIs between services.',
    'Automated processes with n8n, webhooks, and API consumption.',
    'Built a Gemini-based RAG solution for an AI legal assistant.',
    'Configured and deployed applications on Linux servers.',
    'Worked on API security, Git collaboration, and agile methodologies.',
  ],
}

const translations = {
  es: {
    nav: { inicio: 'Inicio', perfil: 'Perfil', experiencia: 'Experiencia', formacion: 'Formación', contacto: 'Contacto' },
    skip: 'Saltar al contenido',
    pageTitle: 'Néstor Sarmiento — Ingeniero de Software',
    brandRole: 'Ingeniero de software',
    navAria: 'Navegación principal',
    goHome: 'Ir al inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    quickTrigger: 'Accesos',
    quickAria: 'Abrir accesos rápidos',
    themeLight: 'Cambiar a tema claro',
    themeDark: 'Cambiar a tema oscuro',
    language: 'Switch to English',
    copied: 'Correo copiado al portapapeles',
    copyFailed: 'No se pudo copiar. El correo es nesdav1005@gmail.com',
    sent: 'Todo listo: abriendo tu aplicación de correo',
    hero: {
      available: 'Disponible para nuevas oportunidades',
      hello: 'Hola, soy Néstor',
      titleBefore: 'Construyo el',
      titleAfter: 'que hace avanzar productos digitales.',
      lead: 'Estudiante de séptimo semestre de Ingeniería en Software con experiencia en backend, automatización omnicanal, infraestructura e IA aplicada a negocios.',
      experience: 'Ver mi experiencia',
      talk: 'Hablemos',
      previewCv: 'Ver CV',
      locationLabel: 'Ubicación',
      location: 'Quito, Ecuador',
      focusLabel: 'Enfoque',
      focus: 'Backend · Full Stack',
      englishLabel: 'Inglés',
      english: 'B2 · Academic Three',
      metaAria: 'Información destacada',
      specialties: 'Áreas de especialidad',
      stack: 'Stack en acción',
      online: 'En línea',
      automation: 'Automatización',
      ai: 'IA aplicada',
      securityStack: 'Gemini + Seguridad',
    },
    profile: {
      eyebrow: 'Perfil profesional',
      title: 'Del problema a una solución que funciona.',
      intro: 'Combino fundamentos de ingeniería, curiosidad técnica y una comunicación clara para crear servicios mantenibles e integraciones útiles.',
      focusTitle: 'Mi enfoque',
      focusText: 'Me interesa crecer como ingeniero Full Stack y participar en productos web, automatización, IA aplicada e integración de plataformas digitales.',
      principles: ['APIs seguras', 'Código colaborativo', 'Aprendizaje continuo'],
    },
    skillTitles: {
      languages: 'Lenguajes',
      backend: 'Backend & APIs',
      frontend: 'Frontend & Web',
      automation: 'Automatización & Canales',
      infrastructure: 'Datos & Infraestructura',
      ai: 'IA, Seguridad & DevOps',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Experiencias que conectan tecnología con impacto.',
      intro: 'Una trayectoria inicial construida alrededor de servicios, integración e IA.',
      currentDate: 'Ago 2026 — Actualidad',
      currentType: 'Pasantía · Quito',
      currentRole: 'Automatización e Integraciones',
      currentBadge: 'Actual',
      vibratioDate: 'Mar 2026 — Jun 2026',
      vibratioType: 'Prácticas preprofesionales',
      vibratioRole: 'Pasante de Desarrollo Backend',
      inclusionType: 'Prácticas preprofesionales',
      inclusionDate: 'Abr 2025 — Jul 2025',
      inclusionTitle: 'Proyecto de Inclusión Digital',
      inclusionText: 'Participación en una iniciativa tecnológica orientada a inclusión digital.',
      arellanoHighlights,
      vibratioHighlights,
    },
    education: {
      eyebrow: 'Formación',
      title: 'Fundamentos sólidos, evolución constante.',
      intro: 'Formación académica complementada con inglés y práctica continua en tecnologías modernas de desarrollo.',
      present: 'Actualidad',
      degree: 'Ingeniería en Software',
      inProgress: 'En curso',
      semesters: '7.º de 9 semestres',
      continuous: 'Formación continua',
      english: 'Inglés',
      completedB1: 'Advanced Two — B1',
      completedB2: 'Academic Two — B2',
      currentB2: 'Cursando Academic Three — B2',
      highSchool: 'Bachiller en Ciencias',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Construimos algo útil juntos?',
      intro: 'Estoy abierto a oportunidades junior, prácticas y colaboraciones donde pueda aportar en backend, automatización o desarrollo Full Stack.',
      directEmail: 'Correo directo',
      copyEmail: 'Copiar correo',
      downloadCv: 'Descargar CV',
    },
    form: {
      name: 'Nombre',
      namePlaceholder: '¿Cómo te llamas?',
      email: 'Correo',
      emailPlaceholder: 'nombre@correo.com',
      message: 'Mensaje',
      messagePlaceholder: 'Háblame del proyecto, rol o colaboración que tienes en mente...',
      characters: 'caracteres',
      submit: 'Preparar correo',
      note: 'Tus datos no se almacenan; se abrirá tu aplicación de correo.',
      subject: (name) => `Contacto de ${name} desde el portafolio`,
      body: (message, name, email) => `${message}\n\nNombre: ${name}\nCorreo: ${email}`,
      errors: {
        name: 'Escribe tu nombre.',
        email: 'Escribe tu correo.',
        invalidEmail: 'Usa un correo válido, por ejemplo nombre@correo.com.',
        message: 'Cuéntame brevemente sobre tu idea.',
        shortMessage: 'Añade un poco más de contexto (mínimo 20 caracteres).',
      },
    },
    help: {
      eyebrow: 'Ayuda rápida',
      title: 'Navega con facilidad',
      close: 'Cerrar ayuda',
      intro: 'Usa el menú superior para recorrer el perfil o estas acciones para llegar más rápido.',
      shortcuts: ['Abrir accesos rápidos', 'Cerrar menús o ventanas', 'Volver al inicio desde el botón inferior'],
      understood: 'Entendido',
    },
    quick: {
      goTo: 'Ir a',
      section: 'Sección',
      email: 'Escribir un correo',
      contact: 'Contacto',
      theme: 'Cambiar apariencia',
      preference: 'Preferencia',
      search: 'Buscar una acción...',
      empty: 'No hay acciones que coincidan.',
      aria: 'Accesos rápidos',
    },
    cv: {
      eyebrow: 'Currículum',
      title: 'Vista previa del CV',
      description: 'Revisa el documento antes de descargarlo.',
      previewAlt: 'Vista previa de una página del CV de Néstor Sarmiento',
      close: 'Cerrar vista previa del CV',
      download: 'Descargar PDF',
      fallback: 'Tu navegador no puede mostrar el PDF aquí.',
      open: 'Abrir el PDF',
    },
    footer: 'Diseñado con intención. Construido con React.',
    footerRole: 'Ingeniería de Software',
    helpLabel: 'Ayuda',
    backToTop: 'Volver al inicio',
    whatsapp: 'Contactar a Néstor por WhatsApp',
    whatsappMessage: 'Hola Néstor, vi tu portafolio y me gustaría contactarte.',
  },
  en: {
    nav: { inicio: 'Home', perfil: 'Profile', experiencia: 'Experience', formacion: 'Education', contacto: 'Contact' },
    skip: 'Skip to content',
    pageTitle: 'Néstor Sarmiento — Software Engineer',
    brandRole: 'Software engineer',
    navAria: 'Main navigation',
    goHome: 'Go to home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    quickTrigger: 'Shortcuts',
    quickAria: 'Open quick actions',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    language: 'Cambiar a español',
    copied: 'Email copied to clipboard',
    copyFailed: 'Could not copy it. The email is nesdav1005@gmail.com',
    sent: 'All set: opening your email app',
    hero: {
      available: 'Open to new opportunities',
      hello: "Hi, I'm Néstor",
      titleBefore: 'I build the',
      titleAfter: 'that moves digital products forward.',
      lead: 'Seventh-semester Software Engineering student with experience in backend development, omnichannel automation, infrastructure, and business-focused AI.',
      experience: 'View my experience',
      talk: "Let's talk",
      previewCv: 'View résumé',
      locationLabel: 'Location',
      location: 'Quito, Ecuador',
      focusLabel: 'Focus',
      focus: 'Backend · Full Stack',
      englishLabel: 'English',
      english: 'B2 · Academic Three',
      metaAria: 'Key information',
      specialties: 'Areas of expertise',
      stack: 'Stack in action',
      online: 'Online',
      automation: 'Automation',
      ai: 'Applied AI',
      securityStack: 'Gemini + Security',
    },
    profile: {
      eyebrow: 'Professional profile',
      title: 'From a problem to a solution that works.',
      intro: 'I combine engineering foundations, technical curiosity, and clear communication to build maintainable services and useful integrations.',
      focusTitle: 'My approach',
      focusText: 'I aim to grow as a Full Stack engineer and contribute to web products, automation, applied AI, and digital platform integrations.',
      principles: ['Secure APIs', 'Collaborative code', 'Continuous learning'],
    },
    skillTitles: {
      languages: 'Languages',
      backend: 'Backend & APIs',
      frontend: 'Frontend & Web',
      automation: 'Automation & Channels',
      infrastructure: 'Data & Infrastructure',
      ai: 'AI, Security & DevOps',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Experience that connects technology with impact.',
      intro: 'An early career built around services, integrations, automation, and AI.',
      currentDate: 'Aug 2026 — Present',
      currentType: 'Internship · Quito',
      currentRole: 'Automation & Integrations',
      currentBadge: 'Current',
      vibratioDate: 'Mar 2026 — Jun 2026',
      vibratioType: 'Pre-professional internship',
      vibratioRole: 'Backend Development Intern',
      inclusionType: 'Pre-professional internship',
      inclusionDate: 'Apr 2025 — Jul 2025',
      inclusionTitle: 'Digital Inclusion Project',
      inclusionText: 'Contributed to a technology initiative focused on digital inclusion.',
      arellanoHighlights: experienceHighlightsEn.arellano,
      vibratioHighlights: experienceHighlightsEn.vibratio,
    },
    education: {
      eyebrow: 'Education',
      title: 'Strong foundations, continuous growth.',
      intro: 'Academic education complemented by English studies and hands-on practice with modern development technologies.',
      present: 'Present',
      degree: 'Software Engineering',
      inProgress: 'In progress',
      semesters: '7th of 9 semesters',
      continuous: 'Continuing education',
      english: 'English',
      completedB1: 'Advanced Two — B1',
      completedB2: 'Academic Two — B2',
      currentB2: 'Currently taking Academic Three — B2',
      highSchool: 'High School Diploma in Science',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Shall we build something useful together?',
      intro: 'I am open to junior opportunities, internships, and collaborations where I can contribute to backend, automation, or Full Stack development.',
      directEmail: 'Direct email',
      copyEmail: 'Copy email',
      downloadCv: 'Download résumé',
    },
    form: {
      name: 'Name',
      namePlaceholder: 'What is your name?',
      email: 'Email',
      emailPlaceholder: 'name@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about the project, role, or collaboration you have in mind...',
      characters: 'characters',
      submit: 'Prepare email',
      note: 'Your data is not stored; your email app will open.',
      subject: (name) => `Portfolio contact from ${name}`,
      body: (message, name, email) => `${message}\n\nName: ${name}\nEmail: ${email}`,
      errors: {
        name: 'Enter your name.',
        email: 'Enter your email.',
        invalidEmail: 'Use a valid email, for example name@email.com.',
        message: 'Briefly tell me about your idea.',
        shortMessage: 'Add a little more context (at least 20 characters).',
      },
    },
    help: {
      eyebrow: 'Quick help',
      title: 'Navigate with ease',
      close: 'Close help',
      intro: 'Use the top menu to explore the profile or these actions to move faster.',
      shortcuts: ['Open quick actions', 'Close menus or dialogs', 'Return to the top using the lower button'],
      understood: 'Got it',
    },
    quick: {
      goTo: 'Go to',
      section: 'Section',
      email: 'Write an email',
      contact: 'Contact',
      theme: 'Change appearance',
      preference: 'Preference',
      search: 'Search for an action...',
      empty: 'No matching actions.',
      aria: 'Quick actions',
    },
    cv: {
      eyebrow: 'Résumé',
      title: 'Résumé preview',
      description: 'Review the document before downloading it.',
      previewAlt: "One-page preview of Néstor Sarmiento's résumé",
      close: 'Close résumé preview',
      download: 'Download PDF',
      fallback: 'Your browser cannot display the PDF here.',
      open: 'Open the PDF',
    },
    footer: 'Designed with intention. Built with React.',
    footerRole: 'Software Engineering',
    helpLabel: 'Help',
    backToTop: 'Back to top',
    whatsapp: 'Contact Néstor on WhatsApp',
    whatsappMessage: "Hi Néstor, I saw your portfolio and I'd like to contact you.",
  },
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      NS
    </span>
  )
}

function ThemeButton({ theme, onToggle, copy }) {
  const isDark = theme === 'dark'
  const label = isDark ? copy.themeLight : copy.themeDark
  return (
    <button
      className="icon-button"
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  )
}

function ContactForm({ onSent, copy }) {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validate = (data = values) => {
    const nextErrors = {}
    if (!data.name.trim()) nextErrors.name = copy.errors.name
    if (!data.email.trim()) nextErrors.email = copy.errors.email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = copy.errors.invalidEmail
    }
    if (!data.message.trim()) nextErrors.message = copy.errors.message
    else if (data.message.trim().length < 20) {
      nextErrors.message = copy.errors.shortMessage
    }
    return nextErrors
  }

  const updateField = (event) => {
    const { name, value } = event.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
  }

  const handleBlur = (event) => {
    const nextTouched = { ...touched, [event.target.name]: true }
    setTouched(nextTouched)
    setErrors(validate())
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(nextErrors).length) return

    const subject = encodeURIComponent(copy.subject(values.name))
    const body = encodeURIComponent(copy.body(values.message, values.name, values.email))
    window.location.href = `mailto:nesdav1005@gmail.com?subject=${subject}&body=${body}`
    onSent()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label className={errors.name && touched.name ? 'field has-error' : 'field'}>
          <span>{copy.name}</span>
          <input
            name="name"
            value={values.name}
            onChange={updateField}
            onBlur={handleBlur}
            placeholder={copy.namePlaceholder}
            aria-invalid={Boolean(errors.name && touched.name)}
            aria-describedby="name-error"
          />
          <small id="name-error">{touched.name && errors.name}</small>
        </label>
        <label className={errors.email && touched.email ? 'field has-error' : 'field'}>
          <span>{copy.email}</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={updateField}
            onBlur={handleBlur}
            placeholder={copy.emailPlaceholder}
            aria-invalid={Boolean(errors.email && touched.email)}
            aria-describedby="email-error"
          />
          <small id="email-error">{touched.email && errors.email}</small>
        </label>
      </div>
      <label className={errors.message && touched.message ? 'field has-error' : 'field'}>
        <span>{copy.message}</span>
        <textarea
          name="message"
          value={values.message}
          onChange={updateField}
          onBlur={handleBlur}
          placeholder={copy.messagePlaceholder}
          rows="5"
          aria-invalid={Boolean(errors.message && touched.message)}
          aria-describedby="message-error"
        />
        <span className="field-meta">
          <small id="message-error">{touched.message && errors.message}</small>
          <small>{values.message.length} {copy.characters}</small>
        </span>
      </label>
      <button className="button button-primary form-submit" type="submit">
        {copy.submit} <Send size={17} />
      </button>
      <p className="form-note">
        <CheckCircle2 size={15} /> {copy.note}
      </p>
    </form>
  )
}

function HelpDialog({ open, onClose, copy }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  if (!open) return null

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="dialog-heading">
          <div>
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 id="help-title">{copy.title}</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label={copy.close}
          >
            <X size={20} />
          </button>
        </div>
        <p>{copy.intro}</p>
        <ul className="shortcut-list">
          <li><kbd>/</kbd><span>{copy.shortcuts[0]}</span></li>
          <li><kbd>Esc</kbd><span>{copy.shortcuts[1]}</span></li>
          <li><kbd>↑</kbd><span>{copy.shortcuts[2]}</span></li>
        </ul>
        <button className="button button-primary" type="button" onClick={onClose}>
          {copy.understood} <Check size={17} />
        </button>
      </section>
    </div>
  )
}

function CvDialog({ open, onClose, copy }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  if (!open) return null

  return (
    <div className="dialog-backdrop cv-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="cv-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="cv-dialog-header">
          <div>
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 id="cv-title">{copy.title}</h2>
            <p>{copy.description}</p>
          </div>
          <div className="cv-dialog-actions">
            <a
              className="button button-primary"
              href={`${BASE_URL}CV-Nestor-Sarmiento.pdf`}
              download="CV-Nestor-Sarmiento.pdf"
            >
              <Download size={17} /> {copy.download}
            </a>
            <button
              ref={closeRef}
              type="button"
              className="icon-button"
              onClick={onClose}
              aria-label={copy.close}
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="cv-preview">
          <img
            src={`${BASE_URL}CV-Nestor-Sarmiento-preview.png`}
            alt={copy.previewAlt}
            width="1600"
            height="2261"
          />
        </div>
      </section>
    </div>
  )
}

function QuickActions({ open, onClose, onTheme, copy, navCopy }) {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const actions = [
    ...navigation.map((item) => ({
      label: `${copy.goTo} ${navCopy[item.id]}`,
      detail: copy.section,
      icon: ArrowDown,
      run: () => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }),
    })),
    {
      label: copy.email,
      detail: copy.contact,
      icon: Mail,
      run: () => window.open('mailto:nesdav1005@gmail.com', '_self'),
    },
    { label: copy.theme, detail: copy.preference, icon: Moon, run: onTheme },
  ]
  const filtered = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    if (open) {
      window.setTimeout(() => searchRef.current?.focus(), 20)
    }
  }, [open])

  if (!open) return null

  return (
    <div className="dialog-backdrop command-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="command-menu"
        role="dialog"
        aria-modal="true"
        aria-label={copy.aria}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="command-search">
          <Command size={19} aria-hidden="true" />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.search}
            aria-label={copy.search}
          />
          <kbd>Esc</kbd>
        </div>
        <div className="command-results">
          {filtered.length ? filtered.map((action) => {
            const ActionIcon = action.icon
            return (
              <button
                type="button"
                key={action.label}
                onClick={() => {
                  action.run()
                  onClose()
                }}
              >
                <span className="command-icon"><ActionIcon size={17} /></span>
                <span>{action.label}<small>{action.detail}</small></span>
                <ChevronRight size={16} />
              </button>
            )
          }) : <p className="empty-state">{copy.empty}</p>}
        </div>
      </section>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  )
  const [activeSection, setActiveSection] = useState('inicio')
  const [locale, setLocale] = useState(() => localStorage.getItem('portfolio-locale') || 'es')
  const [menuOpen, setMenuOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)
  const [quickOpen, setQuickOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const copy = translations[locale]

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')
  const toggleLocale = () => setLocale((current) => current === 'es' ? 'en' : 'es')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = copy.pageTitle
    localStorage.setItem('portfolio-locale', locale)
  }, [copy.pageTitle, locale])

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
      setShowTop(window.scrollY > 720)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -58%', threshold: [0, 0.1, 0.5] },
    )
    navigation.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKey = (event) => {
      const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)
      if (event.key === '/' && !isTyping) {
        event.preventDefault()
        setQuickOpen(true)
      }
      if (event.key === 'Escape') {
        setQuickOpen(false)
        setHelpOpen(false)
        setCvOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(''), 3200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nesdav1005@gmail.com')
      setToast(copy.copied)
    } catch {
      setToast(copy.copyFailed)
    }
  }

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">{copy.skip}</a>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="site-header">
        <nav className="nav container" aria-label={copy.navAria}>
          <button className="brand" type="button" onClick={() => goTo('inicio')} aria-label={copy.goHome}>
            <BrandMark />
            <span>Néstor Sarmiento<small>{copy.brandRole}</small></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => goTo(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {copy.nav[item.id]}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="quick-trigger"
              type="button"
              onClick={() => setQuickOpen(true)}
              aria-label={copy.quickAria}
            >
              <Command size={16} /> <span>{copy.quickTrigger}</span> <kbd>/</kbd>
            </button>
            <button
              className="language-button"
              type="button"
              onClick={toggleLocale}
              aria-label={copy.language}
              title={copy.language}
            >
              <Languages size={17} />
              <span>{locale === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <ThemeButton theme={theme} onToggle={toggleTheme} copy={copy} />
            <button
              className="icon-button menu-button"
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero-section section" id="inicio">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-intro">
                <img
                  className="profile-photo"
                  src={`${BASE_URL}nestor-sarmiento.jpg`}
                  alt="Néstor Sarmiento"
                  width="92"
                  height="92"
                />
                <div>
                  <div className="status-badge">
                    <span className="status-dot" /> {copy.hero.available}
                  </div>
                  <p className="hero-kicker">{copy.hero.hello}</p>
                </div>
              </div>
              <h1>
                {copy.hero.titleBefore} <span>backend</span> {copy.hero.titleAfter}
              </h1>
              <p className="hero-lead">{copy.hero.lead}</p>
              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => goTo('experiencia')}>
                  {copy.hero.experience} <ArrowDown size={18} />
                </button>
                <button className="button button-secondary" type="button" onClick={() => goTo('contacto')}>
                  {copy.hero.talk} <Mail size={18} />
                </button>
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => setCvOpen(true)}
                >
                  {copy.hero.previewCv} <Eye size={18} />
                </button>
              </div>
              <div className="hero-meta" aria-label={copy.hero.metaAria}>
                <span><span>{copy.hero.locationLabel}</span>{copy.hero.location}</span>
                <span><span>{copy.hero.focusLabel}</span>{copy.hero.focus}</span>
                <span><span>{copy.hero.englishLabel}</span>{copy.hero.english}</span>
              </div>
            </div>

            <div className="hero-visual" aria-label={copy.hero.specialties}>
              <div className="code-window">
                <div className="window-bar">
                  <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
                  <span>nestor.profile</span>
                  <Sparkles size={15} />
                </div>
                <div className="code-content">
                  <p><span className="code-purple">const</span> engineer = {'{'}</p>
                  <p className="indent">focus: <span className="code-green">&quot;Backend + AI&quot;</span>,</p>
                  <p className="indent">craft: [<span className="code-green">&quot;APIs&quot;</span>, <span className="code-green">&quot;Automation&quot;</span>],</p>
                  <p className="indent">mindset: <span className="code-green">&quot;Keep learning&quot;</span>,</p>
                  <p>{'}'}</p>
                </div>
                <div className="pipeline-card">
                  <div className="pipeline-head">
                    <span>{copy.hero.stack}</span>
                    <span className="live-label"><i /> {copy.hero.online}</span>
                  </div>
                  <div className="pipeline">
                    <span><Terminal size={17} /> React</span>
                    <ChevronRight size={16} />
                    <span><ServerCog size={17} /> NestJS</span>
                    <ChevronRight size={16} />
                    <span><Database size={17} /> PostgreSQL</span>
                  </div>
                </div>
              </div>
              <div className="floating-card floating-card-top">
                <Zap size={18} />
                <span><strong>{copy.hero.automation}</strong>n8n + Chatwoot</span>
              </div>
              <div className="floating-card floating-card-bottom">
                <Sparkles size={18} />
                <span><strong>{copy.hero.ai}</strong>{copy.hero.securityStack}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section profile-section" id="perfil">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">{copy.profile.eyebrow}</span>
                <h2>{copy.profile.title}</h2>
              </div>
              <p>{copy.profile.intro}</p>
            </div>

            <div className="profile-layout">
              <article className="about-card">
                <span className="card-number">01</span>
                <div>
                  <h3>{copy.profile.focusTitle}</h3>
                  <p>{copy.profile.focusText}</p>
                </div>
                <div className="principles">
                  {copy.profile.principles.map((principle) => (
                    <span key={principle}><CheckCircle2 size={17} /> {principle}</span>
                  ))}
                </div>
              </article>

              <div className="skills-grid">
                {skillGroups.map((group) => {
                  const GroupIcon = group.icon
                  return (
                    <article className="skill-card" key={group.key}>
                      <div className="skill-title">
                        <span><GroupIcon size={20} /></span>
                        <h3>{copy.skillTitles[group.key]}</h3>
                      </div>
                      <div className="skill-tags">
                        {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{copy.experience.eyebrow}</span>
              <h2>{copy.experience.title}</h2>
              <p>{copy.experience.intro}</p>
            </div>

            <div className="timeline">
              <article className="timeline-item featured">
                <div className="timeline-marker"><BriefcaseBusiness size={19} /></div>
                <div className="timeline-date">{copy.experience.currentDate}</div>
                <div className="timeline-content">
                  <div className="role-heading">
                    <div>
                      <span className="role-type">{copy.experience.currentType}</span>
                      <h3>{copy.experience.currentRole}</h3>
                      <p>Arellano Store</p>
                    </div>
                    <span className="role-badge current-role">{copy.experience.currentBadge}</span>
                  </div>
                  <ul className="highlight-list">
                    {copy.experience.arellanoHighlights.map((item) => (
                      <li key={item}><Check size={16} /> <span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker"><BriefcaseBusiness size={19} /></div>
                <div className="timeline-date">{copy.experience.vibratioDate}</div>
                <div className="timeline-content">
                  <div className="role-heading">
                    <div>
                      <span className="role-type">{copy.experience.vibratioType}</span>
                      <h3>{copy.experience.vibratioRole}</h3>
                      <p>Vibratio EC S.A.S.</p>
                    </div>
                    <span className="role-badge">Backend</span>
                  </div>
                  <ul className="highlight-list">
                    {copy.experience.vibratioHighlights.map((item) => (
                      <li key={item}><Check size={16} /> <span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker"><Sparkles size={19} /></div>
                <div className="timeline-date">{copy.experience.inclusionDate}</div>
                <div className="timeline-content compact-role">
                  <span className="role-type">{copy.experience.inclusionType}</span>
                  <h3>{copy.experience.inclusionTitle}</h3>
                  <p>{copy.experience.inclusionText}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section education-section" id="formacion">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">{copy.education.eyebrow}</span>
                <h2>{copy.education.title}</h2>
              </div>
              <p>{copy.education.intro}</p>
            </div>

            <div className="education-grid">
              <article className="education-card education-main">
                <span className="education-icon"><GraduationCap size={25} /></span>
                <div className="education-period">2023 — {copy.education.present}</div>
                <h3>{copy.education.degree}</h3>
                <p>Escuela Politécnica Nacional</p>
                <div className="progress-block">
                  <span><span>{copy.education.inProgress}</span><strong>{copy.education.semesters}</strong></span>
                  <div className="progress-track"><i /></div>
                </div>
              </article>

              <article className="education-card">
                <span className="education-icon"><Languages size={25} /></span>
                <div className="education-period">{copy.education.continuous}</div>
                <h3>{copy.education.english}</h3>
                <p>Centro de Educación Continua — EPN</p>
                <div className="language-levels">
                  <span><Check size={15} /> {copy.education.completedB1}</span>
                  <span><Check size={15} /> {copy.education.completedB2}</span>
                  <span className="current"><ArrowDown size={15} /> {copy.education.currentB2}</span>
                </div>
              </article>

              <article className="education-card education-small">
                <span className="education-icon"><GraduationCap size={23} /></span>
                <div>
                  <div className="education-period">2016 — 2022</div>
                  <h3>{copy.education.highSchool}</h3>
                  <p>Colegio Fernández Madrid</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="container contact-layout">
            <div className="contact-copy">
              <span className="eyebrow light">{copy.contact.eyebrow}</span>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.intro}</p>
              <div className="contact-options">
                <div>
                  <span>{copy.contact.directEmail}</span>
                  <a href="mailto:nesdav1005@gmail.com">nesdav1005@gmail.com</a>
                </div>
                <button type="button" onClick={copyEmail} aria-label={copy.contact.copyEmail}>
                  <Copy size={17} />
                </button>
              </div>
              <div className="social-links">
                <a href="https://github.com/Nestor-Sarmiento" target="_blank" rel="noreferrer">
                  <GitFork size={18} /> GitHub <ExternalLink size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/search/results/people/?keywords=N%C3%A9stor%20David%20Sarmiento%20Caillagua"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={18} /> LinkedIn <ExternalLink size={14} />
                </a>
                <a href={`${BASE_URL}CV-Nestor-Sarmiento.pdf`} download="CV-Nestor-Sarmiento.pdf">
                  <Download size={18} /> {copy.contact.downloadCv}
                </a>
              </div>
            </div>
            <ContactForm onSent={() => setToast(copy.sent)} copy={copy.form} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <BrandMark />
            <span><strong>Néstor Sarmiento</strong>{copy.footerRole}</span>
          </div>
          <p>{copy.footer}</p>
          <button type="button" onClick={() => setHelpOpen(true)}>
            <CircleHelp size={17} /> {copy.helpLabel}
          </button>
        </div>
      </footer>

      <a
        className="whatsapp-button"
        href={`https://wa.me/593961284734?text=${encodeURIComponent(copy.whatsappMessage)}`}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.whatsapp}
        title={copy.whatsapp}
      >
        <FaWhatsapp size={24} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={copy.backToTop}
      >
        <ArrowUp size={20} />
      </button>

      <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
        <CheckCircle2 size={18} /> {toast}
      </div>

      <HelpDialog open={helpOpen} onClose={() => setHelpOpen(false)} copy={copy.help} />
      <CvDialog open={cvOpen} onClose={() => setCvOpen(false)} copy={copy.cv} />
      <QuickActions
        key={String(quickOpen)}
        open={quickOpen}
        onClose={() => setQuickOpen(false)}
        onTheme={toggleTheme}
        copy={copy.quick}
        navCopy={copy.nav}
      />
    </div>
  )
}

export default App
