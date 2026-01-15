export const projectsData = [
    {
        id: 1,
        name: 'LLM Vulnerability Scanner',
        tools: ['Python', 'FastAPI', 'Streamlit', 'Docker', 'Ollama', 'Llama Guard', 'Security Testing'],
        role: "Software Engineer",
        code: 'https://github.com/vbvss199/llmscanner',
        demo: '',
        description: 'Developed a comprehensive security testing tool for Large Language Models using FastAPI and Streamlit. Implemented automated vulnerability scanning leveraging Llama Guard to detect potential security risks, prompt injections, and unsafe outputs. Containerized the application with Docker for seamless deployment and scalability across different environments.'
    },
    {
        id: 2,
        name: 'YOLOv5s Parking Space Classifier',
        tools: ['Python', 'PyTorch', 'YOLOv5', 'Computer Vision', 'Flask', 'Google Colab', 'Git', 'Pattern Recognition'],
        role: "Software Engineer",
        code: 'https://github.com/vbvss199/parking-lot-occupancy-detection',
        demo: '',
        description: 'Built a real-time parking space detection system using YOLOv5s object detection model trained on custom datasets. Implemented computer vision techniques for pattern recognition to classify occupied vs. available parking spots with 95% accuracy. Deployed the model using Gradio, enabling real-time inference for parking management systems.'
    },
    {
        id: 3,
        name: 'Tic-Tac-Toe AI with Minimax and MCTS',
        tools: ['Python', 'Minimax Algorithm', 'Monte Carlo Tree Search', 'Game Theory', 'AI', 'Algorithm Optimization'],
        role: "Software Engineer",
        code: 'https://github.com/vbvss199/project23_UNH',
        demo: '',
        description: 'Implemented and compared two AI algorithms for Tic-Tac-Toe: Minimax with alpha-beta pruning and Monte Carlo Tree Search (MCTS). Analyzed algorithm performance characteristics, with Minimax providing deterministic optimal play through exhaustive game tree search, while MCTS demonstrated probabilistic decision-making through random simulations. Evaluated computational efficiency, move selection speed, and decision-making patterns across different game states to understand the trade-offs between both approaches.'
    },
       // ...existing code...
    {
        id: 4,
        name: 'Adaptive Multimedia Streaming in Wireless Networks',
        tools: ['NS-3', 'C++', 'MPEG-DASH', 'WLAN', 'HTTP', 'Network Simulation', 'Quality of Service', 'UDP', 'RTP', 'LTE'],
        role: "Software Engineer",
        code: '',
        demo: '',
        description: 'Simulated adaptive bitrate streaming protocols using NS-3 network simulator to optimize multimedia delivery across multiple wireless network topologies. Implemented MPEG-DASH standard with buffer-based rate adaptation algorithms to dynamically adjust bitrate based on network conditions and buffer occupancy, reducing rebuffering events by 40% during steady-state operation. Evaluated multiple streaming protocols (UDP, RTP, DASH) across single-hop and mesh network configurations, achieving 30% improvement in average video quality and effective throughput in high-congestion scenarios through accurate capacity estimation during start-up phase and buffer management in steady state.'
    },
    // ...existing code...
    {
        id: 5,
        name: 'Retinal Disease Classification on OCT Images',
        tools: ['Python', 'TensorFlow', 'Keras', 'Xception', 'ResNet50', 'Transfer Learning', 'Medical Imaging', 'Deep Learning', 'Data Augmentation'],
        role: "Software Engineer",
        code: '',
        demo: '',
        description: 'Developed a deep learning model for automated retinal disease classification using Optical Coherence Tomography (OCT) images to detect AMD, DME, and CNV pathologies. Leveraged transfer learning with Xception and ResNet50 pre-trained architectures, achieving 96.8% accuracy on 84,000+ annotated SD-OCT images - outperforming traditional handcrafted feature extraction methods (HOG/LBP) by 46%. Applied data augmentation techniques and optimized train-validation splits to prevent overfitting, demonstrating superior performance compared to existing CNN-from-scratch approaches while enabling early disease detection for improved patient healthcare outcomes.'
    },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },