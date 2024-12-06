# List submodule changes
for submodule in $(git config --file .gitmodules --get-regexp path | awk '{ print $2 }'); do
    echo "## Changes in $submodule" >> CHANGELOG.md
    git -C $submodule log --oneline --since=last-release-tag >> CHANGELOG.md
done
