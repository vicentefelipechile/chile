document.addEventListener("DOMContentLoaded", (event) => {

    // Crear un conjunto de datos
    var items = new vis.DataSet()
    var argTitle = document.getElementById("arg-title")
    var argDescription = document.getElementById("arg-description")
    var argSources = document.getElementById("arg-sources")

    // Realizar una copia de los elementos de la plantilla
    var saveArgTitle = argTitle.cloneNode(true)
    var saveArgDescription = argDescription.cloneNode(true)
    var saveArgSources = argSources.cloneNode(true)

    // Configurar la línea de tiempo
    var options = {
        height: "18em",
    }

    // Crear la línea de tiempo
    var container = document.getElementById("timeline")
    var timeline = new vis.Timeline(container, items, options)

    var contenido = {
        1: {"title": "Gabriel Boric actuando mal contra sus compañeros", "source": ["https://x.com/camilaemiliasv/status/1757343742057386118?s=20"], "description": "Gabriel Boric actuando mal contra sus compañeros", "date": "2024-02-13"},
        2: {"title": "Jueces de la Corte Suprema de Chile compran 22 autos Lexus", "source": ["https://x.com/Soy_Tu_Aji/status/1757112648854798557?s=20", "https://x.com/Tor25899035/status/1757412835791880211?s=20", "https://www.latercera.com/mtonline/noticia/asi-es-el-lexus-que-escogio-la-corte-suprema-para-sus-ministros-y-que-tiene-un-valor-de-56990000/RRQ3ZBMN5BEO3ATUYWQMN5FJZE/", "https://www.theclinic.cl/2024/02/12/polemica-precios-corte-suprema-aprueba-compra-22-autos-casi-57-millones-para-magistrados-jueces-fiscal/", "https://x.com/Tor25899035/status/1757412835791880211?s=20"], "description": "ChatGPT: La Corte Suprema aprobó la compra de 22 autos de lujo Lexus, con un costo unitario de $56.990.000, para sus magistrados, a pesar de la controversia suscitada por el elevado precio de estos vehículos. La medida, aprobada por 11 votos a favor y dos en contra en una sesión extraordinaria del Pleno, requerirá una inversión total de más de $1.253 millones.\n\nSin embargo, algunos jueces expresaron su disconformidad con la adquisición, argumentando que los autos de alta gama podrían considerarse un lujo innecesario, prefiriendo mantener los Toyota Camry adquiridos en 2014. La decisión contó con el voto en contra del presidente de la Corte Suprema, Ricardo Blanco, y la ministra Andrea Muñoz.\n\nLa renovación de la flota se justificó en base a la antigüedad de los vehículos actuales, cumpliendo con los criterios establecidos por el instructivo de buen uso de recursos fiscales. Aunque inicialmente se buscó adquirir autos Camry Híbrido de la misma marca y modelo que los actuales, la discontinuación del modelo en Chile llevó a la selección del Lexus ES300h como alternativa más viable en el mercado.", "date": "2024-02-12"},
        3: {"title": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "source": ["https://x.com/FutboliPolitica/status/1756854559543025703?s=20", "https://x.com/Yuyodelizqui/status/1755978261547352392?s=20", "https://x.com/anndresrojass/status/1756805744169570785?s=20"], "description": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "date": "2024-02-11"},
        4: {"title": "Inauguran \"Refugios Climaticos\"", "source": ["https://x.com/biobio/status/1758491477749993921?s=20", "https://www.biobiochile.cl/noticias/nacional/region-metropolitana/2024/02/16/los-comentados-refugios-climaticos-inaugurados-por-hassler-son-dispensadores-de-agua.shtml", "https://www.gamba.cl/2024/02/iraci-hassler-refugios-climaticos-bidones/", "https://x.com/Muni_Stgo/status/1758163653444927515?s=20"], "description": "La alcaldesa de Santiago (PC), Irací Hassler, inauguró el 15 de febrero la ampliación de la red de “refugios climáticos” de la Municipalidad de Santiago.\n\nSon basicamente bidones de agua", "date": "2024-02-15"},
        5: {"title": "Personas de viña del mar se quejan de poca ayuda del gobierno", "source": ["https://x.com/manuelsoteldo4/status/1758218133934907639?s=20", "https://x.com/traviejita_/status/1758179236232237264?s=20", "https://x.com/Chileno17039890/status/1758170978612367376?s=20", "https://x.com/Chileno17039890/status/1757808170586771851?s=20", "https://x.com/meganoticiascl/status/1757864792373829954?s=20", "https://x.com/Pk2Giuliana/status/1757782339789148366?s=20", "https://x.com/camilaemiliasv/status/1757719528409092291?s=20", "https://x.com/SebastianRochaZ/status/1757758285241786465?s=20", "https://x.com/KnightAshborn/status/1757752578643767683?s=20", "https://x.com/sergiou01329861/status/1757458252319580620?s=20", "https://x.com/Tor25899035/status/1755293732264460599?s=20", "https://x.com/Iherreraa/status/1754616167014994192?s=20", "https://x.com/DRESTRUM__Pl/status/1758641440044011959?s=20", "https://x.com/Rick1879GP/status/1760719332852535519?s=20", "https://x.com/SebastianRochaZ/status/1761053959811178569?s=20", "https://x.com/zurditabella261/status/1761040143618605163?s=20", "https://x.com/VisionPais2050/status/1761186640251289619?s=20"], "description": "Debido a los incendios ocurridos en febrero, las personas de viña del mar se quejan de poca ayuda del gobierno", "date": "2024-02-15"},
        6: {"title": "Corte suprema sanciono a Juez Daniel Urrutina (PC)", "source": ["https://x.com/Cooperativa/status/1668731652833439744?s=20", "https://www.cooperativa.cl/noticias/pais/judicial/corte-suprema-sanciono-a-juez-urrutia-por-liberacion-de-miembros-de-la-primera-linea-/2023-06-13/170402.html"], "description": "La Corte Suprema sancionó al juez Daniel Urrutia, quien liberó a miembros de la primera línea, las mismas personas que estuvieron en el estallido social del 18 de octubre\n\nChatGPT: La Corte Suprema ha confirmado una sanción contra el juez Daniel Urrutia por su participación en la liberación de 13 imputados vinculados a la \"primera línea\" durante el estallido social.\n\nUrrutia, en marzo de 2020, modificó la medida cautelar de estos individuos, ordenando su liberación inmediata y alegando un supuesto acuerdo del comité de jueces del Séptimo Juzgado de Garantía de Santiago. Esta acción desencadenó un proceso sancionatorio que culminó con una amonestación por parte de la Corte Suprema, la cual quedará registrada en su historial profesional.\n\nEsta no es la primera controversia en la que se ve envuelto Urrutia, quien previamente fue suspendido y trasladado a un tribunal de cobranzas, aunque esta decisión fue revertida posteriormente por la Corte. Urrutia presentó una querella por prevaricación judicial contra los 19 ministros que investigaron su caso, pero esta acción fue declarada inadmisible.\n\nAnteriormente, también fue sancionado por cuestionar el rol de otros jueces en relación con el uso de balines durante el estallido social.", "date": "2023-06-13"},
        7: {"title": "Daniel Urrutina (PC) autoriza videollamada a reos de crimen organizado", "source": ["https://www.meganoticias.cl/nacional/439523-videollamadas-autorizadas-en-carcel-alta-seguridad-15-02-2024.html", "https://x.com/Caplevi1540/status/1758191827742609549?s=20"], "description": "El juez Daniel Urrutia autorizó videollamadas a reos de crimen organizado\n\nChatGPT: El juez Daniel Urrutia autorizó videollamadas para reclusos del Recinto Penitenciario Especial de Alta Seguridad (REPAS), lo que generó tensión entre Gendarmería y el Poder Judicial. El REPAS alberga a los delincuentes más peligrosos de Chile, muchos vinculados al crimen organizado.\n\nLas autoridades temen que estas videollamadas comprometan la seguridad al permitir el contacto con personas no autorizadas. Gendarmería apeló la decisión, lo que llevó a una orden de no innovar suspendiendo la resolución del juez Urrutia.\n\nAdemás, se reveló que líderes del Tren de Aragua realizaron videollamadas desde la cárcel, lo que aumentó la preocupación por la seguridad. Esta disputa no es nueva; en el pasado, en el año 2023, la repartición penitenciaria recurrió a la Corte Suprema para permitir el traslado de reos del Tren de Aragua desde el penal de Acha, en Arica, a otros recintos carcelarios.", "date": "2024-02-15"},
        8: {"title": "Aduanas incauta un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane", "source": ["https://x.com/biobio/status/1758172797023432959?s=20", "https://www.biobiochile.cl/noticias/nacional/region-de-tarapaca/2024/02/15/aduanas-incauta-un-total-de-87-millones-sin-declarar-por-parte-de-ciudadanos-extranjeros-en-colchane.shtml"], "description": "Aduanas incauta un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane\n\nChatGPT: Aduanas incautó un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane, Región de Tarapacá. Las incautaciones se realizaron bajo la Ley 21.632 que penaliza el ingreso y salida de dinero del país sin informar a Aduanas.\n\nEn el primer caso, un conductor boliviano de un bus de la empresa Fer ocultó $27 millones en el ducto de aire acondicionado. En otro incidente, un comerciante boliviano que evadió el control migratorio llevaba consigo $42 millones en su equipaje. Simultáneamente, otro pasajero boliviano intentó ingresar al país con una mochila que contenía $18 millones sin declarar.\n\nTodas las divisas fueron entregadas a la Policía de Investigaciones tras coordinación con el Ministerio Público. La legislación establece que cualquier persona que ingrese o salga de Chile con más de US$10 mil dólares (9.722.500 CLP - 2024-02-17) debe informarlo a Aduanas; de lo contrario, se considera un delito y se incauta el 100% de las divisas, en lugar del 30% como era antes de la mencionada ley.", "date": "2024-02-15"},
        9: {"title": "Debido a crisis financiera, Anuncian cierre del Hospital de Niños de Viña del Mar", "source": ["https://www.emol.com/noticias/Nacional/2024/02/12/1121436/cierre-hospital-de-ninos-vina.html"], "description": "Debido a crisis financiera, Anuncian cierre del Hospital de Niños de Viña del Mar", "date": "2024-02-12"},
        10: {"title": "Sebastian Piñera Fallece", "source": ["https://x.com/DRESTRUM__Pl/status/1755033030580752715?s=20", "https://x.com/eduardomenoni/status/1754957047550902335?s=20"], "description": "Sebastian Piñera Fallece", "date": "2024-02-06"},
        11: {"title": "Jorge Alis es bajado del evento \"Juntos Chile se levanta\"", "source": ["https://x.com/publimemetro/status/1758876203446940017?s=20", "https://twitter.com/fachininja/status/1758883572021113325", "https://twitter.com/biobio/status/1758842617679200282", "https://www.biobiochile.cl/noticias/espectaculos-y-tv/tv/2024/02/17/no-se-pueden-decir-ciertas-cosas-en-television-jorge-alis-acuso-censura-en-evento-solidario.shtml", "https://www.instagram.com/p/C3b4Oehsm5l/"], "description": "Jorge Alís acusa de \"Censura\" durante el evento solidario de \"Juntos Chile se levanta\"\n\nChatGPT: El humorista argentino Jorge Alís acusó que fue censurado y no se le permitió subir al escenario del evento \"Juntos Chile se levanta\". A pesar de estar programado como uno de los shows de humor de la noche, nunca apareció en escena, lo que dejó al público esperándolo durante casi nueve horas. Alís explicó en un video en redes sociales que les impidieron subir al escenario porque sus comentarios críticos y sociales no eran aceptables para la televisión. Expresó su molestia por la censura y anunció que realizará otros shows solidarios sin restricciones.", "date": "2024-02-17"},
        12: {"title": "Capturan al reo mas buscado de Chile", "source": ["https://www.biobiochile.cl/noticias/nacional/region-de-magallanes/2024/02/18/pdi-captura-a-reo-mas-buscado-de-chile-se-fugo-de-carcel-hace-10-anos-con-condenas-por-muertes-y-robo.shtml", "https://x.com/biobio/status/1759301862635835821?s=20", "https://www.pagina7.cl/noticias/actualidad/2024/02/18/reo-mas-buscado-de-chile-fue-capturado-en-punta-arenas-se-fugo-hace-10-anos-de-la-carcel"], "description": "Capturan al reo mas buscado de Chile\n\nChatGPT: Raúl Patricio Ampuero Miranda, el reo más buscado de Chile que se fugó hace 10 años, fue capturado por la PDI. Ampuero tenía un historial delictivo extenso, incluyendo homicidio y robo con violencia. A pesar de su peligrosidad, logró evadir a la policía durante años, incluso saliendo del país hacia Argentina y regresando. Fue detenido tras una orden judicial para registrar su casa. Ahora enfrentará los 10 años restantes de su condena, además de nuevas acusaciones por crímenes cometidos mientras estaba prófugo. La fecha de formalización está programada para el 21 de marzo.", "date": "2024-02-18"},
        13: {"title": "Censo 2002", "source": ["https://twitter.com/JavierDiazCCR/status/1759567212925337890", "https://celade.cepal.org/censosinfo/Boletas/CL_BDef_2002.pdf", "https://web.archive.org/web/20221011051125/https://celade.cepal.org/censosinfo/Boletas/CL_BDef_2002.pdf"], "description": "La Cédula Censal de 2002 NO CONTIENE PREGUNTA ALGUNA sobre Nombre y MENOS apellido.", "date": "2002-06-01"},
        14: {"title": "Censo 2012", "source": ["https://twitter.com/JavierDiazCCR/status/1759567212925337890", "https://web.archive.org/web/20111112084128/http://www.censo.cl/wp-content/uploads/2011/11/cuestionario_censal_2012.pdf"], "description": "Aquella de 2012 pregunta solamente el NOMBRE DE PILA.", "date": "2012-06-01"},
        15: {"title": "Censo 2017", "source": ["https://twitter.com/JavierDiazCCR/status/1759567212925337890", "http://www.censo2017.cl/wp-content/uploads/2017/04/CUESTIONARIO-CENSO-2017-OF.pdf", "https://web.archive.org/web/20230409070900/http://www.censo2017.cl/wp-content/uploads/2017/04/CUESTIONARIO-CENSO-2017-OF.pdf"], "description": "Aquella de 2017 pregunta NOMBRE y APELLIDO \"De todas las personas de este hogar que ALOJARON anoche en esta vivienda.\"", "date": "2017-06-01"},
        16: {"title": "Censo 2024", "source": ["https://twitter.com/JavierDiazCCR/status/1759567212925337890", "https://censo2024.inechile.cl/file/cuestionario-censal-2024.pdf", "https://web.archive.org/web/20240102172815/https://censo2024.inechile.cl/file/cuestionario-censal-2024.pdf"], "description": "La Cédula Censal de 2024 exige el NOMBRE y APELLIDO \"De todas las personas que CONFORMAN este hogar y que RESIDEN HABITUALMENTE en esta vivienda.\"", "date": "2024-06-01"},
        17: {"title": "Juez Urrutia otorgó beneficio a narco", "source": ["https://www.t13.cl/noticia/ex-ante/juez-urrutia-otorgo-beneficio-carcelario-narco-quien-comparte-abogado-pese-obje-21-2-2024?utm_source=Twitter&utm_medium=Stack&utm_campaign=Share13&utm_id=share13", "https://www.biobiochile.cl/noticias/nacional/chile/2024/02/21/juez-urrutia-otorgo-beneficio-a-narco-con-el-que-comparte-abogado-pese-a-oposicion-de-gendarmeria.shtml", "https://www.biobiochile.cl/noticias/nacional/region-metropolitana/2024/02/20/imputado-por-asesinato-de-cabo-palma-fue-sancionado-sin-visitas-juez-urrutia-lo-habia-beneficiado.shtml", "https://x.com/T13/status/1760346891085082829?s=20"], "description": "ChatGPT: El juez Daniel Urrutia, del 7° Juzgado de Garantía de Santiago, otorgó beneficios carcelarios, incluyendo visitas íntimas, a 13 reclusos, entre ellos Rafael Marín Vielma, un ciudadano colombiano condenado por tráfico de éxtasis.\n\nMarín comparte abogado con Urrutia, Carlos Quezada, quien también ha representado al juez en otras instancias legales. Urrutia ordenó a Gendarmería cumplir con los beneficios carcelarios, incluso tras objetarles que no hay instalaciones para visitas íntimas en la Cárcel de Alta Seguridad.\n\nSi bien Gendarmería apeló, Urrutia insistió en que se cumpliera la orden judicial. Quezada, el abogado compartido por Urrutia y Marín, es conocido por representar a clientes en casos de alta notoriedad, incluyendo miembros de bandas criminales y narcotraficantes.", "date": "2024-02-21"},
        18: {"title": "Despidos masivos", "source": ["https://twitter.com/meganoticiascl/status/1760010662338801944"], "description": "Evento importante", "date": "2024-02-20"},
        19: {"title": "Concejala de Convergencia Social vendía entradas de cortesía de Fantasilandia", "source": ["https://twitter.com/GAMBA_CL/status/1760071640967250319", "https://www.gamba.cl/2024/02/concejala-convergencia-social-fantasilandia/", "https://www.t13.cl/noticia/politica/convergencia-social-denuncio-concejala-su-partido-acusan-vender-entradas-cortes-20-2-2024", "https://www.biobiochile.cl/noticias/nacional/region-metropolitana/2024/02/20/denuncian-a-concejala-de-santiago-que-venderia-entradas-de-cortesia-para-fantasilandia.shtml"], "description": "ChatGPT: El partido Convergencia Social (CS => PC) denunció a su concejala de Santiago, Yasna Tapia, por presuntamente vender entradas de cortesía para Fantasilandia, utilizando recursos públicos de manera indebida. Ante esta situación, el partido calificó la acusación como \"intolerable\" y presentó una denuncia ante el tribunal regional para esclarecer el caso y aplicar las sanciones correspondientes.\n\nLa diputada Emilia Schneider, también miembro de Convergencia Social, respaldó la respuesta del partido, afirmando que no se puede tolerar ningún tipo de aprovechamiento de la función pública y que la concejala debe responder como cualquier persona. Además, mencionó que se espera una investigación por parte de Contraloría para resolver el caso.", "date": "2024-02-20"},
        20: {"title": "Secuestran a teniente venezolano", "source": ["https://www.biobiochile.cl/noticias/nacional/chile/2024/02/21/denuncian-secuestro-de-teniente-coronel-r-venezolano-residente-en-chile-sospechan-incursion-militar.shtml", "https://x.com/MatiasBellolio/status/1760375200917369172", "https://x.com/inforportalnews/status/1760388913225458007", "https://www.chvnoticias.cl/nacional/denuncian-secuestro-teniente-coronel-r-venezolano-asilo-chile_20240221/", "https://x.com/neoliberalchile/status/1760377632854569160", "https://x.com/agusantonetti/status/1760408073846300928?s=20", "https://x.com/EmmaRincon/status/1760415594594095577?s=20", "https://www.infobae.com/venezuela/2024/02/21/denuncian-que-agentes-de-la-dgcim-chavista-se-infiltraron-en-chile-y-secuestraron-a-un-militar-desertor-venezolano-que-vivia-alli/", "https://x.com/EmmaRincon/status/1760415594594095577?s=20", "https://www.t13.cl/noticia/nacional/monsalve-confirmo-secuestro-exmilitar-venezolano-chile-21-2-2024", "https://www.biobiochile.cl/noticias/nacional/chile/2024/02/21/estamos-en-alerta-exrepresentante-de-guaido-en-chile-y-presunto-secuestro-de-teniente-venezolano.shtml"], "description": "ChatGPT: La familia del teniente venezolano residente en Chile, Ronald Ojeda Moreno, denunció su posible secuestro ante el Ministerio Público. Ojeda, quien recibió asilo político en Chile, fue sacado de su departamento en Santiago por individuos venezolanos, posiblemente vinculados a la inteligencia militar de Nicolás Maduro o al crimen organizado.", "date": "2024-02-21"},
        21: {"title": "Monsalve firma acuerdo en Venezuela para combatir al crimen organizado", "source": ["https://www.emol.com/noticias/Nacional/2024/01/18/1119058/monsalve-venezuela-acuerdo-colaboracion-mutua.html"], "description": "ChatGPT: Chile y Venezuela firmaron un acuerdo para colaborar mutuamente contra el crimen organizado transnacional, facilitando el intercambio de información para investigar delitos como los violentos, cibernéticos y financieros.\n\nLease la nota ", "date": "2024-01-18"},
        22: {"title": "Informacion sobre secuestro del teniente venezolano", "source": ["https://vicentefelipechile.github.io/chile/media/[twitter] javier_gm—2024.02.21—1760427374187884993—KfTXZYU0HoBGpd2t.mp4", "https://vicentefelipechile.github.io/chile/media/[twitter] T13—2024.02.23—1760977802676064633—YhajOIxsiva8-JJG.mp4", "https://x.com/T13/status/1760977802676064633?s=20", "https://x.com/javier_gm/status/1760427374187884993?s=20", "https://x.com/pablolirar/status/1760642607435169978?s=20", "https://x.com/DRESTRUM__Pl/status/1760633940476371183?s=20", "https://x.com/DRESTRUM__Pl/status/1760659852265771248?s=20", "https://x.com/laderechadiario/status/1760650648784437568?s=20", "https://x.com/LordIridikron/status/1760648030246568293?s=20", "https://x.com/SebastianRochaZ/status/1760642342627754051?s=20", "https://x.com/SchubertRubio/status/1760406171624542689?s=20", "https://x.com/Patriota_Reina/status/1760769620011516174?s=20", "https://x.com/EarthquakeChil1/status/1760802022247268729?s=20", "https://x.com/solo_gemma/status/1760797512623964555?s=20", "https://x.com/camilaemiliasv/status/1760817341779120457?s=20"], "description": "Un grupo de venezolanos (Posiblemente de la Inteligencia militar de Venezuela) secuestraron a un teniente venezolano que se encontraba en Chile, el teniente habia desertado del ejercito venezolano y habia recibido asilo en Chile.\n\nRadio Bio Bio revela video en q aparecen personas vestidas con camuflaje y fuertemente armadas en dos Toyota 4 Runner a nombre de Venezolanos, en las cercanías del Aeropuerto de Santiago.", "date": "2024-02-22"},
        23: {"title": "Inteligencia militar venezolana en Chile", "source": ["https://x.com/_malacostraceo_/status/1760661002327138719?s=20", "https://x.com/Patriota_Reina/status/1760625794047737874?s=20", "https://x.com/javier_gm/status/1760427374187884993?s=20", "https://x.com/WenaChile/status/1760736451787149493?s=20", "https://www.biobiochile.cl/noticias/internacional/america-latina/2024/02/22/exjefe-de-inteligencia-de-guaido-por-secuestro-en-chile-maduro-pudo-subcontratar-al-tren-de-aragua.shtml"], "description": "ChatGPT: La inteligencia militar venezolana se encuentra en Chile, secuestraron a un teniente venezolano que se encontraba en Chile, el teniente habia desertado del ejercito venezolano y habia recibido asilo en Chile.", "date": "2024-02-22"},
        24: {"title": "Camila Vallejo confirma colaboracion con gobierno venezolano por secuestro de exmilitar", "source": ["https://x.com/latercera/status/1760709222373679194?s=20", "https://www.latercera.com/politica/noticia/ministra-vocera-confirma-que-el-ejecutivo-ya-esta-trabajando-con-gobierno-venezolano-por-secuestro-de-exmilitar/DQCKBDMWQZEATDCYTHSBRKKDVY/", "https://www.lanacion.cl/secuestro-de-exmilitar-venezolano-vallejo-remarca-que-se-han-hecho-contactos-a-nivel-de-gobierno-con-ese-pais/"], "description": "ChatGPT: La ministra vocera de gobierno, Camila Vallejo (PC), confirmó que el Ejecutivo chileno ya ha establecido contacto con el gobierno venezolano en respuesta al secuestro del exmilitar venezolano Ronald Ojeda en Independencia.\n\nVallejo mencionó que el presidente, el canciller y la ministra del Interior han sostenido reuniones con las instituciones correspondientes para colaborar en la investigación. Además, el embajador de Chile en Venezuela está gestionando una conversación con el viceministro de las Américas de la Cancillería Venezolana, y se ha establecido contacto a nivel policial y a través de las fiscalías pertinentes.", "date": "2024-02-22"},
        25: {"title": "Boric interrumpe sus vacaciones por secuestro", "source": ["https://www.latercera.com/politica/noticia/boric-interrumpe-vacaciones-y-encabeza-reunion-por-secuestro-de-venezolano-y-pide-gestiones-a-cancilleria/BTALNSIUTVHGFKV3WPMYJK34X4/", "https://x.com/latercera/status/1760979060962852960?s=20"], "description": "ChatGPT: El presidente Gabriel Boric interrumpió sus vacaciones para liderar una reunión de emergencia sobre el secuestro del exmilitar venezolano Ronald Ojeda, quien está siendo investigado por el Ministerio Público y las policías chilenas.\n\nEn la reunión telemática, participaron ministros como Carolina Tohá y Luis Cordero, así como el canciller Alberto van Klaveren. Boric instruyó a la Cancillería para que realice gestiones con Venezuela y otros países vecinos, ante la posibilidad de que el secuestro esté vinculado al régimen de Maduro.\n\nEl gobierno se comprometió a querellarse por el secuestro y se han tomado medidas para coordinar la respuesta ante este caso de alta gravedad, que ha acaparado la agenda gubernamental.", "date": "2024-02-22"},
        26: {"title": "Extranjeros pueden recibir creditos hipotecarios", "source": ["https://www.chvnoticias.cl/nacional/proyecto-personas-extranjeras-creditos-hipotecarios_20240222/", "https://x.com/CHVNoticias/status/1760761339557896228?s=20"], "description": "ChatGPT: El diputado chileno Juan Manuel Fuenzalida presentó un proyecto de ley para permitir que extranjeros no residentes en Chile accedan a créditos hipotecarios, con el objetivo de impulsar el mercado inmobiliario y la construcción en el país. El proyecto busca modificar la legislación actual para facilitar este proceso, tomando como referencia el éxito del estado de Florida en Estados Unidos en la atracción de compradores extranjeros.", "date": "2024-02-22"},
        27: {"title": "Intento de usurpacion de terrenos en Quilpue", "source": ["https://twitter.com/biobio/status/1760977829959958858", "https://www.biobiochile.cl/noticias/nacional/region-de-valparaiso/2024/02/23/denuncian-al-menos-dos-intentos-de-usurpacion-de-terrenos-en-quilpue-tras-incendios.shtml"], "description": "ChatGPT: La Delegación Presidencial Provincial de Marga Marga en Chile confirmó el desalojo de un intento de toma de terrenos en la villa Olímpica de Quilpué, donde se pretendía construir un corral de animales según denuncias vecinales.\n\nOtro intento similar ocurrió en el sector de Pompeya Sur. Aunque el primero no estuvo relacionado con los incendios, desde el 2022, la provincia ha frustrado más de 15 intentos de tomas gracias a denuncias de vecinos.\n\nEn el segundo caso, en calle Coquimbo, Carabineros confirmó una usurpación en un área afectada por incendios, donde la víctima demostró la propiedad a través de escritura pública. Para prevenir más delitos de este tipo, se ha implementado un refuerzo en los patrullajes policiales.", "date": "2024-02-23"},
        28: {"title": "Señora reclama contra Sergio Aguiló", "source": ["https://x.com/T13/status/1760977802676064633?s=20", "https://vicentefelipechile.github.io/chile/media/[twitter] DiComo73—2024.02.22—1760646232496562258—RBn-GnJ8m1bu-X8z.mp4"], "description": "Señora reclama contra Sergio Aguiló (PC)\n\nAdvertencia: Imagenes sensibles", "date": "2024-02-22"},
        29: {"title": "Ministra Vallejo confirma desalojo de albergues", "source": ["https://x.com/biobio/status/1760725060372058438?s=20", "https://www.biobiochile.cl/noticias/nacional/region-de-valparaiso/2024/02/22/vuelco-en-gobierno-vallejo-confirma-que-colegios-usados-de-albergues-deben-desocuparse-este-viernes.shtml", "https://www.t13.cl/noticia/nacional/ministra-vallejo-confirmo-colegios-usados-como-albergues-deben-desocuparse-este-22-2-2024", "https://lahora.cl/cronica/2024/02/22/cambio-de-opinon-camila-vallejo-confirmo-el-desalojo-de-establecimientos-que-son-ocupados-como-albergues/", "https://www.soychile.cl/Valparaiso/Sociedad/2024/02/22/848642/ministra-vallejo-desalojo-colegios-albergues.html"], "description": "ChatGPT: La Ministra de Gobierno, Camila Vallejo, confirmó que los albergues utilizados por los damnificados de los incendios en Viña del Mar, Villa Alemana y Quilpué deben ser desalojados antes del viernes para adaptarse como escuelas antes del inicio del año escolar.\n\nA pesar de las garantías anteriores del Ministerio de Desarrollo Social de que no habría desalojos masivos, los afectados recibieron la noticia con preocupación y angustia. Funcionarios municipales informaron a los damnificados que debían dejar los albergues y regresar a sus terrenos con solo carpas y cajas de alimentos, incluso con el pronóstico de lluvia y bajas temperaturas.", "date": "2024-02-22"},
        30: {"title": "Cierre de fundición Paipote", "source": ["https://vicentefelipechile.github.io/chile/media/[twitter] AntiRojos1973—2024.02.23—1761059317812281530—9A6rf8gHMMOIWbX2.mp4", "https://x.com/AntiRojos1973/status/1761059317812281530?s=20", "https://www.emol.com/noticias/Economia/2024/02/23/1122661/enami-cierre-fundicion-trabajadores.html"], "description": "La Empresa Nacional de Minería (Enami) ha concretado el cierre de la fundición Paipote, adelantando su cese de operaciones debido a la crisis financiera que enfrenta.", "date": "2024-02-23"},
        31: {"title": "Gente de Colo-Colo causan desmanes", "source": ["https://x.com/camilaemiliasv/status/1761146056404779204?s=20", "https://x.com/Barras_LATAM/status/1761076774048334043?s=20", "https://x.com/GAMBA_CL/status/1761027685956960378?s=20", "https://www.gamba.cl/2024/02/simios-garra-blanca-cagada-mendoza/", "https://x.com/therealbuni/status/1761080945745006836?s=20", "https://x.com/camilaemiliasv/status/1761480012157296753?s=20", "https://x.com/biobio/status/1761448702365831533?s=20", "https://www.biobiochile.cl/noticias/deportes/futbol/futbol-nacional/2024/02/24/hincha-de-colo-colo-acusado-de-abuso-sexual-en-mendoza-ira-a-la-carcel-denunciante-tenia-lesiones.shtml", "https://x.com/camilaemiliasv/status/1761173537736286373?s=20"], "description": "ChatGPT: Individuos pertenecientes a la barra brava \"Garra Blanca\" protagonizaron disturbios en Mendoza, saqueando comercios, agrediendo a personas y cometiendo incluso abuso sexual contra una mujer.", "date": "2024-02-23"},
        32: {"title": "Concejal de Huasco interviene humedal con retroexcavadora", "source": ["https://x.com/Maha38408872/status/1761061389152481420?s=20", "https://vicentefelipechile.github.io/chile/media/[twitter] Maha38408872—2024.02.23—1761061389152481420—eDQdF-eyDncqb-Ik.mp4", "https://www.elciudadano.com/actualidad/polemica-por-video-que-muestra-a-concejal-de-huasco-interviniendo-el-humedal-con-una-retroexcavadora-argumento-que-acumulaba-muchos-zancudos/02/13/", "https://web.archive.org/web/20240226004131/https://www.elciudadano.com/actualidad/polemica-por-video-que-muestra-a-concejal-de-huasco-interviniendo-el-humedal-con-una-retroexcavadora-argumento-que-acumulaba-muchos-zancudos/02/13/"], "description": "ChatGPT: La intervención de un humedal en Huasco, realizada por el concejal Rafael Campos bajo el argumento de controlar la presencia de zancudos, ha generado controversia. Un video muestra maquinaria pesada destruyendo la barrera dunar que protege el humedal, provocando su vaciamiento.\n\nAunque el concejal aseguró tener permisos, la Seremi de Medio Ambiente de Atacama anunció acciones al respecto. Los humedales costeros son especialmente sensibles en la región semiárida de Atacama, y el humedal del río Huasco es uno de los más grandes y biodiversos en la zona.", "date": "2024-02-23"},
        33: {"title": "Concretan desalojo de albergues", "source": ["https://x.com/biobio/status/1761520265383620811?s=20", "https://www.biobiochile.cl/noticias/nacional/region-de-valparaiso/2024/02/24/concretan-primeros-desalojos-de-damnificados-por-incendios-desde-albergues-en-valparaiso.shtml"], "description": "ChatGPT: Este viernes se llevaron a cabo los primeros desalojos de personas damnificadas por los incendios en Valparaíso que se refugiaban en colegios, a pesar de las declaraciones previas del Gobierno de que no serían desalojadas sin alternativas.\n\nAutoridades locales y ciudadanos expresaron preocupación por la falta de coordinación y la necesidad de soluciones adecuadas para los afectados. Según el Ministerio del Interior, hay 499 personas alojadas en estos recintos.", "date": "2024-02-24"},
        34: {"title": "Venezolanos causando malestar en Chile", "source": ["https://x.com/camilaemiliasv/status/1761856351075000771?s=20", "https://x.com/GAMBA_CL/status/1761719555368296830?s=20", "https://www.gamba.cl/2024/02/secuestro-empresario-rancagua-venezolanos1/", "https://x.com/Iquiquevision/status/1761597333442060697?s=20", "https://x.com/Vega4Julio/status/1761594273672106245?s=20", "https://x.com/camilaemiliasv/status/1761719948450156931?s=20"]}
    }
    // Añadir los eventos al conjunto de datos
    for (var key in contenido) {
        var evento = contenido[key]
        items.add({
            id: key,
            content: evento.title,
            start: evento.date
        })
    }

    // Añadir un controlador de eventos para el evento "select"
    timeline.on("select", function (properties) {
        // Obtener el ID del elemento seleccionado
        var id = properties.items[0]

        // Buscar el elemento correspondiente en los datos
        var evento = Object.values(contenido).find((evento) => { return evento.title == items.get(id).content })

        // Cargar el contenido correspondiente
        if (evento) {
            argTitle.textContent = evento.title
            argDescription.textContent = evento.description

            // Añadir enlaces para cada fuente encontrada
            argSources.innerHTML = ""
            evento.source.forEach(function (fuente) {
                var link = document.createElement("a")
                link.href = fuente
                link.textContent = fuente
                link.target = "_blank"
                argSources.appendChild(link)
                argSources.appendChild(document.createElement("br"))
            })
        } else {
            argTitle.textContent = saveArgTitle.textContent
            argDescription.textContent = saveArgDescription.textContent
            argSources.textContent = saveArgSources.textContent
        }
    })

})
