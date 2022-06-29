from pickle import APPEND
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init DB
db = SQLAlchemy(app)

# Init ma
ma = Marshmallow(app)

# Client Class/Model
class Client(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, unique=True)
    firstName = db.Column(db.String(200))
    lastName = db.Column(db.String(200))
    age = db.Column(db.Integer)
    phoneNumber = db.Column(db.Integer)
    city = db.Column(db.String(20))
    
    def __init__(self, email, firstName, lastName, age, city, phoneNumber):
        self.email = email
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
        self.city = city
        self.phoneNumber = phoneNumber
        
# Client Schema
class ClientSchema(ma.Schema):
    class Meta:
        fields = ("email", 'firstName', 'lastName', 'age', 'city', 'phoneNumber')
    
# Init shema 
clientSchema = ClientSchema()
clientsSchema = ClientSchema(many=True)


# Coordinates Schema
class CoordinatesSchema(ma.Schema):
    class Meta:
        fields = ("_id", 'name', 'longitude', 'latitude')
    
# Init shema 
coordinateSchema = CoordinatesSchema(many=True)

# Map Coordines
class MapCoordinates(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    _id = db.Column(db.Integer, unique=True)
    name= db.Column(db.String)
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)
    
    def __init__(self, _id, name, longitude, latitude):
        self._id = _id
        self.name = name
        self.longitude = longitude
        self.latitude = latitude

@app.route('/clients/create', methods=['POST'])
def createClient():
    email = request.json['email']
    firstName = request.json['firstName']
    lastName = request.json['lastName']
    age = request.json['age']
    phoneNumber = request.json['phoneNumber']
    city = request.json['city']
    
    existe = db.session.query(Client.email) is not None
    if(existe):
        print(db.session.query(Client.email))
        return jsonify({'message': f'Un client de méme email existe déja'}), 400
    
    new_client = Client(email, firstName, lastName, age, phoneNumber, city)
    db.session.add(new_client)
    db.session.commit()
    
    return jsonify({'message': f'Achat confirméé'}), 201

@app.route('/coordinates', methods=['POST'])
def createCoordinates():
    _id = request.json['_id']
    name = request.json['name']
    longitude = request.json['longitude']
    latitude = request.json['latitude']
    
    # existe = db.session.query(MapCoordinates._id) is not None
    # print(existe)
    # if(existe):
    #     print(db.session.query(MapCoordinates._id))
    #     return jsonify({'message': f'des Cordonées de méme _id existe déja'}), 400
    
    new_coordinates = MapCoordinates(_id, name, longitude, latitude)
    db.session.add(new_coordinates)
    db.session.commit()
    
    return jsonify(new_coordinates), 201

@app.route('/coordinates', methods=['GET'])
def getCoordinate():
    # coordinate = MapCoordinates.query.get(_id)
    coordinates= MapCoordinates.query.all()
    # print(coordinate)
    return coordinateSchema.jsonify(coordinates)

@app.route('/clients', methods=['GET'])
def getClients():
    allClients = Client.query.all()
    result = clientsSchema.dump(allClients)
    return jsonify(result)

# Run server
if __name__ == '__main__':
    app.run(debug=True)