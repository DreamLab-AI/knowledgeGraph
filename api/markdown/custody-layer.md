- ### Definition
  - The Custody Layer is the stratum that governs the safekeeping and authorised control of assets and the keys that command them. It sits above the Cryptographic and Identity strata it depends on and below the settlement and application activity that moves assets. It contains key storage, signing policies, and the authorisation rules for asset control.

- ### Semantic Classification
  - owl-class:: custody:CustodyLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Multi-Signature]], [[Key Management]]
  - requires:: [[Cryptographic Layer]], [[Identity Layer]]
  - enables:: [[Settlement Layer]], [[Application Layer]]

- ### Content
  - The Custody Layer secures the assets a system holds and controls who may authorise their movement. Typical members include secure key storage such as hardware security modules, multi-party signing schemes, withdrawal and approval policies, and recovery procedures. It is concerned with safekeeping and authorised control, not with the transfers themselves.
  - It requires the Cryptographic Layer for the keys and signatures that prove control and the Identity Layer to bind that control to verified principals. It enables the Settlement Layer, which moves the assets it guards, and the Application Layer, which offers custody-dependent services.
  - The layer bridges to multi-signature schemes and key management, practices that distribute trust and reduce single points of failure. Controls defined here are decisive for protecting value against loss and theft.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z