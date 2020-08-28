export function Labels({ note, labels, onNoteLabel, isNotesLabel }) {
    const addition = isNotesLabel ? ' V' : '';

    return (
        <div>
            {
                labels.map((label, idx) => {
                    return <p key={idx} className="label" onClick={() => onNoteLabel(note, label)}>{label}{addition}</p>
                })
            }
        </div >
    )
}