# base image our image is base on for most recent
# version of PostgreSQL database system
FROM postgres:latest

# copy files from host into the image
ADD /data/1_schema.sql /docker-entrypoint-initdb.d
ADD /data/2_data.sql /docker-entrypoint-initdb.d

# changes directory permissions, a=all, r=read, 
# *=command applied to all files in directory
RUN chmod a+r /docker-entrypoint-initdb.d/*


