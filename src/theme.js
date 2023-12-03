import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2"
        },
        secondary: {},
        success: {
            main: "#4caf50"
        }

        /*
        * background color: #ffffff
        * grey-light:#f3f3f3
        * green:#29cc97;
        * yellow:#fec400;
        * black:#212529;;
        * red:#fe5461;
        * blue-light:#88aaf3;
        * */

    },
    typography: {
        fontSize: 16,
        h3: {
            fontWeight: 700,
            fontSize: "2.2rem"
        },
        h4: {
            fontWeight: 700,
            fontSize: "1.75rem"
        },
        h5: {
            fontWeight: 500
        },
        h6: {
            fontWeight: 500
        },
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
    ]
    }
});


/*Оптимизация кода с помощью useMemo*/