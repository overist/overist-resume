import { createTheme } from '@mui/material'

export const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#4c6ef5' // 기본 색상
    },
    secondary: {
      main: '#868e96' // 보조 색상
    },
    background: {
      default: '#edf2ff' // 배경색
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none' // 버튼의 텍스트 소문자 유지
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.65
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.65
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.65
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.65
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.65
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.65
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      display: 'inline-block'
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#4c6ef5'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 'fit-content',
          borderRadius: '0.3rem',
          '& .MuiChip-label': {
            padding: '0.3rem'
          }
        }
      }
    },

    MuiButton: {
      // need to remove hover effect
      defaultProps: {
        variant: 'text',
        disableRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
        disableTouchRipple: true
      },
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: 'unset'
          }
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true
      },
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: 'unset'
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: 'none' // 그림자 제거
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // 추가적으로 그림자가 있을 경우 제거
          ':hover': {
            backgroundColor: 'unset' // 호버 시 배경 제거
          }
        }
      }
    }
  }
})
