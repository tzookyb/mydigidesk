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
        content: { title: 'Get a haircut', url: 'h32y6smVwjs' },
        isPinned: true,
        isTrash: false,
        backgroundColor: '#ffffff',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'image',
        content: { title: 'Ham Po', url: 'https://media.giphy.com/media/l09ziOJeVS7SiIu05t/giphy.gif' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#ffffff',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: { title: 'bank password', text: 'The bank password is 56347' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#ffffff',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: {
            title: 'Haiku I Wrote', text: `An old silent pond..
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
        content: { title: 'ATM password', text: 'The ATM password is 1278' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#fbbc04',
        labels: ['Work', 'Personal'],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: { title: 'ATM password', text: 'The ATM password is 1278' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#fff475',
        labels: ['Personal'],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: { title: 'ATM password', text: 'The ATM password is 1278' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#ccff90',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'image',
        content: { title: 'חשוב לאכול ירקות', url: 'https://media.giphy.com/media/54Y38YdCPe58XA0FpJ/giphy.gif' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#ccff90',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: 'text',
        content: { title: 'ATM password', text: 'The ATM password is 1278' },
        isPinned: false,
        isTrash: false,
        backgroundColor: '#a7ffeb',
        labels: [],
    }]
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
            content = { title: '', text: data.content }
            break;
        case 'image':
            content = { title: '', url: data.content }
            break;
        case 'video':
            content = { title: '', url: _getVideoUrl(data.content) }
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
    keepNotes.push(note);
    _saveNotes();
    _mapLabels();
    console.log(note)
    return Promise.resolve();
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
    const note = getNoteById(noteId);
    note[key] = data;
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
    const notes = keepNotes.filter(note => note.content.text.contains(string) || note.content.title.contains(string));
    return Promise.resolve(notes);
}

function getNoteById(noteId) {
    return keepNotes.find(note => note.id === noteId);
}