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
                    d="M463.774,419.976l-138.271,-338.093l0,-83.901l138.543,338.758l-0,83.127l-0.272,0.109Z"
                />
                <g className="transition-transform duration-150 ease-out translate-x-[calc(var(--collapsed)*35.4cqi)]">
                    <path d="M205.619,416.434l120.593,-332.27l-0,-82.456l-120.831,332.923l0,81.696l0.238,0.107Z"/>
                    <path d="M504.229,419.646l61.429,-340.897l-9.835,-81.573l-61.55,341.567l9.745,80.822l0.211,0.081Z"/>
                </g>

                <g className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*35.4cqi)]">
                    <path d="M555.191,-5.868l31.476,349.542l32.955,75.812l-31.537,-350.229l-32.652,-75.113l-0.242,-0.012Z"/>
                    <path d="M619.167,418.606l63.884,-341.854l-13.949,-79.612l-64.011,342.526l13.821,78.878l0.255,0.062Z"/>
                </g>

                <path
                    className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*70.75cqi)]"
                    aria-label="N"
                    d="M0.402,417.142l99.381,-334.256l0,-82.949l-99.576,334.913l-0,82.185l0.195,0.107Z"
                />

                <path
                    className="transition-transform duration-150 ease-out"
                    aria-label="M"
                    d="M205.492,419.622l-106.099,-334.257l0,-82.948l106.307,334.913l0,82.184l-0.208,0.108Z"
                />
            </g>
        </svg>
    );
}
