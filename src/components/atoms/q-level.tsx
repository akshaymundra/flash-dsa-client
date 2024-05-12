import clsx from "clsx"

export default function QLevel({
    level = 'medium',
    className
}: {
    level: 'easy' | 'medium' | 'hard',
    className?: string
}) {

    const classes = clsx(
        'text-xs text-white sm:py-1 px-1 rounded-full flex justify-center items-center capitalize',
        {
            'bg-red-500': level === 'hard',
            'bg-yellow-500': level === 'medium',
            'bg-green-500': level === 'easy',
        },
        className
    )

    return (
        <div
            className={classes}
        >{level}
        </div>
    )
}