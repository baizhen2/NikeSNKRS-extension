# NikeSNKRS extension

A chrome extension that makes it easier to enter multiple accounts on NikeSNKRS releases on desktop

- Supports nike account detail login 
- Supports IP authentication and Username:Password Proxies 
- Automatically generates "prefill" link


## Installation

 - Click Code > Download ZIP > Create a folder on your PC > Extract All Files to that folder

 - Navigate to [chrome://extensions/](chrome://extensions/) 

 - Enable Developer mode in the top right corner > Load unpacked > select folder with the files downloaded


## Buttons!
**Save** - Saves all of the text filled into the text fields

**Reload/Load** - Fills the text fields with previously saved information 

**Login** - Uses the account information saved to login onto the Nike website 

**Prefill** - Redirects to product link prefill URL

## What is PreFilling? 
A product link does not go live until 10AM EST during release dates 

With only 2-3 minutes to enter the raffle, it is tough to get many entries especially if you have to fill in unique information for every different account

With a PreFill link, you have access to the popup you would normally see when entering at 10 AM

Having this link where you can have all your information ready makes it much easier to submit bulk entries when the clock hits 10

## Best Usage 

- Click on the extension and fill in your information 
- Make sure to hit **save** afterwards, if the text disappears it means it has been saved 
- If you have saved a proxy at this point, extension is now operating through that proxy
- The **login** button will redirect you to Nike's website and start the login process 

**Release Day**
- Before saving a product link, hit **Reload** to bring up all of the information, then change the product link and **Save**
- The **PreFill** button will now redirect you to the product's "Prefill" page. See [What is PreFilling?](what-is-prefilling?)
- Fill in your information until you reach the submit button
- Submit when the clock turns past 10AM EST 
-  ** **Note** ** Submitting early will not do anything and may result in Nike flagging the account/information
- ** **Recommended** ** Start this process 45 minutes before the release to avoid Nike server errors

**Multiple Entries** 

- Do this with more chrome users to enter more accounts
- Use unique information, different address, different card numbers, different proxy IPs etc...
- Use ISP datacenter proxies instead of residential proxies, residental proxies are much too slow  

## Final Thoughts/Improvements 
I started this project without any knowledge of chrome extensions or Javascript, but with the help of google I have gotten this far. :smiley:

Getting past Nike anti-bot is hard, there's also the added worry of how Nike filters entries as well as the time and money invested in buying nike accounts, getting different card numbers and addresses. 

The initial goal of this project was to build a chrome extension to modify the IP of a selenium browser to, you guessed it, get more Nike entries, but I wanted to pursue something different that I haven't done before hence, a full chrome extension. There are benefits to having a standalone chrome user using this extension and using a fully automated selenium browser. 

One of these benefits is Nike tracker cookies. I am by no means a professional in cybersecurity but I am confident that using older generated cookies makes you look more like a human rather than a bot. Using any other kind of browser automation may get you silently flagged and result in 0 raffle wins. 

That being said, this extension is a glorified autofill, and I do not know if Nike tracks that, or tracks the way I'm logging in or how I enter the raffle. 

At the end of the day, getting more entries in a raffle increases your chances of winning, unfortunately that still could mean you never win simply because luck does not favor you :anguished:

10/10 would write this code again. It was fun :smiley:
## License
[MIT](https://choosealicense.com/licenses/mit/)
