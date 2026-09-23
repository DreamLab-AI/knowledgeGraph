
Flow control is the mechanism by which a data communication protocol prevents a fast sender from overwhelming a slower receiver. It regulates the rate or volume of data in transit using techniques such as sliding windows, credit schemes and backpressure, so that the receiver's buffers are not exceeded. Distinct from congestion control, which protects the shared network, flow control is an end-to-end concern that protects the individual receiving endpoint.

- ### Overview
	- Without flow control, a sender could discard a receiver's data simply by transmitting faster than it can be consumed.
	- The receiver advertises how much it can accept, and the sender limits outstanding data accordingly.
	- It operates end-to-end and is a key part of [[Network Transport]] reliability guarantees.
	- Modern protocols apply flow control at both connection and stream granularity to multiplex fairly.
- ### Mechanisms
	- Sliding-window schemes let the receiver advertise a window of acceptable bytes that moves as data is consumed.
	- Credit-based control grants the sender explicit permission units before more data may be sent.
	- Backpressure propagates fullness signals upstream so producers slow when consumers fall behind.
	- Stream-level windows in multiplexed protocols prevent one stream from starving others.
- ### Applications
	- TCP receive-window management that paces bulk transfers to the receiver's capacity.
	- Per-stream flow control in [[QUIC]] and HTTP/2 to keep multiplexed streams fair.
	- Message-broker and queue systems applying backpressure to balance producers and consumers.
	- Reactive streaming frameworks coordinating [[Concurrency]] between asynchronous stages.
- ### Provenance

