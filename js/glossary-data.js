/**
 * Glosario Petrográfico y Abreviaturas Minerales (Whitney & Evans, 2010)
 * Petrología Ígneo-Metamórfica UNRN
 */

const GLOSSARY_DATA = {
  abbreviations: [
    { code: "Pl", name: "Plagioclasa", type: "Mineral formador de roca", desc: "Serie isomórfica de feldespatos cálcico-sódicos (Albita-Anortita)." },
    { code: "Kfs / Fsp", name: "Feldespato Potásico / Alcalino", type: "Mineral formador de roca", desc: "Ortoclasa, microclino o sanidina (KAlSi3O8)." },
    { code: "Qz", name: "Cuarzo", type: "Mineral esencial", desc: "Dióxido de silicio cristalino (SiO2), esencial en rocas félsicas." },
    { code: "Cpx", name: "Clinopiroxeno", type: "Mineral máfico", desc: "Piroxeno monoclínico (e.g. augita, diópsido)." },
    { code: "Opx", name: "Ortopiroxeno", type: "Mineral máfico", desc: "Piroxeno ortorrómbico (e.g. enstatita, hipersteno)." },
    { code: "Ol / Olv", name: "Olivino", type: "Mineral máfico", desc: "Ortosilicato de hierro y magnesio ((Mg,Fe)2SiO4)." },
    { code: "Idg", name: "Iddingsita", type: "Fase de alteración / Reemplazo", desc: "Agregado pseudomórfico rojizo-pardo de arcillas, óxidos y esmectitas formado por alteración deutérica/hidrotermal de olivino." },
    { code: "Bt", name: "Biotita", type: "Mica máfica", desc: "Mica negra rica en Fe y Mg, común en rocas intermedias y félsicas." },
    { code: "Am / Anf", name: "Anfíbol / Hornblenda", type: "Mineral máfico", desc: "Inosilicato de doble cadena, común en andesitas y dacitas." },
    { code: "Op", name: "Mineral Opaco", type: "Accesorio", desc: "Minerales no translúcidos bajo luz polarizada (e.g. magnetita, ilmenita, pirita)." },
    { code: "Ep", name: "Epidoto", type: "Mineral de alteración / Metamórfico", desc: "Sorosilicato de Ca, Al y Fe, característico de alteración propilítica." },
    { code: "Chl", name: "Clorita", type: "Mineral secundario", desc: "Filosilicato hidratado verde que reemplaza a biotita, piroxeno o anfíbol." },
    { code: "Ves", name: "Vesícula", type: "Estructura volcánica", desc: "Cavidad formada por desgasificación y atrapamiento de burbujas de gas en el magma." },
    { code: "Amig", name: "Amígdala", type: "Estructura volcánica", desc: "Vesícula rellenada posteriormente por minerales secundarios (zeolitas, calcita, cuarzo, serpentina)." },
    { code: "Fm / Fiam", name: "Fiamme", type: "Piroclasto", desc: "Fragmento vítreo o de pómez aplanado en forma de lente o llama por compactación y soldadura térmica." },
    { code: "Pm", name: "Pómez", type: "Vitroclasto", desc: "Vidrio volcánico altamente vesiculado de densidad muy baja." },
    { code: "Ef", name: "Esferulita", type: "Microtextura", desc: "Agregado fibroso-radial de cuarzo y feldespato originado por desvitrificación de vidrio volcánico." },
    { code: "Tz", name: "Triza (Shard)", type: "Vitroclasto", desc: "Fragmento microscópico curvado de paredes vítreas rotas por explosiones freatomagmáticas o descompresión." },
    { code: "Lit / Lt", name: "Litoclasto", type: "Componente clástico", desc: "Fragmento de roca preexistente (volcánica Lv, metamórfica Lm, sedimentaria Ls) incorporado al depósito." },
    { code: "Vd", name: "Vidrio Volcánico (Obsidiana / Palagonita)", type: "Fase amorfa", desc: "Matriz vítrea no cristalizada o hidratada." },
    { code: "Mc", name: "Matriz Carbonática", type: "Matriz intersticial", desc: "Material fino de carbonato de calcio entre cristales o clastos." }
  ],
  textures: [
    {
      name: "Textura Porfírica",
      category: "Ígnea Extrusiva / Hipoabisal",
      desc: "Caracterizada por cristales visibles de tamaño notable (fenocristales) inmersos en una pasta o matriz afanítica, microcristalina o vítrea más fina, resultante de dos etapas de enfriamiento."
    },
    {
      name: "Textura Intergranular",
      category: "Ígnea Volcánica Máfica",
      desc: "Arreglo entrecruzado de tablillas de plagioclasa donde los espacios angulares o intersticiales están ocupados por granos poligonales de clinopiroxeno, ortopiroxeno, olivino y minerales opacos."
    },
    {
      name: "Textura Eutaxítica",
      category: "Piroclástica Soldada",
      desc: "Estructura planar o foliada en depósitos piroclásticos (ignimbritas) formada por la compactación, aplastamiento y soldadura plástica de fiammes y fragmentos pumíceos a alta temperatura."
    },
    {
      name: "Textura Seriada",
      category: "Ígnea Inequigranular",
      desc: "Distribución de tamaño de grano continua y gradual, sin saltos discretos, desde los fenocristales más grandes hasta los microlitos de la pasta."
    },
    {
      name: "Textura Traquítica / Microtraquítica",
      category: "Ígnea de Flujo",
      desc: "Alineación y orientación paralela o subparalela de microlitos y tablillas de feldespato/plagioclasa producida por el flujo laminar de la lava antes de su solidificación."
    },
    {
      name: "Textura Subofítica",
      category: "Ígnea Máfica",
      desc: "Tablillas de plagioclasa que se encuentran parcialmente englobadas o penetradas por cristales mayores de clinopiroxeno."
    },
    {
      name: "Textura Intersertal / Hialoofítica",
      category: "Ígnea Hipocristalina",
      desc: "Espacios intersticiales entre las tablillas de plagioclasa ocupados por vidrio volcánico o sus productos de desvitrificación en lugar de minerales cristalinos."
    },
    {
      name: "Textura Felsítica",
      category: "Ígnea Félsica",
      desc: "Pasta criptocristalina o microgranular extremadamente fina compuesta por un intercrecimiento íntimo de cuarzo y feldespato alcalino."
    },
    {
      name: "Textura Glomeroporfírica",
      category: "Ígnea Porfírica",
      desc: "Agrupamiento o aglomeración de fenocristales (glomérulos) de la misma o diferente especie mineral en la pasta."
    }
  ]
};
