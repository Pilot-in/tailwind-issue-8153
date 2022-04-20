# tailwind-issue-8153

### To reproduce the issue:
1. Run `npm i` in the folder
  
2. Navigate to the folder `/tmp/build/build_1`  

3. In the folder `build_1`, run this command _(with `$path` = your real path to this repository folder)_:  
`$path/tailwindcss -i tailwind.css -o tailwind.min.css --postcss` _(to use standalone)_  
or even `npx tailwindcss -i tailwind.css -o tailwind.min.css --postcss` _(to use standard CLI)_

4. It should generate the `tailwind.min.css` in the folder `build_1` but   
it will lacks `content` classes in the `safelist.txt` file & even  
ignore `safelist` classes added directly in `tailwind.config.js`  
_(for example: `flex` class is not generated)_
