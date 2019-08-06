import React from 'react'

import Modal from '../../UI/Modal/Modal'

const withErroHandler = ( WrappedComponent, axios ) => {
    return (props) => {
        return (
            <React.Fragment>
                <Modal purchasing>
                    Something didn't work!
                </Modal>
                <WrappedComponent {...props} />
            </React.Fragment>
        )
    }
}

export default withErroHandler
