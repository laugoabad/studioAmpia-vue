import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
 
    textoIntro: 
     'Lo studio AMPIA nasce per iniziativa di un’équipe specializzata di medici, psicologi, psicoterapeuti, di formazione psicodinamica ed esperienza consolidata in età evolutiva e genitorialità. L’équipe rivolge la propria attenzione all’età pediatrica, dalla primissima infanzia all’adolescenza, nonché alle famiglie di neonati, bambini e ragazzi che abbiano necessità di un’attenzione specifica, competente e scrupolosa alla propria funzione genitoriale e non solo.\n\nI professionisti, ciascuno con specificità professionale particolare, si avvalgono costantemente della collaborazione, del confronto e della supervisione di colleghi - in contesti istituzionali e non - e di altre figure operanti in ambito pediatrico, allo scopo di perseguire un approccio completo, complesso e multidisciplinare nella presa in carico dei pazienti. Pazienti e famiglie hanno pertanto occasione di essere seguiti adeguatamente in tutte le fasi della crescita: dalla gravidanza all’età neonatale, dalla prima infanzia all’età adolescenziale, all’età adulta.\n\nI servizi dello studio AMPIA prevedono percorsi di intervento clinico di breve e lungo corso, nonché proposte di informazione e formazione, dedicate a famiglie e ad operatori impegnati in ambito infantile ed evolutivo, in contesti scolastici, sportivi, ludico-ricreativi e sanitari, tra gli altri,anche in considerazione delle richieste degli utenti.',

    chiSiamo: [
      {
        titulo: 'Dott.ssa Federica Lavista',
        tel: '345 403 4188',
        mail: 'federicalavista@gmail.com',
        texto1: 'Laureata in Medicina e Chirurgia presso l’Università di Torino nel 2010, con tesi attinente a discipline psico-neuro-biochimiche, unisce da anni competenze pediatriche e psicoterapeutiche, prima in veste di medico frequentatore e tirocinante specializzanda, presso struttura ospedaliera (Neuropsichiatria Infantile, Ospedale Infantile Regina Margherita di Torino) e sul territorio (Torino e provincia), e successivamente in libera professione.',
        texto2: 'In formazione continua e costante, mediante partecipazione a convegni e seminari di aggiornamento su problematiche di ordine neuropsichiatrico e psicologico in età pediatrica, con particolare attenzione ai disturbi del sonno. Alterna occasioni di formazione e divulgazione, anche e soprattutto nell’ottica di tenere vivace il confronto con la pratica clinica.\n\nColtiva da sempre interesse specifico per la psico-neuro-endocrino-immunologia (PNEI), avendo lavorato col gruppo di ricerca della sezione di Neuroanatomia del Desarrollo dell’Universidad de Buenos Aires, Hospital de Clinicas.\n\nIn corso il Master in PNEI presso il dipartimento di Neuroscienze dell’Ospedale Molinette di Torino. Precedentemente e parallelamente alla formazione psicoterapeutica ad orientamento psicodinamico, ha concluso un lungo percorso di psicoterapia psicanalitica con terapeuta già membro ordinario della Società Gruppoanalitica Italiana. Colloqui anche in lingua spagnola.'
      },
      {
        titulo: 'Dott.ssa Jessyka Robiolio Bose',
        tel: '348 290 2829',
        mail: 'jessykarobiolio@yahoo.it',
        texto1: 'Laureata in Psicologia dello Sviluppo e dell’Educazione presso l’Università di Torino e specializzata in infanzia e adolescenza ad orientamento psicodinamico. Si forma perlopiù nel campo della Neuropsichiatria Infantile e in ambito comunitario con adolescenti, in situazioni di profondo disagio psichico e sociale.',
        texto2: '\n Accanto alla formazione didattica, porta avanti un percorso di analisi personale ad orientamento lacaniano. \nOltre alla pratica clinica in regime privato, collabora con l’associazione Aliseo Onlus, con la quale svolge interventi di prevenzione all’abuso di alcol con adolescenti, nonché percorsi di trattamento con adulti, in situazioni di alcoldipendenza e doppia diagnosi.\n\n Si occupa altresì della formazione e della supervisione del personale educativo in istituti di diverso ordine e grado, nelle province di Torino, Novara e Alessandria. Svolge inoltre attività psico-educative con il singolo e con il gruppo classe in contesto di scuola primaria, a Torino.'
      },

      {
        titulo: 'Dott.ssa Martina Comollo',
        tel: '334 304 0923',
        mail: 'martina@comollo.it',
        texto1: 'Laureata in Psicologia Clinica e di Comunità presso l’Università di Torino, specializzata in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico. Ha ultimato recentemente il Corso di Psicologia dell’Emergenza, organizzato e patrocinato da Psicologi per i Popoli Torino e 118 Piemonte, inerente all’intervento di primo soccorso psicologico in situazione di crisi ed emergenza.',
        texto2: '\nPorta avanti un percorso di analisi personale ad orientamento psicoanalitico. Si forma ed esercita in contesto ospedaliero, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torno, con attenzione alla presa in carico di pazienti affetti da patologia complessa e cronica, anche organica. \n\nUnitamente al percorso di specializzazione in psicoterapia psicodinamica e alla libera professione, collabora da anni con istituzioni scolastiche e associazioni di volontariato, presso cui svolge attività educative, sia col gruppo classe che col singolo, di formazione rivolte al personale scolastico e di sostegno a bambini e ragazzi all’interno di progetti di psicologia scolastica.'
      },

      {
        titulo: 'Dott. Giampaolo Rigliaco',
        tel: '333 238 4030',
        mail: 'giampaolo.rigliaco@yahoo.it',
        texto1: 'Laureato in Psicologia Clinica e di Comunità presso l’Università degli Studi di Firenze e successivamente presso la Facoltà di Psicologia di Torino. Specializzato in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico. Si forma, prima in veste di studente tirocinante e poi come specializzando, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torino. Porta avanti un percorso di analisi personale ad indirizzo psicoanalitico.',
        texto2: '\nHa maturato esperienza pluriennale in ambito scolastico, relativamente al sostegno e all’accompagnamento terapeutico di minori affetti da disturbi pervasivi dello sviluppo; ha inoltre operato nell’accoglienza di cittadini stranieri richiedenti protezione internazionale. Esercita in libera professione e opera in contesto comunitario e in regime di domiciliarità con pazienti adulti psichiatrici sul territorio piemontese. Parallelamente si occupa di attività formative rivolte a personale educativo.'
      }
    ],

    servizi: [
      {
        titulo: 'Sostegno e Trattamento Individuale per bambini, giovani e adulti',
        imagen: '0.png',
        texto: 'Il Sostegno Psicologico Individuale ha come obiettivo il miglioramento della qualità della vita ed è indirizzato a coloro che attraversano un periodo di disagio o sofferenza psichica; si tratta di un intervento volto ad accogliere le difficoltà, nel quale il paziente ha occasione di sperimentare insieme al terapeuta una modalità di adattamento più efficace. Il sostegno è declinato differentemente in base alle caratteristiche individuali di ciascuno e lo strumento principe è il colloquio clinico. In caso di lavoro con minori, dal momento che gioco e disegno rappresentano un canale espressivo ricchissimo, vengono comunemente utilizzati colori, materiali di gioco e di manipolazione libera.\n\nnAttraverso la Psicoterapia Individuale il terapeuta accompagna il paziente in un percorso di conoscenza di sè, di acquisizione di consapevolezza del proprio modo di pensare e di agire. Il terapeuta lavora con il paziente avvalendosi anzitutto sulle sue capacità individuali, in modo da rafforzare, sviluppare, promuovere le risorse interne che gli sono necessarie per superare le tappe evolutive e gli eventi critici dell’esistenza. Chi soffre, quindi, scorge nuove possibilità di dirimere i propri conflitti profondi, durante un percorso psicoterapeutico, che si contraddistingue proprio per la qualità dell’esperienza relazionale che viene vissuta insieme al terapeuta. Accogliere e riconoscere l’altro anche nella sua sofferenza, specie quando non abbia trovato sufficiente ascolto altrove, è prerogativa fondamentale di questo lavoro.\n\nLa stanza di terapia per bambini e adolescenti è allestita in modo peculiare, allo scopo di predisporre un’atmosfera che faciliti l’espressione dei vissuti dei giovani pazienti. I professionisti dell’équipe hanno pluriennale esperienza nella tecnica dell’interpretazione del gioco, strumento indispensabile per lavorare con bambini anche molto piccoli.\n\nCosì come per gli adulti e per gli adolescenti, l’obiettivo della psicoterapia infantile è rendere possibile la comprensione delle fantasie e delle angosce dei piccoli pazienti e aiutarli a sviluppare gli strumenti necessari ad affrontare la crescita e le difficoltà ad essa connesse. Laddove si renda opportuno sarà possibile collaborare con altre figure professionali in un’ottica di presa in carico multidisciplinare.'
      },

      {
        titulo: 'Psicodiagnosi, Valutazioni Cognitive, Testistica',
        imagen: '1.png',
        texto: 'La Psicodiagnosi si organizza in un ciclo di incontri finalizzato ad una descrizione dinamica delle specifiche modalità di funzionamento individuale, con particolare attenzione a risorse e capacità, ma anche agli elementi di conflitto, siano essi all’origine del disagio che porta il paziente all’attenzione del terapeuta o meno percettibili.\n\nÈ fondamentale che il terapeuta riconosca, dapprima, ed interpreti correttamente, poi, gli elementi che rimandano alla sofferenza mentale del paziente, al fine di delineare un percordo di presa in carico mirato, attraverso cui sia possibile accompagnare il paziente stesso ad avvicinarsi ai propri sintomi, a coglierne i significati e ad imparare a formulare attorno ad essi un pensiero.\n\nGli strumenti di cui il professionista si avvale, in un percorso psicodiagnostico, includono l’osservazione partecipe e qualificata, i colloqui clinici, ma anche gioco, disegno e testistica, proiettiva e/o cognitiva.\n\nNel percorso psicodiagnostico in età evolutiva è molto importante il coinvolgimento delle figure genitoriali e di chi si prende cura del minore, allo scopo di comprendere al meglio le dinamiche familiari e progettare insieme la presa in carico più idonea.'
      },

      {
        titulo: 'Percorsi di Sostegno alla Genitorialità',
        imagen: '2.png',
        texto: 'Il Sostegno alla Genitorialità è destinato a genitori in difficoltà per ragioni che hanno a che fare con la complessità del ruolo e dei continui adattamenti che esso richiede, a fronte dei cambiamenti fisiologici, emotivi e relazionali che la nascita e la crescita di un figlio implicano. La complessità della funzione genitariale si struttura intorno ad aspetti individuali, alle dinamiche di coppia e alle competenze relazionali di ciascuno. Comporta la capacità di adattare in modo dinamico il proprio stile educativo ai bisogni evolutivi del figlio, pur quando si modificano velocemente.\n\nI percorsi di sostegno genitoriale sono volti a sostenere il ruolo di ciascun genitore nel proprio specifico contesto e a rafforzarne le competenze educative, la qual cosa non può prescindere dalla loro possibilità di comprensione delle esigenze, delle ansie, delle paure e dei desideri del figlio, nonchè delle sue modalità comunicative, ma deve tener conto altresì della capacità che il genitore ha di guardare a se stesso e al sistema di relazioni intrafamiliari del quale è parte.'
      },

      {
        titulo: 'Osservazione Perinatale e Neonatale, Sostegno all’Allattamento e al Puerperio',
        imagen: '3.png',
        texto: 'Le sedute di Osservazione Mamma-Bambino, rappresentano uno strumento prezioso di consultazione, attraverso cui rivolgere uno sguardo attento ed empatico alla relazione tra una madre e il suo bambino, in età anche precocissima. Si tratta di un percorso utile a favorire la comprensione, da parte dei genitori, dei significati profondi dei segnali che il bambino invia, talvolta difficilmente decifrabili, specie quando si è direttamente coinvolti.\n\nUn vero e proprio lavoro di traduzione da un livello comunicativo preverbale, che è veicolo di espressione di qualsivoglia stato d’animo del neonato, ad un linguaggio adulto, chiaro, significativo e diretto, accessibile ai genitori. I bambini per manifestare disagi, preoccupazioni e angosce utilizzano sintomi e atteggiamenti corporei, spesso fraintendibili e di difficile comprensione.\n\nLa possibilità di sintonizzarsi emotivamente e rispondere in maniera sufficientemente buona alle richieste del bambino è una condizione necessaria e fondamentale a favorire un suo sviluppo psicofisico, mentale ed emotivo armonioso. È importante provare ad accedere al significato autentico di un disturbo del sonno, di una difficoltà in corso di svezzamento, di un sintomo che si manifesta in occasione dell’inserimento al nido – tra il resto - ed intervenire in modo sintonico.\n\nL’équipe dello Studio AMPIA ha una comprovata esperienza clinica nell’ambito di detta tipologia di intervento, poiché tutti i professionisti, nel loro percorso formativo, di orientamento psicodinamico, hanno condotto esperienze pluriennali di osservazione, con bambini in fascia d’età 0-5, in contesto familiare e scolastico.'
      },

      {
        titulo: 'Incontri di Formazione, Approfondimento e Discussione',
        imagen: '4.png',
        texto: 'Gli incontri di Formazione, che lo studio AMPIA propone, siano essi seminari, conferenze o eventi occasionali di approfondimento, vengono organizzati in collaborazione con enti, istituti scolastici, associazioni pubbliche e private del territorio piemontese, per fornire servizi di informazione e discussione su tematiche riguardanti la funzione genitoriale, la neonatalità, l’infanzia e l’adolescenza, negli aspetti più complessi delle tappe evolutive. Vengono altresì trattate le dinamiche relazionali e di gruppo, in contesto familiare ed extrafamiliare, l’orientamento scolastico e molto altro.\n\nAlcune proposte sono specificatamente rivolte a figure professionali che lavorano in ambito sociosanitario e psicoeducativo: infermieri, psicologi, medici, OSS, educatori, insegnati, logopedisti, tra gli altri.Molti incontri sono invece pensati per chi abbia curiosità e desiderio di approfondire aspetti chiave che possono eventualmente risultare preziosi nella vita quotidiana, domestica, familiare e sociale.'
      },

      {
        titulo: 'Laboratori e Progetti Psicoeducativi',
        imagen: '5.png',
        texto: 'I Laboratori Scolastici ed Extrascolastici, si organizzano in attività di gruppo, mediate da un esperto, e si rivelano spesso occasione di confronto e crescita per i bambini e i ragazzi cui sono rivolti. Il clima degli incontri è di ascolto empatico e attento, ciascuno è incoraggiato ad offrire il proprio contributo e vengono scelti argomenti che possano stimolare le curiosità giovanili che non di rado restano inespresse per paura, pudore, vergogna.\n\nTematiche ricorrenti sono l’educazione all’affettività, la gestione e l’espressione delle emozioni e dei conflitti, la sensibilizzazione verso le disabilità, ma anche l’educazione stradale e l’abuso di sostanze.\n\nAlcuni degli interventi, in contesto scolastico, vengono proposti sulla base di una specifica richiesta da parte del corpo docente, laddove siano state rilevate difficoltà di gestione del singolo o del gruppo classe.\n\nDurante gli incontri, a partire da un livello informativo, si lavora affinché i ragazzi possano imparare a collaborare tra loro, cooperando in maniera efficace, promuovendo, pertanto, competenze indispensabili al vivere sociale. A tale scopo si ricorre all’utilizzo di tecniche di conduzione del gruppo, tra cui il cirle time, la peer education, lo psicodramma.\n\nLo studio AMPIA organizza laboratori e incontri presso associazioni territoriali e scuole di ogni ordine e grado.'
      }
    ],

    aree: [
      {
        titulo: 'La Genitorialità',
        texto1: 'La Genitorialità è la disposizione emotiva e comportamentale che accompagna la funzione del genitore, la condizione di chi sente di doversi prendere cura, di chi sente la responsabilità di preoccuparsi e occuparsi di un figlio: diventare genitori significa creare uno spazio mentale di disponibilità, di attenzione amorevole e di sollecitudine costante.  La funzione genitoriale prende forma sin da che il figlio è soltanto pensato, quando l’idea di un bambino inizia a farsi strada nella mente, e si struttura per tutto l’arco della vita futura, chiedendo una ridefinizione continua.',
        texto2: 'La nascita di un bambino porta ad avere a che fare con le proprie esperienze infantili, con i propri modelli genitoriali e i conflitti che attorno vi si creano.Ciascun genitore mette in campo aspetti del proprio mondo interno, costituitosi attorno ad esperienze di vita, progetti, risorse, fragilità del tutto personali.Diventare genitori implica una riorganizzazione interna, oltre che esterna, notevole.L’arrivo di un bambino produce un cambiamento radicale: si tratta di un nuovo incontro e della perdita della situazione precedente.Si fanno strada aspettative e timori, sul bambino e su di sé, come singoli e come coppia, tenuto conto - peraltro - che l’esperienza può rivelarsi non egualmente rilevante per i membri della coppia o che non coincidano i tempi del desiderio.\n\nEssere genitori comporta adottare atteggiamenti e modalità comunicative differenti a seconda dell’età e dello sviluppo del figlio, reinventandosi continuamente.Significa imparare a sostenere alternanza ed equilibrio tra la funzione di cura, protezione e accudimento e la spinta all’autonomia e alla separazione. La genitorialità rappresenta una crisi evolutiva, che può rivelarsi continua e costante, nella sua mutevolezza, nel corso della crescita del figlio. Essere genitore significa anche entrare in contatto con sentimenti di inadeguatezza, frustrazione, senso di colpa, che possono produrre talora fantasie di fuga dalle responsabilità, timori di abbandono e di rifiuto.\n\nConsentire un dialogo tra i bisogni di un figlio di qualunque età e i bisogni profondi del genitore è spesso faticoso.L’esigenza di un sostegno non è sempre soddisfatta tra le risorse personali e familiari.Talvolta può essere necessario e utile un percorso che traghetti verso una comprensione maggiore di sé, del proprio figlio e della relazione.Quale che sia l’approccio, la quantità e la qualità delle informazioni e la disponibilità di uno spazio che orienti, contenga e rassicuri, può rivelarsi un aiuto prezioso.'
      },
      {
        titulo: 'La Fase Perinatale e Neonatale',
        texto1: 'Attorno alla fase Perinatale e per tutto l’arco del periodo Neonatale del figlio, la famiglia attraversa esperienze tumultuose e profondamente ambivalenti. Ogni nuova nascita si accompagna ad un turbinio di vissuti del tutto nuovi. Le emozioni si affastellano nella mente, disordinate e ingovernabili. La sensazione di una felicità fluida, non ancora organizzata attorno ad un pensiero preciso, si confonde con uno stato di allerta costante e grande.',
        texto2: 'Il puerperio rende la madre tanto energica e sollecita, quanto fragile e disorientata.Le preoccupazioni si dilatano, le percezioni si deformano, il tempo scorre a ritmo incostante, talora rapidissimo, talora invece sin troppo lento.La dimensione dell’allattamento si rende spesso faticosa, col passare delle settimane, più di quanto molte donne abbiano avuto occasione di immaginare prima.Il sonno disorganizzato, l’ansia di far bene, le voci di chi porta aiuto ed esperienza che si sovrappongono le une alle altre e che, a tratti, mettono a tacere l’istinto, ancor troppo grezzo per essere ascoltato; la difficoltà del padre nel proteggere la diade mamma- neonato e – prima ancora – di legittimarsi un ruolo così complesso; la stanchezza, la sfiducia nelle proprie competenze, l’ansia rispetto all’irrequietezza del neonato e alla sua spasmodica ricerca di contenimento, la mancanza di ritmo, la necessità insaziabile di conferme, la discrepanza tra la genitorialità pensata e quella vissuta, sono solo alcuni degli aspetti cui le madri e i padri fanno fronte in questa fase.\n\nLo sconquasso - che si stempera solo a momenti - di una trasformazione radicale e rapida, dagli aspetti istintivi, mai troppo semplici da comprendere e assecondare, fa sì che tutto vada ricalibrato, persino uno spostamento minimo va riorganizzato secondo strategie nuove.\n\nAnche la consapevolezza delle competenze sempre più complesse e fondamentali che il bambino acquisisce nei primi mesi di vita e l’importanza del proprio ruolo nella sua maturazione mentale e nella costruzione di un sano senso di sicurezza e di apertura verso l’ambiente, spaventa non poco i neogenitori.\n\nOffrire uno spazio di consulenza nel periodo perinatale e neonatale, sia esso in forma di osservazione, assistenza all’allattamento o sostegno alla neogenitorialità, equivale a mettere a disposizione della famiglia uno strumento fondamentale di prevenzione, a garanzia della salute del piccolo nucleo e del futuro individuo.'
      },
      {
        titulo: "L'Infanzia",
        texto1: 'L’Infanzia si inscrive nel periodo della vita che conduce sino alla comparsa delle prime avvisaglie della pubertà. Il bambino, nel complesso della sua esperienza soggettiva, transita attraverso fondamentali trasformazioni.La crescita del bambino riguarda gli aspetti più vari e molteplici, non solo lo sviluppo e l’acquisizione di abilità, di qualsivoglia natura e ordine.Le caratteristiche personali, temperamentali anzitutto, incontrano infatti lo sviluppo del pensiero e  della competenza emotiva: il bambino impara a pensare e a riconoscere e nominare le emozioni, proprie e di chi ha attorno, competenze che hanno radice nella relazione con i genitori e si costituiscono e caratterizzano nei contesti – via via più numerosi – nei quali sperimenta la propria socialità: la scuola, le attività ludiche e sportive, il gruppo dei pari, tra gli altri.',
        texto2: 'Già nella primissima infanzia, attraverso gli scambi con gli adulti di riferimento, il bambino fa esperienza di relazioni fondamentali per la strutturazione della propria identità, per quello che diventerà il proprio modo di rapportarsi agli altri, nonchè di percepire se stesso e la realtà che lo circonda, presente e futura.Il bambino, infatti, incontra sempre le fantasie, le proiezioni, le aspettative dei propri genitori, e questo dà ai suoi comportamenti un significato che è importante saper ascoltare, comprendere e decifrare in una prospettiva familiare.\n\nDi seguito, l’esperienza scolastica permetterà al bambino di sperimentare una certa discontinuità di relazione, declinata questa volta al di fuori del ristretto contesto familiare.Gli incontri regolari con i coetanei, i ruoli e le regole del tutto nuovi dell’istituzione pubblica, offrono la possibilità di apprendere e affinare abilità e conoscenze essenziali al vivere sociale.Leggere, scrivere, far di conto, stare all’interno di un gruppo di persone, imparando a rispettarne norme, limiti e valori, sono solo alcune delle competenze che il contesto scolastico garantisce al bambino.\n\nL’infanzia è dunque una fase estremamente plastica e i bisogni evolutivi dei bambini si modificano velocemente.In quest’ottica, è bene che anche prevenzione e intervento siano centrati sui singoli passaggi, così da sostenere le competenze genitoriali, continuamente in costruzione, e - unitamente - dar valore alle caratteristiche personali del bambino, avendo sempre in mente l’importanza di un angolo di visuale più ampio possibile e di un approccio che tenga conto del contesto familiare e sociale in cui ciascun soggetto si muove.'
      },
      {
        titulo: "L'Adolescenza",
        texto1: 'L’Adolescenza rappresenta la stagione della vita più incerta e problematica, un periodo delicatissimo che è, nel contempo, di verifica e di esplorazione. La crisi, il travaglio interiore, in questo faticoso processo di acquisizione di autonomia, muove il ragazzo a rinnegare la propria identità infantile e lo spinge verso la ricerca di un’immagine di sé differente, adulta.I punti di riferimento vacillano, talora crollano del tutto, per ridefinirsi velocemente, fuori dalla famiglia.Alcune forme di disagio si acutizzano e si fanno strada stati d’animo di incertezza e ribellione.',
        texto2: 'Intorno al corpo dell’adolescente e alla metamorfosi cui va incontro in modo massiccio e globale, in questo nuovo contesto di maturità sessuale si concentrano dubbi e timori.Possono facilmente generarsi sentimenti di imbarazzo, di eccessivo pudore, se non addirittura di vergogna e di rifiuto per una fisicità che, nel suo sviluppo, segue ritmi propri, quasi sempre troppo veloci rispetto ai tempi di maturazione del pensiero e della consapevolezza del ragazzo. La turbolenza fisica si accompagna dunque ad un tumulto psichico ed emotivo che produce confusione, instabilità e spesso angoscia.\n\nLa regolazione degli affetti è complessa, per il ragazzo e per gli adulti che gli sono accanto: tutte le parti si scoprono costrette a ridefinire i reciproci ruoli.Di importanza cardinale sono proprio le espressioni di conflittualità nei riguardi dell’adulto ed elettivamente delle figure genitoriali, sino ad ora concepite come forti e capaci di cura, verso cui il ragazzo adotta ora un atteggiamento ipercritico, che spesso esita in comportamenti provocatori e oppositivi.È il momento in cui inizia a costruire attorno a sé una comunità di pari con cui condividere un bagaglio di conoscenze che gli permetta di identificarsi con una nuova dimensione sociale e affettiva.È grande per il genitore la preoccupazione che ne deriva.L’intero sistema di valori intorno al quale si strutturano esperienze e relazioni familiari, sino ad ora, viene messo in discussione.Il limite diventa tanto necessario quanto scomodo e insostenibile per entrambe le parti.\n\nIn questa lunga partita, fatta di negoziazioni continue ed equilibri fluttuanti, tutti gli attori devono poter accettare di perdere qualcosa per poter accogliere il nuovo.La confusione e i timori sono condizioni costanti e può sorgere la necessità di trovare uno spazio entro cui portare dubbi e preoccupazioni, ma anche rabbia e frustrazione.Può rendersi opportuno uno sguardo esterno, attento, esperto e dedicato, perché si abbia la possibilità di provare a comprendere, se non le risposte, quantomeno le domande da porsi per consentire e accogliere il cambiamento del legame.'
      },
      {
        titulo: "L’Età Adulta",
        texto1: 'L’Età Adulta è l’età del pensiero maturo. L’arco della vita, tuttavia, è naturalmente scandito da momenti differenti, caratterizzati da situazioni e da legami in continuo mutamento e divenire. Spesso ci si trova ad affrontare periodi di grande fatica, instabilità, sconforto, talvolta di vera e propria solitudine.Può accadere di sentirsi disorientati di fronte a scelte importanti e cambiamenti significativi.Si può avvertire una sensazione di insoddisfazione, di incompletezza, spesso senza che la ragione del malessere sia di agevole comprensione. Il lutto, le separazioni, la perdita di un posto di lavoro, sono eventi profondamente angoscianti; il dolore per una perdita può destabilizzare la vita di tutti i giorni e le relazioni, presenti e future.Avere a che fare con sentimenti di questa portata, non di rado, allontana dalla consapevolezza delle proprie risorse.',
        texto2: 'Un evento traumatico o il protrarsi nel tempo di una situazione difficile hanno certamente un forte impatto sulla psiche, ma quando anche il corpo si fa portavoce del disagio, la sintomatologia che ne deriva non sempre è facilmente decifrabile.\n\nMolto spesso la sofferenza è tale da generare la sensazione netta di essere “poco attrezzati”, sia nel riconoscere che nel dare significato a quanto accade, in modo da potervi far fronte.\n\nTalora i meccanismi di difesa, consolidatisi così faticosamente nel tempo e grazie ai quali si è sempre mantenuto un buono stato di equilibrio, non si rendono più sufficientemente efficaci.Spesso, in occasione di eventi particolarmente stressanti, si ha una sensazione di vulnerabilità e di sopraffazione.Il vissuto si amplifica ed è proprio in questi frangenti che si incorre nel rischio di invorticarsi in stati depressivi o ansiosi, in condizioni di faticoso rimuginio, che rendono complesse e insostenibili anche le piccole azioni del vivere quotidiano, minando legami affettivi e lavorativi.\n\nDiventa pertanto essenziale riuscire a dar voce al complesso di stati d’animo attraverso cui si transita, per periodi più o meno lunghi, trovando uno spazio nel quale darsi la possibilità di mettere in parola quel che di più scomodo affligge, uno spazio nel quale dare significato ad un sintomo che si fa via via più gravoso e intollerabile e di cui ci si vorrebbe soltanto liberare, acquisendo una consapevolezza maggiore, che consenta di riscoprire le proprie risorse e costruirne di nuove.'
      }
    ],

      blog: [
                {
                    titulo: 'I Disturbi dell Sonno nell’Infanzia',
                    imagen: 'eventi1.png',
                    texto: 'Il sonno disordinato e discontinuo, in un periodo della vita nel quale siamo portati ad immaginarlo sereno e indisturbato, è ormai motivo di consultazione frequente, in quest’epoca di ritmi frenetici, di luci artificiali diffuse e persistenti, di strumenti elettronici sempre più precocemente a disposizione dei piccoli. \nUn’occasione per esplorare e condividere aspetti organici e aspetti di ordine più squisitamente psicologico, ma anche e soprattutto per comprendere lo sviluppo naturale dell’autonomia dell’addormentamento, uno dei traguardi fondamentali nella crescita dei nostri bambini.'
                },
                {
                    titulo: 'L’Adolescente e la Paura del Mondo',
                    imagen: 'eventi2.jpg',
                    texto: 'Un momento di confronto e di scambio in cui riflettere sull’adolescenza, sulle sfide e sui mutamenti del sistema relazionale che vede protagonisti i ragazzi e le loro famiglie, in un’epoca dominata da un’iperconnessione che troppo spesso si traduce in profonda solitudine e paura del mondo.\n\nI nuovi adolescenti tra reale e virtuale: uno spazio ignoto in cui cercare incessantemente un equilibrio mai scontato, in cui cercare risposte e tentare automedicazioni; un terreno sconosciuto alle famiglie e agli educatori, che genera dubbi e angosce e che ci interroga sulla funzione dell’adulto.\nL’incontro ha l’obiettivo di creare un dialogo, una connessione, tra mondi non così distinti.'
                },
                {
                    titulo: 'DSA - Il Punto di Vista del Bambino',
                    imagen: 'eventi3.jpg',
                    texto: 'Un incontro formativo e informativo per fare chiarezza sui Disturbi Specifici dell’Apprendimento(DSA). Ripercorrendo ciascuna delle fasi dal percorso diagnostico, sino alla formulazione di strategie di compensazione, ci si soffermerà in special modo sui vissuti dei bambini e dei ragazzi.'
                },
                {
                    titulo: 'I Famigerati Terribili Due',
                    imagen: 'eventi4.jpg',
                    texto: 'I due anni, terribili e deliziosi, sono il territorio di confine in cui massimamente si incontrano l’imitazione e la limitazione. I tentativi costanti del piccolo di svalicare i limiti e le negoziazioni continue sembrano non trovare soluzione.\n\nImprovvisamente anche il bambino dal temperamento più mite affina l’arte delle urla, dei pianti inconsolabili e delle reazioni inaspettate. L’autonomia che sboccia, la personalità che brilla, sono aspetti straordinari da osservare, ma spesso si è stanchi per prestare l’attenzione che si vorrebbe e che il bambino si aspetta.\n\nRivolgiamo lo sguardo al loro atteggiamento oppositivo come tentativo iniziale, talora maldestro, senz’altro confuso, di comprendere e sperimentare la propria posizione nel mondo.\n\nConsideriamo gli aspetti fondamentali della genitorialità, in un’epoca della crescita in cui il paradigma - benché declinato nella maniera più varia e molteplice - è l stesso per tutti: il compito dell’adulto è di porre limiti, il compito del piccolo è di oltrepassarli …un No contro No, che fa scintille!'

                },
               
                {
                    titulo: 'Il Tempo di Svezzare',
                    imagen: 'eventi5.png',
                    texto: 'L’idea di approdare finalmente allo svezzamento può sollevare non poche preoccupazioni. È un momento del tutto rivoluzionario, ma è anche un traguardo cui naturalmente si guarda con sentimenti ambivalenti. Per la madre rappresenta una delle prime occasioni per riconoscere l’individualità del proprio bambino, con le sue preferenze, competenze, con il suo temperamento e tendenza più o meno spontanea ad abbracciare l’autonomia.\n\nParliamo di una delle prime, importanti, fasi di acquisizione di autonomia, che anticipa e in certa misura condiziona le successive, accompagnandosi, non di rado, alla sensazione di perdere l’equilibrio perfetto di cui si fa esperienza durante l’allattamento, traghettando tuttavia l’intera famiglia ad una nuova vivacissima dimensione. Sapori, consistenze, odori e colori cambiano e si moltiplicano rapidamente, tra lo stupore del piccolo e il divertimento di tutti.'
                }
            ],
            

  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
