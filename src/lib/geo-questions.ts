import { LEVELS, typeQuestions,Question } from "./types.d";

export // Preguntas de geografía con diferentes niveles de dificultad
const GeoArray: Question[] = [
  // NIVEL FÁCIL (60 preguntas)
  {
    question: "¿Cuál es el país más grande del mundo por territorio?",
    answers: ["China", "Estados Unidos", "Canadá", "Rusia"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Francia?",
    answers: ["Londres", "Berlín", "París", "Madrid"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué océano es el más grande del mundo?",
    answers: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra Egipto?",
    answers: ["Asia", "Europa", "África", "Oceanía"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de España?",
    answers: ["Barcelona", "Madrid", "Sevilla", "Valencia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país tiene forma de bota?",
    answers: ["Francia", "España", "Italia", "Portugal"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el continente más grande?",
    answers: ["América", "Europa", "África", "Asia"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Estados Unidos?",
    answers: ["Nueva York", "Washington D.C.", "Los Ángeles", "Chicago"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra Australia?",
    answers: ["Asia", "Europa", "Oceanía", "América"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el país más poblado del mundo?",
    answers: ["India", "Estados Unidos", "China", "Indonesia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Italia?",
    answers: ["Milán", "Venecia", "Nápoles", "Roma"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país es conocido como el país del sol naciente?",
    answers: ["China", "Corea del Sur", "Japón", "Vietnam"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la cordillera más larga del mundo?",
    answers: ["Los Andes", "Los Alpes", "Las Montañas Rocosas", "El Himalaya"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de México?",
    answers: ["Guadalajara", "Monterrey", "Ciudad de México", "Cancún"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país tiene la forma de un hexágono?",
    answers: ["Alemania", "Francia", "España", "Bélgica"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el desierto más grande del mundo?",
    answers: ["Desierto del Sahara", "Desierto de Gobi", "Desierto de Atacama", "Desierto de Kalahari"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Alemania?",
    answers: ["Múnich", "Berlín", "Hamburgo", "Frankfurt"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra la India?",
    answers: ["Asia", "África", "Europa", "Oceanía"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el país más pequeño del mundo?",
    answers: ["Mónaco", "San Marino", "Vaticano", "Liechtenstein"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Brasil?",
    answers: ["Río de Janeiro", "São Paulo", "Brasilia", "Salvador"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país está situado en la península ibérica junto a España?",
    answers: ["Francia", "Italia", "Portugal", "Marruecos"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el lago más grande de América?",
    answers: ["Lago Superior", "Lago Michigan", "Lago Titicaca", "Lago Maracaibo"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Japón?",
    answers: ["Osaka", "Kioto", "Tokio", "Yokohama"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país es conocido como la tierra de los canguros?",
    answers: ["Nueva Zelanda", "Sudáfrica", "Australia", "Indonesia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la montaña más alta del mundo?",
    answers: ["Monte Everest", "K2", "Monte Kilimanjaro", "Mont Blanc"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de China?",
    answers: ["Shanghái", "Hong Kong", "Pekín", "Cantón"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país tiene forma de bota?",
    answers: ["Grecia", "Portugal", "Italia", "Croacia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el océano más pequeño?",
    answers: ["Océano Índico", "Océano Ártico", "Océano Atlántico", "Mar Mediterráneo"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Argentina?",
    answers: ["Santiago", "Buenos Aires", "Montevideo", "Lima"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra Egipto?",
    answers: ["Asia", "Europa", "África", "Oceanía"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el país más grande de América del Sur?",
    answers: ["Argentina", "Colombia", "Brasil", "Perú"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Canadá?",
    answers: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país es una isla y también un continente?",
    answers: ["Nueva Zelanda", "Japón", "Madagascar", "Australia"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el río más caudaloso del mundo?",
    answers: ["Nilo", "Misisipi", "Amazonas", "Yangtsé"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Rusia?",
    answers: ["San Petersburgo", "Kiev", "Moscú", "Vladivostok"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país está situado al sur de Estados Unidos?",
    answers: ["Canadá", "Cuba", "México", "Puerto Rico"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Australia?",
    answers: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra Nigeria?",
    answers: ["Asia", "Europa", "África", "América"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el país más pequeño de América del Sur?",
    answers: ["Uruguay", "Surinam", "Guyana", "Ecuador"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Portugal?",
    answers: ["Oporto", "Lisboa", "Faro", "Coímbra"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país es conocido como la tierra de los fiordos?",
    answers: ["Suecia", "Finlandia", "Dinamarca", "Noruega"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es el lago más profundo del mundo?",
    answers: ["Lago Superior", "Lago Victoria", "Lago Baikal", "Mar Caspio"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Sudáfrica?",
    answers: ["Ciudad del Cabo", "Johannesburgo", "Pretoria", "Durban"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país está situado entre España y Francia?",
    answers: ["Portugal", "Andorra", "Mónaco", "Italia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Perú?",
    answers: ["Bogotá", "Santiago", "Lima", "Quito"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra Turquía?",
    answers: ["Asia y Europa", "África y Asia", "Europa y África", "Solo en Asia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Holanda (Países Bajos)?",
    answers: ["Rotterdam", "La Haya", "Utrecht", "Ámsterdam"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas en el mundo?",
    answers: ["Filipinas", "Indonesia", "Japón", "Suecia"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Colombia?",
    answers: ["Medellín", "Cali", "Bogotá", "Cartagena"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país es el más poblado de África?",
    answers: ["Egipto", "Etiopía", "Sudáfrica", "Nigeria"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Cuba?",
    answers: ["Santiago de Cuba", "La Habana", "Santa Clara", "Varadero"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra Arabia Saudita?",
    answers: ["Asia", "África", "Europa", "Oceanía"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Grecia?",
    answers: ["Atenas", "Tesalónica", "Patras", "Heraklion"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país es conocido como la tierra de los mil lagos?",
    answers: ["Suecia", "Noruega", "Finlandia", "Canadá"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Chile?",
    answers: ["Valparaíso", "Santiago", "Concepción", "Viña del Mar"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país está situado al este de España?",
    answers: ["Portugal", "Francia", "Italia", "Marruecos"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Suecia?",
    answers: ["Oslo", "Copenhague", "Helsinki", "Estocolmo"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿En qué continente se encuentra Marruecos?",
    answers: ["Europa", "Asia", "África", "América"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Irlanda?",
    answers: ["Belfast", "Cork", "Dublín", "Galway"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Qué país es el más grande de Centroamérica?",
    answers: ["Guatemala", "Nicaragua", "Panamá", "Costa Rica"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  {
    question: "¿Cuál es la capital de Dinamarca?",
    answers: ["Estocolmo", "Oslo", "Helsinki", "Copenhague"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.FACIL
  },
  
  // NIVEL NORMAL (60 preguntas)
  {
    question: "¿Qué país está dividido en 26 cantones?",
    answers: ["Austria", "Bélgica", "Suiza", "Liechtenstein"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Finlandia?",
    answers: ["Oslo", "Estocolmo", "Helsinki", "Copenhague"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué estrecho separa Europa de África?",
    answers: ["Estrecho de Bering", "Estrecho de Gibraltar", "Estrecho de Malaca", "Estrecho de Ormuz"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Nueva Zelanda?",
    answers: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país está situado entre Perú y Colombia?",
    answers: ["Brasil", "Bolivia", "Venezuela", "Ecuador"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Marruecos?",
    answers: ["Casablanca", "Marrakech", "Rabat", "Tánger"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras terrestres?",
    answers: ["Rusia", "China", "Brasil", "Francia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Hungría?",
    answers: ["Praga", "Viena", "Varsovia", "Budapest"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de café del mundo?",
    answers: ["Colombia", "Vietnam", "Brasil", "Etiopía"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Noruega?",
    answers: ["Estocolmo", "Oslo", "Copenhague", "Helsinki"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país está situado entre Francia y España?",
    answers: ["Portugal", "Italia", "Andorra", "Mónaco"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Turquía?",
    answers: ["Estambul", "Ankara", "Esmirna", "Antalya"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la forma de una bota?",
    answers: ["España", "Portugal", "Grecia", "Italia"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Egipto?",
    answers: ["El Cairo", "Alejandría", "Luxor", "Asuán"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de petróleo del mundo?",
    answers: ["Arabia Saudita", "Rusia", "Estados Unidos", "Irán"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Austria?",
    answers: ["Salzburgo", "Innsbruck", "Viena", "Graz"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de volcanes activos?",
    answers: ["Japón", "Indonesia", "Estados Unidos", "México"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Bélgica?",
    answers: ["Amberes", "Brujas", "Bruselas", "Gante"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor exportador de arroz del mundo?",
    answers: ["China", "India", "Tailandia", "Vietnam"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Polonia?",
    answers: ["Cracovia", "Varsovia", "Gdansk", "Wroclaw"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas?",
    answers: ["Filipinas", "Indonesia", "Japón", "Suecia"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Ucrania?",
    answers: ["Kiev", "Odesa", "Járkov", "Leópolis"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de vino del mundo?",
    answers: ["Francia", "Italia", "España", "Estados Unidos"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Rumania?",
    answers: ["Sofía", "Belgrado", "Bucarest", "Budapest"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de lagos?",
    answers: ["Canadá", "Rusia", "Estados Unidos", "Finlandia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Croacia?",
    answers: ["Zagreb", "Split", "Dubrovnik", "Rijeka"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de cacao del mundo?",
    answers: ["Brasil", "Ghana", "Costa de Marfil", "Nigeria"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Bulgaria?",
    answers: ["Sofía", "Varna", "Plovdiv", "Burgas"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos?",
    answers: ["Brasil", "Rusia", "Estados Unidos", "China"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Suiza?",
    answers: ["Zúrich", "Ginebra", "Berna", "Basilea"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de plata del mundo?",
    answers: ["China", "Perú", "México", "Chile"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de República Checa?",
    answers: ["Praga", "Brno", "Ostrava", "Pilsen"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de desiertos?",
    answers: ["China", "Australia", "Estados Unidos", "Rusia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Corea del Sur?",
    answers: ["Busan", "Incheon", "Seúl", "Daegu"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de oro del mundo?",
    answers: ["Sudáfrica", "Australia", "China", "Rusia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Israel?",
    answers: ["Tel Aviv", "Jerusalén", "Haifa", "Eilat"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de montañas?",
    answers: ["Nepal", "Suiza", "China", "Canadá"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Tailandia?",
    answers: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de diamantes del mundo?",
    answers: ["Sudáfrica", "Rusia", "Botsuana", "Australia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Irán?",
    answers: ["Teherán", "Isfahán", "Shiraz", "Tabriz"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de glaciares?",
    answers: ["Canadá", "Rusia", "Estados Unidos (Alaska)", "Islandia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Vietnam?",
    answers: ["Ho Chi Minh", "Hanói", "Da Nang", "Hue"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de caucho natural del mundo?",
    answers: ["Indonesia", "Malasia", "Tailandia", "Vietnam"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Pakistán?",
    answers: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos navegables?",
    answers: ["Brasil", "China", "Estados Unidos", "Rusia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Sudáfrica?",
    answers: ["Pretoria (administrativa), Ciudad del Cabo (legislativa) y Bloemfontein (judicial)", "Johannesburgo", "Durban", "Port Elizabeth"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de gas natural del mundo?",
    answers: ["Rusia", "Irán", "Qatar", "Estados Unidos"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Indonesia?",
    answers: ["Yakarta", "Bali", "Surabaya", "Bandung"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de parques nacionales?",
    answers: ["Estados Unidos", "Australia", "Brasil", "Canadá"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Nigeria?",
    answers: ["Lagos", "Abuja", "Kano", "Ibadan"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de trigo del mundo?",
    answers: ["Estados Unidos", "Rusia", "China", "India"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Filipinas?",
    answers: ["Cebú", "Davao", "Manila", "Quezon"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas climáticas?",
    answers: ["Rusia", "Brasil", "Estados Unidos", "China"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Malasia?",
    answers: ["Kuala Lumpur", "Penang", "Johor Bahru", "Ipoh"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país es el mayor productor de cobre del mundo?",
    answers: ["Perú", "Australia", "Chile", "China"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Argelia?",
    answers: ["Orán", "Argel", "Constantina", "Annaba"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de bosques?",
    answers: ["Brasil", "Canadá", "Rusia", "Estados Unidos"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  {
    question: "¿Cuál es la capital de Kazajistán?",
    answers: ["Almaty", "Astaná (Nur-Sultán)", "Shymkent", "Karaganda"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.NORMAL
  },
  
  // NIVEL DIFÍCIL (60 preguntas)
  {
    question: "¿Qué país está dividido en 47 prefecturas?",
    answers: ["China", "Corea del Sur", "Japón", "Tailandia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Eslovenia?",
    answers: ["Liubliana", "Zagreb", "Bratislava", "Praga"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué estrecho separa Asia de América?",
    answers: ["Estrecho de Bering", "Estrecho de Malaca", "Estrecho de Gibraltar", "Estrecho de Ormuz"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Lituania?",
    answers: ["Riga", "Tallin", "Vilna", "Varsovia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país está situado entre Argentina y Brasil?",
    answers: ["Bolivia", "Paraguay", "Uruguay", "Chile"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Túnez?",
    answers: ["Túnez", "Sfax", "Sousse", "Bizerte"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de idiomas oficiales?",
    answers: ["India", "Sudáfrica", "Suiza", "Bolivia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Eslovaquia?",
    answers: ["Praga", "Bratislava", "Budapest", "Viena"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de té del mundo?",
    answers: ["India", "Sri Lanka", "China", "Kenia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Estonia?",
    answers: ["Riga", "Vilna", "Tallin", "Helsinki"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país está situado entre Honduras y Costa Rica?",
    answers: ["El Salvador", "Guatemala", "Nicaragua", "Panamá"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Letonia?",
    answers: ["Tallin", "Vilna", "Riga", "Minsk"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas horarias?",
    answers: ["Rusia", "Estados Unidos", "Francia", "Reino Unido"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Uruguay?",
    answers: ["Montevideo", "Punta del Este", "Colonia del Sacramento", "Salto"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de uranio del mundo?",
    answers: ["Kazajistán", "Canadá", "Australia", "Rusia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Azerbaiyán?",
    answers: ["Tiflis", "Ereván", "Bakú", "Asjabad"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de patrimonio de la UNESCO?",
    answers: ["Francia", "España", "Italia", "China"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Luxemburgo?",
    answers: ["Luxemburgo", "Bruselas", "Esch-sur-Alzette", "Differdange"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de litio del mundo?",
    answers: ["Chile", "Australia", "Argentina", "China"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Jordania?",
    answers: ["Damasco", "Beirut", "Amán", "Jerusalén"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas habitadas?",
    answers: ["Filipinas", "Indonesia", "Japón", "Grecia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Bielorrusia?",
    answers: ["Minsk", "Kiev", "Vilna", "Riga"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de níquel del mundo?",
    answers: ["Rusia", "Indonesia", "Filipinas", "Australia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Georgia?",
    answers: ["Bakú", "Ereván", "Tiflis (Tbilisi)", "Ankara"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras terrestres?",
    answers: ["Rusia", "China", "Brasil", "Francia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Armenia?",
    answers: ["Bakú", "Ereván", "Tiflis", "Asjabad"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de cobalto del mundo?",
    answers: ["China", "Rusia", "República Democrática del Congo", "Australia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Chipre?",
    answers: ["Nicosia", "Lárnaca", "Limasol", "Pafos"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de volcanes activos?",
    answers: ["Japón", "Indonesia", "Estados Unidos", "México"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Albania?",
    answers: ["Tirana", "Durrës", "Vlorë", "Shkodër"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de bauxita del mundo?",
    answers: ["Jamaica", "Australia", "China", "Brasil"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Macedonia del Norte?",
    answers: ["Skopie", "Sofía", "Belgrado", "Tirana"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de lagos artificiales?",
    answers: ["Estados Unidos", "China", "India", "Rusia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Bosnia y Herzegovina?",
    answers: ["Sarajevo", "Zagreb", "Belgrado", "Podgorica"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de platino del mundo?",
    answers: ["Rusia", "Sudáfrica", "Zimbabwe", "Canadá"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Moldavia?",
    answers: ["Bucarest", "Kiev", "Chisinau", "Odesa"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas deshabitadas?",
    answers: ["Finlandia", "Noruega", "Suecia", "Canadá"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Montenegro?",
    answers: ["Podgorica", "Belgrado", "Tirana", "Sarajevo"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de zinc del mundo?",
    answers: ["China", "Australia", "Perú", "Estados Unidos"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Kirguistán?",
    answers: ["Astaná", "Taskent", "Biskek", "Dusambé"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos navegables?",
    answers: ["Brasil", "China", "Estados Unidos", "Rusia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Tayikistán?",
    answers: ["Biskek", "Taskent", "Dusambé", "Asjabad"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de gas natural del mundo?",
    answers: ["Rusia", "Irán", "Qatar", "Estados Unidos"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Turkmenistán?",
    answers: ["Biskek", "Taskent", "Dusambé", "Asjabad"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas climáticas?",
    answers: ["Rusia", "Brasil", "Estados Unidos", "China"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Uzbekistán?",
    answers: ["Biskek", "Taskent", "Dusambé", "Asjabad"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de cobre del mundo?",
    answers: ["Perú", "Australia", "Chile", "China"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Laos?",
    answers: ["Vientián", "Hanói", "Phnom Penh", "Bangkok"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de bosques?",
    answers: ["Brasil", "Canadá", "Rusia", "Estados Unidos"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Camboya?",
    answers: ["Vientián", "Hanói", "Phnom Penh", "Bangkok"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de caucho natural del mundo?",
    answers: ["Indonesia", "Malasia", "Tailandia", "Vietnam"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Myanmar (Birmania)?",
    answers: ["Rangún", "Naipyidó", "Mandalay", "Bangkok"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos navegables?",
    answers: ["Brasil", "China", "Estados Unidos", "Rusia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Mongolia?",
    answers: ["Ulán Bator", "Astana", "Biskek", "Irkutsk"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de gas natural del mundo?",
    answers: ["Rusia", "Irán", "Qatar", "Estados Unidos"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Nepal?",
    answers: ["Katmandú", "Thimphu", "Daca", "Nueva Delhi"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país tiene la mayor cantidad de parques nacionales?",
    answers: ["Estados Unidos", "Australia", "Brasil", "Canadá"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Bután?",
    answers: ["Katmandú", "Thimphu", "Daca", "Nueva Delhi"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Qué país es el mayor productor de trigo del mundo?",
    answers: ["Estados Unidos", "Rusia", "China", "India"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  {
    question: "¿Cuál es la capital de Sri Lanka?",
    answers: ["Colombo", "Sri Jayawardenepura Kotte", "Kandy", "Galle"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.DIFICIL
  },
  
  // NIVEL EXPERTO (60 preguntas)
  {
    question: "¿Qué país está dividido en 16 estados federados llamados 'Länder'?",
    answers: ["Austria", "Suiza", "Alemania", "Bélgica"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Liechtenstein?",
    answers: ["Vaduz", "Schaan", "Balzers", "Triesen"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué estrecho separa Tasmania de Australia continental?",
    answers: ["Estrecho de Torres", "Estrecho de Bass", "Estrecho de Cook", "Estrecho de Malaca"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Surinam?",
    answers: ["Georgetown", "Cayena", "Paramaribo", "Boa Vista"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país está situado entre Perú y Colombia?",
    answers: ["Brasil", "Bolivia", "Venezuela", "Ecuador"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Baréin?",
    answers: ["Manama", "Doha", "Abu Dabi", "Mascate"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras terrestres?",
    answers: ["Rusia", "China", "Brasil", "Francia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Brunéi?",
    answers: ["Bandar Seri Begawan", "Kuala Lumpur", "Yakarta", "Manila"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de nuez moscada del mundo?",
    answers: ["Indonesia", "India", "Granada", "Sri Lanka"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Malaui?",
    answers: ["Lusaka", "Harare", "Lilongüe", "Maputo"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país está situado entre Namibia y Mozambique?",
    answers: ["Botsuana", "Zambia", "Zimbabue", "Sudáfrica"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Gabón?",
    answers: ["Libreville", "Brazzaville", "Yaundé", "Malabo"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas horarias?",
    answers: ["Rusia", "Estados Unidos", "Francia", "Reino Unido"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Eritrea?",
    answers: ["Asmara", "Addis Abeba", "Yibuti", "Jartum"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de vainilla del mundo?",
    answers: ["Indonesia", "México", "Madagascar", "Tahití"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Yibuti?",
    answers: ["Asmara", "Addis Abeba", "Yibuti", "Jartum"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de patrimonio de la UNESCO?",
    answers: ["Francia", "España", "Italia", "China"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Comoras?",
    answers: ["Moroni", "Victoria", "Port Louis", "Antananarivo"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de litio del mundo?",
    answers: ["Chile", "Australia", "Argentina", "China"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Seychelles?",
    answers: ["Moroni", "Victoria", "Port Louis", "Antananarivo"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas habitadas?",
    answers: ["Filipinas", "Indonesia", "Japón", "Grecia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Mauricio?",
    answers: ["Moroni", "Victoria", "Port Louis", "Antananarivo"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de níquel del mundo?",
    answers: ["Rusia", "Indonesia", "Filipinas", "Australia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Madagascar?",
    answers: ["Moroni", "Victoria", "Port Louis", "Antananarivo"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras terrestres?",
    answers: ["Rusia", "China", "Brasil", "Francia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Lesoto?",
    answers: ["Maseru", "Mbabane", "Gaborone", "Pretoria"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de cobalto del mundo?",
    answers: ["China", "Rusia", "República Democrática del Congo", "Australia"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Suazilandia (Eswatini)?",
    answers: ["Maseru", "Mbabane", "Gaborone", "Pretoria"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de volcanes activos?",
    answers: ["Japón", "Indonesia", "Estados Unidos", "México"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Botsuana?",
    answers: ["Maseru", "Mbabane", "Gaborone", "Pretoria"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de bauxita del mundo?",
    answers: ["Jamaica", "Australia", "China", "Brasil"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Namibia?",
    answers: ["Windhoek", "Luanda", "Gaborone", "Pretoria"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de lagos artificiales?",
    answers: ["Estados Unidos", "China", "India", "Rusia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Zambia?",
    answers: ["Lusaka", "Harare", "Lilongüe", "Maputo"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de platino del mundo?",
    answers: ["Rusia", "Sudáfrica", "Zimbabwe", "Canadá"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Zimbabue?",
    answers: ["Lusaka", "Harare", "Lilongüe", "Maputo"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas deshabitadas?",
    answers: ["Finlandia", "Noruega", "Suecia", "Canadá"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Mozambique?",
    answers: ["Lusaka", "Harare", "Lilongüe", "Maputo"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de zinc del mundo?",
    answers: ["China", "Australia", "Perú", "Estados Unidos"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Angola?",
    answers: ["Luanda", "Windhoek", "Kinshasa", "Brazzaville"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos navegables?",
    answers: ["Brasil", "China", "Estados Unidos", "Rusia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de la República Democrática del Congo?",
    answers: ["Luanda", "Windhoek", "Kinshasa", "Brazzaville"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de gas natural del mundo?",
    answers: ["Rusia", "Irán", "Qatar", "Estados Unidos"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de la República del Congo?",
    answers: ["Luanda", "Windhoek", "Kinshasa", "Brazzaville"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas climáticas?",
    answers: ["Rusia", "Brasil", "Estados Unidos", "China"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Camerún?",
    answers: ["Yaundé", "Libreville", "Malabo", "Bangui"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de cobre del mundo?",
    answers: ["Perú", "Australia", "Chile", "China"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Guinea Ecuatorial?",
    answers: ["Yaundé", "Libreville", "Malabo", "Bangui"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de bosques?",
    answers: ["Brasil", "Canadá", "Rusia", "Estados Unidos"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de la República Centroafricana?",
    answers: ["Yaundé", "Libreville", "Malabo", "Bangui"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de caucho natural del mundo?",
    answers: ["Indonesia", "Malasia", "Tailandia", "Vietnam"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Chad?",
    answers: ["Yamena", "Jartum", "Niamey", "Bangui"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos navegables?",
    answers: ["Brasil", "China", "Estados Unidos", "Rusia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Sudán?",
    answers: ["Yamena", "Jartum", "Niamey", "Bangui"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de gas natural del mundo?",
    answers: ["Rusia", "Irán", "Qatar", "Estados Unidos"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Níger?",
    answers: ["Yamena", "Jartum", "Niamey", "Bangui"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de parques nacionales?",
    answers: ["Estados Unidos", "Australia", "Brasil", "Canadá"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Burkina Faso?",
    answers: ["Uagadugú", "Bamako", "Niamey", "Abiyán"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Qué país es el mayor productor de trigo del mundo?",
    answers: ["Estados Unidos", "Rusia", "China", "India"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  {
    question: "¿Cuál es la capital de Malí?",
    answers: ["Uagadugú", "Bamako", "Niamey", "Abiyán"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.EXPERTO
  },
  
  // NIVEL MAESTRO (30 preguntas)
  {
    question: "¿Qué país está dividido en 13 regiones administrativas y una zona metropolitana?",
    answers: ["Chile", "Perú", "Ecuador", "Colombia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Palaos?",
    answers: ["Melekeok", "Ngerulmud", "Koror", "Airai"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué estrecho separa la isla de Tierra del Fuego de la Patagonia continental?",
    answers: ["Estrecho de Magallanes", "Estrecho de Drake", "Canal Beagle", "Estrecho de Le Maire"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Nauru?",
    answers: ["Yaren", "Aiwo", "Meneng", "No tiene capital oficial"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país está situado entre Senegal y Sierra Leona?",
    answers: ["Guinea", "Guinea-Bissau", "Gambia", "Liberia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Tuvalu?",
    answers: ["Funafuti", "Vaiaku", "Alapi", "Senala"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de idiomas oficiales?",
    answers: ["India", "Sudáfrica", "Suiza", "Bolivia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Kiribati?",
    answers: ["Tarawa Sur", "Bairiki", "Betio", "Bonriki"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país es el mayor productor de clavo de olor del mundo?",
    answers: ["Indonesia", "Madagascar", "Tanzania", "Comoras"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de las Islas Marshall?",
    answers: ["Majuro", "Ebeye", "Kwajalein", "Jaluit"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país está situado entre Ghana y Benín?",
    answers: ["Burkina Faso", "Níger", "Togo", "Nigeria"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Micronesia?",
    answers: ["Kolonia", "Weno", "Palikir", "Tofol"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas horarias?",
    answers: ["Rusia", "Estados Unidos", "Francia", "Reino Unido"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Santo Tomé y Príncipe?",
    answers: ["Santo Tomé", "São Tomé", "Príncipe", "Neves"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país es el mayor productor de cardamomo del mundo?",
    answers: ["India", "Guatemala", "Nepal", "Indonesia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Antigua y Barbuda?",
    answers: ["Saint John's", "Codrington", "Falmouth", "Parham"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de patrimonio de la UNESCO?",
    answers: ["Francia", "España", "Italia", "China"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de San Cristóbal y Nieves?",
    answers: ["Basseterre", "Charlestown", "Sandy Point", "Dieppe Bay"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país es el mayor productor de azafrán del mundo?",
    answers: ["España", "Irán", "India", "Marruecos"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Dominica?",
    answers: ["Roseau", "Portsmouth", "Marigot", "Castle Bruce"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas habitadas?",
    answers: ["Filipinas", "Indonesia", "Japón", "Grecia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Santa Lucía?",
    answers: ["Castries", "Vieux Fort", "Soufrière", "Gros Islet"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país es el mayor productor de pimienta negra del mundo?",
    answers: ["India", "Vietnam", "Brasil", "Indonesia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de San Vicente y las Granadinas?",
    answers: ["Kingstown", "Georgetown", "Barrouallie", "Chateaubelair"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras terrestres?",
    answers: ["Rusia", "China", "Brasil", "Francia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Granada?",
    answers: ["Saint George's", "Gouyave", "Grenville", "Victoria"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país es el mayor productor de jengibre del mundo?",
    answers: ["China", "India", "Nigeria", "Nepal"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Barbados?",
    answers: ["Bridgetown", "Speightstown", "Holetown", "Oistins"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Qué país tiene la mayor cantidad de volcanes activos?",
    answers: ["Japón", "Indonesia", "Estados Unidos", "México"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  {
    question: "¿Cuál es la capital de Trinidad y Tobago?",
    answers: ["Puerto España", "San Fernando", "Arima", "Scarborough"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.MAESTRO
  },
  
  // NIVEL IMPOSIBLE (30 preguntas)
  {
    question: "¿Qué país está dividido en 27 unidades federativas y un distrito federal?",
    answers: ["México", "Brasil", "Argentina", "Venezuela"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de Niue?",
    answers: ["Alofi", "Hakupu", "Avatele", "Mutalau"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué estrecho separa la isla de Sumatra de la península de Malaca?",
    answers: ["Estrecho de Malaca", "Estrecho de Sunda", "Estrecho de Karimata", "Estrecho de Bangka"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de Tokelau?",
    answers: ["Atafu", "Nukunonu", "Fakaofo", "No tiene capital oficial"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país está situado entre Mauritania y Guinea-Bissau?",
    answers: ["Senegal", "Gambia", "Guinea", "Malí"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de las Islas Cook?",
    answers: ["Avarua", "Rarotonga", "Aitutaki", "Mangaia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país tiene la mayor cantidad de idiomas oficiales?",
    answers: ["India", "Sudáfrica", "Suiza", "Bolivia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de Wallis y Futuna?",
    answers: ["Mata-Utu", "Leava", "Alo", "Sigave"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país es el mayor productor de pistacho del mundo?",
    answers: ["Irán", "Estados Unidos", "Turquía", "Siria"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de la Isla de Navidad?",
    answers: ["Flying Fish Cove", "The Settlement", "West Island", "Kingston"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país está situado entre Etiopía y Tanzania?",
    answers: ["Somalia", "Uganda", "Kenia", "Sudán del Sur"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de las Islas Cocos (Keeling)?",
    answers: ["West Island", "Home Island", "Direction Island", "No tiene capital oficial"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas horarias?",
    answers: ["Rusia", "Estados Unidos", "Francia", "Reino Unido"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de la Isla Norfolk?",
    answers: ["Kingston", "Burnt Pine", "Cascade", "No tiene capital oficial"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país es el mayor productor de almendras del mundo?",
    answers: ["España", "Irán", "Turquía", "Estados Unidos"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de Pitcairn?",
    answers: ["Adamstown", "Kingston", "Edinburgh", "No tiene capital oficial"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país tiene la mayor cantidad de patrimonio de la UNESCO?",
    answers: ["Francia", "España", "Italia", "China"],
    correct: 3,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de Montserrat?",
    answers: ["Plymouth", "Brades", "Little Bay", "St. John's"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país es el mayor productor de avellanas del mundo?",
    answers: ["Italia", "España", "Turquía", "Estados Unidos"],
    correct: 2,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de Anguila?",
    answers: ["The Valley", "Sandy Ground", "East End", "West End"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas habitadas?",
    answers: ["Filipinas", "Indonesia", "Japón", "Grecia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de las Islas Turcas y Caicos?",
    answers: ["Cockburn Town", "Grand Turk", "Providenciales", "South Caicos"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país es el mayor productor de azafrán del mundo?",
    answers: ["España", "Irán", "India", "Marruecos"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de las Islas Vírgenes Británicas?",
    answers: ["Road Town", "The Settlement", "The Valley", "Cockburn Town"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras terrestres?",
    answers: ["Rusia", "China", "Brasil", "Francia"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de las Islas Caimán?",
    answers: ["George Town", "West Bay", "Bodden Town", "East End"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país es el mayor productor de quinua del mundo?",
    answers: ["Bolivia", "Perú", "Ecuador", "Colombia"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de las Islas Malvinas (Falkland)?",
    answers: ["Stanley", "Port Howard", "Fox Bay", "Darwin"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Qué país tiene la mayor cantidad de volcanes activos?",
    answers: ["Japón", "Indonesia", "Estados Unidos", "México"],
    correct: 1,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  },
  {
    question: "¿Cuál es la capital de Gibraltar?",
    answers: ["Gibraltar", "No tiene capital oficial", "La Línea", "Algeciras"],
    correct: 0,
    type: typeQuestions.GEO,
    level: LEVELS.IMPOSIBLE
  }
];