

rem clean up the npm cache
call npm cache clean --force


rem installing npm packages and yarn
call npm install
call npm install --global yarn

ECHO ============================
ECHO We should now have npm packages installed
ECHO ============================
PAUSE
call yarn add shopify-buy
call yarn add chakra
call yarn add react-icons
call yarn add react-router-dom

ECHO ============================
ECHO We should now have yarn installed
ECHO ============================
PAUSE

rem installing DB server
call npm install mongoose
call npm install dotenv

ECHO ============================
ECHO This should be the completed startup 
ECHO ============================
