Social recovery is a wallet security mechanism that lets a user regain control of an account by relying on a set of trusted guardians rather than a single seed phrase. If a signing key is lost, a quorum of designated guardians can authorise a key rotation to a new owner address without ever holding the funds themselves. It mitigates catastrophic key loss while preserving self-custody, and is a flagship use case for smart-contract wallets.

### Content

- Guardians never hold funds; they collectively authorise a key rotation to a new owner address through the wallet contract. The pattern is enabled by [[Account Abstraction]], which makes wallets programmable, and shares cryptographic foundations with [[Multi-Sig Governance]] where thresholds of independent signers govern privileged actions.

