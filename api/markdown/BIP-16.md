
BIP-16 is the Bitcoin Improvement Proposal that introduced Pay-to-Script-Hash (P2SH), allowing funds to be sent to the hash of a redeem script rather than to a full script. The spender supplies the matching script and its satisfying inputs at redemption time, shifting the burden of specifying complex spending conditions from sender to recipient. P2SH made multi-signature and other complex scripts practical and is the standard mechanism behind multi-sig wallet addresses.

- ### Content
  - By committing only to a script hash in the output, P2SH keeps transactions compact and lets recipients define multi-signature or time-locked redemption logic. Activated in 2012, it became the foundation for multi-sig custody before SegWit and Taproot refined the model.

