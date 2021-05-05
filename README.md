# todo_app - client Application
# todo_server - Server running on the same machine or different machine to maintain persistence ## using fake server
Steps to create a fake server:
# Create a directory in local machine
# use 'npm init -y' command to create a package.json 
# use 'npm i json-server' command to add dependencies to package.json
# create a file or local storage or external database to store the data in the server
# In this project, I have created a file named db.json to persist the data and initialise empty variable to store the data.
For instance, { "todos" : [] }
# In package.json, include the command '"start" : "json-server --watch db.json --port 3000"' in scripts key.
# The above step will tell monitor db.json file which contains data and run it on a different port 3000.
# with the above 2 steps, I can start the server using 'npm start' command which will run the server on port 3000.


