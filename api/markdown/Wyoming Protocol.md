The Wyoming Protocol is an open, peer-to-peer communication protocol used in the Home Assistant ecosystem to connect voice and audio services such as wake-word detection, speech-to-text, and text-to-speech. It defines a simple JSON-over-socket event framing that lets independent voice components run as networked services and interoperate locally without cloud dependencies. It matters as the backbone of Home Assistant's privacy-preserving local voice assistant pipeline.

### Content

- Wyoming frames audio and intent events as JSON headers followed by binary payloads over TCP sockets, allowing modular wake-word, ASR, and TTS engines to be composed as discrete services. By keeping the entire pipeline on the local network, it enables fully offline voice control without relaying user audio to external clouds.

