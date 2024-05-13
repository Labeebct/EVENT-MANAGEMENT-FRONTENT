import { useEffect } from "react";
import { useDispatch } from "react-redux";

const timoutLoading = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "loading", payload: true });
        const timer = setTimeout(() => {
            dispatch({ type: "loading", payload: false });
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
}

export default timoutLoading  