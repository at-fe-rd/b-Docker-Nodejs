# Docker Nodejs Boilerplate

- This is a template for Express Nodejs Backend and MongoDB
- A project for Docker, Docker Compose, intergrating Nodejs, MongoDB.
- Clone the project first and try to follow the instruction.
- This project have many new things:
> Nodejs auto reload if they meet an system error so it never die or stop.
> It include a standard structure API with MVC development.
> Easy to validate the request data with Joi package.
> Work well with MongoDB.


=========================

# DOCKER DOCUMENT
> This project was combined by docker-compose. It has 2 main parts: Mongodb and express-server (port 3000). With docker-compose, they can run together by only some command lines.
> You need to check the `.env` files. Try to create if it is not exist with `.env.sample` file.
> After We need to build the images and containers first
```
docker-compose build
```
> After we can run the project by
```
docker-compose up
```
> More command line we need to view
```
docker-compose down `kill container`
docker-compose stop `just stop container`
docker rmi `remove images`
docker rm `remove container`
docker ps `show all containers are running`
docker ps -a `show all containers were stopped`
docker images `show all images`
```
=========================

# NODEJS DOCUMENT
> We work with Js framework ( Express JS) for making web development. 
> Use postman, `get` request to `http://localhost:3000/api` for making sure the server is running. 
> The app will automatically reload if you change any of the source files.
## Gulp serve design
>  We use gulp for making server watch changes. You can learn about gulp in `gulpjs.com`.
## Structure
> The project is devided follow MVC pattern. 


=========================

# MONGODB DOCUMENT
> Mongodb is designed to work with Nodejs. 
> Docker run mongo automatically.

**Bonus**

How to access a container

You wanna access mongodb console

- `docker-compose exec db sh`
- `mongo`
- `use docker`
- `db.users.find()` # Get all user

You wanna access golong container

- `docker-compose exec backend bash`

**Understanding more about Docker**

- https://docs.docker.com/engine/docker-overview/#docker-engine
- https://docs.docker.com/get-started/#containers-vs-virtual-machines

