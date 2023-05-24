import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

import { ReportProgress } from 'src/sections/report/report-progress'

export const ReportUsers = (props) => {
  const { difference, positive = false, sx, value, name } = props;

  return (
    <Stack>
      {/* <Stack>
        <Card sx={sx}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography
                  color="text.secondary"
                  variant="overline"
                >
                  Users
                </Typography>
                <Typography variant="h4">
                  {value}
                </Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: 'success.main',
                  height: 56,
                  width: 56
                }}
              >
                <SvgIcon>
                  <UsersIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
            {difference && (
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={0.5}
                >
                  <SvgIcon
                    color={positive ? 'success' : 'error'}
                    fontSize="small"
                  >
                    {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </SvgIcon>
                  <Typography
                    color={positive ? 'success.main' : 'error.main'}
                    variant="body2"
                  >
                    {positive ? "+" : "-"} {difference}
                  </Typography>
                </Stack>
                <Typography
                  color="text.secondary"
                  variant="caption"
                >
                  Since last month
                </Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Stack> */}
      <Stack>
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
                  Progress of {name} 
                </Typography>
              <div><img className="progress-img" src="/assets/images/progress-2.png"/></div>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

ReportUsers.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
