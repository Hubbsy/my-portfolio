import React, {useRef, useEffect} from "react";
import {gsap} from "gsap-trial";
import {DrawSVGPlugin} from "gsap-trial/DrawSVGPlugin";


export default function Logo({setFirstLoadStatus}) {

    let bgRef = useRef(null);
    let solidLogoRef = useRef(null);
    let outlineLogoRef1 = useRef(null);
    let gsapTimelineRef = useRef( gsap.timeline());
    let svgContainerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        gsapTimelineRef.current.to(bgRef.current, {
            duration: .5,
            opacity: 1
        })
            .fromTo(outlineLogoRef1.current, {drawSVG: "0"}, {drawSVG: "100%", duration: 15});
        gsap.fromTo(solidLogoRef.current, { opacity: 0 }, {
                opacity: 1,
                delay: 1,
                duration: 5,
                onComplete: args => {
                    setFirstLoadStatus(args);
                }
            });
    }, [setFirstLoadStatus]);

    return (
        <div className={"logo-container items-center justify-center"} ref={bgRef}>
            <img className={"logo-solid"} ref={solidLogoRef} alt={"Logo JWH"} src={"./assets/jwhLogo.svg"} />

            <svg className={"logo-svg items-center justify-center"} version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
                 preserveAspectRatio="xMidYMid meet">

                <g ref={svgContainerRef} className={"svg-container"} transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                   fill="none" stroke="none">
                    <path fill={"none"} stroke={"none"} className={'strokePath'} ref={outlineLogoRef1} d="M3842 3663 c-18 -9 -38 -25 -43 -36 -9 -16 -58 -392 -59 -448 0 -12
                        -19 -19 -82 -27 -139 -20 -126 -35 -110 135 10 109 11 156 3 183 -15 51 -75
                        116 -135 148 -46 24 -60 26 -151 25 -55 -1 -148 -2 -206 -2 -115 1 -152 -9
                        -206 -55 -55 -46 -63 -93 -73 -436 -5 -168 -10 -332 -10 -365 l-1 -60 -32 90
                        c-62 174 -88 198 -214 204 -82 3 -86 2 -115 -25 -16 -16 -44 -55 -62 -87 l-33
                        -59 -6 34 c-3 18 -13 98 -22 178 -9 80 -20 183 -25 228 -20 176 -62 258 -159
                        306 -95 47 -119 49 -413 37 -444 -19 -495 -28 -524 -96 -17 -41 -18 -124 -3
                        -158 6 -14 23 -31 37 -38 15 -8 48 -29 75 -46 56 -37 162 -73 217 -73 l37 0 7
                        -77 c23 -280 -22 -520 -114 -608 -19 -18 -34 -25 -39 -19 -5 5 -16 45 -25 89
                        -25 123 -54 177 -119 220 -66 44 -132 65 -205 65 -115 0 -176 -37 -187 -113
                        -16 -103 67 -324 156 -416 80 -82 344 -189 491 -198 83 -5 91 -4 150 25 107
                        52 186 144 230 266 l22 58 26 -69 c41 -105 77 -166 115 -190 75 -49 193 -55
                        273 -14 53 27 113 98 161 192 l39 77 40 -82 c46 -92 102 -154 170 -188 41 -20
                        62 -23 159 -23 108 0 113 1 155 30 l43 31 58 -47 c65 -52 116 -70 203 -72 74
                        -2 119 25 133 81 5 20 15 138 21 262 15 290 18 312 50 327 14 6 62 15 107 18
                        l81 7 -1 -253 c-2 -286 -2 -285 73 -353 57 -51 97 -66 179 -66 92 0 115 10
                        151 66 40 64 57 150 70 359 6 99 18 281 26 405 19 305 19 532 -1 570 -40 77
                        -287 131 -383 83z m230 -30 c32 -18 33 -21 36 -94 2 -40 -2 -157 -8 -259 -6
                        -102 -17 -304 -25 -450 -17 -307 -27 -386 -60 -455 -31 -65 -65 -85 -143 -85
                        -49 0 -66 4 -88 23 -39 34 -44 91 -32 376 10 233 9 245 -8 259 -28 21 -287 12
                        -331 -11 -18 -10 -33 -23 -33 -30 0 -7 -4 -48 -10 -92 -5 -44 -14 -172 -20
                        -284 -6 -113 -15 -213 -21 -222 -15 -29 -92 -53 -151 -46 -28 4 -58 13 -66 21
                        -12 12 -10 20 18 60 96 140 150 367 172 721 9 139 9 226 1 323 -11 146 -20
                        166 -82 209 l-33 22 27 7 c15 4 51 4 80 1 126 -13 140 -42 120 -239 -7 -73
                        -15 -167 -17 -208 l-3 -75 29 -3 c25 -3 326 35 334 42 1 2 14 104 28 227 13
                        123 27 230 29 236 2 7 19 22 37 34 28 17 44 20 110 16 51 -3 89 -12 110 -24z
                        m-1001 -39 c35 -18 42 -41 30 -95 -28 -127 -44 -304 -55 -614 l-11 -340 -42
                        -85 c-67 -138 -165 -213 -255 -196 -82 15 -163 131 -227 324 -17 52 -36 102
                        -41 113 -13 24 -48 25 -57 2 -4 -10 -30 -70 -58 -134 -99 -222 -186 -319 -273
                        -306 -53 9 -81 45 -131 172 l-44 110 18 85 c31 145 30 381 -2 582 l-5 36 93 8
                        c52 4 96 5 99 3 3 -2 15 -90 26 -195 36 -320 60 -434 94 -434 20 0 43 43 95
                        173 35 86 97 183 124 192 48 15 89 -46 141 -210 54 -170 71 -211 100 -246 24
                        -28 31 -32 47 -23 44 27 60 150 68 554 9 418 18 474 87 515 63 37 120 40 179
                        9z m1109 -1 l32 -27 -5 -270 c-5 -247 -28 -711 -42 -846 -12 -104 -41 -185
                        -81 -220 -35 -31 -40 -32 -108 -28 -57 2 -81 9 -121 33 l-50 30 84 5 c78 5 85
                        8 111 37 63 70 82 171 100 518 6 116 15 269 20 340 6 72 10 203 10 293 0 92 4
                        162 9 162 5 0 24 -12 41 -27z m-2392 -3 c-45 -24 -74 -61 -90 -111 -13 -46 -2
                        -160 37 -358 29 -147 31 -215 10 -337 -55 -312 -175 -474 -383 -514 -71 -14
                        -127 -6 -227 31 -104 39 -191 148 -244 306 -23 67 -28 171 -11 204 15 26 58
                        47 118 55 103 13 125 -11 161 -177 25 -116 35 -144 67 -186 36 -47 82 -59 136
                        -35 152 67 219 292 198 660 -7 119 -12 159 -27 184 l-18 32 -147 0 c-137 1
                        -149 3 -169 22 -46 46 -31 162 25 200 30 19 281 41 486 42 l115 1 -37 -19z
                        m1342 10 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16
                        -10z m-1115 -24 c27 -18 41 -97 24 -144 -14 -40 -46 -50 -194 -58 -61 -4 -113
                        -12 -117 -18 -14 -21 -8 115 6 142 23 43 62 74 113 88 56 16 136 11 168 -10z
                        m1241 -49 c17 -30 19 -53 18 -302 0 -292 -13 -422 -60 -608 -25 -103 -76 -224
                        -112 -267 l-20 -25 -7 47 c-11 72 0 234 24 338 37 167 53 362 49 625 -1 132 1
                        246 5 253 12 18 79 -21 103 -61z m-1135 20 c54 -41 78 -82 85 -144 6 -54 -9
                        -92 -42 -104 -20 -7 -22 -2 -36 85 -9 53 -26 115 -41 144 -14 29 -22 52 -17
                        52 4 0 28 -15 51 -33z m1384 -41 c26 -40 27 -44 21 -146 -3 -58 -8 -133 -12
                        -167 l-7 -62 -39 -6 c-22 -4 -42 -4 -45 -1 -4 4 2 96 11 206 10 109 16 208 13
                        219 -8 31 25 6 58 -43z m-1399 -152 l7 -62 -44 -6 c-24 -3 -75 -8 -112 -12
                        l-69 -6 6 -31 c28 -153 34 -456 12 -567 -14 -70 -15 -69 -45 35 -49 172 -72
                        282 -81 396 -6 68 -15 150 -19 181 l-8 57 56 6 c242 26 249 29 259 111 l6 49
                        13 -44 c7 -25 16 -73 19 -107z m1013 -229 c-7 -152 -30 -375 -44 -410 -2 -5
                        -4 62 -4 150 -1 167 9 323 31 485 l13 95 6 -70 c3 -38 2 -151 -2 -250z m-880
                        121 c1 -22 13 -134 27 -248 l26 -209 -28 -65 c-15 -35 -31 -61 -36 -56 -17 17
                        -36 143 -83 553 -5 43 -4 47 19 53 14 3 33 17 43 30 l18 24 7 -21 c3 -12 6
                        -40 7 -61z m-720 43 c14 -39 14 -36 -4 -42 -23 -9 -116 9 -170 34 l-50 23 35
                        6 c19 4 67 8 107 9 l71 1 11 -31z m1104 -311 c25 -13 70 -107 107 -226 32 -98
                        32 -104 19 -154 -8 -28 -19 -53 -26 -55 -15 -5 -64 100 -92 197 -33 113 -70
                        206 -93 236 l-21 26 44 -7 c24 -4 52 -11 62 -17z m1112 -49 c3 -4 3 -18 0 -31
                        -6 -24 -11 -25 -95 -31 -116 -7 -146 -23 -154 -79 -9 -65 -24 -256 -32 -413
                        -3 -77 -10 -147 -15 -156 -24 -46 -146 -51 -234 -9 l-50 24 65 6 c70 7 95 17
                        124 49 16 18 21 51 32 248 16 280 23 348 38 368 6 9 34 20 61 25 55 9 250 9
                        260 -1z m-1900 -220 l47 -166 -28 -69 c-56 -142 -138 -235 -243 -275 -70 -26
                        -151 -22 -261 14 -74 25 -75 25 -32 26 87 2 201 54 271 122 85 84 159 260 183
                        437 7 51 13 90 15 85 1 -4 22 -83 48 -174z m-616 99 c27 -17 59 -48 70 -69 22
                        -38 72 -244 63 -254 -3 -3 -20 -5 -39 -5 -59 0 -100 64 -128 199 -9 46 -23
                        102 -31 124 -8 22 -14 42 -14 44 0 9 29 -5 79 -39z m1245 -158 c34 -85 32
                        -111 -13 -197 -57 -105 -104 -169 -141 -188 -42 -22 -117 -34 -148 -25 -16 5
                        -20 9 -10 9 54 3 157 146 234 326 27 63 52 115 55 115 4 0 14 -18 23 -40z
                        m588 -271 l6 -85 -33 -22 c-42 -30 -88 -42 -152 -42 -56 0 -71 13 -27 24 40
                        10 127 104 160 172 16 33 32 56 35 50 4 -6 9 -50 11 -97z"/>
                </g>
            </svg>
        </div>

    )
}