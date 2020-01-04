import requests
from flask import Flask, render_template, send_file, request
from flask_cors import CORS
import json

import config as creds


def get_token():

	token_url = 'https://auth.emsicloud.com/connect/token'

	client_id = creds.credentials()['username']
	client_secret = creds.credentials()['password']
	scope = 'emsiauth'
	grant = 'client_credentials'
	token_headers = {'content-type': 'application/x-www-form-urlencoded'}

	token_payload = f'grant_type={grant}&client_id={client_id}&client_secret={client_secret}&scope={scope}'

	token_response = requests.request(url=token_url, method='POST', data=token_payload, headers=token_headers)
	token = (token_response.json())['access_token']
	return token

def earnings_request(token):

	regions = [
		{
			'Seattle-Tacoma-Bellevue': ['53033', '53061', '53053']
		},
		{
			'United States': ['0']
		}
	]
	comparison = []
	data = []

	for region in regions:
		occupation_url = 'https://agnitio.emsicloud.com/emsi.us.occupation/latest'
		occupation_payload = {
			"metrics": [
				{
					"name": "Jobs.2019",
					"as": "2019 Jobs"
				},
				{
					"name": "Earnings.Average"
				}
			],
			"constraints": [
				{
					"dimensionName": "Area",
					"map": region
				},
				{
					"dimensionName": "Occupation",
					"map": {
						"Computer Programmers": [
							"15-1131"
						]
					}
				}
			]
		}
		occupation_headers = {

			'content-type': 'application/json',
			'authorization': f'Bearer {token}'
		}

		occupation_response = requests.request(url=occupation_url, method='POST', headers=occupation_headers, json=occupation_payload)
		data_json = occupation_response.json()

		data.append(data_json)

		tmp = {'jobs': data_json['data'][2]['rows'][0], 'earnings': data_json['data'][3]['rows'][0]}
		comparison.append(tmp)
		data.append(tmp)
	return data



def import_json():

	with open('ProjectSampleReponse.json', 'r') as json_file:
		data = json.load(json_file)

	return data

application = Flask(__name__)
cors = CORS(application)

@application.route('/occupational-earnings', methods=['GET'])
def send_earnings():

	return json.dumps(earnings_request(get_token()))


@application.route('/json-file')
def send_json():

	
	return json.dumps(import_json())



if __name__ == '__main__':

    application.run(debug=True)
