(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{261:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"receive-bitcoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receive-bitcoin"}},[e._v("#")]),e._v(" Receive bitcoin")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#generating-addresses-step-by-step"}},[e._v("Generating addresses step-by-step")])]),a("li",[a("a",{attrs:{href:"#bitcoin-public-keys-and-addresses"}},[e._v("Bitcoin public keys and addresses")])]),a("li",[a("a",{attrs:{href:"#the-problem-with-address-reuse"}},[e._v("The problem with address reuse")])]),a("li",[a("a",{attrs:{href:"#the-importance-of-labeling"}},[e._v("The importance of labeling")]),a("ul",[a("li",[a("a",{attrs:{href:"#coin-control"}},[e._v("Coin control")])]),a("li",[a("a",{attrs:{href:"#labels"}},[e._v("Labels")])]),a("li",[a("a",{attrs:{href:"#clusters"}},[e._v("Clusters")])]),a("li",[a("a",{attrs:{href:"#coinjoined-coins"}},[e._v("CoinJoined coins")])]),a("li",[a("a",{attrs:{href:"#automatic-selection"}},[e._v("Automatic selection")])]),a("li",[a("a",{attrs:{href:"#final-words-about-labels-and-examples"}},[e._v("Final words about labels and examples")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"generating-addresses-step-by-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-addresses-step-by-step"}},[e._v("#")]),e._v(" Generating addresses step-by-step")]),e._v(" "),a("ol",[a("li",[e._v("Start Wasabi and open the wallet that you want to receive coins into.")]),e._v(" "),a("li",[e._v("Go to the "),a("code",[e._v("Receive")]),e._v(" tab.")]),e._v(" "),a("li",[e._v("Specify a label of the entities who know about this address.")]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Generate Address")]),e._v(".")]),e._v(" "),a("li",[e._v("Optionally change the label in the right click menu if new entities learn about the address.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/ReceiveAddressDropDownMenu.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"bitcoin-public-keys-and-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-public-keys-and-addresses"}},[e._v("#")]),e._v(" Bitcoin public keys and addresses")]),e._v(" "),a("p",[e._v("The Bitcoin protocol utilizes "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Public-key_cryptography",target:"_blank",rel:"noopener noreferrer"}},[e._v("public key cryptography"),a("OutboundLink")],1),e._v(" to defend and verify the property rights of the individuals holding and transacting bitcoin.\nA private key is a large random number that should be kept secret.\nWith the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",target:"_blank",rel:"noopener noreferrer"}},[e._v("elliptic curve digital signature algorithm"),a("OutboundLink")],1),e._v(", based on the private key you can calculate a public key.\nIf someone has only the public key, it is computationally infeasible [pretty much impossible] to calculate the private key.\nWhoever knows the private key can calculate a cryptography signature over a message, which proves that the private key was known by the signer, without actually revealing the secret.")]),e._v(" "),a("p",[e._v("For data size efficiency, in Bitcoin the public key is "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function",target:"_blank",rel:"noopener noreferrer"}},[e._v("hashed"),a("OutboundLink")],1),e._v(" and encoded into a "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-173-base32-address-format-for-native-v0-16-witness-outputs"}},[e._v("bech32")]),e._v(' address.\nThis address commits to the public key, which commits to the private key.\nIn a Bitcoin transaction, the output creates a new unspent transaction output which is "locked up" by an address.\nThe input of the transaction spends a UTXO by providing a valid signature of the public key that the address committed to.')],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v('Wasabi Wallet does not "store your money", rather it stores your public keys and the encrypted secret that requires a password to decrypt the private keys, it creates addresses for receiving bitcoin, and it signs transactions that spend your bitcoin.')])]),e._v(" "),a("h2",{attrs:{id:"the-problem-with-address-reuse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-problem-with-address-reuse"}},[e._v("#")]),e._v(" The problem with address reuse")]),e._v(" "),a("p",[e._v("Whenever you use the same address to lock up different UTXOs, then all these coins can be spent by anyone who knows the private key.\nThis makes it obvious for anyone that this one entity [you] owns all these coins, which is very bad for privacy.\nThe first rule of Bitcoin privacy is "),a("RouterLink",{attrs:{to:"/why-wasabi/AddressReuse.html"}},[e._v("never reuse addresses")]),e._v("!")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This is why Wasabi removes the address from the "),a("code",[e._v("Receive")]),e._v(" tab as soon as it has received a coin.")])]),e._v(" "),a("h2",{attrs:{id:"the-importance-of-labeling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-importance-of-labeling"}},[e._v("#")]),e._v(" The importance of labeling")]),e._v(" "),a("p",[e._v("Satoshis are the base unit currency of the Bitcoin network and are truly fungible, meaning that any 100 000 000 satoshis are always equal to 1 bitcoin.\nJust like with gold atoms, it doesn't matter which specific gold atoms you have, as long as it's gold, it's gold.\nHowever, an unspent transaction output, a bitcoin, is a chunk of money and is not fungible, because it has a different amount of satoshis in it, a different public key locking it up, a unique transaction history, and a unique index number.\nThis is just like a gold coin, with a unique amount of gold atoms, and either a pretty mintage, or an old chipped broken coin.\nBecause UTXOs are not fungible, it is very important to know exactly which coin is which, and that is done by carefully labeling.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In Wasabi it is mandatory to give every address a label of the observers who know about this address, so that later you know where you got the coin from and you know how to spend it.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/ReceiveLabelingRequired.png",alt:""}})]),e._v(" "),a("p",[e._v("Wasabi is not like other Bitcoin wallets, it is a privacy-oriented wallet and every feature and every design decision is based mainly (sometimes exclusively) on privacy costs/benefits analysis.\nFor that reason many of its features depend on each other and a correct understanding of how they play together is critical to achieve and improve the privacy of our transactions.")]),e._v(" "),a("h3",{attrs:{id:"coin-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coin-control"}},[e._v("#")]),e._v(" Coin control")]),e._v(" "),a("p",[e._v("Coin control is a key feature that enables all the other features.\nHow could we CoinJoin our coins if we aren't able to select the ones we want to participate with?\nHow could we know which coins are being spent in a transaction?\nHow could we decide what to reveal to a KYC exchange?\nWell, without coin control it is not possible.")]),e._v(" "),a("p",[e._v("Wasabi is a coins-oriented wallet in the sense that coins are the most important unit of information to take decisions to protect privacy.")]),e._v(" "),a("h3",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[e._v("#")]),e._v(" Labels")]),e._v(" "),a("p",[e._v("As a privacy-oriented solution the focus is always on minimizing how much we reveal about our financial activity.\nFor that reason when we create a new address to receive bitcoins or when we send a transaction, we are forced to label that coin!\nAnd what kind of information do we have to provide here?\nThe label has to tell us who are the observers that know about that coin.")]),e._v(" "),a("p",[e._v("For example, if I create a new address to receive a "),a("code",[e._v("0.5 BTC")]),e._v(" payment from Andrew for a laptop that I sold to him then the label has to be: "),a("code",[e._v("Andrew")]),e._v(".")]),e._v(" "),a("p",[e._v("Most of the wallets out there don't care much about privacy (or at least not as much as Wasabi does) and for that reason they don't allow us to attach this critical data to our coins.")]),e._v(" "),a("p",[e._v("Wasabi does not label transactions, but the addresses that control the coins.\nThe label is not for describing the "),a("code",[e._v("reason for payment")]),e._v(", but rather to list the "),a("code",[e._v("involved parties")]),e._v(".\nUnderstanding this difference between labeling an address (Wasabi) and describing a transaction (many other wallets) is very important for our privacy.")]),e._v(" "),a("h3",{attrs:{id:"clusters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clusters"}},[e._v("#")]),e._v(" Clusters")]),e._v(" "),a("p",[e._v("Following with the previous example, if I have to send a fraction ("),a("code",[e._v("0.1 BTC")]),e._v(") of the previously received coin to a Charlie then that transaction label has to be: "),a("code",[e._v("Charlie")]),e._v(".\nIn that way, the change ("),a("code",[e._v("0.4 BTC")]),e._v(") will be known by Andrew and Charlie because they both will be able to follow the change.\nThat's exactly what Wasabi displays in the coins list (cluster column), Wasabi tells us who are the ones that know about each of our coins in order to allow us to decide what to do with the coins.")]),e._v(" "),a("p",[e._v("Let's make another example:\nImagine you have three coins, one known by Alice, one known by a KYC exchange and finally one known by Charlie.\nImagine you need to sell few sats to Charlie, which coin/s should you send?\nThe obvious selection is the one already known by Charlie because by doing that he cannot learn anything new about our wallet, moreover, neither Alice nor the KYC exchange can learn anything new!\nBut what if the coin is not big enough and we need to use more than one coin?\nYou can use the one known by Alice or the one known by the KYC exchange, but are you okay with Charlie knowing about your deposit/withdrawal from the exchange?\nAre you okay with Alice knowing about your deal with Charlie?\nIn case none of those combinations are acceptable for you then you should CoinJoin your coins.")]),e._v(" "),a("h3",{attrs:{id:"coinjoined-coins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coinjoined-coins"}},[e._v("#")]),e._v(" CoinJoined coins")]),e._v(" "),a("p",[e._v("Those that participate in a Wasabi "),a("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[e._v("CoinJoin")]),e._v(" transaction receive at least one coin with an anonymity set level that depends on the number of participants in that transaction.\nBy default Wasabi tries to create transactions with 100 unknown participants, so the received coin can have 100 anonymity set which means it is really hard for an observer to know who that coin belongs to.\nFor that reason a coin with a high anonymity set loses the cluster which it originally had.")],1),e._v(" "),a("h3",{attrs:{id:"automatic-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-selection"}},[e._v("#")]),e._v(" Automatic selection")]),e._v(" "),a("p",[e._v("As we can see now the correct labeling of coins allows Wasabi to display useful information about who knows about our wallet and how much they know.\nIt also allows Wasabi to select coins for you if you want (not recommended).\nBasically, if you select all your coins and the amount you want to send is smaller than the total, Wasabi will select only enough coins to minimize the number of people that will learn more about your wallet.")]),e._v(" "),a("h3",{attrs:{id:"final-words-about-labels-and-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-words-about-labels-and-examples"}},[e._v("#")]),e._v(" Final words about labels and examples")]),e._v(" "),a("p",[e._v("4 coins with good labels:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Andrew\nDavid, Me\nCarlos, Sofia\nKYC exchange\n")])])]),a("p",[e._v("2 coins with bad labels:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Payment from Andrew for my laptop\nFrom my old wallet\n")])])]),a("p",[e._v("In case we take the two first coins with good labels and send them to María, look how the change cluster will be displayed: "),a("code",[e._v("Maria, Andrew, David, Me")]),e._v(" (these people know about the coin).\nNow, look how this will be displayed if I use the two coins with bad labels: "),a("code",[e._v("Maria, Payment from Andrew for my laptop, From my old wallet")]),e._v(" (Is this high-quality info about the privacy level of my coin? Of course not).")]),e._v(" "),a("p",[e._v("So, think about coins, think about who knows and make sure to take decisions about privacy based on what you are going to reveal and to whom.\nWasabi doesn't care about why you transact with bitcoins, it only cares about who you transact with, because this is what helps you reclaim your privacy.")])])}),[],!1,null,null,null);t.default=i.exports}}]);