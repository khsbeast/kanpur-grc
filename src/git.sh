git add *
echo Hi what would you like to name this commit : 
read message
git commit -m $message
git push origin master
