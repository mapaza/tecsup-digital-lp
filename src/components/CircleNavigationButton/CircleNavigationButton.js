import React from 'react';
import {Container, Item} from './styles';

import {motion} from 'framer-motion';

const CircleNavigationButton = () => {

    const icon = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    }

    const HanddleChange = () => {
        return (console.log("cambia de ubicacion"));
    }

    return (
        
            <Item onClick={HanddleChange}>
                <motion.svg
                    viewBox="-20 -20 700 650"
                >
                    <motion.path
                        d="M213.333,106.667c-58.88,0-106.667,47.787-106.667,106.667S154.453,320,213.333,320S320,272.213,320,213.333
				            S272.213,106.667,213.333,106.667z"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        fill="white"
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            
                        }}
                    />
                    <motion.path
                        d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667
                        S384,119.04,384,213.333S307.627,384,213.333,384z"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        fill="white"
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            
                        }}
                    />
                </motion.svg>
            </Item>
    
    );
};

export default CircleNavigationButton;