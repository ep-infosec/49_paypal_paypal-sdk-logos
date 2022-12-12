/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { SVGLogo, getLogoColors, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import { type LogoColorMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#ffffff",
  },
  [LOGO_COLOR.BLUE]: {
    primary: "#003087",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#ffffff",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#333030",
  },
};

export function ItauLogo({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary } = getLogoColors(LOGO.SOFORT, LOGO_COLORS, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.ITAU}
      logoColor={logoColor}
      render={() => {
        return (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 181 33"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              fill="#FF7900"
              d="M136.5,5.6L153,1.8c2.2-0.5,4.4,0.8,5,2.9l4,15.2c0.5,2.1-0.8,4.2-3,4.7l-16.5,3.8c-2.2,0.5-4.4-0.8-5-2.9
                            l-4-15.2C132.8,8.3,134.2,6.1,136.5,5.6z"
            />
            <path
              fill="#004995"
              d="M144.5,6.1h10.1c1.5,0,2.7,1.2,2.7,2.5v9.7c0,1.3-1.2,2.5-2.7,2.5h-10.1c-1.5,0-2.7-1.2-2.7-2.5V8.6
                            C141.9,7.2,143.1,6.1,144.5,6.1z"
            />
            <path
              fill={primary}
              d="M108.2,19.9c-0.1-1-0.5-1.9-1.1-2.8c-1.1-1.3-2.8-2-4.6-1.9c-1.6,0.1-3.9,0.3-5.3,1.3L98,19
                            c0,0,1.3-1.1,3.9-1.1c1.1,0,2.1,0.6,2.3,1.3v0.2c-1.4,0-5.7,0.3-7.4,2.8c-2,3,1.1,5.8,3.1,5.8c1.6,0,3.2,0.1,4.6-1.3l0.2,1.1h3.4
                            v-7.3c0-0.1,0-0.2,0-0.2L108.2,19.9L108.2,19.9z M100.4,24.1c0.2-1.8,2.7-1.9,3.9-1.9v2.1C103,26,100.2,25.8,100.4,24.1z"
            />
            <path
              fill={primary}
              d="M95.2,16.1c0,0-7.6-2-10,3c-1.3,2.8-0.7,5.7,0.8,7.3c0.7,0.7,1.6,1.2,2.6,1.5c2,0.6,5.4,0.4,6.5-0.2l-0.4-2.8
                            c0,0-3.4,1.1-5.2-0.6c-2.2-2.2-0.2-5.7,2.1-5.7c2.3,0,3.1,0.4,3.1,0.4L95.2,16.1z"
            />
            <rect fill={primary} x="42.3" y="11.7" width="3.9" height="16.3" />
            <path
              fill={primary}
              d="M55.7,18.7v-3h-2.1v-4.1h-3.9v4.1h-2v3h2v6.2c0,1.7,1.3,3,3,3l0,0h3.1v-3h-1.1c-0.7,0-1.1-0.5-1.1-1.1l0,0v-5.2
                            L55.7,18.7L55.7,18.7z"
            />
            <path
              fill={primary}
              d="M69,19.9c-0.1-1-0.5-1.9-1.1-2.8c-1.2-1.3-2.8-2-4.6-1.9c-1.6,0.1-3.9,0.3-5.3,1.3l0.8,2.5c0,0,1.3-1.1,3.9-1.1
                            c1.1,0,2.1,0.6,2.3,1.3v0.2c-1.4,0-5.8,0.3-7.4,2.8c-2,3,1.1,5.8,3.1,5.8c1.6,0,3.2,0.1,4.6-1.3l0.2,1.1H69V19.9L69,19.9z
                            M61.1,24.1c0.2-1.8,2.7-1.9,3.9-1.9v2.1C63.8,26,60.9,25.8,61.1,24.1L61.1,24.1z"
            />
            <path
              fill={primary}
              d="M79.1,15.7v7.2c0,0.3-0.1,0.5-0.2,0.7c-0.5,0.7-1.1,1.3-2,1.3c-0.9,0.1-1.8-0.5-2.1-1.3
                            c-0.1-0.2-0.1-0.4-0.1-0.6v-7.3h-3.9V24c0,2.1,1.8,4.1,3.9,4.1c3.9,0.2,4.6-1.8,4.6-1.8v-0.1l0.4,1.5H83V15.6L79.1,15.7z"
            />
            <rect fill="#FFF100" x="143.1" y="13.5" width="1.2" height="5" />
            <path
              fill="#FFF100"
              d="M147.3,15.7v-0.9h-0.7v-1.3h-1.2v1.3h-0.6v0.9h0.6v1.9c0,0.5,0.4,0.9,1,0.9h1v-0.9H147c-0.2,0-0.4-0.2-0.4-0.3
                            l0,0v-1.6C146.6,15.7,147.3,15.7,147.3,15.7z"
            />
            <path
              fill="#FFF100"
              d="M151.6,16c0-0.3-0.2-0.6-0.4-0.8c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.7,0.4l0.3,0.8c0.4-0.3,0.8-0.3,1.2-0.3
                            c0.3,0,0.6,0.2,0.7,0.3v0.1c-0.4,0-1.9,0.1-2.3,0.8c-0.4,0.6-0.2,1.3,0.4,1.6c0.2,0.1,0.4,0.2,0.5,0.2c0.5,0.1,1.1-0.1,1.5-0.3
                            l0.1,0.3h1.1L151.6,16L151.6,16z M149.1,17.3c0.1-0.6,0.9-0.6,1.2-0.6v0.7C149.9,17.9,149,17.8,149.1,17.3L149.1,17.3z"
            />
            <path
              fill="#FFF100"
              d="M154.8,14.8V17c-0.1,0.3-0.4,0.4-0.7,0.5c-0.4,0-0.6-0.2-0.7-0.5v-2.3h-1.2v2.5c0,0.7,0.5,1.2,1.2,1.3
                            c1.2,0.1,1.5-0.5,1.5-0.5l0,0l0.2,0.4h1.1v-3.8L154.8,14.8L154.8,14.8z"
            />
            <path
              fill={primary}
              d="M113.5,17.9l-0.2-2.1H110V28h3.9v-6.8c0.4-0.8,1.2-2.1,3.4-2.1v-3.6C115.9,15.4,114.4,16.3,113.5,17.9z"
            />
            <path
              fill={primary}
              d="M128.1,10.4v6.4c-0.7-0.6-1.7-1.4-3.7-1.4c-3.6,0-6.1,3.2-6.1,6.8c-0.1,3.2,2.6,5.9,5.9,6
                            c1.5-0.1,3-0.6,4.2-1.4L129,28h3.1V10.5L128.1,10.4L128.1,10.4z M125.4,25.1c-2.3,0-2.8-1.9-2.8-3.4s0.7-3.2,2.8-3.2
                            c1.3,0,2.1,0.9,2.7,1.8v3C127.5,24.1,126.6,25.1,125.4,25.1z"
            />
            <polygon
              fill="#FFF100"
              points="154.6,14.4 153.5,14.4 154.4,13.5 155.7,13.5 "
            />
            <line fill="none" x1="35.6" y1="8.3" x2="35.6" y2="28.2" />
            <rect fill="#D8D8D8" x="22.4" y="32.2" width="0.1" height="0.1" />
            <path
              fill={primary}
              opacity="0.7"
              enable-background="new    "
              d="M25.3,12.9c0.2-1.6,0-2.6-0.9-3.7s-2.6-1.5-4.6-1.5h-6.1c-0.4,0-0.8,0.3-0.9,0.8l-2.5,16.8
                            c-0.1,0.4,0.1,0.7,0.5,0.7h3.8l-0.3,1.7c-0.1,0.2,0.2,0.5,0.4,0.5H18c0.4,0,0.6-0.3,0.7-0.7l0.1-0.2l0.6-3.9l0.1-0.2
                            c0.1-0.5,0.4-0.7,0.7-0.7h0.5c3.1,0,5.4-1.4,6.1-5.1c0.3-1.6,0.1-2.9-0.6-3.8C25.9,13.4,25.6,13.1,25.3,12.9L25.3,12.9"
            />
            <path
              fill={primary}
              opacity="0.7"
              enable-background="new    "
              d="M25.3,12.9c0.2-1.6,0-2.6-0.9-3.7s-2.6-1.5-4.6-1.5h-6.1c-0.4,0-0.8,0.3-0.9,0.8l-2.5,16.8
                            c-0.1,0.4,0.1,0.7,0.5,0.7h3.8l0.9-6.3l-0.1,0.2c0.1-0.5,0.4-0.8,0.9-0.8h1.8c3.5,0,6.2-1.5,7-5.8C25.2,13.2,25.2,13,25.3,12.9"
            />
            <path
              fill={primary}
              d="M16.6,12.9c0-0.2,0.1-0.5,0.4-0.6c0.1,0,0.2-0.1,0.3-0.1h4.8c0.6,0,1.1,0.1,1.6,0.1c0.1,0,0.2,0,0.4,0.1
                            c0.1,0.1,0.2,0.1,0.4,0.2c0.1,0,0.1,0,0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.2c0.2-1.6,0-2.6-0.9-3.6c-0.9-1.1-2.6-1.6-4.6-1.6h-6.1
                            c-0.4,0-0.8,0.4-0.9,0.8l-2.5,16.8c-0.1,0.4,0.1,0.7,0.5,0.7h3.8l0.9-6.3L16.6,12.9z"
            />
            <g
              transform="matrix(0.379173, 0, 0, 0.397443, 9.686229, 4.778377)"
              opacity="0.2"
            >
              <path
                fill="#231F20"
                d="M41.1,20.5c0.9,0.5,1.7,1.1,2.3,1.8c1,1.1,1.6,2.5,1.9,4.1c0.3-3.2-0.2-5.8-1.9-7.8c-0.6-0.7-1.3-1.2-2.1-1.7
                                C41.3,18,41.3,19.2,41.1,20.5z"
              />
              <path
                fill="#231F20"
                d="M2.2,49L8.5,9.4c0.1-1.1,1.1-1.9,2.2-1.9h16c5.5,0,9.8,1.2,12.2,3.9c1.2,1.4,1.9,3,2.2,4.8
                                c0.4-3.6-0.2-6.1-2.2-8.4c-2.4-2.8-6.7-4-12.2-4h-16c-1.1,0-2.1,0.8-2.3,1.9L1.8,47.9C1.8,48.3,1.9,48.7,2.2,49z"
              />
              <path
                fill="#231F20"
                d="M12.5,53.2l-0.1,0.6c-0.1,0.4,0.1,0.8,0.4,1.1l0.3-1.7C13.1,53.2,12.5,53.2,12.5,53.2z"
              />
            </g>
            <rect fill={primary} x="35.5" y="6.7" width="1.1" height="21.5" />
          </svg>
        );
      }}
    />
  );
}
