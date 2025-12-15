type Props = {
    collapsible?: boolean;
    className?: string;
};

export default function Logo({className}: Props) {
    return (
        <svg
            className={[
                // container styles
                "aspect-[683/418]",
                "fill-current",
                "[view-transition-name:logo]",
                "origin-center",
                "transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                "hover:scale-[1.06]",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            width="100%"
            height="100%"
            viewBox="0 0 683 418"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            //style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2}}
            aria-hidden="true"
            focusable="false"
        >
            <g className="transition-transform duration-150 ease-out">
                <path
                    className="transition-transform duration-150 ease-out translate-x-[calc(var(--collapsed)*30cqi)]"
                    d="M463.774,419.976l-138.271,-338.093l0,-83.901l138.543,338.758l-0,83.127l-0.272,0.109Z"
                    style={{fillRule: "nonzero"}}
                />
                <path
                    className="transition-transform duration-150 ease-out translate-x-[calc(var(--collapsed)*15cqi)]"
                    d="M205.619,416.434l120.593,-332.27l-0,-82.456l-120.831,332.923l0,81.696l0.238,0.107Z"
                    style={{fillRule: "nonzero"}}
                />
                <path
                    className="transition-transform duration-150 ease-out translate-x-[calc(var(--collapsed)*25cqi)]"
                    d="M504.229,419.646l61.429,-340.897l-9.835,-81.573l-61.55,341.567l9.745,80.822l0.211,0.081Z"
                    style={{fillRule: "nonzero"}}
                />
                <path
                    className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*20cqi)]"
                    d="M555.191,-5.868l31.476,349.542l32.955,75.812l-31.537,-350.229l-32.652,-75.113l-0.242,-0.012Z"
                    style={{fillRule: "nonzero"}}
                />
                <path
                    className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*25cqi)]"
                    d="M619.167,418.606l63.884,-341.854l-13.949,-79.612l-64.011,342.526l13.821,78.878l0.255,0.062Z"
                    style={{fillRule: "nonzero"}}
                />
                <path
                    className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*35cqi)]"
                    d="M0.402,417.142l99.381,-334.256l0,-82.949l-99.576,334.913l-0,82.185l0.195,0.107Z"
                    style={{fillRule: "nonzero"}}
                />
                <path
                    className="transition-transform duration-150 ease-out -translate-x-[calc(var(--collapsed)*15cqi)]"
                    d="M205.492,419.622l-106.099,-334.257l0,-82.948l106.307,334.913l0,82.184l-0.208,0.108Z"
                    style={{fillRule: "nonzero"}}
                />
                <path
                    className="transition-transform duration-150 ease-out translate-y-[calc(var(--collapsed)*10cqi)]"
                    d="M414.5,256.007l-414.5,0.153l18.21,-31.007l414.499,-0.153l-18.209,31.007Z"
                    style={{fillRule: "nonzero"}}
                />
            </g>
        </svg>
    );
}
