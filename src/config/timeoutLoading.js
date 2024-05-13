import { useEffect } from "react";
import { useDispatch } from "react-redux";

const timoutLoading = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "loading", payload: true });
        const timer = setTimeout(() => {
            dispatch({ type: "loading", payload: false });
        }, 2000);

        return () => clearTimeout(timer);
    }, [dispatch]);
}

export default timoutLoading