"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var bignumber_js_1 = require("bignumber.js");
// Paths.
exports.ROOT_PATH = path.join(__dirname, '..');
exports.SRC_PATH = path.join(exports.ROOT_PATH, 'src');
exports.BIN_OUTPUT_PATH = path.join(exports.ROOT_PATH, 'bin_output');
exports.CHAIN_FILE = path.join(exports.ROOT_PATH, "genesis.json");
exports.CONTRACT_FILE = path.join(exports.ROOT_PATH, "contracts.json");
exports.SOL_ETH_SRC = path.join(exports.SRC_PATH, "EthereumRuntime.sol");
exports.SOL_ETH_BIN = path.join(exports.BIN_OUTPUT_PATH, "EthereumRuntime.bin-runtime");
exports.EVM_EXECUTE_SIG = '1f6a1eb9';
exports.EVM_EXECUTE_TXINPUT_SIG = 'fb9cc4af';
exports.CONTRACT_TEST_SIG = 'f8a8fd6d';
exports.DEFAULT_CALLER = new bignumber_js_1.default('1234567812345678123456781234567812345678', 16);
exports.DEFAULT_CONTRACT_ADDRESS = new bignumber_js_1.default('0101010101010101010101010101010101010101', 16);
// Errors
exports.NO_ERROR = 0;
exports.ERROR_STACK_OVERFLOW = 0x01;
exports.ERROR_STACK_UNDERFLOW = 0x02;
exports.ERROR_INDEX_OOB = 0x03;
exports.ERROR_INVALID_OPCODE = 0x04;
exports.ERROR_INVALID_JUMP_DESTINATION = 0x05;
exports.ERROR_INSTRUCTION_NOT_SUPPORTED = 0x06;
exports.ERROR_STATE_REVERTED = 0x07;
exports.ERROR_INSUFFICIENT_FUNDS = 0x08;
// Ethereum opcodes
// Stop and arithmetic ops
exports.STOP = '00';
exports.ADD = '01';
exports.MUL = '02';
exports.SUB = '03';
exports.DIV = '04';
exports.SDIV = '05';
exports.MOD = '06';
exports.SMOD = '07';
exports.ADDMOD = '08';
exports.MULMOD = '09';
exports.EXP = '0a';
exports.SIGNEXTEND = '0b';
// Comparison & bitwise logic
exports.LT = '10';
exports.GT = '11';
exports.SLT = '12';
exports.SGT = '13';
exports.EQ = '14';
exports.ISZERO = '15';
exports.AND = '16';
exports.OR = '17';
exports.XOR = '18';
exports.NOT = '19';
exports.BYTE = '1a';
exports.SHL = '1b';
exports.SHR = '1c';
exports.SAR = '1d';
// SHA3
exports.SHA3 = '20';
// Environmental information
exports.ADDRESS = '30';
exports.BALANCE = '31';
exports.ORIGIN = '32';
exports.CALLER = '33';
exports.CALLVALUE = '34';
exports.CALLDATALOAD = '35';
exports.CALLDATASIZE = '36';
exports.CALLDATACOPY = '37';
exports.CODESIZE = '38';
exports.CODECOPY = '39';
exports.GASPRICE = '3a';
exports.EXTCODESIZE = '3b';
exports.EXTCODECOPY = '3c';
exports.RETURNDATASIZE = '3d';
exports.RETURNDATACOPY = '3e';
// Block information
exports.BLOCKHASH = '40';
exports.COINBASE = '41';
exports.TIMESTAMP = '42';
exports.NUMBER = '43';
exports.DIFFICULTY = '44';
exports.GASLIMIT = '45';
// Stack, Memory, Storage and Flow Operations
exports.POP = '50';
exports.MLOAD = '51';
exports.MSTORE = '52';
exports.MSTORE8 = '53';
exports.SLOAD = '54';
exports.SSTORE = '55';
exports.JUMP = '56';
exports.JUMPI = '57';
exports.PC = '58';
exports.MSIZE = '59';
exports.GAS = '5a';
exports.JUMPDEST = '5b';
// Push operations
exports.PUSH1 = '60';
exports.PUSH2 = '61';
exports.PUSH3 = '62';
exports.PUSH4 = '63';
exports.PUSH5 = '64';
exports.PUSH6 = '65';
exports.PUSH7 = '66';
exports.PUSH8 = '67';
exports.PUSH9 = '68';
exports.PUSH10 = '69';
exports.PUSH11 = '6a';
exports.PUSH12 = '6b';
exports.PUSH13 = '6c';
exports.PUSH14 = '6d';
exports.PUSH15 = '6e';
exports.PUSH16 = '6f';
exports.PUSH17 = '70';
exports.PUSH18 = '71';
exports.PUSH19 = '72';
exports.PUSH20 = '73';
exports.PUSH21 = '74';
exports.PUSH22 = '75';
exports.PUSH23 = '76';
exports.PUSH24 = '77';
exports.PUSH25 = '78';
exports.PUSH26 = '79';
exports.PUSH27 = '7a';
exports.PUSH28 = '7b';
exports.PUSH29 = '7c';
exports.PUSH30 = '7d';
exports.PUSH31 = '7e';
exports.PUSH32 = '7f';
// Duplication operations
exports.DUP1 = '80';
exports.DUP2 = '81';
exports.DUP3 = '82';
exports.DUP4 = '83';
exports.DUP5 = '84';
exports.DUP6 = '85';
exports.DUP7 = '86';
exports.DUP8 = '87';
exports.DUP9 = '88';
exports.DUP10 = '89';
exports.DUP11 = '8a';
exports.DUP12 = '8b';
exports.DUP13 = '8c';
exports.DUP14 = '8d';
exports.DUP15 = '8e';
exports.DUP16 = '8f';
// Exchange operations
exports.SWAP1 = '90';
exports.SWAP2 = '91';
exports.SWAP3 = '92';
exports.SWAP4 = '93';
exports.SWAP5 = '94';
exports.SWAP6 = '95';
exports.SWAP7 = '96';
exports.SWAP8 = '97';
exports.SWAP9 = '98';
exports.SWAP10 = '99';
exports.SWAP11 = '9a';
exports.SWAP12 = '9b';
exports.SWAP13 = '9c';
exports.SWAP14 = '9d';
exports.SWAP15 = '9e';
exports.SWAP16 = '9f';
// Logging operations
exports.LOG0 = 'a0';
exports.LOG1 = 'a1';
exports.LOG2 = 'a2';
exports.LOG3 = 'a3';
exports.LOG4 = 'a4';
// System operations
exports.CREATE = 'f0';
exports.CALL = 'f1';
exports.CALLCODE = 'f2';
exports.RETURN = 'f3';
exports.DELEGATECALL = 'f4';
exports.STATICCALL = 'fa';
exports.REVERT = 'fd';
exports.INVALID = 'fe';
exports.SELFDESTRUCT = 'ff';