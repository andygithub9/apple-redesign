session_id=cs_test_b1A972T9TwZdKodNPLIvhO9R76w2wzYAzlYCSQnn2wMTtCElWYRiq2UFao
http://localhost:3000/success?session_id=cs_test_b1A972T9TwZdKodNPLIvhO9R76w2wzYAzlYCSQnn2wMTtCElWYRiq2UFao

# deploy
## sanity
1. cd to sanity folder
2. execute this command
   ```bash
   sanity deploy
   ```
3. enter your hostname: Studio hostname (<value>.sanity.studio): [your hostname]
4. ignore sanity node_modules folder.
   goto /.gitignore add following code
   ```txt
   /[your sanity folder]/node_modules
   ```

## push to your github
use the way you like to push the project to github

## vercel
1. goto vercel website https://vercel.com/
2. use your github account to login 
3. goto https://vercel.com/dashboard
4. click Add New... -> Project
5. click Continue with GitHub
6. choose the project you wnat to import and click Import botton
7. click Environment Variables dropdown
   add all your key value in .env file to vercel Environment Variables
8. you will see 500 Internal Server Error.
9. goto your vercel dashboard, click your project you just deployed
10. click View Function Logs
11. click Errors button, you will see what's error
    ```bash
    FetchError: request to http://localhost:3000/api/getCategories failed, reason: connect ECONNREFUSED 127.0.0.1:3000
    ```
    because it can't fetch form http://localhost:3000 , 
    we should replace the vercel project Environment Variables from http://localhost:3000 to the domain vercel just give to you
12. go back to project and click Setting tab , click Environment Variables on left tab
13. replace NEXTAUTH_URL and NEXT_PUBLIC_BASE_URL this two Environment Variables
    click ... -> edit replace http://localhost:3000 to your project vercel domain
14. go back to Deployments tab click ... -> Redeploy , and click REDEPLOY
15. goto sanity dashboard click API tab -> click Webhook left teb -> click Add CORS origins -> enter your vercel project url -> select Allow credentials -> click Save
16. goto https://cloud.google.com/ -> click Console at navbar -> click left burger -> click APIs & Services -> 
Credentials -> click OAuth 2.0 Client IDs Names -> Authorized JavaScript origins click ADD URI -> enter your vercel url -> Authorized redirect URIs click ADD URI ->enter [[your vercel url]/api/auth/callback/google] -> click Save