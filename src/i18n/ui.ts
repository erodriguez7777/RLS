import type { Lang } from './routes';
import { site } from '../data/site';

const en = {
  'nav.services': 'Services',
  'nav.areas': 'Service Areas',
  'nav.gallery': 'Our Work',
  'nav.reviews': 'Reviews',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.menu': 'Menu',
  'nav.close': 'Close menu',
  'nav.skip': 'Skip to content',

  'cta.estimate': 'Get My Free Estimate',
  'cta.estimateShort': 'Free Estimate',
  'cta.call': 'Call',
  'cta.callNow': 'Call Now',
  'cta.text': 'Text',
  'cta.textUs': 'Text Us',
  'cta.viewServices': 'View All Services',
  'cta.viewWork': 'See Our Work',
  'cta.learnMore': 'Learn more',
  'cta.allAreas': 'All service areas',
  'cta.allReviews': 'Read all reviews',

  'lang.switch': 'Español',
  'lang.switchLabel': 'Ver esta página en español',

  'trust.licensed': 'Licensed, Bonded & Insured',
  'trust.license': `CA Lic. #${site.license}`,
  'trust.years': `${site.years}+ Years Experience`,
  'trust.free': 'Free, No-Pressure Estimates',
  'trust.family': 'Family-Owned & Local',
  'trust.spanish': 'Se Habla Español',
  'trust.budget': 'Designs for Every Budget',

  'hero.eyebrow': `Trusted Inland Empire Landscaper · ${site.years}+ Years`,
  'hero.title': 'Your Yard. Our Canvas.',
  'hero.subtitle':
    'Licensed, insured landscaping for Inland Empire homes — from weekly lawn care to complete backyard makeovers. Honest pricing, clear communication, and work we stand behind.',
  'hero.point1': 'Free on-site estimate — usually within days',
  'hero.point2': 'Options and pricing for every budget',
  'hero.point3': `State licensed: CA #${site.license}`,

  'form.title': 'Get Your Free Estimate',
  'form.subtitle': 'Tell us a little about your project. We reply quickly — usually the same day.',
  'form.name': 'Full name',
  'form.phone': 'Phone number',
  'form.email': 'Email (optional)',
  'form.city': 'City',
  'form.cityPlaceholder': 'Select your city',
  'form.cityOther': 'Other / not listed',
  'form.service': 'Service needed',
  'form.servicePlaceholder': 'Select a service',
  'form.serviceNotSure': 'Not sure yet',
  'form.message': 'Project details (optional)',
  'form.messagePlaceholder': 'e.g. Replace front lawn with drought-tolerant plants and fix sprinklers',
  'form.submit': 'Get My Free Estimate',
  'form.sending': 'Sending…',
  'form.privacy': 'No spam, ever. We only use your info to reply about your project.',
  'form.required': 'Required',
  'form.error': 'Something went wrong. Please call or text us at',
  'form.prefer': 'Prefer to talk?',

  'section.services.eyebrow': 'What We Do',
  'section.services.title': 'Complete Landscaping Services, One Trusted Team',
  'section.services.text':
    'From routine maintenance to full yard transformations, we handle every part of your outdoor space — so you only need one call.',

  'section.why.eyebrow': 'Why Homeowners Choose Us',
  'section.why.title': 'Reputable. Reliable. Reasonably Priced.',
  'why.1.title': `${site.years}+ Years of Experience`,
  'why.1.text':
    'Decades of hands-on work in Inland Empire soil, heat and water conditions. We know what thrives here — and what doesn’t.',
  'why.2.title': 'Licensed, Bonded & Insured',
  'why.2.text': `California contractor license #${site.license}. You’re protected on every job, big or small. Verify it anytime with the CSLB.`,
  'why.3.title': 'Fair Pricing for Every Budget',
  'why.3.text':
    'We give you clear options at different price points — no surprises, no pressure. Our customers consistently call our estimates “very reasonable.”',
  'why.4.title': 'You’re Always in the Loop',
  'why.4.text':
    'Fast replies to calls and texts, clear explanations, and a walkthrough when the job is done. Communication is what our customers mention most.',

  'section.process.eyebrow': 'How It Works',
  'section.process.title': 'Your Dream Yard in 3 Simple Steps',
  'process.1.title': 'Call, Text, or Request Online',
  'process.1.text': 'Tell us what you have in mind. We respond quickly and schedule a time that works for you.',
  'process.2.title': 'Free On-Site Estimate',
  'process.2.text': 'We visit your property, listen to your goals, and give you clear options and honest pricing.',
  'process.3.title': 'Enjoy Your New Yard',
  'process.3.text': 'Our crew does the work right, cleans up, and walks you through the finished project.',

  'section.gallery.eyebrow': 'Our Work',
  'section.gallery.title': 'Outdoor Spaces We’re Proud Of',
  'section.gallery.text': 'Lawns, hardscapes, drought-tolerant gardens and complete makeovers across the Inland Empire.',

  'section.reviews.eyebrow': 'Customer Reviews',
  'section.reviews.title': 'What Our Customers Say',
  'section.reviews.text': 'Real words from real homeowners. Our reputation is built one yard at a time.',

  'section.areas.eyebrow': 'Service Areas',
  'section.areas.title': 'Proudly Serving the Inland Empire',
  'section.areas.text':
    'Our crews work throughout San Bernardino and Riverside counties and nearby communities. Don’t see your city? Give us a call — we may still be able to help.',

  'section.faq.eyebrow': 'FAQ',
  'section.faq.title': 'Questions? We’ve Got Answers.',

  'cta.band.title': 'Your dream yard is closer than you think.',
  'cta.band.text': 'Get a free, no-obligation estimate from a licensed Inland Empire landscaper.',

  'footer.tagline': 'Transforming Inland Empire outdoor spaces into living works of art.',
  'footer.services': 'Services',
  'footer.company': 'Company',
  'footer.contact': 'Contact',
  'footer.areas': 'Areas We Serve',
  'footer.rights': 'All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.photos': 'Some photos are representative stock images.',
  'footer.verify': 'Verify license',

  'service.included': 'What’s Included',
  'service.benefits': 'Why It Matters',
  'service.faq': 'Common Questions',
  'service.related': 'Related Services',
  'service.areas': 'Available throughout the Inland Empire',

  'city.title': 'Landscaping in',
  'city.services': 'Our Services in',
  'city.nearby': 'Also Serving Nearby',
  'city.why': 'Why Neighbors in {city} Choose Rodriguez Landscaping',

  'reviews.leave': 'Worked with us? Leave a review',
  'reviews.translated': '',

  'breadcrumb.home': 'Home',
};

export type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  'nav.services': 'Servicios',
  'nav.areas': 'Áreas de Servicio',
  'nav.gallery': 'Galería',
  'nav.reviews': 'Reseñas',
  'nav.about': 'Nosotros',
  'nav.contact': 'Contacto',
  'nav.menu': 'Menú',
  'nav.close': 'Cerrar menú',
  'nav.skip': 'Saltar al contenido',

  'cta.estimate': 'Pedir Mi Estimado Gratis',
  'cta.estimateShort': 'Estimado Gratis',
  'cta.call': 'Llamar',
  'cta.callNow': 'Llame Ahora',
  'cta.text': 'Texto',
  'cta.textUs': 'Envíenos un Texto',
  'cta.viewServices': 'Ver Todos los Servicios',
  'cta.viewWork': 'Ver Nuestro Trabajo',
  'cta.learnMore': 'Más información',
  'cta.allAreas': 'Todas las áreas de servicio',
  'cta.allReviews': 'Leer todas las reseñas',

  'lang.switch': 'English',
  'lang.switchLabel': 'View this page in English',

  'trust.licensed': 'Con Licencia, Fianza y Seguro',
  'trust.license': `Lic. CA #${site.license}`,
  'trust.years': `Más de ${site.years} Años de Experiencia`,
  'trust.free': 'Estimados Gratis, Sin Compromiso',
  'trust.family': 'Negocio Familiar y Local',
  'trust.spanish': 'Hablamos Español',
  'trust.budget': 'Diseños para Todo Presupuesto',

  'hero.eyebrow': `Jardinería en el Inland Empire · Más de ${site.years} Años`,
  'hero.title': 'Su Jardín. Nuestro Lienzo.',
  'hero.subtitle':
    'Jardinería con licencia y seguro para hogares del Inland Empire — desde mantenimiento semanal hasta remodelaciones completas de patio. Precios honestos, buena comunicación y trabajo garantizado.',
  'hero.point1': 'Estimado gratis en su propiedad — por lo general en pocos días',
  'hero.point2': 'Opciones y precios para todo presupuesto',
  'hero.point3': `Licencia estatal: CA #${site.license}`,

  'form.title': 'Pida Su Estimado Gratis',
  'form.subtitle': 'Cuéntenos un poco sobre su proyecto. Respondemos rápido — normalmente el mismo día.',
  'form.name': 'Nombre completo',
  'form.phone': 'Teléfono',
  'form.email': 'Correo electrónico (opcional)',
  'form.city': 'Ciudad',
  'form.cityPlaceholder': 'Seleccione su ciudad',
  'form.cityOther': 'Otra / no aparece',
  'form.service': 'Servicio que necesita',
  'form.servicePlaceholder': 'Seleccione un servicio',
  'form.serviceNotSure': 'Todavía no estoy seguro',
  'form.message': 'Detalles del proyecto (opcional)',
  'form.messagePlaceholder': 'Ej. Cambiar el pasto del frente por plantas de bajo consumo de agua y arreglar los aspersores',
  'form.submit': 'Pedir Mi Estimado Gratis',
  'form.sending': 'Enviando…',
  'form.privacy': 'Nada de spam. Solo usamos sus datos para responderle sobre su proyecto.',
  'form.required': 'Obligatorio',
  'form.error': 'Algo salió mal. Por favor llámenos o envíenos un texto al',
  'form.prefer': '¿Prefiere hablar?',

  'section.services.eyebrow': 'Lo Que Hacemos',
  'section.services.title': 'Servicios Completos de Jardinería, Un Solo Equipo de Confianza',
  'section.services.text':
    'Desde el mantenimiento de rutina hasta transformaciones completas, nos encargamos de todo su espacio exterior — con una sola llamada.',

  'section.why.eyebrow': 'Por Qué Nos Eligen',
  'section.why.title': 'Confiables. Responsables. A Buen Precio.',
  'why.1.title': `Más de ${site.years} Años de Experiencia`,
  'why.1.text':
    'Décadas de trabajo en la tierra, el calor y las condiciones de agua del Inland Empire. Sabemos qué crece bien aquí — y qué no.',
  'why.2.title': 'Con Licencia, Fianza y Seguro',
  'why.2.text': `Licencia de contratista de California #${site.license}. Usted está protegido en cada trabajo, grande o pequeño. Verifíquela cuando quiera en el CSLB.`,
  'why.3.title': 'Precios Justos para Todo Presupuesto',
  'why.3.text':
    'Le damos opciones claras a diferentes precios — sin sorpresas y sin presión. Nuestros clientes siempre dicen que nuestros estimados son “muy razonables”.',
  'why.4.title': 'Siempre Le Mantenemos Informado',
  'why.4.text':
    'Respondemos rápido a llamadas y textos, explicamos todo con claridad y revisamos el trabajo terminado con usted. Es lo que más mencionan nuestros clientes.',

  'section.process.eyebrow': 'Cómo Funciona',
  'section.process.title': 'El Jardín de Sus Sueños en 3 Pasos',
  'process.1.title': 'Llame, Envíe un Texto o Pida en Línea',
  'process.1.text': 'Cuéntenos lo que tiene en mente. Respondemos rápido y agendamos a la hora que le convenga.',
  'process.2.title': 'Estimado Gratis en Su Propiedad',
  'process.2.text': 'Visitamos su propiedad, escuchamos sus ideas y le damos opciones claras con precios honestos.',
  'process.3.title': 'Disfrute Su Nuevo Jardín',
  'process.3.text': 'Nuestro equipo hace el trabajo bien, limpia todo y revisa el proyecto terminado con usted.',

  'section.gallery.eyebrow': 'Nuestro Trabajo',
  'section.gallery.title': 'Espacios Exteriores de los Que Estamos Orgullosos',
  'section.gallery.text': 'Céspedes, hardscape, jardines de bajo consumo de agua y remodelaciones completas en todo el Inland Empire.',

  'section.reviews.eyebrow': 'Reseñas de Clientes',
  'section.reviews.title': 'Lo Que Dicen Nuestros Clientes',
  'section.reviews.text': 'Palabras reales de propietarios reales. Nuestra reputación se construye un jardín a la vez.',

  'section.areas.eyebrow': 'Áreas de Servicio',
  'section.areas.title': 'Orgullosamente Sirviendo al Inland Empire',
  'section.areas.text':
    'Trabajamos en los condados de San Bernardino y Riverside y comunidades cercanas. ¿No ve su ciudad? Llámenos — es posible que aún podamos ayudarle.',

  'section.faq.eyebrow': 'Preguntas Frecuentes',
  'section.faq.title': '¿Tiene Preguntas? Tenemos Respuestas.',

  'cta.band.title': 'El jardín de sus sueños está más cerca de lo que cree.',
  'cta.band.text': 'Reciba un estimado gratis y sin compromiso de un jardinero con licencia en el Inland Empire.',

  'footer.tagline': 'Transformando los espacios exteriores del Inland Empire en verdaderas obras de arte.',
  'footer.services': 'Servicios',
  'footer.company': 'Empresa',
  'footer.contact': 'Contacto',
  'footer.areas': 'Áreas Que Servimos',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.privacy': 'Política de Privacidad',
  'footer.photos': 'Algunas fotos son imágenes ilustrativas.',
  'footer.verify': 'Verificar licencia',

  'service.included': 'Qué Incluye',
  'service.benefits': 'Por Qué Es Importante',
  'service.faq': 'Preguntas Comunes',
  'service.related': 'Servicios Relacionados',
  'service.areas': 'Disponible en todo el Inland Empire',

  'city.title': 'Jardinería en',
  'city.services': 'Nuestros Servicios en',
  'city.nearby': 'También Servimos Cerca de Aquí',
  'city.why': 'Por Qué los Vecinos de {city} Eligen a Rodriguez Landscaping',

  'reviews.leave': '¿Trabajó con nosotros? Déjenos una reseña',
  'reviews.translated': 'Traducido del inglés',

  'breadcrumb.home': 'Inicio',
};

const dict = { en, es };

export const useT = (lang: Lang) => (key: UIKey) => dict[lang][key] ?? en[key];
