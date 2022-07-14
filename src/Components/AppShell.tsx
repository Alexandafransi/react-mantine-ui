import React, { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';
import {LightDarkButton} from "./LightDarkButton";
import {ChipsExample} from  "./ChipsExample";

export default function AppShellExample() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Navbar.Section>
                        <Text>Hello this is title</Text>
                        {/*<Test />*/}
                    </Navbar.Section>
                    <Navbar.Section grow mt="lg">
                        <Text>test 1</Text>
                        <Text>test 2</Text>
                        <Text>test 3</Text>
                        <Text>test 4</Text>
                        <Text>test 5</Text>
                        <Text>test 6</Text>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Text>Footer</Text>
                    </Navbar.Section>
                </Navbar>
            }
            // aside={
            //     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //         <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //             <Text>Application sidebar</Text>
            //         </Aside>
            //     </MediaQuery>
            // }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <div style={{ display: 'flex', justifyContent:"space-between",alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header<LightDarkButton /></Text>


                    </div>
                </Header>
            }
        >
            {/*<TableExample />*/}
            <ChipsExample />
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}