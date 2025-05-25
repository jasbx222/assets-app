'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export function Notifications(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="ادارة الاشعارات" title="الاشعارات" />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">الايميل</Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="تحديث جديد" />
                  <FormControlLabel control={<Checkbox />} label=" اشعار جديد" />
                </FormGroup>
              </Stack>
            </Grid>
            <Grid md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">رقم الهاتف</Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="الايميل" />
                  <FormControlLabel control={<Checkbox />} label="تحديث " />
                </FormGroup>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">حفظ التعديلات </Button>
        </CardActions>
      </Card>
    </form>
  );
}
