let app = new Vue({
    el: "#app",

    data: {
        present: -1,
        writeMessages:'',
        contacts: [
            {
            name: 'Michele',
            avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b666f811889067.562541eff3013.png',
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
            avatar: 'https://raw.githubusercontent.com/obliviate-dan/Login-Form/master/img/avatar.png',
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
            avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png',
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
            avatar: 'https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png',
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
                text: this.writeMessages,
                status: 'sent'
                
                
            })
            this.writeMessages = '';
            console.log('hjhjh');

        }
        
    }
})
