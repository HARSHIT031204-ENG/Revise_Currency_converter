import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState({});
    const [loading, setLoading] = useState(true);

    const execute = useCallback(async () => {
        setLoading(true);
        try {
            const currdata = await fetch(url);
            const res = await currdata.json();
            setdata(res);
        } catch (error) {
            console.error("useFetch Error: ", error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        execute();
    }, [execute]);

    return { data, loading };
};

export default useFetch;
