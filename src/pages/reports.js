import { useCallback, useMemo, useState } from 'react'

import Head from 'next/head'
import { subDays, subHours } from 'date-fns'
import { Card, CardContent, Box, Container, Typography, Grid, Stack, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout'
import { OverviewBudget } from 'src/sections/overview/overview-budget'
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders'
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products'
import { OverviewSales } from 'src/sections/overview/overview-sales'
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress'
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers'
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit'
import { OverviewTraffic } from 'src/sections/overview/overview-traffic'
import { ReportUsers } from 'src/sections/report/report-users'
import { ReportCourses } from 'src/sections/report/report-courses'
import Banner from 'src/sections/banner'

// import { OverviewLatestCourses } from 'src/sections/overview/overview-latest-courses'

import OverviewUser from 'src/sections/overview/overview-user'
import OverviewAdmin from 'src/sections/overview/overview-admin'
// import OverviewAdmin from 'src/sections/overview/overview-admin'

import { useAuth } from 'src/hooks/use-auth'
import { roleTypes } from 'src/helpers/collections'
import { usersReports, courses, coursesReports } from 'src/utils/storage'

const now = new Date()

const Page = () => {
    const [reportType, setReportType] = useState(1)
    const [target, setTarget] = useState(undefined)
    const auth = useAuth()

    const handleReportTypeChange = useCallback(
        (event, value) => {
            setReportType(value.props.value)
            setTarget(undefined)
        },
        []
    )
    const handleReportTargetChange = useCallback(
        (event, value) => {
            console.log(value)
            setTarget(value.props.value)
        },
        []
    )

    //const course = courses.find(o => o.id === courseId) || courses[0]
    const userReport = usersReports.find(o => o.id === target)// || usersReports[0]
    const report = coursesReports.find(o => o.id === target)// || usersReports[0]

    const bannerContent = (
        <Card>
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Stack
                        spacing={1}
                        width="50%"
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Report type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={reportType}
                                label="Report type"
                                onChange={handleReportTypeChange}
                            >
                                <MenuItem value={1}>By course</MenuItem>
                                <MenuItem value={2}>By user</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Stack spacing={1}
                        width="50%"
                    >
                        {reportType === 1 &&
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Course"
                                    onChange={handleReportTargetChange}
                                >
                                    {/* <MenuItem value={1}>React</MenuItem>
                                    <MenuItem value={2}>DBreeze</MenuItem>
                                    <MenuItem value={3}>React basic</MenuItem> */}
                                    {courses.map((c, i) => (
                                        <MenuItem key={i} value={c.id}>{c.title}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        }
                        {reportType === 2 &&
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">User</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="User"
                                    onChange={handleReportTargetChange}
                                // onChange={handleChange}
                                >
                                    {usersReports.map((user, i) => (
                                        <MenuItem key={i} value={user.id}>{user.name}</MenuItem>
                                    ))}
                                    {/* <MenuItem value={2}>Berndon</MenuItem>
                                    <MenuItem value={3}>Jack</MenuItem> */}
                                </Select>
                            </FormControl>
                        }
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )

    return (
        <>
            <Banner
                title="Reporting"
                subtitle="Choose reporting type and your target"
                content={bannerContent}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">

                    {reportType === 2 &&
                        <ReportUsers
                            difference={2}
                            positive
                            sx={{ height: '100%' }}
                            value="53"
                            userReport={userReport}
                        />
                    }
                    {reportType === 1 && <ReportCourses
                        difference={1}
                        positive={true}
                        sx={{ height: '100%' }}
                        value="1.6k"
                        report={report}
                    />
                    }

                    {/* <>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Stack
                                spacing={1}
                                width="50%"
                            >


                            </Stack>
                            <Stack
                                spacing={1}
                                width="50%"
                            >


                            </Stack>
                        </Stack>

                    </> */}
                </Container>
            </Box>
        </>
    )
}

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
)

export default Page