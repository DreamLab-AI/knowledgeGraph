---
okf_version: "0.2"
type: Class
title: Application Binary Interface
resource: urn:ngm:class:application-binary-interface
domain: blockchain
description: "An application binary interface (ABI) is the specification of how software components interact at the binary level, defining calling conventions, data layout and, for smart contracts, the encoding used to invoke functions and pass arguments. On blockchains such as Ethereum, a contract's ABI describes its callable functions, events and parameter types in a machine-readable form that clients use to "
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:interface
relatedTo:
  - urn:ngm:class:token-standard
---

# Application Binary Interface

An application binary interface (ABI) is the specification of how software components interact at the binary level, defining calling conventions, data layout and, for smart contracts, the encoding used to invoke functions and pass arguments. On blockchains such as Ethereum, a contract's ABI describes its callable functions, events and parameter types in a machine-readable form that clients use to encode transactions and decode returned data. It is what allows external tools, wallets and other contracts to interact correctly with a deployed contract without access to its source code.
