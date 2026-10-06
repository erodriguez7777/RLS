// Customer testimonials, quoted from the current rodriguezlandscapingservice.com reviews page.
// English text is the customer's original wording (typos lightly corrected). Spanish is a translation.
type L = { en: string; es: string };

export interface Review {
  name: string;
  city: string;
  inlandEmpire: boolean;
  highlight: L; // short pull-quote for cards
  text: L;
  service: string; // service id most related to the review
}

export const reviews: Review[] = [
  {
    name: 'Ray G.',
    city: 'Colton, CA',
    inlandEmpire: true,
    service: 'irrigation',
    highlight: {
      en: 'His estimate was very reasonable… Miguel and his workers did an amazing job on my yard.',
      es: 'Su estimado fue muy razonable… Miguel y sus trabajadores hicieron un trabajo increíble en mi jardín.',
    },
    text: {
      en: 'Miguel was able to meet with me the very next day to discuss my project. His estimate was very reasonable and he was able to work with me on creating a new landscape design for my front and back yard. Miguel and his workers did an amazing job on my yard. They installed a new sprinkler system, added stones in the front and back yard to make better use of the space I had available. Today they put the grass down — I am very happy with the result. I would highly recommend Miguel and his guys for any project you need.',
      es: 'Miguel pudo reunirse conmigo al día siguiente para hablar de mi proyecto. Su estimado fue muy razonable y trabajó conmigo para crear un nuevo diseño para mi jardín delantero y trasero. Miguel y sus trabajadores hicieron un trabajo increíble en mi jardín. Instalaron un sistema de aspersores nuevo y agregaron piedras en el frente y atrás para aprovechar mejor el espacio. Hoy pusieron el pasto — estoy muy contento con el resultado. Recomiendo mucho a Miguel y a su equipo para cualquier proyecto.',
    },
  },
  {
    name: 'Aileen W.',
    city: 'Grand Terrace, CA',
    inlandEmpire: true,
    service: 'hardscape',
    highlight: {
      en: 'Miguel and his team was such a pleasure to work with! They worked efficiently and quickly!',
      es: '¡Fue un placer trabajar con Miguel y su equipo! ¡Trabajaron de forma eficiente y rápida!',
    },
    text: {
      en: 'We hired Miguel to take care of a big backyard project. We wanted to get rid of all the dirt and grass and change it all to concrete. Miguel and his team was such a pleasure to work with! He and his team worked efficiently and quickly! Not only are we impressed with the work they’ve done, we are now using them to maintain our front yard. We also recommend him and his team to everyone we know — we’ve already had a few great comments about how beautiful our backyard is now.',
      es: 'Contratamos a Miguel para un gran proyecto en el patio trasero. Queríamos quitar toda la tierra y el pasto y cambiarlo todo por concreto. ¡Fue un placer trabajar con Miguel y su equipo! ¡Trabajaron de forma eficiente y rápida! No solo estamos impresionados con su trabajo, ahora también les damos el mantenimiento de nuestro jardín delantero. Los recomendamos a todos los que conocemos — ya hemos recibido varios comentarios sobre lo bonito que quedó nuestro patio.',
    },
  },
  {
    name: 'Rick M.',
    city: 'Fontana, CA',
    inlandEmpire: true,
    service: 'sod-installation',
    highlight: {
      en: 'Miguel was very communicative through the process and explained in detail what was completed.',
      es: 'Miguel se comunicó muy bien durante todo el proceso y explicó en detalle lo que se completó.',
    },
    text: {
      en: 'Miguel was very communicative through the process and explained in detail what was completed at the end of the project. Looking forward to our next project together.',
      es: 'Miguel se comunicó muy bien durante todo el proceso y al final del proyecto explicó en detalle todo lo que se completó. Esperamos nuestro próximo proyecto juntos.',
    },
  },
  {
    name: 'Teresa R.',
    city: 'Thousand Oaks, CA',
    inlandEmpire: false,
    service: 'drought-tolerant',
    highlight: {
      en: 'I was pleasantly surprised by how reasonable they were… very happy with the end results.',
      es: 'Me sorprendió gratamente lo razonables que fueron… muy contentos con el resultado final.',
    },
    text: {
      en: 'They responded promptly to my texts and provided suggestions for designs. I was pleasantly surprised by how reasonable they were. Our front yard needed to be low maintenance for our tenants and we were very happy with the end results. We have hired this company to maintain the property. I recommend this company.',
      es: 'Respondieron rápidamente a mis mensajes y me dieron sugerencias de diseño. Me sorprendió gratamente lo razonables que fueron. Nuestro jardín delantero tenía que ser de bajo mantenimiento para nuestros inquilinos y quedamos muy contentos con el resultado. Contratamos a esta compañía para dar mantenimiento a la propiedad. Recomiendo esta compañía.',
    },
  },
  {
    name: 'James S.',
    city: 'Duarte, CA',
    inlandEmpire: false,
    service: 'hardscape',
    highlight: {
      en: 'He provided multiple options and various price points… extremely happy with the quality of work.',
      es: 'Nos dio varias opciones y diferentes precios… extremadamente contentos con la calidad del trabajo.',
    },
    text: {
      en: 'Originally we had issues with the dirt slipping, causing the retaining wall blocks to come down, and wanted to rework the area so that it was nicer and wouldn’t cause any safety issues while picking the fruit trees or with our children playing back there. After discussing our ideas and concerns with Miguel, he provided multiple options and various price points, and we came up with a plan. We allowed his team the freedom to do what they do and are extremely happy and satisfied with the quality of work and overall outcome of the project.',
      es: 'Teníamos problemas con la tierra que se deslizaba y hacía caer los bloques del muro de contención, y queríamos arreglar el área para que se viera mejor y fuera segura al recoger fruta de los árboles o cuando nuestros hijos jugaran ahí. Después de hablar de nuestras ideas y preocupaciones con Miguel, nos dio varias opciones y diferentes precios, y juntos hicimos un plan. Dejamos que su equipo hiciera su trabajo y estamos extremadamente contentos y satisfechos con la calidad y el resultado del proyecto.',
    },
  },
  {
    name: 'Randi M.',
    city: 'Northridge, CA',
    inlandEmpire: false,
    service: 'landscape-design',
    highlight: {
      en: 'They were very professional, provided great ideas, and the results were amazing.',
      es: 'Fueron muy profesionales, tuvieron excelentes ideas y los resultados fueron increíbles.',
    },
    text: {
      en: 'I highly recommend Rodriguez Landscaping — they were very professional, provided great ideas, and the results were amazing. Now it is so enjoyable to go in my yard and just sit there and look at the scenery. Thank you again.',
      es: 'Recomiendo mucho a Rodriguez Landscaping — fueron muy profesionales, tuvieron excelentes ideas y los resultados fueron increíbles. Ahora disfruto mucho salir a mi jardín, sentarme y ver el paisaje. Gracias otra vez.',
    },
  },
];
