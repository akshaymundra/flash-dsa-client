import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "../ui/checkbox";


interface CheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    value: string,
    handleChange: (e: CheckedState) => void
}

const CheckboxWithLabel: React.FC<CheckProps> = ({
    value,
    label,
    id,
    handleChange,
}) => {

    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                id={`${id ? id : value}`}
                onCheckedChange={handleChange}
            />
            <label
                htmlFor={`${id ? id : value}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    )
}

export default CheckboxWithLabel;