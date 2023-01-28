window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Hentschel Zaituc",
      "url": "./commercials/de-DE/computer-hardware/hentschel-zaituc/1673453997529/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "St Rmer Tonat",
      "url": "./commercials/de-DE/hochschulbildung/st-rmer-tonat/1673452276343/commercial.mp3",
      "artist": "Hochschulbildung",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Peters Schmidt Und Trautmann",
      "url": "./commercials/de-DE/kosmetik/peters-schmidt-und-trautmann/1673453806281/commercial.mp3",
      "artist": "Kosmetik",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Vey Heinze",
      "url": "./commercials/de-DE/logistik/vey-heinze/1673453190628/commercial.mp3",
      "artist": "Logistik",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Hertel Dittmer",
      "url": "./commercials/de-DE/marktforschung/hertel-dittmer/1673452946940/commercial.mp3",
      "artist": "Marktforschung",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Manns Borrmann",
      "url": "./commercials/de-DE/forschung/manns-borrmann/1673454028593/commercial.mp3",
      "artist": "Forschung",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Radtke Ohg",
      "url": "./commercials/de-DE/programmentwicklung/radtke-ohg/1673453358105/commercial.mp3",
      "artist": "Programmentwicklung",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Rumpf Assmus",
      "url": "./commercials/de-DE/religi-se-einrichtungen/rumpf-assmus/1673452935626/commercial.mp3",
      "artist": "Religi Se Einrichtungen",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Moedl Ohg",
      "url": "./commercials/de-DE/sport/moedl-ohg/1673452557236/commercial.mp3",
      "artist": "Sport",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "J Rgens Oschkenat",
      "url": "./commercials/de-DE/freizeit-und-dienstleistungseinrichtungen/j-rgens-oschkenat/1673454009569/commercial.mp3",
      "artist": "Freizeit Und Dienstleistungseinrichtungen",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Klaus Grothkopp Und S Rth",
      "url": "./commercials/de-DE/druckindustrie/klaus-grothkopp-und-s-rth/1673452116440/commercial.mp3",
      "artist": "Druckindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Schindzielorz Ohg",
      "url": "./commercials/de-DE/maschinenbau/schindzielorz-ohg/1673452300369/commercial.mp3",
      "artist": "Maschinenbau",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Peselman Behr",
      "url": "./commercials/de-DE/film-und-fernsehproduktion/peselman-behr/1673452484164/commercial.mp3",
      "artist": "Film Und Fernsehproduktion",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Camara Tuschmo Und Tischler",
      "url": "./commercials/de-DE/rechtsanwaltspraxis/camara-tuschmo-und-tischler/1673452516333/commercial.mp3",
      "artist": "Rechtsanwaltspraxis",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Proske Gmbh Co Kg",
      "url": "./commercials/de-DE/versorgungsunternehmen/proske-gmbh-co-kg/1673453648203/commercial.mp3",
      "artist": "Versorgungsunternehmen",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Wurm Wessel",
      "url": "./commercials/de-DE/ressourceneffizienz/wurm-wessel/1673454441804/commercial.mp3",
      "artist": "Ressourceneffizienz",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Salzmann Kral",
      "url": "./commercials/de-DE/halbleiter/salzmann-kral/1673452618670/commercial.mp3",
      "artist": "Halbleiter",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Bruckmann Geyer",
      "url": "./commercials/de-DE/maschinenbau/bruckmann-geyer/1673452894075/commercial.mp3",
      "artist": "Maschinenbau",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Honz Kg",
      "url": "./commercials/de-DE/k-nstliche-intelligenz/honz-kg/1673452732419/commercial.mp3",
      "artist": "K Nstliche Intelligenz",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Kubera Benecke",
      "url": "./commercials/de-DE/elektromobilit-t/kubera-benecke/1673453440143/commercial.mp3",
      "artist": "Elektromobilit T",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Dittmer Ag",
      "url": "./commercials/de-DE/informationstechnologie-und-dienstleistungen/dittmer-ag/1673453732632/commercial.mp3",
      "artist": "Informationstechnologie Und Dienstleistungen",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Grosskopf Ohg",
      "url": "./commercials/de-DE/e-health/grosskopf-ohg/1673453913222/commercial.mp3",
      "artist": "E Health",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "K Ter B Chele",
      "url": "./commercials/de-DE/design/k-ter-b-chele/1673453658366/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Straub Zekl Und Lutje",
      "url": "./commercials/de-DE/informationsdienste/straub-zekl-und-lutje/1673452405296/commercial.mp3",
      "artist": "Informationsdienste",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Fink Ohg",
      "url": "./commercials/de-DE/bildungsmanagement/fink-ohg/1673453412810/commercial.mp3",
      "artist": "Bildungsmanagement",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Reinhardt Gruppe",
      "url": "./commercials/de-DE/tiermedizin/reinhardt-gruppe/1673453900468/commercial.mp3",
      "artist": "Tiermedizin",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Berends Fahner",
      "url": "./commercials/de-DE/bergbau-und-metallurgie/berends-fahner/1673454018336/commercial.mp3",
      "artist": "Bergbau Und Metallurgie",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Hooss Pohle Und Baarck",
      "url": "./commercials/de-DE/telekommunikation/hooss-pohle-und-baarck/1673454483463/commercial.mp3",
      "artist": "Telekommunikation",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Madetzky Norris Und D Rner",
      "url": "./commercials/de-DE/chemische-industrie/madetzky-norris-und-d-rner/1673452958198/commercial.mp3",
      "artist": "Chemische Industrie",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Gierisch Lukoschek",
      "url": "./commercials/de-DE/grund-und-sekundarschulbildung/gierisch-lukoschek/1673452871070/commercial.mp3",
      "artist": "Grund Und Sekundarschulbildung",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Brettschneider Danneberg Und Merkel",
      "url": "./commercials/de-DE/freizeit-und-dienstleistungseinrichtungen/brettschneider-danneberg-und-merkel/1673453765205/commercial.mp3",
      "artist": "Freizeit Und Dienstleistungseinrichtungen",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Sch Fer Ag",
      "url": "./commercials/de-DE/informationsdienste/sch-fer-ag/1673453069031/commercial.mp3",
      "artist": "Informationsdienste",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Kulma Schult",
      "url": "./commercials/de-DE/museen-und-institutionen/kulma-schult/1673453785397/commercial.mp3",
      "artist": "Museen Und Institutionen",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Schwarzmeier Ohg",
      "url": "./commercials/de-DE/tourismusindustrie/schwarzmeier-ohg/1673452261179/commercial.mp3",
      "artist": "Tourismusindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "G Tz Ug",
      "url": "./commercials/de-DE/maschinenbau/g-tz-ug/1673452323869/commercial.mp3",
      "artist": "Maschinenbau",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Sack Koszewski",
      "url": "./commercials/de-DE/buchhaltung/sack-koszewski/1673453453199/commercial.mp3",
      "artist": "Buchhaltung",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Hohenberger H Hne Und Polizzi",
      "url": "./commercials/de-DE/tourismusindustrie/hohenberger-h-hne-und-polizzi/1673452148752/commercial.mp3",
      "artist": "Tourismusindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Kleeberg Vahlensieck",
      "url": "./commercials/de-DE/virtual-und-augmented-reality/kleeberg-vahlensieck/1673452971271/commercial.mp3",
      "artist": "Virtual Und Augmented Reality",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Baganz Tremmel",
      "url": "./commercials/de-DE/paket-frachtversand/baganz-tremmel/1673453209680/commercial.mp3",
      "artist": "Paket Frachtversand",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Richards Ag",
      "url": "./commercials/de-DE/logistik/richards-ag/1673454171637/commercial.mp3",
      "artist": "Logistik",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Fenner Frahmeke",
      "url": "./commercials/de-DE/kosmetik/fenner-frahmeke/1673452441635/commercial.mp3",
      "artist": "Kosmetik",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Marl Zuber Und Kutzner",
      "url": "./commercials/de-DE/regulierungstechnologie/marl-zuber-und-kutzner/1673452431675/commercial.mp3",
      "artist": "Regulierungstechnologie",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Jess Kempter",
      "url": "./commercials/de-DE/darstellende-k-nste/jess-kempter/1673453956645/commercial.mp3",
      "artist": "Darstellende K Nste",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Fincke Ghirmai",
      "url": "./commercials/de-DE/krankenhaus-und-gesundheitswesen/fincke-ghirmai/1673453346509/commercial.mp3",
      "artist": "Krankenhaus Und Gesundheitswesen",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Tivontschik Ug",
      "url": "./commercials/de-DE/energiemanagement/tivontschik-ug/1673452644721/commercial.mp3",
      "artist": "Energiemanagement",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Nastvogel Gruppe",
      "url": "./commercials/de-DE/m-bel/nastvogel-gruppe/1673453041071/commercial.mp3",
      "artist": "M Bel",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Kahlmeyer Bauschke",
      "url": "./commercials/de-DE/cloud-computing/kahlmeyer-bauschke/1673454081323/commercial.mp3",
      "artist": "Cloud Computing",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Jess Heinig Und Suthe",
      "url": "./commercials/de-DE/gastgewerbe/jess-heinig-und-suthe/1673453979191/commercial.mp3",
      "artist": "Gastgewerbe",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Bremer Ug",
      "url": "./commercials/de-DE/marktforschung/bremer-ug/1673452847213/commercial.mp3",
      "artist": "Marktforschung",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Tischler Schnieder Und Dingelstedt",
      "url": "./commercials/de-DE/bergbau-und-metallurgie/tischler-schnieder-und-dingelstedt/1673452242804/commercial.mp3",
      "artist": "Bergbau Und Metallurgie",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Mebold Erm Und Kluwe",
      "url": "./commercials/de-DE/bergbau-und-metallurgie/mebold-erm-und-kluwe/1673452462191/commercial.mp3",
      "artist": "Bergbau Und Metallurgie",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Burger Riekmann Und Rahn",
      "url": "./commercials/de-DE/social-media/burger-riekmann-und-rahn/1673454238639/commercial.mp3",
      "artist": "Social Media",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Schuri Dietz Und Koster",
      "url": "./commercials/de-DE/verteidigung-und-raumfahrt/schuri-dietz-und-koster/1673454057066/commercial.mp3",
      "artist": "Verteidigung Und Raumfahrt",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Oberem Schuster Und Kerl",
      "url": "./commercials/de-DE/gesetzgebungsbeh-rde/oberem-schuster-und-kerl/1673452222200/commercial.mp3",
      "artist": "Gesetzgebungsbeh Rde",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Garatva Kg",
      "url": "./commercials/de-DE/logistikindustrie/garatva-kg/1673454376885/commercial.mp3",
      "artist": "Logistikindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Danner Klemme",
      "url": "./commercials/de-DE/3d-druck/danner-klemme/1673453048640/commercial.mp3",
      "artist": "3d Druck",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Just Kg",
      "url": "./commercials/de-DE/chemische-industrie/just-kg/1673453278185/commercial.mp3",
      "artist": "Chemische Industrie",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Rossberg Gmbh Co Kg",
      "url": "./commercials/de-DE/eisenbahnamerikanische/rossberg-gmbh-co-kg/1673452905650/commercial.mp3",
      "artist": "Eisenbahnamerikanische",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Zimanyi Daum",
      "url": "./commercials/de-DE/cybersecurity/zimanyi-daum/1673452743670/commercial.mp3",
      "artist": "Cybersecurity",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "N H Kg",
      "url": "./commercials/de-DE/buchhaltung/n-h-kg/1673453367512/commercial.mp3",
      "artist": "Buchhaltung",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Herzenberg Richards Und Weis",
      "url": "./commercials/de-DE/transport-lkw-eisenbahnverkehr/herzenberg-richards-und-weis/1673453944494/commercial.mp3",
      "artist": "Transport Lkw Eisenbahnverkehr",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Matula Jess Und Becker",
      "url": "./commercials/de-DE/rundfunkmedien/matula-jess-und-becker/1673454280454/commercial.mp3",
      "artist": "Rundfunkmedien",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Franz Nowak",
      "url": "./commercials/de-DE/cybersecurity/franz-nowak/1673454290768/commercial.mp3",
      "artist": "Cybersecurity",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Sauer Frank",
      "url": "./commercials/de-DE/fischerei/sauer-frank/1673452799758/commercial.mp3",
      "artist": "Fischerei",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Taufratshofer Bremser Und Sihler",
      "url": "./commercials/de-DE/bibliotheken/taufratshofer-bremser-und-sihler/1673454413486/commercial.mp3",
      "artist": "Bibliotheken",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Fink Ag",
      "url": "./commercials/de-DE/justizwesen/fink-ag/1673453379789/commercial.mp3",
      "artist": "Justizwesen",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Jakobs Wallstab",
      "url": "./commercials/de-DE/virtual-und-augmented-reality/jakobs-wallstab/1673452603629/commercial.mp3",
      "artist": "Virtual Und Augmented Reality",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Schwarz Thr Nhardt",
      "url": "./commercials/de-DE/rechtsdienstleistungen/schwarz-thr-nhardt/1673453886476/commercial.mp3",
      "artist": "Rechtsdienstleistungen",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Reusse Gmbh",
      "url": "./commercials/de-DE/gastgewerbe/reusse-gmbh/1673452722656/commercial.mp3",
      "artist": "Gastgewerbe",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Komoll Ohg",
      "url": "./commercials/de-DE/unterhaltungselektronik/komoll-ohg/1673453293735/commercial.mp3",
      "artist": "Unterhaltungselektronik",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Kirch Itt Und Roos",
      "url": "./commercials/de-DE/halbleiter/kirch-itt-und-roos/1673452393419/commercial.mp3",
      "artist": "Halbleiter",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Balnuweit Ohg",
      "url": "./commercials/de-DE/leichtbauwerkstoffe/balnuweit-ohg/1673452627291/commercial.mp3",
      "artist": "Leichtbauwerkstoffe",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Polifka Ug",
      "url": "./commercials/de-DE/k-nstliche-intelligenz/polifka-ug/1673452762759/commercial.mp3",
      "artist": "K Nstliche Intelligenz",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Harms Wiechmann",
      "url": "./commercials/de-DE/3d-druck/harms-wiechmann/1673452577455/commercial.mp3",
      "artist": "3d Druck",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Blochwitz Spinner",
      "url": "./commercials/de-DE/lebensmittelindustrie/blochwitz-spinner/1673453177999/commercial.mp3",
      "artist": "Lebensmittelindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Bork Rohl Nder Und Schwarzer",
      "url": "./commercials/de-DE/internationale-angelegenheiten/bork-rohl-nder-und-schwarzer/1673453572819/commercial.mp3",
      "artist": "Internationale Angelegenheiten",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Gehrke Sack Und Soller",
      "url": "./commercials/de-DE/internet-der-dinge/gehrke-sack-und-soller/1673452508848/commercial.mp3",
      "artist": "Internet Der Dinge",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Humbert Engelen",
      "url": "./commercials/de-DE/papier-und-forstprodukte/humbert-engelen/1673452752804/commercial.mp3",
      "artist": "Papier Und Forstprodukte",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "De Gollnow",
      "url": "./commercials/de-DE/cloud-computing/de-gollnow/1673452584428/commercial.mp3",
      "artist": "Cloud Computing",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Pfersich K Seoglu",
      "url": "./commercials/de-DE/einzelhandel/pfersich-k-seoglu/1673453307424/commercial.mp3",
      "artist": "Einzelhandel",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Klemme Ohg",
      "url": "./commercials/de-DE/r-stungsindustrie/klemme-ohg/1673453583620/commercial.mp3",
      "artist": "R Stungsindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Hentel Ag",
      "url": "./commercials/de-DE/einzelhandel/hentel-ag/1673453847271/commercial.mp3",
      "artist": "Einzelhandel",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Somssich Da",
      "url": "./commercials/de-DE/pharmazeutika/somssich-da/1673454195576/commercial.mp3",
      "artist": "Pharmazeutika",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "St Wer Gmbh",
      "url": "./commercials/de-DE/technologie/st-wer-gmbh/1673454249889/commercial.mp3",
      "artist": "Technologie",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Cleve S Ren",
      "url": "./commercials/de-DE/umwelttechnologie/cleve-s-ren/1673452703047/commercial.mp3",
      "artist": "Umwelttechnologie",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Tischler Dienel",
      "url": "./commercials/de-DE/wasseraufbereitung/tischler-dienel/1673454046069/commercial.mp3",
      "artist": "Wasseraufbereitung",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Wischek K Lotzei Und Borgschulze",
      "url": "./commercials/de-DE/chemieindustrie/wischek-k-lotzei-und-borgschulze/1673453013211/commercial.mp3",
      "artist": "Chemieindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Wischek Gombert",
      "url": "./commercials/de-DE/virtual-und-augmented-reality/wischek-gombert/1673452288463/commercial.mp3",
      "artist": "Virtual Und Augmented Reality",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Knoblich Ohg",
      "url": "./commercials/de-DE/logistikindustrie/knoblich-ohg/1673453623781/commercial.mp3",
      "artist": "Logistikindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Drees Gruppe",
      "url": "./commercials/de-DE/lagerwirtschaft/drees-gruppe/1673452791638/commercial.mp3",
      "artist": "Lagerwirtschaft",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Neuendorf Gmbh",
      "url": "./commercials/de-DE/m-bel/neuendorf-gmbh/1673454109361/commercial.mp3",
      "artist": "M Bel",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Schreiber Jaros Und Lauckner",
      "url": "./commercials/de-DE/eisenbahnamerikanische/schreiber-jaros-und-lauckner/1673452336707/commercial.mp3",
      "artist": "Eisenbahnamerikanische",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Diedrich Ug",
      "url": "./commercials/de-DE/baustoffindustrie/diedrich-ug/1673452417838/commercial.mp3",
      "artist": "Baustoffindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Betz Bichler",
      "url": "./commercials/de-DE/luft-und-raumfahrtindustrie/betz-bichler/1673453268404/commercial.mp3",
      "artist": "Luft Und Raumfahrtindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Kubera Gruppe",
      "url": "./commercials/de-DE/logistikindustrie/kubera-gruppe/1673452858403/commercial.mp3",
      "artist": "Logistikindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Schacht Oeser Und Cronj Ger",
      "url": "./commercials/de-DE/investmentbanking/schacht-oeser-und-cronj-ger/1673452921404/commercial.mp3",
      "artist": "Investmentbanking",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Volker Kempe Und Felke",
      "url": "./commercials/de-DE/marktforschung/volker-kempe-und-felke/1673452550983/commercial.mp3",
      "artist": "Marktforschung",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Sattelmaier K Sters Und Blum",
      "url": "./commercials/de-DE/technologie/sattelmaier-k-sters-und-blum/1673453932007/commercial.mp3",
      "artist": "Technologie",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Senkel Olbrich Und Krohn",
      "url": "./commercials/de-DE/superm-rkte/senkel-olbrich-und-krohn/1673452716042/commercial.mp3",
      "artist": "Superm Rkte",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Jungbluth De Und Hentel",
      "url": "./commercials/de-DE/restaurants/jungbluth-de-und-hentel/1673453488698/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Marner Eberhard",
      "url": "./commercials/de-DE/eisenbahnamerikanische/marner-eberhard/1673454260465/commercial.mp3",
      "artist": "Eisenbahnamerikanische",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Lakomy Gruppe",
      "url": "./commercials/de-DE/energiewirtschaft/lakomy-gruppe/1673453833336/commercial.mp3",
      "artist": "Energiewirtschaft",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Gutschank Streller Und Engel",
      "url": "./commercials/de-DE/rechtsanwaltspraxis/gutschank-streller-und-engel/1673454402584/commercial.mp3",
      "artist": "Rechtsanwaltspraxis",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Dengler Kg",
      "url": "./commercials/de-DE/computer-hardware/dengler-kg/1673452669547/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Lutz Bos Und Landmann",
      "url": "./commercials/de-DE/umwelttechnologie/lutz-bos-und-landmann/1673452781042/commercial.mp3",
      "artist": "Umwelttechnologie",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Senkel Steinkamp Und Greb",
      "url": "./commercials/de-DE/lebensmittel-und-getr-nke/senkel-steinkamp-und-greb/1673453089421/commercial.mp3",
      "artist": "Lebensmittel Und Getr Nke",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Kneifel Br Mme Und Wollenberg",
      "url": "./commercials/de-DE/finanzdienstleistungen/kneifel-br-mme-und-wollenberg/1673453076881/commercial.mp3",
      "artist": "Finanzdienstleistungen",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Schlangen Montag",
      "url": "./commercials/de-DE/ressourceneffizienz/schlangen-montag/1673453465368/commercial.mp3",
      "artist": "Ressourceneffizienz",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Malkus Lauinger Und Drechsler",
      "url": "./commercials/de-DE/genomik/malkus-lauinger-und-drechsler/1673453873906/commercial.mp3",
      "artist": "Genomik",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Soller Strege Und Lieder",
      "url": "./commercials/de-DE/umweltservice/soller-strege-und-lieder/1673454453087/commercial.mp3",
      "artist": "Umweltservice",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Ritter Biba Und Orthmann",
      "url": "./commercials/de-DE/sport/ritter-biba-und-orthmann/1673452656979/commercial.mp3",
      "artist": "Sport",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": " Beracker Weniger",
      "url": "./commercials/de-DE/bildungsmanagement/beracker-weniger/1673453256359/commercial.mp3",
      "artist": "Bildungsmanagement",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Steidl Schmalzle",
      "url": "./commercials/de-DE/energiemanagement/steidl-schmalzle/1673453319823/commercial.mp3",
      "artist": "Energiemanagement",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "H Nig Treff",
      "url": "./commercials/de-DE/finanzdienstleistungen/h-nig-treff/1673453818674/commercial.mp3",
      "artist": "Finanzdienstleistungen",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Zeyen Jansen",
      "url": "./commercials/de-DE/pharmazeutika/zeyen-jansen/1673454425147/commercial.mp3",
      "artist": "Pharmazeutika",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Kleiber Losch",
      "url": "./commercials/de-DE/luft-und-raumfahrt/kleiber-losch/1673452212232/commercial.mp3",
      "artist": "Luft Und Raumfahrt",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Freimann Gross Und Schuff",
      "url": "./commercials/de-DE/bildungsmanagement/freimann-gross-und-schuff/1673454389237/commercial.mp3",
      "artist": "Bildungsmanagement",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Kupfer Jasinski",
      "url": "./commercials/de-DE/ressourceneffizienz/kupfer-jasinski/1673453200105/commercial.mp3",
      "artist": "Ressourceneffizienz",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Frenzel Dix Und Sporrer",
      "url": "./commercials/de-DE/milchwirtschaft/frenzel-dix-und-sporrer/1673452350858/commercial.mp3",
      "artist": "Milchwirtschaft",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Paukner Kg",
      "url": "./commercials/de-DE/gesetz-enforcement/paukner-kg/1673454311367/commercial.mp3",
      "artist": "Gesetz Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Horn Gmbh Co Kg",
      "url": "./commercials/de-DE/luftverkehr/horn-gmbh-co-kg/1673453705667/commercial.mp3",
      "artist": "Luftverkehr",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "B Ttner Kettenis Und Weidner",
      "url": "./commercials/de-DE/transport-lkw-eisenbahnverkehr/b-ttner-kettenis-und-weidner/1673452771349/commercial.mp3",
      "artist": "Transport Lkw Eisenbahnverkehr",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Danneberg Dittmann Und Rosbach",
      "url": "./commercials/de-DE/tourismusindustrie/danneberg-dittmann-und-rosbach/1673454184472/commercial.mp3",
      "artist": "Tourismusindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Bethke M Ller Und Horak",
      "url": "./commercials/de-DE/druckindustrie/bethke-m-ller-und-horak/1673452201949/commercial.mp3",
      "artist": "Druckindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Kresse Gruppe",
      "url": "./commercials/de-DE/feine-kunst/kresse-gruppe/1673453111368/commercial.mp3",
      "artist": "Feine Kunst",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Engelen Frauen Und Porth",
      "url": "./commercials/de-DE/informationstechnologie/engelen-frauen-und-porth/1673454231237/commercial.mp3",
      "artist": "Informationstechnologie",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Bogenrieder Tucholke",
      "url": "./commercials/de-DE/restaurants/bogenrieder-tucholke/1673452376365/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Ecker Rother Und Leiteritz",
      "url": "./commercials/de-DE/druckindustrie/ecker-rother-und-leiteritz/1673452979893/commercial.mp3",
      "artist": "Druckindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "D Ring Gruppe",
      "url": "./commercials/de-DE/zivile-und-soziale-organisationen/d-ring-gruppe/1673452182825/commercial.mp3",
      "artist": "Zivile Und Soziale Organisationen",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Schweisfurth Nolte",
      "url": "./commercials/de-DE/genomik/schweisfurth-nolte/1673453476617/commercial.mp3",
      "artist": "Genomik",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Zeuch Gadschiew Und Krug",
      "url": "./commercials/de-DE/datenanalyse/zeuch-gadschiew-und-krug/1673453540230/commercial.mp3",
      "artist": "Datenanalyse",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Uhlemann Gmbh Co Kg",
      "url": "./commercials/de-DE/erneuerbare-energien/uhlemann-gmbh-co-kg/1673452822720/commercial.mp3",
      "artist": "Erneuerbare Energien",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Bichler Cordes Und Siewert",
      "url": "./commercials/de-DE/e-commerce/bichler-cordes-und-siewert/1673452834396/commercial.mp3",
      "artist": "E Commerce",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Caspers Gmbh Co Kg",
      "url": "./commercials/de-DE/programmentwicklung/caspers-gmbh-co-kg/1673453429050/commercial.mp3",
      "artist": "Programmentwicklung",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Hasse Jarets Und Dauer",
      "url": "./commercials/de-DE/regierungsverwaltung/hasse-jarets-und-dauer/1673453033143/commercial.mp3",
      "artist": "Regierungsverwaltung",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Bartels Ohg",
      "url": "./commercials/de-DE/bibliotheken/bartels-ohg/1673453562465/commercial.mp3",
      "artist": "Bibliotheken",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "K Ther Philipp Und Peter",
      "url": "./commercials/de-DE/virtual-und-augmented-reality/k-ther-philipp-und-peter/1673453332940/commercial.mp3",
      "artist": "Virtual Und Augmented Reality",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Gakst Dter Ohg",
      "url": "./commercials/de-DE/grund-und-sekundarschulbildung/gakst-dter-ohg/1673452140084/commercial.mp3",
      "artist": "Grund Und Sekundarschulbildung",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Abicht Sch Tz",
      "url": "./commercials/de-DE/milit-r/abicht-sch-tz/1673454468047/commercial.mp3",
      "artist": "Milit R",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Brettschneider Burghagen",
      "url": "./commercials/de-DE/automobilindustrie/brettschneider-burghagen/1673452690681/commercial.mp3",
      "artist": "Automobilindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Kraft Prediger",
      "url": "./commercials/de-DE/film-und-fernsehproduktion/kraft-prediger/1673453598147/commercial.mp3",
      "artist": "Film Und Fernsehproduktion",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Franzis Schonberg",
      "url": "./commercials/de-DE/gesetz-enforcement/franzis-schonberg/1673453129500/commercial.mp3",
      "artist": "Gesetz Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Jungbluth Gruppe",
      "url": "./commercials/de-DE/energiewirtschaft/jungbluth-gruppe/1673452126482/commercial.mp3",
      "artist": "Energiewirtschaft",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Benner Hallmann",
      "url": "./commercials/de-DE/versorgungsunternehmen/benner-hallmann/1673454354562/commercial.mp3",
      "artist": "Versorgungsunternehmen",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Kaiser Ag",
      "url": "./commercials/de-DE/finanzdienstleistungen/kaiser-ag/1673453400307/commercial.mp3",
      "artist": "Finanzdienstleistungen",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Stein Pressler",
      "url": "./commercials/de-DE/halbleiter/stein-pressler/1673452990391/commercial.mp3",
      "artist": "Halbleiter",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Herschmann S Rth Und Eich",
      "url": "./commercials/de-DE/gesetzgebungsbeh-rde/herschmann-s-rth-und-eich/1673454341898/commercial.mp3",
      "artist": "Gesetzgebungsbeh Rde",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Koehl Gombert",
      "url": "./commercials/de-DE/unterhaltungselektronik/koehl-gombert/1673454217323/commercial.mp3",
      "artist": "Unterhaltungselektronik",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Wassiluk Klapper Und Schuri",
      "url": "./commercials/de-DE/pharmazeutische-industrie/wassiluk-klapper-und-schuri/1673453245812/commercial.mp3",
      "artist": "Pharmazeutische Industrie",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Bruns Krol Und Nastvogel",
      "url": "./commercials/de-DE/computer-software/bruns-krol-und-nastvogel/1673454134810/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Sch Ffel Winkler",
      "url": "./commercials/de-DE/recyclingwirtschaft/sch-ffel-winkler/1673452450057/commercial.mp3",
      "artist": "Recyclingwirtschaft",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Schuff Gmbh",
      "url": "./commercials/de-DE/tabakwaren/schuff-gmbh/1673453988112/commercial.mp3",
      "artist": "Tabakwaren",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Scheuring Goldk Hle Und Kinadeter",
      "url": "./commercials/de-DE/regulierungstechnologie/scheuring-goldk-hle-und-kinadeter/1673454122831/commercial.mp3",
      "artist": "Regulierungstechnologie",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Axmann Gmbh",
      "url": "./commercials/de-DE/internationale-angelegenheiten/axmann-gmbh/1673453551308/commercial.mp3",
      "artist": "Internationale Angelegenheiten",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Harms Kettenis Und Haug",
      "url": "./commercials/de-DE/marketing-und-werbung/harms-kettenis-und-haug/1673452159841/commercial.mp3",
      "artist": "Marketing Und Werbung",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Dressler Dieckmann Und R Cker",
      "url": "./commercials/de-DE/restaurants/dressler-dieckmann-und-r-cker/1673453797473/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Kawohl Ag",
      "url": "./commercials/de-DE/halbleiter/kawohl-ag/1673453514688/commercial.mp3",
      "artist": "Halbleiter",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Krug Herweg Und Meissner",
      "url": "./commercials/de-DE/konsumg-terindustrie/krug-herweg-und-meissner/1673454322003/commercial.mp3",
      "artist": "Konsumg Terindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Riermeier Ug",
      "url": "./commercials/de-DE/baustoffindustrie/riermeier-ug/1673454160893/commercial.mp3",
      "artist": "Baustoffindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Zintl Jarets",
      "url": "./commercials/de-DE/freizeit-und-dienstleistungseinrichtungen/zintl-jarets/1673453500086/commercial.mp3",
      "artist": "Freizeit Und Dienstleistungseinrichtungen",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Rosenthal Graf",
      "url": "./commercials/de-DE/ressourceneffizienz/rosenthal-graf/1673453968888/commercial.mp3",
      "artist": "Ressourceneffizienz",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Waschb Sch Ag",
      "url": "./commercials/de-DE/versicherungswirtschaft/waschb-sch-ag/1673452171597/commercial.mp3",
      "artist": "Versicherungswirtschaft",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Henkel Loska Und Schmalzle",
      "url": "./commercials/de-DE/erneuerbare-energien/henkel-loska-und-schmalzle/1673453668829/commercial.mp3",
      "artist": "Erneuerbare Energien",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Gesell Ug",
      "url": "./commercials/de-DE/krankenhaus-und-gesundheitswesen/gesell-ug/1673452233589/commercial.mp3",
      "artist": "Krankenhaus Und Gesundheitswesen",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Panzig Mensah",
      "url": "./commercials/de-DE/rechtsanwaltspraxis/panzig-mensah/1673453634877/commercial.mp3",
      "artist": "Rechtsanwaltspraxis",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Gromisch Wachtel",
      "url": "./commercials/de-DE/chemieindustrie/gromisch-wachtel/1673454365910/commercial.mp3",
      "artist": "Chemieindustrie",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Rossler Gmbh",
      "url": "./commercials/de-DE/lebensmittelproduktion/rossler-gmbh/1673453149483/commercial.mp3",
      "artist": "Lebensmittelproduktion",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "M Hleis Agostini",
      "url": "./commercials/de-DE/gesetz-enforcement/m-hleis-agostini/1673453056044/commercial.mp3",
      "artist": "Gesetz Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Dreissigacker Ug",
      "url": "./commercials/de-DE/luftverkehr/dreissigacker-ug/1673452566927/commercial.mp3",
      "artist": "Luftverkehr",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Huke Gmbh Co Kg",
      "url": "./commercials/de-DE/m-bel/huke-gmbh-co-kg/1673452253997/commercial.mp3",
      "artist": "M Bel",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Klaus Ag",
      "url": "./commercials/de-DE/krankenhaus-und-gesundheitswesen/klaus-ag/1673453528013/commercial.mp3",
      "artist": "Krankenhaus Und Gesundheitswesen",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Sladek Schwidde",
      "url": "./commercials/de-DE/zeitungen/sladek-schwidde/1673452884303/commercial.mp3",
      "artist": "Zeitungen",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Gr Ss Boruschewski",
      "url": "./commercials/de-DE/bergbau-und-metallurgie/gr-ss-boruschewski/1673453223415/commercial.mp3",
      "artist": "Bergbau Und Metallurgie",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Wessel Madubuko",
      "url": "./commercials/de-DE/krankenhaus-und-gesundheitswesen/wessel-madubuko/1673452361398/commercial.mp3",
      "artist": "Krankenhaus Und Gesundheitswesen",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Grosser Adams Und Schmidtchen",
      "url": "./commercials/de-DE/unterhaltung/grosser-adams-und-schmidtchen/1673453100090/commercial.mp3",
      "artist": "Unterhaltung",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Rabenstein Schindzielorz Und Stolz",
      "url": "./commercials/de-DE/cloud-computing/rabenstein-schindzielorz-und-stolz/1673453002006/commercial.mp3",
      "artist": "Cloud Computing",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Leyckes Jarets",
      "url": "./commercials/de-DE/informationstechnologie/leyckes-jarets/1673452492435/commercial.mp3",
      "artist": "Informationstechnologie",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Ranftl Sch Tz Und Herweg",
      "url": "./commercials/de-DE/chemische-industrie/ranftl-sch-tz-und-herweg/1673454331906/commercial.mp3",
      "artist": "Chemische Industrie",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "N H Ug",
      "url": "./commercials/de-DE/religi-se-einrichtungen/n-h-ug/1673453862182/commercial.mp3",
      "artist": "Religi Se Einrichtungen",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

