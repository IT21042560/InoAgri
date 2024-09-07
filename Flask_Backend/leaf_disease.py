import joblib
from matplotlib.pyplot import imread
from matplotlib.pyplot import imshow
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.imagenet_utils import decode_predictions
from tensorflow.keras.applications.imagenet_utils import preprocess_input
import numpy as np

def predict_disease(image_path):
    # Define the file path to your .pkl file
    file_path = 'model_efficientOrginal.pkl'

    # Load the model
    model = joblib.load(file_path)

    img_path = image_path

    img = image.load_img(img_path, target_size=(224, 224))  # Load image with color channels
    x = image.img_to_array(img)  # Convert to numpy array
    x = np.expand_dims(x, axis=0)  # Add batch dimension
    x = preprocess_input(x)  # Preprocess the input

    print('Input image shape:', x.shape)

    preds=model.predict(x)
    return preds