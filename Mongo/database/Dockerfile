FROM mongo

COPY recommendations.csv /recommendations-seed.csv


CMD mongoimport --host mongo --db my_db --collection recommendations --type csv --headerline --file /recommendations.csv


