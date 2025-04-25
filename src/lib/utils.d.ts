import { Question, typeQuestions } from "./types.d";


const scienceArray: Question[] = [
  // Nivel 1: Básico
  {
    question: "¿Cuál es el elemento químico más abundante en el universo?",
    answers: ["Hidrógeno", "Helio", "Oxígeno", "Carbono"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué planeta es conocido como el planeta rojo?",
    answers: ["Venus", "Júpiter", "Marte", "Saturno"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es la unidad básica de la vida?",
    answers: ["Átomo", "Célula", "Molécula", "Tejido"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es la fórmula química del agua?",
    answers: ["H2O", "CO2", "O2", "H2O2"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué gas respiran los seres humanos para vivir?",
    answers: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Hidrógeno"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es el órgano más grande del cuerpo humano?",
    answers: ["Hígado", "Cerebro", "Pulmones", "Piel"],
    correct: 3,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué hueso es el más largo del cuerpo humano?",
    answers: ["Húmero", "Fémur", "Tibia", "Radio"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué gas necesitan las plantas para realizar la fotosíntesis?",
    answers: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué elemento tiene el símbolo químico 'Fe'?",
    answers: ["Flúor", "Hierro", "Fósforo", "Fermio"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué planeta es el más grande del sistema solar?",
    answers: ["Tierra", "Saturno", "Júpiter", "Neptuno"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 2: Intermedio bajo
  {
    question: "¿Qué vitamina se produce en la piel cuando nos exponemos al sol?",
    answers: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué gas compone mayoritariamente la atmósfera terrestre?",
    answers: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es la velocidad aproximada de la luz en el vacío?",
    answers: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué científico propuso la teoría de la relatividad?",
    answers: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es la partícula subatómica con carga positiva?",
    answers: ["Electrón", "Neutrón", "Protón", "Fotón"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué científico formuló la ley de la gravitación universal?",
    answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es el proceso por el cual las plantas fabrican su alimento?",
    answers: ["Respiración", "Fotosíntesis", "Digestión", "Fermentación"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de radiación tiene la longitud de onda más corta?",
    answers: ["Rayos X", "Luz visible", "Rayos gamma", "Ondas de radio"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es la unidad básica de la herencia?",
    answers: ["Célula", "Cromosoma", "Gen", "ADN"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley de Newton establece que 'a toda acción le corresponde una reacción igual y opuesta'?",
    answers: ["Primera ley", "Segunda ley", "Tercera ley", "Cuarta ley"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 3: Intermedio
  {
    question: "¿Qué elemento de la tabla periódica tiene el símbolo 'Au'?",
    answers: ["Plata", "Oro", "Aluminio", "Arsénico"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es el planeta más cercano al Sol?",
    answers: ["Venus", "Tierra", "Marte", "Mercurio"],
    correct: 3,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué parte del cerebro humano es responsable principalmente del equilibrio y la coordinación?",
    answers: ["Cerebelo", "Hipotálamo", "Lóbulo frontal", "Médula espinal"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué enfermedad se caracteriza por niveles elevados de glucosa en sangre?",
    answers: ["Hipertensión", "Diabetes", "Artritis", "Anemia"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de roca se forma por el enfriamiento y solidificación del magma?",
    answers: ["Sedimentaria", "Metamórfica", "Ígnea", "Calcárea"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es el metal más abundante en la corteza terrestre?",
    answers: ["Hierro", "Aluminio", "Cobre", "Zinc"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de animal es un murciélago?",
    answers: ["Ave", "Reptil", "Mamífero", "Anfibio"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué elemento químico tiene el número atómico 1?",
    answers: ["Helio", "Hidrógeno", "Litio", "Oxígeno"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué científico propuso la teoría de la selección natural?",
    answers: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Alexander Fleming"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué órgano del cuerpo humano produce la insulina?",
    answers: ["Hígado", "Riñón", "Páncreas", "Vesícula biliar"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 4: Intermedio alto
  {
    question: "¿Qué partícula subatómica tiene carga neutra y se encuentra en el núcleo del átomo?",
    answers: ["Electrón", "Protón", "Neutrón", "Positrón"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Cuál es la capa más externa de la atmósfera terrestre?",
    answers: ["Troposfera", "Estratosfera", "Mesosfera", "Exosfera"],
    correct: 3,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué compuesto químico tiene la fórmula C₆H₁₂O₆?",
    answers: ["Sacarosa", "Glucosa", "Fructosa", "Lactosa"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué científico descubrió la penicilina?",
    answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de ondas son las ondas sísmicas P?",
    answers: ["Ondas transversales", "Ondas longitudinales", "Ondas electromagnéticas", "Ondas gravitacionales"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley de la termodinámica establece que la energía no se crea ni se destruye, solo se transforma?",
    answers: ["Ley cero", "Primera ley", "Segunda ley", "Tercera ley"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué parte del ojo humano controla la cantidad de luz que entra?",
    answers: ["Córnea", "Retina", "Iris", "Cristalino"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de célula sanguínea es responsable de transportar oxígeno?",
    answers: ["Glóbulos blancos", "Glóbulos rojos", "Plaquetas", "Linfocitos"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno explica por qué el cielo es azul?",
    answers: ["Refracción de la luz", "Dispersión de Rayleigh", "Reflexión total", "Efecto Doppler"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de radiación es bloqueada por la capa de ozono?",
    answers: ["Rayos X", "Rayos gamma", "Rayos ultravioleta", "Rayos infrarrojos"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 5: Avanzado
  {
    question: "¿Qué teoría unifica la mecánica cuántica y la relatividad especial?",
    answers: ["Teoría de cuerdas", "Teoría cuántica de campos", "Teoría del todo", "Teoría M"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué enzima es responsable de copiar el ADN durante la replicación?",
    answers: ["ADN polimerasa", "ARN polimerasa", "Ligasa", "Helicasa"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué partícula es la portadora de la fuerza electromagnética?",
    answers: ["Gluón", "Fotón", "Bosón W", "Gravitón"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué efecto describe la dilatación del tiempo a velocidades cercanas a la luz?",
    answers: ["Efecto Doppler", "Efecto fotoeléctrico", "Efecto relativista", "Efecto Compton"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué compuesto es el principal responsable del adelgazamiento de la capa de ozono?",
    answers: ["Dióxido de carbono", "Metano", "Clorofluorocarbonos", "Óxido nitroso"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de enlace químico se forma por compartición de electrones?",
    answers: ["Iónico", "Covalente", "Metálico", "Puente de hidrógeno"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley de Kepler establece que las órbitas de los planetas son elípticas?",
    answers: ["Primera ley", "Segunda ley", "Tercera ley", "Cuarta ley"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué hormona regula los niveles de calcio en la sangre?",
    answers: ["Insulina", "Tiroxina", "Calcitonina", "Adrenalina"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno cuántico describe la correlación entre partículas separadas espacialmente?",
    answers: ["Superposición", "Entrelazamiento cuántico", "Dualidad onda-partícula", "Principio de incertidumbre"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué parte del cerebro es responsable de la memoria a largo plazo?",
    answers: ["Hipocampo", "Amígdala", "Cerebelo", "Tálamo"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 6: Muy avanzado
  {
    question: "¿Qué teorema matemático demuestra que existen limitaciones inherentes a todo sistema axiomático?",
    answers: ["Teorema de Pitágoras", "Teorema de incompletitud de Gödel", "Teorema del límite central", "Teorema de Fermat"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué proceso celular convierte la glucosa en piruvato?",
    answers: ["Ciclo de Krebs", "Glucólisis", "Fosforilación oxidativa", "Fermentación láctica"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué partícula subatómica está compuesta por tres quarks?",
    answers: ["Mesón", "Leptón", "Barión", "Bosón"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué efecto cuántico explica cómo las partículas pueden atravesar barreras energéticas?",
    answers: ["Efecto túnel", "Efecto Casimir", "Efecto Zeeman", "Efecto Hall"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué compuesto orgánico tiene la fórmula C₈H₁₀N₄O₂?",
    answers: ["Adrenalina", "Cafeína", "Nicotina", "Morfina"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de radiación tiene la mayor capacidad de penetración?",
    answers: ["Alfa", "Beta", "Gamma", "Neutrones"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley termodinámica establece que la entropía del universo siempre aumenta?",
    answers: ["Ley cero", "Primera ley", "Segunda ley", "Tercera ley"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué molécula es la base del código genético?",
    answers: ["ARN", "ADN", "Proteína", "Lípido"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno astronómico ocurre cuando un objeto celeste entra en la sombra de otro?",
    answers: ["Ocultación", "Tránsito", "Eclipse", "Conjunción"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué científico propuso el principio de incertidumbre en mecánica cuántica?",
    answers: ["Niels Bohr", "Werner Heisenberg", "Erwin Schrödinger", "Max Planck"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 7: Experto
  {
    question: "¿Qué ecuación describe la relación entre masa y energía?",
    answers: ["F=ma", "E=mc²", "E=hf", "PV=nRT"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué proceso geológico forma las rocas metamórficas?",
    answers: ["Erosión", "Sedimentación", "Metamorfismo", "Cristalización"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de reacción química libera energía?",
    answers: ["Endotérmica", "Exotérmica", "Redox", "Ácido-base"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué estructura celular contiene el material genético en eucariotas?",
    answers: ["Mitocondria", "Ribosoma", "Núcleo", "Aparato de Golgi"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno explica la expansión acelerada del universo?",
    answers: ["Materia oscura", "Energía oscura", "Radiación cósmica de fondo", "Inflación cósmica"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de enlace se forma entre moléculas de agua?",
    answers: ["Iónico", "Covalente", "Metálico", "Puente de hidrógeno"],
    correct: 3,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley de la física establece que la energía total de un sistema aislado permanece constante?",
    answers: ["Ley de conservación de la energía", "Ley de conservación del momento", "Ley de conservación de la masa", "Ley de conservación de la carga"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué proceso celular produce ATP en presencia de oxígeno?",
    answers: ["Glucólisis", "Fermentación", "Respiración aeróbica", "Fotosíntesis"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué teoría explica la formación del sistema solar?",
    answers: ["Teoría del Big Bang", "Teoría nebular", "Teoría de la panspermia", "Teoría de la relatividad"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de radiación electromagnética tiene la frecuencia más alta?",
    answers: ["Rayos X", "Rayos gamma", "Luz ultravioleta", "Microondas"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 8: Muy experto
  {
    question: "¿Qué partícula es su propia antipartícula?",
    answers: ["Electrón", "Protón", "Fotón", "Neutrón"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué enzima cataliza la transcripción del ADN a ARN?",
    answers: ["ADN polimerasa", "ARN polimerasa", "Ligasa", "Transcriptasa inversa"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué teoría unifica las cuatro fuerzas fundamentales de la naturaleza?",
    answers: ["Teoría de cuerdas", "Teoría del todo", "Modelo estándar", "Teoría de la gran unificación"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno cuántico describe la capacidad de una partícula para existir en múltiples estados simultáneamente?",
    answers: ["Entrelazamiento", "Superposición", "Dualidad onda-partícula", "Efecto túnel"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué compuesto químico es el principal componente del smog fotoquímico?",
    answers: ["Dióxido de azufre", "Monóxido de carbono", "Ozono troposférico", "Metano"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley de la física establece que la fuerza entre dos cargas eléctricas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia?",
    answers: ["Ley de Ohm", "Ley de Coulomb", "Ley de Ampère", "Ley de Faraday"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué proceso geológico ocurre en los límites divergentes de placas tectónicas?",
    answers: ["Subducción", "Colisión continental", "Expansión del fondo oceánico", "Transformación"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de estrella se formará después de que el Sol agote su combustible nuclear?",
    answers: ["Supernova", "Enana blanca", "Agujero negro", "Estrella de neutrones"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ciclo biogeoquímico describe el movimiento del nitrógeno entre la atmósfera, los seres vivos y el suelo?",
    answers: ["Ciclo del carbono", "Ciclo del nitrógeno", "Ciclo del agua", "Ciclo del fósforo"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué teoría matemática estudia las propiedades de los objetos que permanecen invariantes bajo transformaciones continuas?",
    answers: ["Cálculo", "Álgebra", "Topología", "Geometría euclidiana"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 9: Especialista
  {
    question: "¿Qué principio de la mecánica cuántica establece que no se pueden conocer simultáneamente la posición y el momento de una partícula con precisión arbitraria?",
    answers: ["Principio de exclusión de Pauli", "Principio de incertidumbre de Heisenberg", "Principio de complementariedad de Bohr", "Principio de correspondencia"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué proceso celular elimina selectivamente orgánulos dañados o innecesarios?",
    answers: ["Apoptosis", "Autofagia", "Necrosis", "Fagocitosis"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué teorema de la física establece que a cada simetría continua le corresponde una ley de conservación?",
    answers: ["Teorema de Noether", "Teorema de Bell", "Teorema de Bernoulli", "Teorema de Bayes"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de radiación es emitida cuando un núcleo atómico expulsa un electrón?",
    answers: ["Radiación alfa", "Radiación beta", "Radiación gamma", "Radiación de neutrones"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué compuesto es el principal responsable de la acidificación de los océanos?",
    answers: ["Dióxido de carbono", "Óxido de nitrógeno", "Dióxido de azufre", "Metano"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno astronómico ocurre cuando la Luna está completamente dentro de la sombra de la Tierra?",
    answers: ["Eclipse solar total", "Eclipse solar parcial", "Eclipse lunar total", "Eclipse lunar parcial"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de reacción nuclear libera energía al combinar núcleos ligeros?",
    answers: ["Fisión nuclear", "Fusión nuclear", "Decaimiento radiactivo", "Captura de neutrones"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley de la termodinámica establece que es imposible alcanzar el cero absoluto?",
    answers: ["Ley cero", "Primera ley", "Segunda ley", "Tercera ley"],
    correct: 3,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué tipo de enlace químico se forma por la atracción entre iones de carga opuesta?",
    answers: ["Covalente", "Iónico", "Metálico", "Puente de hidrógeno"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué estructura del cerebro conecta los dos hemisferios cerebrales?",
    answers: ["Tálamo", "Hipotálamo", "Cuerpo calloso", "Cerebelo"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  
  // Nivel 10: Súper especialista
  {
    question: "¿Qué partícula subatómica es la responsable de la fuerza nuclear fuerte?",
    answers: ["Fotón", "Gluón", "Bosón W", "Gravitón"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué proceso celular repara el ADN dañado por radiación ultravioleta?",
    answers: ["Replicación", "Transcripción", "Reparación por escisión de nucleótidos", "Traducción"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué teoría matemática describe el comportamiento de sistemas dinámicos altamente sensibles a las condiciones iniciales?",
    answers: ["Teoría de juegos", "Teoría del caos", "Teoría de grafos", "Teoría de números"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno cuántico describe la aparición espontánea de partículas virtuales en el vacío?",
    answers: ["Fluctuaciones cuánticas", "Efecto Casimir", "Condensado de Bose-Einstein", "Radiación de Hawking"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué compuesto químico es el principal neurotransmisor inhibitorio en el sistema nervioso central?",
    answers: ["Dopamina", "Serotonina", "GABA", "Glutamato"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué ley de la física establece que la aceleración de un objeto es directamente proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa?",
    answers: ["Primera ley de Newton", "Segunda ley de Newton", "Tercera ley de Newton", "Ley de la gravitación universal"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué estructura celular es responsable de la producción de ATP en las células eucariotas?",
    answers: ["Ribosoma", "Retículo endoplasmático", "Mitocondria", "Aparato de Golgi"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué fenómeno astronómico se produce cuando un cuerpo celeste entra en la atmósfera terrestre?",
    answers: ["Aurora boreal", "Lluvia de meteoros", "Eclipse", "Ocultación"],
    correct: 1,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué teoría cosmológica propone que el universo se expande y contrae cíclicamente?",
    answers: ["Teoría del Big Bang", "Teoría del estado estacionario", "Teoría del Big Bounce", "Teoría inflacionaria"],
    correct: 2,
    type: typeQuestions.SCIENCE,
  },
  {
    question: "¿Qué elemento químico tiene el mayor número atómico en la tabla periódica natural?",
    answers: ["Uranio", "Plutonio", "Torio", "Radio"],
    correct: 0,
    type: typeQuestions.SCIENCE,
  }
]

const GeoArray: Question[] = [
  // Nivel 1: Básico - Capitales y países conocidos
  {
    question: "¿Cuál es la capital de España?",
    answers: ["Barcelona", "Valencia", "Madrid", "Sevilla"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Francia?",
    answers: ["Lyon", "Marsella", "Niza", "París"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Italia?",
    answers: ["Roma", "Milán", "Venecia", "Florencia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Reino Unido?",
    answers: ["Manchester", "Liverpool", "Londres", "Edimburgo"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Estados Unidos?",
    answers: ["Nueva York", "Washington D.C.", "Los Ángeles", "Chicago"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Japón?",
    answers: ["Tokio", "Osaka", "Kioto", "Hiroshima"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de China?",
    answers: ["Shanghái", "Hong Kong", "Pekín", "Cantón"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Australia?",
    answers: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Brasil?",
    answers: ["Río de Janeiro", "São Paulo", "Brasilia", "Salvador"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Canadá?",
    answers: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 1: Básico - Continentes y océanos
  {
    question: "¿Cuál es el continente más grande del mundo?",
    answers: ["América", "África", "Europa", "Asia"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    answers: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el continente más pequeño del mundo?",
    answers: ["Europa", "Oceanía", "Australia", "Antártida"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el país más grande del mundo por superficie?",
    answers: ["China", "Estados Unidos", "Canadá", "Rusia"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el país más poblado del mundo?",
    answers: ["India", "China", "Estados Unidos", "Indonesia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿En qué continente se encuentra Egipto?",
    answers: ["África", "Asia", "Europa", "Medio Oriente"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene forma de bota?",
    answers: ["España", "Portugal", "Grecia", "Italia"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el desierto más grande del mundo?",
    answers: ["Desierto de Gobi", "Desierto de Kalahari", "Desierto del Sahara", "Desierto de Atacama"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es conocido como 'el país de los mil lagos'?",
    answers: ["Suecia", "Noruega", "Finlandia", "Canadá"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 2: Básico-Intermedio - Más capitales y geografía física
  {
    question: "¿Cuál es la capital de México?",
    answers: ["Guadalajara", "Monterrey", "Cancún", "Ciudad de México"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Argentina?",
    answers: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Sudáfrica?",
    answers: ["Ciudad del Cabo", "Johannesburgo", "Pretoria", "Durban"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Rusia?",
    answers: ["San Petersburgo", "Moscú", "Kiev", "Vladivostok"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de India?",
    answers: ["Mumbai", "Calcuta", "Nueva Delhi", "Bangalore"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la montaña más alta del mundo?",
    answers: ["Monte Kilimanjaro", "Monte Everest", "K2", "Mont Blanc"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué río pasa por París?",
    answers: ["Támesis", "Rin", "Danubio", "Sena"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿En qué país se encuentra la ciudad de Marrakech?",
    answers: ["Argelia", "Túnez", "Marruecos", "Egipto"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el lago más grande de América del Norte?",
    answers: ["Lago Superior", "Lago Michigan", "Lago Hurón", "Lago Erie"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la forma de un hexágono?",
    answers: ["Bélgica", "Francia", "Suiza", "Polonia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  
  // Nivel 2: Básico-Intermedio - Más geografía física y política
  {
    question: "¿Qué estrecho separa Europa de África?",
    answers: ["Estrecho de Gibraltar", "Estrecho de Bósforo", "Estrecho de Dardanelos", "Estrecho de Mesina"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Portugal?",
    answers: ["Oporto", "Lisboa", "Faro", "Coímbra"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Grecia?",
    answers: ["Atenas", "Tesalónica", "Patras", "Heraklion"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Egipto?",
    answers: ["Alejandría", "Luxor", "El Cairo", "Asuán"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Turquía?",
    answers: ["Estambul", "Ankara", "Esmirna", "Antalya"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es el más pequeño del mundo?",
    answers: ["Mónaco", "San Marino", "Liechtenstein", "Ciudad del Vaticano"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué cordillera separa Europa de Asia?",
    answers: ["Alpes", "Pirineos", "Urales", "Cárpatos"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿En qué país se encuentra la ciudad de Sídney?",
    answers: ["Nueva Zelanda", "Australia", "Indonesia", "Filipinas"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el segundo río más largo del mundo?",
    answers: ["Amazonas", "Nilo", "Yangtsé", "Misisipi-Misuri"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país está entre Francia y España?",
    answers: ["Portugal", "Andorra", "Mónaco", "Italia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  
  // Nivel 3: Intermedio - Capitales menos conocidas y geografía más específica
  {
    question: "¿Cuál es la capital de Marruecos?",
    answers: ["Casablanca", "Marrakech", "Rabat", "Tánger"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Suecia?",
    answers: ["Estocolmo", "Gotemburgo", "Malmö", "Uppsala"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Noruega?",
    answers: ["Bergen", "Oslo", "Trondheim", "Stavanger"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Dinamarca?",
    answers: ["Aarhus", "Odense", "Aalborg", "Copenhague"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Finlandia?",
    answers: ["Helsinki", "Tampere", "Turku", "Espoo"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Irlanda?",
    answers: ["Cork", "Galway", "Dublín", "Belfast"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Polonia?",
    answers: ["Cracovia", "Varsovia", "Gdansk", "Wroclaw"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Hungría?",
    answers: ["Budapest", "Debrecen", "Szeged", "Miskolc"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de República Checa?",
    answers: ["Brno", "Praga", "Ostrava", "Pilsen"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Austria?",
    answers: ["Salzburgo", "Innsbruck", "Graz", "Viena"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  
  // Nivel 3: Intermedio - Más geografía física y política
  {
    question: "¿Qué país tiene la mayor cantidad de islas en el mundo?",
    answers: ["Filipinas", "Indonesia", "Japón", "Suecia"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es el segundo más grande de Sudamérica?",
    answers: ["Argentina", "Brasil", "Colombia", "Perú"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué mar se encuentra entre Europa y África?",
    answers: ["Mar Mediterráneo", "Mar Negro", "Mar Rojo", "Mar Caspio"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene frontera con 14 países, más que cualquier otro?",
    answers: ["Rusia", "China", "Brasil", "Alemania"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el punto más bajo de la Tierra?",
    answers: ["Valle de la Muerte", "Mar Muerto", "Fosa de las Marianas", "Depresión del Danakil"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país está completamente rodeado por Italia?",
    answers: ["Mónaco", "San Marino", "Liechtenstein", "Ciudad del Vaticano"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es el lago más profundo del mundo?",
    answers: ["Lago Superior", "Lago Tanganica", "Lago Baikal", "Lago Victoria"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la forma de una bota?",
    answers: ["Italia", "Portugal", "Grecia", "Croacia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué río atraviesa la ciudad de Londres?",
    answers: ["Sena", "Rin", "Támesis", "Danubio"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es conocido como 'la tierra de los fiordos'?",
    answers: ["Suecia", "Dinamarca", "Islandia", "Noruega"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  
  // Nivel 4: Intermedio-Avanzado - Capitales menos conocidas
  {
    question: "¿Cuál es la capital de Croacia?",
    answers: ["Zagreb", "Split", "Dubrovnik", "Rijeka"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Eslovenia?",
    answers: ["Maribor", "Liubliana", "Celje", "Koper"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Eslovaquia?",
    answers: ["Košice", "Bratislava", "Prešov", "Žilina"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Serbia?",
    answers: ["Belgrado", "Novi Sad", "Niš", "Kragujevac"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Bulgaria?",
    answers: ["Varna", "Plovdiv", "Burgas", "Sofía"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Rumania?",
    answers: ["Cluj-Napoca", "Timișoara", "Bucarest", "Iași"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Ucrania?",
    answers: ["Kiev", "Járkov", "Odesa", "Dnipró"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Bielorrusia?",
    answers: ["Gomel", "Minsk", "Brest", "Vitebsk"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Lituania?",
    answers: ["Kaunas", "Vilna", "Klaipėda", "Šiauliai"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Letonia?",
    answers: ["Riga", "Daugavpils", "Liepāja", "Jūrmala"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  
  // Nivel 4: Intermedio-Avanzado - Geografía física y política más específica
  {
    question: "¿Qué país tiene la mayor línea costera del mundo?",
    answers: ["Rusia", "Canadá", "Australia", "Indonesia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país está dividido en 26 cantones?",
    answers: ["Austria", "Bélgica", "Suiza", "Liechtenstein"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué estrecho separa Asia de América del Norte?",
    answers: ["Estrecho de Bering", "Estrecho de Malaca", "Estrecho de Gibraltar", "Estrecho de Ormuz"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es el mayor productor de café del mundo?",
    answers: ["Colombia", "Vietnam", "Brasil", "Etiopía"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país está formado por más de 17,000 islas?",
    answers: ["Filipinas", "Japón", "Indonesia", "Maldivas"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué río forma parte de la frontera entre Estados Unidos y México?",
    answers: ["Río Colorado", "Río Misisipi", "Río Grande", "Río Columbia"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la densidad de población más alta del mundo?",
    answers: ["India", "Japón", "Mónaco", "Singapur"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es el mayor exportador de diamantes del mundo?",
    answers: ["Sudáfrica", "Rusia", "Botsuana", "Australia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de volcanes activos?",
    answers: ["Japón", "Indonesia", "Estados Unidos", "Italia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es el mayor productor de petróleo del mundo?",
    answers: ["Arabia Saudita", "Rusia", "Estados Unidos", "Irán"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 5: Avanzado - Capitales de países menos conocidos
  {
    question: "¿Cuál es la capital de Estonia?",
    answers: ["Tartu", "Tallin", "Narva", "Pärnu"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Moldavia?",
    answers: ["Chisináu", "Tiraspol", "Bălți", "Cahul"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Albania?",
    answers: ["Durrës", "Vlorë", "Tirana", "Shkodër"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Macedonia del Norte?",
    answers: ["Bitola", "Skopie", "Kumanovo", "Ohrid"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Montenegro?",
    answers: ["Podgorica", "Nikšić", "Budva", "Kotor"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Bosnia y Herzegovina?",
    answers: ["Mostar", "Banja Luka", "Tuzla", "Sarajevo"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Kazajistán?",
    answers: ["Almaty", "Astaná", "Shymkent", "Karaganda"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Uzbekistán?",
    answers: ["Samarcanda", "Taskent", "Bujará", "Andijan"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Turkmenistán?",
    answers: ["Asjabad", "Mary", "Türkmenabat", "Daşoguz"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Kirguistán?",
    answers: ["Osh", "Biskek", "Jalal-Abad", "Naryn"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  
  // Nivel 5: Avanzado - Geografía física y política más específica
  {
    question: "¿Qué país tiene el punto más alto de África?",
    answers: ["Kenia", "Tanzania", "Etiopía", "Marruecos"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de lagos naturales del mundo?",
    answers: ["Canadá", "Rusia", "Estados Unidos", "Finlandia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es el mayor productor de cacao del mundo?",
    answers: ["Ghana", "Costa de Marfil", "Nigeria", "Brasil"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de patrimonio mundial de la UNESCO?",
    answers: ["Francia", "España", "China", "Italia"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras terrestres?",
    answers: ["Rusia", "China", "Brasil", "Francia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país es el mayor productor de vino del mundo?",
    answers: ["Francia", "Italia", "España", "Estados Unidos"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas habitadas?",
    answers: ["Indonesia", "Filipinas", "Suecia", "Grecia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de zonas horarias?",
    answers: ["Rusia", "Estados Unidos", "Francia", "Reino Unido"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de glaciares fuera de las regiones polares?",
    answers: ["Canadá", "Noruega", "Islandia", "Pakistán"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de aves?",
    answers: ["Brasil", "Colombia", "Indonesia", "Perú"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  
  // Nivel 6: Muy avanzado - Capitales de países menos conocidos
  {
    question: "¿Cuál es la capital de Tayikistán?",
    answers: ["Dusambé", "Juyand", "Kulob", "Qurghonteppa"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Armenia?",
    answers: ["Gyumri", "Vanadzor", "Ereván", "Vagharshapat"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Azerbaiyán?",
    answers: ["Ganja", "Sumqayit", "Bakú", "Mingachevir"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Georgia?",
    answers: ["Batumi", "Tiflis", "Kutaisi", "Rustavi"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Jordania?",
    answers: ["Amán", "Zarqa", "Irbid", "Aqaba"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Líbano?",
    answers: ["Trípoli", "Sidón", "Tiro", "Beirut"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Siria?",
    answers: ["Alepo", "Damasco", "Homs", "Latakia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Irak?",
    answers: ["Bagdad", "Basora", "Mosul", "Erbil"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Kuwait?",
    answers: ["Al Ahmadi", "Hawalli", "Kuwait", "Al Farwaniyah"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Baréin?",
    answers: ["Manama", "Riffa", "Muharraq", "Al Muharraq"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  
  // Nivel 6: Muy avanzado - Geografía física y política más específica
  {
    question: "¿Qué país tiene el punto más bajo de África?",
    answers: ["Egipto", "Yibuti", "Etiopía", "Kenia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de sitios naturales declarados Patrimonio de la Humanidad?",
    answers: ["Australia", "China", "Estados Unidos", "Brasil"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de idiomas oficiales?",
    answers: ["India", "Sudáfrica", "Bolivia", "Suiza"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de reservas de litio del mundo?",
    answers: ["Chile", "Argentina", "Bolivia", "Australia"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de arrecifes de coral?",
    answers: ["Australia", "Indonesia", "Filipinas", "Maldivas"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de volcanes activos en Europa?",
    answers: ["Italia", "Islandia", "Grecia", "España"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos navegables?",
    answers: ["Brasil", "Rusia", "Estados Unidos", "China"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de mamíferos?",
    answers: ["Brasil", "Indonesia", "México", "Australia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas deshabitadas?",
    answers: ["Noruega", "Finlandia", "Suecia", "Canadá"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 7: Especialista - Capitales de países menos conocidos
  {
    question: "¿Cuál es la capital de Qatar?",
    answers: ["Doha", "Al Rayyan", "Al Wakrah", "Al Khor"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Omán?",
    answers: ["Salalah", "Sohar", "Mascate", "Sur"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Yemen?",
    answers: ["Adén", "Saná", "Taiz", "Al Hudaydah"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Eritrea?",
    answers: ["Asmara", "Keren", "Massawa", "Assab"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Yibuti?",
    answers: ["Ali Sabieh", "Tadjoura", "Yibuti", "Obock"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Somalia?",
    answers: ["Hargeisa", "Kismayo", "Mogadiscio", "Berbera"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Etiopía?",
    answers: ["Adís Abeba", "Dire Dawa", "Gondar", "Mekele"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Sudán?",
    answers: ["Port Sudan", "Jartum", "Omdurman", "Nyala"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Sudán del Sur?",
    answers: ["Malakal", "Wau", "Yuba", "Bor"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Chad?",
    answers: ["Moundou", "Sarh", "Yamena", "Abéché"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 7: Especialista - Geografía física y política más específica
  {
    question: "¿Qué país tiene la mayor cantidad de lagos artificiales?",
    answers: ["Estados Unidos", "China", "India", "Rusia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas artificiales?",
    answers: ["Emiratos Árabes Unidos", "China", "Japón", "Países Bajos"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de fronteras disputadas?",
    answers: ["India", "China", "Rusia", "Israel"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de territorios de ultramar?",
    answers: ["Reino Unido", "Francia", "Estados Unidos", "Países Bajos"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de áreas protegidas marinas?",
    answers: ["Australia", "Estados Unidos", "Francia", "Reino Unido"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies endémicas?",
    answers: ["Australia", "Madagascar", "Indonesia", "Brasil"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de sitios arqueológicos?",
    answers: ["Egipto", "Grecia", "Italia", "México"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de bosques tropicales?",
    answers: ["Brasil", "Indonesia", "República Democrática del Congo", "Colombia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de desiertos?",
    answers: ["China", "Australia", "Irán", "Mongolia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de ríos subterráneos?",
    answers: ["México", "Filipinas", "Vietnam", "China"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  
  // Nivel 8: Muy especialista - Capitales de países menos conocidos
  {
    question: "¿Cuál es la capital de República Centroafricana?",
    answers: ["Bangui", "Bimbo", "Berberati", "Carnot"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Níger?",
    answers: ["Zinder", "Maradi", "Niamey", "Tahoua"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Malí?",
    answers: ["Sikasso", "Bamako", "Mopti", "Gao"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Mauritania?",
    answers: ["Nuakchot", "Nuadibú", "Rosso", "Zouérat"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Burkina Faso?",
    answers: ["Bobo-Dioulasso", "Koudougou", "Uagadugú", "Banfora"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Guinea?",
    answers: ["Kankan", "Nzérékoré", "Kindia", "Conakry"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Sierra Leona?",
    answers: ["Freetown", "Bo", "Kenema", "Makeni"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Liberia?",
    answers: ["Buchanan", "Monrovia", "Gbarnga", "Harper"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Costa de Marfil?",
    answers: ["Abiyán", "Bouaké", "Yamusukro", "Korhogo"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Ghana?",
    answers: ["Kumasi", "Tamale", "Acra", "Sekondi-Takoradi"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 8: Muy especialista - Geografía física y política más específica
  {
    question: "¿Qué país tiene la mayor cantidad de géiseres activos?",
    answers: ["Estados Unidos", "Islandia", "Nueva Zelanda", "Rusia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de cuevas de piedra caliza?",
    answers: ["China", "Vietnam", "Tailandia", "Malasia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de islas volcánicas?",
    answers: ["Indonesia", "Japón", "Filipinas", "Islandia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de deltas fluviales?",
    answers: ["India", "Bangladesh", "China", "Vietnam"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de manglares?",
    answers: ["Indonesia", "Brasil", "Australia", "Nigeria"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de reptiles?",
    answers: ["Australia", "Brasil", "México", "Indonesia"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de anfibios?",
    answers: ["Brasil", "Colombia", "Ecuador", "Perú"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de peces de agua dulce?",
    answers: ["Brasil", "China", "Estados Unidos", "Indonesia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de mariposas?",
    answers: ["Brasil", "Colombia", "Perú", "Indonesia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de orquídeas?",
    answers: ["Colombia", "Ecuador", "Brasil", "Perú"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  
  // Nivel 9: Súper especialista - Capitales de países menos conocidos
  {
    question: "¿Cuál es la capital de Togo?",
    answers: ["Sokodé", "Kara", "Lomé", "Kpalimé"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Benín?",
    answers: ["Cotonú", "Porto Novo", "Parakou", "Abomey"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Gabón?",
    answers: ["Libreville", "Port-Gentil", "Franceville", "Oyem"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Guinea Ecuatorial?",
    answers: ["Bata", "Ebebiyín", "Malabo", "Mongomo"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Santo Tomé y Príncipe?",
    answers: ["Santo Tomé", "Neves", "Santana", "Trindade"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Camerún?",
    answers: ["Duala", "Yaundé", "Garoua", "Bamenda"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Nigeria?",
    answers: ["Lagos", "Abuya", "Kano", "Ibadan"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Gambia?",
    answers: ["Banjul", "Serekunda", "Brikama", "Bakau"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Guinea-Bisáu?",
    answers: ["Gabú", "Bafatá", "Bisáu", "Bolama"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Senegal?",
    answers: ["Saint-Louis", "Thiès", "Dakar", "Kaolack"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 9: Súper especialista - Geografía física y política más específica
  {
    question: "¿Qué país tiene la mayor cantidad de especies de cactus?",
    answers: ["México", "Estados Unidos", "Perú", "Chile"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de hongos?",
    answers: ["China", "Brasil", "Estados Unidos", "Rusia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de líquenes?",
    answers: ["Rusia", "Canadá", "Noruega", "Finlandia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de musgos?",
    answers: ["Brasil", "Colombia", "Indonesia", "China"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de helechos?",
    answers: ["Colombia", "Ecuador", "Brasil", "Indonesia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de palmeras?",
    answers: ["Brasil", "Colombia", "Indonesia", "Madagascar"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de bambú?",
    answers: ["China", "India", "Japón", "Brasil"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de coníferas?",
    answers: ["Canadá", "Rusia", "China", "Estados Unidos"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de árboles?",
    answers: ["Brasil", "Colombia", "Indonesia", "China"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de plantas carnívoras?",
    answers: ["Brasil", "Australia", "Indonesia", "Estados Unidos"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  
  // Nivel 10: Experto absoluto - Capitales de países menos conocidos
  {
    question: "¿Cuál es la capital de Cabo Verde?",
    answers: ["Mindelo", "Praia", "Assomada", "Santa Maria"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Comoras?",
    answers: ["Moroni", "Mutsamudu", "Fomboni", "Domoni"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Seychelles?",
    answers: ["Victoria", "Anse Boileau", "Beau Vallon", "Takamaka"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Maldivas?",
    answers: ["Addu", "Fuvahmulah", "Malé", "Kulhudhuffushi"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Mauricio?",
    answers: ["Curepipe", "Port Louis", "Quatre Bornes", "Vacoas"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Burundi?",
    answers: ["Gitega", "Buyumbura", "Ngozi", "Rumonge"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Ruanda?",
    answers: ["Butare", "Kigali", "Gisenyi", "Ruhengeri"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Uganda?",
    answers: ["Kampala", "Entebbe", "Jinja", "Gulu"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Kenia?",
    answers: ["Mombasa", "Kisumu", "Nairobi", "Nakuru"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Tanzania?",
    answers: ["Dar es Salaam", "Dodoma", "Mwanza", "Arusha"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  
  // Nivel 10: Experto absoluto - Geografía física y política más específica
  {
    question: "¿Qué país tiene la mayor cantidad de especies de insectos?",
    answers: ["Brasil", "Indonesia", "Colombia", "Australia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de arañas?",
    answers: ["Brasil", "Australia", "Colombia", "Indonesia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de escorpiones?",
    answers: ["México", "Brasil", "Australia", "India"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de serpientes?",
    answers: ["Australia", "Brasil", "India", "Indonesia"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de lagartos?",
    answers: ["Australia", "México", "Brasil", "Indonesia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de tortugas?",
    answers: ["Australia", "Brasil", "México", "Indonesia"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de cocodrilos?",
    answers: ["Australia", "Brasil", "Indonesia", "India"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de aves rapaces?",
    answers: ["Colombia", "Brasil", "Perú", "Indonesia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de colibríes?",
    answers: ["Colombia", "Ecuador", "Brasil", "Perú"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de murciélagos?",
    answers: ["Indonesia", "Brasil", "Colombia", "México"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  
  // Nivel 10: Experto absoluto - Más capitales y geografía específica
  {
    question: "¿Cuál es la capital de Mozambique?",
    answers: ["Beira", "Nampula", "Maputo", "Matola"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Zimbabue?",
    answers: ["Bulawayo", "Harare", "Mutare", "Gweru"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Zambia?",
    answers: ["Kitwe", "Ndola", "Lusaka", "Kabwe"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Malaui?",
    answers: ["Lilongüe", "Blantyre", "Mzuzu", "Zomba"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Botsuana?",
    answers: ["Francistown", "Gaborone", "Maun", "Serowe"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Namibia?",
    answers: ["Walvis Bay", "Swakopmund", "Windhoek", "Rundu"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Angola?",
    answers: ["Huambo", "Lubango", "Luanda", "Benguela"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de República Democrática del Congo?",
    answers: ["Lubumbashi", "Kisangani", "Kinshasa", "Mbuji-Mayi"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Congo?",
    answers: ["Pointe-Noire", "Brazzaville", "Dolisie", "Nkayi"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Lesoto?",
    answers: ["Maseru", "Teyateyaneng", "Mafeteng", "Leribe"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  
  // Nivel 10: Experto absoluto - Más geografía específica
  {
    question: "¿Qué país tiene la mayor cantidad de especies de primates?",
    answers: ["Brasil", "Indonesia", "Madagascar", "República Democrática del Congo"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de felinos?",
    answers: ["Brasil", "India", "Indonesia", "México"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de antílopes?",
    answers: ["Kenia", "Tanzania", "Sudáfrica", "Namibia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de canguros?",
    answers: ["Australia", "Nueva Zelanda", "Papúa Nueva Guinea", "Indonesia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de lémures?",
    answers: ["Madagascar", "Comoras", "Mozambique", "Tanzania"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de camellos?",
    answers: ["Mongolia", "Arabia Saudita", "Egipto", "Australia"],
    correct: 3,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de osos?",
    answers: ["Canadá", "Rusia", "Estados Unidos", "China"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de lobos?",
    answers: ["Canadá", "Rusia", "Estados Unidos", "Mongolia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de zorros?",
    answers: ["Estados Unidos", "Canadá", "Rusia", "Argentina"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de delfines de río?",
    answers: ["Brasil", "India", "China", "Bangladesh"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  
  // Nivel 10: Experto absoluto - Últimas capitales y geografía específica
  {
    question: "¿Cuál es la capital de Suazilandia (Eswatini)?",
    answers: ["Manzini", "Mbabane", "Lobamba", "Big Bend"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Bután?",
    answers: ["Timbu", "Paro", "Punakha", "Phuentsholing"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Nepal?",
    answers: ["Pokhara", "Katmandú", "Lalitpur", "Bhaktapur"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Bangladés?",
    answers: ["Chittagong", "Khulna", "Daca", "Rajshahi"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Sri Lanka?",
    answers: ["Colombo", "Kandy", "Sri Jayawardenepura Kotte", "Galle"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Maldivas?",
    answers: ["Malé", "Addu", "Fuvahmulah", "Kulhudhuffushi"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Brunéi?",
    answers: ["Kuala Belait", "Bandar Seri Begawan", "Tutong", "Seria"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Timor Oriental?",
    answers: ["Dili", "Baucau", "Maliana", "Suai"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Papúa Nueva Guinea?",
    answers: ["Lae", "Mount Hagen", "Port Moresby", "Madang"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Cuál es la capital de Islas Salomón?",
    answers: ["Auki", "Gizo", "Honiara", "Kirakira"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  
  // Nivel 10: Experto absoluto - Últimas preguntas de geografía específica
  {
    question: "¿Qué país tiene la mayor cantidad de especies de mariposas monarca?",
    answers: ["México", "Estados Unidos", "Canadá", "Brasil"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de pingüinos?",
    answers: ["Argentina", "Chile", "Australia", "Nueva Zelanda"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de ballenas?",
    answers: ["Noruega", "Japón", "Australia", "Canadá"],
    correct: 2,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de delfines?",
    answers: ["Australia", "Brasil", "Estados Unidos", "Sudáfrica"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de tiburones?",
    answers: ["Australia", "Estados Unidos", "Sudáfrica", "Brasil"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de corales?",
    answers: ["Australia", "Indonesia", "Filipinas", "Maldivas"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de medusas?",
    answers: ["Japón", "Australia", "Filipinas", "Indonesia"],
    correct: 1,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de estrellas de mar?",
    answers: ["Filipinas", "Australia", "Indonesia", "Japón"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de pulpos?",
    answers: ["Japón", "Australia", "Filipinas", "Indonesia"],
    correct: 0,
    type: typeQuestions.GEO,
  },
  {
    question: "¿Qué país tiene la mayor cantidad de especies de calamares?",
    answers: ["Japón", "Australia", "Filipinas", "Indonesia"],
    correct: 0,
    type: typeQuestions.GEO,
  }
]

const historyArray: Question[] = [
  // Nivel 1: Básico - Historia Antigua
  {
    question: "¿Quién fue el primer emperador de Roma?",
    answers: ["Julio César", "Augusto", "Nerón", "Calígula"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué civilización construyó las pirámides de Giza?",
    answers: ["Egipcia", "Griega", "Romana", "Mesopotámica"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué famoso filósofo griego fue maestro de Alejandro Magno?",
    answers: ["Sócrates", "Platón", "Aristóteles", "Pitágoras"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿En qué año cayó el Imperio Romano de Occidente?",
    answers: ["395 d.C.", "476 d.C.", "527 d.C.", "632 d.C."],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué civilización desarrolló el primer sistema de escritura conocido como cuneiforme?",
    answers: ["Egipcia", "Sumeria", "Fenicia", "China"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 1: Básico - Edad Media y Renacimiento
  {
    question: "¿Qué enfermedad devastó Europa en el siglo XIV y mató a un tercio de su población?",
    answers: ["Viruela", "Peste Negra", "Gripe Española", "Cólera"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Quién pintó la Mona Lisa?",
    answers: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Donatello"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué evento marcó el fin de la Edad Media?",
    answers: ["La caída de Constantinopla", "El descubrimiento de América", "La Revolución Francesa", "La Reforma Protestante"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Quién fue el líder militar y político que conquistó gran parte de Asia en el siglo XIII?",
    answers: ["Atila", "Gengis Kan", "Saladino", "Tamerlán"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué inventor alemán creó la imprenta de tipos móviles en el siglo XV?",
    answers: ["Johannes Gutenberg", "Galileo Galilei", "Nicolás Copérnico", "Isaac Newton"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 2: Básico-Intermedio - Descubrimientos y Colonización
  {
    question: "¿Quién fue el navegante que completó la primera vuelta al mundo (aunque murió durante el viaje)?",
    answers: ["Cristóbal Colón", "Fernando de Magallanes", "Vasco da Gama", "James Cook"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué país europeo colonizó Brasil?",
    answers: ["España", "Francia", "Portugal", "Inglaterra"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿En qué año llegó Cristóbal Colón a América?",
    answers: ["1492", "1500", "1521", "1453"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué civilización gobernaba gran parte de México cuando llegaron los españoles?",
    answers: ["Incas", "Mayas", "Aztecas", "Olmecas"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué país europeo estableció las primeras colonias permanentes en Norteamérica?",
    answers: ["España", "Inglaterra", "Francia", "Holanda"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 2: Básico-Intermedio - Revoluciones
  {
    question: "¿En qué año comenzó la Revolución Francesa?",
    answers: ["1776", "1789", "1804", "1812"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué documento proclamó la independencia de las colonias americanas de Gran Bretaña?",
    answers: ["La Constitución de los Estados Unidos", "La Declaración de Independencia", "La Carta Magna", "Los Artículos de la Confederación"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Quién fue el primer presidente de Estados Unidos?",
    answers: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué revolución comenzó en Inglaterra en el siglo XVIII y transformó los procesos de producción?",
    answers: ["Revolución Francesa", "Revolución Rusa", "Revolución Industrial", "Revolución Agrícola"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Quién lideró la independencia de gran parte de Sudamérica de España?",
    answers: ["Simón Bolívar", "José de San Martín", "Miguel Hidalgo", "Bernardo O'Higgins"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 3: Intermedio - Siglo XIX
  {
    question: "¿Qué guerra civil ocurrió en Estados Unidos entre 1861 y 1865?",
    answers: ["Guerra de Secesión", "Guerra de Independencia", "Guerra de 1812", "Guerra Mexicano-Estadounidense"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Quién fue el presidente estadounidense que emitió la Proclamación de Emancipación?",
    answers: ["Thomas Jefferson", "Andrew Jackson", "Abraham Lincoln", "Ulysses S. Grant"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué país europeo unificó sus estados en 1871 bajo el liderazgo de Otto von Bismarck?",
    answers: ["Francia", "Italia", "Alemania", "Austria"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué guerra enfrentó a Estados Unidos contra España en 1898?",
    answers: ["Guerra Hispano-Estadounidense", "Guerra de Cuba", "Guerra del Pacífico", "Guerra de los Diez Años"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué emperador francés fue derrotado en la Batalla de Waterloo?",
    answers: ["Luis XVI", "Napoleón Bonaparte", "Carlos X", "Luis Felipe I"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 3: Intermedio - Primera Guerra Mundial
  {
    question: "¿Qué evento desencadenó el inicio de la Primera Guerra Mundial?",
    answers: ["La invasión de Polonia", "El asesinato del archiduque Francisco Fernando", "El hundimiento del Lusitania", "La Revolución Rusa"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿En qué año comenzó la Primera Guerra Mundial?",
    answers: ["1905", "1914", "1917", "1919"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
    answers: ["Tratado de Versalles", "Tratado de París", "Tratado de Brest-Litovsk", "Tratado de Londres"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué país no participó en la Primera Guerra Mundial?",
    answers: ["Estados Unidos", "Rusia", "España", "Italia"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué nueva arma se utilizó por primera vez de manera masiva en la Primera Guerra Mundial?",
    answers: ["Tanques", "Aviones", "Gas venenoso", "Submarinos"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 4: Intermedio-Avanzado - Período de Entreguerras y Segunda Guerra Mundial
  {
    question: "¿Qué crisis económica mundial comenzó en 1929?",
    answers: ["La Gran Depresión", "El Pánico de 1873", "La Crisis del Petróleo", "La Burbuja de los Tulipanes"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Quién llegó al poder en Alemania en 1933?",
    answers: ["Otto von Bismarck", "Kaiser Wilhelm II", "Adolf Hitler", "Konrad Adenauer"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué país invadió Polonia en septiembre de 1939, iniciando la Segunda Guerra Mundial?",
    answers: ["Unión Soviética", "Alemania", "Italia", "Japón"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué batalla naval marcó un punto de inflexión en la guerra del Pacífico en 1942?",
    answers: ["Batalla de Midway", "Batalla del Mar de Coral", "Batalla de Leyte", "Batalla de Okinawa"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué operación militar aliada del 6 de junio de 1944 es conocida como el Día D?",
    answers: ["Operación Market Garden", "Operación Barbarroja", "Operación Overlord", "Operación Torch"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 4: Intermedio-Avanzado - Guerra Fría
  {
    question: "¿Qué estructura se construyó en 1961 para dividir Berlín?",
    answers: ["La Línea Maginot", "El Muro de Berlín", "La Cortina de Hierro", "El Telón de Acero"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué crisis de 1962 casi provoca una guerra nuclear entre EE.UU. y la URSS?",
    answers: ["Crisis de Berlín", "Crisis de Suez", "Crisis de los misiles de Cuba", "Crisis de Corea"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué político soviético implementó las políticas de 'glasnost' y 'perestroika'?",
    answers: ["Leonid Brezhnev", "Nikita Khrushchev", "Mijaíl Gorbachov", "Yuri Andropov"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿En qué año cayó el Muro de Berlín?",
    answers: ["1985", "1989", "1991", "1993"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué guerra enfrentó a Estados Unidos contra Vietnam?",
    answers: ["Guerra de Corea", "Guerra de Vietnam", "Guerra del Golfo", "Guerra de Afganistán"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 5: Avanzado - Historia Antigua Específica
  {
    question: "¿Qué faraón egipcio promovió el culto a un solo dios, Atón?",
    answers: ["Ramsés II", "Tutankamón", "Akenatón", "Keops"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué batalla del 490 a.C. fue una victoria decisiva de los griegos sobre los persas?",
    answers: ["Batalla de Maratón", "Batalla de las Termópilas", "Batalla de Salamina", "Batalla de Platea"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué emperador romano legalizó el cristianismo con el Edicto de Milán?",
    answers: ["Nerón", "Trajano", "Constantino", "Teodosio"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué dinastía gobernó China durante el período de mayor expansión territorial?",
    answers: ["Ming", "Tang", "Song", "Qing"],
    correct: 3,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué líder cartaginés cruzó los Alpes con elefantes para atacar Roma?",
    answers: ["Aníbal", "Asdrúbal", "Amílcar", "Magón"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 5: Avanzado - Edad Media Específica
  {
    question: "¿Qué rey inglés firmó la Carta Magna en 1215?",
    answers: ["Ricardo Corazón de León", "Juan sin Tierra", "Eduardo I", "Enrique II"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué imperio cayó cuando los otomanos conquistaron Constantinopla en 1453?",
    answers: ["Imperio Romano de Occidente", "Imperio Bizantino", "Imperio Sasánida", "Imperio Carolingio"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué conflicto entre Inglaterra y Francia duró de 1337 a 1453?",
    answers: ["Guerra de los Cien Años", "Guerra de las Dos Rosas", "Guerra de Sucesión Española", "Guerra de los Siete Años"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué líder vikingo estableció el primer asentamiento en Groenlandia?",
    answers: ["Leif Erikson", "Erik el Rojo", "Ragnar Lothbrok", "Canuto el Grande"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué universidad europea, fundada en 1088, es considerada la más antigua del mundo occidental?",
    answers: ["Universidad de Oxford", "Universidad de París", "Universidad de Bolonia", "Universidad de Salamanca"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 6: Muy avanzado - Renacimiento y Era de los Descubrimientos
  {
    question: "¿Qué familia italiana dominó la política y cultura de Florencia durante el Renacimiento?",
    answers: ["Borgia", "Sforza", "Médici", "Visconti"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué navegante portugués fue el primero en llegar a la India por mar?",
    answers: ["Bartolomé Díaz", "Vasco da Gama", "Pedro Álvares Cabral", "Fernando de Magallanes"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué tratado de 1494 dividió el Nuevo Mundo entre España y Portugal?",
    answers: ["Tratado de Tordesillas", "Tratado de Madrid", "Tratado de Utrecht", "Tratado de Alcáçovas"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué explorador español conquistó el Imperio Azteca?",
    answers: ["Francisco Pizarro", "Hernán Cortés", "Vasco Núñez de Balboa", "Juan Ponce de León"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué científico publicó 'De revolutionibus orbium coelestium' proponiendo un modelo heliocéntrico?",
    answers: ["Galileo Galilei", "Johannes Kepler", "Nicolás Copérnico", "Tycho Brahe"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 6: Muy avanzado - Revoluciones y Siglo XIX
  {
    question: "¿Qué documento estableció los derechos del hombre durante la Revolución Francesa?",
    answers: ["Declaración de los Derechos del Hombre y del Ciudadano", "Constitución del Año I", "El Contrato Social", "Los Cuadernos de Quejas"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué batalla de 1815 marcó la derrota definitiva de Napoleón Bonaparte?",
    answers: ["Batalla de Austerlitz", "Batalla de Leipzig", "Batalla de Waterloo", "Batalla de Trafalgar"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué político italiano fue fundamental en la unificación de Italia?",
    answers: ["Giuseppe Garibaldi", "Camillo Benso, Conde de Cavour", "Víctor Manuel II", "Giuseppe Mazzini"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué guerra enfrentó a Rusia contra una alianza de Francia, Gran Bretaña y el Imperio Otomano?",
    answers: ["Guerra de los Siete Años", "Guerra de Crimea", "Guerra Ruso-Japonesa", "Guerra Ruso-Turca"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué enmienda a la Constitución de EE.UU. abolió la esclavitud?",
    answers: ["Decimotercera Enmienda", "Decimocuarta Enmienda", "Decimoquinta Enmienda", "Duodécima Enmienda"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 7: Especialista - Guerras Mundiales
  {
    question: "¿Qué país fue el primero en utilizar gas venenoso en la Primera Guerra Mundial?",
    answers: ["Francia", "Rusia", "Alemania", "Reino Unido"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué tratado firmado en 1919 obligó a Alemania a aceptar la responsabilidad por la Primera Guerra Mundial?",
    answers: ["Tratado de Versalles", "Tratado de Saint-Germain", "Tratado de Trianon", "Tratado de Sèvres"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué batalla aérea de 1940 fue un intento fallido de Alemania de ganar superioridad aérea sobre el Reino Unido?",
    answers: ["Batalla de Inglaterra", "Batalla del Atlántico", "Batalla de Dunkerque", "Batalla del Ruhr"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué conferencia de 1945 entre los líderes aliados reorganizó Europa después de la Segunda Guerra Mundial?",
    answers: ["Conferencia de Yalta", "Conferencia de Potsdam", "Conferencia de Teherán", "Conferencia de Casablanca"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué código secreto japonés fue descifrado por los estadounidenses durante la Segunda Guerra Mundial?",
    answers: ["Código Enigma", "Código Púrpura", "Código Naranja", "Código Samurái"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 7: Especialista - Guerra Fría y Siglo XX
  {
    question: "¿Qué organización militar se formó en 1949 como alianza contra la Unión Soviética?",
    answers: ["OTAN", "Pacto de Varsovia", "SEATO", "ANZUS"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué crisis de 1956 involucró a Israel, Francia y Reino Unido contra Egipto?",
    answers: ["Crisis de Berlín", "Crisis de Suez", "Crisis de los misiles de Cuba", "Crisis del petróleo"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué programa espacial estadounidense logró el primer alunizaje tripulado?",
    answers: ["Programa Mercury", "Programa Gemini", "Programa Apollo", "Programa Skylab"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué acuerdos de 1978 establecieron la paz entre Israel y Egipto?",
    answers: ["Acuerdos de Oslo", "Acuerdos de Camp David", "Acuerdos de Madrid", "Acuerdos de Ginebra"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué movimiento liderado por Lech Walesa desafió al régimen comunista en Polonia?",
    answers: ["Carta 77", "Primavera de Praga", "Solidaridad", "Perestroika"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 8: Muy especialista - Historia Antigua y Medieval Específica
  {
    question: "¿Qué batalla del 331 a.C. marcó la victoria definitiva de Alejandro Magno sobre los persas?",
    answers: ["Batalla de Gaugamela", "Batalla de Issos", "Batalla de Gránico", "Batalla de Hidaspes"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué emperador romano dividió el imperio en dos partes en el año 395?",
    answers: ["Constantino", "Diocleciano", "Teodosio I", "Justiniano"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué dinastía gobernó China durante la construcción de la Gran Muralla?",
    answers: ["Han", "Tang", "Ming", "Qin"],
    correct: 3,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué batalla de 732 detuvo la expansión musulmana en Europa Occidental?",
    answers: ["Batalla de Poitiers", "Batalla de Roncesvalles", "Batalla de Covadonga", "Batalla de Tours"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué rey visigodo saqueó Roma en el año 410?",
    answers: ["Ataulfo", "Alarico", "Teodorico", "Eurico"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 8: Muy especialista - Historia Moderna Específica
  {
    question: "¿Qué tratado de 1713 puso fin a la Guerra de Sucesión Española?",
    answers: ["Tratado de Utrecht", "Tratado de Rastatt", "Tratado de Aquisgrán", "Tratado de Westfalia"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué político británico lideró el país durante la mayor parte de la Segunda Guerra Mundial?",
    answers: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué acuerdo de 1985 permitió la libre circulación de personas entre varios países europeos?",
    answers: ["Tratado de Maastricht", "Acuerdo de Schengen", "Tratado de Roma", "Acta Única Europea"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué presidente estadounidense estableció el New Deal para combatir la Gran Depresión?",
    answers: ["Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Calvin Coolidge"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué evento de 1989 simbolizó el fin de la Guerra Fría?",
    answers: ["La caída del Muro de Berlín", "La disolución de la URSS", "La reunificación de Alemania", "La Revolución de Terciopelo"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 9: Súper especialista - Historia de EE.UU.
  {
    question: "¿Qué caso de la Corte Suprema de 1803 estableció el principio de revisión judicial?",
    answers: ["Marbury v. Madison", "McCulloch v. Maryland", "Gibbons v. Ogden", "Dred Scott v. Sandford"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué presidente estadounidense implementó la política del 'Buen Vecino' hacia América Latina?",
    answers: ["Theodore Roosevelt", "Woodrow Wilson", "Franklin D. Roosevelt", "Harry S. Truman"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué escándalo político de la década de 1970 llevó a la renuncia del presidente Richard Nixon?",
    answers: ["Irán-Contra", "Watergate", "Teapot Dome", "Whitewater"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué ley de 1964 prohibió la discriminación basada en raza, color, religión, sexo u origen nacional?",
    answers: ["Ley de Derechos Civiles", "Ley de Derecho al Voto", "Ley de Igualdad de Oportunidades", "Ley de Derechos Humanos"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué doctrina de política exterior estadounidense se oponía a la intervención europea en América?",
    answers: ["Doctrina Truman", "Doctrina Eisenhower", "Doctrina Monroe", "Doctrina Carter"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 9: Súper especialista - Historia Mundial Específica
  {
    question: "¿Qué revolución de 1917 llevó a los bolcheviques al poder en Rusia?",
    answers: ["Revolución de Febrero", "Revolución de Octubre", "Revolución Rusa", "Revolución Bolchevique"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué político sudafricano fue liberado en 1990 después de 27 años de prisión?",
    answers: ["Desmond Tutu", "Nelson Mandela", "F.W. de Klerk", "Steve Biko"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué movimiento pacifista liderado por Mahatma Gandhi logró la independencia de la India?",
    answers: ["Movimiento de No Cooperación", "Movimiento de Desobediencia Civil", "Quit India", "Satyagraha"],
    correct: 3,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué líder chino implementó la política de 'Reforma y Apertura' en 1978?",
    answers: ["Mao Zedong", "Zhou Enlai", "Deng Xiaoping", "Hu Jintao"],
    correct: 2,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué evento de 1991 marcó el fin oficial de la Unión Soviética?",
    answers: ["La caída del Muro de Berlín", "Los Acuerdos de Belavezha", "La Revolución de Terciopelo", "El golpe de agosto"],
    correct: 1,
    type: typeQuestions.HISTORY,
  },
  
  // Nivel 10: Experto absoluto - Historia Específica
  {
    question: "¿Qué tratado de 1648 puso fin a la Guerra de los Treinta Años?",
    answers: ["Tratado de Westfalia", "Tratado de Augsburgo", "Tratado de Nimega", "Tratado de Ryswick"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué conferencia de 1884-1885 reguló la colonización europea de África?",
    answers: ["Conferencia de Berlín", "Conferencia de Bruselas", "Conferencia de Londres", "Conferencia de París"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué batalla naval de 1805 aseguró la supremacía británica en el mar durante las Guerras Napoleónicas?",
    answers: ["Batalla de Trafalgar", "Batalla del Nilo", "Batalla de Copenhague", "Batalla de Aboukir"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué acuerdo secreto de 1916 dividió Oriente Medio entre Francia y Gran Bretaña?",
    answers: ["Acuerdo Sykes-Picot", "Declaración Balfour", "Tratado de Sèvres", "Mandato de Palestina"],
    correct: 0,
    type: typeQuestions.HISTORY,
  },
  {
    question: "¿Qué programa de ayuda económica estadounidense para la reconstrucción de Europa después de la Segunda Guerra Mundial?",
    answers: ["Plan Marshall", "Doctrina Truman", "Programa Lend-Lease", "Alianza para el Progreso"],
    correct: 0,
    type: typeQuestions.HISTORY,
  }
]

export const totalQuestions = [...scienceArray, ...GeoArray, ...historyArray];
