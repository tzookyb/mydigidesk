export function MailNote({ note, onNoteMail }) {

    return <div className="note-btn note-mail" onClick={() => onNoteMail(note)}>Email</div>
}