#Description
##Backend
 - Creates a NodeJS server on localhost:3000 that sorts a JSON object

##Frontend
 - Creates an array of random size between 2 and 20 filled with random integers between 0 and 99
 - Converts array to a JSON object
 - Passes JSON object to remote NodeJS server as a param
 - Formats returned data and displays it

#Dependencies
##Backend
 - [NodeJS](https://nodejs.org)
 
##Frontend
 - [Python](https://www.python.org/)
 - Numpy
```shell
pip install scipy
```
 - Requests
```shell
pip install requests
```
Note that in some cases it may be required to run
```shell
sudo -H pip install <package> instead
```
###Or you can simply use whatever you want. The backend expects a JSON object that contains an array of numbers.
#How to use
 - Either clone the repo, or download the zip file.
 - Execute the server by navigating to the backend folder in a terminal and running
```shell
node server.js
```
 - Navigate to the frontend folder in a terminal and run
```shell
python example.py
```
or
```terminal
python3 example.py
```
