import PropTypes from 'prop-types'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Box, Card, CardContent, Divider, Stack, SvgIcon, Typography, LinearProgress, Button } from '@mui/material'

import { useRouter } from 'next/navigation'

export const CourseCard = (props) => {
  const { course } = props
  const router = useRouter()


  const getCourseBtnLabel = () => {
    if (course.progress > 0 && course.progress < 100)
      return "Continue"

    return "Start course"
  }

  const handleOpenCourse = (id) => () => {
    router.push('/publication?courseId='+id);
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 2
          }}
        >
          <div className="course-icon">{course.category}</div>
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {course.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {course.description}
        </Typography>
      </CardContent>
      <Divider />
      <LinearProgress
        variant="determinate"
        value={course.progress}
      />
      <Box
        sx={{
          textAlign: 'right'
          // display: 'flex',
          // justifyContent: 'center',
          // pb: 2
        }}
      >
        <Button
          variant="text"
          onClick={handleOpenCourse(course.id)}
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
        >
          {getCourseBtnLabel()}
        </Button>
      </Box>
    </Card>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired
}
