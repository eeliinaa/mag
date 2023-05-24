import Head from 'next/head'
import { subDays, subHours } from 'date-fns'
import { Box, Container, Typography, Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { OverviewLatestCourses } from 'src/sections/overview/overview-latest-courses'
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products'
import { OverviewToday } from 'src/sections/overview/overview-today'

import DiaryCalendar from 'src/sections/diary-calendar'



import { Calendar, Badge } from 'antd'

import { useAuth } from 'src/hooks/use-auth'
import { roleTypes } from 'src/helpers/collections'

const now = new Date()

const OverViewUser = ({ details }) => {
    // const Page = () => {

    const getListData = (value) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    };

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge
                            status={item.type}
                            text={item.content}
                        />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <>
            <Head>
                <title>
                    Overview | JLM system
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        {/* <Stack
                        // direction="row"
                        // justifyContent="space-between"
                        // spacing={4}
                        > */}
                            {/* <Stack spacing={1}> */}

                            <div>
                                {/* <Typography variant="h4">
                                    Events
                                </Typography> */}
                                {/* <Calendar
                            cellRender={cellRender}
                            // value={value}
                            // onSelect={onSelect}
                            // onPanelChange={onPanelChange}
                        /> */}

                                <DiaryCalendar />
                            </div>
                            {/* </Stack> */}
                        {/* </Stack> */}
                    </Stack>

                    <Grid
                        container
                        spacing={3}
                    >

                        <Grid
                            xs={12}
                            md={6}
                            lg={4}
                        >
                            <OverviewToday
                                sx={{ height: '100%' }}
                            />
                            {/* <OverviewLatestProducts
                                products={[
                                    {
                                        id: '5ece2c077e39da27658aa8a9',
                                        image: '/assets/products/product-1.png',
                                        name: 'Healthcare Erbology',
                                        updatedAt: subHours(now, 6).getTime()
                                    },
                                    {
                                        id: '5ece2c0d16f70bff2cf86cd8',
                                        image: '/assets/products/product-2.png',
                                        name: 'Makeup Lancome Rouge',
                                        updatedAt: subDays(subHours(now, 8), 2).getTime()
                                    },
                                    {
                                        id: 'b393ce1b09c1254c3a92c827',
                                        image: '/assets/products/product-5.png',
                                        name: 'Skincare Soja CO',
                                        updatedAt: subDays(subHours(now, 1), 1).getTime()
                                    },
                                    {
                                        id: 'a6ede15670da63f49f752c89',
                                        image: '/assets/products/product-6.png',
                                        name: 'Makeup Lipstick',
                                        updatedAt: subDays(subHours(now, 3), 3).getTime()
                                    },
                                    {
                                        id: 'bcad5524fe3a2f8f8620ceda',
                                        image: '/assets/products/product-7.png',
                                        name: 'Healthcare Ritual',
                                        updatedAt: subDays(subHours(now, 5), 6).getTime()
                                    }
                                ]}
                                sx={{ height: '100%' }}
                            /> */}
                        </Grid>
                        <Grid
                            xs={12}
                            md={12}
                            lg={8}
                        >
                            <OverviewLatestCourses
                                orders={[
                                    {
                                        id: '1',
                                        course: 'ReactJs basic',
                                        amount: 30.5,
                                        createdAt: 1555016400000,
                                        status: 'started'
                                    },
                                    {
                                        id: '2',
                                        course: 'ReactJs advanced',
                                        amount: 25.1,
                                        createdAt: 1555016400000,
                                        status: 'finished'
                                    },
                                    {
                                        id: '3',
                                        course: 'DBreeze database',
                                        amount: 10.99,
                                        // createdAt: "",
                                        status: 'not started'
                                    },
                                    {
                                        id: '4',
                                        course: 'JSON structure',
                                        amount: 96.43,
                                        customer: {
                                            name: 'Anje Keizer'
                                        },
                                        createdAt: 1554757200000,
                                        status: 'finished'
                                    },
                                    {
                                        id: '5',
                                        course: 'Course 1',
                                        amount: 32.54,
                                        createdAt: 1554670800000,
                                        status: 'started'
                                    },
                                    {
                                        id: '6',
                                        course: 'Course 2',
                                        amount: 16.76,
                                        createdAt: 1554670800000,
                                        status: 'finished'
                                    }
                                ]}
                                sx={{ height: '100%' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

// Page.getLayout = (page) => (
//     <DashboardLayout>
//         {page}
//     </DashboardLayout>
// )

export default OverViewUser
// export default Page