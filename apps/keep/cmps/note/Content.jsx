import { utilService } from '../../../../services/utilService.js'

export function Content({ note, edit = false, onInput }) {
    var content;
    switch (note.type) {
        case 'text':
            content = note.content.text;
            content = utilService.longText(content, 350)
            break;
        case 'video':
            if (edit) {
                const width = parseInt((window.innerWidth) * 0.9);
                console.log("Content -> width", width)
                const height = parseInt((window.innerHeight - 64) * 0.75);
                console.log("Content -> height", height)
                
                content = <iframe width={width} height={height} className="iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" type="text/html" src={`https://www.youtube.com/embed/${note.content.url}?autoplay=1`}></iframe>;
            } else content = <iframe className="iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" type="text/html" src={`https://www.youtube.com/embed/${note.content.url}?autoplay=0`}></iframe>;
            break;
        case 'image':
            content = <img className="note-img" src={note.content.url} />;
            break;
    }

    return (edit && note.type === 'text') ? <div suppressContentEditableWarning={true} contentEditable={true} onInput={(ev) => onInput(ev)} className="note-content">{content}</div> :
        <div className="note-content">{content}</div>;
}