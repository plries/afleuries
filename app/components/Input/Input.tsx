import { InputPropTypes } from "./types"

export const Input = ({
    label,
    placeholder,
    description,
    htmlFor,
}: InputPropTypes) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div>
                <label
                    htmlFor={htmlFor}
                    className="text-base md:text-lg lg:text-xl
                ">
                    {label}
                </label>

                {description && (
                    <p className="text-sm md:text-base mt-1">
                        {description[0]}
                        <span className="font-medium">
                            {description[1]}
                        </span>
                        {description[2]}
                    </p>
                )}
            </div>

            <input
                type="text"
                placeholder={placeholder}
                required
                className="px-4 py-3 rounded-lg border-2 boreder-tan-20 placeholder:text-[#27272780] focus:outline-blue-10 bg-tan-10"
            >
            </input>
        </div>
    )
}