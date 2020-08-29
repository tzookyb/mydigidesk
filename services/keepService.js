import { utilService } from './utilService.js'
import { storageService } from './storageService.js'

export const keepService = {
    getNotes,
    createNote,
    removeNote,
    searchNotes,
    updateNote,
    getNoteById,
    getLabels,
    updateWholeNote,
}

var keepNotes = [];
var mapLabels;

init();
function init() {
    _loadNotes();
    _mapLabels();
}


function _createDefaultNotes() {
    keepNotes = [{
        id: utilService.makeId(),
        type: 'video',
        content: { title: 'Before haircut, watch this', text: '', url: 'h32y6smVwjs' },
        isPinned: true,
        isTrash: false,
        backgroundColor: '#fbbc04',
        labels: ['Fun', 'Videos I like'],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: { title: 'ATM password', url: '', text: 'The ATM password is 1278' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#ccff90',
        labels: ['Personal'],
    },
    {
        id: utilService.makeId(),
        type: 'video',
        content: { title: 'Memorize this song:', text: '', url: 'WqSZAExM828' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#E2D7AE',
        labels: ['Fun'],
    },
    {
        id: utilService.makeId(),
        type: 'image',
        content: { title: 'Ham Po', text: '', url: 'https://media.giphy.com/media/l09ziOJeVS7SiIu05t/giphy.gif' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#ffffff',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'image',
        content: { title: 'What Jake thinks about Digidesk', url: 'https://media.giphy.com/media/B1a8Ng70ynoXK/giphy.gif', text: '' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#fdcfe8',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: { title: 'Bank password', url: '', text: 'password is 56347' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#a7ffeb',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: {
            title: 'Haiku I Wrote', url: '', text: `
            An old silent pond..
            A frog jumps into the pond,
            splash! Silence again.

            Autumn moonlight-
            a worm digs silently
            into the chestnut.

            In the twilight rain
            these brilliant- hued hibiscus -
            A lovely sunset.` },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#f28b82',
        labels: ['Spiritual'],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: {
            title: 'Pancake Recipe', url: '', text: `
            1 Kitchen
            1 egg
            1.25 cup of flour
            70g melted butter
            1 spoon baking powder
            1 cup of milk
            vanila extract
            1 spoon sugar
            tons of maple`
        },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#fbbc04',
        labels: ['Cooking'],
    },
    {
        id: utilService.makeId(),
        type: 'image',
        content: { title: 'You should eat your veggies!', text: '', url: 'https://media.giphy.com/media/54Y38YdCPe58XA0FpJ/giphy.gif' },
        isPinned: true,
        isTrash: false,
        backgroundColor: '#f28b82',
        labels: ['Fun'],
    },
    {
        id: utilService.makeId(),
        type: 'image',
        content: { title: 'No need for you!', text: '', url: 'https://media.giphy.com/media/15aGGXfSlat2dP6ohs/giphy.gif' },
        isPinned: false,
        isTrash: true,
        backgroundColor: '#f28b82',
        labels: ['Fun'],
    }
    ]
}

function _saveNotes() {
    storageService.save('keepNotes', keepNotes);
}

function _loadNotes() {
    const loadedNotes = storageService.load('keepNotes');
    if (!loadedNotes || !loadedNotes.length) {
        _createDefaultNotes();
        _saveNotes();
    }
    else {
        keepNotes = loadedNotes;
    }
}

function getNotes(filter) {
    if (filter === 'trash') {
        const notes = keepNotes.filter(note => {
            return note.isTrash
        })
        return Promise.resolve(notes)
    }
    var notes = keepNotes.filter(note => {
        return !note.isTrash
    })
    if (filter === 'allnotes') {
        return Promise.resolve(notes);
    } else {
        notes = _getFilteredNotes(notes, filter);
        return Promise.resolve(notes);
    }
}

function _getFilteredNotes(notes, filter) {
    const filteredNotes = notes.filter(note => {
        return note.labels.some(label => {
            return (label === filter);
        })
    })
    return filteredNotes;
}

function _mapLabels() {
    mapLabels = {};
    keepNotes.forEach(note => {
        if (!note.isTrash) {
            note.labels.forEach(label => {
                if (!mapLabels[label]) mapLabels[label] = 0;
                mapLabels[label]++;
            })
        }
    })
}

function getLabels() {
    return Promise.resolve(mapLabels)
}

function _getNoteIdx(noteId) {
    const idx = keepNotes.findIndex(note => note.id === noteId);
    return idx;
}

function createNote(data) {
    var content;
    switch (data.type) {
        case 'text':
            content = { title: data.title || '', text: data.content, url: '' }
            break;
        case 'image':
            content = { title: '', url: data.content, text: '', }
            break;
        case 'video':
            content = { title: '', url: _getVideoUrl(data.content), text: '' }
            break;
    }

    const note = {
        id: utilService.makeId(),
        type: data.type,
        content,
        isPinned: data.isPinned,
        isTrash: false,
        backgroundColor: data.backgroundColor,
        labels: data.labels,
    }
    keepNotes.unshift(note);
    _saveNotes();
    _mapLabels();
    return Promise.resolve(note.id);
}

function _getVideoUrl(data) {
    var idx = data.indexOf('=') + 1;
    var videoId = data.slice(idx);
    idx = videoId.indexOf('?');
    if (idx === -1) return videoId;
    else videoId.slice(0, idx);
    return videoId;
}

function updateNote(noteId, key, data) {
    const idx = _getNoteIdx(noteId);
    const note = _getNoteById(noteId);
    note[key] = data;
    keepNotes.splice(idx, 1, note);
    _saveNotes();
    _mapLabels();
    return Promise.resolve();
}

function updateWholeNote(note) {
    const idx = _getNoteIdx(note.id);
    keepNotes.splice(idx, 1, note);
    _saveNotes();
    _mapLabels();
    return Promise.resolve();
}

function removeNote(noteId) {
    const idx = _getNoteIdx(noteId);
    keepNotes.splice(idx, 1);
    _saveNotes();
    _mapLabels();
    return Promise.resolve();
}

function searchNotes(string) {
    const notes = keepNotes.filter(note => {
        return note.content.title.toLowerCase().includes(string);
    })
    return Promise.resolve(notes);
}

function _getNoteById(noteId) {
    return keepNotes.find(note => note.id === noteId);
}
function getNoteById(noteId) {
    return Promise.resolve(keepNotes.find(note => note.id === noteId));
}