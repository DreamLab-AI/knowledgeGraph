- ### Definition
  - SWIFT, the Society for Worldwide Interbank Financial Telecommunication, is a cooperative that operates a secure messaging network used by banks and other financial institutions to exchange payment and securities instructions. It does not move money itself but standardises the messages that instruct transfers between institutions, which then settle through correspondent banking relationships or payment systems. Founded in 1973 and based in Belgium, it connects thousands of institutions across most countries.

- ### Semantic Classification
  - owl-class:: fininfra:SWIFT
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Financial Infrastructure Domain]]
  - bridges-to:: [[Payment Systems Domain]], [[ISO 20022]]
  - requires:: [[Correspondent Banking]]
  - enables:: [[Cross-Border Payments]], [[Interbank Settlement]]

- ### Content
  - SWIFT provides a standardised, authenticated messaging layer over which institutions send instructions such as customer transfers, interbank transfers and securities trades. Each member is identified by a Business Identifier Code, and messages follow defined formats that are migrating toward the richer ISO 20022 standard.
  - Because SWIFT only conveys instructions, actual settlement occurs through accounts that banks hold with one another or through national and regional payment systems. Cross-border payments therefore often traverse a chain of correspondent banks, each relaying SWIFT messages and adjusting account balances.
  - Its central role in global finance gives SWIFT geopolitical significance, as exclusion from the network can substantially impede a country's international transactions. This has prompted interest in alternative messaging systems and in blockchain-based settlement as potential complements or competitors.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z