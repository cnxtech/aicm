const ai_concept_map_data = {
	"links": [
		{"source": "machine_learning", "target": "supervised_learning", "type": "derivative"},
		{"source": "machine_learning", "target": "reinforcement_learning", "type": "derivative"},
		{"source": "machine_learning", "target": "structured_prediction", "type": "derivative"},
		{"source": "machine_learning", "target": "anomaly_detection", "type": "derivative"},
		{"source": "machine_learning", "target": "dimen_reduction", "type": "derivative"},
		{"source": "machine_learning", "target": "unsupervised_learning", "type": "derivative"},
		{"source": "machine_learning", "target": "semi_supervised_learning", "type": "derivative"},
		{"source": "supervised_learning", "target": "svm", "type": "derivative"},
		{"source": "supervised_learning", "target": "neural_nets", "type": "derivative"},
		{"source": "supervised_learning", "target": "markov_model", "type": "derivative"},
		{"source": "supervised_learning", "target": "regressions", "type": "derivative"},
		{"source": "supervised_learning", "target": "naive_bayes", "type": "derivative"},
		{"source": "svm", "target": "nonlinear_svm", "type": "derivative"},
		{"source": "svm", "target": "linear_svm", "type": "derivative"},
		{"source": "svm", "target": "single_svm", "type": "derivative"},
		{"source": "neural_nets", "target": "convo_neural_nets", "type": "derivative"},
		{"source": "neural_nets", "target": "autoencoder", "type": "derivative"},
		{"source": "neural_nets", "target": "rec_neural_nets", "type": "derivative"},
		{"source": "neural_nets", "target": "gan", "type": "derivative"},
		{"source": "neural_nets", "target": "perceptron", "type": "derivative"},
		{"source": "neural_nets", "target": "stacked_autoencoders", "type": "derivative"},
		{"source": "neural_nets", "target": "self_organ_maps", "type": "derivative"},
		{"source": "neural_nets", "target": "adapt_reson_theory", "type": "derivative"},
		{"source": "neural_nets", "target": "replicator_nn", "type": "derivative"},
		{"source": "markov_model", "target": "markov_chains", "type": "derivative"},
		{"source": "markov_model", "target": "hidden_markov_model", "type": "derivative"},
		{"source": "regressions", "target": "log_regression", "type": "derivative"},
		{"source": "regressions", "target": "linear_regressions", "type": "derivative"},
		{"source": "linear_regressions", "target": "multi_linear_regression", "type": "derivative"},
		{"source": "linear_regressions", "target": "poly_regression", "type": "derivative"},
		{"source": "linear_regressions", "target": "simple_linear_regression", "type": "derivative"},
		{"source": "regressions", "target": "curvilinear_regression", "type": "derivative"},
		{"source": "structured_prediction", "target": "decision_trees_cart", "type": "derivative"},
		{"source": "structured_prediction", "target": "boost_algos", "type": "derivative"},
		{"source": "decision_trees_cart", "target": "classification_trees", "type": "derivative"},
		{"source": "decision_trees_cart", "target": "regression_trees", "type": "derivative"},
		{"source": "decision_trees_cart", "target": "ensemble_methods", "type": "derivative"},
		{"source": "decision_trees_cart", "target": "boosted_trees", "type": "derivative"},
		{"source": "boosted_trees", "target": "boost_algos", "type": "derivative"},
		{"source": "boot_aggregated", "target": "rand_forest", "type": "derivative"},
		{"source": "boost_algos", "target": "grad_boost", "type": "derivative"},
		{"source": "boost_algos", "target": "adaboost", "type": "derivative"},
		{"source": "anomaly_detection", "target": "ensemble_methods", "type": "derivative"},
		{"source": "anomaly_detection", "target": "static_rules", "type": "derivative"},
		{"source": "anomaly_detection", "target": "fuzzy_outlier_detection", "type": "derivative"},
		{"source": "anomaly_detection", "target": "cluster_analysis_outlier_detection", "type": "derivative"},
		{"source": "anomaly_detection", "target": "replicator_nn", "type": "derivative"},
		{"source": "anomaly_detection", "target": "single_svm", "type": "derivative"},
		{"source": "anomaly_detection", "target": "subspace_correlation", "type": "derivative"},
		{"source": "anomaly_detection", "target": "density_techniques", "type": "derivative"},
		{"source": "anomaly_detection", "target": "ensemble_methods", "type": "derivative"},
		{"source": "ensemble_methods", "target": "feature_bagging", "type": "derivative"},
		{"source": "ensemble_methods", "target": "score_norma", "type": "derivative"},
		{"source": "ensemble_methods", "target": "rotation_forest", "type": "derivative"},
		{"source": "ensemble_methods", "target": "boot_aggregated", "type": "derivative"},
		{"source": "density_techniques", "target": "local_outlier", "type": "derivative"},
		{"source": "density_techniques", "target": "knn", "type": "derivative"},
		{"source": "dimen_reduction", "target": "bayesian_models", "type": "derivative"},
		{"source": "dimen_reduction", "target": "missing_values", "type": "derivative"},
		{"source": "dimen_reduction", "target": "low_var_filter", "type": "derivative"},
		{"source": "dimen_reduction", "target": "multidimen_scaling", "type": "derivative"},
		{"source": "dimen_reduction", "target": "chisquare", "type": "derivative"},
		{"source": "dimen_reduction", "target": "stacked_autoencoders", "type": "derivative"},
		{"source": "dimen_reduction", "target": "decision_trees_ensembles", "type": "derivative"},
		{"source": "dimen_reduction", "target": "tsne", "type": "derivative"},
		{"source": "dimen_reduction", "target": "clustering", "type": "derivative"},
		{"source": "dimen_reduction", "target": "corr_analysis", "type": "derivative"},
		{"source": "dimen_reduction", "target": "rand_projections", "type": "derivative"},
		{"source": "dimen_reduction", "target": "pca", "type": "derivative"},
		{"source": "dimen_reduction", "target": "decision_trees_cart", "type": "derivative"},
		{"source": "dimen_reduction", "target": "forward_feat_selection", "type": "derivative"},
		{"source": "dimen_reduction", "target": "backward_feature", "type": "derivative"},
		{"source": "dimen_reduction", "target": "high_correlation", "type": "derivative"},
		{"source": "dimen_reduction", "target": "factor_analysis", "type": "derivative"},
		{"source": "dimen_reduction", "target": "nmf", "type": "derivative"},
		{"source": "dimen_reduction", "target": "self_organ_maps", "type": "derivative"},
		{"source": "pca", "target": "kernel_pca", "type": "derivative"},
		{"source": "pca", "target": "graph_kernel_pca", "type": "derivative"},
		{"source": "pca", "target": "blind_signal", "type": "derivative"},
		{"source": "factor_analysis", "target": "efa", "type": "derivative"},
		{"source": "factor_analysis", "target": "cfa", "type": "derivative"},
		{"source": "unsupervised_learning", "target": "knn", "type": "derivative"},
		{"source": "unsupervised_learning", "target": "clustering", "type": "derivative"},
		{"source": "unsupervised_learning", "target": "neural_nets", "type": "derivative"},
		{"source": "hierarch_clustering", "target": "agglomerative", "type": "derivative"},
		{"source": "hierarch_clustering", "target": "divisive", "type": "derivative"},
		{"source": "clustering", "target": "centroid_clustering", "type": "derivative"},
		{"source": "clustering", "target": "distri_clustering", "type": "derivative"},
		{"source": "clustering", "target": "hierarch_clustering", "type": "derivative"},
		{"source": "clustering", "target": "density_clustering", "type": "derivative"},
		{"source": "clustering", "target": "preclustering", "type": "derivative"},
		{"source": "clustering", "target": "corr_clustering", "type": "derivative"},
		{"source": "clustering", "target": "subspace_clustering", "type": "derivative"},
		{"source": "centroid_clustering", "target": "kmeans_clustering", "type": "derivative"},
		{"source": "centroid_clustering", "target": "kmedians_clustering", "type": "derivative"},
		{"source": "centroid_clustering", "target": "fuzzy_cmeans_clustering", "type": "derivative"},
		{"source": "kmeans_clustering", "target": "kmeans++_clustering", "type": "derivative"},
		{"source": "distri_clustering", "target": "gauss_mixture", "type": "derivative"},
		{"source": "density_clustering", "target": "dbscan", "type": "derivative"},
		{"source": "density_clustering", "target": "optics", "type": "derivative"},
		{"source": "preclustering", "target": "canopy_clustering", "type": "derivative"},
		{"source": "subspace_clustering", "target": "clique", "type": "derivative"},
		{"source": "subspace_clustering", "target": "subclu", "type": "derivative"},
		{"source": "latent_var_models", "target": "exp_max_algo", "type": "derivative"},
		{"source": "latent_var_models", "target": "meth_moments", "type": "derivative"},
		{"source": "blind_signal", "target": "latent_var_models", "type": "derivative"},
		{"source": "blind_signal", "target": "ssa", "type": "derivative"},
		{"source": "blind_signal", "target": "nmf", "type": "derivative"},
		{"source": "blind_signal", "target": "ica", "type": "derivative"},
		{"source": "blind_signal", "target": "svd", "type": "derivative"},
		{"source": "semi_supervised_learning", "target": "graph_methods", "type": "derivative"},
		{"source": "semi_supervised_learning", "target": "generative_models", "type": "derivative"},
		{"source": "semi_supervised_learning", "target": "low_density_separation", "type": "derivative"},
		{"source": "semi_supervised_learning", "target": "gan", "type": "derivative"},
		{"source": "low_density_separation", "target": "transductive_svm", "type": "derivative"},
		{"source": "reinforcement_learning", "target": "evo_strategies", "type": "derivative"},
		{"source": "reinforcement_learning", "target": "markov_model", "type": "derivative"},
		{"source": "markov_model", "target": "markov_decision_processes", "type": "derivative"},
		{"source": "rec_neural_nets", "target": "clock_rnn", "type": "derivative"},
		{"source": "rec_neural_nets", "target": "gru", "type": "derivative"},
		{"source": "rec_neural_nets", "target": "neural_programmer", "type": "derivative"},
		{"source": "rec_neural_nets", "target": "diff_neural_comp", "type": "derivative"},
		{"source": "rec_neural_nets", "target": "neural_turing", "type": "derivative"},
		{"source": "rec_neural_nets", "target": "lstm", "type": "derivative"},
		{"source": "rec_neural_nets", "target": "act_rnn", "type": "derivative"}
	],
	"nodes": [
		{
			"id": "machine_learning",
			"name": "Machine Learning",
			"description": "Machine learning is the process of utilizing statistical models to learn from past data in order to provide clarity for new data. When doing machine learning, you need data. And often, you need a lot of data. Machine learning is deeply coupled with statistics, so to understand ML you need to understand what a statistical model does. Essentially, it takes past data and, based on the structure of that data, makes assumptions on similar data. For example, in predicting stock prices, the model may take in information such as the past prices, volumes, and other technical indicators. It uses this information to make guesses about the data. Depending on what you're trying to achieve, you can have the mode try to guess the future price, try to figure out whether some event caused a market panic, or find what kinds of data are related to each other. However, you have to be careful. As with anything in statistics, you have to be thorough in your methods. Results are not always as they seem!",
			"when": {
					"description": "These are general guidelines, but if you find any of these apply to your problem, machine learning may be helpful in finding a solution.",
					"cases": ["You have complex data", "You want to find patterns in your data", "You want to predict events", "You have lots of existing data", "You want to evolve your product to become better over time", "You've already sold your soul to statistics"]
				},
			"how": {
				"description": "Machine learning is done by optimizing a function that you specify to \"fit\" past data well, usually an error function. For example, you could say \"I want to predict house prices\" and train a model with historical data to try to make the predicted price as close as possible to the historical data's actual price. It does the hard work of finding the parameters that optimize the function for you! But be careful. Problems arise when the wrong model is chosen, bad data is used, the results are interpreted incorrectly, or the function is not fully optimized (this happens more often than you might think!).",
				"steps": ["Define your problem. Think of a very specific question you want to answer.", "Get the data relevant to finding that answer. Tons of it.", "Get more data.", "Clean your data. Figure out what parts are important. Umbrellas sold in NYC don't predict Moscow's daily temperature. (TODO: verify this)", "Decide which model / algorithm to use. Hint: this map will help!", "Pick your framework of choice.", "Build and train your model. If you do it right, you should have to wait a while for the training to finish.", "Test the results. Does it predict well? Is your data still nonsense? If not, use your knowledge gained and go back to step 1. Either way, you've now done machine learning!"]
			},
			"tools": {
				"description": "These are some of the most popular general machine learning tools.",
				"links": [
					{
						"name": "Scikit-Learn",
						"link": "http://scikit-learn.org/stable/",
						"description": "A popular open source Python ML library"
					},
					{
						"name": "mlpack",
						"link": "http://www.mlpack.org/",
						"description": "A C++ ML library focused on performance"
					},
					{
						"name": "Apache Spark MLLib",
						"link": "https://spark.apache.org/mllib/",
						"description": "Apache's ML library for Spark"
					},
					{
						"name": "Google Cloud ML",
						"link": "https://cloud.google.com/products/machine-learning/",
						"description": "Google's ML platform"
					},
					{
						"name": "Azure ML Studio",
						"link": "https://studio.azureml.net/",
						"description": "Microsoft's ML platform"
					},
					{
						"name": "Amazon ML",
						"link": "https://aws.amazon.com/machine-learning/",
						"description": "Amazon's ML platform"
					}
				]
			},
			"links": {
				"description": "Here are some of the best general machine learning tutorials I've come across.",
				"links": [
					{
						"name": "Coursera: Stanford Machine Learning",
						"link": "https://www.coursera.org/learn/machine-learning",
						"description": "This course by Andrew Ng is perfect for machine learning beginners - it covers the topics, math, and motivations for machine learning"
					},
					{
						"name": "TopTal Machine Learning Primer",
						"link": "https://www.toptal.com/machine-learning/machine-learning-theory-an-introductory-primer",
						"description": "This is a great introductory tutorial with an excellent example"
					},
					{
						"name": "Machine Learning Mastery",
						"link": "http://machinelearningmastery.com/start-here/#getstarted",
						"description": "This is one of my favorite blogs. This post is geared towards those just getting started"
					}
				]
			},
			"keywords": ["machine learning", "ai", "general", "predict", "classify", "reinforce", "improve", "data"]
		},
		{
			"id": "supervised_learning",
			"name": "Supervised Learning",
			"description": "Supervised learning is achieved by building a learning model and training the algorithm on labeled data points. Supervised learning can be broken down into two classes: prediction and classification. Both of these require that the algorithm knows something about what patterns the data holds so that it can predict or classify new examples properly. Therefore, we need what is called \"labeled\" data. This means that along with past examples' features, we also have what we as humans would consider the correct answer. Then, we feed these example + answer pairs into our algorithm to try to learn some way to represent this data in a way that it can then predict or classify new examples using this representation. This is called \"training\" the model. Supervised learning then, is any machine learning algorithm that uses labeled data to make guesses about new examples!",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Supervised_learning",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "neural_nets",
			"name": "Neural Networks",
			"description": "Artificial neural networks are systems modeled after how our brain works; data is sent between neurons to come to a single conclusion. Neural networks are great for highly complex problems, such as image processing. They can also be leveraged to process traditionally difficult data, such as sequential data. It's important to note that \"neural network\" is an umbrella term, and that there are many different types of NNs with infinite ways to arrange them. Each neural network architecture, or topology, is engineered to work well for a specific type of data. For example, RNNs have a unique architecture that makes them very efficient at modeling sequential data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Artificial_neural_network",
						"description": ""
					},
					{
						"name": "Neural Network Zoo",
						"link": "http://www.asimovinstitute.org/neural-network-zoo/",
						"description": "This website visualizes common types of neural networks"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "convo_neural_nets",
			"name": "CNN",
			"description": "A Convolutional Neural Network (CNN) is the favored type of model for image recognition. It essentially has two sections of layers: the first section contains convolutional and pooling layers that try to \"encode\" the input, and the second section that uses fully connected layers to try to learn a good representation of the encoded input. If this sounds convoluted, that's because it is.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Convolutional_neural_network",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "rec_neural_nets",
			"name": "RNN",
			"description": "Recurrent Neural Networks are designed to be useful for sequential data, making them very popular in natural language tasks, like NLP or handwriting / speech recognition. The way this is achieved is by adding feedback loops to all of the neurons in the hidden layers. This means the output of a neuron can feed back into itself. So how does this help us represent abritrary length sequences? Well, the feedback loop can be thought of as a way for the neuron to \"remember\" the data it processed in the past. If the neuron is trained to remember multiple states back, then a potentially infinite long sequence can be modeled! But this is hard. How does the neuron get trained in this way? We run into a problem where the neuron may forget past data, because it gets muddled with all of the previous data. After all, when it's training, it doesn't know whether the most important stage is 5 or 5,000 examples in the past. This is called the \"vanishing gradient\" problem. Despite this, RNNs are great for learning sequential data if they are engineered correctly. One thing to note is that the order in which the training data is fed into the model matters. Because RNNs look for sequential data, it wouldn't make sense to jumble up the sequences during training. For example, think about handwriting recognition; if you fed in the training data backwards (the reverse of your handwriting), it wouldn't be able to predict how you your normal writing!",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Recurrent_neural_network",
						"description": ""
					},
					{
						"name": "WILDML Blog",
						"link": "http://www.wildml.com/2015/09/recurrent-neural-networks-tutorial-part-1-introduction-to-rnns/",
						"description": "This is a more technical introduction to RNNs"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "lstm",
			"name": "LSTM",
			"description": "A long short-term memory network is an improved type of RNN that uses a \"memory cell\" in each neuron in its hidden layers to keep track of past information. Recall that RNNs are used primarily to model sequential data. One of the biggest problems with traditional RNNs is that long-term sequences are difficult to model. This is called the vanishing gradient problem, so named because the reason long sequences cannot be effectively modeled is that as we get further along in a sequence in the input data, weights will tend towards 0 and never cause the neuron's state to change. LSTMs solve this issue with allowing the cells to decide what information it holds onto over time. Each neuron's memory cell (usually) has three gates: input, forget, and output. The input gate allows new information to update the cell's memory, the forget gate determines which information the cell should throw away, and the output gate decides what information gets sent out from the current node. The neat thing about LSTMs is that these gates also learn what information to keep and let go over time! Not only does the LSTM configure its network weights dynamically, but it tries to remember the right information. This is extremely useful, and allows these types of networks to reach much better results for long-term sequential data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Understanding LSTM Networks",
						"link": "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
						"description": "Christopher Olah provides a great explanation of LSTMs on his blog"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "gru",
			"name": "GRU",
			"description": "A Gated Recurrent Unit is a derivative of the LSTM network model with performance improvements. While it uses the same idea of using a memory cell with gates to manage the flow of information in and out of each hidden layer neuron, except it only has two gates: reset and update. The reset gate determines how much information is allowed into the memory cell, and the update gate chooses how much memory needs to be retained.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Gated_recurrent_unit",
						"description": ""
					},
					{
						"name": "Towards Data Science",
						"link": "https://towardsdatascience.com/understanding-gru-networks-2ef37df6c9be",
						"description": "This blog post provides a more technical background on GRUs"
					},
					{
						"name": "Colah's Blog",
						"link": "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
						"description": "This post from Christopher Olah has a section that explains GRUs in the context of LSTM networks"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "neural_turing",
			"name": "Neural Turing Machine",
			"description": "Neural Turing Machines are a type of RNN that allows every hidden layer neuron to access information from the same memory bank. The model is named for Alan Turing's computational model, which is to this day a critical piece of work in the computer science field.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Neural_Turing_machine",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "diff_neural_comp",
			"name": "Differentiable Neural Computer",
			"description": "A differentiable neural computer is an extension of neural turing machines, in that both have an external 'memory' that they are able to access, but it's able to store complex data structures as well. When trained, representations of more complex data structures begin to appear, allowing complex data to be modeled more efficiently than using normal external memory gates. Like earlier approaches, this memory can also be kept as long as needed, making DNCs well-suited for sequential data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "DeepMind: Differentiable Neural Computers",
						"link": "https://deepmind.com/blog/differentiable-neural-computers/",
						"description": "DeepMind's blog covers their experience with DNCs"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "clock_rnn",
			"name": "Clockwork RNN",
			"description": "The Clockwork RNN is an adaptation of basic RNN models that focuses on reducing model complexity and improving memory. The LSTM model was developed to improve memory in traditional RNNs for long sequences in data, but LSTM is computationally expensive. The clockwork RNN improves upon LSTM models by simplifying the memory architecture without affecting performance. In fact, as posited by the initial paper, clockwork RNNs score much better on time series prediction tasks than LSTMs. The clockwork RNN groups hidden layer neurons into \"modules\" that work at different \"speeds,\" which affect how fast the computations are performed and changes to the neuron state is propagated.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ArXiv Paper",
						"link": "https://arxiv.org/pdf/1402.3511v1.pdf",
						"description": "This paper from the folks at the Swiss AI lab IDSIA describes the method in full"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "act_rnn",
			"name": "Adaptive Computation Time RNN",
			"description": "The ACT algorithm is a modification on traditional RNN architectures that allows the model to view each sample multiple times. This allows the neural net to learn how many times it needs to view each example to predict it correctly - instead of requiring a large amount of the same symbols over and over, ACT optimizes this by intelligently choosing which examples to review. When we study for exams, we don't repeat flashcards or problems we can solve with ease; similarly, ACT only repeats ones that it sruggles with identifying until the probability of correct classification is high enough.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ArXiv Paper",
						"link": "https://arxiv.org/abs/1803.08165",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "neural_programmer",
			"name": "Neural Programmer",
			"description": "A Neural Programmer is a neural network with some added built-in functionality, namely arithmetic and logic. Humans learn arithmetic and logic quickly, but neural networks don't have this innate ability. The Neural Programer determines when to use these operations by inferring them from the training samples, and can chain together these operations to achieve a high accuracy for some problems.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ArXiv Paper",
						"link": "https://arxiv.org/abs/1511.04834",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "gan",
			"name": "GAN",
			"description": "A Generative Adversarial Network (GAN) is a type of semi-supervised neural network that, in a very general way, attempts to perform a variation of the Turing Test to optimize itself. It does this by training two networks at the same time: a generator, and a discriminator.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Generative_adversarial_network",
						"description": ""
					},
					{
						"name": "Skymind",
						"link": "https://skymind.ai/wiki/generative-adversarial-network-gan",
						"description": "This wiki post explains GANs with a more technical approach"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "perceptron",
			"name": "FFNN / Perceptron",
			"description": "Perceptrons are an essential concept for neural networks. The earliest artificial neural networks were simply multi-layer perceptrons. While the more recently invented network topologies are used more commonly these days, there are still uses for simple feed-forward networks.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Towards Data Science",
						"link": "https://towardsdatascience.com/what-the-hell-is-perceptron-626217814f53",
						"description": "This blog post covers the basics of perceptrons"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "autoencoder",
			"name": "Autoencoder",
			"description": "Autoencoders are a type of unsupervised neural network built for the purpose of simplifying an input into a more meaningful representation. The input layer is essentially \"compressed\" in the middle layers by forming a \"funnel\" with the network model; the hidden layers have fewer neurons than the input and output layers. The model is different than most neural networks, since its unsupervised. The goal of the network is to find a good representation of the input for other supervised methods, not do any predictions itself, so the output layer is actually the same size as the input layer. The network attempts to reconstruct the input layer in the output layer, but since the hidden layers have fewer neurons, some information is lost. This forces the model to only store the most essential attributes for representing the input in the hidden layers, and this more compact representation can be fed into other supervised algorithms to (hopefully) boost efficiency. The concept is similar to dimensionality reduction, where the input is reduced to ignore features that have offer little to the predictive power of the model. In the case of autoencoders, however, important aspects of a dimension may be kept, while part of the dimension may be discarded.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Autoencoder",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "stacked_autoencoders",
			"name": "Stacked Autoencoders",
			"description": "Some neural network architectures may benefit by using autoencoders in middle layers to reduce the \"representation\" of the data into a compressed form. Stacked autoencoders are just this: neural networks with sparse autoencoder layers embedded as a hidden layer.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "UFLDL Wiki",
						"link": "http://ufldl.stanford.edu/wiki/index.php/Stacked_Autoencoders",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "svm",
			"name": "Support Vector Machines",
			"description": "SVMs are classifiers that distinguish between groups using a \"maximum-margin hyperplane,\" which you can think of as a line separating examples from a dataset that is as wide as possible. By finding the widest line separating examples between the two classes, we assume this division is the best classification. SVMs are typically used as binary classifiers, though there are modified algorithms that can be used for multi-class classification. While typically SVMs are used for linear classification, you can map their inputs into high-dimensional feature spaces and then using a linear classifier in this high-dimensional feature space. This is called the \"kernel trick.\"",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Support_vector_machine",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "nonlinear_svm",
			"name": "Non-Linear SVM",
			"description": "A non-linear SVM is simply an SVM that uses the kernel trick to classify datasets that aren't linearly separable. If you wish to use an SVM on a dataset best fit using, say, a quadratic function, then you'll need to use a proper kernel function (also known as a \"Mercer kernel\") to map the data to a high-dimensional feature space in which you can linearly separate the data. Note that there are a limited number of kernel functions which can be used, as they must satisfy a few conditions in order to be viable. Most machine learning libraries support non-linear SVMs and provide these kernel functions for use.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Stanford NLP Lab",
						"link": "https://nlp.stanford.edu/IR-book/html/htmledition/nonlinear-svms-1.html",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "linear_svm",
			"name": "Linear SVM",
			"description": "A linear SVM is a traditional SVM that is able to classify datasets that are linearly separable. The SVM operates by finding two parallel planes (in 2D, these are lines) that successfully separate the data and calculating the distance between these two planes. The distance is called the margin, as it represents the margin between the two datasets. The SVM then attempts to find the two planes which result in the largest margin, indicating the largest distance between the datasets given any two planes.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Machine Learning Mastery",
						"link": "https://machinelearningmastery.com/support-vector-machines-for-machine-learning/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "naive_bayes",
			"name": "Naive Bayes",
			"description": "Naive Bayes is a classifier based on statistics calculated on the existing dataset. It's friendly to high-dimensional data, and can be applied to both numeric and non-numeric data (though the latter is more common). Depending on the type of classifier used (there are typically three types: Gaussian, Bernoulli, and Multinomial), the exact statistics and formulas are used. In a Gaussian Naive Bayes classifier, the probabilities for a new sample are provided in terms of \"probability that new sample is class X\" and \"ratio of all samples that are class X to all samples.\" From this, we multiply both probabilities to find the \"prior probability\" for each class, which is used to classify the new sample. Because samples are classified based on a combination of past classification ratios and an analysis of \"samples like it,\" it is well-suited for realtime classification.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Statsoft",
						"link": "http://www.statsoft.com/textbook/naive-bayes-classifier",
						"description": ""
					},
					{
						"name": "Dr. GP Pulipaka Medium Post",
						"link": "https://medium.com/@gp_pulipaka/applying-gaussian-na%C3%AFve-bayes-classifier-in-python-part-one-9f82aa8d9ec4",
						"description": "This blog post series goes over the basics of implementing Naive Bayes in Python"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "regressions",
			"name": "Regressions",
			"description": "A regression is a measure of the relationship between a dependent variable (in machine learning, this is the class or Y) and one or more independent variables (the features). There are multiple ways to perform regression, but the goal is always to find some mathematical representation of this relationship. You can think of it as an \"approximation line\" that could be straight, curved, or all manners of misshapen as long as it is mathematically representable.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Investopedia",
						"link": "https://www.investopedia.com/terms/r/regression.asp",
						"description": "This Investopedia post is aimed towards financial analysts but effectively covers the basics"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "log_regression",
			"name": "Logistic Regression",
			"description": "A logistic regression is a type of regression that maps the input data to a certain class, typically 0 or 1. It uses the logit function, which outputs a number within [0, 1] that can be interpreted as the probability of that prediction being correct. You can use logistic regression with two classes, called binary logistic regression, three or more categories without ordering, called multinomial logistic regression, or three or more classes with ordering, called ordinal logistic regression.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Towards Data Science",
						"link": "https://towardsdatascience.com/logistic-regression-detailed-overview-46c4da4303bc",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "multi_linear_regression",
			"name": "Multiple Linear Regression",
			"description": "A multiple linear regression is a type of linear regression with multiple features. That's it - if you have more than one feature, then a linear regression is called a multiple linear regression. It can be used for prediction, but also for determining which features are most important. If your dataset is properly scaled to the number of features you have (typically recommended to be at least 10-20 times larger) then you can inspect the weights on each feature after training to answer the question \"what is the best predictor of Y?\"",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Statsoft",
						"link": "http://www.statsoft.com/Textbook/Multiple-Regression",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "linear_regressions",
			"name": "Linear Regressions",
			"description": "A linear regression is a type of regression that maps the input data to a number. Linear regression is among the most widely used statistical techniques, as it's extremely simple but works in many scenarios. For example, in predicting the price of vegatables sold by the pound at your nearest market, a linear regression performs perfectly: there is one feature, vegetable weight, that has a linear (straight line) correlation with the price you'll pay.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Penn State STAT 501 Tutorial",
						"link": "https://onlinecourses.science.psu.edu/stat501/node/251/",
						"description": "This tutorial covers the basics of linear regression"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "simple_linear_regression",
			"name": "Simple Linear Regression",
			"description": "A simple linear regression is a type of linear regression where there are only two variables: the independent variable (X) and the dependent variable (Y). It can be visualized as a 2D scatter plot where you attempt to fit the data by drawing a straight line through it.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Penn State STAT 501 Tutorial",
						"link": "https://onlinecourses.science.psu.edu/stat501/node/251/",
						"description": "This tutorial covers the basics of linear regression"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "curvilinear_regression",
			"name": "Curvilinear Regression",
			"description": "A curvilinear regression is a type of regression that produces a curved line to fit the data. There are multiple equations for curved lines, such as exponential, power, logarithmic, trigonometric, and more. You can use similar, though slightly modified, equations to vanilla linear regression to fit these curved lines to the dataset.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Handbook of Biological Statistics",
						"link": "http://www.biostathandbook.com/curvilinearregression.html",
						"description": "This post describes when and how to use curvilinear regression"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "poly_regression",
			"name": "Polynomial Regression",
			"description": "Polynomial regression is a popular type of curivilinear regression. Polynomial regression is similar to multilinear regression except that instead of each weight being linear, they can also be exponential. In the case where only one independent variable is used, you simply add more weight terms increasing in power until you achieve satisfactory accuracy or give up. While you could theoretically form any curve from a polynomial regression, it's rare to find high-exponent weights, particularly for datasets with high dimensionality, since it becomes much more computationally expensive with every added feature or exponent.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Polynomial_regression",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "markov_chains",
			"name": "Markov Chains",
			"description": "Markov chains are a process which can be though of as a chain of states. Each state has a few arrows going to other states, each one with a probability that indicates how likely it is for that arrow to be crossed (that is, how likely it is for the process to move from the first state to the next one along that arrow). Markov chains, and in fact any Markov process, follow the Markov property, which states that the next state a process will enter *only* depends on the current state. While Markov chains themselves aren't particularly useful for machine learning, the Markov property is fundamental to some concepts within the space. Additionally, Markov chains are useful for modeling random processes and serve as an excellent tool for introductory modeling.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Towards Data Science",
						"link": "https://towardsdatascience.com/introduction-to-markov-chains-50da3645a50d",
						"description": ""
					},
					{
						"name": "Markov Property Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Markov_property",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "markov_model",
			"name": "Markov Model",
			"description": "Markov models are stochastic models used to model randomly changing systems. Any system modeled by a Markov model follows the Markov property, which states that the next state a process will enter *only* depends on the current state. Markov models are used in some machine learning models where it's important to assume that only the current state is important in predicting the next state.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Markov_model",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "hidden_markov_model",
			"name": "Hidden Markov Model",
			"description": "Hidden markov models are Markov chains in which the state is partially observable and thus can only be imprecisely determined. This is useful for some models, such as in speech signal classification where signals (voice data) are complex but can be decoded in a Markov chain by determining the most likely \"path\" through the model in terms of a sequence of words.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Hidden_Markov_model",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "unsupervised_learning",
			"name": "Unsupervised Learning",
			"description": "Unsupervised learning is a field in machine learning where the data has no labels - only independent variables. Given a dataset with only descriptive variables, unsupervised models attempt infer patterns on this dataset - that is, infer the dependent variables with no prior examples of labels. A common task is clustering, which is used to partition the data into reasonable groups or classes.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Unsupervised_learning",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "semi_supervised_learning",
			"name": "Semi-Supervised Learning",
			"description": "Semi-supervised learning is a field that utilizes models capable of combining both labeled and unlabeled data. Typically, these models are supervised models that perform well with unlabeled data. However, there are also some models that fall into neither supervised nor unsupervised learning that may be described as semi-supervised, such as generative adversarial models.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Semi-supervised_learning",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "reinforcement_learning",
			"name": "Reinforcement Learning",
			"description": "Reinforcement learning is a field with an entirely different problem statement than supervised and unsupervised methods. In reinforcement learning, you have agents, actions, an environment, and a reward function. Agents live in an environment (state space) that can perform a certain set of actions and must use these actions to progress to a state in their environment that maximizes their cumulative reward. For example, in video games you have a character (agent), some controls (actions), a level or playing field (environment), and a reward function (points, gold, or a goal: win).",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Reinforcement_learning",
						"description": ""
					},
					{
						"name": "Reinforcement Learning Warehouse",
						"link": "http://reinforcementlearning.ai-depot.com/",
						"description": "This website hosts many tutorials on various reinforcement learning concepts"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "anomaly_detection",
			"name": "Anomaly Detection",
			"description": "Anomaly detection is the field focused on detecting outliers in a dataset. When data has a certain pattern to it, such as bank users making payments on a regular basis, outliers can be detected by identifying abnormal behavior in the dataset.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Anomaly_detection",
						"description": ""
					},
					{
						"name": "Srinath Perera WordPress",
						"link": "https://iwringer.wordpress.com/2015/11/17/anomaly-detection-concepts-and-techniques/",
						"description": "This blog post lists a few techniques for anomaly detection"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "dimen_reduction",
			"name": "Dimensionality Reduction",
			"description": "Machine learning constantly deals with very high-dimensional data, sometimes having tens of thousands (or more!) dimensions. While having large amounts of multi-faceted data is helpful, it also has its drawbacks. The \"curse of dimensionality\" is a real problem in the field, describing the issues that start to arise when using machine learning to wield high-dimensional data. To combat these problems, there are methods to reduce the dimensionality of the data. In the same way that we can compress a file to save space, we can compress our data to save statistical power. However, we can't \"compress\" our data too much, or we may start to lose important information regarding our dataset, damaging our ability to obtain accurate results. There exist many algorithms for reducing the dimensionality of data, each with their own spot on the balance between compression and relevant information retention.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Dimensionality_reduction",
						"description": ""
					},
					{
						"name": "Analytics Vidhya",
						"link": "https://www.analyticsvidhya.com/blog/2015/07/dimension-reduction-methods/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "structured_prediction",
			"name": "Structured Prediction",
			"description": "Structured prediction, or structured prediction, is a general term for classification or regression with an interpretable structure or framework. One of the complaints of machine learning, specifically with neural networks, is that we 'don't know what they're doing.' Structured learning is accomplished by using models that tell us what they're doing, such as decision trees. If a classification can be made by saying 'if this variable is less than 10, this sample is this class, otherwise it's the other class,' then structured prediction may not only be viable, but more helpful for researchers to use and understand.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "PyStruct",
						"link": "https://pystruct.github.io/intro.html",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "decision_trees_cart",
			"name": "Decision Trees (CART)",
			"description": "Decision trees are used to organize your thoughts based on the decisions you make. For example, your tree can help guide your decision process in deciding what kind of clothes to wear in the morning. If it's sunny, you might wear sunglasses. We can apply this structure to classic regressions by forming two kinds of trees: classification and regression trees. In classification trees, leaf nodes are class labels and each branch is a linear combination of some features. For example, leaf A might represent \"I will wear jeans today\" while leaf B represents \"I will wear shorts today.\" Only one of these decisions can be made, making this a classification problem. Regression trees are trees where the leaves are calculated with weights. Using the same labels as the last example, leaf A might have a value of 100 while leaf B has a value of 20, and this can be considered a \"decision\" weighted more heavily towards leaf A; that is, you are more likely to wear jeans today than shorts. Decision trees are a great tool for visualizing these processes, as its structure lends is very intuitive to humans.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Decision_tree",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "classification_trees",
			"name": "Classification Trees",
			"description": "Classification Trees are a type of decision tree that can be thought of as \"making a decision\" to classify something. Let's say you wanted to determine whether an image was of a cat or dog. As a human, we look for distinctive features like snouts, ear shape, size, color, etc. Classification trees do the same thing, but are formed via statistical methods. It will try to find its own representation of the possible classes by making \"decisions\" on the classes you feed it. Remember that leaf nodes in a decision tree indicate the \"output\" of the algorithm. That means that in classification trees, the leaf nodes are classes. Internal nodes are conditions like \"is there a snout\", and as we move down the tree we may even be able to understand the \"state\" of the node as a more general understanding of the classes! For example, if we fed our cat vs. dog classificatier a picture of a car, it might create a tree with the first decision as \"does it have wheels?\" Then, whichever nodes are linked to from the \"No\" branch of this decision may indicate \"animals\" as a more general class!",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "MIT OpenCourseWare",
						"link": "https://ocw.mit.edu/courses/sloan-school-of-management/15-062-data-mining-spring-2003/lecture-notes/L3ClassTrees.pdf",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "regression_trees",
			"name": "Regression Trees",
			"description": "Regression trees are decision trees that can take and operate on continuous dependent variables. In cases where the output of the decision tree should be a continuous variable instead of a class, you'll want to use regression trees.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "CMU CS 36-350 Data Mining",
						"link": "http://www.stat.cmu.edu/~cshalizi/350-2006/lecture-10.pdf",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "ensemble_methods",
			"name": "Ensemble Methods",
			"description": "Ensemble methods are techniques that generate multiple independent models and combine them after they are individually trained to improve performance. Ensembles are especially useful for models prone to overfitting or focusing on outliers, as it aggregates the models. This reduces reliance on any particular pattern unless it's relevant across a large subset of the individual models, which is likely what we'd hope to occur.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "TopTal",
						"link": "https://www.toptal.com/machine-learning/ensemble-methods-machine-learning",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "boosted_trees",
			"name": "Boosted Trees",
			"description": "Gradient boosted trees are decision trees or decision forests to which gradient boosting is applied. Gradient boosting can be thought of as an optimization of the cost function such that gradients are more likely to point in the negative direction. When applied to individual decision trees, the quality of fit of each model is improved. This causes boosted trees to perform similar to decision forests, in that abnormalities are smoothed out; with decision forests, this is done through aggregation, while for boosted trees this is done on the individual model.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Gradient Boosting Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Gradient_boosting",
						"description": ""
					},
					{
						"name": "Ben Gorman Kaggle Blog Post",
						"link": "http://blog.kaggle.com/2017/01/23/a-kaggle-master-explains-gradient-boosting/",
						"description": "This blog post goes in depth on the history, motivations, and techniques of gradient boosting"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "rotation_forest",
			"name": "Rotation Forest",
			"description": "Rotation forests are a special type of decision forest intended to better represent feature diversity. Before training, the data is separated into subsets and Principal Component Analysis (PCA) is applied to each subset. The principal components are then used to train a tree with the entire dataset. Once all decision trees have been trained with the whole dataset (using only their respective principal components), they are aggregated.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "IEEE",
						"link": "https://ieeexplore.ieee.org/document/1677518/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "boot_aggregated",
			"name": "Bootstrap Aggregated",
			"description": "Bootstrap Aggregating, or bagging, is another type of aggregation method commonly appled to decision trees (though it can also be applied to any method). Instead of training multiple decision trees with the entire dataset, as with vanilla decision forests, only a subset of the data is used to train each base classifier (tree). They are then combined to form a forest. The goal of bagging is to better represent feature diversity by randomly sampling the dataset.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Bootstrap_aggregating",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "rand_forest",
			"name": "Random Forest",
			"description": "A random forest is an aggregation method by which decision trees are combined into a single classifier. A single decision tree may be prone to overfitting or being weighted towards certain data abnormalities, but a random forest mitigates these issues by combining multiple classifiers in the hope that the ensemble will better represent the data's true nature and \"smooth\" out the abnormalities.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Random_forest",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "boost_algos",
			"name": "Boosting Algorithms",
			"description": "Boosting algorithms are a set of algorithms used to improve or correct the output of a model by focusing on the learning aspect. Similar to how humans will focus on learning more difficult concepts by consulting different sources to find one that makes sense, boosting algorithms employ \"weak learners\" to fill holes in the learning process.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Machine Learning Mastery",
						"link": "https://machinelearningmastery.com/gentle-introduction-gradient-boosting-algorithm-machine-learning/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "grad_boost",
			"name": "Gradient Boosting",
			"description": "Gradient boosting is a technique used to optimize the loss function of a model to support weak learners in optimizing the entire classification or regression problem. We can use gradient descent to minimize or reduce the loss instead of minimize a set of parameters (such as coefficients in regression). To do this, we create \"weak learners\" that can be added to the model to correct or improve output.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Gradient_boosting",
						"description": ""
					},
					{
						"name": "Ben Gorman Kaggle Blog Post",
						"link": "http://blog.kaggle.com/2017/01/23/a-kaggle-master-explains-gradient-boosting/",
						"description": "This blog post goes in depth on the history, motivations, and techniques of gradient boosting"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "adaboost",
			"name": "AdaBoost",
			"description": "",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/AdaBoost",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "feature_bagging",
			"name": "Feature Bagging",
			"description": "Feature bagging, also known as the random subspace method, is an ensemble method that improves feature diversity and reduces correlation between features (which is a common cause of skewed models and overfitting) by training a model on a random subset of the data. For example, in a decision forest, trees may be trained on different subsets of the data and then combined to create a more holistic and generalizable model.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Random_subspace_method",
						"description": ""
					},
					{
						"name": "UMass Amherst Paper",
						"link": "https://people.cs.umass.edu/~mccallum/papers/ir402bags.pdf",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "score_norma",
			"name": "Score Normalization",
			"description": "Score normalization, or feature normalization, is a type of data preprocessing where each feature is reduced to a similar normalized scale, commonly [0, 1]. This allows some models to perform better by aligning the probability distributions of the features.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Normalization_(statistics)",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "static_rules",
			"name": "Static Rules",
			"description": "In anomaly detection, sometimes static rules can be used which work fairly well. These don't utilize any particular statistical or machine learning models, though they have be informed by some preliminary exploratory analysis. For example, in attempting to identify fraudulent bank transactions, a static rule could be \"if a transaction is 10x the past transactions' average, mark as fraudulent\".",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Srinath Perera WordPress",
						"link": "https://iwringer.wordpress.com/2015/11/17/anomaly-detection-concepts-and-techniques/",
						"description": "This blog post lists a few techniques for anomaly detection, including a section for static rules"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "fuzzy_outlier_detection",
			"name": "Fuzzy-Logic-Based Outlier Detection",
			"description": "When data is slightly more complex but still reaosnably calculated using basic statistical methods, sometimes basic models that utilize fuzzy logic can be used. These types of models involve calculating statistics on what the distribution of trained samples looks like and determining if a new sample doesn't \"match\" that distribution. For example, if a point has 60% of its features with values that lie outside a comfortable standard deviation, then it may be considered an anomaly.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ResearchGate Paper",
						"link": "https://www.researchgate.net/publication/221173855_A_fuzzy_logic-based_method_for_outliers_detection",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "cluster_analysis_outlier_detection",
			"name": "Cluster-Analysis-Based Outlier Detection",
			"description": "Similar to fuzzy logic based models, cluster analysis based models calculate certain prior indicators that form a more robust distribution of the past data using clustering methods. In cluster based methods, typically a cluster (or multiple clusters) of normal vs. abnormal samples will be generated. Future samples will be evaluated against these clusters and labeled appropriately.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Semantic Scholar Paper",
						"link": "https://pdfs.semanticscholar.org/76fa/097495eddd1881892beadfc36d9cfba834e6.pdf",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "replicator_nn",
			"name": "Replicator NN",
			"description": "A replicator neural network operates similarly to an autoencoder, in that it attempts to compress the representation of a dataset then reconstruct it. However, replicator neural networks compress the data into different classes that can be thought of as clusters. Because of this, replicator neural networks can be considered a type of cluster analysis-based anomaly detector.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Data Science Stack Exchange Question: RepNN vs. Autoencoder",
						"link": "https://datascience.stackexchange.com/questions/12219/difference-replicator-neural-network-vs-autoencoder",
						"description": "This question and the accompanying answers contrast RepNNs from autoencoders and highlight key characteristics of RepNNs"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "single_svm",
			"name": "Single Class SVM",
			"description": "A single class SVM is a type of SVM that learns a decision function for anomaly detection using modified SVM methods. Instead of using the SVM algorithms to classify data into two or more classes, they are used to determine whether a sample is an anomaly or not.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "sklearn Documentation",
						"link": "http://scikit-learn.org/stable/auto_examples/svm/plot_oneclass.html",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "subspace_correlation",
			"name": "Subspace-Based / Correlation-Based",
			"description": "Subspace correlation is a clustering technique used to assign data points to clusters within subspaces of the feature set. When attempting to cluster data points, irrelevant dimensions often obfuscate the clusters. Techniques in this field tend to eliminate unnecessary dimensions and cluster only on useful axes.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ACM Digital Library Paper",
						"link": "https://dl.acm.org/citation.cfm?id=2339588",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "density_techniques",
			"name": "Density-Based Techniques",
			"description": "Density based clustering techniques rely on the density of existing clusters to identify new members. In contrast to centroid-based clusters, which have no concept of density and thus assign all points to some cluster, it's possible for an outlier to be classified as such and not belong to any cluster. This allows clusters to more accurately represent their data, is the cluster's boundaries are unaffected by outliers.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Domino Lab Blog",
						"link": "https://blog.dominodatalab.com/topology-and-density-based-clustering/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "knn",
			"name": "K-Nearest Neighbor",
			"description": "K-Nearest Neighbor is a popular density-based clustering algorithm. When a new sample is to be classified into a cluster, it evaluates how many of its k nearest neighbors belong to each cluster in the analysis, and is classified in the one to which the most of its neighbors belong.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "local_outlier",
			"name": "Local Outlier Factor",
			"description": "Local Outlier Factor (LOF) is a density-based clustering algorithm that operates by measuring how \"deviant\" a point is from its neighbors. It uses measures of both local density (how dense a cluster in a particular region is) as well as the sample's distance from that cluster. In areas where a cluster is particularly dense, a data point must be relatively close in order to be classified as part of that cluster. If a cluster is sparse in a different area, that same distance from before may be short enough in this region to be considered part of that cluster.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Local_outlier_factor",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "high_correlation",
			"name": "High Correlation Filter",
			"description": "A correlation filter is used to remove \"redundant\" features, where features are highly correlated and thus carry similar information about data points. The correlation coefficient is calculated across all feature pairs, and features for which a high correlation coefficient is observed may be reduced to a single feature.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "KNIME Blog",
						"link": "https://www.knime.com/blog/seven-techniques-for-data-dimensionality-reduction",
						"description": "This blog post covers several approaches for dimensionality reduction, including high correlation filters"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "backward_feature",
			"name": "Backward Feature Elimination",
			"description": "In backward feature elimination, we attempt to model the data with less features by classifying the data with a classifier at the start. We then remove one feature and attempt to re-classify, repeating this for all features. We then remove the \"least useful\" feature and repeat the process. Each time, we would ideally remove the \"least informative\" feature.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "KNIME Blog",
						"link": "https://www.knime.com/blog/seven-techniques-for-data-dimensionality-reduction",
						"description": "This blog post covers several approaches for dimensionality reduction, including backward feature elimination"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "forward_feat_selection",
			"name": "Forward Feature Selection / Construction",
			"description": "In forward feature construction, we attempt to model the data with less features by \"reconstructing\" the feature set one feature at a time. We start with zero features, then add the feature that adds the most information (corresponding to an increase in classifier performance) to the data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "KNIME Blog",
						"link": "https://www.knime.com/blog/seven-techniques-for-data-dimensionality-reduction",
						"description": "This blog post covers several approaches for dimensionality reduction, including forward feature selection"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "nmf",
			"name": "NMF",
			"description": "Non-negative matrix factorization is a technique by which a matrix V, which represents the dataset, is factored into two other matrices: W and H. There are several algorithms used to accomplish this with varying considerations and restrictions. The NMF method can be used to cluster the data by observing that the row of H that a data point corresponds in which the value is positive indicates which cluster it belongs to. The clusters represent the approximate partitioning that is achieved by minimizing the error function.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Non-negative_matrix_factorization",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "pca",
			"name": "Principal Component Analysis",
			"description": "Principal Component Analysis, or PCA, is a method that attempts to compress the dimensionality of a dataset. While PCA causes a dataset to lose interpretability and granularity, it allows for the dataset to be modeled more effectively under certain circumstances. A principal component is a feature, and the \"first\" principal component is the feature for which all data points have the largest variance (this feature has the most \"descriptive power,\" since removing it would make points seem more similar). Further principal components can be calculated by finding the feature with the next highest variance that is uncorrelated (orthogonal) to the previous component(s). This allows for the removal of \"redundant\" features, which reduces the dimensionality of the data while maintaining the maximum representative power after the compression.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Principal_component_analysis",
						"description": ""
					},
					{
						"name": "Setosa",
						"link": "http://setosa.io/ev/principal-component-analysis/",
						"description": "This blog post explains and visualizes the implementation of PCA"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "graph_kernel_pca",
			"name": "Graph-Based Kernel PCA",
			"description": "A graph-based kernel PCA is a specific type of kernel PCA where, instead of using a fixed kernel, the algorithm attempts to learn the kernel using semidefinite programming.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "StartupCTO Blog",
						"link": "https://startupcto.io/dimensionality-reduction-graph-based-kernel-pca/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "kernel_pca",
			"name": "Kernel PCA",
			"description": "Kernel PCA is a subset of PCA methods where kernel methods are used to optimize the operation. It allows for the application of PCA to nonlinear datasets.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Kernel_principal_component_analysis",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "rand_projections",
			"name": "Random Projections",
			"description": "A projection of a dataset can be made to reduce its dimensionality by projecting its feature space onto a smaller one. There are techniques to compute and apply different projections, such as using a Guassian random matrix vs. a sparse random matrix.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "sklearn Documentation",
						"link": "http://scikit-learn.org/stable/modules/random_projection.html",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "corr_analysis",
			"name": "Correspondence Analysis",
			"description": "Correspondence analysis, or reciprocal averaging, is similar to principal component analysis, except that it applies to categorical data while PCA applies to continuous data. It's a visualization technique that helps to interpret results by preparing the data for analyzing multiple properties of the data and applying them to different types of graphical representations, such as contingency tables.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Correspondence_analysis",
						"description": ""
					},
					{
						"name": "Statsoft",
						"link": "http://www.statsoft.com/Textbook/Correspondence-Analysis",
						"description": ""
					},
					{
						"name": "The Mathematica Journal",
						"link": "http://www.mathematica-journal.com/2010/09/an-introduction-to-correspondence-analysis/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "clustering",
			"name": "Clustering",
			"description": "Clustering is a technique used to partition data points into distinct groups, called clusters, based on some identifiable patterns in the data. There are several ways to find these patterns and form these partitions that operate effectively on differently structured datasets.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Clustering",
						"link": "https://en.wikipedia.org/wiki/Cluster_analysis",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "tsne",
			"name": "t-SNE",
			"description": "t-distributed stochastic neighbor embedding, or t-SNE, is a visualization algorithm suitable for high-dimensional data. As we can only meaningfully interpret graphical representations of up to 3 spatial dimensions, t-SNE attempts to compress a dataset into only a few dimensions and plot this on a 2D or 3D scatter plot. It attempts to cluster points based on similarity while reducing the dimensionality, allowing the visualization to be easily interpreted.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "decision_trees_ensembles",
			"name": "Decision Tree Ensembles",
			"description": "Groups of decision trees (also called forests) oftentimes classify or regress data with more accuracy than a single tree (base classifier). This is due to the fact that single decision trees are prone to overfitting and accompanying outliers when they shouldn't. Be combining multiple base classifiers, we're able to \"smooth\" out these impurities and obtain a more accurate model.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Towards Data Science",
						"link": "https://towardsdatascience.com/decision-tree-ensembles-bagging-and-boosting-266a8ba60fd9",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "chisquare",
			"name": "Chi-square / Information Gain",
			"description": "The Chi Square test is an indicator of co-occurrence between a feature and the various classes that occur in the dependent variable. When selecting features, we want to find features with a strong relationship towards the dependent variable. The Chi Square score evaluates this relationship by measuring the occurrences of a specific feature against which class the sample is provided. This can be used to then select the features with the most co-occurrences and reduce dimensionality by eliminating those with an unfavorable Chi Square score.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Learn for Master",
						"link": "http://www.learn4master.com/machine-learning/chi-square-test-for-feature-selection",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "multidimen_scaling",
			"name": "Multidimensional Scaling",
			"description": "Multidimesional scaling, also know in its classical form as Principal Coordinates Analysis (PCoA), is a general approach towards scaling a high-dimensional dataset into a specified lower number of dimensions. Each data point is scaled from its location in the full-dataset hyperspace into a hyperspace with less dimensions, reducing dimensionality while (ideally) retaining as much information descriptivity as possible.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Multidimensional_scaling",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "low_var_filter",
			"name": "Low Variance Filter",
			"description": "A variance filter reduces the dimensionality of data by eliminating feature pairs that have a sufficiently low variance between them. Features pairs' variance scores are calculated, and pairs with a score below a specified threshold are combined, as they do not provide enough descriptive power towards a dataset.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "KNIME Blog",
						"link": "https://www.knime.com/blog/seven-techniques-for-data-dimensionality-reduction",
						"description": "This blog post covers several approaches for dimensionality reduction, including low variance filters"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "missing_values",
			"name": "Missing Values Ratio",
			"description": "Features with many missing values don't provide much descriptive towards a dataset and may even negatively impact results. Removing features with too many missing or invalid values among the dataset will reduce dimensionality and possibly improve accuracy.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "KNIME Blog",
						"link": "https://www.knime.com/blog/seven-techniques-for-data-dimensionality-reduction",
						"description": "This blog post covers several approaches for dimensionality reduction, including missing value ratios"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "bayesian_models",
			"name": "Bayesian Models",
			"description": "A Bayesian model, or a probabilistic directed acyclic graphical model, is a graphical model that represents a set of variables and their conditional dependencies using a directed acyclic graph (DAG). These models are used to represent the relationship between variables (whether they are causes, effects, or both).",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Bayesian_network",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "factor_analysis",
			"name": "Factor Analysis",
			"description": "Factor analysis techniques describe variability in observed, correlated variables in terms of a few unobserved variables called factors. These \"latent\" variables may be affected by transformations to the observed variables in predictable ways, which allows the construction of a potentially smaller set of variables through which the dataset can be better represented. The observed variables are represented as linear combinations of these hidden, latent variables with added error terms.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Factor_analysis",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "efa",
			"name": "Exploratory Factor Analysis",
			"description": "Exploratory factor analysis (EFA) techniques are used to identify complex relationships among observed variables by constructing a set of latent variables that can be used to construct the dataset.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Exploratory_factor_analysis",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "cfa",
			"name": "Confirmatory Factor Analysis",
			"description": "Confirmatory factor analysis (CFA) techniques are used to test whether the latent variables found during an exploratory analysis comply with hypotheses about the data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Confirmatory_factor_analysis",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "latent_var_models",
			"name": "Latent Variable Models",
			"description": "A latent variable model is a representation of a dataset that utilizes latent variables to describe the features present in the dataset. These unobserved latent variables can be thought of as building blocks for more complex features, which may be features in the dataset. For example, if feature X and feature Y can be predicted using one latent variable with different weights, then the entire dataset can be described using a single latent variable. With high-dimensional data, it is common to observe that the full dataset can be described using only a few latent variables. These latent variables can then be used in classifiers to improve speed and sometimes even performance.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Latent_variable_model",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "blind_signal",
			"name": "Blind Signal Separation",
			"description": "Blind signal separation, also known as blind source separation, is a set of problems focused on taking a combined input of two or more sources and classifying which source each one is derived from. For example, in speech analysis, a common problem is to identify which person a specific sentence originated from. Blind signal separation is a field of models dedicated towards extracting this information.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Blind_signal_separation",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "svd",
			"name": "SVD",
			"description": "Singular value decomposition is a matrix operation used to extract the singular values from a matrix. Singular values can be useful in further analysis and preprocessing, such as for dimensionality reduction. For example, the singular value decomposition provides the necessary elements of a dataset to determine what the most important features are, and how removing a specific feature will impact the descriptivity of a dataset.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Machine Learning Mastery",
						"link": "https://machinelearningmastery.com/singular-value-decomposition-for-machine-learning/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "ica",
			"name": "ICA",
			"description": "Independent component analysis is subset of blind signal separation. It's an approach for separating a multivariate signal into additive subcomponents. To do this, the signals are assumed to be non-Gaussian and statistically independent. From there, algorithms attempt to minimize mutual information (between the signals) and maximize the non-Gaussianity.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Independent_component_analysis",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "ssa",
			"name": "SSA",
			"description": "Singular spectrum analysis is the process of separating a time series into a sum of additive components. These algorithms utilize singular value decomposition applies to covariance matrices.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Singular_spectrum_analysis",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "meth_moments",
			"name": "Method of Moments",
			"description": "The method of moments is a technique used to estimate population parameters such as the mean or standard deviation. For example, the first moment is the sample mean - this can be used as a very basic estimator. The second moment is the variance. These and higher moments can be used as latent variables.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Statistics How To",
						"link": "http://www.statisticshowto.com/method-moments/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "exp_max_algo",
			"name": "Expectation-Maximization Algorithm",
			"description": "The expectation-maximization (EP) algorithm is used to find parameter estimations from a statistical model that can be used to determine the distribution of latent variables. The algorithm alternates between expectation (E) steps and maximization (M) steps to find these estimates.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "self_organ_maps",
			"name": "Self-Organizing Maps",
			"description": "A self-organizing map is a type of neural network used to produce a low-dimensional representation of the dataset called a map. They employ competitive learning instead of error-correction learning.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Self-organizing_map",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "adapt_reson_theory",
			"name": "Adaptive Resonance Theory",
			"description": "Adaptive resonance theory, inspired by how the human brain processes information, is a framework to describe how artificial neural networks address problems such as pattern recognition and prediction. The idea is that the brain processes these problems using both top-down observations and bottom-up sensory information, arriving at a satisfactory result somewhere in the middle of this abstract hierarchy.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Adaptive_resonance_theory",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "hierarch_clustering",
			"name": "Hierarchical Clustering",
			"description": "Hierarchical clustering is a clustering algorithm that initially treats all samples as either one or N (where N is the number of total data points) clusters and either merging or separating these clusters, respectively, to find the optimal representation. This allows the user to identify which clusters were formed in order, allowing a \"hierarchy\" of clusters based on their relative descriptivity to be developed and observed.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Displayr Blog",
						"link": "https://www.displayr.com/what-is-hierarchical-clustering/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "agglomerative",
			"name": "Agglomerative",
			"description": "Agglomerative clustering is a set of hierarchical clustering algorithms that operate by treating each data point as a separate cluster then combining the two most similar clusters. When the user-specified number of clusters is reached, the algorithm finishes.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "sklearn Documentation",
						"link": "http://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "divisive",
			"name": "Divisive",
			"description": "Agglomerative clustering is a set of hierarchical clustering algorithms that operate by treating the entire dataset as a single cluster then dividing the cluster until it reaches a user-specified number of clusters. When the user-specified number of clusters is reached, the algorithm finishes.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Stanford NLP",
						"link": "https://nlp.stanford.edu/IR-book/html/htmledition/divisive-clustering-1.html",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "centroid_clustering",
			"name": "Centroid-Based Clustering",
			"description": "Centroid-based clustering techniques are clustering algorithms that utilize the notion of a centroid, which can be described as the center of mass of a set of data points. Throughout the application of the algorithm, the centroid of each cluster is evaluated and used to determine membership of new, unclustered data points.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "IJCSIT Paper",
						"link": "http://ijcsit.com/docs/Volume%205/vol5issue06/ijcsit2014050688.pdf",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "kmeans_clustering",
			"name": "k-means Clustering",
			"description": "k-means clustering is a popular centroid-based clustering technique that adds new data points into clusters with the nearest mean before reevaluating the mean of that cluster.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/K-means_clustering",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "kmedians_clustering",
			"name": "k-medians Clustering",
			"description": "k-medians clustering is a popular centroid-based clustering technique that adds new data points into clusters with the nearest median before reevaluating the median of that cluster.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/K-medians_clustering",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "kmeans++_clustering",
			"name": "k-means++ Clustering",
			"description": "The k-means++ algorithm is used to determine the initial data points to use as clusters for the k-means algorithm. Since the k-means algorithm is sensitive to its initial conditions, k-means++ attempts to optimize these initial parameters to improve the clustering performance.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/K-means%2B%2B",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "fuzzy_cmeans_clustering",
			"name": "Fuzzy c-means Clustering",
			"description": "Fuzzy c-means clustering is a clustering technique in which each data point can belong to several clusters. It's similar to the k-means clustering algorithm, in that you specify a number of clusters to partition the dataset into. However, in fuzzy c-means clustering, you assign coefficients randomly to each data point, then run a centroid-based clustering algorithm and compute coefficients of membership for each cluster, essentially representing the relative likelihood of the data point belonging to each cluster.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Fuzzy_clustering",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "distri_clustering",
			"name": "Distribution-Based Clustering",
			"description": "Distribution based clustering models defines clusters as groups of data points most likely belonging to the same distribution. Then, random data points can be sampled and assigned to the cluster with the most relevant distribution.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Cluster_analysis#Distribution-based_clustering",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "gauss_mixture",
			"name": "Gaussian Mixture Models",
			"description": "Generally, mixture models are probabilistic models used to represent the presence of subpopulations within a population. A Gaussian mixture model assumes this population follows a Gaussian, or normal, distribution. A Gaussian mixture model, then, attempts to infer the properties of the subpopulations (clusters) given only observations on the pooled population with the assumption that the population observes a Gaussian distribution.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Mixture_model#Gaussian_mixture_model",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "density_clustering",
			"name": "Density-Based Clustering",
			"description": "Density-based clustering techniques are clustering algorithms that utilize the density of subpopulations, or clusters, to evaluate membership of a newly observed datapoint. Throughout the application of the algorithm, the density of either the entire cluster or a local region within that cluster will be evaluated and compared against the distance of the new data point with the relevant cluster or subcluster to determine membership.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ArcGIS Pro Reference",
						"link": "https://pro.arcgis.com/en/pro-app/tool-reference/spatial-statistics/how-density-based-clustering-works.htm",
						"description": "While this reference is focused on the ArcGIS software suite, it explains the basic idea behind density-based clustering"
					}
				]
			},
			"keywords": []
		},
		{
			"id": "dbscan",
			"name": "DBSCAN",
			"description": "Density-based spatial clustering of applications with noise (DBSCAN) is a popular density-based clustering algorithm that groups together points that are densely packed together and marks outliers in sparse regions.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/DBSCAN",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "optics",
			"name": "OPTICS",
			"description": "Ordering points to identify the clustering structure (OPTICS) is a density-based clustering algorithm similar to DBSCAN. It contrasts with DBSCAN in that it's able to handle a dataset with regions of varying density, as variable density may simply be a data collection or sampling issue instead of representing an inherent density variability in the data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/OPTICS_algorithm",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "preclustering",
			"name": "Pre-Clustering",
			"description": "Pre-clustering techniques are algorithms that preprocess or prepare a dataset to optimize the clustering algorithms applied on it.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ACM Digital Library Paper",
						"link": "https://dl.acm.org/citation.cfm?id=1015349",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "canopy_clustering",
			"name": "Canopy Clustering",
			"description": "The canopy clustering algorithm is a pre-clustering algorithm used commonly to prepare a dataset for the k-means or hierarchical clustering methods. It improves the speed of the clustering algorithms on large datasets.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Canopy_clustering_algorithm",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "corr_clustering",
			"name": "Correlation Clustering",
			"description": "Correlation clustering methods are a set of clustering methods that operate on a dataset where the relationships between data points are known beforehand. These techniques optimize to maximize cluster similarity or minimize cluster dissimilarity.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Correlation_clustering",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "subspace_clustering",
			"name": "Subspace Clustering",
			"description": "Subspace clustering techniques reduce the data into a smaller subspace in order to find more effective and computationally feasible clusters. High-dimensional data may lose granularity when projected onto low-dimensional spaces, but clusters are sometimes better identified and calculated on these less descriptive subspaces.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Clustering_high-dimensional_data#Subspace_clustering",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "clique",
			"name": "CLIQUE",
			"description": "Clustering in Quest (CLIQUE) is a density-based subspace clustering algorithm that discretizes the data space through a grid and estimates the density of each cluster by counting the number of points in each grid cell.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "UIUC Data Mining Coursera Video",
						"link": "https://www.coursera.org/lecture/cluster-analysis/5-6-clique-grid-based-subspace-clustering-AAHTA?siteID=eyzsD2QGsYg-Aw15w9vIwA8uyOdTvsSnjA&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=eyzsD2QGsYg&siteID=eyzsD2QGsYg-m1o_uMKcdw0sSP8TI35_VA&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=eyzsD2QGsYg",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "subclu",
			"name": "SUBCLU",
			"description": "SUBCLU is a density-based subspace clustering algorithm that improves on the work of DBSCAN by allowing the identification of clusters in axis-parallel subspaces using a bottom-up, greedy strategy to remain efficient.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/SUBCLU",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "graph_methods",
			"name": "Graph-Based Methods",
			"description": "Graph-based clustering methods utilize information gained from a dataset using graph theory concepts, such as cliques, clusters, subnetworks, centrality, outliers, etc. to efficiently cluster datasets.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Erik Kropat SlideShare",
						"link": "https://www.slideshare.net/ssakpi/graph-based-clustering",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "generative_models",
			"name": "Generative Models",
			"description": "A generative model in machine learning is a model tasked with reconstructing the dataset to a level of accuracy by which its able to generate entirely new data points with the same variations as the original dataset. Generative models are often combined with discriminative models to form a \"competitive\" model that attempts to learn how to properly classify and generate data points from the original data set at the same time.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Generative_model",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "low_density_separation",
			"name": "Low-Density Separation",
			"description": "Low-density separation is a technique that applies a SVM to better separate data by forcing the SVM to create its decision boundary in regions of low density, as determined by clustering methods. This allows for an effective decision boundary to be found in high-dimensional data while remaining computationally feasible.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "ResearchGate Paper",
						"link": "https://www.researchgate.net/publication/41781362_Semi-Supervised_Classification_by_Low_Density_Separation",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "transductive_svm",
			"name": "Transductive SVM",
			"description": "A transductive SVM is a modified type of SVM that is able to handle and classify unlabeled data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "CalculatedContent Blog",
						"link": "https://calculatedcontent.com/2014/09/23/machine-learning-with-missing-labels-transductive-svms/",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "evo_strategies",
			"name": "Evolution Strategies",
			"description": "Evolution strategies are optimization techniques based on the concepts from natural evolution. Common in reinforcement learning, these techniques allow algorithms to develop over time to adapt either the model or classifier to the data.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Evolution_strategy",
						"description": ""
					}
				]
			},
			"keywords": []
		},
		{
			"id": "markov_decision_processes",
			"name": "Markov Decision Processes",
			"description": "A Markov decision process is a discrete time stochastic control process. In a situation where outcomes are partly random and partly the effect of some decision maker, they provide a mathematical framework for modeling decision making. They can aid in studying optimization problems and are an important concept in reinforcement learning.",
			"when": {
					"description": "",
					"cases": []
			},
			"how": {
				"description": "",
				"steps": []
			},
			"tools": {
				"description": "",
				"links": []
			},
			"links": {
				"description": "",
				"links": [
					{
						"name": "Wikipedia",
						"link": "https://en.wikipedia.org/wiki/Markov_decision_process",
						"description": ""
					}
				]
			},
			"keywords": []
		}
	]
}
