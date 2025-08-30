type Props = {
    collapsible?: boolean;
    className?: string;
};

export default function Logo({collapsible = false, className}: Props) {
    return (
        <svg
            className={[
                // container styles
                "aspect-[1872/419]",
                "[container-type:inline-size]",
                "fill-current",
                "[view-transition-name:logo]",
                // outer scale (was outerScale in stylex)
                "[scale:calc(0.75+var(--collapsed)*0.25)]",
                "origin-center",
                "transition-transform",
                // collapsible variable
                collapsible ? "[--collapsed:1] hover:[--collapsed:0]" : "[--collapsed:0]",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            viewBox="0 0 1872 419"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="transition-transform duration-150 ease-out">
                <path
                    className="transition-transform duration-150 ease-out translate-x-[calc(var(--collapsed)*79cqi)]"
                    aria-label="N"
                />
                <g className="transition-transform duration-150 ease-out translate-x-[calc(var(--collapsed)*35.4cqi)]">
                    <path/>
                    <path/>
                </g>

                <g className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*35.4cqi)]">
                    <path/>
                    <path/>
                </g>

                <path
                    className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*70.75cqi)]"
                    aria-label="N"
                />

                <path
                    className="transition-transform duration-150 ease-out"
                    aria-label="M"
                />
            </g>
        </svg>
    );
}
