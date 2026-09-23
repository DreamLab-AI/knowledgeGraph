---
okf_version: "0.2"
type: Class
title: Settlement Layer
resource: urn:ngm:class:settlement-layer
domain: blockchain
description: The Settlement Layer is the stratum that achieves final, irreversible transfer of value or state between parties. In layered ledger systems it sits beneath faster execution and netting strata and above the Consensus Layer that secures finality. It contains the records, accounts, and finality conditions under which obligations are discharged.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:consensus-layer
enables:
  - urn:ngm:class:smart-contract-layer
  - urn:ngm:class:lightning-network-layer
bridgesTo:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:double-spending
---

# Settlement Layer

The Settlement Layer is the stratum that achieves final, irreversible transfer of value or state between parties. In layered ledger systems it sits beneath faster execution and netting strata and above the Consensus Layer that secures finality. It contains the records, accounts, and finality conditions under which obligations are discharged.
