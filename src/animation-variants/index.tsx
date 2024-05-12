// *** variants ***

export const rootVariant = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    enter: {
        opacity: 1,
        y: 0,
    },
}


export const sideLinkFill = {
    hidden: {
        scale: 0.5,
        opacity: 0,
    },
    enter: {
        scale: 1,
        opacity: 1,
    }
}

export const cardScrollFromLeft = {
    hidden: {
        x: '-100%',
        opacity: 0,
    },
    enter: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: '100%',
        opacity: 0,
    }
}
export const cardScrollFromRight = {
    hidden: {
        x: '100%',
        opacity: 0,
    },
    enter: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: '-100%',
        opacity: 0,
    }

}


// *** transitions ***
export const rootTransition = {
    type: 'ease-out',
    duration: '0.25'
}