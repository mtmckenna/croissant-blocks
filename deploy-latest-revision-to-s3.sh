export AWS_ACCESS_KEY=`cat .aws_secret_key`
ENVIRONMENT=production

ember deploy --environment=$ENVIRONMENT

if [ $? -eq 0 ]
then
  LATEST_REVISION="$(ember deploy:list --environment=$ENVIRONMENT | grep "1)" | awk '{print $2}')"
  ember deploy:activate --revision=$LATEST_REVISION --environment=$ENVIRONMENT
  echo "$(tput setaf 2)Deployed the heck out of the latest revision."
  exit 0
else
  echo "$(tput setaf 1)Something is jacked up with the deploy."
  exit 1
fi

