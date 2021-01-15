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
      'https://api.s0.b.hmny.io/',
      {
          chainType: ChainType.Harmony,
          chainId: ChainID.HmyTestnet,
      },
  );
  const [balance, setBalance] = useState(0);

  hmy.blockchain.getBalance({ address: 'one103q7qe5t2505lypvltkqtddaef5tzfxwsse4z7' }).then((response) => {
      // console.log('balance in ONEs: ' + fromWei(hexToNumber(response.result), Units.one));
      // var balance = fromWei(hexToNumber(response.result));
      setBalance(fromWei(hexToNumber(response.result), Units.one))
    });
    return(<h1>{balance}</h1>)
}

export default Testing;
