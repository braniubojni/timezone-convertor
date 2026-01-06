import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TimezoneProvider } from './context/TzProvider';
import { StyledBox } from './styles';
import AppThemeProvider from './theme';

dayjs.extend(utc);
dayjs.extend(tz);
dayjs.extend(customParseFormat);

function App() {
  return (
    <AppThemeProvider>
      <TimezoneProvider>
        <StyledBox>
          <Header />
          <Main />
        </StyledBox>
      </TimezoneProvider>
    </AppThemeProvider>
  );
}

export default App;
