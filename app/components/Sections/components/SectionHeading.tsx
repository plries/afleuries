export const SectionHeading = ({ children }: { children: string[] }) => {
    return (
        <h3 className="font-instrument font-normal text-4xl md:text-5xl">
            <span className="italic">
                {children[0]}
            </span>
                {children[1]}
        </h3>
    )
}
