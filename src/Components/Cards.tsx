import {Badge, Button, Card, Grid, Group, Image, Text, useMantineTheme} from "@mantine/core";


export const Cards = () => {
    const theme = useMantineTheme()
    return (
        <div className="App">
            <Grid justify="space-evenly">
                <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg">
                        <Card.Section>
                            <Image src="9.jpg" height={160} alt="Norway" />
                        </Card.Section>

                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" style={{  lineHeight: 1.5 }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                            Book classic tour now
                        </Button>
                    </Card>
                </Grid.Col>
                <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg">
                        <Card.Section>
                            <Image src="2.jpg" height={160} alt="Norway" />
                        </Card.Section>

                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" style={{  lineHeight: 1.5 }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                            Book classic tour now
                        </Button>
                    </Card>

                </Grid.Col>
                <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg">
                        <Card.Section>
                            <Image src="9.jpg" height={160} alt="Norway" />
                        </Card.Section>

                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" style={{  lineHeight: 1.5 }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                            Book classic tour now
                        </Button>
                    </Card>

                </Grid.Col>
                <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg">
                        <Card.Section>
                            <Image src="2.jpg" height={160} alt="Norway" />
                        </Card.Section>

                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                On Sale
                            </Badge>
                        </Group>

                        <Text size="sm" style={{  lineHeight: 1.5 }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                            Book classic tour now
                        </Button>
                    </Card>

                </Grid.Col>
            </Grid>
        </div>
    )
}