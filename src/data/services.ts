import type { ImageMetadata } from 'astro';
import crewMowing from '../assets/photos/crew-mowing.jpg';
import lushLawn from '../assets/photos/lush-lawn.jpg';
import sprinklersLawn from '../assets/photos/sprinklers-lawn.jpg';
import gardenDesign from '../assets/photos/garden-design.jpg';
import agaveGravel from '../assets/photos/agave-gravel.jpg';
import treeArborist from '../assets/photos/tree-arborist.jpg';
import paverCircle from '../assets/photos/paver-circle.jpg';
import pergola from '../assets/photos/pergola-walkway.jpg';

type L = { en: string; es: string };
type LList = { en: string[]; es: string[] };

export interface Service {
  id: string;
  slug: L;
  icon: string;
  image: ImageMetadata;
  title: L;
  short: L;
  headline: L;
  intro: { en: string[]; es: string[] };
  included: LList;
  benefits: LList;
  faqs: { q: L; a: L }[];
  related: string[];
}

export const services: Service[] = [
  {
    id: 'lawn-maintenance',
    slug: { en: 'lawn-maintenance', es: 'mantenimiento-de-jardines' },
    icon: 'mower',
    image: crewMowing,
    title: { en: 'Lawn & Yard Maintenance', es: 'Mantenimiento de Jardines' },
    short: {
      en: 'Weekly or bi-weekly mowing, edging, trimming and cleanup that keeps your property looking sharp year-round.',
      es: 'Corte, orillado, poda y limpieza semanal o quincenal para que su propiedad luzca impecable todo el año.',
    },
    headline: {
      en: 'Reliable Weekly & Bi-Weekly Lawn Maintenance',
      es: 'Mantenimiento de Jardín Semanal y Quincenal Confiable',
    },
    intro: {
      en: [
        'A great-looking yard takes consistent care — especially through Inland Empire summers. Our maintenance crews show up on schedule and take care of the details so you can enjoy your weekends.',
        'Whether you own your home, manage a rental, or just want your property to make a great first impression, we’ll build a maintenance plan that fits your yard and your budget.',
      ],
      es: [
        'Un jardín bonito requiere cuidado constante — sobre todo durante los veranos del Inland Empire. Nuestro equipo llega a tiempo y se encarga de los detalles para que usted disfrute sus fines de semana.',
        'Ya sea dueño de casa, administre una propiedad de renta o simplemente quiera causar una gran primera impresión, armamos un plan de mantenimiento a la medida de su jardín y su presupuesto.',
      ],
    },
    included: {
      en: ['Mowing and edging', 'Hedge and shrub trimming', 'Weed control in beds', 'Leaf and debris cleanup', 'Sprinkler checks and adjustments', 'Seasonal clean-ups'],
      es: ['Corte y orillado del pasto', 'Poda de setos y arbustos', 'Control de maleza en jardineras', 'Limpieza de hojas y basura', 'Revisión y ajuste de aspersores', 'Limpiezas de temporada'],
    },
    benefits: {
      en: ['Consistent, on-schedule service', 'Healthier, greener lawn', 'Boosts curb appeal and property value', 'Ideal for rentals and busy homeowners'],
      es: ['Servicio constante y puntual', 'Césped más sano y verde', 'Mejora la apariencia y el valor de su propiedad', 'Ideal para rentas y propietarios ocupados'],
    },
    faqs: [
      {
        q: { en: 'Do you offer weekly and bi-weekly service?', es: '¿Ofrecen servicio semanal y quincenal?' },
        a: {
          en: 'Yes. Most customers choose weekly service in spring and summer and bi-weekly in the cooler months, but we’ll recommend what works best for your yard.',
          es: 'Sí. La mayoría de los clientes elige servicio semanal en primavera y verano y quincenal en los meses frescos, pero le recomendaremos lo que mejor funcione para su jardín.',
        },
      },
      {
        q: { en: 'Do you maintain rental properties?', es: '¿Dan mantenimiento a propiedades de renta?' },
        a: {
          en: 'Absolutely. We work with landlords and property owners to keep rentals looking great and low-maintenance for tenants.',
          es: 'Claro que sí. Trabajamos con dueños de propiedades para que sus rentas luzcan bien y sean de bajo mantenimiento para los inquilinos.',
        },
      },
    ],
    related: ['sod-installation', 'irrigation', 'tree-trimming'],
  },
  {
    id: 'sod-installation',
    slug: { en: 'sod-installation', es: 'instalacion-de-pasto' },
    icon: 'grass',
    image: lushLawn,
    title: { en: 'Sod & Turf Installation', es: 'Instalación de Pasto y Césped' },
    short: {
      en: 'Instant, lush green lawns with proper soil prep, grading and quality sod — or low-maintenance artificial turf.',
      es: 'Césped verde al instante con buena preparación de tierra, nivelación y pasto de calidad — o pasto artificial de bajo mantenimiento.',
    },
    headline: { en: 'Sod & Turf Installation Done Right', es: 'Instalación de Pasto y Césped Bien Hecha' },
    intro: {
      en: [
        'Tired of patchy, brown grass? New sod gives you a thick, green lawn in a single day. The secret to a lawn that lasts is in the preparation — and that’s where our experience shows.',
        'We remove old grass and weeds, prepare and level the soil, make sure your sprinklers give even coverage, and lay fresh sod suited to Inland Empire heat. Prefer zero mowing? Ask us about artificial turf.',
      ],
      es: [
        '¿Cansado de un pasto seco y disparejo? El pasto en rollo le da un césped verde y tupido en un solo día. El secreto de un césped duradero está en la preparación — y ahí es donde se nota nuestra experiencia.',
        'Quitamos el pasto viejo y la maleza, preparamos y nivelamos la tierra, revisamos que los aspersores rieguen parejo e instalamos pasto adecuado para el calor del Inland Empire. ¿Prefiere no cortar el pasto nunca? Pregúntenos por el pasto artificial.',
      ],
    },
    included: {
      en: ['Old lawn and weed removal', 'Soil preparation and grading', 'Sprinkler coverage check', 'Fresh sod installation', 'Artificial turf options', 'Watering instructions for new sod'],
      es: ['Retiro de pasto viejo y maleza', 'Preparación y nivelación de la tierra', 'Revisión de cobertura de aspersores', 'Instalación de pasto nuevo', 'Opciones de pasto artificial', 'Instrucciones de riego para pasto nuevo'],
    },
    benefits: {
      en: ['Instant, finished-looking lawn', 'Fewer weeds from day one', 'Proper grading prevents puddles and runoff', 'Varieties chosen for local heat'],
      es: ['Césped terminado al instante', 'Menos maleza desde el primer día', 'Una buena nivelación evita charcos y escurrimientos', 'Variedades elegidas para el calor local'],
    },
    faqs: [
      {
        q: { en: 'How long does new sod take to root?', es: '¿Cuánto tarda en enraizar el pasto nuevo?' },
        a: {
          en: 'Typically two to three weeks with proper watering. We’ll give you a simple watering schedule to follow.',
          es: 'Normalmente de dos a tres semanas con el riego adecuado. Le daremos un horario de riego sencillo para seguir.',
        },
      },
      {
        q: { en: 'Do you install artificial turf?', es: '¿Instalan pasto artificial?' },
        a: {
          en: 'Yes. Artificial turf is a great water-saving, low-maintenance option, and we can help you compare it with natural sod.',
          es: 'Sí. El pasto artificial es una gran opción para ahorrar agua y mantenimiento, y le ayudamos a compararlo con el pasto natural.',
        },
      },
    ],
    related: ['irrigation', 'lawn-maintenance', 'drought-tolerant'],
  },
  {
    id: 'irrigation',
    slug: { en: 'irrigation-sprinkler-systems', es: 'sistemas-de-riego' },
    icon: 'drop',
    image: sprinklersLawn,
    title: { en: 'Irrigation & Sprinkler Systems', es: 'Sistemas de Riego y Aspersores' },
    short: {
      en: 'New sprinkler and drip installations plus fast repairs for leaks, broken heads and dry spots.',
      es: 'Instalación de aspersores y riego por goteo, y reparaciones rápidas de fugas, cabezales rotos y zonas secas.',
    },
    headline: { en: 'Sprinkler & Irrigation Installation and Repair', es: 'Instalación y Reparación de Aspersores y Riego' },
    intro: {
      en: [
        'A well-designed irrigation system is the foundation of a healthy yard — and the key to keeping water bills under control. We install new sprinkler and drip systems and repair existing ones.',
        'From broken heads and leaking valves to full system upgrades with smart controllers, we make sure every part of your yard gets the right amount of water, without waste.',
      ],
      es: [
        'Un buen sistema de riego es la base de un jardín sano — y la clave para controlar el recibo del agua. Instalamos sistemas nuevos de aspersores y goteo, y reparamos los existentes.',
        'Desde cabezales rotos y válvulas con fuga hasta la modernización completa con controladores inteligentes, nos aseguramos de que cada parte de su jardín reciba la cantidad justa de agua, sin desperdicio.',
      ],
    },
    included: {
      en: ['New sprinkler system installation', 'Drip irrigation for beds and planters', 'Broken head and line repairs', 'Valve and leak repairs', 'Timer and smart controller setup', 'Coverage tune-ups to fix dry spots'],
      es: ['Instalación de sistemas de aspersores nuevos', 'Riego por goteo para jardineras y macetas', 'Reparación de cabezales y tuberías', 'Reparación de válvulas y fugas', 'Instalación de timers y controladores inteligentes', 'Ajustes de cobertura para eliminar zonas secas'],
    },
    benefits: {
      en: ['Lower water bills', 'Even, healthy growth', 'Less runoff and waste', 'Protects your landscape investment'],
      es: ['Recibos de agua más bajos', 'Crecimiento parejo y sano', 'Menos escurrimiento y desperdicio', 'Protege su inversión en el jardín'],
    },
    faqs: [
      {
        q: { en: 'Can you fix my existing sprinklers instead of replacing them?', es: '¿Pueden reparar mis aspersores en lugar de cambiarlos?' },
        a: {
          en: 'In many cases, yes. We’ll diagnose the problem and give you honest options — repair when it makes sense, replace when it saves you money long-term.',
          es: 'En muchos casos, sí. Diagnosticamos el problema y le damos opciones honestas — reparar cuando conviene, reemplazar cuando le ahorra dinero a largo plazo.',
        },
      },
      {
        q: { en: 'Do you install drip irrigation?', es: '¿Instalan riego por goteo?' },
        a: {
          en: 'Yes. Drip irrigation is ideal for planters, shrubs and drought-tolerant gardens and uses far less water than spray heads.',
          es: 'Sí. El riego por goteo es ideal para jardineras, arbustos y jardines de bajo consumo, y usa mucha menos agua que los aspersores.',
        },
      },
    ],
    related: ['sod-installation', 'drought-tolerant', 'lawn-maintenance'],
  },
  {
    id: 'landscape-design',
    slug: { en: 'landscape-design', es: 'diseno-de-jardines' },
    icon: 'pencil',
    image: gardenDesign,
    title: { en: 'Custom Landscape Design', es: 'Diseño de Jardines Personalizado' },
    short: {
      en: 'Front and backyard designs built around how you live — with options for every budget.',
      es: 'Diseños de jardín delantero y trasero pensados en su estilo de vida — con opciones para todo presupuesto.',
    },
    headline: { en: 'Custom Landscape Design for Every Budget', es: 'Diseño de Jardines Personalizado para Todo Presupuesto' },
    intro: {
      en: [
        'Every great yard starts with a plan. We sit down with you, listen to how you want to use your outdoor space, and design a landscape that fits your home, your lifestyle and your budget.',
        'We’ll give you multiple options and price points so you can choose with confidence — and then our own crew brings the design to life, start to finish.',
      ],
      es: [
        'Todo gran jardín empieza con un plan. Nos sentamos con usted, escuchamos cómo quiere usar su espacio exterior y diseñamos un jardín que se adapte a su casa, su estilo de vida y su presupuesto.',
        'Le damos varias opciones y precios para que elija con confianza — y luego nuestro propio equipo hace realidad el diseño, de principio a fin.',
      ],
    },
    included: {
      en: ['On-site consultation', 'Plant and material selection', 'Front and backyard layouts', 'Multiple options and price points', 'Full installation by our crew', 'Lighting and finishing touches'],
      es: ['Consulta en su propiedad', 'Selección de plantas y materiales', 'Diseño de jardín delantero y trasero', 'Varias opciones y precios', 'Instalación completa por nuestro equipo', 'Iluminación y detalles finales'],
    },
    benefits: {
      en: ['A yard designed around your life', 'One team from design to install', 'Clear pricing before work begins', 'Plants that thrive in our climate'],
      es: ['Un jardín diseñado para su vida', 'Un solo equipo del diseño a la instalación', 'Precios claros antes de empezar', 'Plantas que prosperan en nuestro clima'],
    },
    faqs: [
      {
        q: { en: 'Do I need a big budget for a custom design?', es: '¿Necesito un presupuesto grande para un diseño personalizado?' },
        a: {
          en: 'Not at all. We design for every budget and can phase larger projects over time so you get the yard you want at a pace that works for you.',
          es: 'Para nada. Diseñamos para todo presupuesto y podemos dividir proyectos grandes en etapas para que tenga el jardín que quiere a su propio ritmo.',
        },
      },
      {
        q: { en: 'Can you redesign just my front yard?', es: '¿Pueden rediseñar solo mi jardín delantero?' },
        a: {
          en: 'Yes — front yard refreshes are one of our most popular projects and make a big impact on curb appeal.',
          es: 'Sí — renovar el jardín delantero es uno de nuestros proyectos más populares y mejora mucho la apariencia de su casa.',
        },
      },
    ],
    related: ['drought-tolerant', 'hardscape', 'irrigation'],
  },
  {
    id: 'drought-tolerant',
    slug: { en: 'drought-tolerant-landscaping', es: 'jardines-de-bajo-consumo-de-agua' },
    icon: 'sun',
    image: agaveGravel,
    title: { en: 'Drought-Tolerant Landscaping', es: 'Jardines de Bajo Consumo de Agua' },
    short: {
      en: 'Beautiful, water-wise yards with native plants, succulents, rock and mulch — built for Inland Empire heat.',
      es: 'Jardines hermosos que ahorran agua con plantas nativas, suculentas, piedra y mulch — hechos para el calor del Inland Empire.',
    },
    headline: { en: 'Drought-Tolerant Landscaping That Saves Water', es: 'Jardines de Bajo Consumo que Ahorran Agua' },
    intro: {
      en: [
        'Hot summers and rising water rates make thirsty lawns expensive. A drought-tolerant landscape can dramatically cut your outdoor water use while looking great all year.',
        'We replace high-maintenance grass with native and climate-adapted plants, decorative rock, mulch and efficient drip irrigation. Many local water districts offer turf-replacement rebates — we’re happy to help you look into what’s available in your area.',
      ],
      es: [
        'Los veranos calurosos y las tarifas de agua cada vez más altas hacen que un pasto que necesita mucha agua salga caro. Un jardín de bajo consumo puede reducir mucho el uso de agua y verse bonito todo el año.',
        'Cambiamos el pasto de alto mantenimiento por plantas nativas y adaptadas al clima, piedra decorativa, mulch y riego por goteo eficiente. Muchos distritos de agua locales ofrecen reembolsos por reemplazar el pasto — con gusto le ayudamos a ver qué hay disponible en su zona.',
      ],
    },
    included: {
      en: ['Lawn removal', 'Native and succulent plantings', 'Decorative rock, gravel and mulch', 'Drip irrigation conversion', 'Pathways and borders', 'Low-maintenance design'],
      es: ['Retiro de pasto', 'Plantas nativas y suculentas', 'Piedra decorativa, grava y mulch', 'Conversión a riego por goteo', 'Caminos y bordes', 'Diseño de bajo mantenimiento'],
    },
    benefits: {
      en: ['Lower water bills', 'Less mowing and upkeep', 'Year-round curb appeal', 'Great for rentals and busy owners'],
      es: ['Recibos de agua más bajos', 'Menos corte y mantenimiento', 'Buena apariencia todo el año', 'Ideal para rentas y propietarios ocupados'],
    },
    faqs: [
      {
        q: { en: 'Will a drought-tolerant yard look like a desert?', es: '¿Un jardín de bajo consumo se verá como un desierto?' },
        a: {
          en: 'Not unless you want it to. With the right mix of plants, color, texture and rock, water-wise yards can be lush, colorful and inviting.',
          es: 'Solo si usted lo quiere. Con la combinación correcta de plantas, color, textura y piedra, un jardín de bajo consumo puede ser frondoso, colorido y acogedor.',
        },
      },
      {
        q: { en: 'Are there rebates for removing my lawn?', es: '¿Hay reembolsos por quitar mi pasto?' },
        a: {
          en: 'Many Southern California water agencies offer turf-replacement rebates. Programs change, so check with your water provider — we can help you plan a project that qualifies.',
          es: 'Muchas agencias de agua del sur de California ofrecen reembolsos por reemplazar el pasto. Los programas cambian, así que consulte con su proveedor de agua — le ayudamos a planear un proyecto que califique.',
        },
      },
    ],
    related: ['landscape-design', 'irrigation', 'hardscape'],
  },
  {
    id: 'tree-trimming',
    slug: { en: 'tree-trimming-weed-abatement', es: 'poda-de-arboles-y-limpieza-de-maleza' },
    icon: 'tree',
    image: treeArborist,
    title: { en: 'Tree Trimming & Weed Abatement', es: 'Poda de Árboles y Limpieza de Maleza' },
    short: {
      en: 'Safe trimming and shaping plus weed and brush clearing to keep your property healthy and fire-safe.',
      es: 'Poda y forma segura de árboles, más limpieza de maleza y hierba seca para mantener su propiedad sana y segura contra incendios.',
    },
    headline: { en: 'Tree Trimming & Weed Abatement Services', es: 'Servicios de Poda de Árboles y Limpieza de Maleza' },
    intro: {
      en: [
        'Overgrown trees and dry weeds aren’t just unsightly — they can damage your home and create a fire risk. Our crew trims, shapes and clears so your property stays healthy, safe and clean.',
        'We handle everything from routine shaping of yard trees and palms to full weed abatement and brush clearing on larger lots, and we haul away the debris.',
      ],
      es: [
        'Los árboles descuidados y la maleza seca no solo se ven mal — pueden dañar su casa y aumentar el riesgo de incendio. Nuestro equipo poda, da forma y limpia para que su propiedad esté sana, segura y limpia.',
        'Hacemos de todo, desde dar forma a árboles y palmeras hasta limpiar maleza y hierba seca en terrenos grandes, y nos llevamos todos los desechos.',
      ],
    },
    included: {
      en: ['Tree trimming and shaping', 'Palm tree trimming', 'Dead branch removal', 'Weed abatement and brush clearing', 'Lot clean-ups', 'Debris haul-away'],
      es: ['Poda y forma de árboles', 'Poda de palmeras', 'Retiro de ramas secas', 'Limpieza de maleza y hierba seca', 'Limpieza de terrenos', 'Retiro de desechos'],
    },
    benefits: {
      en: ['Reduces fire risk', 'Protects your roof and structures', 'Healthier, better-shaped trees', 'Helps meet local weed abatement rules'],
      es: ['Reduce el riesgo de incendio', 'Protege su techo y construcciones', 'Árboles más sanos y con mejor forma', 'Ayuda a cumplir con las reglas locales de limpieza de maleza'],
    },
    faqs: [
      {
        q: { en: 'Do you haul away the branches and debris?', es: '¿Se llevan las ramas y los desechos?' },
        a: {
          en: 'Yes. Clean-up and haul-away are included so you’re left with a clean property.',
          es: 'Sí. La limpieza y el retiro de desechos están incluidos para que su propiedad quede limpia.',
        },
      },
      {
        q: { en: 'Can you clear weeds on a vacant lot?', es: '¿Pueden limpiar la maleza de un terreno baldío?' },
        a: {
          en: 'Yes. We clear weeds and brush on residential lots and larger parcels to help with fire safety and local requirements.',
          es: 'Sí. Limpiamos maleza y hierba seca en terrenos residenciales y lotes grandes para ayudar con la seguridad contra incendios y los requisitos locales.',
        },
      },
    ],
    related: ['lawn-maintenance', 'landscape-design', 'special-projects'],
  },
  {
    id: 'hardscape',
    slug: { en: 'hardscape', es: 'hardscape-patios-y-concreto' },
    icon: 'bricks',
    image: paverCircle,
    title: { en: 'Hardscape, Pavers & Concrete', es: 'Hardscape, Adoquines y Concreto' },
    short: {
      en: 'Patios, walkways, retaining walls, pavers and concrete that add beauty, function and value.',
      es: 'Patios, caminos, muros de contención, adoquines y concreto que agregan belleza, funcionalidad y valor.',
    },
    headline: { en: 'Hardscape: Patios, Pavers, Walls & Concrete', es: 'Hardscape: Patios, Adoquines, Muros y Concreto' },
    intro: {
      en: [
        'Hardscaping turns your yard into a true outdoor living space. Whether you want a patio for family gatherings, a clean walkway, or a sturdy retaining wall for a sloped yard, we build it to last.',
        'We’ve converted dirt and patchy grass into clean concrete patios, rebuilt failing retaining walls on slopes, and added stone and pavers that make better use of every square foot.',
      ],
      es: [
        'El hardscape convierte su jardín en un verdadero espacio para vivir al aire libre. Ya sea un patio para reuniones familiares, un camino limpio o un muro de contención firme para un terreno en pendiente, lo construimos para que dure.',
        'Hemos convertido tierra y pasto disparejo en patios de concreto limpios, reconstruido muros de contención en pendientes y agregado piedra y adoquines para aprovechar cada metro.',
      ],
    },
    included: {
      en: ['Paver patios and walkways', 'Concrete patios and slabs', 'Retaining walls', 'Decorative rock and stone', 'Steps and borders', 'Fire pit and seating areas'],
      es: ['Patios y caminos de adoquín', 'Patios y losas de concreto', 'Muros de contención', 'Piedra decorativa', 'Escalones y bordes', 'Áreas de fogata y asientos'],
    },
    benefits: {
      en: ['More usable outdoor living space', 'Low maintenance', 'Safer slopes and walkways', 'Adds lasting property value'],
      es: ['Más espacio útil al aire libre', 'Bajo mantenimiento', 'Pendientes y caminos más seguros', 'Agrega valor duradero a su propiedad'],
    },
    faqs: [
      {
        q: { en: 'Can you fix a retaining wall that’s failing?', es: '¿Pueden arreglar un muro de contención que se está cayendo?' },
        a: {
          en: 'Yes. We assess why the wall is failing — often drainage or soil movement — and give you options to rebuild it safely.',
          es: 'Sí. Revisamos por qué el muro está fallando — muchas veces por drenaje o movimiento de tierra — y le damos opciones para reconstruirlo de forma segura.',
        },
      },
      {
        q: { en: 'Pavers or concrete — which is better?', es: '¿Adoquín o concreto — qué es mejor?' },
        a: {
          en: 'Both are great. Concrete is often more budget-friendly; pavers offer more style options and are easy to repair. We’ll help you compare.',
          es: 'Los dos son excelentes. El concreto suele ser más económico; el adoquín ofrece más estilos y es fácil de reparar. Le ayudamos a comparar.',
        },
      },
    ],
    related: ['landscape-design', 'drought-tolerant', 'special-projects'],
  },
  {
    id: 'special-projects',
    slug: { en: 'special-projects', es: 'proyectos-especiales' },
    icon: 'star',
    image: pergola,
    title: { en: 'Yard Makeovers & Special Projects', es: 'Remodelaciones y Proyectos Especiales' },
    short: {
      en: 'Complete front and backyard makeovers, property clean-ups and custom outdoor projects.',
      es: 'Remodelaciones completas de jardín delantero y trasero, limpiezas de propiedad y proyectos exteriores a la medida.',
    },
    headline: { en: 'Complete Yard Makeovers & Special Projects', es: 'Remodelaciones Completas de Jardín y Proyectos Especiales' },
    intro: {
      en: [
        'Some projects don’t fit in a single box. Maybe you’re getting a home ready to sell, renovating a rental, or finally tackling the backyard you’ve been putting off for years.',
        'We combine design, irrigation, sod, planting and hardscape into one coordinated project — managed by one team, with one point of contact who keeps you informed every step of the way.',
      ],
      es: [
        'Algunos proyectos no caben en una sola categoría. Tal vez está preparando su casa para venderla, renovando una propiedad de renta o por fin quiere arreglar ese patio que ha dejado pendiente por años.',
        'Combinamos diseño, riego, pasto, plantas y hardscape en un solo proyecto coordinado — con un solo equipo y una sola persona de contacto que le mantiene informado en cada paso.',
      ],
    },
    included: {
      en: ['Full front and backyard makeovers', 'Move-in / move-out property clean-ups', 'Rental and investment property refreshes', 'Pergola and outdoor living areas', 'Planting and garden beds', 'Custom requests'],
      es: ['Remodelación completa de jardín delantero y trasero', 'Limpiezas de propiedad para mudanzas', 'Renovación de propiedades de renta e inversión', 'Pérgolas y áreas para vivir al aire libre', 'Plantas y jardineras', 'Proyectos a la medida'],
    },
    benefits: {
      en: ['One team for the whole project', 'Clear timeline and pricing', 'Big impact on home value', 'Before, during and after updates'],
      es: ['Un solo equipo para todo el proyecto', 'Tiempos y precios claros', 'Gran impacto en el valor de su casa', 'Le informamos antes, durante y después'],
    },
    faqs: [
      {
        q: { en: 'Can you get my yard ready before I list my home?', es: '¿Pueden arreglar mi jardín antes de poner mi casa a la venta?' },
        a: {
          en: 'Yes. Curb appeal matters to buyers, and we can quickly refresh lawns, beds and hardscape to help your home show its best.',
          es: 'Sí. La apariencia exterior es importante para los compradores, y podemos renovar rápidamente el pasto, las jardineras y el hardscape para que su casa luzca lo mejor posible.',
        },
      },
    ],
    related: ['landscape-design', 'hardscape', 'sod-installation'],
  },
];

export const getService = (id: string) => services.find((s) => s.id === id)!;
