import React, {useRef, useEffect} from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";


export default function Logo() {

    let solidLogoRef = useRef(null);
    let outlineLogoRef = useRef(null);
    let bgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        });
    }, []);

    return (
        <div className={"logo-container"} ref={bgRef}>
            <img className={"logo-solid "} ref={solidLogoRef} alt={"Logo JWH"} src={"./assets/ColorLogoNoBG.svg"} />


            <svg ref={outlineLogoRef} xmlns="http://www.w3.org/2000/svg" version="1.1" width="3168.5393258426966"
                 height="1365.1685393258429" viewBox="0 0 3168.5393258426966 1365.1685393258429">

                <g className={"svg-container"} transform="scale(8.426966292134832) translate(10, 10)">
                    <defs id="SvgjsDefs8178"></defs><g id="SvgjsG8179" featureKey="symbolFeature-0" transform="matrix(1.0274324269877226,0,0,1.0274324269877226,-1.8493784420655945,20.441372340940884)" fill="none"><title xmlns="http://www.w3.org/2000/svg">icons</title><g xmlns="http://www.w3.org/2000/svg" data-name="15. circle saturn"><path d="M88.47,49.8C88.19,65.87,78.32,80.58,63,86A38.48,38.48,0,0,1,17,30,38.85,38.85,0,0,1,57.82,12.12C75.7,15.82,88.16,31.77,88.47,49.8c0,1.93,3,1.93,3,0A42,42,0,0,0,64.41,10.91a41.48,41.48,0,0,0-50,60.19A41.89,41.89,0,0,0,57.29,90.62c19.79-3.48,33.84-21,34.19-40.83C91.5,47.87,88.5,47.87,88.47,49.8Z"></path><path d="M3.3,51.3H97.63a1.5,1.5,0,0,0,0-3H3.3a1.5,1.5,0,0,0,0,3h0Z"></path></g></g><g id="SvgjsG8180" featureKey="textGroupContainer" transform="matrix(1,0,0,1,355,0)" fill="none"><rect xmlns="http://www.w3.org/2000/svg" y="0" height="1" width="1" opacity="0"></rect><rect xmlns="http://www.w3.org/2000/svg" y="0" x="-235" width="3" height="142"></rect></g><g id="SvgjsG8181" featureKey="vMvB0T-0" transform="matrix(5.0735674440411795,0,0,5.0735674440411795,135.9705732945509,5.55861468987678)" fill="none"><path d="M3.96 20 c-0.6 0 -1.16 -0.12 -1.66 -0.36 c-0.82 -0.4 -0.86 -0.42 -1.4 -0.98 l-0.34 -0.34 l-0.16 -0.22 l1.94 -2.52 l0.3 0.3 c0.26 0.38 0.96 0.8 1.34 0.8 c0.6 0 0.9 -0.72 0.9 -2.18 l0 -8.48 l2.06 -0.02 l0 8.52 c0 2.4 -0.66 3.62 -2.24 4.1 c-0.28 0.08 -0.54 0.12 -0.78 0.12 c-0.56 0 -1.08 -0.2 -1.74 -0.66 l-0.06 -0.06 l-0.02 0 l0.42 -0.58 l0.02 0.02 c0.02 0 0.04 0.02 0.06 0.04 c0.46 0.34 0.9 0.5 1.34 0.5 c0.28 0 0.46 -0.02 0.56 -0.08 c1.2 -0.34 1.72 -1.34 1.72 -3.4 l0 -7.78 l-0.62 0 l0 7.76 c0 1.94 -0.54 2.9 -1.62 2.9 c-0.46 0 -0.98 -0.24 -1.56 -0.72 l-1.1 1.4 c0.58 0.72 1.6 1.18 2.64 1.18 c0.22 0 0.44 -0.02 0.68 -0.06 c2.1 -0.4 2.94 -1.84 2.94 -5.12 l0 -8.06 l0.72 0 l0 8.06 c0 3.68 -1 5.36 -3.54 5.84 c-0.1 0.06 -0.36 0.08 -0.8 0.08 z M14.12 19.3 l-0.36 0 l-0.16 -0.54 l-2.92 -9.38 l-0.8 -2.68 l0.62 0 l3.12 10.16 l0.32 1.08 l0.12 0 l0.38 -0.94 l-0.38 -1.16 l-3.02 -9.84 l-2.14 0 l4.32 14 l1.38 0 l1.82 -4.34 l0.38 -0.92 l0.52 -1.3 l-0.38 -0.9 l-0.54 1.28 l-0.38 0.92 z M11.68 6 l3.1 10.2 l2.2 -5.26 l3.96 9.08 l0.78 0 l-4.74 -10.9 l-2.12 4.88 l-2.42 -8 l-0.76 0 z M21.84 12.18 l1.68 -5.48 l2.04 0 l-0.18 0.58 l-2.04 6.68 l-1.16 3.78 l-4.92 -11.36 l-0.52 0 l-2.12 4.92 l0.32 1.06 l2.06 -4.76 l0.64 1.46 l4.48 10.38 l0.18 0.4 l4.22 -13.84 l-3.54 0 l-1.56 5.18 z M21.96 13.92 l-0.42 -1 l-2.84 -6.54 l-0.78 0 l4.16 9.6 l2.68 -8.74 l-0.76 0 z M28.080000000000002 6 l3.48 0 l0 4.62 l-0.74 0 l0 -3.88 l-2.02 0 l0 12.52 l2.02 0 l0 -3.86 l0.74 0 l0 4.6 l-3.48 0 l0 -14 z M29.46 7.32 l0.72 0 l0 3.92 l6.1 0 l0 -5.24 l0.7 0 l0 5.94 l-7.52 0 l0 -4.62 z M39.120000000000005 6.74 l-0.68 0 l0 5.26 l-0.72 0 l0 -6 l2.1 0 l0 14 l-0.7 0 l0 -13.26 z M36.28 14.76 l-6.1 0 l0 4.02 l-0.74 0 l0 -4.76 l7.54 0 l0 5.24 l0.74 0 l0 -5.9 l-8.28 0 l0 -0.7 l9 0 l0 7.34 l-2.16 0 l0 -5.24 z"></path></g>
                </g>
            </svg>
        </div>

    )
}