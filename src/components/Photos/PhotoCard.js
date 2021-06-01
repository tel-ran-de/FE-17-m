import React, {useContext} from 'react'
import {GlobalContext} from "../App"


const PhotoCard = ({photo}) => {

    const {photoAction} = useContext(GlobalContext)

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={photo.src} alt={photo.title}/>
                <div className="card-body">
                    <p className="card-title">{photo.title}</p>
                    <p className="card-text">
                        <button onClick={()=>{photoAction(photo.id, 'like')}}>Like({photo.like})</button>
                        <button onClick={()=>{photoAction(photo.id, 'dislike')}}>DisLike({photo.dislike})</button>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PhotoCard