function ButtonBar(props) {
    return (
        <div> 
            <button value={-5} onClick={props.setArtId}>Way Back</button>
            <button value={-1} onClick={props.setArtId}>Back</button>
            <button value={1} onClick={props.setArtId}>Next</button>
            <button value={5} onClick={props.setArtId}>Big Next</button>
        </div>
    )
}

export default ButtonBar