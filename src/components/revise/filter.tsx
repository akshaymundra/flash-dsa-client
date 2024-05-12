import { useNavigate } from "react-router-dom"
import CheckboxWithLabel from "../atoms/checkbox-w-label";
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Button } from "../ui/button";


const topics = [
    { label: 'All', value: 'all' },
    { label: 'Array', value: 'array' },
    { label: 'BS', value: 'bs' },
    { label: 'Recursion', value: 'recursion' },
    { label: 'Dp', value: 'dp' },
    { label: 'BST', value: 'bst' },
    { label: 'String', value: 'string' },
    { label: 'Greedy', value: 'greedy' },
    { label: 'Sliding Window', value: 'sliding_window' },
]
const levels = [
    { label: 'All', value: 'all' },
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'med' },
    { label: 'Hard', value: 'hard' },
]


const ReviseFilter = () => {

    const navigate = useNavigate();
    const [topic, setTopic] = useState<string[]>([]);
    const [level, setLevel] = useState<string[]>([]);

    const handleTopicsChange = (checked: CheckedState, value: string) => {
        if (checked) {
            setTopic(prev => [...prev, value])
        } else {
            setTopic(prev => prev.filter(topic => topic !== value))
        }
    }

    const handleLevelChange = (checked: CheckedState, value: string) => {
        if (checked) {
            setLevel(prev => [...prev, value])
        } else {
            setLevel(prev => prev.filter(lvl => lvl !== value))
        }
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let query_topics = ['all'];
        let query_levels = ['all'];

        if (topic.length) {
            query_topics = topic;
        }
        if (level.length) {
            query_levels = level;
        }

        const query_obj = {
            topic: query_topics.join(','),
            level: query_levels.join(',')
        }

        navigate(`/revise/questions?${new URLSearchParams(query_obj).toString()}`)

    }



    return (
        <div
            className="flex flex-1 justify-center items-center min-h-full"
        >

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-3 border rounded-lg shadow-md"
            >
                <legend className="text-2xl font-semibold ">Filter</legend>

                <div className="flex flex-col gap-4">
                    <p>Select Topic</p>
                    <div className="grid grid-cols-4 gap-4">
                        {topics?.map((topic, i) => (
                            <CheckboxWithLabel
                                label={topic.label}
                                value={topic.value}
                                handleChange={(val) => handleTopicsChange(val, topic.value)}
                                key={topic.value}
                                id={`topic-${topic.value}`}
                            />
                        ))}
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-4">
                    <p>Select Level</p>
                    <div className="grid grid-cols-4 gap-4">
                        {levels?.map((level, i) => (
                            <CheckboxWithLabel
                                label={level.label}
                                value={level.value}
                                handleChange={(val) => handleLevelChange(val, level.value)}
                                key={level.value}
                                id={`level-${level.value}`}
                            />
                        ))}
                    </div>
                </div>

                <hr />

                <div>
                    <Button
                        type="submit"
                    >
                        Start Revision
                    </Button>
                </div>

            </form>

        </div>
    )
}

export default ReviseFilter