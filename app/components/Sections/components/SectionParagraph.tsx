import React from "react"

export const SectionParagraph = ({ children }: { children: string[] }) => {
    return (
        <p>
            {children.map((child, index) => (
                index % 2 === 0 ? (
                    <React.Fragment key={index}>{child}</React.Fragment>
                ) : (
                    <span key={index} className="font-bold">{child}</span>
                )
                ))}
        </p>
    )
}
