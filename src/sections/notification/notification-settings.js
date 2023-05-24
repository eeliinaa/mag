import { useCallback } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    Stack,

    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';


export const NotificationSettings = () => {
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
        },
        []
    );

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                {/* <CardHeader
                    subheader="Manage the notifications"
                    title="Notifications"
                />
                <Divider /> */}
                <CardContent>
                    <Grid
                        container
                        spacing={6}
                        wrap="wrap"
                    >
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h6">
                                    Motivational messages
                                </Typography>
                                <Stack>
                                    {/* <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Enabled"
                  /> */}
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Enabled"
                                    />
                                    {/* <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Use system defined motivaton messages"
                  /> */}
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label="Include system defined"
                                    />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h6">
                                    Hint messages
                                </Typography>
                                <Stack>
                                    {/* <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Enabled"
                  /> */}
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Enabled"
                                    />
                                    {/* <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Use system defined motivaton messages"
                  /> */}
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label="Include system defined"
                                    />
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                        Save
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
};
