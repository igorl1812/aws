#!/usr/bin/env bash

# Usage:
# 	./git_move.sh git@repo_site.com:/my_repo.git origin/folder/path/ /destination/repo/path/ new/folder/path/
#       $git_move.sh https://github.com/NagaKakkera/VenuRep.git 18FAGILEPROTOTYPE/ development/src
 
repo=$1
dest_repo=$2
dest_folder=$3
clone_folder='18FAGILEPROTOTYPE'
 
echo 'cloning repo...'
 
#clone repo
git clone $repo $clone_folder
 
#move to new folder and get path for later
cd $clone_folder
 
#get old branch with no trailing slash
old_branch_path=`pwd | sed "s,/$,,"`
 
echo 'filtering branch...'
echo $old_branch_path
 
#removes everything but the folder we need
#git filter-branch --subdirectory-filter $folder -- -- all
git filter-branch -f --prune-empty --tree-filter -- --all	
 
echo 'making destination folder...'
 
#make destination folder recursive
base=''
base_dest=''
count=0
IFS='/' read -ra ADDR <<< "$dest_folder"
for i in "${ADDR[@]}"; do 
	if ["$count" == "0"]
	then
		base_dest=$i
	fi
	count=$(($count+1))
   	base=$base''$i'/'
	mkdir $base
done
 
echo 'moving files into destination folder in old repo...'
echo $dest_folder
 
#move all one by one or it complains
for file in `ls`; do
	#move it all
	if [[ "$file" != "$base_dest" ]]
	then
		git mv $file $dest_folder
	fi
done
 
#commit to make the history work
git commit -m "moved from another rep"
 
#move to destination _repo_ folder
cd $dest_repo
 
 
echo 'adding local remote to new repo...'
 
git remote add _repo_2 $old_branch_path
 
#fetch the remote source, create a branch and merge it with the destination repository in usual way
git fetch _repo_2
git branch _repo_2 remotes/_repo_2/master
git merge _repo_2
git push _repo_2 master
 
echo 'removing remote and dummy branch...'
 
#git remote rm _repo_2
git branch -d _repo_2
 
echo 'cleaning up temp repo...'
 
chmod 0777 $old_branch_path
#rm -r -f $old_branch_path
 
echo 'Done. Remeber to commit and push the changes to the destination branch.'