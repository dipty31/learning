import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk,arg){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback(() => {
        setIsLoading(true);
        dispatch(thunk(arg))
        .unwrap()
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    }, [dispatch, thunk, arg]);

    return [runThunk, isLoading, error];
};