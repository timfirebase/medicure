import {useEffect, useState} from "react";
import React from "react";
import placeholder from '../../../assets/images/placeholder.jpg';

const UploadImage = (props) => {

        const [{alt, src}, setImg] = useState({
            src: placeholder,
            alt: 'Upload an Image'
        });

        useEffect(() => {
            if(props.placeholder && props.mode && "update" === props.mode) {
                setImg({
                    src: props.placeholder,
                    alt: 'Upload an Image'
                });
            }
        },[props.placeholder,props.mode]);

        const handleImg = (e) => {
            const file = e.target.files[0];
            if(file) {
                setImg({
                    src: URL.createObjectURL(file),
                    alt: file.name
                });
                props.setProfileImg(file);
            }
        }
        return (
            <form encType="multipart/form-data">
                <div style={{
                    position: 'relative',
                    width: '240px',
                    height: '242px',
                    margin: 'auto'
                }}>
                    <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        id="photo"
                        style={{
                            position: 'absolute',
                            height: '1px',
                            width: '1px',
                            overflow: 'hidden',
                            clip: 'rect(1px, 1px, 1px, 1px)'
                        }}
                        onChange={handleImg}
                    />
                    <label htmlFor="photo" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        display: 'block',
                        width: '250px',
                        height: '230px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}>
                        <img src={src} alt={alt} style={{
                            display: 'block',
                            width: '235px',
                            height: '229px',
                            borderRadius: '50%',
                            border: '16px rgb(80, 199, 235) solid'
                        }}/>
                    </label>
                </div>
            </form>
        );
}

export default UploadImage;