## Deploy to AWS S3

## Setup your AWS Account

Create an account, https://portal.aws.amazon.com/billing/signup.

Log in to the AWS console, https://signin.aws.amazon.com/signin

Click Services at the top left and search for IAM.

On the IAM console, we need to create a user with AdministratorAccess

Copy Access Key ID and Secret key

## Create a S3 Bucket

choose s3 bucket service

In proproties tab, choose host static website

type `index.html` in index and error document input

After save properties, you will see the Bucket website endpoint at the bottom of page

`http://your-bucket-name.s3-website-us-east-1.amazonaws.com`

in permissions tab,

tick off Block all public access

and change the policy to the following

`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicReadAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}`



## Intall AWS CLI

`brew install awscli` on macos
`aws configure` 
AWS Access Key ID [None]: XXXX
AWS Secret Access Key [None]: XXXX
Default region name [None]: us-west-1
Default output format [None]: ENTER

## Create a react app or reuse

`npx create-react-app my-app`

add the script to package.json

`"deploy": "npm run build & aws s3 sync build/ s3://your-bucket-name"`

`npm run deploy`
