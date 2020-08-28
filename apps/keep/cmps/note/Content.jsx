export function Content({ note, edit, onInput }) {
    var content;
    switch (note.type) {
        case 'text':
            content = note.content.text;
            break;
        case 'video':
            content = <iframe className="iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" type="text/html" src={`https://www.youtube.com/embed/${note.content.url}?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0`}></iframe>;
            break;
        case 'image':
            content = <img className="note-img" src={note.content.url} />;
            break;
    }

    return (edit) ? <div suppressContentEditableWarning={true} contentEditable={true} onInput={(ev) => onInput(ev)} className="note-content">{content}</div> :
        <div className="note-content">{content}</div>;
}