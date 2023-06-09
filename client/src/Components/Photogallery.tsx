import React from "react";
import Header from "./Header";
import PhotoAlbum from "react-photo-album";
import { photos } from "../photos";
import { PhotogalleryProps as Props } from "../types/types";

class Photogallery extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {};
        this.onPhotoClick = this.onPhotoClick.bind(this);
    }
    //@ts-ignore
    async onPhotoClick(event) {
        window.open(event.target.src, "_self");
    }

    render() {
        return (
            <div>
                <Header id="Fotogalerie" />
                <PhotoAlbum layout="rows" photos={photos} />
            </div>
        );
    }
}

export default Photogallery;
