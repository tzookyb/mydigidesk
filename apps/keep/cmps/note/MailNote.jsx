export function MailNote({ note, onNoteMail }) {

    return <span className="material-icons note-btn note-mail" onClick={() => onNoteMail(note)}>email</span>
    // <div className="note-btn note-mail" onClick={() => onNoteMail(note)}>Email</div>
}