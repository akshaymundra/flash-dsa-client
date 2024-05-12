import Navlink from './navlink'


const routemap = [
    {
        href: '/',
        label: 'Home',
        tooltip: 'Home',
        icon: '🏠'
    },
    {
        href: '/revise',
        label: 'Revise',
        tooltip: 'Revise',
        icon: '📚'
    }
]


const Sidebar = () => {
    return (
        <div
            className="fixed inset-y left-0 z-10 w-[57px] bg-foreground h-full flex flex-col justify-center items-center"
        >
            <div className='flex flex-col gap-4'>
                {routemap.map((route, index) => (
                    <Navlink
                        key={index}
                        href={route.href}
                        label={route.label}
                        tooltip={route.tooltip}
                        icon={route.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar