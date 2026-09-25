Real-time streaming is the continuous delivery of data, audio, or video as an ongoing flow consumed incrementally with minimal latency rather than downloaded in full beforehand. It uses low-latency transport protocols and buffering strategies to balance smoothness against delay. It underpins live media, event streams, and interactive low-latency experiences.

### In Plain Terms

- Sending information as a steady live flow that you receive bit by bit the moment it is ready, rather than waiting for the whole thing to arrive first — the same way an AI assistant's reply appears word by word as it is written. It keeps things feeling instant and interactive.

### Content

- Protocols range from chunked HTTP adaptive streaming (HLS, DASH) for media to WebRTC and RTP for sub-second interactivity, and Kafka/SSE for event data. Engineering trade-offs centre on the latency-versus-resilience balance: smaller buffers cut delay but increase sensitivity to jitter and packet loss.

