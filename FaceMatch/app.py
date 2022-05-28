from __future__ import print_function, unicode_literals
from flask import Flask, request, jsonify
from flask_cors import CORS
from facepplib import FacePP, exceptions

# <strong>#Set up Flaskstrong>:
app = Flask(__name__)
# <strong>#Set up Flask to bypass CORSstrong>:
cors = CORS(app)
#Create the receiver API POST endpoint:

face_detection = ""
faceset_initialize = ""
face_search = ""
face_landmarks = ""
dense_facial_landmarks = ""
face_attributes = ""
beauty_score_and_emotion_recognition = ""

@app.route("/receiver", methods=["POST"])
def postME():
   data = request.get_json()
   print(data)
   api_key = 'xQLsTmMyqp1L2MIt7M3l0h-cQiy0Dwhl'
   api_secret = 'TyBSGw8NBEP9Tbhv_JbQM18mIlorY6-D'
   app_ = FacePP(api_key=api_key,
                 api_secret=api_secret)
   funcs = [
      face_detection,
      # face_comparing_localphoto,
      # face_comparing_websitephoto,
      faceset_initialize,
      face_search,
      face_landmarks,
      dense_facial_landmarks,
      face_attributes,
      beauty_score_and_emotion_recognition
   ]
   image1 = data[0]
   image2 = data[1]
   print(face_comparing(app_, image1, image2))

   return jsonify(face_comparing(app_, image1, image2))


def face_comparing(app, Image1, Image2):
   print()
   print('-' * 30)
   print('Comparing Photographs......')
   print('-' * 30)

   cmp_ = app.compare.get(image_url1=Image1,
                          image_url2=Image2)
   print(cmp_.confidence)
   if cmp_.confidence > 70:
      return 0
   else:
      return 1

if __name__ == "_main_":
   app.run(debug=True)