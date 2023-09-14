# Titolo: Boolflix

## Istruzioni

- Creo due componenti dentro _App.vue_

  - _AppHeader_
    - creo una barra di ricerca nel _AppHeader_ per cercare i film
      - _filmCercato_ sarà il contenuto dentro la barra di ricerca
  - _AppMain_
    - Creo _ListCards_ importato dentro ad _AppMain_
      - _ListCards_: stampa le carte **(TODO: creare più carte con un ciclo for)**
        - Creo _Card_ importato dentro _ListCards_

- Creo una store per immagazzinare dei dati

- Il componente _App.vue_

  - creo una costante _apiUri_, che è il link per ricerca dei film

    - quando _filmCercato_ viene inviato da _AppHeader_ a _App.vue_

      - _endpoint_ sara = _apiUri_ + _filmCercato_

  - _App.vue_ fa la chiamata alle API con il link _endpoint_
    - ricevera una lista di film trovati
    - dalla lista si estrae i dati richiesti come per esempio nome, titolo originale, valutazione, ecc...
    - per ogni film creo un oggetto con i valori dei dati richiesti
    - aggiungo i film in una lista che salvero nella _store_
      - _listFilms_

- Il componente _ListCards_

  - riceve dalla store la lista _listFilms_
  - per ogni film nella lista _listFilms_
    - invio le informazione del film al componente _Card_

- il componente _Card_
  - stampa a schermo per l'utente le informazioni ricevute da _ListCards_
