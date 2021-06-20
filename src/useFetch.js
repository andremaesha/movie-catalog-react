import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const loadData = async (url, ABORTED) => {
        try {
            const res = await fetch(url, { signal: ABORTED });
            if (res.status !== 200) {
                throw Error("could not fetch the data for that resource");
            } else {
                const data = await res.json();

                setData(data);
                setIsPending(false);
                setErrorMessage(null);
            }
        } catch (e) {
            if (e.name === "AbortError") {
                console.log("fetch aborted");
            } else {
                setIsPending(false);
                setErrorMessage(e.message);
            }
        }
    };

    useEffect(() => {
        const abortCont = new AbortController();

        loadData(url, abortCont.signal);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, errorMessage };
};

export default useFetch;
