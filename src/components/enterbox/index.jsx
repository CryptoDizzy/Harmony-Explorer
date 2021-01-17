import React, { useState, Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactDOM from "react-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //   textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {

   textAlign: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const { Harmony } = require("@harmony-js/core");
  const {
    HarmonyAddress,
    randomBytes,
    toBech32,
  } = require("@harmony-js/crypto");
  const {
    ChainID,
    ChainType,
    hexToNumber,
    numberToHex,
    fromWei,
    Units,
    Unit,
    isKeyString,
    isBech32Address,
  } = require("@harmony-js/utils");

  const hmy = new Harmony("https://api.s0.t.hmny.io", {
    chainType: ChainType.Harmony,
    chainId: ChainID.HmyMainnet,
  });
  const [balance, setBalance] = useState(4);
  const [balance2, setBalance2] = useState(0);
  const [oneaddress, setAddress] = useState(
    "one10u6j95uun0guktz63le342feufflqzt8mf7gwa"
  );
  const [validAdd, setValidAdd] = useState(0);
  const [data, setData] = useState(0);
  const [print, setPrint] = useState(false);
  // const [valid, setPrint] = useState(false);

  let etherAmount;
  function getData(val) {
    setPrint(false);
    if (isBech32Address(val.target.value, 40)) {
      setValidAdd(true);
      setAddress(val.target.value);
    } else {
      setValidAdd(false);
    }
    console.log(oneaddress);
    setAddress(val.target.value);
    balbal(oneaddress);
  }
  function balbal(oneaddressval) {
    if (isBech32Address(oneaddressval, 40)) {
      hmy.blockchain.getBalance({ address: oneaddressval }).then((response) => {
        setBalance(fromWei(hexToNumber(response.result), Units.one));
      });
      console.log(oneaddressval);
    }
  }

  balbal(oneaddress);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
         <div><h1 className={classes.title} >Harmony Explorar</h1></div> 
            <Paper className={classes.paper}>
              {/* <input type="text" onChange={getData} /> */}
              <TextField
                id="filled-full-width"
                label="Enter"
                onChange={getData}
                style={{ margin: 8 }}
                placeholder="One Address"
                helperText=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Paper>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setPrint(true)}
            >
              Search
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              
              {/* <Grid item xs={6}>
                <Paper className={classes.paper}>Balance</Paper>
              </Grid> */}
              <Grid item xs>
                <Paper className={classes.title}>
                  {print ? <h1>{balance}</h1> : <h1>0</h1>}
                  {print ? <h1>{oneaddress}</h1> : <h1>0</h1>}
                </Paper>
              </Grid>
              {/* <Grid item xs>
                <Paper className={classes.paper}></Paper>
              </Grid> */}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
