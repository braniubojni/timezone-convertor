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
  colorSchemes: {
    dark: true,
  },
});

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
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
