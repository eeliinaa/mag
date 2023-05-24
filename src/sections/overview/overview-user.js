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