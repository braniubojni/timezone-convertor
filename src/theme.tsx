import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    dark: true,
  },
  defaultColorScheme: 'dark',
});

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '@keyframes mui-auto-fill': { from: { display: 'block' } },
          '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
