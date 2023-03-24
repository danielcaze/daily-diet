export const defaultTheme = {
  COLORS: {
    LIGHT_GREEN: '#E5F0D8',
    GREEN: '#CBE4B4',
    DARK_GREEN: '#639339',

    LIGHT_RED: '#F4E6E7',
    RED: '#F3BABD',
    DARK_RED: '#BF3B44',

    WHITE: '#FFFFFF',
    GRAY_100: '#FAFAFA',
    GRAY_200: '#EFF0F0',
    GRAY_300: '#DDDEDF',
    GRAY_400: '#B9BBBC',
    GRAY_500: '#5C6265',
    GRAY_600: '#333638',
    GRAY_700: '#1B1D1E',
  },
  FONT_FAMILIES: {
    REGULAR: 'NunitoSans_400Regular',
    BOLD: 'NunitoSans_700Bold',
  },
  FONT_SIZES: {
    SMALL: '12px',
    MEDIUM: '14px',
    LARGE: '16px',
    XLARGE: '18px',
    XXLARGE: '24px',
    XXXLARGE: '32px',
  }
} as const

export type ThemeType = typeof defaultTheme