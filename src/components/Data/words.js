const words = [
  "Axioma",
  "Azulejo",
  "Blitz",
  "Catarro",
  "Coçar",
  "Crespo",
  "Cripta",
  "Duplex",
  "Fúcsia",
  "Girar",
  "Gnóstico",
  "Haicai",
  "Hera",
  "Hífen",
  "Icterícia",
  "Indigno",
  "Intrigante",
  "Jazz",
  "Linfa",
  "Marfim",
  "Ônix",
  "Psique",
  "Quartzo",
  "Quiz",
  "Quorum",
  "Tonto",
  "Topázio",
  "Torpor",
  "Valsa",
  "Vaporizar",
  "Vertiginoso",
  "Vicissitude",
  "Vórtice",
  "Xilofone",
  "Apicultor",
  "Agrônomo",
  "Auditor",
  "Bartender",
  "Cerimonialista",
  "Chef",
  "Coach",
  "Desembargador",
  "Despachante",
  "Endocrinologista",
  "Embaixador",
  "Gerentólogo",
  "Headhunter",
  "Intérprete",
  "Juiz",
  "Nanotecnólogo",
  "Nutrólogo",
  "Pizzaiolo",
  "Perito",
  "Quiroprata",
  "Roteirizador",
  "Silvicultor",
  "Trader",
  "Taquígrafo",
  "Turismólogo",
  "Albatroz",
  "Alpaca",
  "Anchova",
  "Bacalhau",
  "Badejo",
  "Barracuda",
  "Beluga",
  "Cágado",
  "Chinchila",
  "Craca",
  "Dromedário",
  "Escaravelho",
  "Gerbo",
  "Gnu",
  "Gralha",
  "Hamster",
  "Lêmure",
  "Lhama",
  "Lince",
  "Marreco",
  "Melro",
  "Ocapi",
  "Ouriço",
  "Pelicano",
  "Percevejo",
  "Pirilampo",
  "Quati",
  "Rouxinol",
  "Sanguessuga",
  "Surucucu",
  "Tapir",
  "Texugo",
  "Vison",
  "Zebu",
  "Ampulheta",
  "Anzol",
  "Almofariz",
  "Bidê",
  "Botija",
  "Candelabro",
  "Daguerreótipo",
  "Dedaleira",
  "Desfibrilador",
  "Diapasão",
  "Echarpe",
  "Estribo",
  "Fagote",
  "Fantoche",
  "Fórceps",
  "Freezer",
  "Guidão/ Guidom",
  "Navalha",
  "Jaleco",
  "Modem",
  "Narguilé",
  "Nebulizador",
  "Novelo",
  "Oboé",
  "Oxímetro",
  "Pêndulo",
  "Quepe",
  "Selim",
  "Sintetizador",
  "Spray",
  "Urinol",
  "Vuvuzela",
  "Webcam",
  "Xadrez",
  "Xequerê",
  "Zíper",
  "Abricó",
  "Alfarroba",
  "Bergamota",
  "Ciriguela",
  "Cranberry",
  "Dendê",
  "Feijoa",
  "Groselha",
  "Imbu",
  "Jenipapo",
  "Kiwi",
  "Lichia",
  "Mexerica",
  "Nectarina",
  "Nêspera",
  "Pequi",
  "Pistache",
  "Pomelo",
  "Puçá",
  "Saguaraji",
  "Anacrônico",
  "Benevolência",
  "Circunspecto",
  "Denegrir",
  "Desassossego",
  "Empecilho",
  "Escusa",
  "Estratagema",
  "Furtivo",
  "Galhardo",
  "Heresia",
  "Impávido",
  "Inusitado",
  "Jaez",
  "Lascívia",
  "Ludibriar",
  "Morbidez",
  "Nefando",
  "Oneroso",
  "Pândego",
  "Quimera",
  "Reticente",
  "Sedentário",
  "Sobrepujar",
  "Tautologia",
  "Ultraje",
  "Vilipêndio",
  "Ziguezaguear",
  "Ambiguidade",
  "Banalidade",
  "Candura",
  "Desvario",
  "Eclético",
  "Estridente",
  "Frugal",
  "Genuflexo",
  "Híbrido",
  "Ignóbil",
  "Impetuoso",
  "Inócuo",
  "Jubiloso",
  "Leviandade",
  "Mendaz",
  "Nascente",
  "Obstinação",
  "Plebeu",
  "Querela",
  "Rústico",
  "Sagaz",
  "Sôfrego",
  "Temeridade",
  "Ubíquo",
  "Vênia",
  "Zelo",
  "Abissal",
  "Abjeto",
  "Admoestar",
  "Afeição",
  "Anátema",
  "Âmago",
  "Âmbito",
  "Antípoda",
  "Ardiloso",
  "Assombroso",
  "Averiguar",
  "Bisonho",
  "Brado",
  "Cáspite",
  "Catalisador",
  "Cetro",
  "Circunlóquio",
  "Conjecturar",
  "Contraponto",
  "Contumaz",
  "Corolário",
  "Desvencilhar",
  "Dissimular",
  "Dissuadir",
  "Edificar",
  "Efervescência",
  "Elucidar",
  "Embasbacado",
  "Empáfia",
  "Empedernido",
  "Enlevo",
  "Escárnio",
  "Esdrúxulo",
  "Estulto",
  "Exímio",
  "Fútil",
  "Genuflexão",
  "Gleba",
  "Heurístico",
  "Iludir",
  "Impávido",
  "Incólume",
  "Inefável",
  "Inepto",
  "Inexorável",
  "Intrépido",
  "Írrito",
  "Justapor",
  "Lapso",
  "Ludibriar",
  "Ludita",
  "Malfadado",
  "Mórbido",
  "Obcecar",
  "Obnóxio",
  "Ociosidade",
  "Opulência",
  "Pândego",
  "Paradigma",
  "Perquirir",
  "Pletórico",
  "Pluralidade",
  "Ponderoso",
  "Predileto",
  "Propensão",
  "Prudência",
  "Pungente",
  "Rancoroso",
  "Recôndito",
  "Refutar",
  "Relento",
  "Remissão",
  "Renitente",
  "Retificar",
  "Revogar",
  "Sapiência",
  "Sedentário",
  "Séquito",
  "Sibilar",
  "Sibilino",
  "Sísifo",
  "Sovina",
  "Sublime",
  "Suntuoso",
  "Tergiversar",
  "Tolhido",
  "Tórrido",
  "Transcender",
  "Transmutar",
  "Vagabundo",
  "Vicário",
  "Vilipendiar",
];

export default words[Math.floor(Math.random() * words.length)];
