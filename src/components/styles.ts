import { CSSProperties } from 'react';

export const react_modal_images__modal_container: CSSProperties = {
    position: 'fixed',
    zIndex: '5000',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    touchAction: 'none',
    overflow: 'hidden'
};

export const react_modal_images__modal_content: CSSProperties = {
    position: 'relative',
    height: '100%',
    width: '100%'
};

export const react_modal_images__modal_contentSvg: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    WebkitTransform: 'translate3d(-50%, -50%, 0)',
    msTransform: 'translate3d(-50%, -50%, 0)',
    overflow: 'hidden'
};

export const react_modal_images__icon_menuA: CSSProperties = {
    display: 'inline-block',
    fontSize: '40px',
    cursor: 'pointer',
    lineHeight: '40px',
    boxSizing: 'border-box',
    border: 'none',
    padding: '0px 5px 0px 5px',
    marginLeft: '10px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)'
};

export const react_modal_images__icon_menu: CSSProperties = {
    display: 'inline-block',
    float: 'right'
};

export const react_modal_images__caption: CSSProperties = {
    display: 'inline-block',
    color: 'white',
    fontSize: '120%',
    padding: '10px',
    margin: '0'
};

export const react_modal_images__header: CSSProperties = {
    position: 'absolute',
    top: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    overflow: 'hidden'
};
