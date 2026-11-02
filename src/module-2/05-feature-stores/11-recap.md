# Recap & Practice

## Recap

- A **feature** is a model input tied to an entity and a timestamp. It can be batch, streaming or request-time.
- A **feature store** gives one definition per feature, shared by training and serving, and makes features discoverable and reusable.
- The **offline store** keeps history for training. The **online store** keeps the latest value for fast lookup. **Materialization** copies data between them.
- **Training-serving skew** comes from different code paths or changing data. Reduce it with shared definitions, shared code and logged serving features.
- **Point-in-time joins** stop future data from leaking into training rows. TTL and created timestamps add control.
- **Streaming features** need dual writes (online and offline) and careful handling of late events.
- Serving is **batch, online or hybrid**. Servers like Triton and KServe handle batching, scaling and rollouts.
- Split the **latency budget** across steps, track p99, and design for the tail with timeouts, fallbacks and precomputation.
- **Embeddings** turn items into vectors where closeness means similarity. **Two-stage recommenders** use ANN retrieval first and a ranker second.

## Practice questions

1. Design the feature layer for a food delivery ETA model. Which features are batch, streaming and request-time? *Hint: restaurant load is streaming, 90-day averages are batch, distance is request-time.*
2. Your model's offline AUC is high but online results are poor. How do you check for training-serving skew? *Hint: log serving features, compare distributions with training, look for separate code paths.*
3. Explain a point-in-time join with a churn example. What breaks if you join on user id only? *Hint: you may pick feature values from after the label time (leakage).*
4. A fraud check must finish in 100 ms with 3 feature lookups, one model call and one rules step. Draw a latency budget and say what happens on a timeout. *Hint: parallel lookups, per-step timeouts, safe default or fallback rule.*
5. Why do large recommenders use two stages? What does the first stage optimise for, and how is the item side prepared? *Hint: speed and recall; item embeddings precomputed and indexed for ANN.*
6. Compare batch, online and hybrid prediction for a "people you may know" feature. *Hint: freshness against cost; precomputed embeddings with online ranking.*

## Sources

- Google Cloud, MLOps: Continuous delivery and automation pipelines in ML: https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning
- Google, Rules of Machine Learning (training-serving skew, Rules 29, 31, 32): https://developers.google.com/machine-learning/guides/rules-of-ml
- Feast docs, Point-in-time joins: https://docs.feast.dev/getting-started/concepts/point-in-time-joins
- Feast docs, Feature retrieval: https://docs.feast.dev/getting-started/concepts/feature-retrieval
- Feast docs, Feature view: https://docs.feast.dev/getting-started/concepts/feature-view
- Feast docs, Stream feature view: https://docs.feast.dev/getting-started/concepts/stream-feature-view
- Feast docs, Push source: https://docs.feast.dev/reference/data-sources/push
- Feast docs, Online store: https://docs.feast.dev/getting-started/components/online-store
- Feast docs, Feature server: https://docs.feast.dev/getting-started/components/feature-server
- Feast docs, Online stores list: https://docs.feast.dev/reference/online-stores
- Feast docs, Quickstart: https://docs.feast.dev/getting-started/quickstart
- Feast docs, Concepts overview: https://docs.feast.dev/getting-started/concepts/overview
- InfoQ, Michelangelo Palette (Uber): https://www.infoq.com/presentations/michelangelo-palette-uber
- Amazon DynamoDB Developer Guide, What is DynamoDB: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html
- Google Cloud, Vertex AI inference overview: https://docs.cloud.google.com/vertex-ai/docs/predictions/overview
- NVIDIA Triton, Batchers: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/batcher.html
- KServe website and README: https://kserve.github.io/website/ and https://github.com/kserve/kserve
- Dean and Barroso, The Tail at Scale (abstract): https://research.google/pubs/the-tail-at-scale/
- Google ML Crash Course, Embedding space: https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space
- Google, Recommendation systems: candidate generation: https://developers.google.com/machine-learning/recommendation/overview/candidate-generation
- Google, Recommendation systems: types (scoring, re-ranking): https://developers.google.com/machine-learning/recommendation/overview/types
- Google, Deep neural network retrieval: https://developers.google.com/machine-learning/recommendation/dnn/retrieval
- Google, Softmax / two-tower embeddings: https://developers.google.com/machine-learning/recommendation/dnn/softmax
- Covington et al., Deep Neural Networks for YouTube Recommendations: https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/
- Malkov and Yashunin, HNSW (abstract): https://huggingface.co/papers/1603.09320
- Faiss wiki: https://github.com/facebookresearch/faiss/wiki
