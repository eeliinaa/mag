import Head from 'next/head';
import { useState, useEffect, useCallback } from "react";
import { Box, Container, Stack, Typography, Grid, Card, CardContent, Divider, CardHeader, Stepper, Step, Button, StepLabel, MobileStepper, StepContent, Paper, Tabs, Tab, SvgIcon, LinearProgress } from '@mui/material';
// import { TabPanel, TabContext, TabList, } from '@mui/lab';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';


import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';


import Banner from 'src/sections/banner'
import { PublicationPaging } from 'src/components/publication-paging'

import { courses } from 'src/utils/storage'
import { useRouter, useSearchParams } from 'next/navigation'


import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
// import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const CodeBlock = ({ codeString }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      // style={dark}
      wrapLongLines
      showLineNumbers="true"
      // customStyle={{ borderRadius: "5px", backgroundColor: "#eaeaea" }}
      customStyle={{ borderRadius: "5px" }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

const Page = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [activeStepLesson, setActiveStepLesson] = useState(0)
  const [activeStepTask, setActiveStepTask] = useState(0)

  // const router = useRouter()
  // const routerS = useRouter()
  const urlParams = useSearchParams() // steps


  const courseId = urlParams.get('courseId')
  const course = courses.find(o => o.id === courseId) || courses[0]
  const publications = course.publications || []
  // const progress = course.progress
  const spentHours = course.spentHours
  const title = course.title
  const subtitle = course.subtitle

  console.log('courseId', courseId)
  console.log('course', course)

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };


  const handleStepNext = () => {
    setActiveStepLesson(0)
    setActiveTab(0)
    setActiveStep((prevActiveStep) => {
      const nextStepValue = prevActiveStep === publications.length - 1 ? 99 : prevActiveStep + 1
      return nextStepValue
    })
  }
  const handleStepBack = () => {
    setActiveStepLesson(0)
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleStepReset = () => {
    setActiveStepLesson(0)
    // setProgress(0)
    setActiveStep(0)
  }

  const onLessonStepChange = (value) => {
    setActiveStepLesson(value)
  }
  const onTaskStepChange = (value) => {
    setActiveStepTask(value)
  }

  const codeString = `(num) => num + 1
let b = 2
const a = "text"`;


  const progress = activeStep === 99 ? 100 : parseInt(100 / publications.length) * (activeStep + 1)
  let lessonTitle = '---'
  let lessonText = ''
  if (publications[activeStep] && publications[activeStep].lessons && publications[activeStep].lessons[activeStepLesson]) {
    lessonTitle = publications[activeStep].lessons[activeStepLesson].title
    lessonText = publications[activeStep].lessons[activeStepLesson].text
  }
  let tasks = []
  let taskTitle = ''
  let task = ''
  if (publications[activeStep] && publications[activeStep].tasks) {
    if (publications[activeStep].tasks[activeStepTask]) {
      task = publications[activeStep].tasks[activeStepTask].text
      taskTitle = publications[activeStep].tasks[activeStepTask].title
    }
    tasks = publications[activeStep].tasks
  }

  console.log('activeStep', activeStep)
  console.log('publications', publications)

  return (
    <>
      <Banner
        title={`Course: ${course.title}`}
        subtitle={course.subtitle}
      // subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
            <Grid
              container
              spacing={5}
            >
              <Grid
                item
                xs={3}
              >
                <Stack
                  spacing={2}
                  direction={'row'}
                >
                  <SvgIcon fontSize="small">
                    <ArrowLeftIcon />
                  </SvgIcon>
                  <span>Back to courses</span>
                </Stack>
                <br />
                <Stack
                  spacing={2}
                  direction={'row'}
                  alignItems="center"
                >
                  <Stack flex={1}>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                    />
                  </Stack>
                  <span>{progress}%</span>
                </Stack>
                <Stack
                  spacing={2}
                  direction={'row'}
                  alignItems="center"
                >
                  <SvgIcon
                    color="action"
                    fontSize="small"
                  >
                    <ClockIcon />
                  </SvgIcon>
                  <Typography variant="caption">
                    {spentHours}{' hours'}
                  </Typography>
                </Stack>
                <br />
                {/* <Typography variant="h6">
                  {title}
                </Typography>
                <Typography variant="bod">
                  {subtitle}
                </Typography> */}
                {/* <br />
                <br /> */}
                <Divider />
                <br />
                <Typography variant="h6">
                  Course content:
                </Typography>
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {publications.map((step, index) => (
                      <Step key={step.title}>
                        <StepLabel
                          optional={
                            index === publications.length - 1 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.title}
                        </StepLabel>
                        <StepContent>
                          {/* <Typography variant="caption">{step.subtitle}</Typography> */}
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleStepNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === publications.length - 1 ? 'Finish' : 'Continue'}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleStepBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === 99 && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>All steps completed - you&apos;re finished</Typography>
                      <Button onClick={handleStepReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </Paper>
                  )}
                </Box>
              </Grid>
              <Grid
                item
                xs={9}
              >
                <Card>
                  <CardHeader
                    title={activeStep === 99 ? "CONGRATULATIONS" : publications[activeStep].title}
                    subheader={activeStep === 99 ? "You finished the course!" : publications[activeStep].subtitle}
                  />
                  <CardContent>
                    {activeStep !== 99 &&
                      <>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <Tabs
                            value={activeTab}
                            onChange={handleChange}
                          >
                            <Tab label="Lesson" />
                            <Tab label="Resources" />
                            {tasks.length > 0 && <Tab label="Task" />}
                          </Tabs>
                        </Box>
                        <TabPanel
                          value={activeTab}
                          index={0}
                        >
                          {lessonTitle !== '' && <div><Typography gutterBottom variant="subtitle1">{lessonTitle}</Typography></div>}
                          {lessonText}
                          <Stack>
                            {publications[activeStep].lessons && publications[activeStep].lessons.length > 1 &&
                              <PublicationPaging
                                stepsLength={publications[activeStep].lessons.length}
                                onStepChange={onLessonStepChange}
                                activeStep={activeStepLesson}
                              />
                            }
                          </Stack>
                        </TabPanel>
                        <TabPanel
                          value={activeTab}
                          index={1}
                        >
                          <CodeBlock codeString={codeString} />
                        </TabPanel>
                        <TabPanel
                          value={activeTab}
                          index={2}
                        >
                          {taskTitle !== '' && <div><Typography gutterBottom variant="subtitle1">{taskTitle}</Typography></div>}
                          {task}
                          {tasks && tasks.length > 1 &&
                            <PublicationPaging
                              stepsLength={tasks.length}
                              onStepChange={onTaskStepChange}
                              activeStep={activeStepTask}
                            />
                          }
                        </TabPanel>
                      </>
                    }
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
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