import Head from 'next/head';
import { useState, useEffect, useCallback } from "react";
import {
    ArrowUpOnSquareIcon,
    ArrowDownOnSquareIcon,
    PlusIcon
} from '@heroicons/react/24/solid';
import {
    Box,
    Button,
    Container,
    Pagination,
    Stack,
    SvgIcon,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CourseCard } from 'src/sections/courses/course-card';
import { useAuth } from 'src/hooks/use-auth'

import { OverviewAdmin } from 'src/sections/overview/overview-admin'
import Banner from 'src/sections/banner'

import firebaseConfig from 'lib/config.js';
import excuteQuery from 'lib/db';
import axios from 'axios';

import mysql from 'serverless-mysql';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from 'lib/config';
import { roleTypes } from 'src/helpers/collections';

import { courses } from 'src/utils/storage'


// This gets called on every request
export async function getServerSideProps() {
    let data = courses
    return {
        props: {
            data: data
        }
    }
}

const Page = ({ data, abc }) => {

    const [courses, setCourses] = useState(data)

    const auth = useAuth()

    return (
        <>
            <Banner
                title="Courses"
                subtitle="This is the course list"
            // content={bannerContent}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
                                {/* <Typography variant="h4">
                                    Courses
                                </Typography> */}
                              
                            </Stack>
                            {auth.viewMode !== roleTypes.user &&
                                <div>
                                    <Button
                                        startIcon={(
                                            <SvgIcon fontSize="small">
                                                <PlusIcon />
                                            </SvgIcon>
                                        )}
                                        variant="contained"
                                    >
                                        Add
                                    </Button>
                                </div>}
                        </Stack>
                        {/* <CompaniesSearch /> */}
                        <Grid
                            container
                            spacing={3}
                        >
                            {courses.map((course) => (
                                <Grid
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    key={course.id}
                                >
                                    <CourseCard course={course} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>
        </>
    )
};

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page