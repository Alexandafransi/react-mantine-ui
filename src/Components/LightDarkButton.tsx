import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import {MoonIcon, SunIcon} from "@modulz/radix-icons";

export const LightDarkButton = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
       <div className="App">
           <ActionIcon
               variant="outline"
               color={dark ? 'yellow' : 'blue'}
               onClick={() => toggleColorScheme()}
               title="Toggle color scheme"
           >
               {dark ? <SunIcon style={{width:18, height:18}} /> : <MoonIcon style={{width:18, height:18}} />}
           </ActionIcon>
       </div>
    )
}