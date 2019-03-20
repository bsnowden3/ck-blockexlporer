const express = require('express');
const router = express.Router();

// const rpc_client = require('../helpers/rpc');

var rpc = require('json-rpc2');
const port = 8383;
const host = 'localhost';
const rpcUser = 'ckrpc';
const rpcPassword = '843nOA1TtdWwUTULGBCVZUND/ideVZl6Dnqj5mqYBbU=';

const rpc_client = rpc.Client.$create(port, host, rpcUser, rpcPassword);

router.get('/:txid', (req, res, next) => {
  rpc_client.call('gettransaction', {id: req.params.txid},
    (err, rpcRes) => {
      if (err || rpcRes == null) {
        console.log(err);
        res.status(403).json({
          message: 'RPC error',
          error: err
        });
      } else {
        console.log(rpcRes);
        res.status(201).json({
          message: 'got tx with id=' + req.params.txid,
          tx: rpcRes
        });
      }
    });
  } 
);

// I think this only returns the un/confirmed txs for the given wallet
//  need to get more than this maybe?
router.get('', (req, res, next) => {
  rpc_client.call('listtransactions', {},
    (err, rpcRes) => {
      if (err || rpcRes == null) {
        console.log(err);
        res.status(403).json({
          message: 'RPC error', 
          error: err
        });
      } else {
        console.log(rpcRes);
        res.status(201).json({
          message: 'get confirmed and unconfirmed txs from wallet',
          txset: rpcRes
        })
      } 
    }  
  )
 
});


module.exports = router;
