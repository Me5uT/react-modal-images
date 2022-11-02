import React from 'react';
import { ModalImage } from './ModalImage';

export interface IRModalImagesProps {
    className?: string;
    small: string;
    smallSrcSet?: string;
    medium?: string;
    large: string;
    alt?: string;
    hideDownloadButton?: boolean;
    hideZoomButton?: boolean;
    hideRotateButton?: boolean;
    imageBackgroundColor?: string;
}

export const RModalImages: React.FC<IRModalImagesProps> = ({ className, small, smallSrcSet, medium, large, alt, hideDownloadButton, hideZoomButton, hideRotateButton, imageBackgroundColor }) => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <img
                className={className}
                style={{
                    cursor: 'pointer',
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}
                onClick={toggleModal}
                src={small}
                srcSet={smallSrcSet}
                alt={alt}
            />
            {isModalOpen && (
                <ModalImage
                    medium={medium}
                    large={large}
                    alt={alt}
                    onClose={toggleModal}
                    hideDownloadButton={hideDownloadButton}
                    hideZoomButton={hideZoomButton}
                    hideRotateButton={hideRotateButton}
                    imageBackgroundColor={imageBackgroundColor}
                />
            )}
        </div>
    );
};
