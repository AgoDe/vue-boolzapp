new Vue({
    el:'#app',
    data: {
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
                name: 'Gianfranco',
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
                ],
            },   
            {
                name: 'Fabrizio',
                avatar: '_5',
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
                ],
            },   
            {
                name: 'Sabrina',
                avatar: '_6',
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
                ],
            },   
            {
                name: 'Michelangelo',
                avatar: '_7',
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
                ],
            },   
            {
                name: 'Michele',
                avatar: '_8',
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
           
        ],
        activeUserId: 0,
        messageInput: '',
        searchContactsInput: '',
        filteredContacts: [],
        receivedMessages: [
            'ciao!',
            'ciao, come stai?',
            'carissimo!',
            'we grande',
            'ohi, com\'è?'
        ],

    },
    methods: {
        randomMessages: function() {
            let randomNumber = Math.floor(Math.random() * ((this.receivedMessages.length + 1) - 1)) + 1
            console.log(randomNumber)
            return  this.receivedMessages[randomNumber]
        },
        activeUser: function(index) {
            this.activeUserId= index
        },
        messagePush: function(index) {
            const messageToPush = this.messageInput
            this.contacts[index].messages.push({
                date: '19/01/2022 10:00:00',
                text: messageToPush,
                status: 'sent'
            })
            this.messageInput = ''
            setTimeout( () => {
                this.contacts[index].messages.push({
                    date: '19/01/2022 10:00:01',
                    text: 'we ciao!',
                    status: 'received'
            })
            }, 1000)   
        },
        contactsFilter: function(element) {

            this.filteredContacts = [];
            this.filteredContacts = this.contacts.filter((element) => {
                let nameActive = element.name
                nameActive = nameActive.toLowerCase()
                if(nameActive.startsWith(this.searchContactsInput) ) {
                    return true
                }
                return false
            })
            console.log(this.filteredContacts)
        },
       

/* .startwith()
    evento onchange da usare 
    v:on
    da custom events*/
    
        
    },
  
})