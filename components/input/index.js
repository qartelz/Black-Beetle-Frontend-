import React, { useEffect } from "react";

const focusedTypes = [
    "date", "time"
]

export default function Input({ multiline, label, labelProps, inputProps, type = "text", value, defaultValue, variant = "outlined", ...layoutProps }) {

    const labelRef = React.useRef(null)
    const inputRef = React.useRef(null)

    const outlinedInput = `border-2 px-5 border-primary py-2 rounded-lg ${layoutProps.disabled && "border-opacity-50"}`
    const solidInput = `rounded-lg ${layoutProps.disabled && "bg-opacity-50"}`

    const solidLayout = `bg-slate-600 bg-opacity-20 px-3 rounded-lg ${layoutProps.disabled && "bg-opacity-50"}`

    const handleOnInputFocused = (e) => {
        if (!labelRef.current || layoutProps?.disabled) return e.target.blur()
        adjustLabelMargin()
        inputProps?.onFocus && inputProps.onFocus(e)
    }

    const handleOnInputBlurred = (e) => {
        if (labelRef.current && e.target.value === "" && !focusedTypes.includes(type))
            labelRef.current.style.marginTop = `0px`

        inputProps?.onBlur && inputProps.onBlur(e)
    }

    const adjustLabelMargin = () => {
        if (variant === "solid") return
        if (!labelRef.current || !inputRef.current) return
        const inputHeight = inputRef.current.offsetHeight
        const labelHeight = labelRef.current.offsetHeight
        const mTop = inputHeight - (labelHeight / 2) + 6
        labelRef.current.style.marginTop = `-${mTop}px`
    }

    useEffect(() => {
        if (focusedTypes.includes(type) || defaultValue) adjustLabelMargin()
    }, [])

    return (
        <div
            {...layoutProps}
            className={`${layoutProps?.className} ${variant === "solid" && solidLayout} ${variant === "outlined" ? "flex items-center" : ""} trans`}
            style={{ height: multiline ? "auto" : undefined }}
        >
            <span
                onClick={() => { !labelProps?.disabled && inputRef.current?.focus() }}
                ref={labelRef}
                {...labelProps}
                className={`text-sm ${variant === "solid" ? "text-secondary" : "text-tint"} font-semibold ${labelProps} ${variant === "outlined" && "absolute"} ${variant === "solid" ? "bg-none" : "bg-primary"} ${variant === "outlined" && "mx-3 px-2"} ${layoutProps.disabled && "text-opacity-70"}`}
            >
                {label}
            </span>
            {multiline ? (
                <textarea
                    value={value ? value : undefined}
                    defaultValue={defaultValue ? defaultValue : undefined}
                    ref={inputRef}
                    onBlur={handleOnInputBlurred}
                    onFocus={handleOnInputFocused}
                    {...inputProps}
                    className={`${inputProps?.className} pb-2 w-full bg-transparent outline-none ${variant === "solid" ? solidInput : outlinedInput}`} disabled={labelProps?.disabled}
                />
            ) : (
                <input
                    value={value ? value : undefined}
                    defaultValue={defaultValue ? defaultValue : undefined}
                    ref={inputRef}
                    onBlur={handleOnInputBlurred}
                    onFocus={handleOnInputFocused}
                    {...inputProps}
                    type={type}
                    className={`${inputProps?.className} pb-2 w-full bg-transparent outline-none ${variant === "solid" ? solidInput : outlinedInput}`} disabled={labelProps?.disabled}
                />
            )}
        </div>
    );
}