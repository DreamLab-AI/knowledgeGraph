A payment preimage is the secret value whose cryptographic hash forms a payment hash used to lock funds in a Hash Time-Locked Contract on the Lightning Network. Revealing the preimage proves that the intended recipient received the payment and simultaneously releases the locked funds along every hop of the payment route. It is the mechanism that lets protocols such as BOLT11 invoices and L402 guarantee atomic, trustless settlement across multi-hop payment channels.

### Provenance

