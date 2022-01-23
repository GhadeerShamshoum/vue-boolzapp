/*Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
BONUS
Funzionalità
- evitare che l’utente possa inviare un messaggio vuoto o composto solamente da spazi
- A) cambiare icona in basso a destra (a fianco all’input per scrivere un nuovo messaggio) finché l’utente sta scrivendo: di default si visualizza l’icona del microfono, quando l’input non è vuoto si visualizza l’icona dell’aeroplano. Quando il messaggio è stato inviato e l’input si svuota, si torna a visualizzare il microfono.
B) inviare quindi il messaggio anche cliccando sull’icona dell’aeroplano
- predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta “ok:” quando il pc risponde, anziché scrivere “ok”, scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
- visualizzare nella lista dei contatti l’ultimo messaggio inviato/ricevuto da ciascun contatto
- inserire l’orario corretto nei messaggi (v. note day.js)
- sotto al nome del contatto nella parte in alto a destra, cambiare l’indicazione dello stato: visualizzare il testo “sta scrivendo...” nel timeout in cui il pc risponde, poi mantenere la scritta “online” per un paio di secondi e infine visualizzare “ultimo accesso alle xx:yy” con l’orario corretto
- dare la possibilità all’utente di cancellare tutti i messaggi di un contatto o di cancellare l’intera chat con tutti i suoi dati: cliccando sull’icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci “Elimina messaggi” ed “Elimina chat”; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l’intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)
- dare la possibilità all’utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all’icona del nuovo contatto
- fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick: [https://vuejs.org/v2/api/#Vue-nextTick](https://vuejs.org/v2/api/#Vue-nextTick))
- aggiungere le emoticons, tramite l’utilizzo di una libreria, ad esempio: [https://www.npmjs.com/package/vue-emoji-picker](https://www.npmjs.com/package/vue-emoji-picker)
Grafica
- visualizzare un messaggio di benvenuto che invita l’utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione
- aggiungere una splash page visibile per 1s all’apertura dell’app
- A) rendere l’app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto.
B) aggiungere quindi un’icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti
- aggiungere un’icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
- aggiungere un’icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale*/


let app = new Vue({
    el: "#app",

    data: {
        switchMode:false,
        present: null,
        presentMessage: null,
        writeMessages:'',
        search: '',
        dt:'',
        tooltiptextStatus:false,

        user:
            {
            name: 'Ghadeer',
            avatar: '_5',
            },

        contacts: [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
            ],
            },

            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
            },
            
            {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
            ],
            },
            
            {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
            ]
            },
        ]
    },
    updated: function(){
        this.scrollToEnd()
    },
    
    methods:{
        //go back to homepage(main screen)
        mainScreen: function(){
            window.location="index.html";
        },
        
        //night mode (dark mode)
        nightModeButton: function(){
            if(this.switchMode===false){
                this.switchMode=true;
                console.log(this.switchMode)
            }else 
            if(this.switchMode===true){
                this.switchMode=false;
                console.log(this.switchMode)
            }
        },

        nightMode: function(){
            if(this.switchMode === true){
                return "nightMode";
            }
            return "";
        },
        oneClick(event) {
            this.clicks++;
            if (this.clicks === 1) {
              this.timer = setTimeout( () => {
                this.result.push(event.type);
                this.clicks = 0
              }, this.delay);
            } else {
               clearTimeout(this.timer);  
               this.result.push('dblclick');
               this.clicks = 0;
            }         
          },

        //click (choose a contact (main-left)
        chosenContact: function(index){
            console.log(index)
            this.present = index;
        },

        /*click on the contact's div ----> change color */
        changeColor: function( indexContact){
            if(indexContact == this.present){
                console.log(indexContact, this.present, ('color'))
                return "gray";
            }
            return "";
        },
        
        //active- show the contact that has been chosen (header-top right)
        isPresent: function( indexContact){
            console.log('active');
            if(indexContact == this.present){
                return "active";
            }
            return "";   
        },

        /*Filter names(main-top-left) */  
        filterNames: function(){
            for(i = 0; i<this.contacts.length; i++){
                if(!this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())){
                    this.contacts[i].visible = false;
                    console.log('false');  
                }else{
                    this.contacts[i].visible = true;
                }  
            }
        },

        visibility: function(index){
            if(!this.contacts[index].visible === true)
                return 'disappear'
            
        },
        
        /*Popup (messages) options & delete */
        tooltiptext: function(indexMessage){
            this.presentMessage=indexMessage;
            console.log(this.presentMessage, indexMessage); 
            if(this.tooltiptextStatus===false){
                this.tooltiptextStatus=true;
            }else 
            if(this.tooltiptextStatus===true){
                this.tooltiptextStatus=false;
                console.log(this.tooltiptextStatus)
            }

        },

        show: function(indexMessage){
            console.log(indexMessage, this.presentMessage, 'sda')
            if(indexMessage == this.presentMessage){
                if(this.tooltiptextStatus === true){
                    return "show";
                }
                return "";
            }
        },
    
        /*Delete messages */
        deleteMessage: function(indexMessage){
            this.contacts[this.present].messages.splice(indexMessage, 1);
            if (this.contacts[this.present].messages.length-1==0) {
                this.contacts[this.present].messages.splice()
                console.log(indexMessage ,"delete");
                
            }

        },

        /*write messages (send & replay) */
        addMessage: function(present){
           let text= this.writeMessages.trim(); 
           if(text == '' ) return;
           if(this.contacts[this.present].date == null){
            let dt=new Date();
            let date=("0" + dt.getDate()).slice(-2);
            let month=("0" + dt.getMonth() + 1).slice(-2);
            let year= dt.getFullYear();
            let hours= dt.getHours();
            let minutes=dt.getMinutes();
            let seconds=dt.getSeconds()
            let output = date + '-' + month + '-' + year + " " + hours + ":" + minutes + ":" + seconds ;
            console.log(output)
               
               this.contacts[present].messages.push({
                   date: output,
                   text: this.writeMessages,
                    status: 'sent' 
               })  
           }
           else{

               this.contacts[present].messages.push({
                   date: dayjs().format("DD/MM/YYYY HH:mm"),
                   text: this.writeMessages,
                   status: 'sent'  
               })
           }
            this.writeMessages = '';
            setTimeout(this.replay, 1000);
        },


        replay: function(){
            let dt=new Date();
            let date=("0" + dt.getDate()).slice(-2);
            let month=("0" + dt.getMonth() + 1).slice(-2);
            let year= dt.getFullYear();
            let hours= dt.getHours();
            let minutes=dt.getMinutes();
            let seconds=dt.getSeconds()
            let output = date + '-' + month + '-' + year + " " + hours + ":" + minutes + ":" + seconds ;
            console.log(output)
            this.contacts[this.present].messages.push({
                date: output,
                text: 'ok',
                status: 'received',
        
                  
             })       
        },
       

    /*scroll to end */
        scrollToEnd: function(){
            const container = document.querySelector('.messagesContainerHight');
            container.scrollTop = container.scrollHeight;
            
        }, 

    },
    
})
