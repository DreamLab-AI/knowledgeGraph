Length normalisation is a scoring adjustment applied during sequence decoding that divides or otherwise rescales a candidate sequence's cumulative log-probability by a function of its length, correcting the bias of naive beam search toward shorter outputs. Without it, beam search systematically favours short sequences because every additional token multiplies the sequence probability by a value less than one. It is a standard component of neural machine translation and text generation decoders.

### Provenance

