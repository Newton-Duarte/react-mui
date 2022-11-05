import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"

export const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">09:30 am</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector color="primary" />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">10:00 am</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">10:30 am</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
