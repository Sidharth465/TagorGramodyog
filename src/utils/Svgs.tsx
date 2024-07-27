import React from 'react'
import Svg, { Defs, G, Path, RadialGradient, Stop } from 'react-native-svg';



export const GlobeSvg = () => (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <Path
        d="M10 1.5625C8.33122 1.5625 6.69992 2.05735 5.31238 2.98448C3.92484 3.9116 2.84338 5.22936 2.20477 6.77111C1.56616 8.31286 1.39907 10.0094 1.72463 11.6461C2.05019 13.2828 2.85379 14.7862 4.03379 15.9662C5.2138 17.1462 6.71721 17.9498 8.35393 18.2754C9.99064 18.6009 11.6871 18.4338 13.2289 17.7952C14.7706 17.1566 16.0884 16.0752 17.0155 14.6876C17.9427 13.3001 18.4375 11.6688 18.4375 10C18.435 7.763 17.5453 5.61833 15.9635 4.03653C14.3817 2.45473 12.237 1.56498 10 1.5625ZM10 16.1719C9.30921 15.3634 8.76962 14.4372 8.40703 13.4375H11.5961C11.3897 14.0028 11.128 14.5463 10.8148 15.0602C10.5738 15.4522 10.3013 15.824 10 16.1719ZM7.93047 11.5625C7.77576 10.5266 7.77576 9.47342 7.93047 8.4375H12.0711C12.2258 9.47342 12.2258 10.5266 12.0711 11.5625H7.93047ZM3.4375 10C3.43749 9.47341 3.50123 8.94876 3.62735 8.4375H6.03516C5.90493 9.4751 5.90493 10.5249 6.03516 11.5625H3.62735C3.50123 11.0512 3.43749 10.5266 3.4375 10ZM10 3.82812C10.6908 4.63659 11.2304 5.56283 11.593 6.5625H8.40547C8.61184 5.99722 8.87353 5.45369 9.18672 4.93984C9.42724 4.54784 9.69923 4.17604 10 3.82812ZM13.9633 8.4375H16.3711C16.6243 9.46378 16.6243 10.5362 16.3711 11.5625H13.9648C14.0951 10.5249 14.0951 9.4751 13.9648 8.4375H13.9633ZM15.5859 6.5625H13.5711C13.2896 5.61748 12.8823 4.7146 12.3602 3.87812C13.6994 4.39794 14.8324 5.3404 15.5875 6.5625H15.5859ZM7.63985 3.87812C7.11771 4.7146 6.71042 5.61748 6.42891 6.5625H4.4125C5.16756 5.3404 6.30065 4.39794 7.63985 3.87812ZM4.4125 13.4375H6.42891C6.71042 14.3825 7.11771 15.2854 7.63985 16.1219C6.30065 15.6021 5.16756 14.6596 4.4125 13.4375ZM12.3602 16.1219C12.8823 15.2854 13.2896 14.3825 13.5711 13.4375H15.5875C14.8324 14.6596 13.6994 15.6021 12.3602 16.1219Z"
        fill="#FF4545"
      />
    </Svg>
  );
export const TwitterSvg = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 26 23.502"
    width={26}
    height={23.502}
    
  >
    <Path
      fillRule="nonzero"
      d="M20.476 0h3.987L15.753 9.955 26 23.502H17.977L11.693 15.286 4.503 23.502h-3.989l9.316 -10.648L0 0h8.227l5.68 7.51zm-1.399 21.115h2.209L7.026 2.261h-2.37z"
    />
  </Svg>
);


export const InstagramSvg = (props) => (
  <Svg
  width={26}
  height={26}
  viewBox="0 0 26 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M19.9062 0H6.09375C2.72826 0 0 2.72826 0 6.09375V19.9062C0 23.2717 2.72826 26 6.09375 26H19.9062C23.2717 26 26 23.2717 26 19.9062V6.09375C26 2.72826 23.2717 0 19.9062 0Z"
    fill="url(#paint0_radial_64_44)"
  />
  <Path
    d="M19.9062 0H6.09375C2.72826 0 0 2.72826 0 6.09375V19.9062C0 23.2717 2.72826 26 6.09375 26H19.9062C23.2717 26 26 23.2717 26 19.9062V6.09375C26 2.72826 23.2717 0 19.9062 0Z"
    fill="url(#paint1_radial_64_44)"
  />
  <Path
    d="M13.0009 2.84375C10.2427 2.84375 9.89645 2.85584 8.81319 2.90509C7.73195 2.95466 6.9939 3.12579 6.34816 3.37695C5.68009 3.63634 5.11347 3.98338 4.54898 4.54807C3.98399 5.11266 3.63695 5.67927 3.37675 6.34705C3.12488 6.99298 2.95354 7.73134 2.90489 8.81207C2.85645 9.89544 2.84375 10.2418 2.84375 13.0001C2.84375 15.7584 2.85594 16.1035 2.90509 17.1868C2.95486 18.268 3.12599 19.0061 3.37695 19.6518C3.63655 20.3199 3.98359 20.8865 4.54827 21.451C5.11266 22.016 5.67927 22.3639 6.34684 22.6232C6.99309 22.8744 7.73124 23.0455 8.81227 23.0951C9.89564 23.1444 10.2416 23.1565 12.9997 23.1565C15.7582 23.1565 16.1033 23.1444 17.1866 23.0951C18.2678 23.0455 19.0067 22.8744 19.653 22.6232C20.3207 22.3639 20.8865 22.016 21.4508 21.451C22.0158 20.8865 22.3627 20.3199 22.623 19.6521C22.8727 19.0061 23.0441 18.2678 23.0949 17.187C23.1436 16.1037 23.1562 15.7584 23.1562 13.0001C23.1562 10.2418 23.1436 9.89564 23.0949 8.81227C23.0441 7.73104 22.8727 6.99309 22.623 6.34735C22.3627 5.67927 22.0158 5.11266 21.4508 4.54807C20.8859 3.98318 20.3209 3.63614 19.6523 3.37705C19.0049 3.12579 18.2664 2.95455 17.1852 2.90509C16.1018 2.85584 15.7569 2.84375 12.9978 2.84375H13.0009ZM12.0898 4.67401C12.3603 4.6736 12.662 4.67401 13.0009 4.67401C15.7127 4.67401 16.0341 4.68376 17.105 4.73241C18.0952 4.7777 18.6327 4.94315 18.9907 5.08219C19.4647 5.26622 19.8026 5.4863 20.1578 5.84187C20.5133 6.19734 20.7333 6.53585 20.9178 7.00984C21.0569 7.36734 21.2225 7.90481 21.2676 8.89505C21.3162 9.96572 21.3268 10.2873 21.3268 12.9978C21.3268 15.7083 21.3162 16.0299 21.2676 17.1005C21.2223 18.0907 21.0569 18.6282 20.9178 18.9858C20.7338 19.4598 20.5133 19.7973 20.1578 20.1525C19.8024 20.508 19.4649 20.728 18.9907 20.9121C18.6331 21.0518 18.0952 21.2168 17.105 21.2621C16.0343 21.3108 15.7127 21.3213 13.0009 21.3213C10.289 21.3213 9.96755 21.3108 8.89698 21.2621C7.90674 21.2164 7.36927 21.051 7.01096 20.9119C6.53707 20.7278 6.19846 20.5078 5.84299 20.1523C5.48752 19.7969 5.26754 19.4592 5.083 18.985C4.94396 18.6274 4.77831 18.0899 4.73322 17.0997C4.68457 16.029 4.67482 15.7075 4.67482 12.9952C4.67482 10.283 4.68457 9.96318 4.73322 8.89251C4.77852 7.90227 4.94396 7.3648 5.083 7.0068C5.26713 6.5328 5.48752 6.1943 5.84309 5.83883C6.19866 5.48336 6.53707 5.26327 7.01106 5.07884C7.36907 4.93919 7.90674 4.77415 8.89698 4.72865C9.83389 4.6863 10.197 4.6736 12.0898 4.67147V4.67401ZM18.4223 6.36035C17.7495 6.36035 17.2036 6.90574 17.2036 7.5787C17.2036 8.25155 17.7495 8.79745 18.4223 8.79745C19.0952 8.79745 19.6411 8.25155 19.6411 7.5787C19.6411 6.90584 19.0952 6.35994 18.4223 6.35994V6.36035ZM13.0009 7.78436C10.1206 7.78436 7.78527 10.1197 7.78527 13.0001C7.78527 15.8805 10.1206 18.2147 13.0009 18.2147C15.8813 18.2147 18.2158 15.8805 18.2158 13.0001C18.2158 10.1198 15.8811 7.78436 13.0007 7.78436H13.0009ZM13.0009 9.61462C14.8706 9.61462 16.3864 11.1302 16.3864 13.0001C16.3864 14.8698 14.8706 16.3856 13.0009 16.3856C11.1313 16.3856 9.61553 14.8698 9.61553 13.0001C9.61553 11.1302 11.1311 9.61462 13.0009 9.61462Z"
    fill="white"
  />
  <Defs>
    <RadialGradient
      id="paint0_radial_64_44"
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(6.90625 28.0025) rotate(-90) scale(25.7679 23.9662)"
    >
      <Stop stopColor="#FFDD55" />
      <Stop offset={0.1} stopColor="#FFDD55" />
      <Stop offset={0.5} stopColor="#FF543E" />
      <Stop offset={1} stopColor="#C837AB" />
    </RadialGradient>
    <RadialGradient
      id="paint1_radial_64_44"
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(-4.3551 1.87291) rotate(78.681) scale(11.5184 47.4792)"
    >
      <Stop stopColor="#3771C8" />
      <Stop offset={0.128} stopColor="#3771C8" />
      <Stop offset={1} stopColor="#6600FF" stopOpacity={0} />
    </RadialGradient>
  </Defs>
</Svg>
);


export const FacebookSvg = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 26 26"
    width={26}
    height={26}
    
  >
    <G fillRule="nonzero">
      <Path
        fill="#0866FF"
        d="M26 13C26 5.82 20.18 0 13 0S0 5.82 0 13C0 19.097 4.197 24.212 9.86 25.617V16.973h-2.681V13h2.681v-1.712c0 -4.425 2.002 -6.476 6.346 -6.476 0.824 0 2.245 0.162 2.826 0.323v3.601c-0.307 -0.032 -0.84 -0.049 -1.502 -0.049 -2.132 0 -2.956 0.808 -2.956 2.907v1.405h4.246l-0.729 3.973h-3.517v8.932C21.012 25.128 26 19.647 26 13"
      />
      <Path
        fill="#fff"
        d="m18.092 16.973 0.729 -3.973h-4.246V11.595c0 -2.099 0.824 -2.907 2.956 -2.907 0.662 0 1.195 0.016 1.502 0.049v-3.601c-0.581 -0.161 -2.002 -0.323 -2.826 -0.323 -4.344 0 -6.346 2.051 -6.346 6.476v1.712h-2.681v3.973h2.681v8.645c1.006 0.249 2.058 0.383 3.14 0.383 0.533 0 1.058 -0.033 1.575 -0.095V16.973z"
      />
    </G>
  </Svg>
);

export const LinkedInSvg = () => (
  <Svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 25.879"
    width={26}
    height={25.879}
    
  >
    <Path
      d="M5.872 0h14.257a5.889 5.889 0 0 1 5.872 5.872v14.138a5.889 5.889 0 0 1 -5.872 5.869H5.872A5.889 5.889 0 0 1 0 20.01V5.872A5.889 5.889 0 0 1 5.872 0"
      style={{
        fill: "#0a66c2",
        fillRule: "evenodd",
      }}
    />
    <Path
      d="M10.408 10.031h3.286v1.693h0.047c0.459 -0.821 1.576 -1.693 3.246 -1.693 3.468 0 4.109 2.158 4.109 4.966v5.937H17.67V15.658c0 -1.208 -0.025 -2.763 -1.782 -2.763s-2.057 1.314 -2.057 2.677v5.374H10.408zM8.464 6.726a1.782 1.782 0 1 1 -1.782 -1.782A1.784 1.784 0 0 1 8.464 6.726M4.905 10.031H8.464v10.903H4.905z"
      style={{
        fillRule: "evenodd",
        fill: "#fff",
      }}
    />
  </Svg>
);
const Svgs = () => {
  return (
   <></>
  )
}

export default Svgs