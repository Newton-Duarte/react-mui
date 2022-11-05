import { useState } from "react";
import { Stack } from "@mui/system"
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers"
import { Box, TextField } from "@mui/material";
import { DateRangePicker } from "@mui/lab";

export const MuiPickers = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  console.log({ selectedDate });
  console.log({ selectedTime: selectedTime?.toLocaleTimeString() });
  console.log({ selectedDateTime: selectedDateTime });

  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />

      <TimePicker
        label="Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
      />

      <DateTimePicker
        label="Date Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => setSelectedDateTime(newValue)}
      />

      {/* DateRangePicker was moved to @mui/x-date-pickers-pro */}
      {/* <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={new Date()}
        onChange={(newValue: any) => console.log(newValue)}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>to</Box>
            <TextField {...endProps} />
          </>
        )}
      /> */}
    </Stack>
  )
}
