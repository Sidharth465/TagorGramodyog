import { createTheme } from "@shopify/restyle";
import palette from "./palette";


const theme = createTheme({
    colors: {
        background: palette.white,
        surface: palette.spring_wood,
        primary: palette.bw_green,
        secondary: palette.bw_yellow,
        secondary_light: palette.bw_yellow_light,
        secondary_dark: palette.bw_yellow_dark,

        surface_light: palette.light_gray,
        surface_dark: palette.black,
        surface_dark_shade_1: palette.black_shade_1,

        text_on_background: palette.black,
        text_on_chip_bg_color: palette.black,
        text_on_background_light: palette.black_shade_2,
        text_on_secondary: palette.original_black,
        text_on_primary: palette.white,
        text_on_surface: palette.black,
        text_on_surface_light: palette.black,
        text_on_surface_dark: palette.white,

        textinput_placeholder: palette.light_gray,
        textinput: palette.black,

        // ayush colors
        text_grey: palette.bw_grey_text,
        bw_background_grey: palette.bw_background_grey,
        bw_background_blue: palette.bw_background_blue,
        bw_grey_dark_blue: palette.bw_grey_dark_blue,
        bw_doctor_background: palette.doctorBackground,
        ailment_background: palette.ailment_background,
        header_shadow: palette.header_shadow,
        contact_us_heading: palette.bw_contact_us_heading,
        blueText: palette.text_blue,
        text_with_opacity: palette.text_with_opacity,
       chip_bg_color:palette.chipBgColor,
        // ayush colors END

        // sid color 
        dateBarBorderColor:palette.darkBlue,
        dateBarBackground:palette.linkBlue,
        list_background:palette?.list_background,
        bg_lang:palette?.bg_lang,
        chip_box:palette?.chip_box,
        link_tile_bg:palette.linktile_bg,
        errorRed:"#FF0000"
        



    },
   
    spacing: {
        none: 0,
        sss:2,
        ss: 4,
        s: 8,
        ms: 16,
        mm:18,
        m: 20,
        l: 24,
        ll: 32,
        xl: 56,
        xxl: 84,
        floatingCTA: 120,
        xxxl: 300
    },
    borderRadii: {
        negatives:-20,
        none: 0,
        ss: 4,
        s: 10,
        ms: 18,
        m: 20,
        l: 40,
        xl: 80,
        xxl: 150,
    },
    textVariants: {
        defaults: {
            

        },
        announce_v1: {
            fontFamily: 'molend',
            fontSize: {
                phone: 42,
                tablet: 120,
                largeTablet: 120
            },
            color: 'text_on_background'
        },
        announce_v2: {
            fontFamily: 'molend',
            fontSize: {
                phone: 32,
                tablet: 120,
                largeTablet: 120
            },
            color: 'text_on_background'
        },
        announce_small: {
            fontFamily: 'molend',
            fontSize: {
                phone: 12,
                tablet: 20,
                largeTablet: 20
            },
            color: 'text_on_background'
        },
        treatmentCount: {
            fontSize: {
                phone: 75,
                tablet: 120,
                largeTablet: 120
            },
            lineHeight: {
                phone: 52,
                tablet: 120,
                largeTablet: 120
            },
            fontFamily: 'gilroy-bold'
        },
        h1_big: {
            fontSize: {
                phone: 52,
                tablet: 120,
                largeTablet: 120
            },
            lineHeight: {
                phone: 52,
                tablet: 120,
                largeTablet: 120
            },
            fontFamily: 'gilroy-bold'
        },
        h1_big_medium: {
            fontSize: {
                phone: 52,
                tablet: 150,
                largeTablet: 150
            },
            lineHeight: {
                phone: 52,
                tablet: 150,
                largeTablet: 150
            },
            fontFamily: 'gilroy-regular'
        },
        h1: {
            fontSize: {
                phone: 32,
                tablet: 72,
                largeTablet: 72
            },
            lineHeight: {
                phone: 34,
                tablet: 72,
                largeTablet: 72
            },
            fontFamily: 'gilroy-bold'
        },
        h1_medium: {
            fontSize: {
                phone: 32,
                tablet: 72,
                largeTablet: 72
            },
            lineHeight: {
                phone: 36,
                tablet: 72,
                largeTablet: 72
            },
            fontFamily: 'gilroy-medium'
        },
        h1_regular: {
            fontSize: {
                phone: 32,
                tablet: 72,
                largeTablet: 72
            },
            lineHeight: {
                phone: 36,
                tablet: 72,
                largeTablet: 72
            },
            fontFamily: 'gilroy-regular'
        },
        h1_regular_intro: {
            fontSize: {
                phone: 32,
                tablet: 72,
                largeTablet: 72
            },
            lineHeight: {
                phone: 30,
                tablet: 72,
                largeTablet: 72
            },
            fontFamily: 'gilroy-regular'
        },
        h2_big: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                phone: 28,
                tablet: 52,
                largeTablet: 52
            },
            lineHeight: {
                phone: 28,
                tablet: 52,
                largeTablet: 52
            },
        },
        h2_big_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: {
                phone: 28,
                tablet: 52,
                largeTablet: 52
            },
            lineHeight: {
                phone: 26,
                tablet: 52,
                largeTablet: 52
            },
        },
        h2_big_regular: {
            fontFamily: 'gilroy-regular',
            fontSize: {
                phone: 26,
                tablet: 52,
                largeTablet: 52
            },
            lineHeight: {
                phone: 26,
                tablet: 52,
                largeTablet: 52
            },
        },
        h2: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                phone: 22,
                tablet: 42,
                largeTablet: 42
            },
            lineHeight: {
                phone: 24,
                tablet: 42,
                largeTablet: 42
            }
        },
        h2_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: {
                phone: 22,
                tablet: 42,
                largeTablet: 42
            },
            lineHeight: {
                phone: 22,
                tablet: 42,
                largeTablet: 42
            }
        },
        h3: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                phone: 18,
                tablet: 32,
                largeTablet: 32
            },
        },
        h3_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: {
                phone: 18,
                tablet: 32,
                largeTablet: 32
            },
            lineHeight: {
                phone: 22,
                tablet: 32,
                largeTablet: 32
            },
        },
        h4_big: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                tablet: 28,
                largeTablet: 28,
                phone: 14
            },
        },
        h4: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                tablet: 22,
                largeTablet: 22,
                phone: 14
            },
        },
        h4_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: {
                tablet: 22,
                largeTablet: 22,
                phone: 14
            },
        },

        sub1: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                phone: 16,
                tablet: 20,
                largeTablet: 29
            }
        },
        sub1_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: {
                phone: 16,
                tablet: 20,
                largeTablet: 29
            }
        },
        sub2: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                phone: 14,
                tablet: 18,
                largeTablet: 18
            },
            lineHeight: {
                phone: 18,
                tablet: 18,
                largeTablet: 18
            },
        },
        sub2_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: {
                phone: 14,
                tablet: 18,
                largeTablet: 18
            },
            lineHeight: {
                phone: 18,
                tablet: 18,
                largeTablet: 18
            },
        },
        sub3: {
            fontFamily: 'gilroy-bold',
            fontSize: {
                phone: 10,
                tablet: 14,
                largeTablet: 14
            },
            lineHeight: {
                phone: 10,
                tablet: 14,
                largeTablet: 14
            },
        },
        sub3_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: {
                phone: 10,
                tablet: 14,
                largeTablet: 14
            },
            lineHeight: {
                phone: 10,
                tablet: 14,
                largeTablet: 14
            },
        },
        sub4: {
            fontFamily: 'gilroy-bold',
            fontSize: { phone: 12, largeTablet: 22 },
            lineHeight: { phone: 14, largeTablet: 22 },
            letterSpacing: 0.3
        },
        sub4_medium: {
            fontFamily: 'gilroy-medium',
            fontSize: { phone: 12, largeTablet: 22 },
            lineHeight: { phone: 14, largeTablet: 22 },
            letterSpacing: 0.3
        }
    },
    ailmentCardVariants: {
        default: {
            borderRadius: { phone: 's', tablet: 'm', largeTablet: 'm' },
            flex: 1,
            height: { phone: 100, tablet: 220, largeTablet: 220 }
        }
    },
    imageVariant: {
        default: {
            backgroundColor: 'surface'
        }
    }
});

export type Theme = typeof theme;
export default theme;

