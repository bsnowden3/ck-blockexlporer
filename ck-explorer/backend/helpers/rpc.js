var rpc = require('json-rpc2');
const port = 8383;
const host = 'localhost';
const rpcUser = 'ckrpc';
const rpcPassword = '843nOA1TtdWwUTULGBCVZUND/ideVZl6Dnqj5mqYBbU=';

const rpc_client = rpc.Client.$create(port, host, rpcUser, rpcPassword);

exports.rpc_client =  rpc_client;