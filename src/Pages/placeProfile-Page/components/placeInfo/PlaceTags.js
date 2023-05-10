import './PlaceTags.css'
const PlaceTags=(props)=>{
    const name=props.name;
    return<>
    <div id='image__tag'>
    {name}
    </div>
    </>
}
export default PlaceTags