export const mailService = {
    getAllEmails,
    markRead,
    getEmailbyId,
    getAllInboxEmails,
    getAllStarredEmails,
    getAllUnreadEmails,
    getAllArchivedEmails,
    getSearchResults,
    getAllSentEmails,
    setStar
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
        address: 'yossitheman@yossmail.com',
        status: 'archived' // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Savta',
        subject: 'hello there',
        body: 'lets meet for a drink!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'savtathequeen@savta.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Dodale',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'dodales1234@doda44.com',
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
        address: 'moseslovesbieber@moshemoshe.com',
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
        address: 'bennyyeledra@benny1234.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Jhonny cash',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'jhonnycashandmezuman1454@mailmail.com',
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
        address: 'lenoardoandchan@mail.com',
        status: null // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Ronen cohen',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        address: 'ronencohentheman123@mail.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Baby book',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        address: 'missbook677@mail.com',
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Miss book',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'steimatzkeystore@mail.com',
        status: 'sent' // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Yossi',
        subject: 'hello',
        body: 'how are you?? I missed you!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'yossitheman@yossmail.com',
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Savta',
        subject: 'yoyoy',
        body: 'lets meet for a drink!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'savtathequeen@savta.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Dodale',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'dodales1234@doda44.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'good morninggg',
        body: 'how are you??',
        isRead: true,
        isStar: false,
        date: Date.now(),
        address: 'moseslovesbieber@moshemoshe.com',
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Benny boy',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: true,
        isStar: false,
        date: Date.now(),
        address: 'bennyyeledra@benny1234.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Jhonny cash',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'jhonnycashandmezuman1454@mailmail.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Leonardo',
        subject: 'good morninggg',
        body: 'how are you??',
        isRead: true,
        isStar: false,
        date: Date.now(),
        address: 'lenoardoandchan@mail.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Dvid Chan',
        subject: 'this is very nice',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        address: 'ronencohentheman123@mail.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Malik',
        subject: 'everthing is ready',
        body: 'what is up are you ready?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        address: 'missbook677@mail.com',
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Jenny',
        subject: 'the package is all closed',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'steimatzkeystore@mail.com',
        status: 'sent' // will be: archived/sent/star
    },
    {
        id: utilService.makeId(),
        name: 'Yossi',
        subject: 'this is nice what are you saying?',
        body: 'how are you?? I missed you!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'yossitheman@yossmail.com',
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Savta',
        subject: 'Ive been calling you to come and eat kuskus',
        body: 'lets meet for a drink!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'savtathequeen@savta.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Dodale',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'dodales1234@doda44.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Moshe',
        subject: 'good morninggg',
        body: 'how are you??',
        isRead: true,
        isStar: false,
        date: Date.now(),
        address: 'moseslovesbieber@moshemoshe.com',
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Benny boy',
        subject: 'Tommorow im going to the park',
        body: 'park hiking?!',
        isRead: true,
        isStar: false,
        date: Date.now(),
        address: 'bennyyeledra@benny1234.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Jhonny cash',
        subject: 'I made some kuskus come and eat',
        body: 'with mafrum and chirshi',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'jhonnycashandmezuman1454@mailmail.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Leonardo',
        subject: 'good morninggg',
        body: 'how are you??',
        isRead: true,
        isStar: false,
        date: Date.now(),
        address: 'lenoardoandchan@mail.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Ronen cohen',
        subject: 'weekend by the beach',
        body: 'lets go swimming itll be awesome?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        address: 'ronencohentheman123@mail.com',
        status: null // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Baby book',
        subject: 'heyyyy',
        body: 'heyy wassap?!',
        isRead: false,
        isStar: true,
        date: Date.now(),
        address: 'missbook677@mail.com',
        status: 'archived' // will be: archived/sent/star
    }, {
        id: utilService.makeId(),
        name: 'Missisipy',
        subject: 'arrangemt for this weekend',
        body: 'whats the arrangemt for this weekend??!',
        isRead: false,
        isStar: false,
        date: Date.now(),
        address: 'steimatzkeystore@mail.com',
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
        if (email.isStar) currStarredEmails.push(email)
    })
    return Promise.resolve(currStarredEmails)
}

function getSearchResults(strToSearch){
    
    let str = strToSearch.toLowerCase()
    const currEmails = []
    emails.map(email => {
        if (email.name.toLowerCase().includes(str) ||
            email.subject.toLowerCase().includes(str) ||
            email.body.toLowerCase().includes(str) ||
            email.address.toLowerCase().includes(str)) {
                currEmails.push(email)
            }
    })
    return Promise.resolve(currEmails)
}

function setStar(id){
    emails.find(email => {
        if (email.id === id) email.isStar = !email.isStar
    })
    
}