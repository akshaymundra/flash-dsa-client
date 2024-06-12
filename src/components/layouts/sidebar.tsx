import { FileStack, Home, Moon, Sun } from 'lucide-react'
import Navlink from './navlink'
import { Button } from '../ui/button'
import { useTheme } from './theme-provider'





const Sidebar = () => {

    const { setTheme, theme } = useTheme();

    const routemap = [
        {
            href: '/',
            label: 'Home',
            tooltip: 'Home',
            icon: <Home className={`${theme === "dark" ? 'text-foreground' : 'text-background'}`} />
        },
        {
            href: '/revise',
            label: 'Revise',
            tooltip: 'Revise',
            icon: <FileStack className={`${theme === "dark" ? 'text-foreground' : 'text-background'}`} />
        }
    ]

    return (
        <div
            className="fixed inset-y left-0 z-10 w-[57px] bg-foreground dark:bg-background dark:border-r h-full flex flex-col justify-center items-center"
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
                <Button
                    size={"icon"}
                    onClick={() => setTheme(theme == "light" ? "dark" : "light")}
                    variant={"link"}
                >
                    {theme == "light" ?
                        <Moon className={`text-background`} />
                        :
                        <Sun className='text-foreground' />
                    }
                </Button>
            </div>
        </div>
    )
}

export default Sidebar