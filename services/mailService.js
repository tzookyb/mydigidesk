console.log('break a leg');

export const mailService = {
    getAllEmails,
    getEmailsForDisplay
}

import {utilService} from './utilService.js'

// incoming mails only for now
var emails = [{
        id: utilService.makeId(),
        name: 'Yossi',
        subject: 'hello',
        body: 'how are you?? I missed you!',
        isRead: false,
        sentAt: Date.now(),
        mailStatus: null // will be deleted/archived/sent
    },
    {
        id: utilService.makeId(),
        name: 'Savta',
        subject: 'yoyoy',
        body: 'lets meet for a drink!',
        isRead: false,
        sentAt: Date.now(),
        mailStatus: null // will be deleted/archived/sent
    }, {
        id: utilService.makeId(),
        name: 'Dodale',
        subject: 'Pornhub subscription',
        body: 'Renew your Pornhub subscription',
        isRead: false,
        sentAt: Date.now(),
        mailStatus: null // will be deleted/archived/sent
    },
    {
        id: utilService.makeId(),
        name: 'Yossi',
        subject: 'good morninggg',
        body: 'how are you??',
        isRead: true,
        sentAt: Date.now(),
        mailStatus: null // will be deleted/archived/sent
    },
    {
        id: utilService.makeId(),
        name: 'jhonny',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: true,
        sentAt: Date.now(),
        mailStatus: null // will be deleted/archived/sent
    }
]

function getAllEmails() {
    return Promise.resolve(emails)
}

// return specific emails by emails status // deleted / sent / 
function getEmailsForDisplay(status){
 
    return emails.map(email => email.mailStatus === status)

}
