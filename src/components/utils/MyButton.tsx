import React from 'react';
import { Button } from '@mui/material';

import EmailIcon from '../../resources/images/icons/email.png'

interface ButtonProps {
    text: string;
    link: string;
    size?: 'small' | 'medium' | 'large';
    style: {
        background?: string;
        color: string;
    };
    iconTicket?: boolean;
}

const MyButton:React.FC<ButtonProps> = (props) => {
    const defaultStyles = {
        background: '#8e8e8e',
            color: '#fff'
    }

    return(
        <Button
            href={`mailto:${props.link}`}
            variant='contained'
            size={ props.size ? props.size: 'large'}
            style={{     
                ...defaultStyles,           
                ...props.style
            }}
        >
            { props.iconTicket ?
                <img
                src={EmailIcon}
                className="iconImage"
                alt="icon_button"
            />
            : null}
            
            {props.text}
        </Button>
    )
}

export default MyButton;
