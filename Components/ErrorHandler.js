import React from 'react';
import { Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { clearError } from '../store/actions/errorsActions'

export function ErrorHandler(props) {
    const error = useSelector(store => store.errors)
    const dispatch = useDispatch()

    const handleClose = () => dispatch(clearError())

    if (error.text) {
        Alert.alert(
            'Erorr', error.text,
            [
                {
                    text: 'Ok',
                    onPress: handleClose
                }
            ],
            { onDismiss: handleClose }
        )
    }

    return props.children
}
