# Recap & Practice

## Recap

- The ML lifecycle is a loop: frame, data, train, evaluate, deploy, monitor, repeat. Most of a real ML system is not the model.
- Frame the problem first. Set a heuristic baseline and choose both offline and business metrics.
- Validate data at the gate (statistics, schema, anomalies, skew, drift). Version data so every model is traceable.
- Labels are imperfect and often late. Use guidelines, agreement checks and a trusted gold set.
- Track code, data, parameters, metrics and artifacts for every run. Keep the test set clean.
- A registry gives versions, lineage and approval. Serve by alias so release and rollback are pointer moves.
- An orchestrator runs a DAG of small, idempotent steps. CI tests code, data and models. CD ships the pipeline. CT retrains.
- Choose batch or online by freshness, input space and latency. Release through shadow, canary or A/B with rollback ready.
- Monitor slices, model age, input and prediction drift, and real quality when labels arrive.

## Practice questions

1. **Your team wants to add ML to an order-delay alert. How do you decide whether ML is needed?** Hint: Start with a heuristic baseline, define the ideal outcome, output and success metrics, and check that data exists.
2. **Design a retraining pipeline for a fraud model. What are the steps and the gates?** Hint: Ingest, validate, prepare, train, evaluate against production, register, canary. Stop on schema skew.
3. **A model has 95% offline accuracy but business metrics fall after launch. What could be wrong?** Hint: Offline metric is not the business metric, training-serving skew, test data not like live data, no segment checks.
4. **When would you pick batch prediction over online prediction, and can you mix them?** Hint: Freshness, input space, cost and latency. A batch cache plus an online fallback for the long tail.
5. **Compare shadow, canary and A/B deployment. Which would you use for a high-risk new model?** Hint: Shadow first (no user risk), then a small canary, then A/B if business proof is needed. Define rollback.
6. **Labels for your model arrive 30 days late. How do you monitor it in the meantime?** Hint: Input drift, prediction drift, proxy metrics, model age alerts, then real quality once labels arrive.

## Sources

- Google Cloud, "MLOps: Continuous delivery and automation pipelines in machine learning": https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning
- Google, "Rules of Machine Learning": https://developers.google.com/machine-learning/guides/rules-of-ml
- Google, "Problem framing summary": https://developers.google.com/machine-learning/problem-framing/summary
- Google, Machine Learning Crash Course, "Static versus dynamic inference": https://developers.google.com/machine-learning/crash-course/production-ml-systems/static-vs-dynamic-inference
- Google, Machine Learning Crash Course, "Monitoring pipelines": https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring
- Google, Machine Learning Crash Course, "Datasets: dividing the original dataset": https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets
- Sculley et al., "Hidden Technical Debt in Machine Learning Systems" (NIPS 2015): https://papers.nips.cc/paper_files/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf
- Breck et al., "The ML Test Score" (IEEE Big Data 2017): https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf
- Northcutt, Athalye and Mueller, "Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks": https://arxiv.org/abs/2103.14749
- TensorFlow Data Validation, "Get started": https://www.tensorflow.org/tfx/data_validation/get_started
- DVC, "Get started": https://doc.dvc.org/start
- Label Studio, "Machine learning integration": https://labelstud.io/guide/ml
- MLflow, "Tracking": https://mlflow.org/docs/latest/ml/tracking/
- MLflow, "Model Registry": https://mlflow.org/docs/latest/ml/model-registry/
- MLflow, "Python client API": https://mlflow.org/docs/latest/api_reference/python_api/mlflow.client.html
- Apache Airflow, "Architecture overview": https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html
- Kubeflow, "Pipelines overview": https://www.kubeflow.org/docs/components/pipelines/overview/
- Microsoft, "MLOps maturity model" (page dated June 2026): https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/mlops-maturity-model
- AWS Well-Architected Machine Learning Lens, "Deployment": https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/deployment.html
- Amazon SageMaker AI, "Model deployment": https://docs.aws.amazon.com/sagemaker/latest/dg/model-deploy-mlops.html
- Evidently AI, "Concept drift": https://evidentlyai.com/ml-in-production/concept-drift
