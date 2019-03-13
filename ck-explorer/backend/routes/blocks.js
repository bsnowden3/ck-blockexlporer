const express = require('express');

const router = express.Router();

router.get('/:blockheight', (req, res, next) => {
  rpc_client.call('getblockbyheight', {height: req.params.blockheight},
    (err, rpcRes) => {
      if (err) {
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

router.get('/:blockid', (req, res, next) => {
  rpc_client.call('getblock', {height: req.params.blockid},
    (err, rpcRes) => {
      if (err) {
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