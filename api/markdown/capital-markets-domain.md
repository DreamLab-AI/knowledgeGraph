- ### Definition
  - The Capital Markets Domain classifies concepts concerned with the issuance, trading, and settlement of financial securities and the institutions that support them. It covers primary issuance, secondary trading venues, market microstructure, and post-trade clearing and settlement. As a top-level subject classification, it scopes the structure of organised markets rather than the individual assets traded or the regulation that governs them.

- ### Semantic Classification
  - owl-class:: capmkt:CapitalMarketsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Digital Asset Domain]], [[Payment Systems Domain]], [[Financial Regulation Domain]]
  - has-part:: [[Securities Issuance]], [[Trading Venue]], [[Order Book]], [[Clearing House]], [[Market Microstructure]]
  - requires:: [[Financial Instrument]], [[Settlement Layer]], [[Price Discovery]]
  - enables:: [[Capital Formation]], [[Liquidity Provision]], [[Price Discovery]]

- ### Content
  - The Capital Markets Domain organises the venues and processes through which capital is raised and securities change hands. Issuance brings instruments to market, order books and trading venues match buyers and sellers, and clearing houses interpose themselves to manage counterparty risk before settlement. Market microstructure studies how the rules of these venues affect prices and liquidity.
  - Two functions define the domain: capital formation, by which issuers obtain funding, and price discovery, by which trading aggregates information into prices. Both depend on liquidity, and the design of trading and settlement mechanisms determines how efficiently markets perform them. Tokenisation extends these functions to ledger-based instruments while preserving the same structural roles.
  - As a top-level domain, capital markets bridge to digital assets, which provide tokenised instruments, and to payment systems, which settle the cash leg of trades. It also bridges to financial regulation, whose rules shape venue conduct and disclosure. Keeping market structure distinct from the traded asset and the rulebook lets the ontology describe a conventional and a tokenised exchange with shared vocabulary.

- ### Provenance
  - sources:: [[MiFID II]], [[CPMI-IOSCO PFMI]]
  - migration-date:: 2026-05-29T00:00:00Z