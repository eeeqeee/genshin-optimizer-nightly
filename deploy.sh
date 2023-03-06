# Add hash to list
pushd gh-pages
  PREV_HASH=$(tail -n1 "$REMOTE_REF/builds.txt" || true)
  echo "$GIT_HASH" >> "$REMOTE_REF/builds.txt"
  if [[ -n $PREV_HASH ]]; then
    rm "$REMOTE_REF/$PREV_HASH/index.html"
    ln -s "$REMOTE_REF/inner.index.html" "$REMOTE_REF/$PREV_HASH/index.html"
  fi
popd
# Run mk_base.js
pushd main
  node mk_base.js "$REMOTE_REF" "$GIT_HASH" > ../gh-pages/$REMOTE_REF/index.html
popd
# Move to gh-pages
mkdir --parents "gh-pages/$DEPLOY_PATH"
mkdir --parents "gh-pages/$REMOTE_REF/$GIT_HASH/"
rm -rfv "gh-pages/$DEPLOY_PATH" || true
cp "genshin-optimizer/dist/apps/frontend/index.html" "gh-pages/$REMOTE_REF/$GIT_HASH/index.html"
cp -r "genshin-optimizer/dist/apps/frontend" "gh-pages/$DEPLOY_PATH"
rm "gh-pages/$DEPLOY_PATH/index.html"
# Save etag
pushd gh-pages
  mkdir --parents "$REMOTE_REF"
  printf "%s" "$ETAG_TXT" > $REMOTE_REF/etag.txt
# Make commit to deploy
  git config user.name "github-actions[bot]"
  git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
  git add .
  git commit -m "$COMMIT_MSG"
  git push origin gh-pages
popd
