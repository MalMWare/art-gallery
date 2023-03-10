function Gallery(props){
    return (
        <div style={{'width': '100%'}}>
            <img src={props.data.primaryImage} alt={props.title} />
            <h4>{props.data.artistDisplayName}</h4>
            <p>{props.data.medium}</p>
        </div>
    )
} 

export default Gallery