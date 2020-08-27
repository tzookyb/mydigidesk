console.log('break a leg');

export const mailService = {
    getAllEmails,
    // getEmailsForDisplay,
    markRead,
    getEmailbyId,
    getAllInboxEmails,
    getAllStarredEmails,
    getAllUnreadEmails,
    getAllArchivedEmails,
    getAllSentEmails
}

import {utilService} from './utilService.js'

// incoming mails only for now
var emails = [{
        id: utilService.makeId(),
        name: 'Yossi',
        subject: 'hello',
        body: 'how are you?? I missed you!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        status: 'archived' // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Savta',
        subject: 'yoyoy',
        body: 'lets meet for a drink!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Dodale',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        status: null // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'good morninggg',
        body: 'how are you??',
        isRead: true,
        isStar: false,
        date: Date.now(),
        status: 'archived' // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Benny boy',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: true,
        isStar: false,
        date: Date.now(),
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Jhonny cash',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        status: null // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Leonardo',
        subject: 'good morninggg',
        body: 'how are you??',
        isRead: true,
        isStar: false,
        date: Date.now(),
        status: null // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Some name',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Baby book',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Miss book',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        status: 'sent' // will be: archived/sent/star
    }
]

function markRead(id) {
    const currEmail = emails.find(email => email.id === id)
    if (!currEmail.isRead) currEmail.isRead === true
}

function getAllEmails() {
    return Promise.resolve(emails)
}

// return specific emails by emails status // deleted / sent / archived
// function getEmailsForDisplay(status){
//     return emails.map(email => email.status === status)
// }

function getEmailbyId(id){
    return Promise.resolve(emails.find(email => email.id === id))
}

function getAllInboxEmails(){
    const currInboxEmails = []
    emails.map(email => {
        if (!email.status) currInboxEmails.push(email)
    })
    return Promise.resolve(currInboxEmails)
}

function getAllUnreadEmails() {
    const unreadEmail = [];
    emails.map(email => {
        if (!email.isRead && !email.status) unreadEmail.push(email)
    })
    return Promise.resolve(unreadEmail)
}

function getAllArchivedEmails() {
    const archivedEmails = [];
    emails.map(email => {
        if (email.status === 'archived') archivedEmails.push(email)
    })
    return Promise.resolve(archivedEmails)
}

function getAllSentEmails() {
    const currSentEmails = []
    emails.map(email => {
        if (email.status === 'sent') currSentEmails.push(email)
    })
    return Promise.resolve(currSentEmails)
}

function getAllStarredEmails(){
    const currStarredEmails = []
    emails.map(email => {
        if (email.isStar && !email.status) currStarredEmails.push(email)
    })
    return Promise.resolve(currStarredEmails)
}

