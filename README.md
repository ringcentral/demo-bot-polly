# A demo polly bot

This is a simple RingCentral bot add-in based on [https://github.com/ringcentral/ringcentral-chatbot-core](https://github.com/ringcentral/ringcentral-chatbot-core)

## Quick start


First, need create a AWS account, we will use free AWS dynamodb, and put your aws credentials in `~/.aws/credentials`, check [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

Let's start this simple chatbot app.


```bash
# get the code
git clone git@github.com:ringcentral/demo-bot-poly.git
cd ringcentral-personal-chatbot-js

# install dependecies
npm i

# start proxy server, this will make your local bot server can be accessed by RingCentral service
npm run ngrok

# will show
Forwarding                    https://xxxx.ap.ngrok.io -> localhost:6066
# Remember the https://xxxx.ap.ngrok.io, we will use it later
```

Login to [developer.ringcentral.com](https://developer.ringcentral.com/) and create Web-based App:

- Application Type: Bot Add-in
- Platform Type: Browser-based
- Carrier: accept the default values
- Permissions Needed: Edit Extensions, Glip, Read Accounts, Team Messaging, Webhook SubscriptionsInfo, Read Contacts, Read Presence, Webhook Subscriptions
- Set OAuth Redirect URI: Using your ngrok HTTPS URL from above, enter in the following value: `https://xxxx.ap.ngrok.io/rc/oauth`.

```bash
cp .env.sample .env
# then fill all required fields in .env, you can get client ID / secret from app setting

# start bot server
npm start
```

Then Add bot from app->Bot menu, login to [https://app.devtest.ringcentral.com/welcome](https://app.devtest.ringcentral.com/welcome), chat with the bot you added just like a contact.

## License

MIT
