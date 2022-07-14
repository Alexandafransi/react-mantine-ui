import React from 'react';
import './App.css';
import {Button, Paper, Text, Loader, MantineProvider, ColorSchemeProvider, ColorScheme} from "@mantine/core";
import {Cards} from "./Components/Cards";
import {LightDarkButton} from "./Components/LightDarkButton";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import {NavBar} from "./Components/NavBar";

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <div >
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{colorScheme}}>
                <Paper  radius={0} style={{minHeight:"100vh",padding:2}}>
                    <NavBar />
                    <Cards/>
                    <LightDarkButton />
                </Paper>
            </MantineProvider>

        </ColorSchemeProvider>

    </div>
  );
}

export default App;
