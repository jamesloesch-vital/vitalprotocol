eval $(op signin)

OP_ENV=""

while getopts ":e:" opt; do
  case $opt in
    e)
      OP_ENV=$OPTARG
      echo "Setting up $OP_ENV environment" >&2
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

if [ -z "$OP_ENV" ]; then
  echo "OP_ENV is not set. Use the -e flag to set the environment." >&2
  exit 1
fi

yarn
yarn supabase:types