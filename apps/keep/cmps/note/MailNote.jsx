export function MailNote({ note, onNoteMail }) {

    return <span className="material-icons note-btn note-mail" onClick={() => onNoteMail(note)}>email</span>
}