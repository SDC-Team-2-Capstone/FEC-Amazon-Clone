# Front End Capstone - Amazon

A simplified clone of the product page for an Xbox controller on Amazon.

![Feature Gif](./Screenshots/amazonclone.gif)

## Authors

- [Jarrett Guyer](https://github.com/TheJaguyer)

- [Aaron Rybicki](https://github.com/aaonrybicki)

- [Roohullah Mansoor](https://github.com/roymansoor)

- [Kadynce Krank](https://github.com/kadync3)

## Deployment

There are multiple ways to access and deploy this product.

### Access Render Deployment

The database, backend server, and static site are all deployed on render at the following links.

- [Back-End](https://fec-amazon-back-end.onrender.com)
- [Front-End](https://fec-amazon-front-end.onrender.com)

### Run server locally, but access deployed database

In the back-end folder, run this command:

```bash
  npm run local
```

The server will listen on port 8000.

### Run server locally, with local PSQL docker container

In the back-end folder, run this command:

```bash
  npm run dev
```

The server will listen on port 8000, and look for a psql database named 'amazon' at port 5432. You may choose to run the below command to create a docker container with matching information.

```bash
  npm run docker
```

Various migration and seed files are available within back-end/SQLFiles.
