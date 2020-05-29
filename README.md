Install dependencies

npm install
____________________________________________

Run all tests

npm test
_ _ _ _ _ _ _ _ _ _ _ _ _ 

Choose group of tests by adding options to "npm test" script:

-run The Internet blackbox tests

-- --group=internet
_ _ _ _ _ _ _ _ _ _ _ _ _ 

-run search test suit

-- --group=search
_ _ _ _ _ _ _ _ _ _ _ _ _ 

-run theme test suit

-- --group=theme
_ _ _ _ _ _ _ _ _ _ _ _ _ 

-run snapshot tests

-- --group=snap
_ _ _ _ _ _ _ _ _ _ _ _ _

-run end-to-end ru search test

-- --group=search_ru_e2e
_ _ _ _ _ _ _ _ _ _ _ _ _

-run end-to-end best scipop article test

-- --group=scipop_e2e
________________________________________________


Run The Internet blackbox tests

npm run test_internet
__________________________________________________


Habr tests:

-run typical test suits

npm run test_habr_suits
_ _ _ _ _ _ _ _ _ _ _ _ _ 

-run snapshot tests

npm run test_habr_snap
_ _ _ _ _ _ _ _ _ _ _ _ _

-run end-to-end tests

npm run test_habr_e2e
_ _ _ _ _ _ _ _ _ _ _ _ _