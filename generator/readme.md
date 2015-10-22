There are three files: stand.json, js-vote.json and ztree.json.

- The generator reads data, zTreeStyle as ztree.json, from `stand_to_ztree.php`
- The generator writes data, standStyle as Style.json, directly
- The js-vote reads data, js-vote Style as js-vote.json, from `stand_to_vote.php`
- There are `ztree_to_ztree.php` and `vote_to_ztree.php`, unused. They are abandoned.

Preparing to use standStyle to save data. Using `stand_to_ztree.php` and `stand_to_vote.php` to read.

Don't ask me why I use three style of json structure. I am out of perversity.
