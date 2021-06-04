import React, {useContext} from "react"
import {GlobalContext} from "../App"
import PhotoCard from "../Photos/PhotoCard";
import AddPhoto from "../Photos/AddPhoto";
import {connect} from "react-redux";


const PersonalAlbums = ({personId, activePerson}) => {
    const {albums, photos, addNewPhoto} = useContext(GlobalContext)
    const renderAlbum = () => {
        const personalList = albums.filter(a => a.personId === personId)
        return personalList.map(a => (
            <div key={a.id}>
                <h3>{a.title}</h3>
                <div className="row">
                    {renderPhotosByAlbum(a.id)}
                </div>
                <div>
                    { activePerson === personId ? <AddPhoto albumId={a.id} addNewPhoto={addNewPhoto} /> : null }
                </div>
            </div>
        ))
    }

    const renderPhotosByAlbum = albumId => {
        const albumPhotos = photos.filter(photo => photo.albumId === albumId)
        return albumPhotos.map(photo => (<PhotoCard key={photo.id} photo={photo} />))
    }

    return (
        renderAlbum()
    )
}
const mapStateToProps = state => {
    return {
        activePerson: state.persons.activePerson
    }
}
export default connect(mapStateToProps, null)(PersonalAlbums)