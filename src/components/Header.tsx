import React from 'react';
import { DownloadService } from '../services';
import { ZoomInIcon, ZoomOutIcon, DownloadIcon, CloseIcon, RotateIcon } from './Icons';
import { react_modal_images__caption, react_modal_images__header, react_modal_images__icon_menu, react_modal_images__icon_menuA } from './styles';

interface IHeaderProps {
    image: string;
    alt?: string;
    zoomed: boolean;
    toggleZoom: (event: React.MouseEvent<HTMLImageElement | HTMLAnchorElement, MouseEvent>) => void;
    toggleRotate: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onClose: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    enableDownload: boolean;
    enableZoom: boolean;
    enableRotate: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ image, alt, zoomed, toggleZoom, toggleRotate, onClose, enableDownload, enableZoom, enableRotate }) => {
    return (
        <div className="react_modal_images__header" style={react_modal_images__header}>
            <span className="react_modal_images__icon_menu" style={react_modal_images__icon_menu}>
                {enableDownload && (
                    <a href={image} download onClick={DownloadService.crossOriginDownload(image)} style={react_modal_images__icon_menuA}>
                        <DownloadIcon />
                    </a>
                )}
                {enableZoom && (
                    <a onClick={toggleZoom} style={react_modal_images__icon_menuA}>
                        {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
                    </a>
                )}
                {enableRotate && (
                    <a onClick={toggleRotate} style={react_modal_images__icon_menuA}>
                        <RotateIcon />
                    </a>
                )}
                <a onClick={onClose} style={react_modal_images__icon_menuA}>
                    <CloseIcon />
                </a>
            </span>
            {alt && (
                <span className="react_modal_images__caption" style={react_modal_images__caption}>
                    {alt}
                </span>
            )}
        </div>
    );
};
