import requests
import csv

url = 'https://apicolors.fmunoz.cl/colores/'
counter=0

with open('./colors.csv', 'r', newline='') as csvfile:
    read_csv = csv.reader(csvfile, delimiter=',')
    for row in read_csv:
        if not counter:
            counter += 1
            continue

        payload = {
            "name": row[1],
            "year": row[2],
            "color": row[3],
            "pantoneValue": row[4]
        }

        response = requests.post(url, json=payload )
        print(response.json())