/**
 * Base de datos completa de muestras petrográficas - Petrología Ígneo-Metamórfica UNRN
 * Mapeo 100% verificado con imágenes locales de alta resolución.
 */

const SAMPLES_DATA = [
  // =========================================================================
  // 1. ROCAS VOLCÁNICAS EFUSIVAS MÁFICAS (13 MUESTRAS) - CARPETA: media/Maficas/
  // =========================================================================
  {
    id: "el-cuy-94a",
    name: "El Cuy 94A",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "El Cuy, Río Negro",
    color: "Negra",
    texture: "Intergranular, Porfírica, Afanítica, Vesicular / Amigdaloide",
    crystallinity: "Holocristalina",
    modalClassification: "Diagrama QAPF: Basalto",
    mineralComponents: ["Plagioclasa (Pl)", "Clinopiroxeno (Cpx)", "Ortopiroxeno (Opx)", "Olivina (Olv)", "Iddingsita (Idg)", "Minerales Opacos (Op)", "Apatita"],
    vesicles: "Vesículas y amígdalas sub-redondeadas (20%)",
    phenocrysts: "Plagioclasa (30%, <2 mm)",
    groundmass: "Afanítica / Microcristalina (50%)",
    images: [
      {
        url: "media/volcanicas efusivas maficas/EL CUY 94A.png",
        alt: "Basalto El Cuy 94A: Muestra de mano cortada y pulida con vesículas; fotomicrografías con nicoles cruzados de la pasta intergranular con Pl, Cpx, Opx, Olv e Idg.",
        caption: "Muestra 94A (El Cuy). Basalto. a. Feta de roca cortada y pulida. Apreciar las cavidades. b. Sección pulida que exhibe las vesículas (Ves) y los fenocristales de plagioclasa (Pl). c-d. Fotomicrografías de láminas delgadas con nicoles cruzados de la pasta intergranular del basalto. Cpx: clinopiroxeno. Opx: ortopiroxeno. Pl: plagioclasa. Olv: olivina. Igd: iddingsita como reemplazo de olivina. Op: mineral opaco. Ves: vesícula."
      }
    ],
    description: "Roca negra compuesta por fenocristales (30%) de plagioclasa (<2 mm de largo) inmersos en una pasta afanítica (50%), y por vesículas y amígdalas sub-redondeadas (20%). En lámina delgada bajo el microscopio, la pasta es microcristalina y consiste en tablillas desordenadas de plagioclasa subhedral, clino- y ortopiroxeno subhedrales, granos euhedrales de olivina reemplazados en forma parcial por iddingsita, minerales opacos y apatita. La muestra es holocristalina y la textura microscópica de la pasta es intergranular. Según el diagrama QAPF de clasificación modal de rocas extrusivas, la muestra 94A es un basalto."
  },
  {
    id: "el-cuy-95b-95c",
    name: "El Cuy 95b y 95c",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "El Cuy, Río Negro",
    color: "Rojo-Negro y Negro",
    texture: "Porfírica, Intersertal a Hialoofítica, Esferulítica",
    crystallinity: "Hipocristalina",
    modalClassification: "Basalto con contacto entre dos pulsos",
    mineralComponents: ["Plagioclasa (Pl)", "Iddingsita (Idg)", "Clinopiroxeno (Cpx)", "Ortopiroxeno (Opx)", "Vidrio Volcánico (Vd)", "Matriz carbonática (Mc)"],
    vesicles: "Baja vesiculación (<10%) y amígdalas rellenas de carbonatos",
    phenocrysts: "Basalto negro: Plagioclasa subhedral (10-15%, <1mm). Basalto rojo-negro: Iddingsita (20%, <1mm), Plagioclasa (3-5%, <1mm)",
    groundmass: "Afanítica, Microcristalina / Vítrea con esferulitas",
    images: [
      {
        url: "media/volcanicas efusivas maficas/EL CUY 95b y 95c.png",
        alt: "Basalto El Cuy 95b y 95c: Vista binocular del contacto entre basalto negro y rojo-negro con textura hialoofítica, microtextura esferulítica y amígdalas.",
        caption: "Muestra 95b (El Cuy). Basalto. a. Muestra macroscópica de la roca. b. Vista binocular contacto entre basalto negro (Bn) y basalto negro-rojo (Bnr). c. Fotomicrografías de láminas delgadas con nicoles cruzados de plagioclasa (Pl), clinopiroxeno (Cpx) e Iddingsita (Idg) en matriz carbonática (Mc). d. Vista binocular basalto negro. e-f. Textura hialoofitica compuesta por fenocristales de plagioclasa (Pl), iddingsita (Idg) y ortopiroxeno (Opx) en pasta vítrea (Vd) con microtextura esferulítica (Ef), además de presencia de vesículas (Ves). g. Vista binocular basalto negro-rojo. h. Fotomicrografías de láminas delgadas con nicoles cruzados de la zona proximal con textura porfírica compuesta por fenocristales de Pl, Idg, Opx y Cpx, Ves y amígdalas (Amig). i. Zona distal con textura porfírica compuesta por fenocristales de Pl, Cpx, Opx e Idg, además de presencia de Amig."
      }
    ],
    description: "La muestra presenta un contacto entre dos basaltos, uno de color rojo-negro y otro negro. En muestra de mano, el basalto de color negro se caracteriza por una textura porfírica constituido por fenocristales de plagioclasa subhedral (<1mm) (10-15%) inmersos en una pasta afanítica. Presenta una baja vesiculación (<10%) y amígdalas rellenas de carbonatos. El basalto de coloración rojo-negro posee una textura porfírica compuesta por pequeños fenocristales de iddingsita anhedral (20%) (<1mm) y plagioclasa subhedral (3-5%) (<1mm), inmersos en una pasta afanítica. También presenta una baja vesiculación (<0,5 mm) (10%) como también amígdalas de un tamaño medio de <1 mm (3-5%), ambas de morfología esférica. El contacto entre estos dos cuerpos de roca, se compone de pequeños fragmentos de cristales (<1,5mm) de plagioclasa, iddingsita y piroxenos inmersos en una matriz carbonática. En sección delgada bajo el microscopio, la pasta del basalto negro es microcristalina e hipocristalina. Exhibe una textura intersertal con transiciones a una textura hialoofítica ubicada más cercanas al contacto. Está constituida por fenocristales de plagioclasa euhedral a subhedral, iddingsita subhedral, clinopiroxeno y ortopiroxeno subhedral inmersos en una pasta rica en vidrio, con desarrollo de microtextura esferulítica."
  },
  {
    id: "el-cuy-97",
    name: "El Cuy 97",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "El Cuy, Río Negro",
    color: "Negra",
    texture: "Afanítica, Vesicular, Microporfírica, Glomeroporfírica",
    crystallinity: "Hipocristalina",
    modalClassification: "Diagrama QAPF: Basalto",
    mineralComponents: ["Plagioclasa (Pl)", "Ortopiroxeno (Opx)", "Iddingsita (Idg)", "Clinopiroxeno (Cpx)", "Vidrio Palagonítico (Vd)", "Opacos (Op)"],
    vesicles: "Vesículas irregulares (aprox. 60%, 1 a 5 mm), algunas formando amígdalas",
    phenocrysts: "Microfenocristales de plagioclasa y ortopiroxeno subhedral; glomérulos de Pl",
    groundmass: "Pasta opaca con vidrio palagonítico (5%)",
    images: [
      {
        url: "media/volcanicas efusivas maficas/EL CUY 97.png",
        alt: "Basalto El Cuy 97: Feta pulida con vesículas al 60%; fotomicrografías con nicoles cruzados de microfenocristales de Pl, Idg, Cpx y glomérulos con vidrio palagonítico.",
        caption: "Muestra 97 (El Cuy). Basalto. a. Feta de roca cortada y pulida. b. Vista a lupa binocular resaltando las vesículas (Ves) y amígdalas (Amig) en pasta afanítica. c. Fotomicrografías de láminas delgadas con nicoles cruzados de textura vesicular/amigdaloide (Ves/Amig) en combinación con textura porfírica compuesta por una pasta opaca y fenocristales de plagioclasa (Pl), iddingsita (Idg) y clinopiroxeno (Cpx) inmersos en pasta opaca (Op). d. Glomérulo de Pl y paredes externas de vesículas con presencia con vidrio volcánico (Vd)."
      }
    ],
    description: "Roca negra compuesta por vesículas irregulares componiendo aproximadamente un 60% de la roca con tamaños entre 1 a 5 mm, algunas formando amígdalas. También presenta vidrio en un 5% aproximadamente. Teniendo en cuenta esto, se infiere que la muestra posee una textura afanítica, vesicular y una cristalinidad hipocristalina. En vista al microscopio se identificaron microfenocristales de plagioclasa subhedral (granularidad microcristalina) y de ortopiroxeno subhedral inmersos en una pasta opaca, dando una textura microporfírica. Iddingsita está en reemplazo de piroxenos y olivino. También presenta glomérulos de plagioclasa, dando así una microtextura glomeroporfírica. Además, posee algunas vesiculaciones rodeadas por un relleno cristalino y también zonas con vidrio palagonítico. Considerando lo descrito y usando el diagrama QAPF para rocas extrusivas, es posible clasificar a la muestra 97 como un basalto."
  },
  {
    id: "el-cuy-98",
    name: "El Cuy 98",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "El Cuy, Río Negro",
    color: "Gris-negro",
    texture: "Intergranular, Afanítica, Vesicular",
    crystallinity: "Holocristalina, Microcristalina",
    modalClassification: "Diagrama QAPF: Basalto",
    mineralComponents: ["Plagioclasa (Pl)", "Clinopiroxeno (Cpx)", "Ortopiroxeno (Opx)", "Iddingsita (Idg)", "Olivino (Olv)", "Opacos (Op)"],
    vesicles: "Alta vesiculación (30%, <1 mm). Cilindro de desgasificación de 11 cm de largo (vesículas hasta 1,5 cm de diám.)",
    phenocrysts: "Plagioclasa subhedral (15-20%, <1mm), Iddingsita (5%, <0.4mm)",
    groundmass: "Microcristalina y holocristalina con textura intergranular",
    images: [
      {
        url: "media/volcanicas efusivas maficas/EL CUY 98.png",
        alt: "Basalto El Cuy 98: Detalle del cilindro de desgasificación de 11 cm y microfotografías de textura intergranular con Pl, Cpx, Opx, Olv e Idg.",
        caption: "Muestra 98 (El Cuy). Basalto. a. Muestra macroscópica de la roca. b. Detalle del cilindro de desgasificación. c-d. Fotomicrografías de láminas delgadas que exhiben la textura intergranular compuesta por tablillas de plagioclasa (Pl) donde en espacios intersticiales se desarrollan cristales de clinopiroxeno (Cpx), ortopiroxeno (Opx), minerales opacos (Op) y olivino/iddingsita (Olv/Idg), además de la presencia de vesículas (Ves)."
      }
    ],
    description: "Roca de color gris-negro, compuesta por fenocristales de grano fino de plagioclasa subhedral (<1mm) (15-20%), iddingsita (5%) (<0,4mm) inmersos en una pasta afanítica. La misma posee una alta cantidad de vesículas (30%) de morfologías esféricas de pequeño tamaño (<1 mm). La muestra tiene un cilindro de desgasificación de 11 cm de largo compuesto por vesículas que llegan hasta 1,5 cm de diámetro con morfología esférica. En sección delgada la pasta es microcristalina y holocristalina. Posee una textura intergranular constituida principalmente por tablillas de plagioclasa donde en espacios intersticiales se disponen granos subhedrales de ortopiroxeno, clinopiroxeno anhedral y minerales opacos, como también olivino anhedral alterado total/parcialmente a iddingsita. Según el diagrama QAPF de clasificación modal de rocas extrusivas, la muestra 98 es un basalto."
  },
  {
    id: "el-cuy-sn",
    name: "El Cuy S/N",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "El Cuy, Río Negro",
    color: "Gris-blanco",
    texture: "Fanerítica equigranular de grano fino (<1mm), Intergranular",
    crystallinity: "Holocristalina",
    modalClassification: "Diagrama QAPF: Basalto",
    mineralComponents: ["Plagioclasa subhedral (45%)", "Iddingsita anhedral (20%)", "Piroxeno subhedral columnar (15%)", "Ortopiroxeno", "Clinopiroxeno", "Opacos"],
    vesicles: "Vesículas de tamaño muy fino (<0,5 mm) esféricas (20%)",
    phenocrysts: "Fenocristales tabulares euhedrales a subhedrales de plagioclasa",
    groundmass: "Interespacios con clinopiroxeno, ortopiroxeno, olivino/iddingsita y opacos",
    images: [
      {
        url: "media/volcanicas efusivas maficas/EL CUY S-N.png",
        alt: "Basalto El Cuy S/N: Muestra macroscópica fanerítica fina y fotomicrografías de textura intergranular con Pl, Cpx, Opx y microlitos de olivino/iddingsita.",
        caption: "Muestra SN. Basalto. a. Muestra macroscópica de la roca. b. Vista a lupa binocular remarcando las plagioclasas (Pl), piroxenos (Px) y vesículas (Ves). c-d. Fotomicrografías de láminas delgadas que exhiben la textura intergranular constituida por tablillas de Pl donde en espacios intersticiales se desarrollan cristales de clinopiroxeno (Cpx), ortopiroxeno (Opx), minerales opacos (Op) y olivino/iddingsita (Olv/Idg), además de la presencia de Ves."
      }
    ],
    description: "Roca de color gris-blanco, fanerítica, equigranular de grano fino (<1mm) constituida por cristales de plagioclasa subhedral (45%), iddingsita anhedral (20%) y piroxeno subhedral columnar (15%), además de la presencia de vesículas de tamaño muy fino (<0,5 mm) con una morfología esférica (20%). En sección delgada al microscopio se observa una textura intergranular integrada principalmente por fenocristales tabulares euhedrales a subhedrales de plagioclasa donde en los interespacios se encuentran cristales prismáticos de ortopiroxeno euhedral a subhedral y clinopiroxeno subhedral. También de manera intersticial se presentan microlitos de olivino alterado parcial/totalmente a iddingsita anhedral y minerales opacos. Considerando esto se determina una cristalinidad holocristalina y según el QAPF para rocas extrusivas, la muestra SN se clasifica como un basalto."
  },
  {
    id: "chile-chico-ben-1",
    name: "Chile Chico BEN (1)",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Chile Chico, Patagonia",
    color: "Negra",
    texture: "Porfírica, Intergranular",
    crystallinity: "Holocristalina, Microcristalina",
    modalClassification: "Diagrama QAP: Basalto",
    mineralComponents: ["Olivino euhedral/anhedral (15%)", "Plagioclasa", "Clinopiroxeno (3%)", "Clorita", "Zeolita / Ceolita", "Iddingsita", "Opacos"],
    vesicles: "Cavidades con minerales secundarios (ceolita y clorita)",
    phenocrysts: "Olivino anhedral (15%, 1 a 2 mm)",
    groundmass: "Afanítica (85%), microcristalina compuesta de tablillas de plagioclasa",
    images: [
      {
        url: "media/volcanicas efusivas maficas/CHILE CHICO BEN (1).jpeg",
        alt: "Basalto Chile Chico BEN 1: Muestra de mano y microfotografías en nicoles paralelos y cruzados con fenocristales de olivino y reemplazos de ceolita/clorita.",
        caption: "Muestra BEN - Chile Chico. Basalto. (a) y (b) fotografías de muestra de mano; (c) y (d) microfotografía de corte delgado en nicoles paralelos y cruzados exhibiendo fenocristales de olivino y pasta compuesta por tablillas de plagioclasa; (e - h) microfotografías de corte delgado en nicoles paralelos y cruzados. Se distinguen fases accesorias (opacos), y secundarias en cavidades o como reemplazo de minerales esenciales (iddingsita, ceolita y clorita)."
      }
    ],
    description: "Roca color negro. Se identificaron fenocristales de olivino anhedrales (15%), y tamaño entre 1 mm a 2 mm. Estos fenocristales de olivino están rodeados por una pasta afanítica (85%) dando una textura porfírica. En lámina delgada la pasta es microcristalina y holocristalina compuesta principalmente por plagioclasa y en menor medida piroxenos alterados y minerales opacos formando una microtextura intergranular. Se pueden observar bajo el microscopio fenocristales de olivino euhedrales (15%), clinopiroxenos subhedrales 3% y minerales secundarios tales como clorita y ceolita en cavidades o en reemplazo de fenocristales. Teniendo en cuenta los porcentajes de plagioclasas en la muestra, se clasificó según el diagrama QAP de rocas volcánicas como un basalto."
  },
  {
    id: "chile-chico-ben-2",
    name: "Chile Chico BEN (2)",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Chile Chico, Patagonia",
    color: "Negra",
    texture: "Afanítica, Microporfírica, Intergranular, Inequigranular",
    crystallinity: "Holocristalina",
    modalClassification: "Diagrama QAPF: Basalto",
    mineralComponents: ["Olivina euhedral/subhedral (10%)", "Plagioclasa (tablillas/microlitos)", "Piroxeno anhedral", "Zeolita", "Clorita", "Opacos"],
    vesicles: "Escasas microcavidades con desarrollo de zeolita y clorita",
    phenocrysts: "Microfenocristales de olivina (10%) y fragmento de xenolito ultramáfico",
    groundmass: "Pasta (90%) con arreglo de tablillas de plagioclasa e interespacios máficos",
    images: [
      {
        url: "media/volcanicas efusivas maficas/CHILE CHICO BEN (2).png",
        alt: "Basalto Chile Chico BEN 2: Muestra de mano con xenolito ultramáfico y microfotografías de microfenocristales de olivina y pasta intergranular.",
        caption: "Muestra BEN - Chile Chico. Basalto. a-b) Muestra de mano del basalto BEN-Chile chico con un fragmento de xenolito ultramáfico. c-f) Microfotografías que muestran microfenocristales de olivina inmersos en una pasta compuesta por plagioclasa, opacos y piroxenos; minerales opacos y tablillas de plagioclasa (c, d y e), y minerales secundarios (f)."
      }
    ],
    description: "Basalto de color negro de textura afanítica. Contiene un xenolito de una roca ultramáfica. En sección delgada, se observan microfenocristales (10%) de olivina euhedrales a subhedrales, microlitos de plagioclasa euhedrales, y piroxeno anhedral, inmersas en una pasta microcristalina, dando una textura holocristalina, inequigranular y microporfírica. La pasta (90%) muestra un arreglo de tablillas de plagioclasa, con minerales máficos entre los espacios libres, resultando en una textura intergranular. La muestra presenta escasas microcavidades con desarrollo de zeolita y clorita como fases secundarias. La clorita se presenta, además, como mineral de reemplazo de piroxeno."
  },
  {
    id: "infiernillo-mendoza",
    name: "Infiernillo - Mendoza",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Infiernillo, Mendoza",
    color: "Negra",
    texture: "Porfírica, Glomeroporfírica, Intergranular y Traquítica",
    crystallinity: "Holocristalina, Microcristalina",
    modalClassification: "Diagrama QAP: Basalto",
    mineralComponents: ["Plagioclasa (~5% fenocristales, 70% en pasta)", "Olivino euhedral (15% en glomérulos)", "Clinopiroxeno (5%)", "Minerales Opacos"],
    vesicles: "Vesículas y amígdalas esféricas (<15%, 1 a 3 mm) distribuidas al azar",
    phenocrysts: "Plagioclasa (~5%, ~1 mm), Microfenocristales de olivino (15% en glomérulos)",
    groundmass: "Afanítica (80%), microcristalina con tablillas orientadas de plagioclasa y clinopiroxeno",
    images: [
      {
        url: "media/volcanicas efusivas maficas/INFIERNILLO.jpeg",
        alt: "Basalto Infiernillo Mendoza: Muestra de mano con fenocristales de plagioclasa y vesículas; microfotografías de textura glomeroporfírica de olivino.",
        caption: "Muestra Infiernillo - Mendoza. Basalto. (a, b) Fotografías de muestra de mano, donde se distinguen fenocristales de plagioclasas y la presencia de vesículas y amígdalas. (c-f) Microfotografías donde se observa fenocristales de clinopiroxeno (c-d) y olivino formando textura glomeroporfírica (e-f), reemplazos de minerales opacos en microfenocristales y una pasta compuesta por tablillas de plagioclasa."
      }
    ],
    description: "Roca de color negro y con fenocristales de plagioclasas (~ 5%) de aproximadamente 1 mm de tamaño. Estos fenocristales de plagioclasa se encuentran inmersos en una pasta afanítica (80%), en la cual es posible también observar vesículas y amígdalas esféricas (<15%), de tamaño entre 1mm y 3mm. Estas vesículas y amígdalas están distribuidas al azar. La textura de la muestra es porfírica. Los microfenocristales de olivino euhedral 15% se agrupan en glomérulos en algunos sectores, dando una microtextura glomeroporfírica. Los minerales opacos desarrollan reemplazo parcial o total de los microfenocristales. La pasta es microcristalina, holocristalina y está compuesta por tablillas de plagioclasa (70%) y clinopiroxenos (5%), formando una textura intergranular y traquítica. Teniendo en cuenta los porcentajes de plagioclasas, se clasificó según el diagrama QAP de rocas volcánicas como un basalto."
  },
  {
    id: "llancanelo-20",
    name: "Llancanelo 20",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Llancanelo, Mendoza",
    color: "Negra",
    texture: "Inequigranular, Porfírica, Microtraquítica, Microintergranular",
    crystallinity: "Holocristalina",
    modalClassification: "Composición modal: 45% Olv, 35% Pl, 15% Cpx, 5% Op. Diagrama QAPF: Basalto",
    mineralComponents: ["Olivino con alteración a iddingsita (45%, 1 a 3 mm)", "Plagioclasa (35%, 2 a 4 mm)", "Clinopiroxeno (15%, <3 mm)", "Opacos (5%)"],
    vesicles: "Matriz densa afanítica",
    phenocrysts: "Olivino euhedral-subhedral, Plagioclasa euhedral, Clinopiroxeno subhedral-anhedral",
    groundmass: "Tablillas de plagioclasa orientadas con intersticios de opacos, Cpx e iddingsita",
    images: [
      {
        url: "media/volcanicas efusivas maficas/LLANCANELO 20.png",
        alt: "Basalto Llancanelo 20: Muestra de mano y microfotografías en nicoles cruzados con olivino alterado a iddingsita y orientación microtraquítica de plagioclasas.",
        caption: "Muestra 20. Basalto. a) Muestra de mano, destacando cristales de olivino. b), c) y d) Microfotografías al microscopio bajo nicoles cruzados, donde se observan fenocristales de olivino (Ol) y cristales de plagioclasa (Pl), clinopiroxeno (Cpx) y opacos (Op). En b se observa la orientación de los microlitos de plagioclasa, que da lugar a la textura microtraquítica. Obsérvese la textura microintergranular en las microfotografías, debido a las tablillas de plagioclasa con sus intersticios de opacos y clinopiroxeno."
      }
    ],
    description: "Roca de color negro, presenta cristales de olivino con alteración a iddingsita en los bordes, con un tamaño de entre 1 a 3 mm, cristales de piroxeno en sección basal menores a 3 mm y plagioclasa de entre 2 a 4 mm. Los fenocristales están inmersos en una pasta afanítica, la muestra es inequigranular, porfírica. Los fenocristales de olivino son euhedrales a subhedrales, la plagioclasa es euhedral, y el clinopiroxeno es subhedral a anhedral en corte delgado. La pasta está compuesta por tablillas de plagioclasa, con intersticios ocupados por minerales opacos, clinopiroxeno e iddingsita (por alteración de olivino), resultando en una textura holocristalina y microtextura intergranular. La plagioclasa en la pasta está orientada en algunos sectores exhibiendo una textura traquítica. La composición modal de la muestra es: 45% de olivino, 35% de plagioclasa, 15% de clinopiroxeno, y 5% de opacos. Según el diagrama QAPF, la roca clasifica como basalto."
  },
  {
    id: "llancanelo-31",
    name: "Llancanelo 31",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Llancanelo, Mendoza",
    color: "Gris claro",
    texture: "Porfírica, Intergranular, Glomeroporfírica",
    crystallinity: "Holocristalina, Microcristalina",
    modalClassification: "Diagrama QAPF: Basalto",
    mineralComponents: ["Plagioclasa (75%)", "Olivino alterado a Iddingsita (15%)", "Clinopiroxeno (5%)", "Opacos anhedrales (5%)"],
    vesicles: "Matriz afanítica homogénea",
    phenocrysts: "Fenocristales muy finos (~0.2 mm) de Pl, Olv y Px",
    groundmass: "Microcristalina y holocristalina de tablillas de plagioclasas subhedrales con Cpx y opacos intersticiales",
    images: [
      {
        url: "media/volcanicas efusivas maficas/LLANCANELO 31.jpeg",
        alt: "Basalto Llancanelo 31: Muestra de mano y microfotografías en nicoles cruzados mostrando glomérulos de Cpx, Olv y opacos en pasta de plagioclasa.",
        caption: "Muestra 31. Basalto. (a-b) Fotografías de muestra de mano, donde se señalan los fenocristales observados a ojo desnudo. (c) Microfotografía en nicoles cruzados, se encuentra centrado un cristal de clinopiroxeno, olivino y opacos conformando un glomérulo, también se señala fenocristal de plagioclasas y opacos anhedrales ocupando huecos en la pasta. (d) Microfotografía de corte, donde se encuentra centrado un fenocristal de olivino cuyos bordes se encuentran alterados a iddingsita, se observa la pasta compuesta por tablillas de plagioclasas."
      }
    ],
    description: "En muestra de mano, la roca tiene color gris claro y textura porfírica. Los fenocristales de plagioclasas (75%) y olivino (15%) y piroxeno (5%) son de tamaño muy fino (~ 0.2 mm) están inmersos en una pasta afanítica. En corte delgado, la pasta es microcristalina y holocristalina. Se pudieron observar fenocristales de olivino subhedral, alterado parcialmente a iddingsita, fenocristales de clinopiroxeno euhedral a subhedral, y opacos anhedrales 5%. Los cristales de clinopiroxeno y opacos se encuentran ocupando huecos en la pasta formada por tablillas de plagioclasas subhedrales, desarrollando una textura intergranular. En base a la composición modal, la roca es un basalto."
  },
  {
    id: "llancanelo-32",
    name: "Llancanelo 32",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Llancanelo, Mendoza",
    color: "Gris oscuro",
    texture: "Porfírica, Glomeroporfírica, Intergranular",
    crystallinity: "Holocristalina",
    modalClassification: "Reconteo modal QAP: Basalto",
    mineralComponents: ["Plagioclasa euhedral (80%)", "Olivina reemplazada por iddingsita (15%)", "Clinopiroxeno subhedral", "Opacos anhedrales (5%)", "Carbonatos"],
    vesicles: "Vesículas (5%, 0.1 a 0.5 mm) y amígdalas rellenas con carbonatos",
    phenocrysts: "Fenocristales muy finos de Plagioclasa y Olivino; glomérulos de olivinos",
    groundmass: "Holocristalina compuesta por tablillas de plagioclasa con piroxeno y opacos en los huecos",
    images: [
      {
        url: "media/volcanicas efusivas maficas/LLANCANELO 32.jpeg",
        alt: "Basalto Llancanelo 32: Muestra de mano con amígdalas y microfotografías con glomérulos de olivino e iddingsita en pasta de plagioclasa.",
        caption: "Muestra 32. Basalto. (a-b) Fotografías de muestra de mano, donde se distinguen fenocristales de olivino observados a ojo desnudo, vesículas y amígdalas. (c) Microfotografía de corte delgado en nicoles cruzados, se encuentra centrado un glomérulo de olivinos, se observan minerales, también se señala plagioclasa, opacos e iddingsita. (d) Microfotografía de corte delgado en nicoles cruzados, donde se encuentra un fenocristal de clinopiroxeno, un glomérulo de olivino, y pasta compuesta por tablillas de plagioclasas, clinopiroxeno y opacos."
      }
    ],
    description: "Muestra de color gris oscuro con fenocristales de plagioclasa (80%) y olivina reemplazada por iddingsita (15%) de tamaño muy fino inmersos en una pasta afanítica, y por consiguiente de textura porfírica. También contiene vesículas con una variación de tamaño de 0.1mm a 0.5mm con una abundancia de aproximadamente 5%. Algunas de estas cavidades se encuentran rellenas (amígdalas) con carbonatos. Los fenocristales de olivino subhedral, clinopiroxeno subhedral, plagioclasas euhedral, cristales de iddingsita anhedral y opacos anhedrales 5% bajo el microscopio petrográfico. Algunos de estos cristales se encuentran formando glomérulos, dando una microtextura glomeroporfírica. En corte delgado la pasta es holocristalina y está compuesta por tablillas de plagioclasas, cuyos huecos se encuentran rellenados por piroxeno y opacos, dando una textura intergranular. Teniendo en cuenta los porcentajes de plagioclasas con respecto al resto de los minerales, al realizar un reconteo modal la clasificación QAP de rocas volcánicas señala que se trataría de un basalto."
  },
  {
    id: "llancanelo-33",
    name: "Llancanelo 33",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Llancanelo, Mendoza",
    color: "Gris oscuro",
    texture: "Porfírica, Glomeroporfírica, Intergranular, Microgranosa",
    crystallinity: "Holocristalina",
    modalClassification: "Composición modal: 40% Pl, 25% Olv, 15% Cpx, 10% Op. Diagrama QAP: Basalto",
    mineralComponents: ["Plagioclasa (40%)", "Olivino alterado a Iddingsita (25%)", "Clinopiroxeno (15%)", "Opacos (10%)", "Serpentina (secundario)"],
    vesicles: "Vesículas (10%, 0.01 a 0.2 mm) y amígdalas rellenas por serpentina",
    phenocrysts: "Fenocristales de olivino y plagioclasa muy finos (0.1 mm, 15%)",
    groundmass: "Holocristalina (75%) afanítica, microgranosa con escasa diferencia de tamaño fenocristal-pasta",
    images: [
      {
        url: "media/volcanicas efusivas maficas/LLANCANELO 33.jpeg",
        alt: "Basalto Llancanelo 33: Muestra de mano con amígdalas y fotomicrografías con microfenocristales de olivino, piroxeno y relleno de serpentina.",
        caption: "Muestra 33. Basalto. a) Muestra de mano exhibiendo fenocristales de plagioclasa, vesículas y amígdalas. b-d) Microfotografías detallando microfenocristales de olivino, piroxeno (b) y plagioclasa (d) y la presencia de vesículas rellenas con serpentina. Nótese la escasa diferencia de tamaño entre los microfenocristales de plagioclasa y la pasta (d), definiendo una microtextura microgranosa."
      }
    ],
    description: "Roca color gris oscuro compuesta de fenocristales de olivino y plagioclasa de un tamaño muy fino (0,1 mm) con un 15% de abundancia, inmersos en una pasta (75%) afanítica desarrollando una textura porfírica. Además, tiene vesículas de tamaño variable entre 0.01mm y 0.2mm, con una abundancia de aproximadamente 10%. Algunas de estas cavidades se encuentran rellenas (amígdalas). En lámina delgada, los fenocristales de olivino son subhedrales y están alterados parcialmente a iddingsita, la plagioclasa es subhedral a euhedral. La pasta es holocristalina y está compuesta por clinopiroxeno subhedral a anhedral, plagioclasa, olivino y minerales opacos anhedrales. El relleno de las amígdalas está compuesto por serpentina (mineral secundario). Los cristales de clinopiroxeno, olivino y opacos se encuentran ocupando huecos en la pasta formada por tablillas de plagioclasa dando una textura intergranular. Algunos fenocristales de plagioclasa se encuentran agrupados en glomérulos, dando una microtextura glomeroporfírica. La diferencia en el tamaño relativo entre los fenocristales y los minerales que forman la pasta es relativamente pequeña definiendo una microtextura microgranosa."
  },
  {
    id: "llancanelo-34",
    name: "Llancanelo 34",
    classification: "Basalto",
    category: "maficas",
    categoryLabel: "Volcánica Efusiva Máfica",
    location: "Llancanelo, Mendoza",
    color: "Negra en corte fresco",
    texture: "Porfírica, Traquítica, Subofítica, Microgranular",
    crystallinity: "Holocristalina, Microcristalina",
    modalClassification: "Diagrama QAPF: Basalto",
    mineralComponents: ["Plagioclasas euhedrales (70%)", "Olivino (5%)", "Piroxenos / Clinopiroxeno", "Minerales Opacos"],
    vesicles: "Vesículas (<0.5 cm) algunas rellenas (amígdalas), y vesículas menores en planos laminares",
    phenocrysts: "Fenocristales de plagioclasa y olivino (75%)",
    groundmass: "Pasta afanítica microcristalina (25%)",
    images: [
      {
        url: "media/volcanicas efusivas maficas/LLANCANELO 34.png",
        alt: "Basalto Llancanelo 34: Muestra de mano y microfotografías con textura microgranular y subofítica con clinopiroxeno englobando plagioclasa.",
        caption: "Muestra 34. a) Muestra de mano. b, c y d) Fotografía a sección delgada de la muestra, nótese la presencia de fenocristales de plagioclasa (Pl), olivinos (Ol), piroxenos (Px) y opacos (Op), rodeados de una pasta microgranular."
      }
    ],
    description: "La roca presenta color negro en corte fresco, tiene textura porfírica definida por fenocristales de olivino y plagioclasa de tamaño fino constituyendo aproximadamente un 75% de la roca, mientras que el 25% restante es pasta afanítica, microcristalina. También tiene vesículas con tamaños menores a 0,5 cm, en algunos casos rellenas dando lugar a amígdalas. Además, hay vesículas de menor tamaño dispuestas en planos laminares. En sección delgada se pueden observar microfenocristales de plagioclasas euhedrales (70%) y olivino (5%) de mayor tamaño en comparación con los piroxenos y olivinos subhedrales que forman parte de la pasta (25%). Las plagioclasas se disponen paralelamente y definen una microtextura traquítica. Se observan cristales de plagioclasa siendo parcialmente incluidos por un cristal de clinopiroxeno dando una microtextura subofítica. El tamaño y proporción relativa de los microfenocristales de plagioclasa y olivino muestra una microtextura microgranular. Según esta descripción y el diagrama QAPF de volcánicas, la roca clasifica como basalto."
  },

  // =========================================================================
  // 2. ROCAS VOLCÁNICAS EFUSIVAS FÉLSICAS (5 MUESTRAS)
  // =========================================================================
  {
    id: "cal-21-10",
    name: "CAL 21-10",
    classification: "Riolita",
    category: "felsicas",
    categoryLabel: "Volcánica Efusiva Félsica",
    location: "Curaco, Río Negro",
    color: "Rosado claro",
    texture: "Porfírica, Felsítica, Glomeroporfírica",
    crystallinity: "Holocristalina, Criptocristalina",
    modalClassification: "Diagrama QAP: Riolita",
    mineralComponents: ["Feldespato alcalino / potásico subhedral (20%, Kfs/Fsp)", "Cuarzo anhedral (15%, Qz)", "Plagioclasa subhedral (5%, Pl)", "Biotita prismática (Bt)", "Sericita/Clorita (alteración)"],
    vesicles: "Matriz densa afanítica rosada",
    phenocrysts: "Fenocristales (40%, 1 a 4 mm) de Fsp, Qz, Pl y Bt",
    groundmass: "Pasta afanítica criptocristalina (60%) de textura felsítica",
    images: [
      {
        url: "media/volcanicas efusivas félsicas/CAL 21-10.jpeg",
        alt: "Riolita CAL 21-10 Curaco: Muestra de mano rosada y fotomicrografías con fenocristales de Pl alterada a sericita, Qz subhedral, Bt y Fsp.",
        caption: "CAL-21-10 de Curaco (Río Negro). (a) Muestra de mano en la que se observan fenocristales de plagioclasa (Pl), feldespato potásico (Fsp) y cuarzo (Qz) en una pasta afanítica. (b) Imagen microscópica que muestra un agrupamiento de cristales euhedrales a subhedrales de plagioclasa (Pl) altamente alterado a sericita. (c) Detalle de fenocristales de cuarzo (Qz) subhedrales y un cristal prismático de biotita (Bt) con alteración. (d) Cristales subhedrales a euhedrales de feldespato potásico (Fsp)."
      }
    ],
    description: "Roca color rosado claro de textura porfírica definida por fenocristales (40%) inmersos en una pasta afanítica (60%). Los fenocristales observados son de feldespato alcalino subhedral (20%), cuarzo anhedral (15%), y plagioclasa subhedral (5%). Los fenocristales presentan un tamaño de 1mm a 4mm. En corte delgado se pudo observar que la roca es holocristalina con una pasta criptocristalina de textura felsítica. También se observó biotita y feldespato K alterado a sericita/clorita. Teniendo en cuenta la descripción y realizando un reconteo de los fenocristales se clasificó a esta roca como una riolita siguiendo el diagrama QAP."
  },
  {
    id: "pch-5a",
    name: "PCH-5A",
    classification: "Andesita",
    category: "felsicas",
    categoryLabel: "Volcánica Efusiva Félsica",
    location: "Cerro Bayo, Neuquén",
    color: "Gris oscuro",
    texture: "Porfírica, Seriada, Inequigranular",
    crystallinity: "Holocristalina",
    modalClassification: "Reconteo modal: 76.92% Pl, 23.08% Fsp. Diagrama QAP: Andesita",
    mineralComponents: ["Plagioclasa (55% en pasta, 5% fenocristales)", "Piroxeno / Clinopiroxeno (15% fenocristales, 20% en pasta)", "Feldespato (5% en pasta)", "Minerales Opacos"],
    vesicles: "Matriz fanerítica densa",
    phenocrysts: "Piroxeno euhedral (15%, 1cm a 0.8mm), Plagioclasa subhedral (5%, 0.5mm)",
    groundmass: "Pasta fanerítica (80%) con textura seriada de tablillas de plagioclasa",
    images: [
      {
        url: "media/volcanicas efusivas félsicas/PCH-5A.jpeg",
        alt: "Andesita PCH-5A Cerro Bayo: Muestra de mano y microfotografías en luz polarizada cruzada mostrando textura seriada de plagioclasa y clinopiroxeno.",
        caption: "Muestra PCH-5A de Cerro Bayo (Neuquén): a) Fotografía de mano de la roca, mostrando una pasta afanítica con cristales subhedrales de plagioclasa (Pl) y piroxeno (Px); b) Lámina delgada en luz polarizada cruzada con cristales tabulares de plagioclasa (Pl). Se evidencia la textura seriada representada por los cristales de plagioclasa que muestra diferentes tamaños de grano; c) Detalle nicoles cruzados que evidencia cristaloclastos de clinopiroxeno (Px) y fenocristales de feldespato potásico (Fsp), donde también se observa una textura seriada; d) Visión general en nicoles cruzados donde se señalan opacos (Op) dispersos."
      }
    ],
    description: "Roca de color gris oscuro de textura porfírica, se observan fenocristales de piroxeno euhedral (1cm a 0.8mm) con 15% de abundancia, y fenocristales de plagioclasa subhedral (0.5mm) de 5% de abundancia, lo que da un total de 20% de fenocristales inmersos en una pasta fanerítica compuesta por cristales muy finos (<1mm) feldespato 5%, piroxeno 20%, y plagioclasa 55%, dando un total de 80% de abundancia de pasta. En corte delgado la roca es holocristalina, inequigranular, con una pasta de textura seriada donde se observa una transición de tamaño de grano de las tablillas de plagioclasas, además se observan cristales de piroxeno y opacos formando parte de esta pasta. Realizando el reconteo modal dio como resultado 76.92% de plagioclasa, y 23.08% de feldespato, dando según el diagrama QAP para rocas volcánicas como una andesita."
  },
  {
    id: "pch-5b",
    name: "PCH-5B",
    classification: "Andesita",
    category: "felsicas",
    categoryLabel: "Volcánica Efusiva Félsica",
    location: "Cerro Bayo, Neuquén",
    color: "Negro",
    texture: "Porfírica, Seriada, Inequigranular",
    crystallinity: "Holocristalina",
    modalClassification: "Diagrama QAPF: Andesita",
    mineralComponents: ["Plagioclasa euhedral/subhedral (55%)", "Piroxeno subhedral (25%)", "Anfíbol esqueletal (15%)", "Opacos (5%)"],
    vesicles: "Matriz densa",
    phenocrysts: "Fenocristales de plagioclasa, piroxeno y anfíbol (1 cm a 2 mm) con transición gradual de tamaño",
    groundmass: "Pasta con textura seriada",
    images: [
      {
        url: "media/volcanicas efusivas félsicas/PCH-5B.png",
        alt: "Andesita PCH-5B Cerro Bayo: Muestra de mano y microfotografías con nicoles paralelos y cruzados mostrando textura seriada con plagioclasa, anfíbol y piroxeno.",
        caption: "Muestra PCH5B. Andesita. (a) Muestra de mano, donde se observan fenocristales de plagioclasa (Pl), anfíbol (Am) y piroxeno (Px). Se observa como cada fenocristal presenta diferentes tamaños, los cuales varían gradualmente, dando lugar a una textura seriada. En b), c), d) y f) se presenta la muestra bajo el microscopio petrográfico, donde b) y c) se encuentran en nicoles paralelos y d) y e) en nicoles cruzados. En las 4 figuras, se observa cristales de anfíbol (Am) y plagioclasas (Pl), nuevamente con una variación gradual de su tamaño, representando a la textura seriada."
      }
    ],
    description: "Roca de color negro con fenocristales de plagioclasa, piroxeno y anfíbol, que muestran una transición gradual en el tamaño de grano con la pasta fanerítica. Los fenocristales van desde 1 cm a 2 mm. En sección delgada, se reconocieron fenocristales euhedrales a subhedrales de tablillas de plagioclasa (55%), fenocristales subhedrales de piroxeno (25%), fenocristales esqueletales de anfíbol (15%) y opacos (5%). La pasta tiene textura seriada y la roca tiene textura porfírica, es holocristalina e inequigranular. Según el diagrama QAPF, y considerando los minerales máficos presentes, la roca es una andesita."
  },
  {
    id: "payun-matru-pm-lc-tr",
    name: "Payún Matrú PM-LC-TR",
    classification: "Traquita / Fenotraquita",
    category: "felsicas",
    categoryLabel: "Volcánica Efusiva Félsica",
    location: "Payún Matrú, Mendoza",
    color: "Gris claro",
    texture: "Porfírica, Traquítica / Microtraquítica",
    crystallinity: "Holocristalina, Inequigranular",
    modalClassification: "Diagrama QAP: Fenotraquita de feldespato alcalino",
    mineralComponents: ["Sanidina / Feldespato alcalino (75% fenocristales, Kfs)", "Piroxeno (20%, Px)", "Minerales Opacos (5%, Op)", "Plagioclasa (Pl)"],
    vesicles: "Matriz afanítica",
    phenocrysts: "Piroxeno y feldespato alcalino (<1mm a 4mm, 30% abundancia)",
    groundmass: "Pasta afanítica (70%) microcristalina con tablillas orientadas según línea de flujo",
    images: [
      {
        url: "media/volcanicas efusivas félsicas/PM-LC-TR.png",
        alt: "Traquita Payún Matrú PM-LC-TR: Muestra de mano y microfotografías mostrando orientación de plagioclasas en textura microtraquítica y cristales de sanidina (Kfs).",
        caption: "Muestra PM-LC-TR. Traquita. (a) Muestra de mano, donde se observa la pasta afanítica, fenocristales de piroxeno (Px) y feldespato alcalino (Kfs). En (b), (c), (d), (e) y (f) se encuentra la muestra bajo el microscopio petrográfico, donde en (b) se observa las plagioclasas (Pl) orientadas, dando lugar a la textura micro traquítica, en (c) un cristal de feldespato alcalino (Kfs) inmerso en la pasta en nicoles cruzados, en (d) una fotomicrografía en nicoles paralelos y otra en nicoles cruzados, donde en ambos se ve piroxenos (Px), mineral opaco (Op) y las plagioclasas (Pl) de la pasta, en (e) lámina está bajo nicoles paralelos, y se observa un cristal de feldespato alcalino (Kfs) y minerales opacos (Op), y en (f) está bajo nicoles cruzados, un cristal de Kfs y de Px."
      }
    ],
    description: "Roca color gris claro, compuesta por fenocristales de piroxeno y feldespato alcalino de tamaño medio (<1mm a 4mm), con abundancia de fenocristales de 30%. Inmersos en una pasta afanítica, con una abundancia de 70%. La textura es, por lo tanto, porfírica en muestra de mano. En corte delgado la roca es holocristalina e inequigranular, con una pasta microcristalina de textura traquítica, ya que posee tablillas de feldespato alcalino y/o plagioclasa subhedrales siguiendo una línea de flujo. Los fenocristales de sanidina dan una abundancia del 75%, los fenocristales de piroxenos tienen una abundancia del 20%, y opacos con un 5%. Realizando el conteo modal de los fenocristales y la clasificación del diagrama QAP para rocas volcánicas la roca es una fenotraquita de feldespato alcalino."
  },
  {
    id: "sl-lc-san-luis",
    name: "SL-LC",
    classification: "Andesita",
    category: "felsicas",
    categoryLabel: "Volcánica Efusiva Félsica",
    location: "San Luis",
    color: "Gris claro",
    texture: "Porfírica, Seriada",
    crystallinity: "Holocristalina, Inequigranular",
    modalClassification: "Diagrama QAP: Andesita",
    mineralComponents: ["Plagioclasa subhedral con maclas polisintéticas (40%, <1mm a 5mm)", "Anfíbol euhedral (15%, <1mm a 3mm, Anf/Am)", "Piroxeno (5%, <1mm a 2mm, Px)", "Feldespato alcalino (Fk)", "Opacos (Op)"],
    vesicles: "Matriz densa",
    phenocrysts: "Fenocristales (60%) de Pl, Anf y Px con variación gradual de tamaño",
    groundmass: "Pasta afanítica (40%) micro a criptocristalina de textura seriada",
    images: [
      {
        url: "media/volcanicas efusivas félsicas/SL-LC.jpeg",
        alt: "Andesita SL-LC: Muestra de mano porfírica y microfotografías con aumento 4x y 10x de cristales de plagioclasa, anfíbol, piroxeno y pasta.",
        caption: "Muestra SL-LC. a) Muestra de mano. Se observan los fenocristales en una pasta afanítica, dando textura porfírica. b) Un acercamiento de la muestra de mano, donde se observan fenocristales de plagioclasa (Pl) y anfíbol (Am). c) Fotomicrografía de la muestra en aumento 4x/0.10P bajo nicoles cruzados, donde se observan cristales de plagioclasa (Pl), anfíboles (Am) y minerales opacos (Op). d), e) y f) fotomicrografía en nicoles cruzados con aumento 10x/0.25P: d) cristal de piroxeno (Px), opacos y plagioclasa, e) anfíbol, feldespato alcalino (Fk) y plagioclasa, f) anfíbol, plagioclasa y la pasta."
      },
      {
        url: "media/volcanicas efusivas félsicas/SL-LC 1.png",
        alt: "Andesita SL-LC: Fotomicrografías y corte delgado de la muestra SL-LC.",
        caption: "Muestra SL-LC. Fotomicrografías adicionales de la muestra bajo el microscopio petrográfico."
      }
    ],
    description: "Roca gris claro de textura porfírica con fenocristales 60% inmersos en una pasta afanítica con abundancia 40%. Los fenocristales observados son plagioclasa subhedral (<1mm a 5mm) 40%, anfíbol euhedral (<1mm a 3mm) 15% de abundancia y piroxeno (<1mm a 2mm) 5%. En corte delgado se determinó que la roca es holocristalina inequigranular, con una textura seriada que representa una transición gradual del tamaño de grano de los cristales, pasando de los fenocristales hasta ser afaníticos (micro- y criptocristalino). Teniendo en cuenta la descripción se realizó un reconteo modal de los cristales, el resultado se aplicó al diagrama QAP, y se clasificó como una andesita."
  },

  // =========================================================================
  // 3. ROCAS PIROCLÁSTICAS (9 MUESTRAS) - CARPETA: media/Rocas Piroclásticas/
  // =========================================================================
  {
    id: "cal-21-2a",
    name: "CAL 21-2a",
    classification: "Ignimbrita lapilítica vítrea",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Curaco, Río Negro",
    color: "Marrón",
    texture: "Eutaxítica, Fragmentosa",
    crystallinity: "Matriz vítrea",
    modalClassification: "Ignimbrita lapilítica vítrea",
    mineralComponents: ["Vitroclastos / Fiammes (70%, hasta 80 mm)", "Cristaloclastos de Cuarzo anhedral (20%, <2 mm)", "Litoclastos volcánicos (10%, <5 mm)", "Venillas de Cuarzo"],
    vesicles: "Fiammes soldados y deformados",
    phenocrysts: "Cristaloclastos de cuarzo fracturado y fiammes recristalizados",
    groundmass: "Matriz vítrea con venillas de cuarzo secundario",
    images: [
      {
        url: "media/piroclasticas/CAL 21-2a.png",
        alt: "Ignimbrita lapilítica vítrea CAL 21-2a: Muestra macroscópica con fiammes; fotomicrografías con nicoles paralelos y cruzados mostrando deformación eutaxítica y venillas de cuarzo.",
        caption: "CAL 21-2a. Ignimbrita. A. Muestra macroscópica de la roca. B. Acercamiento señalando los fiammes (Fiam), las fracturas de Qz (Fract. Qz) y los litoclastos volcánicos (Lit). C. Fotomicrografía de lámina delgada con nicoles paralelos remarcando los fiammes. D. Fotomicrografía con nicoles cruzados señalando fracturas de cuarzo y fiammes. E. Fotomicrografía con nicoles cruzados enseñando un litoclasto volcánico."
      }
    ],
    description: "Roca de coloración marrón compuesta por cristaloclastos de cuarzo anhedral, en un 20% de un tamaño menor a 2 milímetros, vitroclastos fiammes que presentan tamaños variables, pero que no superan los 80 milímetros; se encuentran distribuidos en la muestra en un 70%. Algunos fiammes presentan recristalización, la cual es inferida como posterior a la formación de la roca. Finalmente, se observan litoclastos de origen volcánico que no superan los 5 milímetros de tamaño y se encuentran distribuidos en la roca en un 10%. La muestra posee una matriz vítrea, y venillas rellenas de cuarzo, el cual es de origen posterior a la formación de la misma. Por lo mencionado anteriormente, es posible inferir que la muestra presenta una textura eutaxítica y se la puede clasificar como una ignimbrita lapilítica vítrea."
  },
  {
    id: "cal-21-2b",
    name: "CAL 21-2b",
    classification: "Ignimbrita lapilítica lítica",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Curaco, Río Negro",
    color: "Rojizo",
    texture: "Eutaxítica, Esferulítica",
    crystallinity: "Matriz vítrea con esferulitas",
    modalClassification: "Ignimbrita lapilítica lítica",
    mineralComponents: ["Litoclastos (45%, 1mm a >5mm)", "Cristaloclastos de Cuarzo y Plagioclasa (35%, <=1mm)", "Vitroclastos de Fiammes (20%, 5mm)", "Esferulitas"],
    vesicles: "Fiammes deformados y plegados dúctilmente",
    phenocrysts: "Cristaloclastos de Pl y Qz de bordes irregulares",
    groundmass: "Matriz vítrea con esferulitas por desvitrificación",
    images: [
      {
        url: "media/piroclasticas/CAL 21-2b.jpeg",
        alt: "Ignimbrita lapilítica lítica CAL 21-2b: Muestra de mano con litoclastos; microfotografías con nicoles paralelos de esferulitas y fiammes elongados plegados dúctilmente.",
        caption: "Muestra CAL-21-2B de Curaco (Río Negro). (a) Imagen en muestra de mano que muestra cristaloclastos de plagioclasa (Pl) y cuarzo (Qz), junto con litoclastos (Lit) embebidos en una matriz de aspecto vítreo. (b) Detalle de la misma muestra donde se observan fiammes (Fm) deformados, indicativos de flujo piroclástico soldado. (c) Imagen en lámina delgada con NP donde se distinguen estructuras de esferulitas (Ef). (d) Cristaloclasto de plagioclasa (Pl) y litoclasto (Lit) inmersos en una matriz vítrea. (e) Fiamme (Fm) elongado y plegado, observado con NP, con evidencia de deformación dúctil durante la compactación. (f) Cristaloclastos de cuarzo (Qz) y plagioclasa (Pl), con bordes irregulares."
      }
    ],
    description: "Roca de color rojizo formada por litoclastos de 1mm a más de 5mm de longitud con una abundancia de 45%; cristaloclastos de cuarzo y plagioclasa 35% con un tamaño fino de <=1mm; y por último vitroclastos de fiammes (5mm) con una abundancia de 20%. La roca presenta textura eutaxítica. En corte delgado se pudieron observar esferulitas desvitrificando fiammes, dando una microtextura esferulítica. La disposición de los fiammes que se encuentran en la matriz vítrea se encuentran amoldados a la forma de los cristaloclastos. Teniendo en cuenta el porcentaje y tamaño de los componentes la roca es una ignimbrita lapilítica lítica."
  },
  {
    id: "cal-21-3",
    name: "CAL 21-3",
    classification: "Ignimbrita lapilítica cristalina",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Curaco, Río Negro",
    color: "Rojizo con manchas de oxidación de hierro",
    texture: "Fragmentosa, Eutaxítica",
    crystallinity: "Matriz vítrea",
    modalClassification: "Ignimbrita lapilítica cristalina",
    mineralComponents: ["Cristaloclastos de Cuarzo fracturado, Plagioclasa y Feldespato alcalino (90%, <2-3 mm)", "Litoclastos metamórficos y volcánicos (5%, hasta 12 mm)", "Vitroclastos / Fiammes (5%)"],
    vesicles: "Matriz vítrea con fiammes subordinados",
    phenocrysts: "Cristaloclastos de cuarzo fracturados y feldespatos alterados",
    groundmass: "Matriz vítrea teñida por oxidación de hierro",
    images: [
      {
        url: "media/piroclasticas/CAL 21-3.png",
        alt: "Ignimbrita lapilítica cristalina CAL 21-3: Muestra macroscópica y fotomicrografías con nicoles paralelos y cruzados mostrando litoclastos metamórficos y volcánicos.",
        caption: "CAL 21-3. Ignimbrita. A. Muestra macroscópica de la roca. B. Acercamiento señalando sus cristaloclastos (Qz, Pl, Kfs) y litoclastos metamórficos (Lm) y volcánicos (Lv). C-D. Fotomicrografías de lámina delgada con nicoles paralelos resaltando los fiammes (F), litoclastos y cristaloclastos. E. Fotomicrografía con nicoles cruzados resaltando las texturas volcánicas y metamórficas de los litoclastos."
      }
    ],
    description: "Roca de color rojizo, de textura fragmentosa y eutaxítica con cristaloclastos de tamaño fino (<2-3 mm) de cuarzo, plagioclasa y feldespato alcalino dentro de una matriz vítrea. Los cristaloclastos (90%) son de feldespato alcalino y plagioclasa se presentan de forma anhedral, mientras que los cristaloclastos de cuarzo están fracturados y los feldespatos parcialmente alterados. Además posee litoclastos (5%) volcánicos subredondeados de tamaño medio y grueso (12 mm). Por último, los vitroclastos corresponden a escasos fiammes divisibles en la matriz vítrea (5%). Esta matriz está teñida por oxidación de hierro en algunos sectores. La muestra corresponde a una ignimbrita lapilítica cristalina."
  },
  {
    id: "cal-21-9-3",
    name: "CAL 21-9-3",
    classification: "Ignimbrita lapilítica cristalina",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Curaco, Río Negro",
    color: "Rojiza",
    texture: "Eutaxítica, Esferulítica",
    crystallinity: "Matriz vítrea",
    modalClassification: "Ignimbrita lapilítica cristalina",
    mineralComponents: ["Cristaloclastos de Pl, Kfs, Qz fracturado, Epidoto, Opacos (60%, <1 a 2 mm)", "Vitroclastos de Pómez y Fiammes (30%, 1 a 5 cm)", "Litoclastos metamórficos (10%)", "Clorita", "Anfíbol"],
    vesicles: "Fiammes y vitroclastos de pómez desvitrificados en esferulitas",
    phenocrysts: "Cristaloclastos de Pl, Kfs, Qz y Ep",
    groundmass: "Matriz vítrea con desarrollo de microtextura esferulítica",
    images: [
      {
        url: "media/piroclasticas/CAL 21-9-3.jpeg",
        alt: "Ignimbrita lapilítica cristalina CAL 21-9-3: Muestra de mano con vitroclastos de pómez y epidoto; fotomicrografías con fiammes residuales y esferulitas de desvitrificación.",
        caption: "Muestra Cal 21-9-3 de Curaco (Río Negro). a) Fotografía de mano mostrando vitroclastos de pómez (Vit) y cristaloclastos de epidoto (Ep) inmersos en una matriz. b) Lámina delgada en nicoles paralelos (NP) con fiammes (Fm) y litoclastos metamórficos (Lit). c) Detalle de corte en NP de fiammes residuales (Fm) y esferulitas (Ef) secundarias producida por desvitrificación de los vitroclastos. d) Vista en nicoles cruzados (NX) con agregados de clorita (Chl), epidoto (Ep) y esferulitas (Ef). e) Corte en NP mostrando cristaloclastos de clorita (Chl) en la matriz. f) Corte en NX evidenciando cristaloclastos de plagioclasa (Pl) y de feldespato potásico (Fsp)."
      }
    ],
    description: "Roca rojiza que posee cristaloclastos de un tamaño medio (<1mm a 2mm) de plagioclasa subhedral, feldespato alcalino subhedral, cuarzo anhedral, epidoto, dando una abundancia de 60%; se distinguieron vitroclastos de pómez y fiammes con un tamaño entre 1 cm a 5 cm de longitud y una abundancia de 30%. También se observaron litoclastos metamórficos en corte delgado con una abundancia de 10%. En corte delgado también se observaron cristaloclastos de plagioclasa, feldespato, cuarzo fracturado, y opacos, inmersos en una matriz vítrea. También se observó anfíbol, reemplazos de epidoto y clorita en algunos cristales, además se presentan fiammes desvitrificadas en esferulita dando así una microtextura esferulítica. La roca presenta una textura eutaxítica. Teniendo en cuenta los porcentajes de los componentes, se clasificó a esta roca como una ignimbrita lapilítica cristalina."
  },
  {
    id: "ppch-marifil",
    name: "PPCH (Marifil)",
    classification: "Ignimbrita lapilítica cristalina",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Marifil, Río Negro",
    color: "Gris oscuro",
    texture: "Eutaxítica",
    crystallinity: "Matriz vítrea",
    modalClassification: "Ignimbrita lapilítica cristalina",
    mineralComponents: ["Cristaloclastos de Biotita, Cuarzo fracturado, Feldespato potásico alterado a sericita, Plagioclasa (75%)", "Vitroclastos / Fiammes (20%)", "Litoclastos alterados (5%)"],
    vesicles: "Fiammes alineados en la matriz",
    phenocrysts: "Cristaloclastos de Fld-K y Bt alineados",
    groundmass: "Matriz vítrea orientada",
    images: [
      {
        url: "media/piroclasticas/PPCH.jpeg",
        alt: "Ignimbrita lapilítica cristalina PPCH Marifil: Muestra de mano y microfotografías con nicoles paralelos y cruzados mostrando fiammes, biotita alineada y cuarzo fracturado.",
        caption: "Muestra PPCH de Marifil (Río Negro). a) Fotografía de muestra de mano, donde se señalan cristaloclastos de feldespato potásico (Fld-k) y biotita (Bt). b) Lámina delgada en NP, se señala fiamme y biotita (Bt) alineadas en la matriz. c) Lámina delgada en NX donde se observa centrado un litoclasto. d) Lámina delgada en NP centrado en cuarzo (Qz) fracturado en la matriz. e) Lámina delgada en NX mostrando un cristaloclasto de feldespato potásico (Fsp-k) con alteración a sericita."
      }
    ],
    description: "Roca gris oscuro. Se observan cristaloclastos de cuarzo, feldespato K, y biotita, dando una abundancia de 70%, y se encuentran inmersos en una matriz vítrea con una abundancia de 60%. En corte delgado se observan los cristaloclastos de biotita, cuarzo fracturado, feldespato K (algunos alterados a sericita), y plagioclasa, dando un 75% de cristaloclastos; también se observaron fiammes (20%), y litoclastos alterados (5%). Posee una textura eutaxítica. Teniendo en cuenta el porcentaje y tamaño de los componentes la roca es una ignimbrita lapilítica cristalina."
  },
  {
    id: "cal-21-15",
    name: "CAL 21-15",
    classification: "Ignimbrita lapilítica vítrea",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Curaco, Río Negro",
    color: "Marrón claro",
    texture: "Eutaxítica",
    crystallinity: "Matriz vítrea",
    modalClassification: "Ignimbrita lapilítica vítrea",
    mineralComponents: ["Vitroclastos de Fiammes paralelos (60%, longitud hasta 10mm)", "Litoclastos ígneos y metamórficos (25%, hasta 3mm)", "Cristaloclastos de Cuarzo anhedral, Plagioclasa subhedral y Opacos (15%, <2mm)"],
    vesicles: "Fiammes elongados con orientación preferencial por compactación y soldadura",
    phenocrysts: "Cristaloclastos de Pl y Qz; fragmentos de cuarzo en relleno de fracturas",
    groundmass: "Matriz vítrea orientada evidenciando flujo y compactación post-deposición",
    images: [
      {
        url: "media/piroclasticas/CAL 21-15.jpeg",
        alt: "Ignimbrita lapilítica vítrea CAL 21-15: Muestra de mano y microfotografías en nicoles paralelos y cruzados con fiammes soldados, plagioclasas deformadas y fracturas rellenas de cuarzo.",
        caption: "Muestra Cal 21-15 de Curaco Río Negro. (a) Muestra de mano donde se observan fiammes (Fm) elongados con orientación preferencial, producto de la compactación y soldadura del material piroclástico. (b) Cristaloclastos de plagioclasa (Pl) y cuarzo (Qz), junto con litoclastos (Lit). (c) Imagen microscópica con NX que muestra plagioclasas deformadas y elongadas. (d) Acumulación de fragmentos de cuarzo (Qz) dispuestos en relleno de fracturas. (e) Litoclasto (Lit) con bordes irregulares. (f) Imagen con NP donde se destacan fiammes (Fm) y litoclastos (Lit) inmersos en una matriz orientada, evidenciando flujo y compactación post-deposición."
      }
    ],
    description: "Roca de color marrón claro, compuesta por vitroclastos de fiammes paralelos entre sí, con una longitud de hasta 10mm, representando una abundancia de 60%; se observaron litoclastos ígneos y metamórficos de un tamaño mediano hasta 3mm con una abundancia de 25%; por último cristaloclastos de tamaño mediano hasta 3mm de cuarzo anhedral, plagioclasa subhedral y opacos, en un porcentaje de 15% y un tamaño menor de 2mm. La textura es eutaxítica. Además, los componentes se encuentran inmersos en una matriz vítrea. Teniendo en cuenta el porcentaje y tamaño de los componentes la roca es una ignimbrita lapilítica vítrea."
  },
  {
    id: "cur-7",
    name: "CUR 7",
    classification: "Ignimbrita lapilítica vítrea",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Curaco, Río Negro",
    color: "Gris castaña",
    texture: "Eutaxítica",
    crystallinity: "Matriz vítrea",
    modalClassification: "Diagramas de Fisher (1966) y Schmidt (1981): Ignimbrita lapilítica vítrea",
    mineralComponents: ["Vitroclastos de Fiammes (55%, <=5mm)", "Litoclastos sedimentarios y volcánicos (25%, <=1.5cm)", "Cristaloclastos de Cuarzo y Feldespatos (20%)", "Venillas de Cuarzo"],
    vesicles: "Fiammes siguiendo dirección de flujo de alta temperatura",
    phenocrysts: "Cristaloclastos de Qz y Fsp",
    groundmass: "Matriz vítrea con venillas de cuarzo rodeando litoclastos",
    images: [
      {
        url: "media/piroclasticas/CUR 7.jpeg",
        alt: "Ignimbrita lapilítica vítrea CUR 7: Muestra de mano y microfotografías con fiammes alineados según flujo térmico, litoclastos sedimentarios y venillas de cuarzo.",
        caption: "Cur 7. a) Muestra de mano donde se señalan litoclastos, fiammes y venillas de cuarzo; b) Venillas de cuarzo rodeando un litoclasto, fiammes en abundancia; c) Litoclasto sedimentario; d) Litoclasto volcánico, fiammes siguiendo dirección de flujo."
      }
    ],
    description: "Roca de color gris castaña, compuesta por vitroclastos de fiammes principalmente con un tamaño no superior a los 5mm, y una abundancia de 55%. Litoclastos sedimentarios y volcánicos de tamaño variable pero no mayor a 1.5cm con un 25% de abundancia, y por último, cristaloclastos principalmente de cuarzo con presencia también de feldespatos, con una abundancia de 20%. La muestra presenta los componentes inmersos en una matriz vítrea y venillas rellenas de cuarzo. La posición de los fiammes respecto a los litoclastos reflejan una dirección de flujo de una temperatura de alto grado. Por las características anteriormente mencionadas, es posible inferir que la muestra presenta una textura eutaxítica, y según los diagramas de Fisher (1966) y Schmidt (1981) se la puede clasificar como una ignimbrita lapilítica vítrea."
  },
  {
    id: "cal-21-9-2",
    name: "CAL 21-9-2",
    classification: "Toba lapilítica vítrea",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Curaco, Río Negro",
    color: "Gris",
    texture: "Fragmentosa",
    crystallinity: "Matriz vítrea",
    modalClassification: "Toba lapilítica vítrea",
    mineralComponents: ["Vitroclastos de Pómez (50%, <=2.5 cm)", "Cristaloclastos de Cuarzo (30%)", "Litoclastos volcánicos (20%)", "Cavidades"],
    vesicles: "Pómez vesiculadas y cavidades abiertas",
    phenocrysts: "Cristaloclastos de Qz y fragmentos líticos volcánicos",
    groundmass: "Matriz vítrea fragmentosa",
    images: [
      {
        url: "media/piroclasticas/CAL 21-9-2.png",
        alt: "Toba lapilítica vítrea CAL 21-9-2: Muestra macroscópica y fotomicrografías con vitroclastos de pómez, litoclastos volcánicos y cavidades.",
        caption: "CAL 21-9-2. Toba. A. Muestra macroscópica de la roca. B, C y D. Fotomicrografías de lámina delgada, donde se observa en B un litoclasto volcánico (Lt), en C un vitroclasto de pómez (Pm) y en D cristaloclastos de cuarzo (Qz). Además, se observa la presencia de cavidades."
      }
    ],
    description: "Roca de color gris, compuesta por vitroclastos de pómez (50%) de tamaño variable, no mayores a 2,5 cm, cristaloclastos de cuarzo (30%), litoclastos volcánicos (20%) y cavidades, inmersos en una matriz vítrea. Por las características anteriormente mencionadas, es posible inferir que la muestra presenta una textura fragmentosa, y se la puede clasificar como una toba lapilítica vítrea."
  },
  {
    id: "sg-2007-30",
    name: "SG 2007 30",
    classification: "Ignimbrita lapilítica cristalina",
    category: "piroclasticas",
    categoryLabel: "Piroclástica",
    location: "Patagonia",
    color: "Rosa",
    texture: "Eutaxítica, Esferulítica",
    crystallinity: "Matriz vítrea",
    modalClassification: "Ignimbrita lapilítica cristalina",
    mineralComponents: ["Cristaloclastos de Cuarzo fragmentado, Feldespato alcalino y Biotita (60%, 2 a 3 mm)", "Vitroclastos de Fiammes (15 mm) y Pómez (2 a 4 mm) (30%)", "Litoclastos sedimentarios y volcánicos (10%)", "Esferulitas", "Trizas vítreas (Tz)"],
    vesicles: "Fiammes y pómez en matriz vítrea",
    phenocrysts: "Cristaloclastos de Qz, Fsp y Bt",
    groundmass: "Matriz vítrea con esferulitas de desvitrificación y trizas vítreas (Tz)",
    images: [
      {
        url: "media/piroclasticas/SG 2007-30.jpeg",
        alt: "Ignimbrita lapilítica cristalina SG 2007 30: Muestra de mano rosa con cristaloclastos de Qz y Fsp; fotomicrografías con fiammes, pómez, esferulitas y trizas vítreas.",
        caption: "SG 2007 30. Ignimbrita. a) Muestra de mano, se señalan cristaloclastos de cuarzo (Qz) y feldespato (Fsp), como también vitroclastos de fiammes (Fm) y pómez (Pm); b) Vitroclasto de Fiamme centrado (Fm); c) Litoclasto volcánico (Lt); d) Esferulitas centradas producto de desvitrificación (Ef); e y f) Vitroclasto de triza (Tz)."
      }
    ],
    description: "Roca color rosa, con presencia de cristaloclastos (60%) de cuarzo fragmentados de 2 mm, feldespato alcalino de 2 a 3 mm y biotita, vitroclastos de fiammes de 15 mm, y pómez de entre 2 a 4 mm (30%), y litoclastos sedimentarios y volcánicos (10%). También se observan esferulitas. Dichos componentes se encuentran inmersos en una matriz vítrea, y la roca presenta una textura eutaxítica. En base a la descripción realizada, se infiere que la roca clasifica como ignimbrita lapilítica cristalina, con una textura eutaxítica."
  }
];
