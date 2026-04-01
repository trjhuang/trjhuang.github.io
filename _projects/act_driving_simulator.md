---
layout: page
title: ACT Driving Simulator
description: Leveraging LLMs for autonomous vehicle operations.
img: assets/img/act_driving_simulator.jpg # Update with your actual image filename
importance: 1
---

**Autonomous and Connected Transportation Lab, Georgia Tech**

*Georgia Tech Vertically Integrated Projects Program (Fall 2025)*


[**🔗 View Team Page**](https://vip.gatech.edu/teams-all-in-one/entry/1342/){:target="_blank" rel="noopener noreferrer"}


This project demonstrates a comprehensive, end-to-end approach to applying advanced machine learning techniques within the autonomous driving domain. By integrating natural language processing (NLP) with spatial trajectory data, both high-level semantic scenario understanding and low-level vehicle trajectory prediction are covered.

The work is unified by a focus on efficient model adaptation, leveraging Parameter-Efficient Fine-Tuning (PEFT) and Low-Rank Adaptation (LoRA) to deploy state-of-the-art Large Language Models (LLMs) like Qwen 2.5 and T5 without requiring massive compute resources.

## Part 1: Semantic Scenario Generation and Maneuver Prediction

A critical challenge in autonomous systems is translating raw, programmatic driving scenarios into human-readable descriptions and actionable maneuvers. To solve this, I fine-tuned a large language model to act as a bridge between the Scenic programming language and natural language output.

### Technical Approach

* **Model Selection & Quantization:** Utilized the `Qwen/Qwen2.5-7B-Instruct` model. To ensure memory efficiency during training, the model was loaded using 4-bit quantization (via `bitsandbytes`).
* **LoRA Fine-Tuning:** Applied Low-Rank Adaptation targeting the attention and feed-forward modules ($r=16$, $\alpha=32$). This drastically reduced the number of trainable parameters while maintaining the model's high reasoning capabilities.
* **End-to-End Pipeline:**
    1.  **Scenario Description Generation:** The model successfully learned to ingest Scenic context snippets (map features, agent behaviors, spatial relations) and generate concise, accurate natural language descriptions. 
    2.  **Maneuver Prediction:** The generated descriptions were then fed back into the model to predict a semicolon-separated sequence of high-level driving maneuvers from a predefined vocabulary.

---

## Part 2: Waymo Motion Data Engineering & Trajectory Modeling

Transitioning from semantic understanding to kinematic prediction required processing complex spatial data. We built a lightweight pipeline to parse and visualize the Waymo Motion dataset, culminating in a Multi-Layer Perceptron (MLP) for trajectory forecasting.

### Technical Approach

* **Protocol Buffer Compilation:** Extracted and compiled the official Waymo `.proto` definitions into Python classes via `gRPC` tools, completely bypassing the heavy, Linux-only TensorFlow dependencies usually required for this dataset.
* **Trajectory Prediction MLP:** Engineered a PyTorch-based neural network to predict future agent states based on historical positions. The raw data was transformed into normalized PyTorch tensors, with masks applied to handle missing historical frames.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/act_img_1.png" title="Trajectory Prediction Visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Trajectory prediction visualization using the Waymo Motion dataset (not from our actual project).
</div>

---

## Part 3: Generalizing PEFT with Sequence-to-Sequence Models

To further solidify the methodology used in the Qwen 2.5 architecture, we implemented a secondary fine-tuning workflow utilizing the Hugging Face `T5-small` model.

### Technical Approach

* **Dataset Handling:** Processed synthetic JSONL datasets, mapping input instructions to expected outputs with strict tokenization and padding limits (max length 128).
* **Adapter Configuration:** Deployed a LoRA configuration ($r=8$, $\alpha=32$) targeting the attention query and value matrices.
* **Training & Evaluation:** Evaluated the baseline model's raw output, trained the LoRA adapters over 20 epochs, and dynamically reloaded the adapters onto the base model for comparative inference. This demonstrated a clear, measurable improvement in the model's ability to follow specific formatting instructions compared to its pre-trained state.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/act_img_2.png" title="Training and Evaluation Metrics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    LoRA fine-tuning setup.
</div>

---

## Conclusion & Impact

This work highlights a capability in handling the modern AI engineering stack. From compiling low-level Protocol Buffers and streaming raw TFRecords to configuring advanced LoRA adapters and quantization for billion-parameter LLMs, it demonstrates the ability to build, train, and evaluate end-to-end pipelines for complex, real-world autonomy tasks.
