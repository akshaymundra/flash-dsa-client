import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:5000/api/";

interface FetchProps {
    url: string;
    method?: 'GET' | 'POST';
    headers?: any;
    body?: any;
}

const useFetch = ({
    url,
    method = "GET",
    headers = {
        'Content-Type': 'application/json',
    },
    body = null,
}: FetchProps) => {

    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState<any>(null);
    const [error, setError] = useState<any>(null);


    const apiUrl = baseUrl + url;

    useEffect(() => {
        ; (async () => {
            setLoading(true);
            try {
                const response = await axios({
                    url: apiUrl,
                    method,
                    headers,
                    data: body,
                });

                if (!response.data.success) {
                    throw new Error(response.data.message);
                }

                setRes(response.data);
            } catch (error: any) {
                const message = error.response?.data.message || error.message;
                setError(message);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);


    return { loading, res, error };
}

export default useFetch;