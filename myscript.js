let app = new Vue({
    el: "#app",

    data: {
        present: null,
        presentMessage: null,
        writeMessages:'',
        search: '',

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
    
    methods:{

        chosenContact: function(index){

            console.log(index)
            this.present = index;
        },
        changeColor: function( indexContact){
            
            if(indexContact == this.present){
                return "gray";
            }
            return "";
        },
        
        isPresent: function( indexContact){
            console.log('active');
            if(indexContact == this.present){
                return "active";
            }
            return "";   
        },
      
        addMessage: function(present){
            if(this.writeMessages.length === 0)return;
            this.contacts[present].messages.push({
                date: '',
                text: this.writeMessages,
                status: 'sent' 
                
            })
            this.scrollToEnd;
            this.writeMessages = '';
            setTimeout(this.replay, 1000);

        },

       replay: function(){
           this.contacts[this.present].messages.push({
               date: '',
               text: 'ok',
               status: 'received',
                 
            })       
       },
       
       
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

        tooltiptext: function(indexMessage){
            this.presentMessage=indexMessage;
            console.log(indexMessage)
        },

        deleteMessage: function(indexMessage){
            this.contacts[this.present].messages.splice(indexMessage, 1);

        },
        


        scrollToEnd: function(){
            const container = document.querySelector('.scrollbar');
            container.scrollTop = container.scrollHeight;

        }

    },
    
})
