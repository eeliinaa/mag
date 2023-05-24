import Head from 'next/head';
import { Box, Container, Stack, Typography, Grid } from '@mui/material';
// import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { NotificationList } from 'src/sections/notification/notification-list';
import { NotificationSettings } from 'src/sections/notification/notification-settings';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Banner from 'src/sections/banner'

import { motivationalMessages, hintMessages } from 'src/utils/storage'



const Page = () => (
    <>
        <Banner
            title="Notification center"
            subtitle="In notificatoin center you can manage all the things"
            maxWidth="lg"
        // content={bannerContent}
        />
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    {/* <Typography variant="h4">
                        Notifications
                    </Typography> */}
                    <NotificationSettings />
                    <Stack 
                    
                    spacing={3}
                    flexDirection={"row"}
                    alignItems={"space-between"}
                    >
                        <Stack
                            spacing={3}
                        >

                            {/* <Grid
                            container
                            spacing={3}
                            >
                            <Grid
                            xs={12}
                            md={6}
                        > */}
                            <NotificationList
                                title={'Motivational messages'}
                                subtitle={'Manage motivational messages'}
                                items={motivationalMessages}
                            />
                        </Stack>
                        <Stack
                            spacing={3}
                        >
                            {/* </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            > */}
                            <NotificationList
                                title={'Hint messages'}
                                subtitle={'Manage hint messages'}
                                items={hintMessages}
                            />
                        </Stack>

                        {/* </Grid>
                        </Grid> */}
                    </Stack>
                    {/* <SettingsPassword /> */}
                </Stack>
            </Container>
        </Box>
    </>
);

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
