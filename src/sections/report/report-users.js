import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography, Table, TableRow, TableCell, TableHead, TableBody } from '@mui/material';

import { ReportProgress } from 'src/sections/report/report-progress'
import { SeverityPill } from 'src/components/severity-pill';

import { courses } from 'src/utils/storage'

const statusTextMap = {
  0: 'Not Started',
  1: 'Started',
  2: 'Finished',
};
const statusMap = {
  0: 'error',
  1: 'warning',
  2: 'success',
};

export const ReportUsers = (props) => {
  const { difference, positive = false, sx, value, userReport } = props;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {!userReport &&
        <Typography 
        variant="h3"
        color="#eaeaea"
        textAlign={'center'}
        >
          Select user
        </Typography>
      }
      {!!userReport &&
        <Stack width="100%">
          <Card sx={sx}>
            <CardContent>
              <Stack
                // alignItems="flex-start"
                // direction="row"
                // justifyContent="space-between"
                textAlign={"center"}
                spacing={4}
              >
                <Typography
                  color="text.secondary"
                  variant="h4"
                >
                  Progress of {userReport.name}
                </Typography>
                <div><img className="progress-img" src={`/assets/images/progress-${userReport.progress}.png`} /></div>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      }
      {!!userReport && <Stack width="100%">
        <Card sx={sx}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Course
                  </TableCell>
                  <TableCell>
                    Status
                  </TableCell>
                  <TableCell>
                    Start date
                  </TableCell>
                  <TableCell>
                    End date
                  </TableCell>
                  <TableCell>
                    Duration
                  </TableCell>
                  <TableCell>
                    Course mark
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userReport.courses.map((c) => {
                  // const isSelected = selected.includes(c.id)
                  // const createdAt = format(c.createdAt, 'dd/MM/yyyy')
                  const course = courses.find(o => o.id === c.id) || courses[0]

                  return (
                    <TableRow
                      hover
                      key={course.id}
                    // selected={isSelected}
                    >

                      <TableCell>
                        {course.title}
                      </TableCell>
                      <TableCell>
                        {/* {c.status} */}
                        <SeverityPill color={statusMap[c.status]}>
                          {statusTextMap[c.status]}
                        </SeverityPill>
                      </TableCell>
                      <TableCell>
                        {c.start}
                      </TableCell>
                      <TableCell>
                        {c.end}
                      </TableCell>
                      <TableCell>
                        {c.duration}
                      </TableCell>
                      <TableCell>
                        {c.mark}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Stack>}
    </Stack>
  );
};

ReportUsers.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
