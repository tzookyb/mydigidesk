import { utilService } from './utilService.js'
import { storageService } from './storageService.js'


export const keepService = {
    getNotes,
    createNote,
    removeNote,
    searchNotes,
    updateNote,
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
    console.log("function_createDefaultNotes -> keepNotes", keepNotes)
}

function _saveNotes() {
    storageService.save('keepNotes', keepNotes);
    console.log("function_saveNotes -> keepNotes", keepNotes)
}

_loadNotes()
function _loadNotes() {
    const loadedNotes = storageService.load('keepNotes');
    if (!loadedNotes || !loadedNotes.length) {
        console.log('load empty, creating default notes...')
        _createDefaultNotes();
        _saveNotes();
    }
    else {
        console.log('loaded notes from storage')
        keepNotes = loadedNotes;
    }
}

function getNotes(filter) {
    console.log("getNotes -> filter", filter)
    if (filter !== 'allnotes') {
        const notes = _getFilteredNotes(filter);
        console.log("getNotes -> notes", notes)
        return Promise.resolve(notes);
    }
    console.log("getNotes -> keepNotes", keepNotes)
    return Promise.resolve(keepNotes);
}

function _getFilteredNotes(filter) {
    const notes = keepNotes.filter(note => {
        console.log("function_getFilteredNotes -> note", note)
        return note.labels.some(label => {
            return label.contains(filter);
        })
    })
    console.log("function_getFilteredNotes -> notes", notes)
    return notes;
}

function _getNoteIdx(noteId) {
    const idx = keepNotes.findIndex(note => note.id === noteId);
    console.log("function_getNoteIdx -> idx", idx)
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
    console.log("createNote -> note", note)
    _saveNotes();
    return Promise.resolve();
}

function updateNote(noteId, data) {
    const note = {
        id: noteId,
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
    console.log("updateNote -> note", note)
    const idx = _getNoteIdx(noteId);
    console.log("updateNote -> idx", idx)
    keepNotes.splice(idx, 1, note);
    console.log("updateNote -> keepNotes", keepNotes)
    _saveNotes();
    return Promise.resolve();
}

function removeNote(noteId) {
    const idx = _getNoteIdx(noteId);
    console.log("removeNote -> idx", idx, "note:", keepnotes[idx]);
    keepNotes.splice(idx, 1);
    _saveNotes();
    return Promise.resolve();
}

function searchNotes(string) {
    const notes = keepNotes.filter(note => note.content.text.contains(string) || note.content.title.contains(string));
    console.log("searchNotes -> notes", notes)
    return Promise.resolve(notes);
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
//     console.log("binNote -> note", note)
//     _saveNotes();
//     return Promise.resolve();
// }

// function isPinNote(noteId, status) {
//     const note = keepNotes[_getNoteIdx(noteId)]
//     note.isPinned = status;
//     console.log("pinNote -> note", note);
//     _saveNotes();
//     return Promise.resolve();
// }