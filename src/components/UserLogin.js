import React, {useState} from "react";
import { Button, TextField, Grid, TableContainer, Paper, Table, TableRow, TableCell, TableBody, TableHead } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserLogin = () => {
    const [userId, setUserId] = useState("itsmehadi");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [savedUsers, setSavedUsers] = useState([]);

    return (
        <Grid style={{width: '80%', position: 'fixed', top: '10%', left: '15%'}} container spacing={20} alignItems="center">
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <AccountCircleIcon fontSize="large"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="User ID" value={userId} onChange={e => setUserId(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Age" value={age} onChange={e => setAge(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={() => setSavedUsers([...savedUsers, {userId, password, age}])}>Save</Button>
                </Grid>
            </Grid>
            <Grid item container spacing={2}>
                <TableContainer component={Paper}>
                    <Table aria-label="user table">
                        <TableHead>
                            <TableRow> 
                                <TableCell>User ID</TableCell>
                                <TableCell align="right">Password</TableCell>
                                <TableCell align="right">Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {savedUsers.map((user, index) => (
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index}>
                                    <TableCell component="th" scope="row">
                                        {user.userId}
                                    </TableCell>
                                    <TableCell align="right">{user.password}</TableCell>
                                    <TableCell align="right">{user.age}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default UserLogin;