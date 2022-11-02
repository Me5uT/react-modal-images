import React from 'react';
import { Header } from './Header';
import { Image } from './Image';
import { react_modal_images__modal_container, react_modal_images__modal_content } from './styles';

interface IModalImageProps {
    medium?: string;
    large: string;
    alt?: string;
    onClose: () => void;
    hideDownloadButton?: boolean;
    hideZoomButton?: boolean;
    hideRotateButton?: boolean;
    imageBackgroundColor?: string;
}

export const ModalImage: React.FC<IModalImageProps> = ({ medium, large, alt, onClose, hideDownloadButton, hideZoomButton, hideRotateButton, imageBackgroundColor = 'black' }) => {
    const [move, setMove] = React.useState({
        x: 0,
        y: 0
    });

    const [zoomed, setZoomed] = React.useState(false);

    const [rotationDeg, setRotationDeg] = React.useState(0);

    const toggleZoom = (event: React.MouseEvent<HTMLImageElement | HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        setZoomed(!zoomed);

        if (zoomed) setMove({ x: 0, y: 0 });
        else setMove(move);
    };

    const toggleRotate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        if (rotationDeg === 360) setRotationDeg(90);
        else setRotationDeg(rotationDeg + 90);
    };

    return (
        <div>
            <div className="react_modal_images__modal_container" style={react_modal_images__modal_container}>
                <div className="react_modal_images__modal_content" style={react_modal_images__modal_content}>
                    {zoomed ? (
                        <Image
                            id="react-modal-image-img"
                            className="react_modal_images__large_img"
                            src={large}
                            handleDoubleClick={toggleZoom}
                            style={{
                                cursor: 'move',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                overflow: 'hidden',
                                maxWidth: '98%',
                                maxHeight: '98%',

                                transform: `translate3d(-50%, -50%, 0) translate3d(${move.x}px, ${move.y}px, 0) rotate(${rotationDeg}deg)`,
                                WebkitTransform: `translate3d(-50%, -50%, 0) translate3d(${move.x}px, ${move.y}px, 0) rotate(${rotationDeg}deg)`,
                                msTransform: `translate3d(-50%, -50%, 0) translate3d(${move.x}px, ${move.y}px, 0) rotate(${rotationDeg}deg)`,
                                backgroundColor: `${imageBackgroundColor}`
                            }}
                        />
                    ) : (
                        <Image
                            id="react-modal-image-img"
                            className="react_modal_images__medium_img"
                            src={medium ? medium : large}
                            handleDoubleClick={toggleZoom}
                            contextMenu={!medium}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                overflow: 'hidden',
                                maxWidth: '98%',
                                maxHeight: '98%',

                                transform: `translate3d(-50%, -50%, 0) rotate(${rotationDeg}deg)`,
                                WebkitTransform: `translate3d(-50%, -50%, 0) rotate(${rotationDeg}deg)`,
                                msTransform: `translate3d(-50%, -50%, 0) rotate(${rotationDeg}deg)`,
                                backgroundColor: `${imageBackgroundColor}`
                            }}
                        />
                    )}
                </div>

                <Header
                    image={large}
                    alt={alt}
                    zoomed={zoomed}
                    toggleZoom={toggleZoom}
                    toggleRotate={toggleRotate}
                    onClose={onClose}
                    enableDownload={!hideDownloadButton}
                    enableZoom={!hideZoomButton}
                    enableRotate={!hideRotateButton}
                />
            </div>
        </div>
    );
};
