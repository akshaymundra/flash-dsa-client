import CardScroller from "@/components/q-view/card-scroller";
import QView from "@/components/q-view/q-view";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

const ReviseQuestions = () => {

    const params = new URLSearchParams(window.location.search);
    const topics = params.get('topic')?.split(',');
    const levels = params.get('level')?.split(',');

    const { res, error } = useFetch({
        url: 'revise',
        method: 'POST',
        body: {
            topics,
            levels
        }
    });

    const data = res?.data;

    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            {data &&
                <> <CardScroller data={data} /> </>
            }
        </>
    );
}

export default ReviseQuestions;