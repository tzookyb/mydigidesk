import { utilService } from './utilService.js'
import { storageService } from './storageService.js'


export const keepService = {
    getNotes,
    createNote,
    removeNote,
    searchNotes,
    updateNote,
    getNoteById,
}

var keepNotes = [];

function _createDefaultNotes() {
    keepNotes = [{
        id: utilService.makeId(),
        type: "text",
        content: { title: 'bank password', text: 'The bank password is 56347' },
        isPinned: false,
        isTrash: false,
        backgroundColor: 'yellow',
        labels: [],
    },
    {
        id: utilService.makeId(),
        type: "text",
        content: { title: 'ATM password', text: 'The ATM password is 1278' },
        isPinned: true,
        isTrash: true,
        backgroundColor: 'lightblue',
        labels: [],
    }]
}

function _saveNotes() {
    storageService.save('keepNotes', keepNotes);
}

_loadNotes()
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
    if (filter !== 'allnotes') {
        const notes = _getFilteredNotes(filter);
        return Promise.resolve(notes);
    }
    // const notes = _getFilteredNotes('');
    return Promise.resolve(keepNotes);
}

function _getFilteredNotes(filter) {
    const notes = keepNotes.filter(note => {
        return note.labels.some(label => {
            return label.contains(filter);
        })
    })
    return notes;
}

function _getNoteIdx(noteId) {
    const idx = keepNotes.findIndex(note => note.id === noteId);
    return idx;
}

function createNote(data) {
    const note = {
        id: utilService.makeId(),
        type: data.type,
        content: {
            title: data.title,
            text: data.text
        },
        isPinned: data.isPinned,
        isTrash: false,
        backgroundColor: data.backgroundColor,
        labels: data.labels,
    }
    keepNotes.push(note);
    _saveNotes();
    return Promise.resolve();
}

function updateNote(noteId, key, data) {
    const idx = _getNoteIdx(noteId);
    const note = getNoteById(noteId);
    note[key] = data;
    console.log("updateNote -> note", note)
    keepNotes.splice(idx, 1, note);
    _saveNotes();
    return Promise.resolve();
}

function removeNote(noteId) {
    const idx = _getNoteIdx(noteId);
    keepNotes.splice(idx, 1);
    _saveNotes();
    return Promise.resolve();
}

function searchNotes(string) {
    const notes = keepNotes.filter(note => note.content.text.contains(string) || note.content.title.contains(string));
    return Promise.resolve(notes);
}

function getNoteById(noteId) {
    return keepNotes.find(note => note.id === noteId);
}
// function addLabel(noteId, label) {
//     const note = keepNotes[_getNoteIdx(noteId)];

//     _saveNotes();
//     return Promise.resolve();
// }

// function removeLabel(noteId, label) {
//     const note = keepNotes[_getNoteIdx(noteId)];

//     _saveNotes();
//     return Promise.resolve();
// }

// function isTrashNote(noteId, status) {
//     const note = keepNotes[_getNoteIdx(noteId)]
//     note.isTrash = status;
//     _saveNotes();
//     return Promise.resolve();
// }

// function isPinNote(noteId, status) {
//     const note = keepNotes[_getNoteIdx(noteId)]
//     note.isPinned = status;
//     _saveNotes();
//     return Promise.resolve();
// }