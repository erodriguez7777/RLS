type L = { en: string; es: string };

export interface City {
  slug: string;
  name: string;
  county: 'San Bernardino' | 'Riverside' | 'Los Angeles';
  // Local angle used to keep each city page specific.
  note: L;
  popular: string[]; // service ids to highlight
  nearby: string[]; // city slugs
}

export const cities: City[] = [
  {
    slug: 'san-bernardino',
    name: 'San Bernardino',
    county: 'San Bernardino',
    note: {
      en: 'From established neighborhoods near the foothills to newer homes across the valley floor, San Bernardino yards face long, hot summers and dry Santa Ana winds. We help homeowners keep lawns healthy, sprinklers efficient and dry brush under control.',
      es: 'Desde los vecindarios establecidos cerca de las montañas hasta las casas más nuevas del valle, los jardines de San Bernardino enfrentan veranos largos y calurosos y los vientos secos de Santa Ana. Ayudamos a los propietarios a mantener el pasto sano, el riego eficiente y la maleza seca bajo control.',
    },
    popular: ['lawn-maintenance', 'irrigation', 'tree-trimming', 'drought-tolerant'],
    nearby: ['highland', 'colton', 'rialto', 'loma-linda'],
  },
  {
    slug: 'highland',
    name: 'Highland & East Highlands Ranch',
    county: 'San Bernardino',
    note: {
      en: 'Highland and East Highlands Ranch homeowners take pride in well-kept yards, mature trees and community curb appeal. We provide dependable maintenance, tree trimming and full front and backyard upgrades that fit right in.',
      es: 'Los propietarios de Highland y East Highlands Ranch se enorgullecen de sus jardines bien cuidados, árboles maduros y la buena apariencia de su comunidad. Ofrecemos mantenimiento confiable, poda de árboles y remodelaciones completas de jardín que encajan perfectamente.',
    },
    popular: ['lawn-maintenance', 'landscape-design', 'tree-trimming', 'hardscape'],
    nearby: ['san-bernardino', 'redlands', 'loma-linda', 'yucaipa'],
  },
  {
    slug: 'redlands',
    name: 'Redlands',
    county: 'San Bernardino',
    note: {
      en: 'Redlands is known for its historic homes, tree-lined streets and citrus heritage. We design and maintain landscapes that complement classic architecture — while bringing modern water-wise irrigation to older properties.',
      es: 'Redlands es conocido por sus casas históricas, calles arboladas y su herencia de huertos de cítricos. Diseñamos y damos mantenimiento a jardines que complementan la arquitectura clásica — e instalamos riego moderno y eficiente en propiedades antiguas.',
    },
    popular: ['landscape-design', 'irrigation', 'tree-trimming', 'drought-tolerant'],
    nearby: ['loma-linda', 'highland', 'yucaipa', 'san-bernardino'],
  },
  {
    slug: 'loma-linda',
    name: 'Loma Linda',
    county: 'San Bernardino',
    note: {
      en: 'Loma Linda residents value healthy, peaceful outdoor spaces. We create low-maintenance gardens, efficient irrigation and inviting backyards that are easy to enjoy and easy to care for.',
      es: 'Los residentes de Loma Linda valoran los espacios exteriores sanos y tranquilos. Creamos jardines de bajo mantenimiento, riego eficiente y patios acogedores que son fáciles de disfrutar y de cuidar.',
    },
    popular: ['drought-tolerant', 'lawn-maintenance', 'irrigation', 'landscape-design'],
    nearby: ['redlands', 'colton', 'grand-terrace', 'san-bernardino'],
  },
  {
    slug: 'colton',
    name: 'Colton',
    county: 'San Bernardino',
    note: {
      en: 'We’ve completed new sprinkler systems, stone work and fresh sod for Colton homeowners — transforming front and back yards into spaces they’re proud of. Local, responsive and easy to schedule.',
      es: 'Hemos instalado sistemas de aspersores nuevos, trabajos de piedra y pasto nuevo para propietarios de Colton — transformando jardines delanteros y traseros en espacios de los que se sienten orgullosos. Locales, rápidos y fáciles de agendar.',
    },
    popular: ['irrigation', 'sod-installation', 'landscape-design', 'hardscape'],
    nearby: ['grand-terrace', 'loma-linda', 'rialto', 'san-bernardino'],
  },
  {
    slug: 'grand-terrace',
    name: 'Grand Terrace',
    county: 'San Bernardino',
    note: {
      en: 'Grand Terrace homeowners have trusted us with big backyard conversions — like replacing dirt and patchy grass with clean, usable concrete — followed by ongoing front yard maintenance.',
      es: 'Los propietarios de Grand Terrace nos han confiado grandes remodelaciones de patio — como cambiar tierra y pasto disparejo por concreto limpio y útil — y luego el mantenimiento continuo de su jardín delantero.',
    },
    popular: ['hardscape', 'lawn-maintenance', 'special-projects', 'drought-tolerant'],
    nearby: ['colton', 'loma-linda', 'riverside', 'san-bernardino'],
  },
  {
    slug: 'rialto',
    name: 'Rialto',
    county: 'San Bernardino',
    note: {
      en: 'Rialto families want yards that look good and stand up to everyday life. We install durable sod, efficient sprinklers and practical hardscape — at prices that respect your budget.',
      es: 'Las familias de Rialto quieren jardines que se vean bien y aguanten la vida diaria. Instalamos pasto resistente, aspersores eficientes y hardscape práctico — a precios que respetan su presupuesto.',
    },
    popular: ['sod-installation', 'irrigation', 'hardscape', 'lawn-maintenance'],
    nearby: ['fontana', 'bloomington', 'colton', 'san-bernardino'],
  },
  {
    slug: 'bloomington',
    name: 'Bloomington',
    county: 'San Bernardino',
    note: {
      en: 'Many Bloomington properties sit on larger lots, where weeds and dry brush can get out of hand fast. We handle weed abatement, lot clean-ups, tree trimming and landscape upgrades of every size.',
      es: 'Muchas propiedades en Bloomington están en terrenos grandes, donde la maleza y la hierba seca crecen rápido. Hacemos limpieza de maleza, limpieza de terrenos, poda de árboles y mejoras de jardín de todos los tamaños.',
    },
    popular: ['tree-trimming', 'special-projects', 'lawn-maintenance', 'drought-tolerant'],
    nearby: ['rialto', 'fontana', 'colton', 'riverside'],
  },
  {
    slug: 'fontana',
    name: 'Fontana',
    county: 'San Bernardino',
    note: {
      en: 'Fontana homeowners have trusted us with sprinkler and sod projects — and tell us what they appreciate most is clear communication from start to finish. Whether your home is in north Fontana or south of the 10, we’re close by.',
      es: 'Los propietarios de Fontana nos han confiado proyectos de aspersores y pasto — y nos dicen que lo que más aprecian es la comunicación clara de principio a fin. Ya sea que viva en el norte de Fontana o al sur de la 10, estamos cerca.',
    },
    popular: ['irrigation', 'sod-installation', 'lawn-maintenance', 'drought-tolerant'],
    nearby: ['rialto', 'bloomington', 'san-bernardino', 'riverside'],
  },
  {
    slug: 'yucaipa',
    name: 'Yucaipa',
    county: 'San Bernardino',
    note: {
      en: 'Yucaipa’s foothill setting means sloped yards, larger lots and seasonal fire concerns. We build retaining walls, clear brush and design hillside-friendly landscapes that look natural and hold up.',
      es: 'Por estar al pie de las montañas, Yucaipa tiene jardines en pendiente, terrenos grandes y riesgo de incendio en ciertas temporadas. Construimos muros de contención, limpiamos maleza y diseñamos jardines para laderas que se ven naturales y duran.',
    },
    popular: ['hardscape', 'tree-trimming', 'drought-tolerant', 'landscape-design'],
    nearby: ['redlands', 'highland', 'loma-linda', 'san-bernardino'],
  },
  {
    slug: 'riverside',
    name: 'Riverside',
    county: 'Riverside',
    note: {
      en: 'From historic neighborhoods to newer developments, Riverside homes come in every style — and so do their yards. We provide custom designs, drought-tolerant conversions and dependable maintenance across the city.',
      es: 'Desde vecindarios históricos hasta desarrollos nuevos, las casas de Riverside tienen todo tipo de estilos — y sus jardines también. Ofrecemos diseños personalizados, conversiones a jardines de bajo consumo y mantenimiento confiable en toda la ciudad.',
    },
    popular: ['landscape-design', 'drought-tolerant', 'lawn-maintenance', 'hardscape'],
    nearby: ['grand-terrace', 'corona', 'norco', 'colton'],
  },
  {
    slug: 'corona',
    name: 'Corona',
    county: 'Riverside',
    note: {
      en: 'Corona homeowners want polished, modern outdoor spaces. We design patios, paver walkways and water-wise front yards that boost curb appeal and keep maintenance simple.',
      es: 'Los propietarios de Corona quieren espacios exteriores modernos y bien terminados. Diseñamos patios, caminos de adoquín y jardines delanteros de bajo consumo que mejoran la apariencia de su casa y facilitan el mantenimiento.',
    },
    popular: ['hardscape', 'drought-tolerant', 'landscape-design', 'irrigation'],
    nearby: ['norco', 'riverside', 'pomona', 'grand-terrace'],
  },
  {
    slug: 'norco',
    name: 'Norco',
    county: 'Riverside',
    note: {
      en: 'Norco’s larger, rural-style lots call for practical, tough landscaping. We handle weed abatement, tree work, irrigation and yard upgrades built for space and everyday use.',
      es: 'Los terrenos grandes de estilo rural de Norco necesitan jardines prácticos y resistentes. Hacemos limpieza de maleza, poda de árboles, riego y mejoras de jardín hechas para el espacio y el uso diario.',
    },
    popular: ['tree-trimming', 'irrigation', 'special-projects', 'lawn-maintenance'],
    nearby: ['corona', 'riverside', 'pomona', 'fontana'],
  },
  {
    slug: 'pomona',
    name: 'Pomona',
    county: 'Los Angeles',
    note: {
      en: 'Pomona homeowners get the same licensed, insured service our Inland Empire customers rely on — from lawn care and sprinkler repair to complete front yard makeovers.',
      es: 'Los propietarios de Pomona reciben el mismo servicio con licencia y seguro en el que confían nuestros clientes del Inland Empire — desde el cuidado del pasto y la reparación de aspersores hasta remodelaciones completas del jardín delantero.',
    },
    popular: ['lawn-maintenance', 'irrigation', 'landscape-design', 'sod-installation'],
    nearby: ['la-verne', 'san-dimas', 'corona', 'norco'],
  },
  {
    slug: 'la-verne',
    name: 'La Verne',
    county: 'Los Angeles',
    note: {
      en: 'La Verne’s charming neighborhoods and foothill homes deserve landscapes to match. We design, install and maintain beautiful yards with efficient irrigation and plants suited to the area.',
      es: 'Los encantadores vecindarios y casas al pie de las montañas de La Verne merecen jardines a la altura. Diseñamos, instalamos y damos mantenimiento a jardines hermosos con riego eficiente y plantas adecuadas para la zona.',
    },
    popular: ['landscape-design', 'drought-tolerant', 'irrigation', 'tree-trimming'],
    nearby: ['san-dimas', 'pomona', 'corona', 'norco'],
  },
  {
    slug: 'san-dimas',
    name: 'San Dimas',
    county: 'Los Angeles',
    note: {
      en: 'San Dimas homeowners love outdoor living. We build patios and hardscape, refresh lawns and convert thirsty yards into drought-tolerant gardens that look great year-round.',
      es: 'A los propietarios de San Dimas les encanta vivir al aire libre. Construimos patios y hardscape, renovamos el pasto y convertimos jardines que consumen mucha agua en jardines de bajo consumo que se ven bien todo el año.',
    },
    popular: ['hardscape', 'drought-tolerant', 'sod-installation', 'lawn-maintenance'],
    nearby: ['la-verne', 'pomona', 'corona', 'norco'],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug)!;
