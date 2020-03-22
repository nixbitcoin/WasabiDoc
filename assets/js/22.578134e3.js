(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{237:function(e,t,a){"use strict";a.r(t);var i=a(17),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"bitcoin-in-general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-in-general"}},[e._v("#")]),e._v(" Bitcoin in general")]),e._v(" "),a("details",{attrs:{id:"address"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#address","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Address")])]),e._v(" "),a("p",[e._v("A Bitcoin invoice address commits to a public key or script which defines who can spend the coin.\nIt is specified in the output of a transaction, and it should only be used once.\nWasabi uses the bech32 format to encode native segregated witness addresses.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses"}},[e._v("Bitcoin addresses")])],1)]),a("details",{attrs:{id:"bitcoin-improvement-proposal-bip"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-improvement-proposal-bip","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Bitcoin Improvement Proposal (BIP)")])]),e._v(" "),a("p",[e._v("Bitcoin Improvement Proposal.\nA design document for introducing features or information to Bitcoin.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html"}},[e._v("Wasabi Supported BIPs")])],1)]),a("details",{attrs:{id:"block"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#block","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Block")])]),e._v(" "),a("p",[e._v("A block is a batch of valid Bitcoin transactions and its hash must be a value below a certain difficulty target to prove the work of the miner.\nEach block references the hash of the previous block, thus creating a hash chain of blocks.\nOn average a new block is mined every 10 minutes.")])]),a("details",{attrs:{id:"blockchain"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Blockchain")])]),e._v(" "),a("p",[e._v("The blockchain is the one chain of valid Bitcoin blocks with the most accumulated proof of work.\nIt is an append-only data structure with new blocks being added on average every 10 minutes.\nBecause of its uniquely verifiable and global consensus, it is a revolutionary standard for time, thus some call it timechain.")])]),a("details",{attrs:{id:"change"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#change","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Change")])]),e._v(" "),a("p",[e._v("In a spending transaction where the provided input coins are larger than the value sent to the destination address, then the leftover change is sent to a new address of the same wallet.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/ChangeCoins.html"}},[e._v("Change coins")])],1)]),a("details",{attrs:{id:"coinbase"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#coinbase","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Coinbase")])]),e._v(" "),a("p",[e._v("A special field used as the sole input for coinbase transactions.\nThe coinbase allows claiming the block reward and provides up to 100 bytes for arbitrary data.")])]),a("details",{attrs:{id:"coinbase-transaction"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#coinbase-transaction","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Coinbase Transaction")])]),e._v(" "),a("p",[e._v("The first transaction in a block.\nAlways created by a miner, it includes a single coinbase.")])]),a("details",{attrs:{id:"cold-storage"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#cold-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Cold Storage")])]),e._v(" "),a("p",[e._v("Refers to keeping a reserve of important Bitcoin secrets offline.\nCold storage is achieved when Bitcoin private keys are created and stored in a secure offline environment.\nCold storage is important for anyone with bitcoin holdings.\nOnline computers are vulnerable to hackers and should not be used to store a significant amount of bitcoin.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/ColdWasabi.html"}},[e._v("Cold Wasabi Protocol")])],1)]),a("details",{attrs:{id:"confirmations"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#confirmations","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Confirmations")])]),e._v(" "),a("p",[e._v("Once a transaction is included in a block, it has one confirmation.\nAs soon as another block is mined on the same blockchain, the transaction has two confirmations, and so on.\nSix or more confirmations is considered sufficient proof that a transaction cannot be reversed.")])]),a("details",{attrs:{id:"consensus"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#consensus","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Consensus")])]),e._v(" "),a("p",[e._v("When several nodes, usually most nodes on the network, all have the same blocks in their locally-validated best blockchain.")])]),a("details",{attrs:{id:"consensus-rules"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#consensus-rules","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Consensus Rules")])]),e._v(" "),a("p",[e._v("The block validation rules that full nodes follow to stay in consensus with other nodes.")])]),a("details",{attrs:{id:"custodial-wallet-or-mixer"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#custodial-wallet-or-mixer","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Custodial (Wallet or Mixer)")])]),e._v(" "),a("p",[e._v("A custodial wallet is any wallet where the private keys of your coins are in the hands of a third party.\nIn essence, they operate similarly to traditional banks.")]),e._v(" "),a("p",[e._v("A custodial mixer needs you to send your bitcoins to a central part before mixing.\nThis means that you are at risk of being stolen from.")])]),a("details",{attrs:{id:"difficulty"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#difficulty","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Difficulty")])]),e._v(" "),a("p",[e._v("A network-wide setting that controls how much computation is required to produce a proof of work.")])]),a("details",{attrs:{id:"difficulty-retargeting-difficulty-adjustment"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#difficulty-retargeting-difficulty-adjustment","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Difficulty Retargeting (Difficulty Adjustment)")])]),e._v(" "),a("p",[e._v("A network-wide recalculation of the difficulty that occurs once every 2,016 blocks and considers the hashing power of the previous 2,016 blocks.")])]),a("details",{attrs:{id:"difficulty-target"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#difficulty-target","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Difficulty Target")])]),e._v(" "),a("p",[e._v("A difficulty at which all the computation in the network will find blocks approximately every 10 minutes.\nIt specifies the numeric value the hash of a block must not be above to be considered a valid block.")])]),a("details",{attrs:{id:"fork"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#fork","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Fork")])]),e._v(" "),a("p",[e._v("Fork, also known as accidental fork, occurs when two or more blocks have the same block height, forking the blockchain.\nTypically occurs when two or more miners find blocks at nearly the same time.\nCan also happen as part of an attack.")])]),a("details",{attrs:{id:"fungibility"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#fungibility","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Fungibility")])]),e._v(" "),a("p",[e._v("Fungibility is a desirable property of Bitcoin UTXOs that are indistinguishable from each other.\nRead more: "),a("RouterLink",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#attempt-to-destroy-fungibility"}},[e._v("Transaction surveillance companies attempting to destroy fungibility")])],1)]),a("details",{attrs:{id:"genesis-block"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-block","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Genesis Block")])]),e._v(" "),a("p",[e._v("The first block in the blockchain, used to initialize the cryptocurrency.")])]),a("details",{attrs:{id:"hard-fork"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hard-fork","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Hard Fork")])]),e._v(" "),a("p",[e._v("Hard fork, also known as hard-forking change, is a permanent divergence in the blockchain, it occurs when non-upgraded nodes can not validate blocks created by upgraded nodes that follow newer consensus rules.\nThe upgraded nodes break the rules of the legacy nodes.\nNot to be confused with fork, soft fork, software fork or Git fork.")])]),a("details",{attrs:{id:"hardware-wallet-hww"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wallet-hww","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Hardware Wallet (HWW)")])]),e._v(" "),a("p",[e._v("A hardware wallet is a special type of Bitcoin wallet which generates and stores the user's private keys on a dedicated hardware device.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#hardware-wallet"}},[e._v("Hardware Wallet FAQs")])],1)]),a("details",{attrs:{id:"hash"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hash","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Hash")])]),e._v(" "),a("p",[e._v("A cryptographic hash function takes any input of arbitrary size [the message] and computes a value of fixed size that is unique to the input, which is called a hash or a digest.\nIf one bit of the input changes, the output will be completely different [avalanche effect].\nAnd there are no two messages that result in the same hash [collision resistance].\nThe only way to get any given input, is by computing all possible inputs, it is a one-way function [pre-image resistance].\nBitcoin uses the SHA256 in many parts of the protocol.")])]),a("details",{attrs:{id:"hd-protocol"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hd-protocol","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("HD Protocol")])]),e._v(" "),a("p",[e._v("The Hierarchical Deterministic (HD) key creation and transfer protocol (BIP32), which allows creating child keys from parent keys in a hierarchy.")])]),a("details",{attrs:{id:"hd-wallet"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hd-wallet","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("HD Wallet")])]),e._v(" "),a("p",[e._v("Wallets using the Hierarchical Deterministic (HD Protocol) key creation and transfer protocol (BIP32).")])]),a("details",{attrs:{id:"hot-wallet"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hot-wallet","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Hot Wallet")])]),e._v(" "),a("p",[e._v("A hot wallet is a software wallet that runs on a device which is connected to the Internet.\nWasabi is a hot wallet by default.")])]),a("details",{attrs:{id:"input"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#input","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Input")])]),e._v(" "),a("p",[e._v("Input, transaction input, or TxIn is an input in a Bitcoin transaction which contains two fields: a unique transaction hash and an index number, which references one utxo of a previous transaction which is spent in this transaction.")])]),a("details",{attrs:{id:"lightning-network-ln"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-ln","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Lightning Network (LN)")])]),e._v(" "),a("p",[e._v("Lightning Network is a proposed implementation of Hashed Timelock Contracts (HTLCs) with bi-directional payment channels which allows payments to be securely routed across multiple peer-to-peer payment channels.\nThis allows the formation of a network where any peer on the network can pay any other peer even if they don't directly have a channel open between each other.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/10Commandments.html#_10-use-lightning"}},[e._v("Use Lightning")])],1)]),a("details",{attrs:{id:"mainnet"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#mainnet","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Mainnet")])]),e._v(" "),a("p",[e._v("The original and main network for Bitcoin transactions, where satoshis have real economic value.")])]),a("details",{attrs:{id:"mempool"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#mempool","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Mempool")])]),e._v(" "),a("p",[e._v("The Bitcoin Mempool (memory pool) is a collection of all transaction data in a block that have been verified by Bitcoin nodes, but are not yet confirmed.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-does-wasabi-know-of-incoming-transactions-to-the-mempool"}},[e._v("How does Wasabi know of incoming transactions to the mempool?")])],1)]),a("details",{attrs:{id:"merkle-root"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#merkle-root","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Merkle Root")])]),e._v(" "),a("p",[e._v("The root node of a merkle tree, a descendant of all the hashed pairs in the tree.\nBlock headers must include a valid merkle root descended from all transactions in that block.")])]),a("details",{attrs:{id:"merkle-tree"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#merkle-tree","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Merkle Tree")])]),e._v(" "),a("p",[e._v("A tree constructed by hashing paired data (the leaves), then pairing and hashing the results until a single hash remains, the merkle root.\nIn Bitcoin, the leaves are almost always transactions from a single block.")])]),a("details",{attrs:{id:"miner"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#miner","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Miner")])]),e._v(" "),a("p",[e._v("A network node that finds valid proof of work for new blocks, by repeated hashing.")])]),a("details",{attrs:{id:"multisignature-multisig"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#multisignature-multisig","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Multisignature (multisig)")])]),e._v(" "),a("p",[e._v("Multisignature (m-of-n multisig) refers to requiring more than one key to authorize a Bitcoin transaction.\nOnly with "),a("code",[e._v("m")]),e._v(" signatures of "),a("code",[e._v("n")]),e._v(" public keys can the bitcoin be spent.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#can-i-generate-a-multi-signature-script"}},[e._v("Can I generate a multi signature script?")])],1)]),a("details",{attrs:{id:"nonce"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#nonce","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Nonce")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("nonce")]),e._v(" in a Bitcoin block is a 32-bit (4-byte) field whose value is set so that the hash of the block will contain a run of leading zeros.\nThe rest of the fields may not be changed, as they have a defined meaning.")])]),a("details",{attrs:{id:"non-custodial-wallet-or-mixer"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#non-custodial-wallet-or-mixer","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Non-Custodial (Wallet or Mixer)")])]),e._v(" "),a("p",[e._v("A non-custodial wallet is any wallet where the private keys of your coins are in your hands.\nNon-custodial wallets give you full control over your bitcoins.")]),e._v(" "),a("p",[e._v("A non-custodial mixer like Wasabi eliminates the risk that the coordinator can steal your bitcoin.\nEach participant verifies the proposed transaction, and signs it only if it is valid.\nThis signature is only valid for this transaction, so any attempt to change the transaction after the fact is futile.\nThe funds will always be in a Bitcoin address that you control.")])]),a("details",{attrs:{id:"output"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Output")])]),e._v(" "),a("p",[e._v("Output, transaction output, or TxOut is an output in a Bitcoin transaction which contains two fields: a value field for transferring zero or more satoshis and a pubkey script for indicating what conditions must be fulfilled for those satoshis to be further spent.")])]),a("details",{attrs:{id:"off-chain-transaction"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#off-chain-transaction","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Off-chain Transaction")])]),e._v(" "),a("p",[e._v("An off-chain transaction is the movement of value outside of the blockchain.\nWhile an on-chain transaction - usually referred to as simply a transaction - modifies the blockchain and depends on the blockchain to determine its validity.\nAn off-chain transaction relies on other methods to record and validate the transaction.")])]),a("details",{attrs:{id:"p2pkh"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#p2pkh","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("P2PKH")])]),e._v(" "),a("p",[e._v("Many transactions processed on the Bitcoin network spend outputs locked with a Pay-to-Public-Key-Hash or "),a("code",[e._v("P2PKH")]),e._v(" script.\nThese outputs contain a locking script that locks the output to a public key hash, more commonly known as a Bitcoin address.\nAn output locked by a P2PKH script can be unlocked (spent) by presenting a public key and a digital signature created by the corresponding private key.")])]),a("details",{attrs:{id:"p2sh"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#p2sh","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("P2SH")])]),e._v(" "),a("p",[e._v("P2SH or Pay-to-Script-Hash is a type of transaction that simplifies the use of complex transaction scripts.\nWith P2SH the complex script that details the spending conditions (redeem script) is committed to with a hash in the locking script.")])]),a("details",{attrs:{id:"p2wpkh"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#p2wpkh","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("P2WPKH")])]),e._v(" "),a("p",[e._v("The signature of a P2WPKH (Pay-to-Witness-Public-Key-Hash) contains the same information as a P2PKH spending, but is located in the witness field instead of the scriptSig field.")])]),a("details",{attrs:{id:"paper-wallet"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#paper-wallet","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Paper Wallet")])]),e._v(" "),a("p",[e._v("In the most specific sense, a paper wallet is a document containing all the secrets to spend a Bitcoin UTXO.\nIt is a way of storing bitcoin offline as a physical document.")])]),a("details",{attrs:{id:"partially-signed-bitcoin-transaction-psbt"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#partially-signed-bitcoin-transaction-psbt","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Partially Signed Bitcoin Transaction (PSBT)")])]),e._v(" "),a("p",[e._v("PSBT is a binary transaction format which contains the information necessary for a signer to produce signatures for the transaction and holds the signatures for an input while the input does not have a complete set of signatures.\nThe signer can be offline as all necessary information will be provided in the transaction.\nRead more: "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 174 Partially Signed Bitcoin Transaction Format"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"payment-channels"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-channels","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Payment Channels")])]),e._v(" "),a("p",[e._v("A payment channel is class of techniques designed to allow users to make multiple Bitcoin transactions without committing all of the transactions to the Bitcoin blockchain.\nIn a typical payment channel, only two transactions are added to the blockchain but an unlimited or nearly unlimited number of payments can be made between the participants.")])]),a("details",{attrs:{id:"pay-to-witness-public-key-hash-p2wpkh"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#pay-to-witness-public-key-hash-p2wpkh","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Pay-to-Witness-Public-Key-Hash (P2WPKH)")])]),e._v(" "),a("p",[e._v("The signature of a P2WPKH contains the same information as a Pay-to-Public-Key-Hash (P2PKH) spending, but is located in the witness field instead of the scriptSig field.\nThe scriptPubKey is also modified.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-84-derivation-scheme-for-p2wpkh-based-accounts"}},[e._v("BIP 84 derivation scheme for P2WPKH based accounts")])],1)]),a("details",{attrs:{id:"public-key"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#public-key","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Public Key")])]),e._v(" "),a("p",[e._v("A public key is calculated by multiplying the private key to the generator point of an elliptic curve.\nGiven only the public key, the private key cannot be calculated.\nAnyone can encrypt a message using a public key.\nThis encrypted message (cyphertext) can only be decrypted through the related private key.\nGiven a public key and a signature over a message, anyone can verify that the signer had the private key and the message.\nIn Bitcoin, the public key is the pseudonymous identity of the owner of a coin.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses"}},[e._v("Bitcoin private keys")])],1)]),a("details",{attrs:{id:"private-key"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#private-key","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Private Key")])]),e._v(" "),a("p",[e._v("A private key is a large number that must be chosen at random, it is thus a very secure password and should be kept secret.\nWith knowledge of this number, anyone can easily compute the public key, and a signature over any message.\nIt can also be used to decrypt any message that was encrypted to the public key corresponding to the private key.\nIn Bitcoin, a signature over a valid transaction message gives the right to spend a coin, thus knowledge of the private key corresponds to ownership of the bitcoin.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses"}},[e._v("Bitcoin private keys")])],1)]),a("details",{attrs:{id:"proof-of-work-pow"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-work-pow","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Proof of Work (POW)")])]),e._v(" "),a("p",[e._v("One of the requirements for a Bitcoin block to be valid is its hash should be below a certain difficulty target.\nIn order to create a valid block, a miner must repeatedly hash a candidate block with a changing nonce until by sheer luck he finds a hash with low value.\nBy providing this pre-image block, anyone can verify the amount of computational energy that a miner on average should have invested in order to find this block, and this is what is known as Proof of Work.")])]),a("details",{attrs:{id:"regtest"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#regtest","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Regtest")])]),e._v(" "),a("p",[e._v("A local testing environment in which developers can instantly generate blocks on demand for testing events, and can create private satoshis with no real-world value.")])]),a("details",{attrs:{id:"replace-by-fee-rbf"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-by-fee-rbf","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Replace by Fee (RBF)")])]),e._v(" "),a("p",[e._v("Replacing one version of an unconfirmed transaction with a different version of the transaction that pays a higher transaction fee.")])]),a("details",{attrs:{id:"mining-reward"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#mining-reward","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Mining Reward")])]),e._v(" "),a("p",[e._v("An amount of satoshis included in each new block as a reward by the network to the miner who found the proof of work solution.\nInitially it was 50 bitcoin per block, which is halved every 210 000 blocks, or roughly 4 years.\nThis leads to a total money supply of just below 21 million bitcoin.")])]),a("details",{attrs:{id:"satoshi-sat"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#satoshi-sat","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("satoshi (sat)")])]),e._v(" "),a("p",[e._v("A satoshi is the smallest denomination of bitcoin that can be recorded on the blockchain.\nIt is the equivalent of 0.00000001 bitcoin and is named after the creator of Bitcoin, Satoshi Nakamoto.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-can-i-display-the-fee-in-satoshis-per-byte"}},[e._v("How can I display the fee in satoshi per byte?")])],1)]),a("details",{attrs:{id:"satoshi-nakamoto"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#satoshi-nakamoto","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Satoshi Nakamoto")])]),e._v(" "),a("p",[e._v("Satoshi Nakamoto is the name used by the person or people who designed Bitcoin and created its original reference implementation, Bitcoin Core.\nAs a part of the implementation, they also devised the first blockchain database.\nIn the process they were the first to solve the double-spending problem for digital currency in a decentralized and self verifying nature.\nTheir real identity remains unknown.")])]),a("details",{attrs:{id:"script"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#script","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Script")])]),e._v(" "),a("p",[e._v("Bitcoin uses a scripting system for transactions.\nForth-like, Script is simple, stack-based and processed from left to right.\nIt is purposefully not Turing-complete, with no loops.")])]),a("details",{attrs:{id:"scriptpubkey"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#scriptpubkey","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("ScriptPubKey")])]),e._v(" "),a("p",[e._v("ScriptPubKey or pubkey script, is a script included in outputs which sets the conditions that must be fulfilled for those satoshis to be spent.\nData for fulfilling the conditions can be provided in a signature script.")])]),a("details",{attrs:{id:"scriptsig"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#scriptsig","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("ScriptSig")])]),e._v(" "),a("p",[e._v("ScriptSig or signature script, is the data generated by a spender which is almost always used as variables to satisfy a pubkey script.")])]),a("details",{attrs:{id:"segregated-witness-segwit"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#segregated-witness-segwit","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Segregated Witness (SegWit)")])]),e._v(" "),a("p",[e._v("Segregated Witness is a structure where the witness [signature or redeem script] is stored separately from the transaction Merkle tree.\nThis is separated because the witness contains only data concerning transaction validity, but not about transaction effect.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#why-does-wasabi-only-use-segwit-bech32-addresses"}},[e._v("Why Wasabi uses only SegWit")])],1)]),a("details",{attrs:{id:"simplified-payment-verification-spv"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#simplified-payment-verification-spv","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Simplified Payment Verification (SPV)")])]),e._v(" "),a("p",[e._v("SPV is a method for verifying particular transactions were included in a block without downloading the entire block.\nThe method is used by some lightweight Bitcoin clients.\nRead more: "),a("RouterLink",{attrs:{to:"/building-wasabi/TechnicalOverview.html#wasabi-wallet-under-the-hood"}},[e._v("Wasabi Wallet under the hood")])],1)]),a("details",{attrs:{id:"soft-fork"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#soft-fork","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Soft Fork")])]),e._v(" "),a("p",[e._v("Soft fork or soft-forking change is a fork in the blockchain which commonly occurs when miners using non-upgraded nodes don’t follow a new consensus rule their nodes don’t know about.")])]),a("details",{attrs:{id:"testnet"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#testnet","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Testnet")])]),e._v(" "),a("p",[e._v("A testing environment in which users can obtain and spend satoshis that have no real-world value on a global network that is very similar to the Bitcoin mainnet.")])]),a("details",{attrs:{id:"transaction"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Transaction")])]),e._v(" "),a("p",[e._v("In simple terms, a transfer of bitcoin.\nMore precisely, a transaction is a signed data structure expressing a transfer of value.\nTransactions are transmitted over the Bitcoin network, collected by miners, and included into blocks, made permanent on the blockchain.")])]),a("details",{attrs:{id:"transaction-fees"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-fees","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Transaction Fees")])]),e._v(" "),a("p",[e._v("A transaction includes a fee to the network for processing the requested transaction.\nMost transactions require a minimum fee.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-fee-should-i-select"}},[e._v("What fee should I select?")])],1)]),a("details",{attrs:{id:"unspent-transaction-output-utxo"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#unspent-transaction-output-utxo","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Unspent Transaction Output (UTXO)")])]),e._v(" "),a("p",[e._v("UTXO is an unspent transaction output that can be spent as an input in a new transaction.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-can-i-select-utxos-for-coinjoin"}},[e._v("How can I select UTXOs for CoinJoin?")])],1)]),a("details",{attrs:{id:"wallet"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Wallet")])]),e._v(" "),a("p",[e._v("Software that holds all your Bitcoin addresses and secret keys.\nUse it to send, receive, and store your bitcoin.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);