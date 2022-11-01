import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [{
  "id": 1,
  "first_name": "Barty",
  "last_name": "Luffman",
  "email": "bluffman0@tripod.com",
  "gender": "Male",
  "ip_address": "226.93.184.26"
}, {
  "id": 2,
  "first_name": "Therese",
  "last_name": "Walne",
  "email": "twalne1@trellian.com",
  "gender": "Female",
  "ip_address": "190.17.208.32"
}, {
  "id": 3,
  "first_name": "Zuzana",
  "last_name": "Shakesby",
  "email": "zshakesby2@icq.com",
  "gender": "Female",
  "ip_address": "221.202.29.193"
}, {
  "id": 4,
  "first_name": "Mylo",
  "last_name": "Askie",
  "email": "maskie3@gov.uk",
  "gender": "Male",
  "ip_address": "8.159.214.216"
}, {
  "id": 5,
  "first_name": "Starlene",
  "last_name": "Pepi",
  "email": "spepi4@vistaprint.com",
  "gender": "Female",
  "ip_address": "202.32.163.105"
}, {
  "id": 6,
  "first_name": "Benjamin",
  "last_name": "Thewless",
  "email": "bthewless5@mit.edu",
  "gender": "Male",
  "ip_address": "95.72.117.220"
}, {
  "id": 7,
  "first_name": "Harriet",
  "last_name": "Reason",
  "email": "hreason6@rambler.ru",
  "gender": "Female",
  "ip_address": "203.182.235.219"
}, {
  "id": 8,
  "first_name": "Kean",
  "last_name": "Guidi",
  "email": "kguidi7@altervista.org",
  "gender": "Male",
  "ip_address": "233.86.220.0"
}, {
  "id": 9,
  "first_name": "Helena",
  "last_name": "Bangley",
  "email": "hbangley8@unicef.org",
  "gender": "Female",
  "ip_address": "154.48.225.192"
}, {
  "id": 10,
  "first_name": "Terrijo",
  "last_name": "Sighard",
  "email": "tsighard9@nationalgeographic.com",
  "gender": "Female",
  "ip_address": "194.209.198.242"
}];