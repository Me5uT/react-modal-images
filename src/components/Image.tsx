import React from 'react';
import { SpinnerIcon } from './Icons';

interface IImageProps {
    id: string;
    className: string;
    src: string;
    style: React.CSSProperties;
    contextMenu?: boolean;
    handleDoubleClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

export const Image: React.FC<IImageProps> = ({ id, className, src, style, contextMenu, handleDoubleClick }) => {
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleOnLoad = () => {
        setLoading(true);
    };

    const handleOnContextMenu = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (!contextMenu) event.preventDefault();
    };

    return (
        <div>
            {!loading && <SpinnerIcon />}
            <img id={id} className={className} src={src} style={style} onLoad={handleOnLoad} onDoubleClick={handleDoubleClick} onContextMenu={handleOnContextMenu} />
        </div>
    );
};
