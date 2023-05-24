import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography, Table, TableRow, TableCell, TableHead, TableBody } from '@mui/material';

import { SeverityPill } from 'src/components/severity-pill';

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

export const ReportCourses = (props) => {
  const { difference, positive = false, sx, report } = props;

  return (
    <Stack>
      {!report &&
        <Typography 
        variant="h3"
        color="#eaeaea"
        textAlign={'center'}
        >
          Select course
        </Typography>
      }
      {!!report && <Stack width="100%">
        <Card sx={sx}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    User
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
                {report.users.map((c) => {
                  // const isSelected = selected.includes(c.id)
                  // const createdAt = format(c.createdAt, 'dd/MM/yyyy')
                  //const course = courses.find(o => o.id === c.id) || courses[0]

                  return (
                    <TableRow
                      hover
                      key={c.id}
                    // selected={isSelected}
                    >

                      <TableCell>
                        {c.name}
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
    // <Card sx={sx}>
    //   <CardContent>
    //     <Stack
    //       alignItems="flex-start"
    //       direction="row"
    //       justifyContent="space-between"
    //       spacing={3}
    //     >
    //       <Stack spacing={1}>
    //         <Typography
    //           color="text.secondary"
    //           variant="overline"
    //         >
    //           Courses
    //         </Typography>
    //         <Typography variant="h4">
    //           {value}
    //         </Typography>
    //       </Stack>
    //       <Avatar
    //         sx={{
    //           backgroundColor: 'primary.main',
    //           height: 56,
    //           width: 56
    //         }}
    //       >
    //         <SvgIcon>
    //           <ListBulletIcon />
    //         </SvgIcon>
    //       </Avatar>
    //     </Stack>
    //     {difference && (
    //       <Stack
    //         alignItems="center"
    //         direction="row"
    //         spacing={2}
    //         sx={{ mt: 2 }}
    //       >
    //         <Stack
    //           alignItems="center"
    //           direction="row"
    //           spacing={0.5}
    //         >
    //           <SvgIcon
    //             color={positive ? 'success' : 'error'}
    //             fontSize="small"
    //           >
    //             {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
    //           </SvgIcon>
    //           <Typography
    //             color={positive ? 'success.main' : 'error.main'}
    //             variant="body2"
    //           >
    //             {positive ? "+" : "-"} {difference}
    //           </Typography>
    //         </Stack>
    //         <Typography
    //           color="text.secondary"
    //           variant="caption"
    //         >
    //           Since last month
    //         </Typography>
    //       </Stack>
    //     )}
    //   </CardContent>
    // </Card>
  );
};

ReportCourses.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
