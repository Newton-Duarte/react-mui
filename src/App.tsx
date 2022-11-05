import { colors, createTheme, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import './App.css';
// import { MuiMasonry } from './components/MuiMasonry';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiTimeline } from './components/MuiTimeline';
// import { MuiTypography } from './components/MuiTypography';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiRating } from './components/MuiRating';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiCard } from './components/MuiCard';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiLink } from './components/MuiLink';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiList } from './components/MuiList';
// import { MuiChip } from './components/MuiChip';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiTable } from './components/MuiTable';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiPickers } from './components/MuiPickers';
import { MuiResponsiveness } from './components/MuiResponsiveness';

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiPickers /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
