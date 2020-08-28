export function Title({ title, edit, onInput }) {
    return (edit) ? <div suppressContentEditableWarning={true} contentEditable={true} onInput={(ev) => onInput(ev)} className="note-title">{title}</div> :
        <div className="note-title">{title}</div>
}