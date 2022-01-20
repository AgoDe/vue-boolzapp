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
                        status: 'sent',
                        modal: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        modal: false,

                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        modal: false,
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
                        status: 'sent',
                        modal: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        modal: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        modal: false,
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
                        status: 'received',
                        modal: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        modal: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        modal: false,
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
                        status: 'sent',
                        modal: false,

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        modal: false,
                    }
                ],
            },   
            
        ],
        activeUserId: 0,
        messageInput: '',
        searchContactsInput: '',
        receivedMessages: [
            'ciao!',
            'ciao, come stai?',
            'carissimo!',
            'we grande',
            'ohi, com\'è?',
            'scusa ma ora non ho voglia di parlare con te',
        ],


    },
    methods: {
        randomMessages: function() {
            let randomNumber = Math.floor(Math.random() * ((this.receivedMessages.length) - 1)) + 1
            console.log(randomNumber)
            return  this.receivedMessages[randomNumber]
        },
        activeUser: function(index) {
            this.activeUserId= index
        },
        messagePush: function(index) {
            const messageToPush = this.messageInput
            this.contacts[index].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: messageToPush,
                status: 'sent',
                modal: false,
            })
            this.messageInput = ''
            setTimeout( () => {
                this.contacts[index].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.randomMessages(),
                    status: 'received',
                    modal: false,
            })
            }, 1500)   
        }, 
        activeModal: function (message) {
            message.modal = !message.modal
            console.log(message.text, message.modal)
        },
        deleteMessage: function(messages, index) {
            messages.splice(index, 1)
            console.log('eliminato')
        },
        lastMessageDate: function(element) {
            return element.messages[element.messages.length - 1].date
        },
        lastMessage: function(element) {
            return element.messages[element.messages.length - 1].text
        }
    },
  
})