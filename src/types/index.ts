export type DataRowProps = {
    question: string;
    name: string;
    topic: string;
    url?: string;
    level?: 'easy' | 'medium' | 'hard';
    approach?: string;
    pseudo_code?: string;
    stared?: boolean;
    priority?: number;
    status?: 'done' | 'revision' | 'learn';
}
