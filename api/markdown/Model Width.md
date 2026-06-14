public:: true

# Model Width
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:27e0e7165c5d8cf3ff0a07f210bd58a68f20e3d6333f5a8d7edcb3d958dbd513",
  "@type": "Page",
  "vc:slug": "model-width",
  "title": "Model Width",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:presentation",
      "vc:label": "presentation"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-and-4-d",
      "vc:label": "3D and 4D"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:face-swap",
      "vc:label": "Face Swap"
    },
    {
      "@id": "urn:visionflow:owl:class:fashion",
      "vc:label": "Fashion"
    },
    {
      "@id": "urn:visionflow:owl:class:nvidia-omniverse",
      "vc:label": "NVIDIA Omniverse"
    },
    {
      "@id": "urn:visionflow:owl:class:people",
      "vc:label": "PEOPLE"
    },
    {
      "@id": "urn:visionflow:owl:class:proprietary-large-language-models",
      "vc:label": "Proprietary Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:segmentation-and-identification",
      "vc:label": "Segmentation and Identification"
    },
    {
      "@id": "urn:visionflow:owl:class:stable-diffusion",
      "vc:label": "Stable Diffusion"
    },
    {
      "@id": "urn:visionflow:owl:class:transformers",
      "vc:label": "Transformers"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0244"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Width"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-width",
  "@type": "Class",
  "label": "Model Width",
  "definition": "The dimensionality of internal representations at each transformer layer, commonly denoted d_model or hidden dimension. Width sets the information-carrying capacity per token and scales the size of attention heads and feed-forward projections, making it a primary axis alongside depth and data volume in neural scaling law research.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:model-depth", "label": "Model Depth"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:hyperparameter", "label": "Hyperparameter"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:parameter-count", "label": "Parameter Count"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mixture-of-experts-architecture", "label": "Mixture of Experts"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:model-width:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:27e0e7165c5d8cf3ff0a07f210bd58a68f20e3d6333f5a8d7edcb3d958dbd513"
  },
  "vc:resolutions": [
    {
      "raw": "[[presentation]]",
      "resolved": "urn:visionflow:linked:presentation",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D and 4D]]",
      "resolved": "urn:visionflow:owl:class:3-d-and-4-d",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Face Swap]]",
      "resolved": "urn:visionflow:owl:class:face-swap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fashion]]",
      "resolved": "urn:visionflow:owl:class:fashion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NVIDIA Omniverse Platform]]",
      "resolved": "urn:visionflow:owl:class:nvidia-omniverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Domain Expert Contact Index]]",
      "resolved": "urn:visionflow:owl:class:people",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proprietary Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:proprietary-large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Segmentation and Identification]]",
      "resolved": "urn:visionflow:owl:class:segmentation-and-identification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stable Diffusion Image Model]]",
      "resolved": "urn:visionflow:owl:class:stable-diffusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformers]]",
      "resolved": "urn:visionflow:owl:class:transformers",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The dimensionality of representations within each layer, typically referring to the hidden dimension (d_model), determining the capacity of the model to encode information at each layer.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelWidth
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - **contrastsWith** [[Model Depth]] — width (hidden dimension) and depth (layer count) are independent scaling axes
  - **dependsOn** [[Transformer]] — transformer architectures expose width as the d_model hyperparameter
  - **dependsOn** [[Hyperparameter]] — width is selected prior to training and fixed throughout
  - **relatedTo** [[Attention Mechanism]] — attention head dimension is a direct function of d_model width
  - **relatedTo** [[Parameter Count]] — wider models have quadratically more parameters in attention layers
  - **enables** [[Mixture-of-Experts Architecture]] — MoE decouples apparent parameter count from active width per token

- ### Content
  - The dimensionality of representations within each layer, typically referring to the hidden dimension (d_model), determining the capacity of the model to encode information at each layer.

  - # IP-Adapter: Text Compatible Image Prompt Adapter for Text-to-Image Diffusion Models
  - Hu Ye Jun Zhang Sibo Liu Xiao Han Wei Yang Tencent AI Lab4-5 minutes

	  ---

	  ![](https://ip-adapter.github.io/assets/fig0.jpg){:height 430, :width 1159}

	  - # Face Swap project (sub-project)
	  - [[Face Swap]]
	  - [[Segmentation and Identification]]
	  - [ChatGPT
	  - CodeHelper (openai.com)](https://chat.openai.com/g/g-YWd3Sg9X3-codehelper/c/4685d4fe-2ad7-475e-9a15-5fb9c4820990)
	  - Make a mermaid Gantt chart for this project, based on the code, identifying and scoping work packages
	  - ```import cv2
	   import cv2
	   import threading
	   import queue
	   import numpy as np

	   # GStreamer Pipeline for Efficient Video Capture
	   def create_gstreamer_pipeline(rtsp_url):
	       """
	       Create a GStreamer pipeline for efficient video capture using NVIDIA hardware-accelerated plugins.
	       :param rtsp_url: URL of the RTSP stream.
	       :return: GStreamer pipeline string.
	       """
	       return (
	           f'rtspsrc location={rtsp_url} latency=0 ! '
	           'rtph264depay ! h264parse ! '
	           'nvv4l2decoder ! nvvidconv ! '
	           'video/x-raw, format=(string)BGRx ! '
	           'videoconvert ! video/x-raw, format=(string)BGR ! appsink'
	       )

	   # Placeholder for TensorRT-Optimized YOLO Face Detection
	   def detect_objects(tensorrt_model, frame, gpu_id):
	       """
	       Detect objects in the frame using a TensorRT-optimized YOLO model.
	       :param tensorrt_model: Loaded TensorRT model for object detection.
	       :param frame: Video frame for object detection.
	       :param gpu_id: GPU ID to use for detection.
	       :return: List of detections (bounding boxes).
	       """
	       # Actual implementation required
	       return []

	   # Function for Feathered Blending at Bounding Box Edges
	   def feather_edges(mask, width):
	       """
	       Apply feathering to the edges of a mask for smooth blending.
	       :param mask: Binary mask for feathering.
	       :param width: Width for feathering effect.
	       :return: Feathered mask.
	       """
	       kernel = np.ones((width, width), np.uint8)
	       mask = cv2.erode(mask, kernel, iterations=1)
	       mask = cv2.blur(mask, (width, width))
	       return mask

	   # Function for Swapping Faces in the Frame
	   def swap_faces(detections, frame, swapper_model, gpu_id):
	       """
	       Swap faces in the frame based on detections.
	       :param detections: Detected faces with bounding boxes.
	       :param frame: Original video frame.
	       :param swapper_model: Face swapping model.
	       :param gpu_id: GPU ID to use for face swapping.
	       :return: Frame with swapped faces.
	       """
	       for det in detections:
	           x, y, w, h = det['box']
	           # Perform face swapping
	           swapped_face = swapper_model.swap(frame[y:y+h, x:x+w])

	           # Resize and blend swapped face into the original frame
	           resized_face = cv2.resize(swapped_face, (w, h))
	           mask = np.full((h, w), 255, dtype=np.uint8)
	           mask = feather_edges(mask, 10)
	           for c in range(0, 3):
	               frame[y:y+h, x:x+w, c] = frame[y:y+h, x:x+w, c] * (1
	  - mask/255.0) + resized_face[:, :, c] * (mask/255.0)

	       return frame

	   # Worker Function for Face Detection
	   def face_detection_worker(input_queue, output_queue, gpu_id, tensorrt_model):
	       """
	       Worker function for face detection. Runs on a separate thread.
	       :param input_queue: Queue for incoming frames.
	       :param output_queue: Queue for outgoing frames after detection.
	       :param gpu_id: GPU ID for this worker.
	       :param tensorrt_model: TensorRT optimized model for detection.
	       """
	       while True:
	           frame_info = input_queue.get()
	           if frame_info is None:
	               break
	           frame_counter, frame = frame_info
	           detections = detect_objects(tensorrt_model, frame, gpu_id)
	           output_queue.put((frame_counter, frame, detections))

	   # Worker Function for Face Swapping
	   def face_swapping_worker(input_queue, output_queue, gpu_id, swapper_model):
	       """
	       Worker function for face swapping. Runs on a separate thread.
	       :param input_queue: Queue for incoming frames with detections.
	       :param output_queue: Queue for outgoing frames after swapping.
	       :param gpu_id: GPU ID for this worker.
	       :param swapper_model: Model for face swapping.
	       """
	       while True:
	           frame_info = input_queue.get()
	           if frame_info is None:
	               break
	           frame_counter, frame, detections = frame_info
	           swapped_frame = swap_faces(detections, frame, swapper_model, gpu_id)
	           output_queue.put((frame_counter, swapped_frame))

	   # Main Function to Play RTSP Stream and Process Frames
	   def play_rtsp_stream(rtsp_url, tensorrt_model_paths, swapper_model_paths):
	       """
	       Main function to play RTSP stream and process frames using parallel workers.
	       :param rtsp_url: URL of the RTSP stream.
	       :param tensorrt_model_paths: Paths to TensorRT models for face detection.
	       :param swapper_model_paths: Paths to models for face swapping.
	       """
	       gst_pipeline = create_gstreamer_pipeline(rtsp_url)
	       vid_cap = cv2.VideoCapture(gst_pipeline, cv2.CAP_GSTREAMER)

	       detection_queue = queue.Queue()
	       swapping_queue = queue.Queue()
	       output_queue = queue.Queue()

	       detection_workers = [threading.Thread(target=face_detection_worker, args=(detection_queue, swapping_queue, gpu_id, model_path))
	                            for gpu_id, model_path in enumerate(tensorrt_model_paths)]
	       for worker in detection_workers:
	           worker.start()

	       swapping_workers = [threading.Thread(target=face_swapping_worker, args=(swapping_queue, output_queue, gpu_id, model_path))
	                           for gpu_id, model_path in enumerate(swapper_model_paths)]
	       for worker in swapping_workers:
	           worker.start()

	       frame_counter = 0
	       try:
	           while vid_cap.isOpened():
	               success, frame = vid_cap.read()
	               if not success:
	                   break

	               detection_queue.put((frame_counter, frame))
	               frame_counter += 1

	               if not output_queue.empty():
	                   counter, swapped_frame = output_queue.get()
	                   cv2.imshow('Processed Frame', swapped_frame)
	                   if cv2.waitKey(1) & 0xFF == ord('q'):
	                       break
	       except Exception as e:
	           print(f"Error processing video stream: {e}")
	       finally:
	           vid_cap.release()
	           cv2.destroyAllWindows()

	           for _ in detection_workers:
	               detection_queue.put(None)
	           for _ in swapping_workers:
	               swapping_queue.put(None)

	           for worker in detection_workers + swapping_workers:
	               worker.join()

	   # Example usage
	   play_rtsp_stream('rtsp://example.com/stream', ['path_to_tensorrt_model_gpu1', 'path_to_tensorrt_model_gpu2'],
	                    ['path_to_swapper_model_gpu1', 'path_to_swapper_model_gpu2'])

	   ```
  - [iperov/DeepFaceLive: Real-time face swap for PC streaming or video calls (github.com)](https://github.com/iperov/DeepFaceLive)
  - ![image.png](assets/image_1706624390895_0.png){:height 493, :width 1219}
  - ![image.png](assets/image_1706626142618_0.png)

  - #### Demo: Running UK Company [[Stable Diffusion Image Model]] (SDXL) with a cutting edge French language model creating the prompts in real-time, completely privately on local hardware
  - this is a local demo [<]iframe src="http://192.168.0.51:8188" style="width: 100%; height: 600px"></iframe>
  - {{video https://www.youtube.com/watch?v=kN8jdvRQvzA}}
  - {{video https://www.youtube.com/watch?v=AF2VyqSApjA}}
  - You can play with all of these on [Rundiffusion](https://app.rundiffusion.com/)
  - ![image.png](assets/image_1705158589247_0.png)
  - [[3D and 4D]]
  - {{embed ((65a5024d-11bb-4737-aef3-af73103fa218))}}

  - ## What's next: 3D world creation
		- Again, midjourney are working on a model. - 🟢 Best I can find is [Sudo AII](https://www.sudo.ai/)
		- <iframe src="https://www.sudo.ai" style="width: 100%; height: 600px"></iframe>
		- <iframe src="https://yueyang1996.github.io/holodeck/" style="width: 100%; height: 600px"></iframe>
		- https://research.nvidia.com/labs/toronto-ai/AlignYourGaussians/
		- [Mosaic-SDF for 3D Generative Models (connectedpapers.com)](https://www.connectedpapers.com/main/a7d6d07fdb631ce263ec2ddad72df269587fd3c9/Mosaic%20SDF-for-3D-Generative-Models/graph)
		- https://lioryariv.github.io/msdf/

  - # Community models
		- Models and inspiration from CivitAI, which is very often "not safe for work" so do exercise caution.
			- <iframe src="https://civitai.com/images" style="width: 100%; height: 600px"></iframe>

				- ## Mamba2's Core: The State Space Dual (SSD) Layer
					- The heart of Mamba2 lies in the State Space Dual (SSD) layer, a refined core SSM layer that replaces the S6 layer from Mamba. This layer embodies the principle of sacrificing some expressivity for substantial gains in computational efficiency, achieved by:
					- Unlike Mamba, which allows each element in the state vector to decay independently, Mamba2 groups these elements into chunks and applies the same decay factor to each chunk. This seemingly minor modification unlocks significant speedups by allowing the algorithm to leverage matrix multiplications, operations highly optimised on modern hardware like GPUs with their specialised tensor cores.
					- The chunking strategy in the SSD layer allows Mamba2 to embrace the computational power of matrix multiplications. This shift away from element-wise operations, which are less efficient on modern hardware, results in substantial reductions in training time. The paper's benchmarks show the SSD algorithm to be 2-8x faster than Mamba's optimised selective scan implementation.
					- While the reduced granularity of state decay in the SSD layer might appear to limit the model's expressivity, the paper argues that this can also be viewed as a form of inductive bias. By constraining the model's flexibility, the chunking strategy might actually guide it towards learning more generalisable representations, potentially improving performance on certain tasks.

  - # IP-Adapter: Text Compatible Image Prompt Adapter for Text-to-Image Diffusion Models
  - Hu Ye Jun Zhang Sibo Liu Xiao Han Wei Yang Tencent AI Lab4-5 minutes

	  ---

	  ![](https://ip-adapter.github.io/assets/fig0.jpg){:height 430, :width 1159}

	  - # Face Swap project (sub-project)
	  - [[Face Swap]]
	  - [[Segmentation and Identification]]
	  - [ChatGPT
	  - CodeHelper (openai.com)](https://chat.openai.com/g/g-YWd3Sg9X3-codehelper/c/4685d4fe-2ad7-475e-9a15-5fb9c4820990)
	  - Make a mermaid Gantt chart for this project, based on the code, identifying and scoping work packages
	  - ```import cv2
	   import cv2
	   import threading
	   import queue
	   import numpy as np

	   # GStreamer Pipeline for Efficient Video Capture
	   def create_gstreamer_pipeline(rtsp_url):
	       """
	       Create a GStreamer pipeline for efficient video capture using NVIDIA hardware-accelerated plugins.
	       :param rtsp_url: URL of the RTSP stream.
	       :return: GStreamer pipeline string.
	       """
	       return (
	           f'rtspsrc location={rtsp_url} latency=0 ! '
	           'rtph264depay ! h264parse ! '
	           'nvv4l2decoder ! nvvidconv ! '
	           'video/x-raw, format=(string)BGRx ! '
	           'videoconvert ! video/x-raw, format=(string)BGR ! appsink'
	       )

	   # Placeholder for TensorRT-Optimized YOLO Face Detection
	   def detect_objects(tensorrt_model, frame, gpu_id):
	       """
	       Detect objects in the frame using a TensorRT-optimized YOLO model.
	       :param tensorrt_model: Loaded TensorRT model for object detection.
	       :param frame: Video frame for object detection.
	       :param gpu_id: GPU ID to use for detection.
	       :return: List of detections (bounding boxes).
	       """
	       # Actual implementation required
	       return []

	   # Function for Feathered Blending at Bounding Box Edges
	   def feather_edges(mask, width):
	       """
	       Apply feathering to the edges of a mask for smooth blending.
	       :param mask: Binary mask for feathering.
	       :param width: Width for feathering effect.
	       :return: Feathered mask.
	       """
	       kernel = np.ones((width, width), np.uint8)
	       mask = cv2.erode(mask, kernel, iterations=1)
	       mask = cv2.blur(mask, (width, width))
	       return mask

	   # Function for Swapping Faces in the Frame
	   def swap_faces(detections, frame, swapper_model, gpu_id):
	       """
	       Swap faces in the frame based on detections.
	       :param detections: Detected faces with bounding boxes.
	       :param frame: Original video frame.
	       :param swapper_model: Face swapping model.
	       :param gpu_id: GPU ID to use for face swapping.
	       :return: Frame with swapped faces.
	       """
	       for det in detections:
	           x, y, w, h = det['box']
	           # Perform face swapping
	           swapped_face = swapper_model.swap(frame[y:y+h, x:x+w])

	           # Resize and blend swapped face into the original frame
	           resized_face = cv2.resize(swapped_face, (w, h))
	           mask = np.full((h, w), 255, dtype=np.uint8)
	           mask = feather_edges(mask, 10)
	           for c in range(0, 3):
	               frame[y:y+h, x:x+w, c] = frame[y:y+h, x:x+w, c] * (1
	  - mask/255.0) + resized_face[:, :, c] * (mask/255.0)

	       return frame

	   # Worker Function for Face Detection
	   def face_detection_worker(input_queue, output_queue, gpu_id, tensorrt_model):
	       """
	       Worker function for face detection. Runs on a separate thread.
	       :param input_queue: Queue for incoming frames.
	       :param output_queue: Queue for outgoing frames after detection.
	       :param gpu_id: GPU ID for this worker.
	       :param tensorrt_model: TensorRT optimized model for detection.
	       """
	       while True:
	           frame_info = input_queue.get()
	           if frame_info is None:
	               break
	           frame_counter, frame = frame_info
	           detections = detect_objects(tensorrt_model, frame, gpu_id)
	           output_queue.put((frame_counter, frame, detections))

	   # Worker Function for Face Swapping
	   def face_swapping_worker(input_queue, output_queue, gpu_id, swapper_model):
	       """
	       Worker function for face swapping. Runs on a separate thread.
	       :param input_queue: Queue for incoming frames with detections.
	       :param output_queue: Queue for outgoing frames after swapping.
	       :param gpu_id: GPU ID for this worker.
	       :param swapper_model: Model for face swapping.
	       """
	       while True:
	           frame_info = input_queue.get()
	           if frame_info is None:
	               break
	           frame_counter, frame, detections = frame_info
	           swapped_frame = swap_faces(detections, frame, swapper_model, gpu_id)
	           output_queue.put((frame_counter, swapped_frame))

	   # Main Function to Play RTSP Stream and Process Frames
	   def play_rtsp_stream(rtsp_url, tensorrt_model_paths, swapper_model_paths):
	       """
	       Main function to play RTSP stream and process frames using parallel workers.
	       :param rtsp_url: URL of the RTSP stream.
	       :param tensorrt_model_paths: Paths to TensorRT models for face detection.
	       :param swapper_model_paths: Paths to models for face swapping.
	       """
	       gst_pipeline = create_gstreamer_pipeline(rtsp_url)
	       vid_cap = cv2.VideoCapture(gst_pipeline, cv2.CAP_GSTREAMER)

	       detection_queue = queue.Queue()
	       swapping_queue = queue.Queue()
	       output_queue = queue.Queue()

	       detection_workers = [threading.Thread(target=face_detection_worker, args=(detection_queue, swapping_queue, gpu_id, model_path))
	                            for gpu_id, model_path in enumerate(tensorrt_model_paths)]
	       for worker in detection_workers:
	           worker.start()

	       swapping_workers = [threading.Thread(target=face_swapping_worker, args=(swapping_queue, output_queue, gpu_id, model_path))
	                           for gpu_id, model_path in enumerate(swapper_model_paths)]
	       for worker in swapping_workers:
	           worker.start()

	       frame_counter = 0
	       try:
	           while vid_cap.isOpened():
	               success, frame = vid_cap.read()
	               if not success:
	                   break

	               detection_queue.put((frame_counter, frame))
	               frame_counter += 1

	               if not output_queue.empty():
	                   counter, swapped_frame = output_queue.get()
	                   cv2.imshow('Processed Frame', swapped_frame)
	                   if cv2.waitKey(1) & 0xFF == ord('q'):
	                       break
	       except Exception as e:
	           print(f"Error processing video stream: {e}")
	       finally:
	           vid_cap.release()
	           cv2.destroyAllWindows()

	           for _ in detection_workers:
	               detection_queue.put(None)
	           for _ in swapping_workers:
	               swapping_queue.put(None)

	           for worker in detection_workers + swapping_workers:
	               worker.join()

	   # Example usage
	   play_rtsp_stream('rtsp://example.com/stream', ['path_to_tensorrt_model_gpu1', 'path_to_tensorrt_model_gpu2'],
	                    ['path_to_swapper_model_gpu1', 'path_to_swapper_model_gpu2'])

	   ```
  - [iperov/DeepFaceLive: Real-time face swap for PC streaming or video calls (github.com)](https://github.com/iperov/DeepFaceLive)
  - ![image.png](assets/image_1706624390895_0.png){:height 493, :width 1219}
  - ![image.png](assets/image_1706626142618_0.png)

  - #### Demo: Running UK Company [[Stable Diffusion Image Model]] (SDXL) with a cutting edge French language model creating the prompts in real-time, completely privately on local hardware
  - this is a local demo [<]iframe src="http://192.168.0.51:8188" style="width: 100%; height: 600px"></iframe>
  - {{video https://www.youtube.com/watch?v=kN8jdvRQvzA}}
  - {{video https://www.youtube.com/watch?v=AF2VyqSApjA}}
  - You can play with all of these on [Rundiffusion](https://app.rundiffusion.com/)
  - ![image.png](assets/image_1705158589247_0.png)
  - [[3D and 4D]]
  - {{embed ((65a5024d-11bb-4737-aef3-af73103fa218))}}

  - ## What's next: 3D world creation
		- Again, midjourney are working on a model. - 🟢 Best I can find is [Sudo AII](https://www.sudo.ai/)
		- <iframe src="https://www.sudo.ai" style="width: 100%; height: 600px"></iframe>
		- <iframe src="https://yueyang1996.github.io/holodeck/" style="width: 100%; height: 600px"></iframe>
		- https://research.nvidia.com/labs/toronto-ai/AlignYourGaussians/
		- [Mosaic-SDF for 3D Generative Models (connectedpapers.com)](https://www.connectedpapers.com/main/a7d6d07fdb631ce263ec2ddad72df269587fd3c9/Mosaic%20SDF-for-3D-Generative-Models/graph)
		- https://lioryariv.github.io/msdf/

  - # Community models
		- Models and inspiration from CivitAI, which is very often "not safe for work" so do exercise caution.
			- <iframe src="https://civitai.com/images" style="width: 100%; height: 600px"></iframe>

				- ## Mamba2's Core: The State Space Dual (SSD) Layer
					- The heart of Mamba2 lies in the State Space Dual (SSD) layer, a refined core SSM layer that replaces the S6 layer from Mamba. This layer embodies the principle of sacrificing some expressivity for substantial gains in computational efficiency, achieved by:
					- Unlike Mamba, which allows each element in the state vector to decay independently, Mamba2 groups these elements into chunks and applies the same decay factor to each chunk. This seemingly minor modification unlocks significant speedups by allowing the algorithm to leverage matrix multiplications, operations highly optimised on modern hardware like GPUs with their specialised tensor cores.
					- The chunking strategy in the SSD layer allows Mamba2 to embrace the computational power of matrix multiplications. This shift away from element-wise operations, which are less efficient on modern hardware, results in substantial reductions in training time. The paper's benchmarks show the SSD algorithm to be 2-8x faster than Mamba's optimised selective scan implementation.
					- While the reduced granularity of state decay in the SSD layer might appear to limit the model's expressivity, the paper argues that this can also be viewed as a form of inductive bias. By constraining the model's flexibility, the chunking strategy might actually guide it towards learning more generalisable representations, potentially improving performance on certain tasks.

  - # The story arc of THE MISTAKES
  - make the internet
  - centralise it to monetise it
  - ![Screenshot 2024-06-13 091134.png](assets/Screenshot_2024-06-13_091134_1718266390338_0.png){:width 600}
		- In conversation with [Doug Weir, Director of the Conflict and Climate Observatory.](https://ceobs.org/)

  - ## Funding
  - Collaborators
		- Ross Verrall [[Domain Expert Contact Index]] at [[NVIDIA Omniverse Platform]]has suggested applying for the Inception grant to assist with our bid.
		- Simon Graham : Creative Technology Director at Pixel Artworks has promised some hours and a market potential report as a match fund to the project for £3000
		- Summary of total project costs and funding requested.
		- Sections to fill:
		- Total project cost
		- Sections to fill:
		- Source of funding
		- Amount
		- Status (applied, granted)
		- **Advice**: Disclose all other funding to avoid duplication of funding issues.
		- Project status
		- **Advice**: Highlight synergies or distinctions with the current project to clarify the innovation aspect.
  - Labour_and_Overheads_Costs
		- Breakdown of labour costs and overhead allocations.
		- Sections to fill:
		- **Advice**: Ensure labour costs are justifiable and in line with standard industry practices.
  - Materials_Costs
		- Details of material costs for the project.
		- Sections to fill:
  - Capital_Usage
		- Usage of capital items/equipment.
		- Sections to fill:
		- Description of capital items
		- Justification for need
		- Depreciation method
	           'rtph264depay ! h264parse ! '
	           'nvv4l2decoder ! nvvidconv ! '
	           'video/x-raw, format=(string)BGRx ! '
	           'videoconvert ! video/x-raw, format=(string)BGR ! appsink'
	       )

	   # Placeholder for TensorRT-Optimized YOLO Face Detection
	   def detect_objects(tensorrt_model, frame, gpu_id):
	       """
	       Detect objects in the frame using a TensorRT-optimized YOLO model.
	       :param tensorrt_model: Loaded TensorRT model for object detection.
	       :param frame: Video frame for object detection.
	       :param gpu_id: GPU ID to use for detection.
	       :return: List of detections (bounding boxes).
	       """
	       # Actual implementation required
	       return []

	   # Function for Feathered Blending at Bounding Box Edges
	   def feather_edges(mask, width):
	       """
	       Apply feathering to the edges of a mask for smooth blending.
	       :param mask: Binary mask for feathering.
	       :param width: Width for feathering effect.
	       :return: Feathered mask.
	       """
	       kernel = np.ones((width, width), np.uint8)
	       mask = cv2.erode(mask, kernel, iterations=1)
	       mask = cv2.blur(mask, (width, width))
	       return mask

	   # Function for Swapping Faces in the Frame
	   def swap_faces(detections, frame, swapper_model, gpu_id):
	       """
	       Swap faces in the frame based on detections.
	       :param detections: Detected faces with bounding boxes.
	       :param frame: Original video frame.
	       :param swapper_model: Face swapping model.
	       :param gpu_id: GPU ID to use for face swapping.
	       :return: Frame with swapped faces.
	       """
	       for det in detections:
	           x, y, w, h = det['box']
	           # Perform face swapping
	           swapped_face = swapper_model.swap(frame[y:y+h, x:x+w])

	           # Resize and blend swapped face into the original frame
	           resized_face = cv2.resize(swapped_face, (w, h))
	           mask = np.full((h, w), 255, dtype=np.uint8)
	           mask = feather_edges(mask, 10)
	           for c in range(0, 3):
	               frame[y:y+h, x:x+w, c] = frame[y:y+h, x:x+w, c] * (1
	  - mask/255.0) + resized_face[:, :, c] * (mask/255.0)

	       return frame

	   # Worker Function for Face Detection
	   def face_detection_worker(input_queue, output_queue, gpu_id, tensorrt_model):
	       """
	       Worker function for face detection. Runs on a separate thread.
	       :param input_queue: Queue for incoming frames.
	       :param output_queue: Queue for outgoing frames after detection.
	       :param gpu_id: GPU ID for this worker.
	       :param tensorrt_model: TensorRT optimized model for detection.
	       """
	       while True:
	           frame_info = input_queue.get()
	           if frame_info is None:
	               break
	           frame_counter, frame = frame_info
	       """
	       Worker function for face swapping. Runs on a separate thread.
	       :param input_queue: Queue for incoming frames with detections.
	       :param output_queue: Queue for outgoing frames after swapping.
	       :param gpu_id: GPU ID for this worker.
	       swapping_queue = queue.Queue()
	       output_queue = queue.Queue()

	       detection_workers = [threading.Thread(target=face_detection_worker, args=(detection_queue, swapping_queue, gpu_id, model_path))
	                            for gpu_id, model_path in enumerate(tensorrt_model_paths)]
	       for worker in detection_workers:
	           worker.start()

	       swapping_workers = [threading.Thread(target=face_swapping_worker, args=(swapping_queue, output_queue, gpu_id, model_path))
	                           for gpu_id, model_path in enumerate(swapper_model_paths)]
	       for worker in swapping_workers:
	           worker.start()

	       frame_counter = 0
	       try:
	           while vid_cap.isOpened():
	               success, frame = vid_cap.read()
	               if not success:
	                   break

	               detection_queue.put((frame_counter, frame))
	               frame_counter += 1

		- #### 7️⃣ 🟢 [[Transformers]]
		- <iframe src="https://bbycroft.net/llm" style="width: 100%; height: 600px"></iframe>
  - Next [[presentation]] slide [[Proprietary Large Language Models]]

  - ### Customisation
			- ![ComfyUI_temp_ayipz_00012_.png](assets/ComfyUI_temp_ayipz_00012_1702330298489_0.png){:width 300, :height 402}
		- This opens up a world of possibilities for creating personalised images,
			- Generating images of specific objects or individuals,
			- Developing models for specialised domains like  [[Fashion]]  or architectural design.

  - # Community models
		- Models and inspiration from CivitAI, which is very often "not safe for work" so do exercise caution.
			- <iframe src="https://civitai.com/images" style="width: 100%; height: 600px"></iframe>

  - ## Explicitly develop under a "for profit" model.
				- ![Screenshot 2024-05-12 201440.png](assets/Screenshot_2024-05-12_201440_1715541399470_0.png){:width 400}
				- ![Screenshot 2024-05-12 201210.png](assets/Screenshot_2024-05-12_201210_1715541467566_0.png){:width 300}
				- [The bad and the ugly: AI is harmful, unreliable and running out of data (newatlas.com)](https://newatlas.com/technology/ai-index-report-negatives/)
				- [AI really is smoke and mirrors - by Brian Merchant (bloodinthemachine.com)](https://www.bloodinthemachine.com/p/ai-really-is-smoke-and-mirrors)
				- [The AI Revolution Is Already Losing Steam - WSJ](https://www.wsj.com/tech/ai/the-ai-revolution-is-already-losing-steam-a93478b1)
			- {{twitter https://twitter.com/AISafetyMemes/status/1759231062646104165)}}

  - # Community models
		- Models and inspiration from CivitAI, which is very often "not safe for work" so do exercise caution.
			- <iframe src="https://civitai.com/images" style="width: 100%; height: 600px"></iframe>
  - Stable Diffusion's versatility has led to its adoption across various industries:

  - ## What’s this for sorry?
  - In principle blockchains provide a **differentiated trust model**. With a properly distributed system a blockchain can be considered “trust-minimised”, though certainly not risk minimised. This is important for some, but not all people. There is not much emboldening of text within this book. If you start to question the whole reason for this ‘global technology revolution’ then it always comes back to those three words. Put more crispy it’s been hiding in plain sight since 20008as ‘Magic Internet Money’. Perhaps the lack of a trusted third party, and the potential for instant final settlement will be most important for machine to machine (AI) systems, and that is the primary focus of this book.
		- Argentina occupies the fourth position with an ownership and usage rate of 35% in 2022, representing almost 16 million people.
		- United Arab Emirates has 34% of the population owning or using cryptocurrency in 2022, representing almost 10 million people.
		- Philippines is ranked sixth with a 29% adoption rate.
		- ![image](./assets/78d091423a60bbb19d0d5b70d6f756dea814671b.jpg){:width 600}
  - Gladstein’s is a carefully developed and well researched book, but is [written from the western perspective](https://bitcoinmagazine.com/culture/imf-world-bank-repress-poor-countries)of (just) Bitcoin ‘being the raft’. Later in this book we will consider if it might be the iceberg, but this is not the domain expertise weoffer in this book. It is crucial to note that Gladstein has vociferous detractors within Africa. It seems entirely possible he’s anothergrifter as suggested by Kimani:
		- Gladstein is a charlatan who makes his living by selling the image of a global south that is corrupt, entirely lacking in rational thinking and needing a saviour, like him to swoop in and save us from our floundering selves. He exploits on tired and unproven stereotypes, cherry picks data while ignoring mountains of evidence that disprove him. Because he knows that as the perceived “morally superior” “right thinking” western superior coming to save, he will mostly go unchallenged. It’s a grift, an old grift that many like him have turned into an industry. Where they earn tax free income by selling a delusion and fetish to their western audience who need to think the global south is a failure of the human experience. He is trying to set himself up as some gate keeper and king maker in the Global South. He knows that the next phase of growth is. So he wants to make sure that westerners looking to invest in the global south see him as some “expert” and ask for his unfounded opinions. People like him run global morality extortion rings. How so? Simple: By purporting to know and be the keeper of global south morality, he will use his words to bless or curse your business, well, unless you make a generous donation to his foundation. These are scare tactics employed by charlatans to run tax-evading PR entities, thinly veiled as “human rights” organisations. If you are not on his side, he will slander you and your organisation. If you ensure you promote him and his ambitions, he anoints you as the good guy! He is trying to play the role that the Vatican and other corrupt religious organisations played in the 1800. Turning morality into a commodity that can be purchased from his market place: We decide who is good and who is bad and who can do business and who can’t. For a“ donation”. He is not the first and he will not be the last. It’s a growing industry, driven by shrewd westerners who know that they can sell racial stereotypes back home, but as long as they claim they are the one’s helping or saving the coloured peoples from themselves.”
  - [Raoul Pal of RealVision](https://dailyhodl.com/2022/05/04/crypto-winter-unlikely-as-astonishing-user-growth-dwarfs-internet-adoption-rate-macro-guru-raoul-pal/) says:
		- Crypto adoption is now massively outperforming the internet. It’s been growing at about 165% a year versus 85% for the internet for the same period of time now. According to analytics company Chainalysis; growth is fastest in the Middle east and North Africa.
		- ![image](./assets/4f2b5f5a0b5a45bfd512d93df8887d7bf26ef8cf.png){:width 600}
  - Thanks to a natural fit with strong encryption, and innate resistance to censorship by external parties, these systems do lend themselves well to ‘borderless’ applications, and are somewhat resistant to global regulation (for good or ill). Given the rates of adoption, it seems that this stuff is coming regardless of their usefulness to the developed world. If we are to take this as a given then we can perhaps logically infer that finding a use case for the technology is important, somewhat irrespective of other arguments.
  - ![image](./assets/0d6b1c37a883aee67adc0fe27f1b91ab8b0c94ed.jpg){:width 800}
  - ![image](./assets/1faa49460091dce2ec328e3494bd4ef77a54c8bc.jpg){:width 600}

  - ## AI augmented search is wasteful
  - [Expanding AI Overviews and introducing AI Mode](https://blog.google/products/search/ai-mode-search/?utm_source=linkedin&utm_medium=social&utm_campaign=og&utm_content=&utm_term=)
  - ![Screenshot 2024-06-13 091134.png](assets/Screenshot_2024-06-13_091134_1718266390338_0.png){:width 600}
		- In conversation with [Doug Weir, Director of the Conflict and Climate Observatory.](https://ceobs.org/)

  - ## AI augmented search is wasteful
  - [Expanding AI Overviews and introducing AI Mode](https://blog.google/products/search/ai-mode-search/?utm_source=linkedin&utm_medium=social&utm_campaign=og&utm_content=&utm_term=)
  - ![Screenshot 2024-06-13 091134.png](assets/Screenshot_2024-06-13_091134_1718266390338_0.png){:width 600}
		- In conversation with [Doug Weir, Director of the Conflict and Climate Observatory.](https://ceobs.org/)

  ## Characteristics

  - **Representation Capacity**: Larger width enables richer representations
  - **Synonymous with Hidden Dimension**: Often used interchangeably
  - **Scaling Dimension**: Key parameter in model scaling studies
  - **Computational Impact**: Affects parameter count quadratically in attention

  ## Academic Foundations

  **Primary Source**: Scaling laws literature; Kaplan et al., arXiv:2001.08361 (2020)

  **Scaling Studies**: Increasing width is one of three primary scaling dimensions (alongside depth and data) studied in scaling laws research.

  ## Technical Context

  Model width, along with model depth and dataset size, is a key dimension in scaling language models. Scaling laws research shows specific relationships between width and model performance, though optimal allocation of compute across width, depth, and data remains an active research area.

  ## Ontological Relationships

  - **Broader Term**: Model Hyperparameter
  - **Related Terms**: Hidden Dimension, Model Depth, Parameter Count
  - **Synonyms**: Hidden Dimension, d_model

  ## Usage Context

  "Scaling laws explore optimal trade-offs between model width, depth, and training data for efficient compute allocation."

  ## Characteristics

  - **Representation Capacity**: Larger width enables richer representations
  - **Synonymous with Hidden Dimension**: Often used interchangeably
  - **Scaling Dimension**: Key parameter in model scaling studies
  - **Computational Impact**: Affects parameter count quadratically in attention

  ## Academic Foundations

  **Primary Source**: Scaling laws literature; Kaplan et al., arXiv:2001.08361 (2020)

  **Scaling Studies**: Increasing width is one of three primary scaling dimensions (alongside depth and data) studied in scaling laws research.

  ## Technical Context

  Model width, along with model depth and dataset size, is a key dimension in scaling language models. Scaling laws research shows specific relationships between width and model performance, though optimal allocation of compute across width, depth, and data remains an active research area.

  ## Ontological Relationships

  - **Broader Term**: Model Hyperparameter
  - **Related Terms**: Hidden Dimension, Model Depth, Parameter Count
  - **Synonyms**: Hidden Dimension, d_model

  ## Usage Context

  "Scaling laws explore optimal trade-offs between model width, depth, and training data for efficient compute allocation."

  #### References
  - Kaplan, J., et al. (2020). "Scaling Laws for Neural Language Models". arXiv:2001.08361
		  - Survey: arXiv:2405.10938 (2024)

		  ---

		  *Ontology Term managed by AI-Grounded Ontology Working Group*
		  *UK English Spelling Standards Applied*

		  ```

  - public-access:: true
  - definition:: The dimensionality of representations within each layer, typically referring to the hidden dimension (d_model), determining the capacity of the model to encode information at each layer.



  # Model Width – Updated Ontology Entry

  ## Academic Context

  - Foundational concept in neural network architecture design
  - Represents the hidden dimension (d_model) within transformer and deep learning layers
  - Directly influences the representational capacity and information encoding capability at each processing stage
  - Distinguished from model depth (number of layers) and total parameter count as a discrete architectural dimension
  - Historical context: emerged as critical design parameter with the transformer architecture (Vaswani et al., 2017)

  ## Current Landscape (2025)

  - Architectural design considerations have evolved significantly
  - Model width no longer determines capability in isolation; training data quality and architecture innovations (Mixture-of-Experts, efficient attention mechanisms) now exert comparable or greater influence[1]
  - A model with 30 billion total parameters but only 3 billion active parameters per token can achieve performance characteristics of substantially wider dense models[1]
  - Smaller models (~3.8B parameters) now achieve >60% on MMLU benchmarks, performance previously requiring models 100× larger[1]
  - Width selection increasingly depends on inference constraints and deployment context rather than raw capability requirements

  - Technical capabilities and trade-offs
  - Wider layers increase per-token computational cost and memory requirements during both training and inference
  - Optimal width varies by: available computational budget, context window requirements, quantisation strategy, and downstream task characteristics
  - Modern quantisation techniques reduce the practical distinction between theoretically wide and narrow models in deployment scenarios
  - Context window capacity (now commonly 128K tokens, with specialised implementations reaching multi-million token windows) often matters more than width for contemporary applications[1]

  - UK and North England implementation landscape
  - Limited specific regional documentation available; however, UK-based AI research institutions (Cambridge, Oxford, Edinburgh) contribute substantially to architectural efficiency research that informs width optimisation decisions
  - Manchester's growing AI sector and Newcastle's computational research initiatives increasingly engage with efficient model design principles, though public case studies remain sparse

  ## Research & Literature

  - Foundational and contemporary sources
  - Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). "Attention Is All You Need." *Advances in Neural Information Processing Systems*, 30. [Seminal transformer architecture paper establishing d_model as critical parameter]
  - Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). "Scaling Laws for Neural Language Models." *arXiv preprint arXiv:2001.08361*. [Establishes empirical relationships between model dimensions and performance]
  - Hoffmann, B., Borgeaud, S., Mensch, A., et al. (2022). "Training Compute-Optimal Large Language Models." *arXiv preprint arXiv:2203.15556*. [Demonstrates optimal width-depth trade-offs for given compute budgets]
  - Recent 2025 findings indicate that architectural efficiency innovations (MoE, selective activation) have substantially altered classical scaling relationships, though formal peer-reviewed literature remains in preprint stage

  - Ongoing research directions
  - Optimal width determination under various quantisation regimes (INT8, INT4, mixed-precision)
  - Width-context window interaction effects in long-sequence processing
  - Efficiency gains from dynamic width adjustment during inference

  ## Current Technical Precision

  - Width functions as a bottleneck and information-carrying capacity parameter
  - Determines the dimensionality of intermediate representations: each token processed through a layer of width d produces a d-dimensional vector
  - Interacts multiplicatively with attention head dimensions and feed-forward layer widths in transformer architectures
  - Computational cost scales linearly with width in most contemporary implementations (though some sparse architectures decouple this relationship)

  - Practical considerations (2025)
  - Width selection increasingly secondary to data quality and training methodology[1]
  - Mixture-of-Experts architectures allow "apparent width" (total parameters) to exceed "active width" (parameters engaged per token), complicating traditional width-based analysis
  - Quantisation-aware design now influences optimal width choices; narrower models sometimes quantise more effectively than wider counterparts

  ## Future Directions

  - Emerging developments
  - Adaptive width mechanisms that adjust representational capacity based on input complexity
  - Integration of width optimisation with emerging efficiency standards and frameworks
  - Refinement of width-context-capability relationships as ultra-long-context models become standard

  - Anticipated challenges
  - Balancing width reduction against downstream task performance degradation
  - Determining optimal width for multimodal architectures (vision-language models, audio-text systems)
  - Standardising width metrics across diverse architectural families (dense, sparse, hybrid)

  - Research priorities
  - Empirical characterisation of width requirements for emerging task domains
  - Formal theoretical frameworks connecting width to information-theoretic capacity bounds
  - Practical guidance for practitioners selecting width under real-world computational constraints

  ---

  **Note on tone:** The observation that "model choice is about fit, not size" rather neatly captures the 2025 reality—rather like discovering that a well-tailored suit often outperforms an ill-fitting warehouse coat, regardless of fabric quantity.


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
