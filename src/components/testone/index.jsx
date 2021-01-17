import React, { useState } from "react";
function Testing(){
  const { Harmony } = require('@harmony-js/core');
  const {
    ChainID,
    ChainType,
    hexToNumber,
    numberToHex,
    fromWei,
    Units,
    Unit,
  } = require('@harmony-js/utils');
  
  const hmy = new Harmony(
      'https://api.s0.t.hmny.io',
      {
          chainType: ChainType.Harmony,
          chainId: ChainID.HmyMainnet,
      },
  );
  const [balance, setBalance] = useState(0);

  // hmy.blockchain.getBalance({ address: 'one1wx6p8kjucu5llqz79h9pmn0qf55772m2d2xt26' }).then((response) => {
  //     // console.log('balance in ONEs: ' + fromWei(hexToNumber(response.result), Units.one));
  //     // var balance = fromWei(hexToNumber(response.result));
  //     setBalance(fromWei(hexToNumber(response.result), Units.one))
  //   });
  hmy.blockchain
  .getBalance({ address: 'one1ky0lkdtt0qhh4w586xz7qu9uekr368ffrrtpk6' })
  .then((response) => {
    console.log('balance in ONEs: ' + fromWei(hexToNumber(response.result), Units.one));
  });
    return(<h1>ff</h1>)
}

export default Testing;
