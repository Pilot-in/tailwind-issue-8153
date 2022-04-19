# tailwind-issue-8153

### To reproduce the issue:
1. Run `npm i` in the folder
  
2. Navigate to the folder `/tmp/build/build_1`  

3. In the folder, run this command _(with `$path` = your real path)_:  
`$path/tmp/build/build_1/tailwindcss -i tailwind.css -o tailwind.min.css --postcss`  

4. It should generate the `tailwind.min.css` in the current folder but   
it will lacks `content` classes in the `safelist.txt` file & even  
ignore `safelist` classes added directly in `tailwind.config.js`  
_(for example: `flex` class not generated)_
