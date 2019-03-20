const express = require('express');
const router = express.Router();

// const rpc_client = require('../helpers/rpc');

var rpc = require('json-rpc2');
const port = 8383;
const host = 'localhost';
const rpcUser = 'ckrpc';
const rpcPassword = '843nOA1TtdWwUTULGBCVZUND/ideVZl6Dnqj5mqYBbU=';

const rpc_client = rpc.Client.$create(port, host, rpcUser, rpcPassword);

router.get('/height/:blockheight', (req, res, next) => {
  let height = Number(req.params.blockheight);
  rpc_client.call('getblockbyheight', {height: height},
    (err, rpcRes) => {
      if (err || rpcRes == null) {
        console.log(err);
        res.status(403).json({
          message: 'RPC error',
          error: err
        });
      }
      else {
        console.log(rpcRes);
        res.status(201).json({
          message: 'got block at height=' + req.params.blockheight,
          block: rpcRes
        });
      }
    }
  );
});

router.get('/id/:blockid', (req, res, next) => {
  rpc_client.call('getblock', {id: req.params.blockid.toString()},
    (err, rpcRes) => {
      if (err || rpcRes == null) {
        console.log(err);
        res.status(403).json({
          message: 'RPC error',
          error: err
        });
      }
      else {
        console.log(rpcRes);
        res.status(201).json({
          message: 'got block with id=' + req.params.blockid,
          block: rpcRes
        });
      }
    }
  );
});


module.exports = router;