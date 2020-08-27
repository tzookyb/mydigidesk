export class ColorPalette extends React.Component {
    state = {
        isShown: false,
    }

    onShowPalette = () => {
        this.setState(prevState => ({ isShown: !prevState.isShown }));
    }

    onChange = (color) => {
        this.setState({ isShown: false });
        this.props.onNoteBgc(this.props.note.id, color);
    }

    render() {
        const colors = [
            '#ffffff',
            '#f28b82',
            '#fbbc04',
            '#fff475',
            '#ccff90',
            '#a7ffeb',
            '#cbf0f8',
            '#aecbfa',
            '#d7aefb',
            '#fdcfe8',
            '#e6c9a8',
            '#e8eaed'
        ];
        const colorsDivs = colors.map((color, idx) => {
            return (
                <div
                    key={idx}
                    className="color-picker"
                    style={{ backgroundColor: color }}
                    onClick={() => this.onChange(color)} >
                </div >
            )
        })

        return (
            <div>
                <div className="note-btn note-bgc" onClick={this.onShowPalette}> Bgc</div >
                {this.state.isShown && <div className="palette">
                    {colorsDivs}
                </div>}
            </div >
        )
    }
}